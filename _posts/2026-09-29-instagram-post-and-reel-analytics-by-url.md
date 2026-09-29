---
layout: post
title: "Pull Instagram post and reel analytics by URL — no login"
date: 2026-09-29 10:00:00 +0000
description: "Get likes, comments, views, shares, and saves from any Instagram post or Reel URL in bulk — no Instagram login. Export engagement data to JSON, CSV, or Excel."
categories: instagram
---

You found twenty Reels that matter — from a competitor, a creator you want to
sponsor, or your own campaign. Now you need the numbers: views, likes, comments,
shares, saves. Opening each post and copying numbers into a spreadsheet doesn't scale.

This tutorial shows how to turn a list of Instagram post/Reel URLs into structured
engagement data in one run — no Instagram login, no browser automation.

**The tools:**

- [Instagram Post & Reel Details Scraper](https://apify.com/data-slayer/instagram-post-details?utm_source=github&utm_medium=content&utm_campaign=instagram-post-details) — full detail per post (up to 128 fields), bulk URLs, no login.
- [Instagram Reel & Post Analytics by URL](https://apify.com/patient_discovery/instagram-reel-analytics-by-url?utm_source=github&utm_medium=content&utm_campaign=instagram-reel-analytics-by-url) — a lighter analytics-first view that reports exactly which metrics are available for each URL.

Both run on Apify. Pick the first for maximum depth, the second for cheap
at-scale analytics checks.

## Step 1 — Collect your URLs

Grab the post/Reel URLs (or shortcodes) you care about:

```
https://www.instagram.com/p/DFxYzAbCdEf/
https://www.instagram.com/reel/DGhIjKlMnOp/
```

Shortcodes and media IDs work too — paste whatever you have.

## Step 2 — Run the actor with a bulk list

Open
[Instagram Post & Reel Details Scraper](https://apify.com/data-slayer/instagram-post-details?utm_source=github&utm_medium=content&utm_campaign=instagram-post-details)
and paste your URLs into the bulk input, one per line:

```json
{
  "postUrls": [
    "https://www.instagram.com/p/DFxYzAbCdEf/",
    "https://www.instagram.com/reel/DGhIjKlMnOp/"
  ]
}
```

Bulk input is the recommended mode — it keeps the per-post overhead low, which
matters when you process hundreds of URLs.

Click **Run**.

## Step 3 — Read the analytics

Each URL returns a full record. The analytics-relevant fields:

```json
{
  "like_count": 18432,
  "comment_count": 214,
  "view_count": 412907,
  "share_count": 1058,
  "save_count": 3961,
  "repost_count": 87,
  "caption": "…",
  "taken_at": "2026-09-21T16:03:00.000Z",
  "video_url": "…",
  "creator": { "username": "…", "follower_count": 128400 }
}
```

Notes on the numbers:

- **`repost_count` is included** — a field Apify's own Instagram scraper doesn't return.
- **Views** appear for Reels and videos. **Shares and saves** appear when Instagram
  exposes them for that post.
- If you only need these metrics (not the full 128-field record), the
  [analytics-by-url actor](https://apify.com/patient_discovery/instagram-reel-analytics-by-url?utm_source=github&utm_medium=content&utm_campaign=instagram-reel-analytics-by-url)
  returns them with an explicit per-URL availability report — useful for
  benchmarking hundreds of posts cheaply.

## Step 4 — Export and analyze

Export the dataset as CSV/Excel and drop it into your analytics stack, or pull it
via the API:

```bash
curl "https://api.apify.com/v2/datasets/<DATASET_ID>/items?format=json"
```

Typical analyses:

- **Engagement rate** = (likes + comments) ÷ creator followers, per post.
- **Content benchmarking** — median views/likes across a competitor's last 30 Reels.
- **Sponsorship vetting** — does the creator's engagement match their follower count?

## Going further

- Find *which* creators to analyze in the first place — see
  [how to build an Instagram creator lead list from keywords](/data-slayer-tutorials/tutorials/build-an-instagram-creator-lead-list-from-keywords/).
- Automate the pull weekly into Google Sheets with n8n or Make — see
  [the automation templates](/data-slayer-tutorials/).

## Pricing

Both actors are pay-per-event — you pay per post checked, not per minute of
compute. The details scraper has run 1M+ times; the analytics actor is the
cheaper option when you only need metrics. New Apify accounts include free
platform credit for the first runs.

## FAQ

**Do I need an Instagram login?** No. Both actors work from public data without any login.

**Do shares and saves always come back?** Only when Instagram exposes them for that
post. The analytics-by-url actor reports metric availability explicitly per URL, so
you always know what's real and what's missing.

**Can I track the same URLs over time?** Yes — schedule the run (Apify supports
schedules, or use n8n/Make) and append each export to a sheet to build a time series.
