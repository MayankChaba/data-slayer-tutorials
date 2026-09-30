---
layout: actor
title: "Twitter User Followers"
description: "Get Twitter user followers."
actor_slug: "twitter-followers"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-followers?utm_source=github&utm_medium=content&utm_campaign=twitter-followers"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/twitter-followers/
---

Get Twitter user followers.

## Inputs

| Field | Type | Description |
|---|---|---|
| `userId` | string | Username |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
{
  "user_id": "783214",
  "screen_name": "sarahmarketingpro",
  "name": "Sarah Chen",
  "description": "Digital Marketing Strategist | Content Creator | Helping brands grow through authentic storytelling",
  "profile_image": "https://pbs.twimg.com/profile_images/1234567890/abc123_normal.jpg",
  "statuses_count": 12847,
  "followers_count": 45230,
  "friends_count": 892,
  "media_count": 3421,
  "created_at": "Wed Mar 15 14:22:18 +0000 2012",
  "can_dm": true,
  "location": "San Francisco, CA",
  "blue_verified": true,
  "verified": false,
  "website": "https://sarahchen.co",
  "affiliates": [],
  "business_account": null
}
```

---

## Use cases

**Influencer Marketing Managers**: Identify high-value collaboration partners by analyzing follower overlap between competitor accounts and extracting verified users with substantial followings for outreach campaigns.

**Social Media Analysts**: Build demographic profiles and engagement patterns by aggregating follower data across industry leaders to inform content strategy and audience targeting decisions.

**B2B Sales Teams**: Generate qualified leads by extracting followers from industry thought leaders and decision-makers, enriching prospect lists with verified contact information and professional affiliations.

Whether you need an Instagram scraper alternative or want to get Instagram followers data for competitive analysis, this follower extraction tool provides comprehensive social media data scraping capabilities for lead generation from followers across Twitter's ecosystem. Export Instagram followers-style datasets with our scrape Instagram followers methodology adapted for Twitter's public API.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-followers).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "userId": "elonmusk",
  "maxPages": 1
}
```

## Get started

**[Run Twitter User Followers on Apify →](https://apify.com/data-slayer/twitter-followers?utm_source=github&utm_medium=content&utm_campaign=twitter-followers)**

## Categories

Social Media
