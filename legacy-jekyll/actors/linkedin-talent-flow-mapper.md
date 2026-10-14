---
layout: actor
title: "LinkedIn Talent Flow Mapper"
description: "Map a company's talent flow from LinkedIn job-change events: who joined, who left, feeder and destination companies, and net flow. No cookies."
actor_slug: "linkedin-talent-flow-mapper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-talent-flow-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-talent-flow-mapper"
actor_pricing: "$40.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-talent-flow-mapper/
---

See where a company's talent comes from and where it goes. Enter a LinkedIn company URL; the Actor reads recent job-change events — who joined, who left, who was promoted — and maps feeder companies, destination companies, notable movers, and net flow. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `company_url` | string | LinkedIn company page URL or slug (e.g. https://www.linkedin.com/company/globex or globex). |
| `days_ago` | integer | How far back to look for job-change events, in days. 1–365. |
| `max_people` | integer | Hard cap on how many movers get their previous/next employer resolved. The main runtime and cost control. 1–100. |
| `max_pages` | integer | How many pages of job-change events to read (up to 50 events per page). 1–10. |

## What you get

One row per flow insight:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "companyName": "Globex",
  "companyIndustry": "Software Development",
  "companyHeadcount": 850,
  "peopleSampled": 18,
  "insightType": "feeder_company",
  "counterpartyCompany": "Acme Corp",
  "counterpartyCompanyUrl": "https://www.linkedin.com/company/acme-corp",
  "peopleCount": 4,
  "share": 0.2222,
  "personName": "",
  "personProfileUrl": "",
  "previousTitle": "",
  "newTitle": "",
  "transitionedOn": "",
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

`insightType` is one of `feeder_company`, `destination_company`, `notable_mover`, or `net_flow`.

The `OUTPUT` key-value-store record reports events, joined/left/title-change counts, movers enriched, and rows written.

## Pricing

**$40.00 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-talent-flow-mapper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "company_url": "https://www.linkedin.com/company/example",
  "days_ago": 90,
  "max_people": 25,
  "max_pages": 3
}
```

## Get started

**[Run LinkedIn Talent Flow Mapper on Apify →](https://apify.com/data-slayer/linkedin-talent-flow-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-talent-flow-mapper)**

## Categories

Lead Generation, Social Media, Marketing
