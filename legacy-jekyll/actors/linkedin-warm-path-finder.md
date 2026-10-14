---
layout: actor
title: "LinkedIn Warm Path Finder"
description: "Find warm introduction paths to any LinkedIn target from your own connectors. Ranked by shared employer, tenure overlap, and school. No cookies."
actor_slug: "linkedin-warm-path-finder"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-warm-path-finder?utm_source=github&utm_medium=content&utm_campaign=linkedin-warm-path-finder"
actor_pricing: "$30.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-warm-path-finder/
---

Find who in your network can introduce you to any target. Enter your team's or alumni's LinkedIn profiles and the people or companies you want to reach; the Actor returns ranked warm paths — shared employers, overlapping tenure, shared schools — plus the best connector to ask. No cookies.

## Inputs

| Field | Type | Description |
|---|---|---|
| `connector_urls` | array | LinkedIn profile URLs of YOUR people — team, alumni, advisors — who might make an introduction. |
| `target_urls` | array | Specific people to find a warm path to. Use this or target company URLs. |
| `target_company_urls` | array | Find paths to people at these companies. Used when target profile URLs are empty. |

## What you get

One row per target that has at least one path:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "targetProfileUrl": "https://www.linkedin.com/in/example-target",
  "targetName": "Example Target",
  "targetHeadline": "VP Operations",
  "targetCompany": "Globex",
  "pathCount": 2,
  "bestPathScore": 100,
  "warmPaths": [
    {
      "connectorProfileUrl": "https://www.linkedin.com/in/example-connector-1",
      "connectorName": "Example Connector",
      "connectorHeadline": "Director of Sales",
      "sharedCompany": "Globex",
      "sharedCompanyUrl": "https://www.linkedin.com/company/globex",
      "sharedSchool": "",
      "tenureOverlap": true,
      "pathScore": 100,
      "pathType": "current_colleague"
    }
  ],
  "recommendedConnectorProfileUrl": "https://www.linkedin.com/in/example-connector-1",
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports connectors resolved, targets, and how many targets had a path.

## Pricing

**$30.00 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-warm-path-finder).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "connector_urls": [
    "https://www.linkedin.com/in/example-connector"
  ],
  "target_urls": [],
  "target_company_urls": []
}
```

## Get started

**[Run LinkedIn Warm Path Finder on Apify →](https://apify.com/data-slayer/linkedin-warm-path-finder?utm_source=github&utm_medium=content&utm_campaign=linkedin-warm-path-finder)**

## Categories

Lead Generation, Social Media, Marketing
