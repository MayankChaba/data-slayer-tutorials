---
layout: actor
title: "Instagram Reposts Scraper · Profile Repost History · No Login"
description: "Scrape Instagram Reposts tab from any profile — reposted content, original creator profiles, engagement data, 157 fields. No login. JSON/CSV/Excel export."
actor_slug: "instagram-reposts"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-reposts?utm_source=github&utm_medium=content&utm_campaign=instagram-reposts"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-reposts/
---

Extract everything from any public Instagram profile's Reposts tab — reposted content, original creator data, captions, engagement metrics, and video URLs. 157 fields per result. No login, no cookies. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `username` | string | Instagram username, user ID, or profile URL |
| `maxResults` | integer | Maximum number of reposts to return |

## What you get

### Repost Content Fields (all tiers)

| Field | Description |
|---|---|
| `post_id` | Instagram's internal ID for the reposted content |
| `shortcode` | Post shortcode (used in the post URL) |
| `post_url` | Direct URL to the original post |
| `post_type` | Photo, Video, Reel, or Carousel |
| `caption` | Full caption text of the original post |
| `hashtags` | Extracted hashtag list |
| `mentions` | Tagged accounts in the caption |
| `like_count` | Total likes on the original post |
| `comment_count` | Total comments on the original post |
| `view_count` | View count (for Reels and videos) |
| `save_count` | Total saves (bookmark count) |
| `repost_count` | How many times this post has been reposted |
| `posted_at` | When the original post was published |
| `media_url` | Direct URL to the image or video |
| `video_url` | Video file URL (for Reels and video posts) |
| `thumbnail_url` | Preview image URL |
| `carousel_media` | Array of all media items (carousel posts) |
| `audio_title` | Audio track name (for Reels) |
| `audio_artist` | Audio artist (for Reels) |
| `is_original_audio` | Whether the audio is original |
| `is_paid_partnership` | Sponsored content flag |
| `tagged_users` | Users tagged in the post |
| `location_name` | Location tag if present |

### Original Creator Fields (all tiers)

| Field | Description |
|---|---|
| `creator_username` | Instagram handle of the original creator |
| `creator_full_name` | Display name |
| `creator_id` | Instagram user ID |
| `creator_is_verified` | Blue checkmark status |
| `creator_profile_url` | Link to their profile |

_(continued on the Apify listing)_

## Use cases

### Competitor Content Intelligence
What content is your competitor's account amplifying? Run this actor on any competitor profile and get a structured log of every creator and post they've chosen to endorse via repost. Understand which content themes, formats, and creators they consider worth sharing — and spot patterns before they become obvious.

### Influencer Vetting
Before signing a creator for a brand deal, check their Reposts tab. What content do they amplify? Do they repost competitors? Do they endorse values consistent with your brand? A creator's reposts are a window into their actual content taste and partnerships — more honest than curated posts.

### Repost History Archiving
Monitor a profile's Reposts tab weekly to build a historical record of what they amplify over time. Useful for brand safety auditing, agency reporting, and compliance documentation.

### Content Strategy Research

_(continued on the Apify listing)_

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-reposts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "username": "cristiano",
  "maxResults": 10
}
```

## Get started

**[Run Instagram Reposts Scraper · Profile Repost History · No Login on Apify →](https://apify.com/data-slayer/instagram-reposts?utm_source=github&utm_medium=content&utm_campaign=instagram-reposts)**

## Categories

Social Media, Lead Generation
