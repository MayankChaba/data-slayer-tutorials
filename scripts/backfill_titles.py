#!/usr/bin/env python3
"""Backfill canonical titles + de-duplicate body H1s across live articles.

One-off repair for content already in ``src/content/resources/``:

  * the page title must never be the raw keyword ("export facebook pages to
    csv"); it is re-derived with ``title_case.derive_title`` (idempotent).
  * the page template renders the H1, so a leading ``# ...`` in the body is a
    duplicate heading and is removed.

Dry-run by default. Pass --apply to write. Safe to re-run (idempotent).

Usage:
  python3 scripts/backfill_titles.py            # report only
  python3 scripts/backfill_titles.py --apply    # write changes
"""
from __future__ import annotations

import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from title_case import derive_title  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "src", "content", "resources")

_FM = re.compile(r"^---\n(.*?)\n---\n", re.S)
_TITLE = re.compile(r'^title:\s*"?([^"\n]*)"?\s*$', re.M)
_KEYWORD = re.compile(r'^target_keyword:\s*"?([^"\n]*)"?\s*$', re.M)
_LEADING_H1 = re.compile(r"^\s*#\s+.+\n+", re.M)


def fix_file(path: str) -> tuple[bool, str]:
    src = open(path).read()
    m = _FM.match(src)
    if not m:
        return False, "no frontmatter"
    fm, body = m.group(1), src[m.end():]

    t = _TITLE.search(fm)
    title = (t.group(1) if t else "").strip()
    kw = _KEYWORD.search(fm)
    keyword = (kw.group(1) if kw else "").strip()

    want = derive_title(keyword or title)
    changed = False
    notes = []

    if want and want != title and t:
        fm = fm[: t.start()] + f'title: "{want}"' + fm[t.end():]
        changed = True
        notes.append(f"title {title!r} -> {want!r}")

    # Drop a duplicated leading H1 in the body (template renders the H1).
    new_body = _LEADING_H1.sub("", body, count=1)
    if new_body != body:
        body = new_body
        changed = True
        notes.append("removed duplicate body H1")

    if not changed:
        return False, "ok"
    if "--apply" in sys.argv:
        with open(path, "w") as f:
            f.write("---\n" + fm + "\n---\n" + body)
    return True, "; ".join(notes)


def main() -> int:
    files = sorted(glob.glob(os.path.join(CONTENT, "*.md")))
    n = 0
    for p in files:
        changed, note = fix_file(p)
        if changed:
            n += 1
            print(f"  {os.path.basename(p):70s} {note}")
    mode = "APPLIED" if "--apply" in sys.argv else "DRY-RUN"
    print(f"{mode}: {n}/{len(files)} files changed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
