---
layout: actor
title: "Tiktok Post Comments"
description: "Get TikTok post comments."
actor_slug: "tiktok-api-post-comments"
actor_account: "iron-crawler"
actor_url: "https://apify.com/iron-crawler/tiktok-api-post-comments?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-post-comments"
actor_pricing: "See the Apify listing for current pricing."
categories: ["SOCIAL_MEDIA"]
permalink: /actors/tiktok-api-post-comments/
---

Get TikTok post comments.

## Inputs

| Field | Type | Description |
|---|---|---|
| `videoId` | string | TikTok video ID |
| `maxItems` | integer | Maximum number of items to fetch per page |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "cid": "7306162850404975402",
  "text": "This is exactly what I needed to hear today!",
  "create_time": 1701098641,
  "digg_count": 41288,
  "reply_comment_total": 72,
  "comment_language": "en",
  "author_pin": false,
  "aweme_id": "7306132438047116586",
  "user": {
    "nickname": "Sarah Martinez",
    "unique_id": "sarahm_official",
    "sec_uid": "MS4wLjABAAAAF9Dxc3l2aIY6iyooRPiyCij_GHhCE7CwVuWZVRqENV0J",
    "uid": "6870606316903056390",
    "avatar_thumb": {
      "url_list": [
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/avatar123.jpeg"
      ]
    }
  },
  "sort_tags": "{\"top_list\":1}"
}
```

---

This TikTok comments scraper enables efficient post comments extraction and social media comment scraping for teams who need to retrieve post comments and export post comments data. Whether you're building a comment data extraction pipeline or conducting social listening data analysis, this web scraper for comments delivers the structured datasets you need as a reliable comments scraper and post comments extractor.

## Use cases

**Social Media Marketers**: Track audience reactions to campaign content, identify top commenters for influencer partnerships, and measure sentiment shifts across viral posts to optimize content strategy.

**Data Analysts**: Build sentiment analysis pipelines, correlate comment engagement with video performance metrics, and generate audience insight reports for stakeholders using structured comment datasets.

**Competitive Intelligence Teams**: Monitor competitor content reception, analyze audience pain points mentioned in comments, and identify trending topics or product feedback for market research.

## Pricing

See the Apify listing for current pricing.

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/iron-crawler/tiktok-api-post-comments).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "videoId": "7306132438047116586",
  "maxItems": 5,
  "maxPages": 1
}
```

## Get started

**[Run Tiktok Post Comments on Apify →](https://apify.com/iron-crawler/tiktok-api-post-comments?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-post-comments)**

Also available on:

| Apify account | Total runs |
|---|---|
| [iron-crawler](https://apify.com/iron-crawler/tiktok-api-post-comments?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-post-comments) | 483 |
| [patient_discovery](https://apify.com/patient_discovery/tiktok-api-post-comments?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-post-comments) | 241 |
| [monumental_world](https://apify.com/monumental_world/tiktok-api-post-comments?utm_source=github&utm_medium=content&utm_campaign=tiktok-api-post-comments) | 168 |

## Categories

`SOCIAL_MEDIA`
