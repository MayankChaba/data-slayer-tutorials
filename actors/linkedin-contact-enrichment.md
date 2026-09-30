---
layout: actor
title: "LinkedIn Contact Data Enrichment Tool "
description: "LinkedIn contact enrichment tool. Transform LinkedIn profile URLs into structured contact records with 500+ fields — work history, education, skills, certifications, and verified email. No cookies. No LinkedIn login required. Outputs clean JSON for CRM import, research datasets, and data enrichment "
actor_slug: "linkedin-contact-enrichment"
actor_account: "monumental_world"
actor_url: "https://apify.com/monumental_world/linkedin-contact-enrichment?utm_source=github&utm_medium=content&utm_campaign=linkedin-contact-enrichment"
actor_pricing: "$15 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-contact-enrichment/
---

Enrich any LinkedIn profile URL into a comprehensive contact record. Returns 500+ structured data points — full experience history, education, skills, certifications — plus verified email. Built for data teams, researchers, and enrichment pipelines.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_urls` | array | One profile URL per row (standard or Sales Navigator). Paste hundreds or thousands of URLs here. Duplicates are removed automatically. |
| `linkedin_url` | string | Optional. Used only if "LinkedIn profile URL(s)" is empty — for older integrations that pass one URL here. |
| `extract_email` | boolean | Find and verify the person's work email using their name and company. Included by default. |

## What you get

```json
{
  "full_name": "Alexandra Chen",
  "first_name": "Alexandra",
  "last_name": "Chen",
  "headline": "Data Engineering Lead at Stripe",
  "location": "New York, NY",
  "country": "US",
  "linkedin_url": "https://www.linkedin.com/in/alexandrachen/",
  "email": "a.chen@stripe.com",
  "email_status": "valid",
  "email_confidence": 94,
  "millionverifier_result": "ok",
  "millionverifier_quality": "high",
  "current_company": "Stripe",
  "current_title": "Data Engineering Lead",
  "company_domain": "stripe.com",
  "company_linkedin_url": "https://www.linkedin.com/company/stripe/",
  "industry": "Financial Services",
  "employee_count": "5001-10000",
  "followers": 8300,
  "connections": 500,
  "about": "Building data infrastructure at scale...",
  "skills": ["Apache Spark", "dbt", "Snowflake", "Python"],
  "experience": [
    {
      "title": "Data Engineering Lead",
      "company": "Stripe",
      "start_date": "2021-09",
      "end_date": null,
      "location": "New York, NY",
      "description": "..."
    }
  ],
  "education": [...],
  "certifications": [...],
  "also_viewed": [...]
}
```

## Pricing

**$15 per 1,000 results** (Free tier)  
Actor start: $0.0001 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/monumental_world/linkedin-contact-enrichment).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_urls": [],
  "linkedin_url": "",
  "extract_email": true
}
```

## Get started

**[Run LinkedIn Contact Data Enrichment Tool
 on Apify →](https://apify.com/monumental_world/linkedin-contact-enrichment?utm_source=github&utm_medium=content&utm_campaign=linkedin-contact-enrichment)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
