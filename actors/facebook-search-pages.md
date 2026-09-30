---
layout: actor
title: "Facebook Search Pages"
description: "Search Facebook pages."
actor_slug: "facebook-search-pages"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-search-pages?utm_source=github&utm_medium=content&utm_campaign=facebook-search-pages"
actor_pricing: "$7 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-search-pages/
---

Search Facebook pages.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Search term or keyword |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
[
  {
    "type": "page",
    "profile_url": "https://www.facebook.com/techstartupshub",
    "url": "https://www.facebook.com/techstartupshub",
    "image": {
      "uri": "https://scontent.fknu1-3.fna.fbcdn.net/v/t39.30808-1/profile_image.jpg",
      "width": 120,
      "height": 120,
      "scale": 2
    },
    "name": "Tech Startups Hub",
    "facebook_id": "100075432198765",
    "is_verified": true
  },
  {
    "type": "page",
    "profile_url": "https://www.facebook.com/innovationlabsco",
    "url": "https://www.facebook.com/innovationlabsco",
    "image": {
      "uri": "https://scontent.fknu1-2.fna.fbcdn.net/v/t39.30808-1/company_logo.png",
      "width": 120,
      "height": 120,
      "scale": 2
    },
    "name": "Innovation Labs Co",
    "facebook_id": "100082567891234",
    "is_verified": false
  }
]
```

---

Transform your lead generation strategy with this powerful Facebook page scraper that delivers export-ready Facebook page data without login requirements. Whether you need a Facebook search results scraper for competitive analysis or a Facebook data extractor for building marketing databases, this social media scraping tool helps you scrape Facebook pages efficiently and generate valuable Facebook lead generation data for your campaigns.

## Use cases

**Social Media Marketers**: Build targeted prospect lists by searching for pages in specific niches or industries. Export contact data directly into your outreach campaigns to connect with potential brand partners or advertising opportunities.

**Market Research Analysts**: Identify competitor pages and emerging players in your market segment. Analyze page verification patterns and profile characteristics to understand market positioning and brand presence.

**Sales Development Teams**: Generate qualified leads by discovering business pages matching your ideal customer profile. Enrich your sales pipeline with verified Facebook page data for multi-channel outreach strategies.

## Pricing

**$7 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/facebook-search-pages).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "new york",
  "maxPages": 1
}
```

## Get started

**[Run Facebook Search Pages on Apify →](https://apify.com/data-slayer/facebook-search-pages?utm_source=github&utm_medium=content&utm_campaign=facebook-search-pages)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/facebook-search-pages?utm_source=github&utm_medium=content&utm_campaign=facebook-search-pages) | 48,131 |
| [patient_discovery](https://apify.com/patient_discovery/facebook-search-pages?utm_source=github&utm_medium=content&utm_campaign=facebook-search-pages) | 2,401 |
| [iron-crawler](https://apify.com/iron-crawler/facebook-search-pages?utm_source=github&utm_medium=content&utm_campaign=facebook-search-pages) | 653 |
| [monumental_world](https://apify.com/monumental_world/facebook-search-pages?utm_source=github&utm_medium=content&utm_campaign=facebook-search-pages) | 254 |

## Categories

`SOCIAL_MEDIA`
