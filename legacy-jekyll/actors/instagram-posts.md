---
layout: actor
title: "Instagram User Posts"
description: "Get Instagram user posts."
actor_slug: "instagram-posts"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-posts"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/instagram-posts/
---

Get Instagram user posts.

## Inputs

| Field | Type | Description |
|---|---|---|
| `username` | string | Instagram username, user ID, or profile URL |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "id": "3786151211327352732",
  "code": "DSLHHeBFO-c",
  "taken_at": 1765564421,
  "taken_at_date": "2025-12-12T18:33:41+00:00",
  "like_count": 502341,
  "comment_count": 6294,
  "share_count": 3928,
  "caption": {
    "text": "Wherever you play, these bands keep you ready for every moment. Are you home or away? 👀👇",
    "hashtags": [],
    "mentions": []
  },
  "user": {
    "username": "whoop",
    "full_name": "WHOOP",
    "id": "1431248158",
    "is_verified": true,
    "is_private": false
  },
  "carousel_media_count": 2,
  "is_video": false,
  "media_type": 8,
  "tagged_users": [
    {
      "user": {
        "username": "cristiano",
        "full_name": "Cristiano Ronaldo",
        "is_verified": true
      }
    }
  ],
  "thumbnail_url": "https://scontent-vie1-1.cdninstagram.com/v/t51.82787-15/589392008_18552024283016159_1425048830652491957_n.jpg"
}
```

---

## Use cases

**Content Creators & Influencers**: Track your post performance over time by extracting engagement metrics (likes, comments, shares) and caption data to identify which content types resonate most with your audience and inform your content calendar.

**Social Media Analysts**: Build comprehensive datasets of Instagram posts to analyze trends, benchmark performance against competitors, and generate insights about optimal posting times, hashtag effectiveness, and content strategies.

**Marketing & Sales Teams**: Generate qualified leads by identifying high-engagement posts, extracting tagged users and collaborators, and discovering potential brand partners or influencers for outreach campaigns.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-posts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "username": "cristiano",
  "maxPages": 1
}
```

## Get started

**[Run Instagram User Posts on Apify →](https://apify.com/data-slayer/instagram-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-posts)**

## Categories

Social Media
