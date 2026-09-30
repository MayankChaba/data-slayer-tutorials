---
layout: actor
title: "LinkedIn Profile Engagers Scraper"
description: "Turn a LinkedIn profile into a ranked list of everyone who engaged with their posts. Deduplicated across posts, ranked by engagement frequency. No cookies or login."
actor_slug: "linkedin-audience-email-finder-no-cookies"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-audience-email-finder-no-cookies?utm_source=github&utm_medium=content&utm_campaign=linkedin-audience-email-finder-no-cookies"
actor_pricing: "$6 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-audience-email-finder-no-cookies/
---

Enter a LinkedIn profile URL and get everyone who engaged across their recent posts — commenters, reactors, reposters — deduplicated into one list and ranked by engagement frequency. Full LinkedIn profile data, no cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_profile_url` | string | Public profile URL (linkedin.com/in/…) or Sales Navigator lead URL. Posts from this profile’s activity feed in the selected timeframe are scanned for engagers. |
| `timeframe` | string | Only posts published within this window (UTC) are included when collecting the thought leader’s posts. |
| `max_posts` | integer | Hard cap on how many of the profile's most recent posts are scanned for engagers. This is the main runtime and cost control — lower it for very active profiles. 1-100, default 25. |
| `include_commenters` | boolean | Include people who commented on the thought leader’s posts |
| `include_reactors` | boolean | Include people who reacted to the thought leader’s posts |
| `include_reposters` | boolean | Include people who reposted the thought leader’s posts |

## Pricing

**$6 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-audience-email-finder-no-cookies).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_profile_url": "https://www.linkedin.com/in/mayankchaba/",
  "timeframe": "last_7_days",
  "max_posts": 25,
  "include_commenters": false,
  "include_reactors": true,
  "include_reposters": false
}
```

## Get started

**[Run LinkedIn Profile Engagers Scraper on Apify →](https://apify.com/data-slayer/linkedin-audience-email-finder-no-cookies?utm_source=github&utm_medium=content&utm_campaign=linkedin-audience-email-finder-no-cookies)**

## Categories

`LEAD_GENERATION`, `SOCIAL_MEDIA`, `MARKETING`
