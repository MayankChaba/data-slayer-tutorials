---
layout: actor
title: "LinkedIn Profile Scraper · Fresh · No Cookies"
description: "Scrape fresh LinkedIn profile data in bulk from profile URLs with no cookies or login. Export structured JSON, CSV, or Excel. $4 per 1,000 profiles."
actor_slug: "linkedin-profile-scraper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-profile-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-scraper"
actor_pricing: "$4 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "BUSINESS"]
permalink: /actors/linkedin-profile-scraper/
---

Scrape fresh LinkedIn profile data in bulk from profile URLs. Export structured JSON, CSV, or Excel with experience, education, skills, job, company, and location fields. No LinkedIn login or cookies. $4 per 1,000 profiles.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_urls` | array | One profile URL per row (standard or Sales Navigator). Paste hundreds or thousands of URLs here. Duplicates are removed automatically. |
| `enrich_flags` | array | Optional extra profile data, billed at $8 per 1,000 flags and charged only when a flag returns data. Allowed values: company_interest, top_voices_interest, group_interest, schoo… |

## What you get

```json
{
  "full_name": "Satya Nadella",
  "first_name": "Satya",
  "last_name": "Nadella",
  "username": "satyanadella",
  "profile_link": "https://linkedin.com/in/satyanadella",
  "profile_headline": "Chairman and CEO at Microsoft",
  "description": "As chairman and CEO of Microsoft...",
  "job_title": "Chairman and CEO",
  "current_company_name": "Microsoft",
  "company_industry": "Computer Software",
  "current_company_linkedin_url": "https://www.linkedin.com/company/microsoft/",
  "location": "Redmond, Washington, United States",
  "country": "United States",
  "experience": [
    {
      "company_name": "Microsoft",
      "company_headcount_range": "10,001+ employees",
      "company_industry": "Software Development",
      "company_website": "news.microsoft.com",
      "job_title": "Chairman and CEO",
      "job_started_on": "2-2014",
      "job_still_working": true
    }
  ],
  "education": [
    {
      "university_id": "8398",
      "started_on": { "year": 1994 },
      "ended_on": { "year": 1996 }
    }
  ]
}
```

The exact dataset can contain additional profile fields. Empty or unavailable LinkedIn sections may be returned as empty strings, `null`, or empty arrays.

## Use cases

### CRM and lead enrichment

Turn stored LinkedIn URLs into structured job, company, location, and career-history fields for segmentation and routing.

### Recruiting and candidate research

Build structured candidate records from known LinkedIn profile URLs and export them to a spreadsheet, ATS workflow, or internal database.

### Sales and account research

Refresh titles, companies, industries, and work histories before account planning, lead scoring, or personalized outreach.

### Market and workforce research

Analyze career paths, company movement, job-title distributions, education histories, and professional backgrounds.

### AI-agent context

Give an AI agent structured professional context before meeting preparation, research, routing, or personalized content generation.

## Pricing

**$4 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-profile-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_urls": [],
  "enrich_flags": []
}
```

## Get started

**[Run LinkedIn Profile Scraper · Fresh · No Cookies on Apify →](https://apify.com/data-slayer/linkedin-profile-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-scraper)**

## Categories

`LEAD_GENERATION`, `SOCIAL_MEDIA`, `BUSINESS`
