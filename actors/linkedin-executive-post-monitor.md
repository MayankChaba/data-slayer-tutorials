---
layout: actor
title: "LinkedIn Executive Post Monitor"
description: "Monitor target executives and prospects for new LinkedIn posts. Returns only posts published since the last run. No cookies or login."
actor_slug: "linkedin-executive-post-monitor"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-executive-post-monitor?utm_source=github&utm_medium=content&utm_campaign=linkedin-executive-post-monitor"
actor_pricing: "$30 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION", "MARKETING"]
permalink: /actors/linkedin-executive-post-monitor/
---

Never miss a target's post. Track the executives and prospects you care about; the Actor remembers what it has already seen and returns only the posts published since the last run — so you can be the first to comment. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | LinkedIn profile URLs of the executives, prospects, or accounts you want to watch for new posts. |
| `state_key` | string | Namespaces the stored 'already seen' history. Use one key per watchlist so separate lists never overwrite each other. |
| `max_posts_per_profile` | integer | How many of each profile's most recent posts to scan for new ones. The main runtime and cost control. 1–50. |

## What you get

One row per new post:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "stateKey": "dream-accounts",
  "authorProfileUrl": "https://www.linkedin.com/in/example-executive-1",
  "authorName": "Example Executive",
  "postUrl": "https://www.linkedin.com/posts/example_activity-123-X/",
  "postText": "Public post text (truncated)",
  "postedAt": "2026-09-24T09:00:00+00:00",
  "reactions": 412,
  "comments": 37,
  "engagementTotal": 449,
  "isFirstRun": false,
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports profiles monitored, new posts, and whether the run was empty.

## Pricing

**$30 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-executive-post-monitor).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/example-executive"
  ],
  "state_key": "default",
  "max_posts_per_profile": 10
}
```

## Get started

**[Run LinkedIn Executive Post Monitor on Apify →](https://apify.com/data-slayer/linkedin-executive-post-monitor?utm_source=github&utm_medium=content&utm_campaign=linkedin-executive-post-monitor)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`, `MARKETING`
