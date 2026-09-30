---
layout: actor
title: "LinkedIn Hiring Pulse"
description: "Score LinkedIn accounts by headcount growth, hiring trends, open roles by function, and tenure. Find accounts in a buying window. No cookies."
actor_slug: "linkedin-hiring-pulse"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-hiring-pulse?utm_source=github&utm_medium=content&utm_campaign=linkedin-hiring-pulse"
actor_pricing: "$50 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "MARKETING"]
permalink: /actors/linkedin-hiring-pulse/
---

Spot the accounts in a buying window. Enter LinkedIn company URLs; the Actor reads LinkedIn's own headcount and hiring trends, open roles by function, median tenure, and alumni counts, then returns a hiring-pulse score per account. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `company_urls` | array | LinkedIn company page URLs or slugs to score for hiring momentum. |

## What you get

One row per company:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "companyName": "Globex",
  "companyIndustry": "Software Development",
  "companyHeadcount": "850",
  "totalEmployees": 850,
  "headcountGrowthPct": 12.5,
  "headcountGrowthPeriod": "past 6 months",
  "totalHires": 64,
  "recentHireCount": 14,
  "hiringTrend": "up",
  "totalOpenRoles": 41,
  "openRolesByFunction": [
    { "function": "Engineering", "openRoles": 22 },
    { "function": "Sales", "openRoles": 11 }
  ],
  "topHiringFunction": "Engineering",
  "medianEmployeeTenure": "2.1 years",
  "alumniCount": 310,
  "hiringScore": 84,
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports companies requested and scored.

## Pricing

**$50 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-hiring-pulse).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "company_urls": [
    "https://www.linkedin.com/company/example"
  ]
}
```

## Get started

**[Run LinkedIn Hiring Pulse on Apify →](https://apify.com/data-slayer/linkedin-hiring-pulse?utm_source=github&utm_medium=content&utm_campaign=linkedin-hiring-pulse)**

## Categories

`LEAD_GENERATION`, `MARKETING`
