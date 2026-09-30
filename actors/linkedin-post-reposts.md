---
layout: actor
title: "LinkedIn Post Reposts"
description: "Extract every repost of any LinkedIn post with reposter names and public profile data. Scraping with no cookies, no login or subscription required."
actor_slug: "linkedin-post-reposts"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-post-reposts?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-reposts"
actor_pricing: "$2 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-post-reposts/
---

Extract reposts and reshares from public LinkedIn post URLs, including reposter names, profile URLs when available, headlines, repost text, timestamps, and content-author details. Batch up to 1,000 posts and export structured JSON, CSV, or Excel—no LinkedIn cookies or login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `post_urls` | array | Required. Add 1–1,000 public LinkedIn post URLs. Supported formats include linkedin.com/posts/…-activity-…, linkedin.com/posts/…-ugcPost-…, and linkedin.com/feed/update/urn:li:a… |
| `max_reposts_per_post` | integer | Maximum number of unique reposts to save for each post. Enter 0 to fetch all available reposts, with a 100-page safety cap per post. |

## What you get

Each dataset item is one unique repost. Every declared key is present. Unavailable strings, URLs, IDs, and timestamps are `null`; IDs are strings to avoid precision loss; counts and indexes are non-negative integers.

| Field | Type | Description |
|---|---|---|
| `post_url` | string | Canonical input post URL. |
| `post_id` | string | Numeric LinkedIn activity ID stored as a string. |
| `post_repost_count` | integer or null | Total repost count reported for the source post when available. |
| `repost_id` | string or null | Repost activity ID when an activity URL is available. |
| `repost_url` | string or null | Canonical LinkedIn repost activity URL when available. |
| `repost_type` | string | `direct` or `reshare`. |
| `repost_action_text` | string or null | Available action label such as `Name reposted this`. |
| `repost_text` | string or null | Text carried by the repost record; on reshare rows this can be shared-post text. |
| `reposted_at` | string or null | UTC ISO 8601 timestamp derived from the repost activity ID when available. |
| `reposted_at_timestamp` | integer or null | Unix timestamp in milliseconds derived from the repost activity ID when available. |
| `reposted_at_relative` | string or null | Relative source label such as `3mo`; useful for display, not exact chronological sorting. |
| `reposter_id` | string or null | Stable LinkedIn profile or company identifier when available. |
| `reposter_type` | string | `profile`, `company`, or `unknown`. |
| `reposter_name` | string or null | Reposter display name. |

_(continued on the Apify listing)_

## Pricing

**$2 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-post-reposts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "post_urls": [
    "https://www.linkedin.com/feed/update/urn:li:activity:7408723748973056001"
  ],
  "max_reposts_per_post": 100
}
```

## Get started

**[Run LinkedIn Post Reposts on Apify →](https://apify.com/data-slayer/linkedin-post-reposts?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-reposts)**

## Categories

`SOCIAL_MEDIA`, `MARKETING`
