---
layout: actor
title: "LinkedIn Post Engagers Scraper"
description: "Extract everyone who engaged with a LinkedIn post — commenters, reactors and reposters — with full profile data. Deduplicated, no cookies, no login."
actor_slug: "linkedin-post-engagers-email-finder-no-cookies"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-post-engagers-email-finder-no-cookies?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-engagers-email-finder-no-cookies"
actor_pricing: "$6.00 per 1,000 results (Free tier)"
categories: ["LEAD_GENERATION", "SOCIAL_MEDIA", "MARKETING"]
permalink: /actors/linkedin-post-engagers-email-finder-no-cookies/
---

Paste a LinkedIn post URL → get everyone who engaged with it — commenters, reactors, reposters — deduplicated into one list with full LinkedIn profile data. No cookies, no login.

## Inputs

| Field | Type | Description |
|---|---|---|
| `linkedin_post_url` | string | One LinkedIn post URL in a supported format (e.g. linkedin.com/posts/… or feed/update/urn:li:activity:…). Bulk multiple URLs will be added later. |
| `include_commenters` | boolean | Include people who commented on the post |
| `include_reactors` | boolean | Include people who reacted (liked, celebrated, etc.) |
| `include_reposters` | boolean | Include people who reposted the post |

## Pricing

**$6.00 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-post-engagers-email-finder-no-cookies).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "linkedin_post_url": "https://www.linkedin.com/posts/satyanadella_honored-to-share-that-microsoft-has-been-activity-7300837546804742144-5Mti",
  "include_commenters": false,
  "include_reactors": true,
  "include_reposters": false
}
```

## Get started

**[Run LinkedIn Post Engagers Scraper on Apify →](https://apify.com/data-slayer/linkedin-post-engagers-email-finder-no-cookies?utm_source=github&utm_medium=content&utm_campaign=linkedin-post-engagers-email-finder-no-cookies)**

## Categories

Lead Generation, Social Media, Marketing
