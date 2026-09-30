---
layout: actor
title: "Facebook Search People"
description: "Search Facebook people."
actor_slug: "facebook-search-people"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-search-people?utm_source=github&utm_medium=content&utm_campaign=facebook-search-people"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-search-people/
---

Search Facebook people.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Search term or keyword |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "type": "search_profile",
  "profile_id": "pfbid0Xk9mPqR2vNwLtYhGfDcBaZsWxUvTsRqPoNmLkJiHgFeDcBa",
  "url": "https://www.facebook.com/people/Sarah-Thompson/pfbid0Xk9mPqR2vNwLtYhGfDcBaZsWxUvTsRqPoNmLkJiHgFeDcBa/",
  "name": "Sarah Thompson",
  "is_verified": true,
  "profile_picture": {
    "uri": "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/392847561_742156389841521_583729516104253892_n.jpg",
    "width": 120,
    "height": 120,
    "scale": 2
  }
}
```

---

Transform your lead generation workflow with this powerful people search scraper and profile data extractor. Whether you need a social media scraper for competitive intelligence or a lead generation scraper to export profiles for outreach, this professional profile scraping tool serves as your comprehensive people finder tool for building high-quality prospect databases from Facebook's public data.

## Use cases

**Sales Professionals**: Build targeted prospect lists by searching for decision-makers in specific industries or roles. Export contact details directly into your CRM to accelerate pipeline generation and reduce manual research time.

**Marketing Analysts**: Gather demographic and profile data to understand audience segments, analyze competitor followings, and identify influencers or brand advocates for partnership opportunities.

**Business Development Teams**: Discover potential partners, clients, or collaborators by searching relevant keywords and industries. Create comprehensive databases of prospects with verified profile information for outreach campaigns.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/facebook-search-people).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "new york",
  "maxPages": 1
}
```

## Get started

**[Run Facebook Search People on Apify →](https://apify.com/data-slayer/facebook-search-people?utm_source=github&utm_medium=content&utm_campaign=facebook-search-people)**

Also available on:

| Apify account | Total runs |
|---|---|
| [patient_discovery](https://apify.com/patient_discovery/facebook-search-people?utm_source=github&utm_medium=content&utm_campaign=facebook-search-people) | 44,307 |
| [data-slayer](https://apify.com/data-slayer/facebook-search-people?utm_source=github&utm_medium=content&utm_campaign=facebook-search-people) | 828 |
| [iron-crawler](https://apify.com/iron-crawler/facebook-search-people?utm_source=github&utm_medium=content&utm_campaign=facebook-search-people) | 302 |
| [monumental_world](https://apify.com/monumental_world/facebook-search-people?utm_source=github&utm_medium=content&utm_campaign=facebook-search-people) | 215 |

## Categories

Social Media
