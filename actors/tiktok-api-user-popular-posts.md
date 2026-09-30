---
layout: actor
title: "Tiktok User Popular Posts"
description: "Get TikTok user popular posts."
actor_slug: "tiktok-api-user-popular-posts"
actor_account: "patient_discovery"
actor_url: "https://apify.com/patient_discovery/tiktok-api-user-popular-posts?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-user-popular-posts"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/tiktok-api-user-popular-posts/
---

Get TikTok user popular posts.

## Inputs

| Field | Type | Description |
|---|---|---|
| `secUid` | string | TikTok secure user ID |
| `maxItems` | integer | Maximum number of items to fetch per page |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "id": "7030279636554747141",
  "desc": "Behind the scenes of our latest campaign 🎬 #marketing #contentcreation",
  "createTime": 1636864535,
  "author": {
    "id": "6881290705605477381",
    "uniqueId": "brandstudio",
    "nickname": "Brand Studio",
    "verified": true,
    "signature": "Official account | Content & Strategy"
  },
  "authorStats": {
    "followerCount": 245000,
    "heartCount": 8900000,
    "videoCount": 127
  },
  "stats": {
    "playCount": 1840000,
    "diggCount": 89500,
    "commentCount": 3200,
    "shareCount": 12400
  },
  "challenges": [
    {
      "id": "25452",
      "title": "marketing",
      "desc": "Share your marketing wins"
    }
  ],
  "music": {
    "title": "Upbeat Corporate",
    "authorName": "Production Music"
  },
  "video": {
    "duration": 15,
    "playAddr": "https://v16-webapp-prime.tiktok.com/video/...",
    "cover": "https://p19-sign.tiktokcdn-us.com/..."
  }
}
```

---

Whether you need an Instagram scraper, export Instagram posts, Instagram post extractor, popular posts scraper, social media data extractor, lead generation from social media, Twitter post scraper, or Facebook post scraper, this TikTok tool provides the same cookieless architecture for reliable, scalable social media data extraction across platforms.

## Use cases

**Content Strategist**: Identify viral post patterns by analyzing top-performing videos from competitors. Track hashtag trends, video duration sweet spots, and optimal posting times to inform your content calendar.

**Social Media Analyst**: Build comprehensive engagement reports by extracting historical post data. Compare performance metrics across multiple creators to benchmark your brand's TikTok presence.

**Lead Generation Specialist**: Discover high-engagement creators in your niche for influencer partnerships. Export follower counts, engagement rates, and contact information to prioritize outreach campaigns.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/tiktok-api-user-popular-posts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "secUid": "MS4wLjABAAAAqB08cUbXaDWqbD6MCga2RbGTuhfO2EsHayBYx08NDrN7IE3jQuRDNNN6YwyfH6_6",
  "maxItems": 35,
  "maxPages": 1
}
```

## Get started

**[Run Tiktok User Popular Posts on Apify →](https://apify.com/patient_discovery/tiktok-api-user-popular-posts?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-user-popular-posts)**

Also available on:

| Apify account | Total runs |
|---|---|
| [patient_discovery](https://apify.com/patient_discovery/tiktok-api-user-popular-posts?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-user-popular-posts) | 313 |
| [iron-crawler](https://apify.com/iron-crawler/tiktok-api-user-popular-posts?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-user-popular-posts) | 266 |
| [monumental_world](https://apify.com/monumental_world/tiktok-api-user-popular-posts?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-user-popular-posts) | 216 |

## Categories

`SOCIAL_MEDIA`
