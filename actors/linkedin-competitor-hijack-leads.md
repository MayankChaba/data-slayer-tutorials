---
layout: actor
title: "LinkedIn Competitor Hijack Leads"
description: "Find and score the people engaging with competitor LinkedIn posts. Ranked by seniority and engagement depth, with company and exclusions. No cookies."
actor_slug: "linkedin-competitor-hijack-leads"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-competitor-hijack-leads?utm_source=github&utm_medium=content&utm_campaign=linkedin-competitor-hijack-leads"
actor_pricing: "$40 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "MARKETING"]
permalink: /actors/linkedin-competitor-hijack-leads/
---

Turn your competitors' audiences into your pipeline. Enter competitor profile or company URLs; the Actor finds everyone who engaged with their posts, scores each person by seniority and engagement depth, resolves their company, and honours your exclusion list. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `source_profile_urls` | array | LinkedIn profile URLs of competitor executives or creators whose posts define the audience. |
| `source_company_urls` | array | LinkedIn company page URLs whose posts define the audience. |
| `max_posts_per_source` | integer | Hard cap on posts scanned per source. The main runtime and cost control. 1–30. |
| `exclude_companies` | array | Company names or LinkedIn URLs to exclude — your own company, customers, or a do-not-contact list. |
| `include_reactions` | boolean | Count people who reacted. Reactions score lower than comments. |
| `include_commenters` | boolean | Count people who commented. Comments score higher than reactions. |

## What you get

One row per scored lead:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "profileUrl": "https://www.linkedin.com/in/example-lead",
  "fullName": "Example Lead",
  "headline": "VP Marketing",
  "companyName": "Globex",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "commentCount": 3,
  "reactionCount": 2,
  "uniquePostsEngaged": 4,
  "seniorityScore": 90,
  "engagementScore": 68,
  "leadScore": 81,
  "sourcesEngaged": ["example-competitor"],
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports sources, posts scanned, engagers found, leads written, and how many were excluded.

## Pricing

**$40 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-competitor-hijack-leads).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "source_profile_urls": [
    "https://www.linkedin.com/in/example-competitor"
  ],
  "source_company_urls": [],
  "max_posts_per_source": 8,
  "exclude_companies": [],
  "include_reactions": true,
  "include_commenters": true
}
```

## Get started

**[Run LinkedIn Competitor Hijack Leads on Apify →](https://apify.com/data-slayer/linkedin-competitor-hijack-leads?utm_source=github&utm_medium=content&utm_campaign=linkedin-competitor-hijack-leads)**

## Categories

`LEAD_GENERATION`, `MARKETING`
