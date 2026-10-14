---
layout: actor
title: "LinkedIn Market Map Builder"
description: "Expand seed companies into a segmented market map via LinkedIn similar pages and ICP search, with firmographics and attribution. No cookies."
actor_slug: "linkedin-market-map-builder"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-market-map-builder?utm_source=github&utm_medium=content&utm_campaign=linkedin-market-map-builder"
actor_pricing: "$20.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-market-map-builder/
---

Map your whole market from a few seeds. Enter known-good companies or ICP filters; the Actor expands them through LinkedIn's own similar-pages data and ICP search into a segmented, attributed company universe — seeds, lookalikes, and ICP matches — each with firmographics. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `seed_company_urls` | array | Known-good companies (customers, closed-won deals, or a competitor's customers). Each seed is expanded into lookalikes. |
| `icp_industry` | array | Industries to match, human-readable (e.g. Software Development). |
| `icp_headcount` | array | Employee ranges: 1-10, 11-50, 51-200, 201-500, 501-1,000, 1,001-5,000, 5,001-10,000, 10,001+. |
| `icp_location` | array | City, region, or country. |
| `icp_technology` | array | Technologies the company uses (e.g. Salesforce, HubSpot). |
| `include_lookalikes` | boolean | Use LinkedIn's similar-pages data to expand each seed company. |
| `max_companies` | integer | Hard cap on companies returned. The main runtime and cost control. 1–1000. |

## What you get

One row per company:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "companyName": "Globex",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "companyIndustry": "Software Development",
  "companyHeadcount": "201-500",
  "companyLocation": "San Francisco, CA",
  "companyType": "Private",
  "companyWebsite": "https://globex.example",
  "segment": "lookalike",
  "seedSource": "Acme Corp",
  "matchReason": "similar to Acme Corp",
  "followers": "12,400",
  "founded": "2014",
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

`segment` is `seed`, `lookalike`, or `icp_match`.

The `OUTPUT` key-value-store record reports seeds, filters, companies found, returned, and the segment breakdown.

## Pricing

**$20.00 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-market-map-builder).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "seed_company_urls": [
    "https://www.linkedin.com/company/example"
  ],
  "icp_industry": [],
  "icp_headcount": [],
  "icp_location": [],
  "icp_technology": [],
  "include_lookalikes": true,
  "max_companies": 200
}
```

## Get started

**[Run LinkedIn Market Map Builder on Apify →](https://apify.com/data-slayer/linkedin-market-map-builder?utm_source=github&utm_medium=content&utm_campaign=linkedin-market-map-builder)**

## Categories

Lead Generation, Social Media, Marketing
