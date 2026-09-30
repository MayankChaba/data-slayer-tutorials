---
layout: actor
title: "Instagram Reel & Post Analytics by URL"
description: "Instagram post analytics by URL — public views, likes, comments, reposts, audio metadata, plus shares and saves when exposed by Instagram. Explicit metric availability. Bulk input. No login."
actor_slug: "instagram-reel-analytics-by-url"
actor_account: "patient_discovery"
actor_url: "https://apify.com/patient_discovery/instagram-reel-analytics-by-url?utm_source=github&utm_medium=content&utm_campaign=instagram-reel-analytics-by-url"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/instagram-reel-analytics-by-url/
---

Get available public engagement data from any Instagram post or Reel URL — including views, likes, comments, reposts, and shares or saves when Instagram exposes them. Each result reports metric availability explicitly. Bulk URLs supported. No login. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `postCode` | string | One Instagram post/Reel URL or shortcode (e.g. ABC123). Leave empty if you only use Post URLs (bulk) below. |
| `postUrls` | array | Add multiple Instagram post or Reel URLs or shortcodes in one run. Bulk input is usually more economical because the actor-start charge is paid once per run instead of once per… |

## What you get

```json
{
  "metrics": {
    "like_count": 4099,
    "comment_count": 12923,
    "play_count": 355123,
    "ig_play_count": 355123,
    "share_count": 10919,
    "save_count": 11085,
    "repost_count": 154
  },
  "caption": {
    "text": "I gained 50,000 followers in 17 days using Claude AI.\n\nNo paid ads. No collabs. Just 3 skills.",
    "hashtags": ["#claudeai", "#aitools", "#instagramgrowth"],
    "mentions": []
  },
  "media_name": "reel",
  "is_video": true,
  "video_url": "https://scontent.cdninstagram.com/...",
  "video_duration": 41.35,
  "taken_at_date": "2026-04-29T10:18:41+00:00",
  "is_paid_partnership": false,
  "is_pinned": false,
  "clips_metadata": {
    "audio_canonical_id": "18537152875064470",
    "audio_type": "licensed_music"
  },
  "user": {
    "username": "manthanjethwani",
    "full_name": "Manthan Jethwani",
    "is_verified": true
  }
}
```

---

## Use cases

**Campaign performance tracking.** Running an influencer campaign? Paste all the deliverable URLs at the end of the campaign and get every metric in one spreadsheet — views, likes, shares, saves, reposts per post. No manual checking, no incomplete data.

**Content benchmarking.** Build your own content performance database. Scrape URLs from your posts and competitor posts on a regular schedule. Track how saves and shares change over time — these are the two metrics that best predict algorithmic reach.

**Sponsored content audit.** The `is_paid_partnership` flag tells you which posts are branded deals. Scrape a creator's recent posts, filter by `is_paid_partnership: true`, and analyze how their sponsored content performs against organic content.

**Viral content research.** Found a Reel performing unusually well? Pull all 128 fields to understand every variable: audio track used (`clips_metadata.audio_canonical_id`), post time, caption structure, collaborators, hashtag count. Reverse-engineer what made it work.

_(continued on the Apify listing)_

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/instagram-reel-analytics-by-url).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "postCode": "",
  "postUrls": []
}
```

## Get started

**[Run Instagram Reel & Post Analytics by URL on Apify →](https://apify.com/patient_discovery/instagram-reel-analytics-by-url?utm_source=github&utm_medium=content&utm_campaign=instagram-reel-analytics-by-url)**

## Categories

Social Media
