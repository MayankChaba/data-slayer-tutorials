---
layout: actor
title: "LinkedIn Profile Reactions"
description: "Extract all reactions across any LinkedIn profile's posts with reactor names and public profile data. Scraping with no cookies, no login required."
actor_slug: "linkedin-profile-reactions"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/linkedin-profile-reactions?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-reactions"
actor_pricing: "$2 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA", "LEAD_GENERATION"]
permalink: /actors/linkedin-profile-reactions/
---

Extract posts reacted to by public LinkedIn profiles, including action labels, post text, authors, timestamps, engagement counts, reaction breakdowns, attachments, and shared-post context. Batch up to 1,000 profiles and export JSON, CSV, or Excel—no LinkedIn cookies or login required.

## Inputs

| Field | Type | Description |
|---|---|---|
| `profile_urls` | array | Required. Add 1–1,000 public LinkedIn profile URLs in linkedin.com/in/… format. Regional LinkedIn hosts are accepted. Tracking parameters, fragments, and trailing slashes are re… |
| `max_reactions_per_profile` | integer | Maximum number of unique reaction records to save for each profile. Enter 0 to fetch all available reactions, with a 100-page safety cap per profile. |
| `posted_within` | string | Only save reactions to posts published within this time window. Choose Any time to keep all available reactions. |

## What you get

Each dataset item represents one unique reacted-to post for one input profile. Records keep normalized input-profile order and then source page/item order. The Actor does not re-sort records by time.

The default **Profile reactions** view exposes the full record. The compact **Profile activity** view keeps the reacting profile, action, post, author, and engagement context most useful for spreadsheet and CRM exports.

### Output fields

| Field | Type | Meaning |
|---|---|---|
| `reaction_id` | String | Deterministic SHA-256 identity for the reacting profile and reacted-to post. |
| `reacting_profile_url` | URL | Canonical input profile URL. |
| `reacting_profile_identifier` | String | Public identifier from the `/in/...` path. |
| `reacting_profile_name` | String or null | Display name parsed from a recognized public action label. |
| `reaction_action` | String or null | Public label such as `Satya Nadella likes this`. |
| `reaction_target` | String or null | Content type receiving the reaction, such as `Post`. |
| `post_id` | String or null | Precision-safe numeric post ID. |
| `post_urn` | String or null | Supplied or unambiguously derived post URN. |
| `post_url` | URL or null | Canonical reacted-to post URL without tracking parameters. |
| `post_text` | String or null | Reacted-to post text. |
| `post_created_at` | Date-time or null | Reacted-to post publication time in UTC. This is not a reaction timestamp. |
| `post_created_at_timestamp` | Integer or null | Unix milliseconds for `post_created_at`. |

_(continued on the Apify listing)_

## Pricing

**$2 per 1,000 results** (Free tier)

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/linkedin-profile-reactions).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "profile_urls": [
    "https://www.linkedin.com/in/satyanadella"
  ],
  "max_reactions_per_profile": 100,
  "posted_within": "any"
}
```

## Get started

**[Run LinkedIn Profile Reactions on Apify →](https://apify.com/data-slayer/linkedin-profile-reactions?utm_source=github&utm_medium=content&utm_campaign=linkedin-profile-reactions)**

## Categories

`SOCIAL_MEDIA`, `LEAD_GENERATION`
