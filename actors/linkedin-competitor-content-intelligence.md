---
layout: actor
title: "LinkedIn Competitor Content Intelligence"
description: "Analyze competitor LinkedIn content: themes, posting cadence, formats, engagement benchmarks, and top posts. No cookies or login."
actor_slug: "linkedin-competitor-content-intelligence"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-competitor-content-intelligence?utm_source=github&utm_medium=content&utm_campaign=linkedin-competitor-content-intelligence"
actor_pricing: "$30 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-competitor-content-intelligence/
---

Analyze what content works for your competitors on LinkedIn. Enter competitor profile or company URLs; the Actor reads their recent posts and returns themes, posting cadence, formats, engagement benchmarks, and their top-performing posts. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | LinkedIn profile URLs of competitor executives or creators whose posts you want to analyze. |
| `company_urls` | array | LinkedIn company page URLs or slugs whose posts you want to analyze. |
| `max_posts` | integer | Hard cap on posts analyzed per source. The main runtime and cost control. 1–50. |

## What you get

One row per post, plus one `source_summary` row per source:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "insightType": "post",
  "sourceUrl": "https://www.linkedin.com/company/globex",
  "sourceName": "globex",
  "postUrl": "https://www.linkedin.com/posts/globex_activity-123-X/",
  "postText": "Public post text (truncated)",
  "themeKeywords": ["pricing", "onboarding", "retention"],
  "postFormat": "image",
  "postedAt": "2026-09-20T09:00:00+00:00",
  "reactions": 412,
  "comments": 37,
  "engagementTotal": 449,
  "postsAnalyzed": 15,
  "avgEngagement": 180.4,
  "postsPerWeek": 3.2,
  "topThemes": ["pricing", "retention", "onboarding"],
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

`insightType` is `post` or `source_summary`.

The `OUTPUT` key-value-store record reports sources, posts analyzed, and rows written.

## Pricing

**$30 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-competitor-content-intelligence).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/example-competitor"
  ],
  "company_urls": [],
  "max_posts": 15
}
```

## Get started

**[Run LinkedIn Competitor Content Intelligence on Apify →](https://apify.com/data-slayer/linkedin-competitor-content-intelligence?utm_source=github&utm_medium=content&utm_campaign=linkedin-competitor-content-intelligence)**

## Categories

`SOCIAL_MEDIA`, `MARKETING`
