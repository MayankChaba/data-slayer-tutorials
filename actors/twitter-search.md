---
layout: actor
title: "Twitter/X Search Scraper · Small Jobs & Advanced Queries"
description: "Search public Twitter/X posts and profiles by keyword, hashtag, mention, or advanced operator. Export unique JSON, CSV, or Excel rows with bounded pagination and clear empty or partial outcomes."
actor_slug: "twitter-search"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-search?utm_source=github&utm_medium=content&utm_campaign=twitter-search"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "AUTOMATION", "LEAD_GENERATION"]
permalink: /actors/twitter-search/
---

Search public Twitter/X posts and profiles by keyword, hashtag, mention, or documented advanced operator. Export unique results with bounded pagination, clear empty and partial outcomes, and no login or cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Keyword, phrase, hashtag, mention, or advanced query. Example: #AI or mission update from:nasa. |
| `section` | string | Choose the Twitter/X search section. The default preserves the existing Top mode. |
| `maxPages` | integer | Maximum pages to request. The legacy default remains one page. |
| `maxItems` | integer | Stop after this many unique rows. Leave empty to use only the page limit. |
| `fromUser` | string | Adds the documented from: operator. Enter a handle with or without @. |
| `verifiedOnly` | boolean | Adds the documented filter:verified operator. |

## What you get

The default Dataset contains one unique search result per row. Existing tweet/profile keys are preserved for compatibility. Fields vary by section and public availability; missing data may be absent or null.

Common tweet fields include:

- `tweet_id`, `text`, `created_at`, `lang`, and `conversation_id`
- `screen_name` and nested `user_info`
- `favorites`, `retweets`, `bookmarks`, `views`, `replies`, and `quotes`
- nested `entities` such as hashtags, mentions, and media

The **People** section may return profile-shaped rows instead of tweet-shaped rows. The schema therefore remains open to existing section-specific fields. Internal routing, authentication, quota, request, and raw-response metadata are removed from customer rows.

### Example JSON row

```json
{
  "type": "tweet",
  "tweet_id": "1734567890123456789",
  "screen_name": "tech_innovator",
  "text": "A public product launch update #AI",
  "created_at": "Mon Dec 16 14:23:15 +0000 2025",
  "favorites": 2847,
  "retweets": 456,
  "bookmarks": 189,
  "views": "87432",
  "replies": 34,
  "quotes": 12,
  "conversation_id": "1734567890123456789",
  "lang": "en",
  "entities": {
    "hashtags": [{"text": "AI", "indices": [31, 34]}],
    "user_mentions": [],
    "media": []
  },
  "user_info": {
    "screen_name": "tech_innovator",
    "name": "Tech Innovator",
    "followers_count": 45678,
    "verified": true
  }
}
```

### Example CSV columns

```csv
type,tweet_id,screen_name,text,created_at,favorites,retweets,views,lang

_(continued on the Apify listing)_

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-search).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "new york",
  "section": "top",
  "maxPages": 1,
  "maxItems": 0,
  "fromUser": "",
  "verifiedOnly": false
}
```

## Get started

**[Run Twitter/X Search Scraper · Small Jobs & Advanced Queries on Apify →](https://apify.com/data-slayer/twitter-search?utm_source=github&utm_medium=content&utm_campaign=twitter-search)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/twitter-search?utm_source=github&utm_medium=content&utm_campaign=twitter-search) | 19,864 |
| [patient_discovery](https://apify.com/patient_discovery/twitter-search?utm_source=github&utm_medium=content&utm_campaign=twitter-search) | 5,563 |
| [iron-crawler](https://apify.com/iron-crawler/twitter-search?utm_source=github&utm_medium=content&utm_campaign=twitter-search) | 1,734 |
| [monumental_world](https://apify.com/monumental_world/twitter-search?utm_source=github&utm_medium=content&utm_campaign=twitter-search) | 375 |

## Categories

Social Media, Automation, Lead Generation
