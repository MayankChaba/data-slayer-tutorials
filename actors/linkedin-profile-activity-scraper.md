---
layout: actor
title: "LinkedIn Profile Activity Scraper "
description: "LinkedIn profile activity scraper. Extract posts, reposts, and activity from any LinkedIn profile URL — post text, likes, comments, shares, reaction breakdown, and media. Supports pagination for full post history. No cookies or LinkedIn account required. Built for content analysis and audience intel"
actor_slug: "linkedin-profile-activity-scraper"
actor_account: "iron-crawler"
actor_url: "https://apify.com/iron-crawler/linkedin-profile-activity-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-activity-scraper"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-profile-activity-scraper/
---

Scrape recent posts, reposts, and activity from any LinkedIn profile. Returns full post text, engagement metrics, reaction breakdowns, media attachments, and author info. Paginated. No cookies or login required. Clean JSON output.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Profile Url to scraping |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

- `activity_type` — Post / Repost / Comment / Reaction
- `post_text` — full content text
- `post_url` — canonical link
- `created_at` — ISO 8601 timestamp
- `author_name`, `author_headline`, `author_linkedin_url`, `author_type`
- `num_likes`, `num_comments`, `num_shares`
- `reaction_counts` — full breakdown by type
- `media_attachments` — images, documents, videos
- `is_repost`, `repost_commentary`
- `shared_post` — original post details when applicable
- `cursor` — pagination token (handled automatically)

## Use cases

- **Thought leader content analysis** — extract full post history to analyze writing patterns, topic focus, and engagement performance
- **Audience intelligence** — the `comments` and `reactions` types reveal which posts a person engages with — useful for warm prospecting and network mapping
- **Content research** — build a corpus of posts from a target industry's key voices
- **Monitoring** — run on a schedule to track new posts from specific profiles

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/linkedin-profile-activity-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://in.linkedin.com/in/mayankchaba",
  "maxPages": 1
}
```

## Get started

**[Run LinkedIn Profile Activity Scraper
 on Apify →](https://apify.com/iron-crawler/linkedin-profile-activity-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-activity-scraper)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
