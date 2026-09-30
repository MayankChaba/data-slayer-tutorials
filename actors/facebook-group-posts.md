---
layout: actor
title: "Facebook Group Posts"
description: "Get Facebook group posts."
actor_slug: "facebook-group-posts"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-group-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-group-posts"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-group-posts/
---

Get Facebook group posts.

## Inputs

| Field | Type | Description |
|---|---|---|
| `groupId` | string | Group ID |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "post_id": "4230362860539161",
  "type": "post",
  "url": "https://www.facebook.com/groups/boardgamecommunity/posts/4230362860539161/",
  "message": "Looking for recommendations on strategy games for 2-4 players. Preferably something with medium complexity and under 90 minutes playtime.",
  "message_rich": "Looking for recommendations on strategy games for 2-4 players. Preferably something with medium complexity and under 90 minutes playtime.",
  "timestamp": 1765705599,
  "comments_count": 23,
  "reactions_count": 15,
  "reshare_count": 2,
  "reactions": {
    "angry": 0,
    "care": 1,
    "haha": 0,
    "like": 12,
    "love": 2,
    "sad": 0,
    "wow": 0
  },
  "author": {
    "id": "pfbid0jTpnC5rAwPLzqpn8G2QbJgAi3u7qyXWyWfYuUokDiVukw2r5TtkfXu5QMrGDeA3Ll",
    "name": "Sarah Mitchell",
    "url": "https://www.facebook.com/sarah.mitchell.37",
    "profile_picture_url": "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/profile_pic.jpg"
  },
  "author_title": null,
  "image": null,
  "video": null
}
```

---

This Facebook group posts scraper enables efficient social media group posts extraction for competitive intelligence and community monitoring. Whether you need to export group posts for sentiment analysis, collect group posts data for market research, or perform group post extraction for lead generation from group posts, this tool delivers comprehensive results without authentication requirements.

## Use cases

**Social Media Managers**: Monitor multiple Facebook groups to track trending topics, content performance patterns, and community engagement levels. Identify high-performing post formats and optimal posting times to inform your content strategy.

**Market Research Analysts**: Analyze audience sentiment and conversation themes across competitor groups or industry communities. Extract thousands of posts to identify emerging trends, pain points, and customer preferences for strategic planning.

**Sales & Lead Generation Teams**: Discover potential customers actively discussing relevant topics in niche Facebook groups. Export posts with author profiles to build targeted outreach lists and identify warm leads expressing specific needs or interests.

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/facebook-group-posts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "groupId": "1439220986320043",
  "maxPages": 1
}
```

## Get started

**[Run Facebook Group Posts on Apify →](https://apify.com/data-slayer/facebook-group-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-group-posts)**

Also available on:

| Apify account | Total runs |
|---|---|
| [iron-crawler](https://apify.com/iron-crawler/facebook-group-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-group-posts) | 3,552 |
| [data-slayer](https://apify.com/data-slayer/facebook-group-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-group-posts) | 2,750 |
| [patient_discovery](https://apify.com/patient_discovery/facebook-group-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-group-posts) | 744 |
| [monumental_world](https://apify.com/monumental_world/facebook-group-posts?utm_source=github&utm_medium=content&utm_campaign=facebook-group-posts) | 480 |

## Categories

`SOCIAL_MEDIA`
