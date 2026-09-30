---
layout: actor
title: "Twitter/X Profile Scraper · Bulk Handles, URLs & IDs"
description: "Extract public Twitter/X profiles in bulk from handles, URLs, or numeric IDs. Export bios, stable IDs, audience counts, verification, images, and account metadata."
actor_slug: "twitter-user"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/twitter-user?utm_source=github&utm_medium=content&utm_campaign=twitter-user"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION", "OTHER"]
permalink: /actors/twitter-user/
---

Extract public Twitter/X profile data from handles, profile URLs, or numeric user IDs. Export bios, follower and following counts, verification, images, location, account dates, and stable IDs to JSON, CSV, or Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profiles` | array | One reference per line. Accepts nasa, @nasa, https://x.com/nasa, https://twitter.com/nasa, or a numeric user ID. |
| `maxItems` | integer | Hard cap on unique profile references processed in this run. |
| `username` | string | Backward-compatible input. Existing API clients can continue sending username exactly as before. |
| `usernames` | array | Optional compatibility alias for batch handles. |
| `profileUrls` | array | Optional compatibility alias for batch profile URLs. |
| `userIds` | array | Optional compatibility alias for stable numeric user IDs. |

## What you get

The default dataset preserves the established fields used by existing customers and adds stable, documented aliases for new integrations.

### Canonical fields

| Field | Type | Nullable | Description |
| --- | --- | --- | --- |
| `record_type` | string | No | Always `profile`. |
| `requested_input` | string | No | The first input reference that produced this row. |
| `input_type` | string | No | `handle` or `user_id`. |
| `user_id` | string | Yes | Stable numeric user ID when available. |
| `username` | string | Yes | Current account handle. |
| `display_name` | string | Yes | Public display name. |
| `bio` | string | Yes | Public profile biography. |
| `followers_count` | integer | Yes | Public follower count at collection time. |
| `following_count` | integer | Yes | Public following count at collection time. |
| `posts_count` | integer | Yes | Public post count at collection time. |
| `is_blue_verified` | boolean | Yes | Blue verification state when available. |
| `is_protected` | boolean | Yes | Whether posts are protected. Public profile-header fields may still be available. |
| `profile_image_url` | string | Yes | Public profile image URL. |
| `banner_image_url` | string | Yes | Public banner image URL. |
| `profile_url` | string | Yes | Canonical `x.com` profile URL when a handle is available. |
| `collected_at` | ISO 8601 string | No | Time this Actor mapped the profile row. |

### Preserved legacy fields

_(continued on the Apify listing)_

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/twitter-user).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profiles": [
    "nasa",
    "https://x.com/apify"
  ],
  "maxItems": 100,
  "username": "",
  "usernames": [],
  "profileUrls": [],
  "userIds": []
}
```

## Get started

**[Run Twitter/X Profile Scraper · Bulk Handles, URLs & IDs on Apify →](https://apify.com/data-slayer/twitter-user?utm_source=github&utm_medium=content&utm_campaign=twitter-user)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/twitter-user?utm_source=github&utm_medium=content&utm_campaign=twitter-user) | 122,883 |
| [monumental_world](https://apify.com/monumental_world/twitter-user?utm_source=github&utm_medium=content&utm_campaign=twitter-user) | 2,324 |
| [iron-crawler](https://apify.com/iron-crawler/twitter-user?utm_source=github&utm_medium=content&utm_campaign=twitter-user) | 462 |
| [patient_discovery](https://apify.com/patient_discovery/twitter-user?utm_source=github&utm_medium=content&utm_campaign=twitter-user) | 309 |

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`, `OTHER`
