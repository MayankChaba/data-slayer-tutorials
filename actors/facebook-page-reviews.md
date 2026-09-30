---
layout: actor
title: "Facebook Page Reviews"
description: "Get Facebook page reviews."
actor_slug: "facebook-page-reviews"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-page-reviews?utm_source=github&utm_medium=content&utm_campaign=facebook-page-reviews"
actor_pricing: "$7 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-page-reviews/
---

Get Facebook page reviews.

## Inputs

| Field | Type | Description |
|---|---|---|
| `pageId` | string | Page ID of the Facebook page to fetch reviews from |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "type": "review",
  "post_id": "987654321098765",
  "recommend": true,
  "message": "Excellent customer service! The team was very responsive and helped me resolve my issue quickly. Highly recommend this business to anyone looking for quality products.",
  "author": {
    "id": "pfbid0AbCdEfGhIjKlMnOpQrStUvWxYz123456789",
    "name": "Sarah Johnson",
    "url": "https://www.facebook.com/people/Sarah-Johnson/pfbid0AbCdEfGhIjKlMnOpQrStUvWxYz123456789/",
    "profile_picture": {
      "uri": "https://scontent.fgyd4-2.fna.fbcdn.net/v/t39.30808-1/profile_pic.jpg",
      "width": 80,
      "height": 80,
      "scale": 2
    },
    "is_additional_profile_plus": false,
    "delegated_page": null,
    "work_info": null
  },
  "reactions_count": 24,
  "share": 2,
  "photos": [],
  "tags": []
}
```

---

This powerful page reviews scraper enables seamless reviews data extraction from Facebook, allowing you to export reviews to CSV or other formats for comprehensive analysis. Whether you need a web scraper for reviews, a product reviews API alternative, or a dedicated online review scraping solution, this reviews scraping tool serves as the ultimate ecommerce reviews extractor for data-driven decision making.

## Use cases

**E-commerce Managers**: Monitor customer sentiment across your Facebook presence and competitor pages to identify product issues, track brand reputation, and respond to customer concerns proactively.

**Market Research Analysts**: Aggregate reviews from multiple brands and categories to benchmark performance, identify market trends, and generate competitive intelligence reports for stakeholders.

**Customer Success Teams**: Extract and analyze review patterns to understand pain points, discover feature requests, and prioritize product improvements based on real customer feedback.

## Pricing

**$7 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/facebook-page-reviews).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "pageId": "100063543614476",
  "maxPages": 1
}
```

## Get started

**[Run Facebook Page Reviews on Apify →](https://apify.com/data-slayer/facebook-page-reviews?utm_source=github&utm_medium=content&utm_campaign=facebook-page-reviews)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/facebook-page-reviews?utm_source=github&utm_medium=content&utm_campaign=facebook-page-reviews) | 280 |
| [iron-crawler](https://apify.com/iron-crawler/facebook-page-reviews?utm_source=github&utm_medium=content&utm_campaign=facebook-page-reviews) | 257 |
| [patient_discovery](https://apify.com/patient_discovery/facebook-page-reviews?utm_source=github&utm_medium=content&utm_campaign=facebook-page-reviews) | 214 |
| [monumental_world](https://apify.com/monumental_world/facebook-page-reviews?utm_source=github&utm_medium=content&utm_campaign=facebook-page-reviews) | 205 |

## Categories

`SOCIAL_MEDIA`
