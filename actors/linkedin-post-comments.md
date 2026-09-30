---
layout: actor
title: "LinkedIn Post Comments"
description: "Extract all comments from any LinkedIn post with commenter names and public profile data. Scraping with no cookies, no login or subscription required."
actor_slug: "linkedin-post-comments"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-post-comments?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-comments"
actor_pricing: "$2 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-post-comments/
---

Extract root comments and available top replies from public LinkedIn post URLs, including commenter names, profile URLs, headlines, timestamps, reply totals, and reaction breakdowns. Batch up to 1,000 posts and export structured JSON, CSV, or Excel—no LinkedIn cookies or login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `post_urls` | array | Required. Add 1–1,000 public LinkedIn post URLs. Supported formats include linkedin.com/posts/…-activity-…, linkedin.com/posts/…-ugcPost-…, and linkedin.com/feed/update/urn:li:a… |
| `max_comments_per_post` | integer | Maximum number of root comments to save for each post. Reply data returned with those comments does not count toward this limit. Enter 0 to fetch all available comments, with a… |

## What you get

Each dataset item is one root comment. Every declared key is present. Unavailable strings and timestamps are `null`; IDs are strings to avoid precision loss; counters are non-negative integers.

| Field | Type | Description |
|---|---|---|
| `post_url` | string | Canonical input post URL. |
| `post_id` | string or null | Numeric LinkedIn activity ID stored as a string. |
| `post_comment_count` | integer or null | Total root-comment count reported for the post when available. |
| `comment_id` | string or null | Numeric LinkedIn comment ID stored as a string. |
| `comment_url` | string or null | Direct LinkedIn comment URL. |
| `comment_text` | string or null | Root-comment text. |
| `commented_at` | string or null | UTC ISO 8601 timestamp derived from the numeric timestamp. |
| `commented_at_timestamp` | integer or null | Unix timestamp in milliseconds. |
| `is_pinned` | boolean | Whether the root comment is pinned. |
| `is_edited` | boolean | Whether the root comment is marked edited. |
| `reply_count` | integer | Total replies reported for the root comment. |
| `top_reply_count` | integer | Number of reply objects included in `top_replies`. This can be lower than `reply_count`. |
| `total_reaction_count` | integer | Sum of every non-negative reaction counter returned for the comment. |
| `like_count` | integer | Like reactions. |
| `praise_count` | integer | Praise reactions. |
| `empathy_count` | integer | Empathy reactions. |
| `appreciation_count` | integer | Appreciation reactions. |
| `interest_count` | integer | Interest reactions. |

_(continued on the Apify listing)_

## Pricing

**$2 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-post-comments).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "post_urls": [
    "https://www.linkedin.com/feed/update/urn:li:activity:7408723748973056001"
  ],
  "max_comments_per_post": 100
}
```

## Get started

**[Run LinkedIn Post Comments on Apify →](https://apify.com/data-slayer/linkedin-post-comments?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-comments)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
