---
layout: actor
title: "LinkedIn Post Reactions"
description: "Extract all reactions from any LinkedIn post with reactor names and public profile data. Scraping with no cookies, no login or subscription required."
actor_slug: "linkedin-post-reactions"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-post-reactions?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-reactions"
actor_pricing: "$2.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-post-reactions/
---

Extract people and entities that reacted to public LinkedIn posts. Get reaction type, name, headline, LinkedIn URL, IDs, and timestamps in clean JSON or CSV—no cookies or LinkedIn login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `post_urls` | array | Required. Add 1–1,000 LinkedIn post URLs. Supported formats include linkedin.com/posts/…-activity-…, linkedin.com/posts/…-ugcPost-…, and linkedin.com/feed/update/urn:li:activity… |
| `max_reactions_per_post` | integer | Maximum number of matching reactions to save for each post. Enter 0 to fetch all available reactions, with a 100-page safety cap per post. |
| `reaction_types` | array | Choose which LinkedIn reactions to keep. “All reaction types” ignores the other selections. |

## Pricing

**$2.00 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-post-reactions).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "post_urls": [
    "https://www.linkedin.com/posts/satyanadella_today-at-microsoft-build-we-showed-you-how-activity-7330296202275495938-EWFD"
  ],
  "max_reactions_per_post": 100,
  "reaction_types": [
    "ALL"
  ]
}
```

## Get started

**[Run LinkedIn Post Reactions on Apify →](https://apify.com/data-slayer/linkedin-post-reactions?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-reactions)**

## Categories

Social Media, Lead Generation
