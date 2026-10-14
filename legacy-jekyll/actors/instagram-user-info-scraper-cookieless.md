---
layout: actor
title: "Instagram Profile Scraper · Verified Emails & Contact Data · No Login"
description: "Extract Instagram business emails, phones, websites, 200+ fields — no login. NEW: SMTP-verified email tier filters bad addresses before you send. $2.50/1K Basic · $12/1K Verified. JSON/CSV/Excel."
actor_slug: "instagram-user-info-scraper-cookieless"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-user-info-scraper-cookieless?utm_source=github&utm_medium=content&utm_campaign=instagram-user-info-scraper-cookieless"
actor_pricing: "$2.50 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-user-info-scraper-cookieless/
---

Scrape any public Instagram profile and get 200+ fields — business email, phone, website, bio links, location, follower counts, category, and more. NEW: Verified tier runs extracted emails through SMTP verification before you send. No subscriptions. $2.50/1K Basic · $12/1K Verified.

## Inputs

| Field | Type | Description |
|---|---|---|
| `usernames` | array | List of Instagram usernames, user IDs, or profile URLs to scrape |
| `mode` | string | Pay-per-result tiers. Basic = full profile (email, phone, website, bio, counts). Verified = same profile + MillionVerifier SMTP email verification. |
| `max_concurrency` | integer | Maximum number of profiles to scrape concurrently. Default is tuned to avoid upstream rate limits; increase carefully. |

## What you get

### Contact & Outreach Fields

| Field | Description |
|---|---|
| `public_email` | Business email explicitly set in Instagram's contact settings |
| `biography_email` | Email Instagram detected in the bio text |
| `email_status` | MillionVerifier result: valid / risky / invalid / unknown *(Verified tier only)* |
| `contact_phone_number` | Business contact phone number |
| `public_phone_number` | Public-facing phone |
| `external_url` | Primary website link |
| `bio_links[]` | All bio links with titles and URLs — captures Linktree, Stan.store, Beacons, and multi-link pages |
| `business_contact_method` | How the account prefers to be contacted (CALL, EMAIL, TEXT, etc.) |

### Profile & Identity Fields

| Field | Description |
|---|---|
| `username` | Instagram handle |
| `full_name` | Display name |
| `biography` | Full bio text |
| `is_verified` | Blue checkmark status |
| `is_business` | Business account flag |
| `is_private` | Private account flag |
| `account_type` | 1 = personal, 2 = business, 3 = creator |
| `category` | Business category (e.g., "Fitness Coach", "Restaurant", "Marketing Agency") |
| `profile_pic_url_hd` | Full-resolution profile photo |

### Audience & Engagement Signals

| Field | Description |
|---|---|
| `follower_count` | Total followers |
| `following_count` | Total following |
| `media_count` | Total posts |
| `about.date_joined` | When the account was created |
| `about.country` | Account's country of origin |
| `about.former_usernames` | Number of username changes — useful for spotting account flips |

_(continued on the Apify listing)_

## Use cases

**Influencer and creator outreach**
Pull full profiles for a list of creators — follower counts, categories, verification status, email addresses. Run the Verified tier on any shortlist before your outreach campaign goes out. Know which creators have valid emails before you write a single pitch.

**Local business prospecting**
Combine with the [Instagram Location Posts](https://apify.com/data-slayer/instagram-location-posts) actor: find businesses posting from a target city, extract their profiles, and get business emails, phone numbers, and street addresses in one pass. No manual profile-by-profile clicking.

**Influencer vetting for brand deals**
Check account age (`about.date_joined`) and former usernames to spot flipped accounts. Check follower-to-following ratios to detect artificial inflation. Get category classification to confirm the account is genuinely in your niche — all before you engage.

**CRM and agency enrichment**
Have a list of Instagram handles from existing clients or prospects? Run them through this actor to add email, phone, website, location, and business category to each record. Export as CSV and import directly into HubSpot, Salesforce, or any CRM.

_(continued on the Apify listing)_

## Pricing

**$2.50 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-user-info-scraper-cookieless).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "usernames": [
    "cristiano"
  ],
  "mode": "basic",
  "max_concurrency": 5
}
```

## Get started

**[Run Instagram Profile Scraper · Verified Emails & Contact Data · No Login on Apify →](https://apify.com/data-slayer/instagram-user-info-scraper-cookieless?utm_source=github&utm_medium=content&utm_campaign=instagram-user-info-scraper-cookieless)**

## Categories

Social Media, Lead Generation
