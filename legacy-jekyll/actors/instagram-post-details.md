---
layout: actor
title: "Instagram Post & Reel Details Scraper · No Login"
description: "Scrape Instagram post & Reel details by URL — 128 fields: views, likes, comments, shares, saves, reposts, audio metadata. Includes repost_count. No login. From $1.50/1K. JSON/CSV/Excel."
actor_slug: "instagram-post-details"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-post-details?utm_source=github&utm_medium=content&utm_campaign=instagram-post-details"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-post-details/
---

Get full details from any Instagram post or Reel by URL — no login. 128 fields: likes, comments, views, shares, saves, reposts, captions, audio metadata, video URLs, and creator profiles. Bulk URL input. Includes repost_count missing from Apify's own scraper. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `postUrls` | array | Instagram post shortcodes, media IDs, or URLs. Paste multiple URLs here, one per line. Bulk runs are usually more economical than starting a separate run for each post because A… |
| `postCode` | string | Legacy single input. For lower per-post run overhead, use 'Post codes / URLs (bulk recommended)' above and paste multiple posts in one run. |

## What you get

128 fields per post, organized in five groups:

**Engagement Metrics:** like_count, comment_count, view_count (for Reels/videos), share_count, save_count, repost_count, play_count

Each output includes `metrics_availability.share_count` and `metrics_availability.save_count`. `currently_unavailable` means the count is not currently available for that post; it does not mean zero. Shares and saves can be unavailable for images and carousels.

**Content Data:** caption text, hashtags, mentions, tagged users, location (name, lat/lng, address), post type (photo/video/carousel/reel), media URLs (images, video, carousel items), thumbnail URLs, accessibility text (alt text)

**Audio & Music (Reels):** audio title, artist name, audio ID, is_original_audio, audio URL, music genre

**Creator Profile:** username, full name, user ID, profile picture URL, is_verified, follower_count, biography, external URL, business category

**Technical Metadata:** post ID, shortcode, posted timestamp, taken_at_timestamp, media dimensions, video duration, is_paid_partnership, sponsor tags, product tags, filter type, can_reshare flag

## Use cases

**Content Performance Analysis** — Compare engagement rates across post types (photo vs Reel vs carousel). Identify which formats drive the most saves and reposts — the metrics that actually signal purchase intent.

**Competitor Benchmarking** — Pull detailed metrics from a competitor's top-performing posts. Analyze their caption style, hashtag strategy, posting cadence, and which audio tracks drive virality.

**Influencer Campaign Tracking** — Verify actual engagement numbers on sponsored posts. Check `is_paid_partnership` flags, compare view counts to follower counts, and track save rates as a quality metric.

**Trending Audio Discovery** — Extract audio metadata from viral Reels in your niche. Build a library of trending sounds before they peak.

**UGC Monitoring** — Track posts that tag your brand or location. Get complete engagement data to measure earned media value.

**Ad Creative Research** — Scrape competitors' ad posts (identifiable via `is_paid_partnership`) to analyze creative formats, caption length, hashtag usage, and engagement patterns.

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-post-details).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "postUrls": [
    "DVEGQskiMcy"
  ],
  "postCode": ""
}
```

## Get started

**[Run Instagram Post & Reel Details Scraper · No Login on Apify →](https://apify.com/data-slayer/instagram-post-details?utm_source=github&utm_medium=content&utm_campaign=instagram-post-details)**

## Categories

Social Media, Lead Generation
