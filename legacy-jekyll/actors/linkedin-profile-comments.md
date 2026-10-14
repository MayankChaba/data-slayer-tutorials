---
layout: actor
title: "LinkedIn Profile Comments"
description: "Extract comments written by any LinkedIn profile, with the commented-on post and engagement context. No cookies or login required."
actor_slug: "linkedin-profile-comments"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-profile-comments?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-comments"
actor_pricing: "$2.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION", "MARKETING"]
permalink: /actors/linkedin-profile-comments/
---

Extract comments written by one or more public LinkedIn profiles, with the commented-on post and engagement context.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | Required. Add 1–1,000 public LinkedIn profile URLs in linkedin.com/in/… format. Regional LinkedIn hosts are accepted. Tracking parameters, fragments, and trailing slashes are re… |
| `max_comments_per_profile` | integer | Maximum number of unique comment records to save for each profile. Enter 0 to fetch all available comments, with a 100-page safety cap per profile. |
| `commented_within` | string | Only save comments written within this time window. Choose Any time to keep all available comments. |

## What you get

Each dataset item is one unique comment written by an input profile. Every declared key is present. Unavailable strings and timestamps are `null`; IDs are strings to avoid precision loss; counters are non-negative integers.

| Field | Type | Description |
|---|---|---|
| `profile_url` | string | Canonical input profile URL. |
| `profile_identifier` | string | Public identifier from the `/in/...` path. |
| `comment_text` | string or null | Text of the comment the profile wrote. |
| `comment_created_at` | string or null | UTC ISO 8601 timestamp of when the profile wrote the comment. This is not the post's publication time. |
| `comment_created_at_timestamp` | integer or null | Unix timestamp in milliseconds for `comment_created_at`. |
| `comment_url` | string or null | Canonical LinkedIn comment URL. |
| `comment_urn` | string or null | Source comment URN when supplied. |
| `comment_likes` | integer or null | Likes reported on the comment itself. |
| `comment_reply_count` | integer or null | Replies reported on the comment itself. |
| `comment_reactions` | array | Reaction counts on the comment itself as `{reaction_type, count}` objects. |
| `commenter_id` | string or null | Stable LinkedIn member or entity ID when available. |
| `commenter_type` | string | `profile`, `company`, or `unknown`, derived from the source author type. |
| `commenter_name` | string or null | Commenting profile's display name. |
| `commenter_headline` | string or null | Commenting profile's public headline or occupation. |

_(continued on the Apify listing)_

## Pricing

**$2.00 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-profile-comments).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/satyanadella"
  ],
  "max_comments_per_profile": 100,
  "commented_within": "any"
}
```

## Get started

**[Run LinkedIn Profile Comments on Apify →](https://apify.com/data-slayer/linkedin-profile-comments?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-comments)**

## Categories

Social Media, Lead Generation, Marketing
