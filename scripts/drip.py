#!/usr/bin/env python3
"""Drip the article queue onto the Astro site's /resources/ collection.

Every run publishes ``per_day * days_since_last_run`` articles (capped by the
queue), converting each queued draft into the Astro content format and making
sure its cover is present in ``public/covers/``.

  queue/queue.json        ordered list of ready targets (priority, then traffic)
  queue/articles/*.md     the scored, ready-to-publish drafts
  queue/covers/*.jpg      their generated covers (falls back to assets/covers/)
  queue/state.json        {"last_run": ISO date|null, "per_day": int, "published": int}

Output: src/content/resources/<slug>.md  +  public/covers/<slug>.jpg
Run by .github/workflows/publish-cadence.yml, which commits, builds and deploys.
"""
from __future__ import annotations

import csv
import datetime as dt
import glob
import json
import os
import re
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from title_case import derive_title  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUEUE_DIR = os.path.join(ROOT, "queue")
QART = os.path.join(QUEUE_DIR, "articles")
QCOV = os.path.join(QUEUE_DIR, "covers")
QJSON = os.path.join(QUEUE_DIR, "queue.json")
STATE = os.path.join(QUEUE_DIR, "state.json")

CONTENT = os.path.join(ROOT, "src", "content", "resources")
COVERS_OUT = os.path.join(ROOT, "public", "covers")
COVERS_FALLBACK = os.path.join(ROOT, "assets", "covers")

# Reconcile + health outputs. ledger/published.csv is the append-only record of
# what the drip has actually published (the local publish-queue.csv keeps only
# generation state, never publish state).
LEDGER_DIR = os.path.join(ROOT, "ledger")
PUBLISHED_LOG = os.path.join(LEDGER_DIR, "published.csv")
HEALTH = os.path.join(QUEUE_DIR, "health.json")
# Cap catch-up so a long dry spell does not dump the whole backlog in one commit.
MAX_CATCHUP_DAYS = int(os.environ.get("DRIP_MAX_CATCHUP_DAYS", "3"))


def fm_get(md: str, key: str) -> str:
    m = re.search(rf'^{key}:\s*"?([^"\n]*)"?\s*$', md, re.M)
    return m.group(1).strip() if m else ""


def slug_of(path: str) -> str:
    return os.path.basename(path)[:-3]


def published_slugs() -> set[str]:
    """Slugs already live in the Astro collection."""
    return {slug_of(p) for p in glob.glob(os.path.join(CONTENT, "*.md"))}


PLAYBOOK_TYPES = {"how-to", "use-case"}


def section_of(slug: str) -> str:
    """Map a draft's content_type to its site section (playbooks | blogs)."""
    src = os.path.join(QART, slug + ".md")
    ct = ""
    if os.path.exists(src):
        with open(src) as fh:
            ct = fm_get(fh.read(), "content_type").lower()
    return "playbooks" if ct in PLAYBOOK_TYPES else "blogs"


def to_astro(src_md: str, slug: str) -> str:
    """Convert a queued draft into an Astro resources entry."""
    m = re.match(r"^---\n([\s\S]*?)\n---\n", src_md)
    fm = m.group(1) if m else ""
    body = src_md[m.end():] if m else src_md
    g = lambda k: fm_get(fm, k)  # noqa: E731

    # Canonical title: never publish the raw keyword as the headline. derive_title
    # is idempotent, so an already-correct title passes through unchanged.
    title = derive_title(g("target_keyword") or g("title") or slug)
    out_fm = "\n".join(
        [
            "---",
            'layout: "use-case"',
            f'title: "{title}"',
            f'description: "{g("description")}"',
            f'slug: "{slug}"',
            f'canonical_url: "/resources/{slug}/"',
            f'date: "{g("date")}"',
            f'tags: {g("tags") or "[]"}',
            f'target_keyword: "{g("target_keyword")}"',
            f'actor_username: "{g("actor_username")}"',
            f'actor_slug: "{g("actor_slug")}"',
            f'actor_url: "{g("actor_url")}"',
            f'persona: "{g("persona")}"',
            f'content_type: "{g("content_type")}"',
            f'neuronwriter_brief_id: "{g("neuronwriter_brief_id")}"',
            f'neuronwriter_score: {g("neuronwriter_score") or 0}',
            'status: "published"',
            "---",
            "",
        ]
    )

    # hub asset paths -> astro public paths
    body = body.replace("(/assets/art/", "(/art/")
    body = body.replace("/assets/covers/", "/covers/")
    # the page template renders the H1 already — drop a duplicated leading one
    body = re.sub(r"^\s*#\s+.+\n+", "", body, count=1)
    return out_fm + body


def pick(queue: list[dict], due: int) -> list[dict]:
    """One article per actor per batch (stagger), balanced across the two
    sections so a day's batch is distributed between /playbooks and /blogs."""
    play = round(due * 0.6)
    quota = {"playbooks": play, "blogs": due - play}
    picks, seen_actor, seen_slug = [], set(), set()

    def take(item: dict) -> None:
        picks.append(item)
        seen_slug.add(item["slug"])
        seen_actor.add(item.get("actor_account", "") + "/" + item.get("actor_slug", ""))

    for item in queue:
        if len(picks) >= due:
            break
        actor = item.get("actor_account", "") + "/" + item.get("actor_slug", "")
        sec = section_of(item["slug"])
        if actor in seen_actor or quota[sec] <= 0:
            continue
        quota[sec] -= 1
        take(item)

    # Fill any remainder (e.g. a section ran short), still one-per-actor.
    for item in queue:
        if len(picks) >= due:
            break
        actor = item.get("actor_account", "") + "/" + item.get("actor_slug", "")
        if item["slug"] in seen_slug or actor in seen_actor:
            continue
        take(item)

    return picks


