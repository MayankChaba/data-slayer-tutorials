---
layout: actor
title: "LinkedIn Talent Mapper"
description: "Map a talent market by role, seniority, function, location, and industry. Ranked people with title, company, tenure, and profile. No cookies."
actor_slug: "linkedin-talent-mapper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-talent-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-talent-mapper"
actor_pricing: "$30 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-talent-mapper/
---

Map the whole talent market, company-first. Enter role, seniority, function, location, and industry filters; the Actor returns the people who exist in that market — ranked, with title, company, tenure, and profile. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `job_title` | string | Target title (e.g. "Data Engineer"). |
| `keywords` | string | Free-text keywords to match in profiles. |
| `seniority` | array | Seniority levels (e.g. cxO, vp, director, manager, senior, entry). |
| `function` | array | Job functions (e.g. Engineering, Sales, Marketing). |
| `location` | array | City, region, or country. |
| `industry` | array | Employer industries. |
| `company_headcount` | array | Employer size bands (e.g. 51-200, 201-500). |
| `max_people` | integer | Hard cap on people returned. The main runtime and cost control. 1–500. |

## What you get

One row per person:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "fullName": "Example Person",
  "jobTitle": "Senior Data Engineer",
  "companyName": "Globex",
  "location": "London, United Kingdom",
  "tenureYears": 3.2,
  "seniorityScore": 50,
  "matchScore": 60,
  "profileUrl": "https://www.linkedin.com/in/example-person",
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports filters applied, people found and returned, and the top companies.

## Pricing

**$30 per 1,000 results** (Free tier)  
Actor start: $0.05 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-talent-mapper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "job_title": "",
  "keywords": "",
  "seniority": [],
  "function": [],
  "location": [],
  "industry": [],
  "company_headcount": [],
  "max_people": 100
}
```

## Get started

**[Run LinkedIn Talent Mapper on Apify →](https://apify.com/data-slayer/linkedin-talent-mapper?utm_source=github&utm_medium=content&utm_campaign=linkedin-talent-mapper)**

## Categories

`LEAD_GENERATION`, `SOCIAL_MEDIA`, `MARKETING`
