---
layout: actor
title: "LinkedIn Company Search (ICP)"
description: "Find LinkedIn companies by industry, location, headcount, type and technology. Export company name, size, industry and URL. No cookies required."
actor_slug: "linkedin-company-search"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-company-search?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-search"
actor_pricing: "$4 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "BUSINESS", "SOCIAL_MEDIA"]
permalink: /actors/linkedin-company-search/
---

Find LinkedIn companies with ICP filters - industry, location, headcount, company type, technology and followers. No cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `industry` | array | Industry name(s), e.g. Software Development, Financial Services. |
| `location` | array | City, region, or country, e.g. San Francisco or United Kingdom. |
| `company_headcount` | array | Company size range(s). Valid values: 1-10, 11-50, 51-200, 201-500, 501-1,000, 1,001-5,000, 5,001-10,000, 10,001+. |
| `company_type` | array | Company type(s). Valid values: Public, Private, Non Profit, Educational, Government. |
| `technology` | array | Technologies used by the company, e.g. Salesforce or HubSpot. |
| `followers_count` | array | LinkedIn follower count range. Valid values: 1-50, 51-100, 101-1000, 1001-5000, 5001+. |
| `max_results` | integer | Maximum number of companies to save. Enter 0 for no limit (up to a 60-page safety cap; 25 results per page). |

## What you get

Each dataset row includes:

- `company_name`
- `industry`
- `employee_count` and `employee_count_range`
- `company_url` — LinkedIn company page URL
- `description`
- `logo_url`
- `company_id`
- plus `input_page` and `fetched_at`

## Use cases

- **TAM / market mapping** — count and size a segment before committing to it.
- **Account-based marketing** — build a target-account list by industry, size, and stack.
- **Tech-stack prospecting** — find companies using (or missing) a given technology.
- **Lookalike discovery** — pair with the LinkedIn Company Scraper to enrich each match.
- **Recruiting & partnerships** — source companies by size and location.

## Pricing

**$4 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-company-search).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "industry": [],
  "location": [],
  "company_headcount": [],
  "company_type": [],
  "technology": [],
  "followers_count": [],
  "max_results": 100
}
```

## Get started

**[Run LinkedIn Company Search (ICP) on Apify →](https://apify.com/data-slayer/linkedin-company-search?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-search)**

## Categories

`LEAD_GENERATION`, `BUSINESS`, `SOCIAL_MEDIA`
