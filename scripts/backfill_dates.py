#!/usr/bin/env python3
"""One-off: set each drip-published article's `date` to its true PUBLISH date.

The drip used to copy the draft's generation date into `date`, so every article
in a batch showed one stale date and the site looked like it had stopped
publishing. This rewrites `date` to the date the file was first added to the
repo, for files added by a drip publish commit. Migrated legacy articles keep
their original dates. Idempotent.
"""
from __future__ import annotations

import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "src", "content", "resources")
US = "\x1f"


def add_dates() -> dict[str, tuple[str, str]]:
    out = subprocess.run(
        ["git", "log", "--diff-filter=A", f"--format=@@%H{US}%ci{US}%s", "--name-only", "--", "src/content/resources"],
        cwd=ROOT, capture_output=True, text=True,
    ).stdout
    res: dict[str, tuple[str, str]] = {}
    cur: tuple[str, str] | None = None
    for line in out.splitlines():
        if line.startswith("@@"):
            _, date, subj = line[2:].split(US, 2)
            cur = (date[:10], subj)
        elif line.strip().endswith(".md") and cur:
            res[os.path.basename(line.strip())[:-3]] = cur
    return res


def main() -> int:
    apply = "--apply" in sys.argv
    dates = add_dates()
    n = 0
    for slug, (date, subj) in sorted(dates.items()):
        if not subj.lower().startswith("publish"):
            continue  # migrated/legacy articles keep their original date
        p = os.path.join(CONTENT, slug + ".md")
        if not os.path.exists(p):
            continue
        md = open(p).read()
        m = re.search(r'^date:\s*"?([^"\n]*)"?\s*$', md, re.M)
        if not m or m.group(1).strip()[:10] == date:
            continue
        md = md[: m.start()] + f'date: "{date}"' + md[m.end():]
        if apply:
            open(p, "w").write(md)
        print(f"  {slug:65s} {m.group(1).strip()[:10]} -> {date}")
        n += 1
    print(f"{'APPLIED' if apply else 'DRY-RUN'}: {n} files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
