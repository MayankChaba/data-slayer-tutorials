---
layout: actor
title: "LinkedIn Buying-Committee Mapper"
description: "Map a LinkedIn company into its buying committee: economic buyer, technical buyer, champion, user, and blocker, with titles and profiles. No cookies."
actor_slug: "linkedin-buying-committee-mapper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-buying-committee-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-buying-committee-mapper"
actor_pricing: "$40 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "MARKETING"]
permalink: /actors/linkedin-buying-committee-mapper/
---

Turn one company into its buying committee. Enter a LinkedIn company URL; the Actor finds the senior people who matter and maps each to a committee role — economic buyer, technical buyer, champion, user, or blocker — with title, function, tenure, and profile. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `company_url` | string | LinkedIn company page URL or slug to map the buying committee for. |
| `seniority` | array | Optional seniority levels to keep (e.g. cxO, vp, director). Leave empty for all senior people. |
| `max_members` | integer | Hard cap on people returned. The main runtime and cost control. 1–100. |

## What you get

One row per person:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "companyName": "Globex",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "committeeRole": "economic_buyer",
  "rolePriority": 1,
  "fullName": "Example Executive",
  "jobTitle": "VP Sales",
  "seniority": "",
  "function": "",
  "location": "San Francisco, CA",
  "tenureYears": 2.4,
  "profileUrl": "https://www.linkedin.com/in/example-executive",
  "roleReason": "Executive — owns the budget",
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports members found, returned, and the role breakdown.

## Pricing

**$40 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-buying-committee-mapper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "company_url": "https://www.linkedin.com/company/example",
  "seniority": [],
  "max_members": 25
}
```

## Get started

**[Run LinkedIn Buying-Committee Mapper on Apify →](https://apify.com/data-slayer/linkedin-buying-committee-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-buying-committee-mapper)**

## Categories

`LEAD_GENERATION`, `MARKETING`
