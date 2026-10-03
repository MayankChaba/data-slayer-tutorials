#!/usr/bin/env python3
"""Server-side catch-up drip for the use-case queue (Cloudflare Pages hub).

Runs in GitHub Actions (see .github/workflows/publish-cadence.yml), so the drip
no longer depends on the laptop being open. Each run publishes
``per_day * days_since_last_run`` articles, capped by the queue, so any missed
run is caught up on the next run — e.g. a 7-day gap publishes 21 in one go.

  queue/queue.json      ordered list of ready targets (priority, then traffic)
  queue/articles/*.md   the scored, ready-to-publish articles
  queue/state.json      {"last_run": ISO date|null, "per_day": int, "published": int}

Output: use-cases/<slug>.md, rebuilt use-cases/index.md and llms.txt.
The workflow commits + pushes; that push triggers the Cloudflare Pages deploy.
"""
from __future__ import annotations

import datetime as dt
import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUEUE_DIR = os.path.join(ROOT, "queue")
QART = os.path.join(QUEUE_DIR, "articles")
QJSON = os.path.join(QUEUE_DIR, "queue.json")
STATE = os.path.join(QUEUE_DIR, "state.json")
UC = os.path.join(ROOT, "use-cases")
LLMS = os.path.join(ROOT, "llms.txt")


def fm_get(md: str, key: str) -> str:
    m = re.search(rf'^{key}:\s*"?([^"\n]*)"?\s*$', md, re.M)
    return m.group(1).strip() if m else ""


def fm_set(md: str, key: str, val: str) -> str:
    if re.search(rf"^{key}:", md, re.M):
        return re.sub(rf'^{key}:\s*.*$', f'{key}: "{val}"', md, count=1, flags=re.M)
    m = re.match(r"^---\n(.*?)\n---\n", md, re.S)
    if not m:
        return md
    return md[: m.end(1)] + f'\n{key}: "{val}"' + md[m.end(1):]


def title_of(md: str) -> str:
    m = re.search(r"^#\s+(.+)$", md, re.M)
    return m.group(1).strip() if m else fm_get(md, "title")


def hub_items() -> list[dict]:
    out = []
    for p in sorted(glob.glob(os.path.join(UC, "*.md"))):
        if os.path.basename(p) == "index.md":
            continue
        md = open(p).read()
        out.append({"slug": os.path.basename(p)[:-3], "title": title_of(md),
                    "desc": fm_get(md, "description")})
    return out


def index_md(items: list[dict]) -> str:
    lines = [
        "---",
        "layout: page",
        'title: "Use cases"',
        'permalink: "/use-cases/"',
        "---",
        "",
        "Step-by-step guides for the jobs people actually search for — each one built on a",
        "real [Data Slayer](https://apify.com/data-slayer) actor, with the input you send and",
        "the output you get. No login, no proxies to manage.",
        "",
        "## All use cases",
        "",
    ]
    for it in sorted(items, key=lambda x: x["title"].lower()):
        lines.append(f"- [{it['title']}](https://dataslayer.dev/use-cases/{it['slug']}/) — {it['desc']}")
    lines += [
        "",
        "## The actors",
        "",
        "Every guide links to a live actor on the Apify Store:",
        "[apify.com/data-slayer](https://apify.com/data-slayer?utm_source=github&utm_medium=content&utm_campaign=hub)",
        "",
    ]
    return "\n".join(lines)


def patch_llms(items: list[dict]) -> None:
    txt = open(LLMS).read()
    if "## Use cases" in txt:
        txt = re.sub(r"## Use cases\n.*?(?=\n## )", "", txt, flags=re.S)
    lines = ["## Use cases", "",
             f"Step-by-step guides for the jobs people search for ({len(items)} published):", ""]
    for it in sorted(items, key=lambda x: x["title"].lower()):
        lines.append(f"- {it['title']}: https://dataslayer.dev/use-cases/{it['slug']}/")
    lines.append("")
    section = "\n".join(lines)
    if "## Actors referenced" in txt:
        txt = txt.replace("## Actors referenced", section + "\n## Actors referenced", 1)
    else:
        txt = txt.rstrip() + "\n\n" + section + "\n"
    open(LLMS, "w").write(txt)


def pick(queue: list[dict], due: int) -> list[dict]:
    """One article per actor per batch (stagger), then fill any remainder.

    After a long gap `due` can exceed the number of distinct actors still queued,
    so a second pass allows repeats to actually clear the backlog.
    """
    picks, seen = [], set()
    for item in queue:
        actor = item["actor_account"] + "/" + item["actor_slug"]
        if actor in seen:
            continue
        picks.append(item)
        seen.add(actor)
        if len(picks) >= due:
            return picks
    if len(picks) < due:
        chosen = {p["slug"] for p in picks}
        for item in queue:
            if item["slug"] in chosen:
                continue
            picks.append(item)
            chosen.add(item["slug"])
            if len(picks) >= due:
                break
    return picks


def main() -> None:
    state = json.load(open(STATE)) if os.path.exists(STATE) else {"last_run": None, "per_day": 3, "published": 0}
    queue = json.load(open(QJSON)) if os.path.exists(QJSON) else []
    per_day = int(os.environ.get("DRIP_PER_DAY", state.get("per_day", 3)))
    today = dt.date.today()
    last = dt.date.fromisoformat(state["last_run"]) if state.get("last_run") else None
    days = 1 if last is None else (today - last).days
    due = min(len(queue), per_day * days)

    print(f"drip: per_day={per_day} last_run={state.get('last_run')} days={days} "
          f"due={due} queue={len(queue)}")
    if due <= 0:
        print("nothing due — exiting")
        return
    batch = pick(queue, due)
    if not batch:
        print("queue empty — exiting")
        return

    os.makedirs(UC, exist_ok=True)
    done = set()
    for item in batch:
        src = os.path.join(QART, item["slug"] + ".md")
        if not os.path.exists(src):
            print(f"  ! missing {item['slug']} — skipping")
            continue
        md = fm_set(open(src).read(), "status", "published")
        md = fm_set(md, "layout", "use-case")
        open(os.path.join(UC, item["slug"] + ".md"), "w").write(md)
        done.add(item["slug"])

    published = hub_items()
    open(os.path.join(UC, "index.md"), "w").write(index_md(published))
    if os.path.exists(LLMS):
        patch_llms(published)

    remaining = [q for q in queue if q["slug"] not in done]
    json.dump(remaining, open(QJSON, "w"), indent=1)
    json.dump({"last_run": today.isoformat(), "per_day": per_day,
               "published": state.get("published", 0) + len(done)},
              open(STATE, "w"), indent=1)
    print(f"published {len(done)}: {sorted(done)}")
    print(f"queue remaining: {len(remaining)} · total published: "
          f"{state.get('published', 0) + len(done)}")


if __name__ == "__main__":
    main()
