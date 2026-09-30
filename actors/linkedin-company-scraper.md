---
layout: actor
title: "LinkedIn Company Scraper"
description: "Scrape LinkedIn company pages for size, industry, employees, headquarters and more. Public company data extracted with no cookies, no login required."
actor_slug: "linkedin-company-scraper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-company-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-scraper"
actor_pricing: "$4 per 1,000 results (Free tier)"
categories: ["BUSINESS", "LEAD_GENERATION", "SOCIAL_MEDIA"]
permalink: /actors/linkedin-company-scraper/
---

LinkedIn Company Scraper - extract public data cookieless.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Company Url to scraping |
| `company_insights` | boolean | Adds headcount trends, hiring trends, notable alumni, job openings by function, and median employee tenure. Billed at $40 per 1,000 results, charged only when insights are retur… |
| `get_funding_rounds` | boolean | Adds the company's Crunchbase funding round history. Billed at $20 per 1,000 results, charged only when funding rounds are returned. |

## Pricing

**$4 per 1,000 results** (Free tier)  
Actor start: $0.0001 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-company-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://www.linkedin.com/company/google/",
  "company_insights": false,
  "get_funding_rounds": false
}
```

## Get started

**[Run LinkedIn Company Scraper on Apify →](https://apify.com/data-slayer/linkedin-company-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-scraper)**

## Categories

`BUSINESS`, `LEAD_GENERATION`, `SOCIAL_MEDIA`
