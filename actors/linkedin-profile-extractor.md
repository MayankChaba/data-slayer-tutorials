---
layout: actor
title: "LinkedIn Profile Extractor + Verified Email"
description: "LinkedIn profile extractor with verified email export. Submit any LinkedIn profile URL and get a full contact record — name, job title, company, headline, and verified email address — ready to drop into your outreach tool or CRM. No cookies. No login. No subscription. "
actor_slug: "linkedin-profile-extractor"
actor_account: "patient_discovery"
actor_url: "https://apify.com/patient_discovery/linkedin-profile-extractor?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-extractor"
actor_pricing: "$15.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-profile-extractor/
---

Paste LinkedIn profile URLs, get back a complete contact list ready for outreach. Returns name, company, title, location, and verified email address. No LinkedIn account required. Works with Sales Navigator links too.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_urls` | array | One profile URL per row (standard or Sales Navigator). Paste hundreds or thousands of URLs here. Duplicates are removed automatically. |
| `linkedin_url` | string | Optional. Used only if "LinkedIn profile URL(s)" is empty — for older integrations that pass one URL here. |
| `extract_email` | boolean | Find and verify the person's work email using their name and company. Included by default. |

## What you get

| Field | Description |
|---|---|
| Full name | First + last |
| Email | Verified business email |
| Email status | valid / risky / unknown |
| Job title | Current role |
| Company | Current employer |
| Company domain | Used for email finding |
| Headline | LinkedIn headline |
| Location | City, region, country |
| LinkedIn URL | Input URL, confirmed |
| Follower count | Profile authority signal |
| Summary | About section |
| Work history | All past positions |
| Education | Degrees and institutions |
| Skills | Up to 50 listed skills |
| Certifications | Professional certs |

## Pricing

**$15.00 per 1,000 results** (Free tier)  
Actor start: $0.0001 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/linkedin-profile-extractor).

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

**[Run LinkedIn Profile Extractor + Verified Email on Apify →](https://apify.com/patient_discovery/linkedin-profile-extractor?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-extractor)**

## Categories

Social Media, Lead Generation
