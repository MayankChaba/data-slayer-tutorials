#!/usr/bin/env python3
"""Regression test for scripts/title_case.derive_title.

Asserts:
  1. every historical keyword -> title pair from the owner's canonical fix
     (hub commit 9a54e17, frozen in title_case.fixture.json) is reproduced, and
  2. derive_title is idempotent on the corrected titles.

Run:  python3 scripts/test_title_case.py
Exit code 0 = pass.
"""
from __future__ import annotations

import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from title_case import derive_title  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
FIXTURE = os.path.join(HERE, "title_case.fixture.json")


def main() -> int:
    pairs = json.load(open(FIXTURE))
    fails = []
    for old, new in pairs:
        got = derive_title(old)
        if got != new:
            fails.append((old, new, got))
    idem = [(n, derive_title(n)) for _, n in pairs if derive_title(n) != n]

    print(f"transform: {len(pairs) - len(fails)}/{len(pairs)} pass")
    print(f"idempotency: {len(pairs) - len(idem)}/{len(pairs)} pass")
    for o, n, g in fails[:20]:
        print(f"  FAIL  in={o!r} exp={n!r} got={g!r}")
    for n, g in idem[:20]:
        print(f"  NOT-IDEMPOTENT  {n!r} -> {g!r}")

    if fails or idem:
        return 1
    print("OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
