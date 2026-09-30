---
layout: actor
title: "Facebook Page Posts"
description: "Get Facebook page posts."
actor_slug: "facebook-page-posts"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-page-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-page-posts"
actor_pricing: "$7.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-page-posts/
---

Get Facebook page posts.

## Inputs

| Field | Type | Description |
|---|---|---|
| `pageId` | string | Page ID of the Facebook page to fetch posts from |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "post_id": "987654321098765",
  "type": "post",
  "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0XyZ123&id=987654321",
  "message": "Excited to announce our new product launch! Check out the features that will transform your workflow.",
  "message_rich": "Excited to announce our new product launch! Check out the features that will transform your workflow.",
  "timestamp": 1702915200,
  "comments_count": 127,
  "reactions_count": 1543,
  "reshare_count": 89,
  "reactions": {
    "angry": 3,
    "care": 45,
    "haha": 12,
    "like": 982,
    "love": 487,
    "sad": 1,
    "wow": 13
  },
  "author": {
    "id": "987654321",
    "name": "Tech Innovations Co",
    "url": "https://www.facebook.com/techinnovationsco",
    "profile_picture_url": "https://scontent.xx.fbcdn.net/v/t39.30808-1/profile_pic.jpg"
  },
  "image": "https://scontent.xx.fbcdn.net/v/t39.30808-6/product_image.jpg",
  "video": null,
  "external_url": "https://www.example.com/product-launch"
}
```

---

This Facebook Posts Scraper is a powerful web scraping tool designed to extract data from web pages without authentication barriers. Whether you need a social media post scraper for competitive analysis, a blog post scraper for content research, or a lead generation scraper for business intelligence, this web scraper delivers reliable results. Scrape website data efficiently and transform public Facebook posts into actionable insights with this cookieless web scraping tool.

## Use cases

**Social Media Managers**: Track engagement patterns across competitor pages to identify optimal posting times, content formats that drive reactions, and trending topics within your niche.

**Content Strategists**: Analyze viral post characteristics including message length, media types, and reaction distributions to refine your content calendar and maximize audience engagement.

**Marketing Analysts**: Build comprehensive engagement datasets across multiple brand pages to benchmark performance, identify content gaps, and generate data-driven recommendations for cross-platform campaigns.

## Pricing

**$7.00 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/facebook-page-posts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "pageId": "100064860875397",
  "maxPages": 1
}
```

## Get started

**[Run Facebook Page Posts on Apify →](https://apify.com/data-slayer/facebook-page-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-page-posts)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/facebook-page-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-page-posts) | 1,634 |
| [patient_discovery](https://apify.com/patient_discovery/facebook-page-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-page-posts) | 657 |
| [iron-crawler](https://apify.com/iron-crawler/facebook-page-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-page-posts) | 437 |
| [monumental_world](https://apify.com/monumental_world/facebook-page-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-page-posts) | 212 |

## Categories

Social Media
