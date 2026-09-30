---
layout: actor
title: "Instagram Reels by Audio ID · Sound & Music Tracker · No Login"
description: "Get all Instagram Reels using a specific audio track — no login. Enter an audio ID, get every Reel that uses that sound with play counts, likes, comments, shares, creator profiles, and video URLs. Track how songs and sounds spread across Instagram. No cookies. JSON/CSV/Excel."
actor_slug: "instagram-reels-by-audio"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/instagram-reels-by-audio?utm_source=github&utm_medium=content&utm_campaign=instagram-reels-by-audio"
actor_pricing: "$2 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/instagram-reels-by-audio/
---

Get all Instagram Reels using a specific audio track — no login. Enter an audio ID, get every Reel that uses that sound with play counts, likes, comments, shares, creator profiles, and video URLs. Track how songs and sounds spread across Instagram. No cookies. JSON/CSV/Excel.

## Inputs

| Field | Type | Description |
|---|---|---|
| `audioId` | string | Instagram audio id for the sound (from reel/audio payloads as audio_id). Note: some APIs distinguish audio_id vs canonical id — this actor calls RapidAPI with audio_id first. |
| `usernameOrIdOrUrl` | string | Instagram username or profile URL. Required to fetch reel rows on instagram-social-api: GET /v1/reels needs a profile plus audio_id. Omit to fetch audio metadata only (run will… |
| `maxResults` | integer | Maximum number of Reels to return |

## What you get

Each Reel in the output includes 125+ fields — the same rich data as our Reels Search actor:

### Engagement metrics
| Field | Description |
|---|---|
| `play_count` | Total video views |
| `like_count` | Total likes |
| `comment_count` | Total comments |
| `share_count` | Total shares |
| `save_count` | Times saved |

### Content data
| Field | Description |
|---|---|
| `caption.text` | Full caption |
| `caption.hashtags` | Pre-parsed hashtag array |
| `caption.mentions` | Pre-parsed @mentions array |
| `video_url` | Direct video file URL |
| `video_duration` | Length in seconds |
| `thumbnail_url` | Thumbnail image |
| `taken_at_date` | Post date |

### Creator profile
| Field | Description |
|---|---|
| `user.username` | Creator handle |
| `user.full_name` | Display name |
| `user.is_verified` | Blue check |

---

## Use cases

**Music marketing on a known profile.** Pair **`audioId`** with that creator's **`usernameOrIdOrUrl`** → list their Reels using that sound with engagement metrics.

**Sound usage on a competitor account.** Extract audio id from a viral Reel → run this actor with **that profile** plus the audio id → compare performance of their clips using the sound.

**Scoped trend checks.** Use Profile Reels or Search actors to discover handles, then call this actor **per profile** you care about with the same **`audioId`** (there is no single-call global feed on this API).

**Creator outreach.** Collect usernames from search/profile actors, then batch runs with **`usernameOrIdOrUrl`** + **`audioId`** to verify usage before outreach.

**Content research on specific channels.** Study how one or more accounts use the same audio across posts.

---

## Pricing

**$2 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/instagram-reels-by-audio).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "audioId": "640306081946955",
  "usernameOrIdOrUrl": "",
  "maxResults": 50
}
```

## Get started

**[Run Instagram Reels by Audio ID · Sound & Music Tracker · No Login on Apify →](https://apify.com/data-slayer/instagram-reels-by-audio?utm_source=github&utm_medium=content&utm_campaign=instagram-reels-by-audio)**

## Categories

`SOCIAL_MEDIA`
