---
layout: actor
title: "Facebook Search Events"
description: "Search Facebook events."
actor_slug: "facebook-search-events"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-search-events?utm_source=github&utm_medium=content&utm_campaign=facebook-search-events"
actor_pricing: "$2.5 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-search-events/
---

Search Facebook events.

## Inputs

| Field | Type | Description |
|---|---|---|
| `query` | string | Search term or keyword |
| `maxPages` | integer | Maximum number of pages to fetch (pagination handled automatically) |

## What you get

```json
[
  {
    "type": "search_event",
    "event_id": "9876543210123456",
    "title": "Digital Marketing Summit 2026",
    "url": "https://www.facebook.com/events/9876543210123456/"
  },
  {
    "type": "search_event",
    "event_id": "5432109876543210",
    "title": "Global Tech Innovation Conference",
    "url": "https://www.facebook.com/events/5432109876543210/"
  },
  {
    "type": "search_event",
    "event_id": "1357924680135792",
    "title": "B2B Networking & Growth Forum",
    "url": "https://www.facebook.com/events/1357924680135792/"
  }
]
```

---

Transform your event marketing strategy with this powerful event data scraper and event listings extractor. Whether you need to scrape event data for lead generation from events, export event listings for analysis, or access a search events API alternative, this conference listings scraper delivers the web scraping tool capabilities your business needs to stay ahead of industry trends and networking opportunities.

## Use cases

**Event Marketers**: Build a comprehensive database of industry conferences, trade shows, and networking events to identify sponsorship opportunities, track competitor activities, and discover speaking engagement possibilities.

**Business Analysts**: Monitor event trends across sectors, analyze event frequency patterns, and generate market intelligence reports to inform strategic planning and competitive positioning.

**Sales Teams**: Identify high-value networking opportunities and conferences where target prospects gather, enabling proactive outreach and relationship building before, during, and after events.

## Pricing

**$2.5 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/patient_discovery/facebook-search-events).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "query": "new york",
  "maxPages": 1
}
```

## Get started

**[Run Facebook Search Events on Apify →](https://apify.com/data-slayer/facebook-search-events?utm_source=github&utm_medium=content&utm_campaign=facebook-search-events)**

Also available on:

| Apify account | Total runs |
|---|---|
| [patient_discovery](https://apify.com/patient_discovery/facebook-search-events?utm_source=github&utm_medium=content&utm_campaign=facebook-search-events) | 2,474 |
| [data-slayer](https://apify.com/data-slayer/facebook-search-events?utm_source=github&utm_medium=content&utm_campaign=facebook-search-events) | 1,167 |
| [iron-crawler](https://apify.com/iron-crawler/facebook-search-events?utm_source=github&utm_medium=content&utm_campaign=facebook-search-events) | 843 |
| [monumental_world](https://apify.com/monumental_world/facebook-search-events?utm_source=github&utm_medium=content&utm_campaign=facebook-search-events) | 140 |

## Categories

`SOCIAL_MEDIA`
