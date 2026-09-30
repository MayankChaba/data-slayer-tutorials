---
layout: actor
title: "LinkedIn Company Employees"
description: "Find employees of any LinkedIn company by URL, filtered by title, seniority, function and location. Export name, title, company and profile URL. No cookies."
actor_slug: "linkedin-company-employees"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-company-employees?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-employees"
actor_pricing: "$4 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "BUSINESS"]
permalink: /actors/linkedin-company-employees/
---

Get the people who work at one or more LinkedIn companies, with optional title, seniority, function and location filters. No cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `company_urls` | array | Required. LinkedIn company page URLs (e.g. https://www.linkedin.com/company/microsoft/) or bare slugs (e.g. microsoft). Add up to 50 companies. |
| `job_title` | array | Filter employees by job title, e.g. CTO or Chief Technology Officer. |
| `seniority` | array | Filter employees by seniority level, e.g. CXO, Vice President, Director. |
| `function` | array | Filter employees by department/function, e.g. Engineering, Marketing, Sales, Finance, Operations, Product Management. |
| `location` | array | Filter employees by city, region, or country, e.g. San Francisco or United Kingdom. |
| `max_results` | integer | Maximum number of employees to save. Enter 0 for no limit (up to a 60-page safety cap; 25 results per page). |

## What you get

Each dataset row includes:

- `full_name`, `first_name`, `last_name`
- `title` — current job title
- `company` — current company
- `location`
- `profile_url` — LinkedIn profile URL
- `summary`, `profile_picture`, `open_link`
- `tenure_years` / `tenure_months`
- plus `input_page` and `fetched_at`

## Use cases

- **Account mapping** — build a stakeholder map for a target account before outreach.
- **Recruiting** — source candidates by function and seniority at specific companies.
- **Competitive research** — understand a competitor's team structure and size.
- **ABM list building** — get every relevant person at your target accounts.
- **CRM enrichment** — feed company + person data into your CRM.

## Pricing

**$4 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-company-employees).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "company_urls": [
    "https://www.linkedin.com/company/microsoft/"
  ],
  "job_title": [],
  "seniority": [],
  "function": [],
  "location": [],
  "max_results": 100
}
```

## Get started

**[Run LinkedIn Company Employees on Apify →](https://apify.com/data-slayer/linkedin-company-employees?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-employees)**

## Categories

`LEAD_GENERATION`, `SOCIAL_MEDIA`, `BUSINESS`
