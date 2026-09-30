---
layout: actor
title: "LinkedIn Job Scraper"
description: "Extract LinkedIn job postings by ID or URL: title, description, salary, seniority, apply counts and hiring company. No cookies or login required."
actor_slug: "linkedin-job-scraper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-job-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-job-scraper"
actor_pricing: "$4 per 1,000 results (Free tier)"
categories: ["JOBS", "LEAD_GENERATION", "SOCIAL_MEDIA"]
permalink: /actors/linkedin-job-scraper/
---

Fetch full details for LinkedIn job postings by job ID or URL - title, description, salary, seniority, workplace type, apply counts and the hiring company. No cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `job_ids_or_urls` | array | Required. Add 1-1,000 LinkedIn job posting IDs (e.g. 4443378596) or job URLs (linkedin.com/jobs/view/..., .../jobs/view/slug-at-company-<id>, or .../jobs/search/?currentJobId=<i… |
| `include_hiring_team` | boolean | Adds the job poster and any recruiters listed on the posting (name, headline, profile URL, photo). Billed at $4 per 1,000 results, charged only when the hiring-team section is r… |

## What you get

```json
{
  "title": "Generative AI Engineer",
  "standardized_title": "Generative AI Engineer",
  "job_posting_id": "4443378596",
  "job_url": "https://www.linkedin.com/jobs/view/4443378596",
  "description": "HCLTech Exclusive Walk-In Drive | AIML Developer ...",
  "location": "Noida, Uttar Pradesh, India",
  "country_code": "in",
  "workplace_types": ["ONSITE"],
  "employment_status": "Full-time",
  "experience_level": "Associate",
  "seniority_level": "Associate",
  "industries": ["IT Services and IT Consulting"],
  "job_functions": ["Engineering", "Research"],
  "listed_at": "2026-07-21T13:36:54Z",
  "posted_time_ago": "3 weeks ago",
  "is_remote_allowed": false,
  "total_applies": 0,
  "total_views": 0,
  "application_url": "https://www.linkedin.com/job-apply/4443378596",
  "is_easy_apply": true,
  "company_info": {
    "name": "HCLTech",
    "staff_count": 257915,
    "industries": ["IT Services and IT Consulting"],
    "universal_name": "hcltech",
    "url": "https://www.linkedin.com/company/hcltech",
    "company_size": "10001+",
    "followers": 9571613
  },
  "input_index": 0,
  "input_value": "4443378596",
  "fetched_at": "2026-09-23T00:00:00Z"
}
```

The exact dataset can contain additional fields. Empty or unavailable values are returned as `null`.

## Use cases

### Recruiting and talent intelligence
Turn job IDs into structured postings with seniority, skills, and salary context for market and compensation research.

### Sales and territory research
Detect which companies are hiring for which roles, and use that as a buying signal for outbound.

### Job-board and aggregator enrichment
Enrich a list of LinkedIn job URLs with full descriptions, apply counts, and company data before publishing or scoring.

### AI-agent context
Give an agent structured job context before screening, matching, or summarization workflows.

## Pricing

**$4 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-job-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "job_ids_or_urls": [
    "4443378596"
  ],
  "include_hiring_team": false
}
```

## Get started

**[Run LinkedIn Job Scraper on Apify →](https://apify.com/data-slayer/linkedin-job-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-job-scraper)**

## Categories

`JOBS`, `LEAD_GENERATION`, `SOCIAL_MEDIA`
