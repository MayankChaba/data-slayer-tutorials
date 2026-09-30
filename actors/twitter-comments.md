---
layout: actor
title: "Twitter Post Comments"
description: "Get Twitter post comments."
actor_slug: "twitter-comments"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-comments?utm_source=github&utm_medium=content&utm_campaign=twitter-comments"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/twitter-comments/
---

Get Twitter post comments.

## Inputs

| Field | Type | Description |
|---|---|---|
| `tweetId` | string | Tweet ID |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "id": "1738107442452381976",
  "text": "@elonmusk Gratitude is a musk thank you Elon [https://t.co/8u6rbvMYKp](https://t.co/8u6rbvMYKp)",
  "display_text": "Gratitude is a musk thank you Elon",
  "likes": 822,
  "retweets": 69,
  "bookmarks": 4,
  "quotes": 2,
  "replies": 152,
  "views": "56888",
  "created_at": "Fri Dec 22 08:01:21 +0000 2023",
  "lang": "en",
  "conversation_id": "1738106896777699464",
  "author": {
    "rest_id": "2800216425",
    "name": "THE CHELSEA FORUM",
    "screen_name": "TheChelseaForum",
    "description": "The Chelsea Forum ◇|◇ A community where all Chelsea fans call their home! 💙",
    "blue_verified": true,
    "sub_count": 259816
  }
}
```
-----

## Use cases

**Social Media Managers**: Monitor brand mentions and audience reactions across Twitter threads. Track sentiment shifts in real-time to adjust campaign messaging and identify emerging trends before competitors.

**Market Research Analysts**: Collect qualitative feedback from product launches, industry discussions, and competitor announcements. Analyze comment patterns to uncover customer pain points and feature requests.

**Sales Intelligence Teams**: Identify high-intent prospects engaging with industry thought leaders. Build targeted outreach lists based on comment activity, follower counts, and verification status.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-comments).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "tweetId": "2024799518181700017",
  "maxPages": 1
}
```

## Get started

**[Run Twitter Post Comments on Apify →](https://apify.com/data-slayer/twitter-comments?utm_source=github&utm_medium=content&utm_campaign=twitter-comments)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/twitter-comments?utm_source=github&utm_medium=content&utm_campaign=twitter-comments) | 26,824 |
| [iron-crawler](https://apify.com/iron-crawler/twitter-comments?utm_source=github&utm_medium=content&utm_campaign=twitter-comments) | 10,523 |
| [patient_discovery](https://apify.com/patient_discovery/twitter-comments?utm_source=github&utm_medium=content&utm_campaign=twitter-comments) | 2,010 |
| [monumental_world](https://apify.com/monumental_world/twitter-comments?utm_source=github&utm_medium=content&utm_campaign=twitter-comments) | 296 |

## Categories

`SOCIAL_MEDIA`
