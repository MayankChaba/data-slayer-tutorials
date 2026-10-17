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

import datetime as dt
import glob
import json
import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUEUE_DIR = os.path.join(ROOT, "queue")
QART = os.path.join(QUEUE_DIR, "articles")
QCOV = os.path.join(QUEUE_DIR, "covers")
QJSON = os.path.join(QUEUE_DIR, "queue.json")
STATE = os.path.join(QUEUE_DIR, "state.json")

CONTENT = os.path.join(ROOT, "src", "content", "resources")
COVERS_OUT = os.path.join(ROOT, "public", "covers")
COVERS_FALLBACK = os.path.join(ROOT, "assets", "covers")


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

    title = g("title")
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
    body = re.sub(r"^#\s+.+\n+", "", body, count=1)
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


def main() -> None:
    state = json.load(open(STATE)) if os.path.exists(STATE) else {"last_run": None, "per_day": 5, "published": 0}
    queue = json.load(open(QJSON)) if os.path.exists(QJSON) else []

    # Never re-publish: drop any queued slug that is already live (guards against a
    # stale or duplicated queue.json) and persist the cleaned queue.
    live = published_slugs()
    stale = [q["slug"] for q in queue if q["slug"] in live]
    if stale:
        queue = [q for q in queue if q["slug"] not in live]
        json.dump(queue, open(QJSON, "w"), indent=1)
        print(f"drip: dropped {len(stale)} already-published slugs from queue")

    per_day = int(os.environ.get("DRIP_PER_DAY", state.get("per_day", 5)))
    today = dt.date.today()
    last = dt.date.fromisoformat(state["last_run"]) if state.get("last_run") else None
    days = 1 if last is None else (today - last).days
    due = min(len(queue), per_day * days)

    print(f"drip: per_day={per_day} last_run={state.get('last_run')} days={days} due={due} queue={len(queue)}")
    if due <= 0:
        print("nothing due - exiting")
        return

    batch = pick(queue, due)
    if not batch:
        print("queue empty - exiting")
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
    json.dump(
        {"last_run": today.isoformat(), "per_day": per_day, "published": state.get("published", 0) + len(done)},
        open(STATE, "w"),
        indent=1,
    )
    print(f"published {len(done)} to /resources/ (covers copied: {covers}): {sorted(done)}")
    print(f"queue remaining: {len(remaining)} - total published: {state.get('published', 0) + len(done)}")


if __name__ == "__main__":
    main()
