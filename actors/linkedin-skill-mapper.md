---
layout: actor
title: "LinkedIn Skill Mapper"
description: "Map where a skill or technology concentrates across companies, with counts and share, by location and industry. No cookies or login."
actor_slug: "linkedin-skill-mapper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-skill-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-skill-mapper"
actor_pricing: "$30 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-skill-mapper/
---

Find where a rare skill actually lives. Enter a technology or skill plus optional location and industry filters; the Actor returns the companies where that skill concentrates, with counts and share, so hard-to-fill roles become findable. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `technology` | string | The skill or technology to map (e.g. Kubernetes, Salesforce, Rust). |
| `keywords` | string | Optional free-text keywords to narrow the pool further. |
| `location` | array | City, region, or country to scope the market. |
| `industry` | array | Employer industries to scope the market. |
| `seniority` | array | Optional seniority filter (e.g. senior, manager, director). |
| `max_people` | integer | Hard cap on people sampled. The main runtime and cost control. 1–500. |

## What you get

One row per company, plus a summary row:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "insightType": "company_concentration",
  "technology": "Kubernetes",
  "companyName": "Globex",
  "peopleCount": 14,
  "share": 0.14,
  "totalSampled": 100,
  "locations": [],
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The summary row (`insightType: "summary"`) carries `peopleCount` = total sampled and `locations` = the top locations.

The `OUTPUT` key-value-store record reports the technology, people sampled, companies with the skill, and top locations.

## Pricing

**$30 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-skill-mapper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "technology": "Kubernetes",
  "keywords": "",
  "location": [],
  "industry": [],
  "seniority": [],
  "max_people": 100
}
```

## Get started

**[Run LinkedIn Skill Mapper on Apify →](https://apify.com/data-slayer/linkedin-skill-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-skill-mapper)**

## Categories

`LEAD_GENERATION`, `SOCIAL_MEDIA`, `MARKETING`
