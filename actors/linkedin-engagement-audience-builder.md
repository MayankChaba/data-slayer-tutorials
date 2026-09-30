---
layout: actor
title: "LinkedIn Engagement Audience Builder"
description: "Build one deduplicated, engagement-ranked LinkedIn audience from many creator or competitor profiles and all their posts. No cookies or login."
actor_slug: "linkedin-engagement-audience-builder"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-engagement-audience-builder?utm_source=github&utm_medium=content&utm_campaign=linkedin-engagement-audience-builder"
actor_pricing: "$15.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-engagement-audience-builder/
---

Build one ranked warm audience from many LinkedIn sources. Enter several competitor or creator profile URLs; the Actor scans all their posts, extracts everyone who engaged, deduplicates the people, and ranks them by engagement frequency. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | Two or more competitor / creator / thought-leader LinkedIn profile URLs whose posts define the audience. |
| `max_posts` | integer | Hard cap on how many recent posts are scanned per source. The main runtime and cost control. 1–30. |
| `include_reactions` | boolean | Count people who reacted to the posts. |
| `include_commenters` | boolean | Count people who commented on the posts. |

## What you get

One row per person, ranked by engagement frequency:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "profileUrl": "https://www.linkedin.com/in/example",
  "fullName": "Example Person",
  "headline": "VP Marketing",
  "companyName": "Globex",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "engagementCount": 9,
  "commentCount": 4,
  "reactionCount": 5,
  "uniquePostsEngaged": 6,
  "sourcesEngaged": 2,
  "postsEngagedWith": ["https://www.linkedin.com/posts/..."],
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports sources, posts scanned, engagement events, unique people, and rows written.

## Pricing

**$15.00 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-engagement-audience-builder).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/example-creator-1",
    "https://www.linkedin.com/in/example-creator-2"
  ],
  "max_posts": 10,
  "include_reactions": true,
  "include_commenters": true
}
```

## Get started

**[Run LinkedIn Engagement Audience Builder on Apify →](https://apify.com/data-slayer/linkedin-engagement-audience-builder?utm_source=github&utm_medium=content&utm_campaign=linkedin-engagement-audience-builder)**

## Categories

Lead Generation, Social Media, Marketing
