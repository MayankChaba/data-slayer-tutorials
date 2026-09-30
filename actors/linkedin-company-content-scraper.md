---
layout: actor
title: "LinkedIn Company Content Scraper"
description: "LinkedIn company content scraper. Extract all posts from any LinkedIn company page — post text, likes, comments, shares, reaction type breakdown, and media. Supports full pagination to retrieve complete post history. No cookies or LinkedIn account required. Built for data engineers and competitive i"
actor_slug: "linkedin-company-content-scraper"
actor_account: "iron-crawler"
actor_url: "https://apify.com/iron-crawler/linkedin-company-content-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-content-scraper"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-company-content-scraper/
---

Scrape all recent posts from any LinkedIn company page. Returns full post text, engagement counts, reaction breakdown, media attachments, and author details. Supports pagination. Clean JSON output. No cookies or login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Company Url to scraping |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

- `post_text` — full content of the post
- `post_url` — canonical post link
- `created_at` — ISO timestamp
- `author_name` / `author_type` — who published (company page or tagged individual)
- `num_likes`, `num_comments`, `num_shares`
- `reaction_counts` — breakdown by: LIKE, PRAISE, EMPATHY, INTEREST, APPRECIATION, ENTERTAINMENT
- `media_attachments` — images, documents, videos
- `is_repost` — flag + original content reference
- `post_type` — article, document, or standard post
- `urn` + `reactions_urn` + `comments_urn`

## Use cases

- **Competitive content monitoring** — track what a competitor posts, how often, and what engagement each post drives
- **Client reporting** — extract a brand's LinkedIn content history for an audit or proposal
- **Training data** — build a corpus of company LinkedIn content for classification or NLP tasks
- **Scheduling research** — analyze post timing patterns vs engagement outcomes

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/linkedin-company-content-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://www.linkedin.com/company/google/",
  "maxPages": 1
}
```

## Get started

**[Run LinkedIn Company Content Scraper on Apify →](https://apify.com/iron-crawler/linkedin-company-content-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-content-scraper)**

## Categories

Social Media, Lead Generation
