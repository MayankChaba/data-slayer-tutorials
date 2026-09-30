---
layout: actor
title: "LinkedIn Champion Tracker"
description: "Monitor champions and closed-lost contacts for job changes. Get movers with old/new role, new-company firmographics, and a re-engagement priority score. No cookies."
actor_slug: "linkedin-champion-job-change-tracker"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-champion-job-change-tracker?utm_source=github&utm_medium=content&utm_campaign=linkedin-champion-job-change-tracker"
actor_pricing: "$50 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-champion-job-change-tracker/
---

Track your champions and closed-lost contacts and get alerted when they change jobs. Enter LinkedIn profile URLs; the Actor stores a baseline and returns only the movers — their old and new role, the new employer's firmographics, and a re-engagement score. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | LinkedIn profile URLs of the champions / closed-lost contacts to monitor for job changes. |
| `state_key` | string | Namespaces the stored baseline snapshot. Use one key per list of champions so separate lists never overwrite each other. |
| `include_company_enrichment` | boolean | Add the mover's new employer industry and headcount to the row. |

## What you get

One row per mover:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "stateKey": "closed-won-2026",
  "profileUrl": "https://www.linkedin.com/in/example-champion-1",
  "fullName": "Example Champion",
  "headline": "VP Marketing",
  "previousTitle": "Director of Marketing",
  "previousCompany": "Acme Corp",
  "previousCompanyUrl": "https://www.linkedin.com/company/acme-corp",
  "newTitle": "VP Marketing",
  "newCompany": "Globex",
  "newCompanyUrl": "https://www.linkedin.com/company/globex",
  "newCompanyIndustry": "Software Development",
  "newCompanyHeadcount": 850,
  "movedOn": "2026-08-01",
  "priorityScore": 90,
  "source": "snapshot_diff",
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports profiles checked, profiles resolved, movers found, failures, and whether the run only stored a baseline.

## Pricing

**$50 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-champion-job-change-tracker).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/example-champion"
  ],
  "state_key": "default",
  "include_company_enrichment": true
}
```

## Get started

**[Run LinkedIn Champion Tracker on Apify →](https://apify.com/data-slayer/linkedin-champion-job-change-tracker?utm_source=github&utm_medium=content&utm_campaign=linkedin-champion-job-change-tracker)**

## Categories

`LEAD_GENERATION`, `SOCIAL_MEDIA`, `MARKETING`
