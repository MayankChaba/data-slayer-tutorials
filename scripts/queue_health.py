#!/usr/bin/env python3
"""Daily health check for the article drip.

The failure mode this exists to kill: the drip publishes from ``queue/queue.json``
and, when the queue is empty, exits **0** and prints "nothing due". So the site
can go quiet for days with a fully green pipeline and nobody notices.

This check computes the queue depth / runway / last-run age, and **fails loudly**
(non-zero exit -> GitHub emails the owner) and optionally posts to a webhook when
the queue is dry or the runway is short.

Env:
  DRIP_PER_DAY      cadence (default: queue/state.json per_day, else 5)
  MIN_RUNWAY_DAYS   alert if runway < this (default 2)
  MAX_STALE_DAYS    alert if last drip run older than this (default 2)
  ALERT_WEBHOOK_URL optional; JSON {"text": ...} posted here on failure

Exit: 0 healthy, 1 dry/short-runway (alert), 2 misconfig.
"""
from __future__ import annotations

import datetime as dt
import glob
import json
import os
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUEUE_DIR = os.path.join(ROOT, "queue")
QJSON = os.path.join(QUEUE_DIR, "queue.json")
STATE = os.path.join(QUEUE_DIR, "state.json")
CONTENT = os.path.join(ROOT, "src", "content", "resources")


def _alert(msg: str) -> None:
    url = os.environ.get("ALERT_WEBHOOK_URL")
    if not url:
        print("(no ALERT_WEBHOOK_URL set; relying on the workflow-failure notification)")
        return
    try:
        data = json.dumps({"text": msg, "content": msg}).encode()
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
        urllib.request.urlopen(req, timeout=15)
        print("alert posted")
    except Exception as e:  # noqa: BLE001
        print(f"alert post failed: {e}")


def main() -> int:
    try:
        queue = json.load(open(QJSON)) if os.path.exists(QJSON) else []
        state = json.load(open(STATE)) if os.path.exists(STATE) else {}
    except json.JSONDecodeError as e:
        print(f"::error::queue state is corrupt: {e}")
        _alert(f"dataslayer.dev queue state is corrupt: {e}")
        return 2

    per_day = int(os.environ.get("DRIP_PER_DAY", state.get("per_day", 5)))
    min_runway = int(os.environ.get("MIN_RUNWAY_DAYS", "2"))
    max_stale = int(os.environ.get("MAX_STALE_DAYS", "2"))

    depth = len(queue)
    runway = round(depth / per_day, 1) if per_day else 0.0
    last = state.get("last_run")
    today = dt.date.today()
    age = (today - dt.date.fromisoformat(last)).days if last else None
    live = len(glob.glob(os.path.join(CONTENT, "*.md")))

    # Art coverage: every published article should have a cover jpg and in-content
    # art. These come from the laptop art pipeline, so a growing gap means it stalled.
    slugs = [os.path.basename(p)[:-3] for p in glob.glob(os.path.join(CONTENT, "*.md"))]
    covers_dir = os.path.join(ROOT, "public", "covers")
    no_cover = [s for s in slugs if not os.path.exists(os.path.join(covers_dir, s + ".jpg"))]
    no_art = []
    for s in slugs:
        try:
            if "/art/" not in open(os.path.join(CONTENT, s + ".md")).read():
                no_art.append(s)
        except OSError:
            pass

    problems = []
    if depth == 0:
        problems.append("queue is EMPTY (0 pending)")
    elif runway < min_runway:
        problems.append(f"runway {runway}d < {min_runway}d")
    if age is not None and age > max_stale and depth > 0:
        problems.append(f"last drip run was {age}d ago")

    summary = (f"queue depth={depth} runway={runway}d per_day={per_day} "
               f"last_run={last} age={age}d live={live} "
               f"covers_missing={len(no_cover)} art_missing={len(no_art)}")
    print(summary)
    if no_cover or no_art:
        print(f"::warning::art gap: {len(no_cover)} articles without a cover, {len(no_art)} without in-content art")

    if not problems:
        print("queue health: OK")
        return 0

    msg = "dataslayer.dev article drip is DRY: " + "; ".join(problems) + "\n" + summary
    print("::error::" + msg.replace("\n", " | "))
    _alert(msg)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
