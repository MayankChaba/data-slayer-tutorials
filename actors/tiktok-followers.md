---
layout: actor
title: "TikTok Followers Scraper · No Cookies"
description: "Extract followers from any TikTok account — usernames, bios, follower counts, engagement stats, verification. No login, no cookies needed. JSON/CSV/Excel."
actor_slug: "tiktok-followers"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/tiktok-followers?utm_source=github&utm_medium=content&utm_campaign=tiktok-followers"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/tiktok-followers/
---

Extract follower lists from any public TikTok account without login. Get usernames, nicknames, bios, avatars, follower/following counts, video counts, heart counts, verification status, and privacy settings. No cookies, no authentication. JSON/CSV/Excel export.

## Inputs

| Field | Type | Description |
|---|---|---|
| `secUid` | string | TikTok secure user ID |
| `maxItems` | integer | Maximum number of followers to fetch per page |
| `maxPages` | integer | Maximum number of pages to fetch |

## What you get

Per follower row: username, nickname, bio, avatar URLs, follower/following counts, video counts, heart counts, verification status, and privacy settings — depending on what the profile exposes publicly.

## Use cases

**Audience research.** Build a follower snapshot for competitive or creator analysis.

**Lead list building.** Export public follower identities for outreach workflows (respect TikTok ToS and local privacy laws).

**Growth tracking.** Re-run weekly to compare follower list changes for a target account.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/tiktok-followers).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "secUid": "MS4wLjABAAAAqB08cUbXaDWqbD6MCga2RbGTuhfO2EsHayBYx08NDrN7IE3jQuRDNNN6YwyfH6_6",
  "maxItems": 5,
  "maxPages": 1
}
```

## Get started

**[Run TikTok Followers Scraper · No Cookies on Apify →](https://apify.com/data-slayer/tiktok-followers?utm_source=github&utm_medium=content&utm_campaign=tiktok-followers)**

## Categories

Social Media