def append_published_log(live: set[str]) -> int:
    """Record slugs that are live in src/content/resources but not yet in the
    append-only ledger. This is what retires the ambiguous local `scored` status."""
    os.makedirs(LEDGER_DIR, exist_ok=True)
    known: set[str] = set()
    if os.path.exists(PUBLISHED_LOG):
        with open(PUBLISHED_LOG) as f:
            known = {r["slug"] for r in csv.DictReader(f)}
    new = sorted(live - known)
    if not new:
        return 0
    exists = os.path.exists(PUBLISHED_LOG)
    with open(PUBLISHED_LOG, "a", newline="") as f:
        w = csv.writer(f)
        if not exists:
            w.writerow(["slug", "first_seen_live"])
        today = dt.date.today().isoformat()
        for s in new:
            w.writerow([s, today])
    return len(new)


def prune_queue_articles(keep: set[str], live: set[str]) -> int:
    """Remove drafts from queue/articles/ that are already live and no longer queued."""
    if not os.path.isdir(QART):
        return 0
    n = 0
    for p in glob.glob(os.path.join(QART, "*.md")):
        s = slug_of(p)
        if s not in keep and s in live:
            os.remove(p)
            n += 1
    return n


def write_health(state: dict, queue: list[dict], per_day: int, published: int, dry: bool) -> None:
    """Persist a machine-readable health snapshot for the daily health check."""
    os.makedirs(QUEUE_DIR, exist_ok=True)
    runway = round(len(queue) / per_day, 1) if per_day else 0.0
    json.dump(
        {
            "date": dt.date.today().isoformat(),
            "queue_depth": len(queue),
            "per_day": per_day,
            "runway_days": runway,
            "last_run": state.get("last_run"),
            "published_this_run": published,
            "dry": bool(dry),
        },
        open(HEALTH, "w"),
        indent=1,
    )


def main() -> None:
    state = json.load(open(STATE)) if os.path.exists(STATE) else {"last_run": None, "per_day": 5, "published": 0}
    queue = json.load(open(QJSON)) if os.path.exists(QJSON) else []

    # Reconcile: the hub's src/content/resources is the single source of truth for
    # "live". Drop any queued slug that is already live, record newly-live slugs in
    # the append-only ledger, and prune queue/articles/ to match the queue.
    live = published_slugs()
    stale = [q["slug"] for q in queue if q["slug"] in live]
    if stale:
        queue = [q for q in queue if q["slug"] not in live]
        json.dump(queue, open(QJSON, "w"), indent=1)
        print(f"drip: dropped {len(stale)} already-published slugs from queue")
    recorded = append_published_log(live)
    if recorded:
        print(f"drip: recorded {recorded} newly-live slugs in ledger/published.csv")
    pruned = prune_queue_articles({q["slug"] for q in queue}, live)
    if pruned:
        print(f"drip: pruned {pruned} already-live drafts from queue/articles")

    per_day = int(os.environ.get("DRIP_PER_DAY", state.get("per_day", 5)))
    today = dt.date.today()
    last = dt.date.fromisoformat(state["last_run"]) if state.get("last_run") else None
    days = 1 if last is None else (today - last).days
    # Cap catch-up: a long dry spell must not dump the whole backlog in one commit.
    due = min(len(queue), per_day * days, per_day * MAX_CATCHUP_DAYS)

    print(f"drip: per_day={per_day} last_run={state.get('last_run')} days={days} due={due} queue={len(queue)}")

    batch = pick(queue, due) if due > 0 else []
    if not batch:
        write_health(state, queue, per_day, published=0, dry=True)
        print("::warning::drip queue is empty - nothing to publish (see queue/health.json)")
        print("nothing due - exiting")
        return

    os.makedirs(CONTENT, exist_ok=True)
    os.makedirs(COVERS_OUT, exist_ok=True)
    done, covers = set(), 0

    for item in batch:
        slug = item["slug"]
        src = os.path.join(QART, slug + ".md")
        if not os.path.exists(src):
            print(f"  ! missing {slug} - skipping")
            continue
        with open(src) as fh:
            md = to_astro(fh.read(), slug)
        with open(os.path.join(CONTENT, slug + ".md"), "w") as fh:
            fh.write(md)
        done.add(slug)

        dest = os.path.join(COVERS_OUT, slug + ".jpg")
        if not os.path.exists(dest):
            for cand in (os.path.join(QCOV, slug + ".jpg"), os.path.join(COVERS_FALLBACK, slug + ".jpg")):
                if os.path.exists(cand):
                    shutil.copyfile(cand, dest)
                    covers += 1
                    break

    remaining = [q for q in queue if q["slug"] not in done]
    json.dump(remaining, open(QJSON, "w"), indent=1)
    total = state.get("published", 0) + len(done)
    json.dump(
        {"last_run": today.isoformat(), "per_day": per_day, "published": total},
        open(STATE, "w"),
        indent=1,
    )
    write_health({**state, "last_run": today.isoformat()}, remaining, per_day, published=len(done), dry=False)
    print(f"published {len(done)} to /resources/ (covers copied: {covers}): {sorted(done)}")
    print(f"queue remaining: {len(remaining)} - total published: {total}")


if __name__ == "__main__":
    main()
