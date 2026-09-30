---
layout: actor
title: "Twitter User Followings"
description: "Get Twitter user followings."
actor_slug: "twitter-followings"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-followings?utm_source=github&utm_medium=content&utm_campaign=twitter-followings"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/twitter-followings/
---

Get Twitter user followings.

## Inputs

| Field | Type | Description |
|---|---|---|
| `userId` | string | Username |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
[
  {
    "user_id": "44196397",
    "screen_name": "elonmusk",
    "name": "Elon Musk",
    "description": "Tesla, SpaceX, Neuralink, xAI",
    "profile_image": "https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_normal.jpg",
    "statuses_count": 52847,
    "followers_count": 210458392,
    "friends_count": 856,
    "media_count": 4521,
    "created_at": "Tue Jun 02 20:12:29 +0000 2009"
  },
  {
    "user_id": "813286",
    "screen_name": "BarackObama",
    "name": "Barack Obama",
    "description": "Dad, husband, President, citizen.",
    "profile_image": "https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_normal.jpg",
    "statuses_count": 17943,
    "followers_count": 131847205,
    "friends_count": 610,
    "media_count": 1289,
    "created_at": "Mon Mar 05 22:08:25 +0000 2007"
  }
]
```

## Use cases

**Influencer Marketing Manager**: Identify potential brand ambassadors by analyzing who industry leaders follow. Build targeted outreach lists by extracting followings from competitor accounts and top influencers in your niche.

**Social Media Analyst**: Map influencer networks and community structures by examining following patterns. Discover emerging voices and trending accounts within specific industries or interest groups.

**Business Development Representative**: Generate qualified leads by extracting followings from decision-makers and industry thought leaders. Build prospecting lists of professionals who follow relevant accounts in your target market.
---

Whether you need an Instagram followings scraper, want to get Instagram followings for market research, export Instagram followers for CRM integration, or perform Instagram followers export at scale, this social media scraper provides the foundation for effective lead generation from followers and comprehensive follower data extraction across your influencer marketing campaigns.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-followings).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "userId": "elonmusk",
  "maxPages": 1
}
```

## Get started

**[Run Twitter User Followings on Apify →](https://apify.com/data-slayer/twitter-followings?utm_source=github&utm_medium=content&utm_campaign=twitter-followings)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/twitter-followings?utm_source=github&utm_medium=content&utm_campaign=twitter-followings) | 2,237 |
| [iron-crawler](https://apify.com/iron-crawler/twitter-followings?utm_source=github&utm_medium=content&utm_campaign=twitter-followings) | 296 |
| [patient_discovery](https://apify.com/patient_discovery/twitter-followings?utm_source=github&utm_medium=content&utm_campaign=twitter-followings) | 240 |
| [monumental_world](https://apify.com/monumental_world/twitter-followings?utm_source=github&utm_medium=content&utm_campaign=twitter-followings) | 134 |

## Categories

Social Media
