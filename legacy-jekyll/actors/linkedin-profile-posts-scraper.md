---
layout: actor
title: "LinkedIn Profile Posts Scraper"
description: "Extract all posts from any LinkedIn profile, including text, media, links and engagement stats. Public data only, no cookies or login needed."
actor_slug: "linkedin-profile-posts-scraper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-profile-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-posts-scraper"
actor_pricing: "$4.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-profile-posts-scraper/
---

LinkedIn Profile Posts Scraper - extract public data cookieless.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_urls` | array | One or more LinkedIn profile URLs. Paste many URLs for bulk scraping. Optional if you use the single-URL field below. |
| `linkedin_url` | string | Optional. Used only when the URL list above is empty, for older integrations that pass one URL here. |
| `maxPages` | integer | Maximum number of pages to fetch per profile (pagination handled automatically). |
| `max_items` | integer | Optional cap on total activity items returned per profile. 0 = no cap (fetch up to Maximum Pages). |
| `activity_type` | string | Which activity to fetch: posts (posts + reposts, default), comments (posts the profile commented on), reactions (posts the profile reacted to), or articles (articles the profile… |

## Pricing

**$4.00 per 1,000 results** (Free tier)  
Actor start: $0.0001 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-profile-posts-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_urls": [],
  "linkedin_url": "",
  "maxPages": 1,
  "max_items": 0,
  "activity_type": "posts"
}
```

## Get started

**[Run LinkedIn Profile Posts Scraper on Apify →](https://apify.com/data-slayer/linkedin-profile-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-posts-scraper)**

## Categories

Social Media, Marketing
