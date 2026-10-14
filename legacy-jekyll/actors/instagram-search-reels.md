---
layout: actor
title: "Instagram Search Reels"
description: "Search Instagram reels."
actor_slug: "instagram-search-reels"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-search-reels?utm_source=github&utm_medium=content&utm_campaign=instagram-search-reels"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/instagram-search-reels/
---

Search Instagram reels.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Search term or keyword |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "id": "3575393669538547061",
  "code": "DGeWZllBoV1",
  "caption": {
    "text": "For more tips and insights, follow @iamishachopra\n\n#instagrammarketingtips #instagramgrowthexpert #contentideas",
    "hashtags": [
      "#instagrammarketingtips",
      "#instagramgrowthexpert",
      "#contentideas"
    ],
    "mentions": ["@iamishachopra"]
  },
  "user": {
    "username": "iamishachopra",
    "full_name": "Isha Chopra: Social Media Marketer | Insta Coach",
    "is_verified": true,
    "profile_pic_url": "https://scontent-vie1-1.cdninstagram.com/..."
  },
  "ig_play_count": 7169443,
  "like_count": 39008,
  "comment_count": 284,
  "share_count": 95428,
  "video_url": "https://scontent-vie1-1.cdninstagram.com/...",
  "video_duration": 24.3,
  "taken_at_date": "2025-02-24T23:37:12+00:00",
  "clips_metadata": {
    "audio_type": "original_sounds",
    "original_sound_info": {
      "audio_id": 939635911650210,
      "original_audio_title": "Original audio"
    }
  }
}
```

---

## Use cases

**Content Creators & Influencers**: Identify trending Reels by analyzing play counts, engagement rates, and viral audio tracks. Discover what content formats and topics resonate with your target audience to optimize your content calendar.

**Social Media Marketers**: Track competitor Reels performance, monitor hashtag effectiveness, and analyze engagement patterns across different posting times. Build data-driven campaigns based on real performance metrics.

**Data Analysts & Researchers**: Aggregate large-scale Reels data for trend analysis, sentiment research, and audience behavior studies. Export structured datasets for statistical modeling and visualization.

This Instagram scraper provides a powerful Instagram data extractor for content creators who need to export Instagram Reels metadata at scale. Whether you're conducting Instagram search scraping for competitive analysis or building an Instagram lead generation strategy, this Instagram scraping tool delivers the structured data you need without the complexity of authentication-based Instagram Reels scraper solutions.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-search-reels).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "trending",
  "maxPages": 1
}
```

## Get started

**[Run Instagram Search Reels on Apify →](https://apify.com/data-slayer/instagram-search-reels?utm_source=github&utm_medium=content&utm_campaign=instagram-search-reels)**

## Categories

Social Media
