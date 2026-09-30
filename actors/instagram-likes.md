---
layout: actor
title: "Instagram Likes Scraper · No Cookies"
description: "Scrape Instagram post likers & enrich with emails, phones, websites, bios. Turn engagement into leads. No login. $2.50/1K basic · $12/1K enriched · $20/1K verified. JSON/CSV/Excel."
actor_slug: "instagram-likes"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-likes?utm_source=github&utm_medium=content&utm_campaign=instagram-likes"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-likes/
---

Scrape Instagram post likers with profile enrichment and verified email finding. Usernames, full names, verification status, plus optional emails, phones, websites, bios, categories, and follower counts. Basic $2.50/1K · Enriched $12/1K · Verified $20/1K. No login. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `postCode` | string | Instagram post shortcode or full post URL (legacy name postCode; postUrl also accepted via API). |
| `mode` | string | Pay-per-result tiers. Basic = thin liker rows. Enriched = /instagram/v1/info per public liker (no MillionVerifier). Verified = enriched + MillionVerifier SMTP verification. |
| `maxResults` | integer | Maximum likers to return. Omit to scrape all likers (legacy default). API alias: maxItems. |

## What you get

### Liker fields (every mode)

| Field | Description |
| ------------------ | ---------------------------------------------- |
| `username` | Instagram handle |
| `full_name` | Display name |
| `id` | Unique Instagram user ID |
| `is_verified` | Verification badge status (true/false) |
| `is_private` | Account privacy setting (true/false) |
| `profile_pic_url` | Direct URL to profile picture |
| `latest_reel_media` | Timestamp of most recent reel (activity signal) |

### Enriched profile fields (Enriched & Verified modes)

| Field | Description |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `liker_public_email` | Business email from Instagram profile |
| `liker_contact_phone_number` | Phone number (if public) |
| `liker_external_url` | Website link |
| `liker_bio_links` | All links in bio |
| `liker_biography` | Full bio text |
| `liker_category` | Business category (e.g., "Photographer", "Restaurant") |
| `liker_is_business` | Business account flag |
| `liker_follower_count` | Their audience size |
| `liker_following_count` | How many accounts they follow |
| `liker_media_count` | Total posts on their profile |
| `liker_enrichment_status` | success / skipped_private / not_requested (basic) |
| `email_found` | Best email found for this liker |
| `email_source` | Source of the email (public_email) |
| `email_verified` | **basic:** null · **enriched:** `not_requested` · **verified:** valid / invalid / risky / unknown, or `email not present` |

---

## Use cases

**Competitor audience capture.** Find a competitor's highest-performing post. Scrape who liked it. Enrich with emails and phone numbers. Reach out with a better offer — these people already showed interest in the category.

**Content-based prospecting.** Find viral posts in your niche (use our [Instagram Reels Search](https://apify.com/data-slayer/instagram-search-reels) to discover them). Scrape likers from each post. Enrich with business contact info.

**Influencer vetting and bot detection.** Before signing an influencer deal, scrape who actually likes their posts. Real engagement: likers with bios, websites, business accounts, and real follower counts.

**Product launch audience building.** Scrape likers from posts in your product category. Enrich all of them. Deduplicate. Sort by follower count or business category.

**Event and webinar promotion.** Find posts about industry events in your space. Scrape likers. Enrich them and invite them to your own event.

---

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-likes).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "postCode": "DVEGQskiMcy",
  "mode": "basic",
  "maxResults": 0
}
```

## Get started

**[Run Instagram Likes Scraper · No Cookies on Apify →](https://apify.com/data-slayer/instagram-likes?utm_source=github&utm_medium=content&utm_campaign=instagram-likes)**

Also available on:

| Apify account | Total runs |
|---|---|
| [data-slayer](https://apify.com/data-slayer/instagram-likes?utm_source=github&utm_medium=content&utm_campaign=instagram-likes) | 6,453 |
| [patient_discovery](https://apify.com/patient_discovery/instagram-likes?utm_source=github&utm_medium=content&utm_campaign=instagram-likes) | 3,064 |
| [iron-crawler](https://apify.com/iron-crawler/instagram-likes?utm_source=github&utm_medium=content&utm_campaign=instagram-likes) | 562 |

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
