---
layout: actor
title: "LinkedIn Why-Now Account Brief"
description: "One brief per account: hiring and headcount trends, posts and engagement, funding, job changes, a why-now score, and talking points. No cookies."
actor_slug: "linkedin-why-now-account-brief"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-why-now-account-brief?utm_source=github&utm_medium=content&utm_campaign=linkedin-why-now-account-brief"
actor_pricing: "$100 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "MARKETING"]
permalink: /actors/linkedin-why-now-account-brief/
---

Get briefed on any account in one run. Enter a LinkedIn company URL; the Actor combines headcount and hiring trends, open roles, recent posts and engagement, funding, and recent job changes into a single why-now brief with a score and talking points. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `company_url` | string | LinkedIn company page URL or slug to brief you on. |
| `max_posts` | integer | How many recent company posts to include in the brief. The main runtime and cost control. 1–25. |
| `days_ago` | integer | How far back to look for joiners and leavers. 1–365. |

## What you get

One row per company — the brief:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "companyName": "Globex",
  "companyIndustry": "Software Development",
  "companyHeadcount": "850",
  "companyWebsite": "https://globex.example",
  "totalEmployees": 850,
  "headcountGrowthPct": 12.5,
  "hiringTrend": "up",
  "totalOpenRoles": 41,
  "topHiringFunction": "Engineering",
  "recentPostsCount": 5,
  "recentEngagementTotal": 1240,
  "topPostText": "Public post text (truncated)",
  "topPostUrl": "https://www.linkedin.com/posts/globex_activity-123-X/",
  "fundingTotalUsd": 45000000,
  "lastRoundType": "Series B",
  "lastRoundDate": "2026-06-01",
  "lastRoundAmountUsd": 25000000,
  "recentJoiners": 14,
  "recentLeavers": 3,
  "whyNowScore": 92,
  "whyNowReasons": ["Headcount grew 12.5%", "Hiring is trending up", "Raised $25,000,000 (Series B)"],
  "talkingPoints": ["They are hiring heavily in Engineering.", "Last funding: Series B (2026-06-01)."],
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports the company, why-now score, reasons, and posts read.

## Pricing

**$100 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-why-now-account-brief).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "company_url": "https://www.linkedin.com/company/example",
  "max_posts": 5,
  "days_ago": 90
}
```

## Get started

**[Run LinkedIn Why-Now Account Brief on Apify →](https://apify.com/data-slayer/linkedin-why-now-account-brief?utm_source=github&utm_medium=content&utm_campaign=linkedin-why-now-account-brief)**

## Categories

`LEAD_GENERATION`, `MARKETING`
