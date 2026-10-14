---
layout: actor
title: "LinkedIn Job Change Tracker"
description: "Track LinkedIn job changes: new roles, departures and promotions, filtered by company, title, location and recency. No cookies or login required."
actor_slug: "linkedin-job-change-tracker"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-job-change-tracker?utm_source=github&utm_medium=content&utm_campaign=linkedin-job-change-tracker"
actor_pricing: "$4.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "BUSINESS"]
permalink: /actors/linkedin-job-change-tracker/
---

Track LinkedIn job changes - people starting a new role, leaving a company, or being promoted - filtered by company, title, location and recency. No cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `company_urls` | array | LinkedIn company URLs (e.g. https://www.linkedin.com/company/stripe/) or bare slugs (e.g. stripe). Up to 50 companies total across this field and Company IDs. |
| `organization_ids` | array | Datamagnet organization IDs (dm_org_...) returned by a previous run. Faster than company URLs. Up to 50 companies total across this field and Company URLs. |
| `event_type` | string | Restrict to one kind of job-change event. Choose Any event type to receive all three. |
| `title` | string | Word-match on the new job title, minimum 3 characters. For example Engineering matches VP of Engineering and Engineering Manager. |
| `geo_city` | string | Partial match on the person's current city, minimum 3 characters. For example Berlin. |
| `geo_country_code` | string | Two-letter country code for the person's current location, case-insensitive. For example DE or US. |
| `days_ago` | integer | Recency window on the detection time, from 1 to 365 days. Leave empty to search all events. |
| `max_results` | integer | Maximum number of job-change events to save. Enter 0 for no limit (up to a 40-page safety cap). |
| `limit_per_page` | integer | How many events to request per page, from 1 to 50. Higher values finish faster. |

## What you get

```json
{
  "event_type": "title_change",
  "changed_at": "2026-05-01T00:00:00Z",
  "detected_at": "2026-05-01T17:20:04.389921Z",
  "detection_lag_days": 0,
  "title": { "current": "Data Engineer", "previous": "Data Analyst" },
  "person": {
    "profile_id": "dm_prsn_tnd66ysw4lmt4yighsalfnmf2tcanlpmp3exh6q",
    "handle": "lecomte-quentin",
    "full_name": "Quentin Lecomte",
    "headline": "Data Engineer @ Aktivco | Camusat Group",
    "linkedin_url": "https://linkedin.com/in/lecomte-quentin"
  },
  "organization": {
    "organization_id": "dm_org_33u32yb3sh56d6jxiw3lzljselgver2p4ons6",
    "name": "AktivCo",
    "slug": "activco",
    "linkedin_url": "https://www.linkedin.com/company/activco"
  },
  "person_full_name": "Quentin Lecomte",
  "person_linkedin_url": "https://linkedin.com/in/lecomte-quentin",
  "organization_name": "AktivCo",
  "organization_linkedin_url": "https://www.linkedin.com/company/activco",
  "title_current": "Data Engineer",
  "title_previous": "Data Analyst",
  "input_page": 1,
  "fetched_at": "2026-09-23T00:00:00Z"
}
```

## Use cases

### Champion tracking
Re-engage the power users and decision-makers who changed jobs, at their new company — while the relationship is still warm.

### Customer churn signals
See who just left an account you serve, and get ahead of the renewal conversation.

### Territory and hiring-signal prospecting
Find companies hiring into a function, or people promoted into budget-owning roles, and reach out with timely context.

### Enrichment and routing
Feed new-role events into your CRM, scoring, and routing workflows so the right rep sees them first.

### AI-agent context
Give an agent structured job-change context before drafting outreach.

## Pricing

**$4.00 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-job-change-tracker).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "company_urls": [],
  "organization_ids": [],
  "event_type": "any",
  "title": "",
  "geo_city": "",
  "geo_country_code": "",
  "days_ago": 0,
  "max_results": 100,
  "limit_per_page": 25
}
```

## Get started

**[Run LinkedIn Job Change Tracker on Apify →](https://apify.com/data-slayer/linkedin-job-change-tracker?utm_source=github&utm_medium=content&utm_campaign=linkedin-job-change-tracker)**

## Categories

Lead Generation, Social Media, Business
