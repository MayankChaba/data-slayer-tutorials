---
layout: actor
title: "Instagram Following Scraper & Enricher · No Login"
description: "Scrape Instagram following list & enrich with emails, phones, websites, bios. Map partnerships & competitor networks. No login. 31 fields. $2.50/1K basic · $12/1K enriched. JSON/CSV/Excel."
actor_slug: "instagram-following"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-following?utm_source=github&utm_medium=content&utm_campaign=instagram-following"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-following/
---

See who any Instagram account follows and optionally enrich each with emails, phones, websites, and bios. Map partnership networks, competitor connections, and supplier relationships. 31 fields per result. Optional email verification. No login, no cookies. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `username` | string | Instagram username, user ID, or profile URL whose following list you want |
| `mode` | string | Pay-per-result tiers. Basic = thin following rows. Enriched = /instagram/v1/info per public account in the list (no MillionVerifier). Verified = enriched + MillionVerifier SMTP… |
| `maxPages` | integer | Pages to fetch (~50 accounts per page). Legacy default is 1 when omitted. API-only alias still accepted. |
| `maxItems` | integer | Optional cap on total following rows. Omit for no cap (legacy). API alias maxPages controls pages when maxItems is omitted. |

## What you get

Same field set as the Followers Scraper — see that actor's field table. Key enrichment fields: `public_email`, `contact_phone_number`, `external_url`, `bio_links`, `biography`, `category`, `is_business`, `follower_count`, `date_joined`, `country`, `enrichment_status`.

## Use cases

**Partnership intelligence.** See who a brand follows to discover their actual agency, PR firm, content creators, and business partners. These are confirmed business relationships — far more reliable than guessing.

**Competitive supply chain research.** See who your competitor follows — their tool providers, platforms, and service partners. Identify which vendors they trust and approach the same suppliers (or offer alternatives).

**Influencer pre-vetting.** Before signing an influencer partnership, see who they follow. If they follow 500 brands, they're heavily monetized — your deal will be lost in the noise. If they follow thoughtfully curated accounts, their audience is more engaged.

**Industry mapping.** A thought leader's following list is a manually curated directory of valuable people in their space. Extract it, enrich it, and you have a qualified prospect list for your niche.

---

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-following).

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

**[Run Instagram Following Scraper & Enricher · No Login on Apify →](https://apify.com/data-slayer/instagram-following?utm_source=github&utm_medium=content&utm_campaign=instagram-following)**

## Categories

Social Media, Lead Generation
