---
layout: actor
title: "Twitter Community Members"
description: "Get Twitter community members."
actor_slug: "twitter-community-members"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-community-members?utm_source=github&utm_medium=content&utm_campaign=twitter-community-members"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/twitter-community-members/
---

Get Twitter community members.

## Inputs

| Field | Type | Description |
|---|---|---|
| `communityid` | string | Community ID |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
[
  {
    "user_id": "9876543210123456789",
    "screen_name": "TechFounder_AI",
    "profile_image": "https://pbs.twimg.com/profile_images/1234567890123456789/AbCdEfGh_normal.jpg",
    "blue_verified": true,
    "name": "Sarah Chen"
  },
  {
    "user_id": "1234567890987654321",
    "screen_name": "marketing_pro",
    "profile_image": "https://pbs.twimg.com/profile_images/9876543210987654321/XyZaBcDe_normal.jpg",
    "blue_verified": false,
    "name": "Mike Rodriguez"
  },
  {
    "user_id": "5555666677778888999",
    "screen_name": "data_analyst_jane",
    "profile_image": "https://pbs.twimg.com/profile_images/5555666677778888999/QwErTyUi_normal.jpg",
    "blue_verified": false,
    "name": "Jane Thompson 📊"
  }
]
```

---

## Use cases

**Community Managers & Marketers**: Build targeted outreach campaigns by identifying active community members, analyzing verification status, and segmenting audiences based on profile characteristics for personalized engagement strategies.

**Market Research Analysts**: Map community composition, track member growth patterns, and analyze demographic signals through profile data to understand audience dynamics and competitive positioning.

**Sales & Business Development Teams**: Generate qualified leads by extracting professional contacts from industry-specific communities, enabling relationship-driven prospecting and strategic partnership identification.


Whether you need a community member scraper for lead generation from communities, want to export group members for analysis, or require a reliable group member extractor for audience data extraction, this tool delivers social media member data at scale. Scrape community members efficiently and accelerate your relationship-driven business development with comprehensive, export-ready contact information.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-community-members).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "communityid": "1506779564160258059",
  "maxPages": 1
}
```

## Get started

**[Run Twitter Community Members on Apify →](https://apify.com/data-slayer/twitter-community-members?utm_source=github&utm_medium=content&utm_campaign=twitter-community-members)**

## Categories

Social Media
