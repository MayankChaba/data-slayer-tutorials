---
layout: actor
title: "Instagram User Search · Find Leads by Keyword · No Login"
description: "Find Instagram profiles by keyword — Basic ($2.50/1K), Enriched with emails & 200+ fields ($12/1K), Verified SMTP email ($20/1K). No login, no cookies. Build niche lead lists instantly. JSON/CSV/Excel."
actor_slug: "instagram-search-users"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-search-users?utm_source=github&utm_medium=content&utm_campaign=instagram-search-users"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA"]
permalink: /actors/instagram-search-users/
---

Type any keyword and get every Instagram profile Instagram surfaces for that topic — usernames, verification status, and profile data. Enriched tier adds full profiles with emails, phones, websites, and 200+ fields. Verified tier SMTP-confirms every email. Three tiers. No login. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Search term or keyword to discover Instagram users (e.g. "marketing", "startup founder"). |
| `mode` | string | Pay-per-result tiers. Basic = search stubs only. Enriched = /instagram/v1/info per public user (no MillionVerifier). Verified = enriched + MillionVerifier SMTP verification. |
| `maxItems` | integer | Maximum search results to return. The actor paginates automatically until this cap or the search ends. API alias: maxResults. |

## What you get

```json
{
  "username": "sarahfitcoach",
  "full_name": "Sarah M. | Online Fitness Coach",
  "id": "48392847562",
  "is_verified": false,
  "is_private": false,
  "profile_pic_url": "https://scontent.cdninstagram.com/v/...",
  "latest_reel_media": 1748450234
}
```

## Use cases

### Influencer Discovery by Niche
Search "skincare creator", "travel photographer", or "sustainable fashion" and get a ranked list of every relevant account Instagram surfaces — with follower counts, engagement signals, and contact info in the Enriched tier. Run multiple keyword variants in one session to cover a niche comprehensively.

### Local Business Lead Generation
Combine a role with a city — "restaurant owner Chicago", "real estate agent Austin", "wedding photographer London" — and get hyper-targeted local prospect lists. The Enriched tier adds physical address data for accounts that have listed it, making this ideal for field sales teams and local agency pitches.

### Recruiting and Talent Discovery
Find freelancers, subject matter experts, and creative professionals by keyword — "ux designer", "copywriter fintech", "brand strategist" — and get their public contact info and website links. The Verified tier confirms which emails are live before your recruiter sends a message.

### Competitor Mapping

_(continued on the Apify listing)_

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-search-users).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "marketing",
  "mode": "basic",
  "maxItems": 5
}
```

## Get started

**[Run Instagram User Search · Find Leads by Keyword · No Login on Apify →](https://apify.com/data-slayer/instagram-search-users?utm_source=github&utm_medium=content&utm_campaign=instagram-search-users)**

## Categories

Lead Generation, Social Media
