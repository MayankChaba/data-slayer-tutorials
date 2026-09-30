---
layout: actor
title: "Instagram Keyword Posts Scraper · No Login"
description: "Find public Instagram posts and Reels by keyword. Batch 10 phrases, preserve query provenance, paginate automatically, and export structured JSON, CSV, or Excel."
actor_slug: "instagram-keyword-posts-scraper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-keyword-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=instagram-keyword-posts-scraper"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/instagram-keyword-posts-scraper/
---

Search public Instagram content with up to 10 phrases and export query-linked photo, carousel, and Reel records. Pagination, per-phrase limits, duplicate handling, and bounded upstream retries are handled automatically. No Instagram login or cookies required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `searchQueries` | array | Add 1–10 phrases. Each result keeps the exact phrase that found it. |
| `maxResultsPerQuery` | integer | Stop after this many unique results for each phrase. Available results can be lower. |

## What you get

Every dataset item contains:

- `query`, `id`, `shortCode`, `url`, and normalized `mediaType`
- Caption and source posting time when available
- Like, comment, view, and play counts when returned by the source
- Creator username, ID, full name, and verification state
- Thumbnail, image, video, and normalized carousel media references when available
- Optional location data
- `retrievalMode` and the UTC `collectedAt` timestamp

IDs are stored as strings to avoid precision loss. Missing optional source fields remain `null` or an empty array rather than being guessed.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-keyword-posts-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "searchQueries": [
    "specialty coffee",
    "marathon training"
  ],
  "maxResultsPerQuery": 50
}
```

## Get started

**[Run Instagram Keyword Posts Scraper · No Login on Apify →](https://apify.com/data-slayer/instagram-keyword-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=instagram-keyword-posts-scraper)**

## Categories

`SOCIAL_MEDIA`, `MARKETING`
