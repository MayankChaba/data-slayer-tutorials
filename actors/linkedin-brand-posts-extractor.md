---
layout: actor
title: "LinkedIn Brand Posts Extractor"
description: "LinkedIn brand posts extractor. Scrape all posts from any LinkedIn company page — post text, likes, comments, shares, and reaction breakdowns. Ideal for content marketers, brand strategists, and social media analysts auditing company LinkedIn presence. No cookies. No login required. "
actor_slug: "linkedin-brand-posts-extractor"
actor_account: "patient_discovery"
actor_url: "https://apify.com/patient_discovery/linkedin-brand-posts-extractor?utm_source=github&utm_medium=content&utm_campaign=linkedin-brand-posts-extractor"
actor_pricing: "$20.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-brand-posts-extractor/
---

Extract all posts from any LinkedIn company page. Returns post content, engagement stats, reaction types, and media — ready for content audits, competitor analysis, and social reporting. No LinkedIn account needed.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Company Url to scraping |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

| Company | Post Date | Likes | Comments | Shares | Top Reaction |
|---|---|---|---|---|---|
| Notion | Nov 20, 2024 | 1,840 | 203 | 87 | PRAISE (840) |
| Notion | Nov 15, 2024 | 920 | 94 | 41 | LIKE (700) |

## Pricing

**$20.00 per 1,000 results** (Free tier)  
Actor start: $0.0001 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/linkedin-brand-posts-extractor).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://www.linkedin.com/company/google/",
  "maxPages": 1
}
```

## Get started

**[Run LinkedIn Brand Posts Extractor on Apify →](https://apify.com/patient_discovery/linkedin-brand-posts-extractor?utm_source=github&utm_medium=content&utm_campaign=linkedin-brand-posts-extractor)**

## Categories

Social Media, Lead Generation
