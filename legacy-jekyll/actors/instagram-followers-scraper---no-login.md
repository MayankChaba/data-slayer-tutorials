---
layout: actor
title: "Instagram Followers Scraper & Enricher · No Login"
description: "Scrape Instagram followers & enrich with emails, phones, websites, bios. 31 fields. SocialScraper alternative — pay per result. No login. $2.50/1K basic · $12/1K enriched. JSON/CSV/Excel."
actor_slug: "instagram-followers-scraper---no-login"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-followers-scraper---no-login?utm_source=github&utm_medium=content&utm_campaign=instagram-followers-scraper---no-login"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-followers-scraper---no-login/
---

Extract followers from any Instagram profile and optionally enrich with emails, phone numbers, websites, bios, follower counts, and categories. 31 fields per result. SocialScraper alternative — pay per result. Optional MillionVerifier email verification. No login. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `username` | string | Instagram username, user ID, or profile URL whose followers you want |
| `mode` | string | Pay-per-result tiers. Basic = thin follower rows. Enriched = /instagram/v1/info per public follower (no MillionVerifier). Verified = enriched + MillionVerifier SMTP verification. |
| `maxPages` | integer | Pages to fetch (~50 accounts per page). Legacy default is 1 when omitted. |
| `maxItems` | integer | Optional cap on total follower rows. Omit for no cap (legacy). |

## What you get

### Contact fields
| Field | Description |
|---|---|
| `public_email` | Business email from profile settings |
| `biography_email` | Email detected in bio text |
| `contact_phone_number` | Business phone number |
| `external_url` | Website URL |
| `bio_links` | All bio links with titles (Linktree, etc.) |
| `email_found` | Best email from all sources |
| `email_source` | Where the email came from |
| `email_verified` | **Basic:** null · **Enriched:** `not_requested` · **Verified:** valid / invalid / risky / unknown, or `email not present` |

### Profile fields
| Field | Description |
|---|---|
| `biography` | Full bio text |
| `category` | Business category (e.g., "Marketing Agency") |
| `is_business` | Business account flag |
| `account_type` | Personal (1) / Business (2) / Creator (3) |
| `follower_count` | Their follower count |
| `following_count` | Their following count |
| `media_count` | Total posts |
| `date_joined` | Account creation date |
| `country` | Country |

### Tracking
| Field | Description |
|---|---|
| `enrichment_status` | success / skipped_private / failed / not_requested (basic) |

## Use cases

**Competitor audience extraction.** Enter a competitor's username → get their followers enriched with emails and phone numbers → outreach with a better offer. These people already care about what your competitor does.

**Niche audience building.** Find an Instagram account that serves your exact target market → extract followers with contact info → build a prospect list without the guesswork.

**Influencer audience verification.** Before paying for a sponsorship, check the follower list. Are they real accounts with bios, websites, and business profiles? Or bots with no posts?

**CRM enrichment.** Have a list of Instagram handles? Enrich them all in one run and import directly into HubSpot, Salesforce, or any CRM.

---

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-followers-scraper---no-login).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "username": "natgeo",
  "mode": "basic",
  "maxPages": 1,
  "maxItems": 0
}
```

## Get started

**[Run Instagram Followers Scraper & Enricher · No Login on Apify →](https://apify.com/data-slayer/instagram-followers-scraper---no-login?utm_source=github&utm_medium=content&utm_campaign=instagram-followers-scraper---no-login)**

## Categories

Social Media, Lead Generation
