---
layout: actor
title: "Instagram Post Comments Extractor · No Login"
description: "Scrape Instagram comments + enrich commenters with emails, phones, websites. Find purchase-intent leads. 37+ fields. No login. $2.50/1K basic · $12/1K enriched · $20/1K verified. JSON/CSV/Excel."
actor_slug: "instagram-comments-scraper-no-login-required"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-comments-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-comments-scraper-no-login-required"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-comments-scraper-no-login-required/
---

Extract comments from any Instagram post with 37+ fields per comment — plus enrich each commenter with emails, phones, websites, bios, and follower counts. Find people with purchase intent in comments and get their contact info. MillionVerifier verification. No login. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `postCode` | string | Instagram post shortcode, media ID, or URL. Legacy field postCode; postUrl also accepted via API. |
| `sortBy` | string | Order returned by the comments API |
| `mode` | string | Pricing tiers (pay-per-result on Apify). Basic returns raw comments + null commenter-enrichment columns for stable CSV. Enriched and Verified call /instagram/v1/info per public… |
| `maxPages` | integer | Pages to fetch. Legacy default is 1 when maxItems is omitted. |
| `maxItems` | integer | Optional cap on total comments. Omit for no cap (legacy). |

## What you get

### Comment fields (every mode — 37+ per comment)

| Field | Description |
|---|---|
| `text` | Full comment text |
| `comment_like_count` / `like_count` | Likes on this specific comment |
| `child_comment_count` | Number of replies |
| `is_pinned` | Pinned by post creator |
| `is_ranked_comment` | Algorithm-boosted |
| `is_liked_by_media_owner` | Post creator liked this |
| `created_at_utc` | Timestamp |
| `hashtags` | Parsed hashtag array |
| `mentions` | Parsed @mentions array |
| `preview_child_comments` | Reply thread preview |

### Commenter fields (Enriched mode — 32 additional fields)

| Field | Description |
|---|---|
| `commenter_username` | Instagram handle |
| `commenter_public_email` | Business email |
| `commenter_contact_phone_number` | Phone number |
| `commenter_external_url` | Website |
| `commenter_bio_links` | All bio links |
| `commenter_biography` | Full bio |
| `commenter_category` | Business category |
| `commenter_is_business` | Business flag |
| `commenter_follower_count` | Their audience size |
| `commenter_enrichment_status` | success / skipped_private / not_requested (basic) |
| `email_found` | Best email found |
| `email_source` | Source of the email |
| `email_verified` | **basic:** null · **enriched:** `not_requested` · **verified:** valid / invalid / risky / unknown, or `email not present` |

## Use cases

**Purchase-intent lead capture.** People asking "Where can I buy?", "What's the price?", "Do you ship to...?" in comments are your hottest leads. Scrape comments from any product post in your niche → filter for questions → enrich commenters → get their verified emails. These people are actively shopping.

**Competitor audience capture.** Scrape comments from a competitor's best posts. Enrich the commenters. The people actively engaging with your competitor's content are your warmest prospects.

**Influencer vetting and bot detection.** Real engagement: high `child_comment_count` (replies), varied `comment_like_count`, `is_liked_by_media_owner: true`. Bot engagement: flat like counts, zero replies, no creator interaction. Use this data before signing an influencer deal.

**Brand monitoring and sentiment.** Scrape comments from your own posts or competitor posts. Filter by `is_ranked_comment: true` to focus on what Instagram considers most relevant. Filter by `is_liked_by_media_owner: true` to find creator-validated testimonials.

_(continued on the Apify listing)_

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-comments-scraper-no-login-required).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "postCode": "DVEGQskiMcy",
  "sortBy": "recent",
  "mode": "basic",
  "maxPages": 1,
  "maxItems": 5
}
```

## Get started

**[Run Instagram Post Comments Extractor · No Login on Apify →](https://apify.com/data-slayer/instagram-comments-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-comments-scraper-no-login-required)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/instagram-comments-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-comments-scraper-no-login-required) | 2,185 |
| [patient_discovery](https://apify.com/patient_discovery/instagram-comments-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-comments-scraper-no-login-required) | 336 |
| [iron-crawler](https://apify.com/iron-crawler/instagram-comments-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-comments-scraper-no-login-required) | 328 |
| [monumental_world](https://apify.com/monumental_world/instagram-comments-scraper-no-login-required?utm_source=github&utm_medium=content&utm_campaign=instagram-comments-scraper-no-login-required) | 307 |

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
