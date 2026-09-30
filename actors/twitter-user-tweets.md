---
layout: actor
title: "Twitter User Tweets"
description: "Get Twitter user tweets."
actor_slug: "twitter-user-tweets"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-user-tweets?utm_source=github&utm_medium=content&utm_campaign=twitter-user-tweets"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/twitter-user-tweets/
---

Get Twitter user tweets.

## Inputs

| Field | Type | Description |
|---|---|---|
| `userId` | string | Username |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "tweet_id": "1856234567891234567",
  "bookmarks": 342,
  "created_at": "Wed Dec 18 09:15:22 +0000 2025",
  "favorites": 8945,
  "text": "Excited to announce our new product launch next week! Stay tuned for updates.",
  "lang": "en",
  "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
  "views": "1245678",
  "quotes": 67,
  "entities": {
    "hashtags": ["#ProductLaunch"],
    "symbols": [],
    "timestamps": [],
    "urls": ["https://example.com/launch"],
    "user_mentions": []
  },
  "replies": 423,
  "retweets": 1256,
  "conversation_id": "1856234567891234567",
  "media": [
    {
      "type": "photo",
      "url": "https://pbs.twimg.com/media/example.jpg"
    }
  ],
  "author": {
    "rest_id": "123456789",
    "name": "Tech Innovator",
    "screen_name": "techinnovator",
    "avatar": "https://pbs.twimg.com/profile_images/example_normal.jpg",
    "blue_verified": true
  }
}
```

---

## Use cases

**Social Media Marketers**: Track competitor content strategies by analyzing tweet frequency, engagement patterns, and viral content from industry leaders to inform your own posting schedule and messaging.

**Brand Analysts**: Monitor brand mentions and sentiment across influential accounts to identify reputation risks, measure campaign impact, and discover partnership opportunities in real-time.

**Sales Teams**: Generate qualified leads by extracting tweets from decision-makers discussing pain points, budget cycles, or technology evaluations relevant to your product offering.

This Twitter scraper enables seamless twitter data extraction for professionals who need to extract tweets from users at scale. Whether you're building a tweet scraper API integration, conducting lead generation from tweets, or need to export tweets for sentiment analysis, this cookieless solution delivers reliable twitter user tweets without authentication overhead.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/twitter-user-tweets).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "userId": "elonmusk",
  "maxPages": 1
}
```

## Get started

**[Run Twitter User Tweets on Apify →](https://apify.com/data-slayer/twitter-user-tweets?utm_source=github&utm_medium=content&utm_campaign=twitter-user-tweets)**

Also available on:

| Apify account | Total runs |
|---|---|
| [patient_discovery](https://apify.com/patient_discovery/twitter-user-tweets?utm_source=github&utm_medium=content&utm_campaign=twitter-user-tweets) | 63,811 |
| [data-slayer](https://apify.com/data-slayer/twitter-user-tweets?utm_source=github&utm_medium=content&utm_campaign=twitter-user-tweets) | 5,083 |
| [iron-crawler](https://apify.com/iron-crawler/twitter-user-tweets?utm_source=github&utm_medium=content&utm_campaign=twitter-user-tweets) | 852 |
| [monumental_world](https://apify.com/monumental_world/twitter-user-tweets?utm_source=github&utm_medium=content&utm_campaign=twitter-user-tweets) | 126 |

## Categories

`SOCIAL_MEDIA`
