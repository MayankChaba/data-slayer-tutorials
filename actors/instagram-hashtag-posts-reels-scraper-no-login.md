---
layout: actor
title: "Instagram Hashtag Posts & Reels Scraper · No Login"
description: "Scrape Instagram posts and Reels by hashtag — no login. Get captions, likes, comments, shares, views, video URLs, audio metadata, and creator profiles. Optionally enrich creators with emails and phones. 145+ fields per post. Pay per result: $2.50/1K basic, $12/1K enriched, $20/1K verified. SocialScr"
actor_slug: "instagram-hashtag-posts-reels-scraper-no-login"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-hashtag-posts-reels-scraper-no-login?utm_source=github&utm_medium=content&utm_campaign=instagram-hashtag-posts-reels-scraper-no-login"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/instagram-hashtag-posts-reels-scraper-no-login/
---

Scrape Instagram posts and Reels by hashtag — no login. Get captions, likes, comments, shares, views, video URLs, audio metadata, and creator profiles. Optionally enrich creators with emails and phones. 145+ fields per post. Pay per result: $2.50/1K basic, $12/1K enriched, $20/1K verified. SocialScraper PRO alternative. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `hashtag` | string | Hashtag to search for (with or without # symbol) |
| `maxResults` | integer | Maximum number of posts/reels to return |
| `mode` | string | Basic = posts/Reels with engagement and creator stubs. Enriched = adds creator email, phone, website, bio, and counts. Verified = enriched plus MillionVerifier SMTP email verifi… |

## What you get

145 fields per post/Reel. Key ones:

### Engagement metrics
| Field | Description |
|---|---|
| `like_count` | Total likes |
| `comment_count` | Total comments |
| `share_count` | Total shares / sends |
| `play_count` | Video/Reel views |
| `ig_play_count` | Instagram-native view count |

### Content data
| Field | Description |
|---|---|
| `caption.text` | Full caption |
| `caption.hashtags` | Pre-parsed hashtag array |
| `caption.mentions` | Pre-parsed @mentions array |
| `video_url` | Direct video URL |
| `thumbnail_url` | Thumbnail image |
| `taken_at_date` | Post date |
| `media_type` | Image / Video / Carousel |
| `is_paid_partnership` | Sponsored content flag |

### Audio (for Reels)
| Field | Description |
|---|---|
| `clips_metadata.audio_type` | Original vs. licensed |
| `clips_metadata.original_sound_info` | Track name and audio ID |
| `music_metadata` | Full music metadata |

### Creator enrichment (Enriched mode)
| Field | Description |
|---|---|
| `public_email` | Business email |
| `contact_phone_number` | Phone number |
| `external_url` | Website URL |
| `bio_links` | All bio links with titles |
| `biography` | Full bio text |
| `category` | Business category |
| `is_business` | Business account flag |
| `follower_count` | Total followers |
| `email_found` | Best email (from all sources) |
| `email_source` | Source: public_email / bio_parse / biography_email |
| `email_verified` | valid / invalid / risky / unknown |

## Use cases

**Hashtag-based lead generation.** Enter `#marketingagency` → get all posts → enrich creators with verified emails → outreach to active marketers posting in that community. This is what SocialScraper charges $249/month for as a PRO feature. You pay per result, no subscription.

**Content research by niche.** Analyze which content formats, caption styles, and posting patterns dominate any hashtag. Sort by `like_count` and `share_count` to identify what actually works.

**Creator discovery for partnerships.** Find active creators in a hashtag niche. Use Enriched mode to get their contact details. Reach out with their email for partnership proposals.

**Campaign tracking.** Monitor your branded hashtag — see every post, engagement metrics, and who's creating content about your brand. Schedule weekly runs to track growth over time.

**Competitor hashtag intel.** Track your competitor's branded hashtags. See who engages, what content performs, and identify their organic advocates.

---

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.0005 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-hashtag-posts-reels-scraper-no-login).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "hashtag": "marketing",
  "maxResults": 10,
  "mode": "basic"
}
```

## Get started

**[Run Instagram Hashtag Posts & Reels Scraper · No Login on Apify →](https://apify.com/data-slayer/instagram-hashtag-posts-reels-scraper-no-login?utm_source=github&utm_medium=content&utm_campaign=instagram-hashtag-posts-reels-scraper-no-login)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
