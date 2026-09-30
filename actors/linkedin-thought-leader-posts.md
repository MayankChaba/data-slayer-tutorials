---
layout: actor
title: "LinkedIn Thought Leader Posts Scraper "
description: "LinkedIn thought leader posts scraper. Extract the full post history from any LinkedIn creator or influencer profile — post text, likes, comments, shares, and reaction breakdowns. Ideal for content marketers, influencer researchers, and social media analysts. No cookies or login required. "
actor_slug: "linkedin-thought-leader-posts"
actor_account: "patient_discovery"
actor_url: "https://apify.com/patient_discovery/linkedin-thought-leader-posts?utm_source=github&utm_medium=content&utm_campaign=linkedin-thought-leader-posts"
actor_pricing: "$20 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-thought-leader-posts/
---

Scrape all posts from any LinkedIn creator or thought leader. Returns post content, engagement stats, reaction types, and media — perfect for content research, influencer vetting, and competitive content analysis. No login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_url` | string | The LinkedIn Profile Url to scraping |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

| Post Date | Likes | Comments | Shares | Top Reaction | Post Preview |
|---|---|---|---|---|---|
| Nov 22 | 4,200 | 380 | 210 | PRAISE (1,800) | "The best sales teams I've worked with..." |
| Nov 18 | 1,900 | 142 | 88 | LIKE (1,200) | "A framework I use for..." |
| Nov 14 | 870 | 76 | 31 | INTEREST (490) | "Hot take: most content calendars..." |

## Pricing

**$20 per 1,000 results** (Free tier)  
Actor start: $0.0001 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/linkedin-thought-leader-posts).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_url": "https://in.linkedin.com/in/mayankchaba",
  "maxPages": 1
}
```

## Get started

**[Run LinkedIn Thought Leader Posts Scraper
 on Apify →](https://apify.com/patient_discovery/linkedin-thought-leader-posts?utm_source=github&utm_medium=content&utm_campaign=linkedin-thought-leader-posts)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
