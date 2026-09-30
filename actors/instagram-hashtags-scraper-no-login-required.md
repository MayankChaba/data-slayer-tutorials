---
layout: actor
title: "Instagram Hashtag Finder · No Login"
description: "Find Instagram hashtags by keyword — post counts, IDs, followable status. Bulk research 50+ topics in one run. Same results as Instagram's own search bar. No login. $1.50/1K. JSON/CSV/Excel."
actor_slug: "instagram-hashtags-scraper-no-login-required"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-hashtags-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-hashtags-scraper-no-login-required"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/instagram-hashtags-scraper-no-login-required/
---

Type any keyword, get every related Instagram hashtag Instagram suggests — with post counts, hashtag IDs, and followable status. Bulk input: research 50 topics in one run instead of searching manually. Build your hashtag strategy with real post-count data. No login. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Search term or keyword |

## What you get

5 fields per hashtag result:

| Field | Description | Example |
|---|---|---|
| `name` | Hashtag name without the # symbol | `fitnessjourney` |
| `media_count` | Total number of posts using this hashtag on Instagram | `47,892,100` |
| `allow_following` | Whether users can follow this hashtag on Instagram | `true` |
| `id` | Instagram's internal unique ID for this hashtag | `17841563567263066` |
| `profile_pic_url` | Cover image Instagram associates with this hashtag (if any) | URL or `null` |

**The key field is `media_count`.** This tells you exactly how saturated each hashtag is — critical for choosing between a 50M-post hashtag (very competitive, hard to surface) and a 500K-post hashtag (niche, easier to be discovered).

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-hashtags-scraper-no-login-required).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "marketing"
}
```

## Get started

**[Run Instagram Hashtag Finder · No Login on Apify →](https://apify.com/data-slayer/instagram-hashtags-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-hashtags-scraper-no-login-required)**

## Categories

Social Media, Marketing
