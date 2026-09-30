---
layout: actor
title: "LinkedIn Company Data Extractor "
description: "LinkedIn company data extractor. Pull 900+ structured data points from any LinkedIn company page — employee count, industry, headquarters, funding rounds, investors, open job count, and affiliated companies. No cookies. No LinkedIn account required. Built for data engineers and business intelligence"
actor_slug: "linkedin-company-data-extractor"
actor_account: "iron-crawler"
actor_url: "https://apify.com/iron-crawler/linkedin-company-data-extractor?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-data-extractor"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-company-data-extractor/
---

Extract 900+ structured data points from any LinkedIn company profile. Returns industry, headcount, funding rounds, investors, office locations, open jobs, affiliated pages, and more. No cookies or login required. Clean JSON output.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Company Url to scraping |

## What you get

```json
{
  "company_name": "Stripe",
  "linkedin_url": "https://www.linkedin.com/company/stripe/",
  "company_type": "Privately Held",
  "industry": "Financial Services",
  "employee_count": 8400,
  "employee_count_range": "5001-10000",
  "founded_year": 2010,
  "headquarters": "South San Francisco, CA",
  "website": "https://stripe.com",
  "follower_count": 620000,
  "open_jobs": 184,
  "specialties": ["Payments", "API", "Developer Tools"],
  "funding_rounds": [
    {
      "round_type": "Series I",
      "announced_date": "2021-03-14",
      "money_raised": 600000000,
      "currency": "USD",
      "lead_investors": ["Allianz X", "AXA"]
    }
  ],
  "similar_companies": [...],
  "affiliated_pages": [...]
}
```

## Use cases

- **Market research** — build structured datasets of companies in a target vertical
- **CRM enrichment** — enrich account records with firmographic data from LinkedIn
- **Investor research** — extract funding round history and investor lists
- **Sales targeting** — filter companies by headcount, industry, and location

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/linkedin-company-data-extractor).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://www.linkedin.com/company/google/"
}
```

## Get started

**[Run LinkedIn Company Data Extractor
 on Apify →](https://apify.com/iron-crawler/linkedin-company-data-extractor?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-data-extractor)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
