---
layout: actor
title: "LinkedIn People Search (ICP)"
description: "Find LinkedIn prospects by job title, seniority, function, company, location and industry. Export name, title, company and profile URL. No cookies required."
actor_slug: "linkedin-people-search"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-people-search?utm_source=github&utm_medium=content&utm_campaign=linkedin-people-search"
actor_pricing: "$4.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "BUSINESS"]
permalink: /actors/linkedin-people-search/
---

Find LinkedIn people and decision-makers with ICP filters - job title, seniority, function, company, location, industry and more. No cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `keywords` | string | Free-text query matched across the whole profile (headline, summary, positions). Maximum 500 characters. |
| `job_title` | array | Job title(s) to filter by, e.g. CTO or Chief Technology Officer. |
| `seniority` | array | Seniority level(s), e.g. CXO, Vice President, Director. |
| `function` | array | Department/function, e.g. Engineering, Marketing, Sales, Finance, Operations, Product Management. |
| `company_name` | array | Company name(s), e.g. Stripe or Plaid. |
| `company_linkedin_urls` | array | LinkedIn company page URL(s), e.g. https://www.linkedin.com/company/salesforce/. |
| `company_ids` | array | Raw LinkedIn numeric company ID(s), e.g. 1441. Must be numbers. |
| `location` | array | City, region, or country, e.g. San Francisco or United Kingdom. |
| `industry` | array | Industry name(s), e.g. Software Development. |
| `company_headcount` | array | Company size range(s). Valid values: 1-10, 11-50, 51-200, 201-500, 501-1,000, 1,001-5,000, 5,001-10,000, 10,001+. |
| `company_type` | array | Company type(s). Valid values: Public, Private, Non Profit, Educational, Government. |
| `technology` | array | Technologies used by the person's company, e.g. Salesforce. |
| `school` | array | University or school name(s), e.g. MIT. |
| `years_in_position` | array | Years in current role. Valid values: Less than 1 year, 1 to 2 years, 3 to 5 years, 6 to 10 years, More than 10 years. |
| `followers_count` | array | LinkedIn follower count range. Valid values: 1-50, 51-100, 101-1000, 1001-5000, 5001+. |
| `profile_language` | array | Language the profile is written in, e.g. English, Spanish, French, German. |
| `recently_changed_jobs` | boolean | Only people who recently started a new position. |
| `posted_on_linkedin` | boolean | Only people who have recently posted on LinkedIn. |
| `max_results` | integer | Maximum number of profiles to save. Enter 0 for no limit (up to a 60-page safety cap; 25 results per page). |

## What you get

Each dataset row includes:

- `full_name`, `first_name`, `last_name`
- `title` — current job title
- `company` — current company
- `location`
- `profile_url` — LinkedIn profile URL
- `summary` — profile summary/headline text
- `tenure_years` / `tenure_months` — time in the current role
- `profile_picture`, `open_link`
- plus `input_page` and `fetched_at`

## Use cases

- **Prospecting** — build targeted lead lists for outbound by title, function, and company size.
- **TAM research** — size and map a market before committing to a segment.
- **Account mapping** — find the right stakeholders at target accounts.
- **Recruiting** — source candidates by function, seniority, and location.
- **Enrichment / CRM backfill** — feed name + title + company into your CRM.

## Pricing

**$4.00 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-people-search).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "keywords": "",
  "job_title": [],
  "seniority": [],
  "function": [],
  "company_name": [],
  "company_linkedin_urls": [],
  "company_ids": [],
  "location": [],
  "industry": [],
  "company_headcount": [],
  "company_type": [],
  "technology": [],
  "school": [],
  "years_in_position": [],
  "followers_count": [],
  "profile_language": [],
  "recently_changed_jobs": false,
  "posted_on_linkedin": false,
  "max_results": 100
}
```

## Get started

**[Run LinkedIn People Search (ICP) on Apify →](https://apify.com/data-slayer/linkedin-people-search?utm_source=github&utm_medium=content&utm_campaign=linkedin-people-search)**

## Categories

Lead Generation, Social Media, Business
