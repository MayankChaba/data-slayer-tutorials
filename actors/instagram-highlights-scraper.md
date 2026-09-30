---
layout: actor
title: "Instagram Highlights Scraper · No Login"
description: "Scrape Instagram Highlights — titles, cover images, media counts, creation dates. 23 fields per highlight. No login, no cookies. From $1.50/1K. Competitive intel. JSON/CSV/Excel export."
actor_slug: "instagram-highlights-scraper"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-highlights-scraper?utm_source=github&utm_medium=content&utm_campaign=instagram-highlights-scraper"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-highlights-scraper/
---

Extract saved Instagram Highlights from any public profile — no login. Get highlight titles, cover images, media counts, creation dates, and profile data. 23 fields per highlight. Unlike Stories (24hr), Highlights persist forever. Competitive intel and content archiving. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `username` | string | Instagram username, user ID, or profile URL |
| `maxResults` | integer | Maximum number of highlights to return |

## What you get

23 fields per highlight, organized in two groups:

**Highlight Data:** highlight ID, title, cover image URL (full resolution), media count (number of stories saved inside), creation timestamp, highlight URL

**Profile Data:** username, full name, user ID, biography, follower count, following count, post count, profile picture URL, verification status, privacy status, business category, external URL

## Use cases

**Competitor Content Audit** — Map a competitor's Highlight categories to understand their content pillars. See which topics they're investing in (product features, testimonials, behind-the-scenes, FAQs) and identify gaps in your own strategy.

**Influencer Vetting** — Before signing a brand deal, check an influencer's Highlights to verify they've promoted similar products, maintained consistent branding, and curated content that aligns with your brand values.

**Brand Monitoring** — Track how your brand or product appears in other accounts' Highlights over time. Archive highlight titles and cover images for compliance or reporting.

**Content Research at Scale** — Analyze hundreds of profiles in a single run to discover trending highlight categories, naming patterns, and cover image styles across your industry.

**Archiving & Backup** — Preserve your own Highlights metadata before making changes. Useful for agencies managing multiple client accounts.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-highlights-scraper).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "username": "nike",
  "maxResults": 5
}
```

## Get started

**[Run Instagram Highlights Scraper · No Login on Apify →](https://apify.com/data-slayer/instagram-highlights-scraper?utm_source=github&utm_medium=content&utm_campaign=instagram-highlights-scraper)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
