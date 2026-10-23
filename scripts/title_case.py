#!/usr/bin/env python3
"""Deterministic, idempotent title derivation for dataslayer.dev articles.

The article generator historically wrote the raw target keyword as the page
title (e.g. "export facebook pages to csv"), which surfaced on the site as a
lowercase keyword headline. The owner's canonical fix (hub commit 9a54e17) was
applied by hand to existing files only, so every newly generated article
regressed. This module makes that transformation a reusable function so the
title is always correct, wherever it is produced.

Rules (derived from the 130-file 9a54e17 fixture):
  * platform words normalised:  twitter -> X (Twitter), linkedin -> LinkedIn,
    instagram -> Instagram, facebook -> Facebook
  * acronyms normalised: csv -> CSV, api -> API
  * keyword-pattern prefixes:
      "how to ..."                  -> "How to ..."          (sentence case)
      "export ... to csv"           -> "How to export ... to CSV"
      "scrape ..."                  -> "Scrape ..."          (sentence case)
      "... api alternative"         -> "The ... API alternative"
      "... data extraction tool"    -> "Extracting ... data"
      "... scraper"                 -> "... scraper"         (sentence case)
      "find ... [for <persona>]"    -> "Finding ..."
      "build ..."                   -> "How to build ..."
      "refresh ..."                 -> "How to refresh ..."
  * default: sentence case.

The function is idempotent: applying it to an already-correct title returns the
same title.
"""
from __future__ import annotations

import re

_PLATFORM_SUBS = [
    # "X (Twitter)" is the canonical form; never re-substitute the token already
    # inside it (keeps derive_title idempotent).
    (re.compile(r"(?<!X \()\btwitter\b(?!\))", re.I), "X (Twitter)"),
    (re.compile(r"\binstagram\b", re.I), "Instagram"),
    (re.compile(r"\bfacebook\b", re.I), "Facebook"),
    (re.compile(r"\blinkedin\b", re.I), "LinkedIn"),
]
_ACRONYM_SUBS = [
    (re.compile(r"\bcsv\b", re.I), "CSV"),
    (re.compile(r"\bapi\b", re.I), "API"),
]

# Persona suffixes that are dropped from "find ..." keywords (the page is a
# use-case, the persona is metadata, not part of the title).
_PERSONA_TAIL = re.compile(
    r"\s+for\s+(?:social media managers?|lead-?gen marketers?|recruiters?|"
    r"growth marketers?|sales teams?|marketers?|data teams?|"
    r"content teams?|e-?commerce teams?)\s*$",
    re.I,
)


def _normalize_terms(s: str) -> str:
    for rx, rep in _PLATFORM_SUBS + _ACRONYM_SUBS:
        s = rx.sub(rep, s)
    return s


def _sentence(s: str) -> str:
    return s[:1].upper() + s[1:] if s else s


def derive_title(keyword: str, content_type: str | None = None) -> str:
    """Return a human, title-cased headline for a target keyword.

    Idempotent: safe to run on an already-correct title.
    """
    k = (keyword or "").strip().strip('"')
    if not k:
        return k

    s = _normalize_terms(k)
    low = s.lower()

    # 1. "how to ..." — already imperative, just sentence case.
    if low.startswith("how to "):
        return _sentence(s)

    # 2. "export ... to csv" -> "How to export ... to CSV"
    m = re.match(r"^export (.+?) to CSV$", s, re.I)
    if m:
        return f"How to export {m.group(1)} to CSV"

    # 3. "scrape ..." — imperative, sentence case.
    if low.startswith("scrape "):
        return _sentence(s)

    # 4. "... api alternative" -> "The ... API alternative"
    m = re.match(r"^(.+?) API alternative$", s, re.I)
    if m:
        rest = re.sub(r"^The\s+", "", m.group(1), flags=re.I)
        return f"The {rest} API alternative"

    # 5. "... data extraction tool" -> "Extracting ... data"
    m = re.match(r"^(.+?) data extraction tool$", s, re.I)
    if m:
        return f"Extracting {m.group(1)} data"

    # 6. "... scraper" — sentence case.
    m = re.match(r"^(.+?) scraper$", s, re.I)
    if m:
        return f"{_sentence(m.group(1))} scraper"

    # 7. "find ... [for <persona>]" -> "Finding ..."
    m = re.match(r"^find (.+)$", s, re.I)
    if m:
        rest = _PERSONA_TAIL.sub("", m.group(1)).strip()
        return f"Finding {rest}"

    # 8. "build ..." -> "How to build ..."
    m = re.match(r"^build (.+)$", s, re.I)
    if m:
        return f"How to build {m.group(1)}"

    # 9. "refresh ..." -> "How to refresh ..."
    m = re.match(r"^refresh (.+)$", s, re.I)
    if m:
        return f"How to refresh {m.group(1)}"

    # 10. default: sentence case.
    return _sentence(s)


if __name__ == "__main__":
    import sys

    for arg in sys.argv[1:]:
        print(derive_title(arg))
