---
layout: actor
title: "LinkedIn Email Finder from Profile"
description: "LinkedIn email finder from profile URL. Input any LinkedIn profile link, get back verified contact data — email address, job title, company name, and 500+ profile data points. Works without cookies or session tokens. Built for developers, sales engineers, and data teams running enrichment pipelines "
actor_slug: "linkedin-email-finder-profile"
actor_account: "iron-crawler"
actor_url: "https://apify.com/iron-crawler/linkedin-email-finder-profile?utm_source=github&utm_medium=content&utm_campaign=linkedin-email-finder-profile"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-email-finder-profile/
---

Find verified business emails from any LinkedIn profile URL. No cookies, no login, no LinkedIn account needed. Returns name, company, job title, headline, location, and verified email — structured JSON, ready for Clay, Make, or any CRM.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_urls` | array | One profile URL per row (standard or Sales Navigator). Paste hundreds or thousands of URLs here. Duplicates are removed automatically. |
| `linkedin_url` | string | Optional. Used only if "LinkedIn profile URL(s)" is empty — for older integrations that pass one URL here. |
| `extract_email` | boolean | Find and verify the person's work email using their name and company. Included by default. |

## What you get

```json
{
  "full_name": "Jane Doe",
  "headline": "VP of Sales at Acme Corp",
  "location": "San Francisco, CA",
  "linkedin_url": "https://www.linkedin.com/in/janedoe/",
  "current_company": "Acme Corp",
  "current_title": "VP of Sales",
  "company_domain": "acmecorp.com",
  "email": "jane.doe@acmecorp.com",
  "email_status": "valid",
  "email_confidence": 97,
  "millionverifier_result": "ok",
  "millionverifier_quality": "high",
  "followers": 12400,
  "connections": 500,
  "skills": ["Sales Strategy", "Revenue Operations", "B2B SaaS"],
  "experience": [ ... ],
  "education": [ ... ]
}
```

## Use cases

**Outbound prospecting** — submit a list of LinkedIn profile URLs sourced from Sales Navigator, get back a verified contact list for your sequences.

**CRM enrichment** — you have names but no emails; pipe LinkedIn URLs through this actor to fill in the gaps.

**API / data pipeline integration** — call this actor via the Apify API in your Node.js or Python workflows. Output is clean JSON on every run.

**Clay or n8n enrichment columns** — use the Apify webhook integration to run this actor inline inside your Clay table or n8n automation.

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/linkedin-email-finder-profile).

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

**[Run LinkedIn Email Finder from Profile on Apify →](https://apify.com/iron-crawler/linkedin-email-finder-profile?utm_source=github&utm_medium=content&utm_campaign=linkedin-email-finder-profile)**

## Categories

Social Media, Lead Generation
