---
layout: actor
title: "Twitter List Members"
description: "Get Twitter list members."
actor_slug: "twitter-list-members"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-list-members?utm_source=github&utm_medium=content&utm_campaign=twitter-list-members"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/twitter-list-members/
---

Get Twitter list members.

## Inputs

| Field | Type | Description |
|---|---|---|
| `listId` | string | List ID |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
[
  {
    "user_id": "987654321012345678",
    "screen_name": "SarahTechCEO",
    "name": "Sarah Mitchell",
    "description": "CEO @ CloudScale | Building the future of enterprise SaaS | Speaker | Forbes 30 Under 30",
    "profile_image": "https://pbs.twimg.com/profile_images/...",
    "statuses_count": 8420,
    "followers_count": 15600,
    "friends_count": 890,
    "media_count": 340,
    "created_at": "Tue Mar 15 14:22:08 +0000 2018",
    "location": "San Francisco, CA",
    "blue_verified": true,
    "verified": false,
    "website": "https://cloudscale.io",
    "affiliates": [],
    "business_account": {
      "category": "Technology"
    }
  },
  {
    "user_id": "123456789098765432",
    "screen_name": "MarketingPro_Alex",
    "name": "Alex Rodriguez",
    "description": "VP Marketing | B2B Growth Strategist | Helping startups scale | DM for consulting",
    "profile_image": "https://pbs.twimg.com/profile_images/...",
    "statuses_count": 12350,
    "followers_count": 8900,
    "friends_count": 1200,
    "media_count": 520,
    "created_at": "Mon Jan 08 09:15:33 +0000 2017",
    "location": "Austin, TX",
    "blue_verified": false,
    "verified": false,
    "website": "https://alexrodriguez.co",
    "affiliates": [],
    "business_account": null
  }
]
```

---

## Use cases

**Sales Professionals**: Identify decision-makers and prospects by extracting members from industry-specific Twitter lists, enriching your CRM with social profiles, follower counts, and bio information to prioritize high-value leads.

**Market Analysts**: Monitor competitor audiences and industry influencers by scraping relevant Twitter lists to analyze audience demographics, engagement patterns, and community composition for strategic insights.

**B2B Marketers**: Build targeted outreach campaigns by collecting profiles from lists curated by industry leaders, enabling personalized messaging based on user descriptions, locations, and social authority metrics.

This web scraping tool serves as a powerful data extractor for social media intelligence, complementing solutions like LinkedIn scraper and Instagram scraper tools to export followers and extract emails for comprehensive lead generation across platforms, delivering enterprise-grade web data extraction capabilities for modern sales teams.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-list-members).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "listId": "1177128103228989440",
  "maxPages": 1
}
```

## Get started

**[Run Twitter List Members on Apify →](https://apify.com/data-slayer/twitter-list-members?utm_source=github&utm_medium=content&utm_campaign=twitter-list-members)**

## Categories

Social Media
