---
layout: actor
title: "LinkedIn Post Metrics Scraper "
description: "LinkedIn post metrics scraper. Extract likes, comments, shares, and full reaction breakdowns from any LinkedIn post URL. Returns author info, post text, media attachments, and engagement counts in structured JSON. No cookies. No LinkedIn login. Built for analytics pipelines and content researchers."
actor_slug: "linkedin-post-metrics-scraper"
actor_account: "iron-crawler"
actor_url: "https://apify.com/iron-crawler/linkedin-post-metrics-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-metrics-scraper"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-post-metrics-scraper/
---

Scrape full engagement metrics from any LinkedIn post URL. Returns likes, comments, shares, full reaction type breakdown, post text, author details, and attached media. Clean JSON output. No cookies or login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Post Url to scraping |

## What you get

```json
{
  "post_url": "https://www.linkedin.com/posts/satyanadella_ai-activity-7201234567890-ABCD/",
  "post_text": "Excited to share...",
  "created_at": "2024-11-01T14:22:00Z",
  "author_name": "Satya Nadella",
  "author_headline": "Chairman and CEO at Microsoft",
  "author_linkedin_url": "https://www.linkedin.com/in/satyanadella/",
  "author_type": "person",
  "num_likes": 4821,
  "num_comments": 312,
  "num_shares": 198,
  "reaction_counts": {
    "LIKE": 2900,
    "PRAISE": 1100,
    "EMPATHY": 400,
    "INTEREST": 321,
    "APPRECIATION": 100
  },
  "is_repost": false,
  "media_attachments": [],
  "reactions_urn": "urn:li:activity:7201234567890",
  "comments_urn": "urn:li:activity:7201234567890",
  "reposts_urn": "urn:li:activity:7201234567890"
}
```

## Use cases

- **Content performance benchmarking** — compare engagement rates across posts or authors programmatically
- **Influencer vetting** — verify claimed engagement figures before a partnership
- **Monitoring pipelines** — call via Apify API on a schedule to track post performance over time
- **Data journalism** — extract engagement data for research or reporting at scale

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/linkedin-post-metrics-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://www.linkedin.com/posts/anthropicresearch_statement-on-comments-from-the-secretary-activity-7433337757906923520-p2nH"
}
```

## Get started

**[Run LinkedIn Post Metrics Scraper
 on Apify →](https://apify.com/iron-crawler/linkedin-post-metrics-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-metrics-scraper)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
