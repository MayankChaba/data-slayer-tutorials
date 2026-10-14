---
layout: actor
title: "LinkedIn Account Intent Feed"
description: "Score LinkedIn accounts by who engaged with competitor or creator posts. One row per company with engager counts, engagement mix, and an intent score. No cookies."
actor_slug: "linkedin-account-intent-feed"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-account-intent-feed?utm_source=github&utm_medium=content&utm_campaign=linkedin-account-intent-feed"
actor_pricing: "$40.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-account-intent-feed/
---

Turn LinkedIn post engagement into an account-level intent feed. Enter competitor or creator profile URLs (or post URLs); the Actor finds everyone who engaged, resolves their company, and returns one row per account with engager counts, engagement mix, and an intent score.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | Competitor or thought-leader LinkedIn profile URLs whose recent posts will be scanned for engagers. |
| `post_urls` | array | Optional: scan these exact posts instead of (or as well as) the source profiles' feeds. |
| `max_posts` | integer | Hard cap on how many recent posts are scanned per source profile. The main runtime and cost control. 1–50. |
| `include_reactions` | boolean | Count people who reacted to the posts. |
| `include_commenters` | boolean | Count people who commented on the posts. |

## What you get

One row per account that showed engagement:

```json
{
  "schemaVersion": "1.0",
  "checkedAt": "2026-09-25T10:00:00+00:00",
  "companyName": "Globex",
  "companyUrl": "https://www.linkedin.com/company/globex",
  "companyIndustry": "Software Development",
  "engagerCount": 7,
  "commenterCount": 3,
  "reactorCount": 5,
  "uniquePostsEngaged": 4,
  "intentScore": 100,
  "topPeople": [
    {
      "profileUrl": "https://www.linkedin.com/in/example",
      "name": "Example Person",
      "engagements": 3,
      "uniquePosts": 3
    }
  ],
  "sourceProfiles": ["https://www.linkedin.com/in/example-competitor"],
  "collectedAt": "2026-09-25T10:00:00+00:00"
}
```

The `OUTPUT` key-value-store record reports posts scanned, engagers found and resolved, and accounts written.

## Pricing

**$40.00 per 1,000 results** (Free tier)  
Actor start: $0.02 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-account-intent-feed).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/example-competitor"
  ],
  "post_urls": [],
  "max_posts": 10,
  "include_reactions": true,
  "include_commenters": true
}
```

## Get started

**[Run LinkedIn Account Intent Feed on Apify →](https://apify.com/data-slayer/linkedin-account-intent-feed?utm_source=github&utm_medium=content&utm_campaign=linkedin-account-intent-feed)**

## Categories

Lead Generation, Social Media, Marketing
