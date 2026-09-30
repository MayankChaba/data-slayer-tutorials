---
layout: actor
title: "Instagram Location Posts"
description: "Get Instagram location posts."
actor_slug: "instagram-location-posts"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-location-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-location-posts"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/instagram-location-posts/
---

Get Instagram location posts.

## Inputs

| Field | Type | Description |
|---|---|---|
| `locationQuery` | string | Instagram location query. Must a be a valid location name. |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "id": "3789234567890123456",
  "code": "DSPxYzAbCdE",
  "caption": {
    "text": "Amazing sunset views from the rooftop! 🌅 Perfect evening in the city.\n\n#rooftopbar #cityviews #sunsetlovers #downtownlife #urbanphotography",
    "hashtags": [
      "#rooftopbar",
      "#cityviews",
      "#sunsetlovers",
      "#downtownlife",
      "#urbanphotography"
    ],
    "mentions": []
  },
  "like_count": 847,
  "comment_count": 23,
  "taken_at": 1765892345,
  "taken_at_date": "2025-12-16T18:32:25+00:00",
  "location": {
    "name": "Sky Lounge Downtown",
    "address": "456 Main Street",
    "lat": 40.748817,
    "lng": -73.985428,
    "id": "245678"
  },
  "user": {
    "username": "cityexplorer_nyc",
    "full_name": "Sarah Mitchell",
    "is_verified": false,
    "profile_pic_url": "https://example.com/profile.jpg"
  },
  "thumbnail_url": "https://example.com/post_image.jpg",
  "is_video": false,
  "media_type": 1
}
```

---

This Instagram scraper provides comprehensive location-based Instagram data extraction capabilities for marketers and analysts who need to export Instagram posts by geographic area. Whether you're looking to scrape Instagram by location for competitive intelligence or lead generation Instagram campaigns, this tool delivers structured, location-based Instagram data ready for immediate analysis and strategic decision-making.

## Use cases

**Social Media Marketers**: Analyze location-specific content trends to identify high-performing hashtags, optimal posting times, and popular content themes at target venues. Build geo-targeted campaigns based on real engagement patterns from competitors and local influencers.

**Market Research Analysts**: Track brand mentions and sentiment across specific locations, monitor competitor activity at retail stores or events, and identify emerging trends in different geographic markets through hashtag and caption analysis.

**Sales & Business Development Teams**: Discover potential B2B leads by identifying businesses posting from target locations, analyze foot traffic patterns at competitor venues, and gather intelligence on local events and community engagement opportunities.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/instagram-location-posts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "locationQuery": "New York",
  "maxPages": 1
}
```

## Get started

**[Run Instagram Location Posts on Apify →](https://apify.com/data-slayer/instagram-location-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-location-posts)**

Also available on:

| Apify account | Total runs |
|---|---|
| [patient_discovery](https://apify.com/patient_discovery/instagram-location-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-location-posts) | 2,353 |
| [data-slayer](https://apify.com/data-slayer/instagram-location-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-location-posts) | 1,237 |
| [iron-crawler](https://apify.com/iron-crawler/instagram-location-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-location-posts) | 303 |
| [monumental_world](https://apify.com/monumental_world/instagram-location-posts?utm_source=github&utm_medium=content&utm_campaign=instagram-location-posts) | 220 |

## Categories

`SOCIAL_MEDIA`
