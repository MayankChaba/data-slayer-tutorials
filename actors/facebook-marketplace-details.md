---
layout: actor
title: "Facebook Listing Details"
description: "Get Facebook marketplace listing details."
actor_slug: "facebook-marketplace-details"
actor_account: "data-slayer"
actor_url: "https://apify.com/data-slayer/facebook-marketplace-details?utm_source=github&utm_medium=content&utm_campaign=facebook-marketplace-details"
actor_pricing: "$7.00 per 1,000 results (Free tier)"
categories: ["SOCIAL_MEDIA"]
permalink: /actors/facebook-marketplace-details/
---

Get Facebook marketplace listing details.

## Inputs

| Field | Type | Description |
|---|---|---|
| `listingId` | string | Listing ID of the Facebook marketplace item to fetch details for. |

## What you get

```json
{
  "id": "1547618196594748",
  "marketplace_listing_title": "2013 MINI Cooper",
  "custom_title": "2013 MINI cooper",
  "formatted_price": {
    "text": "AU$11,990"
  },
  "listing_price": {
    "amount": "11990.00",
    "currency": "AUD"
  },
  "condition": "USED",
  "redacted_description": {
    "text": "2013 R56 JCW, 192,000km on the clock, timing chain done 15000km ago..."
  },
  "location_text": {
    "text": "Clyde, VIC"
  },
  "location": {
    "latitude": -38.125305175781,
    "longitude": 145.36560058594,
    "reverse_geocode_detailed": {
      "country_alpha_two": "AU",
      "postal_code_trimmed": "3978"
    }
  },
  "creation_time": 1759872299,
  "is_live": true,
  "is_sold": false,
  "is_pending": true,
  "delivery_types": ["IN_PERSON"],
  "messaging_enabled": true,
  "vehicle_make_display_name": "MINI",
  "vehicle_model_display_name": "Cooper",
  "vehicle_odometer_data": {
    "unit": "KILOMETERS",
    "value": 192000
  },
  "vehicle_transmission_type": "AUTOMATIC",
  "vehicle_fuel_type": "PETROL",
  "vehicle_exterior_color": "black",
  "vehicle_seller_type": "PRIVATE_SELLER",
  "share_uri": "https://www.facebook.com/marketplace/item/1547618196594748/"
}
```

---

_(continued on the Apify listing)_

## Use cases

**Dropshippers & Resellers**: Identify underpriced inventory opportunities in local markets by extracting listing prices, conditions, and seller locations. Build a database of potential products to source, compare pricing across regions, and discover trending items with minimal upfront investment.

**Market Research Analysts**: Track pricing trends, inventory availability, and product conditions across Facebook Marketplace categories. Analyze vehicle specifications, seller types, and geographic distribution to understand market dynamics and competitive positioning.

**Lead Generation Specialists**: Extract seller contact opportunities and messaging availability from active listings. Build targeted outreach lists based on product categories, locations, and listing characteristics to connect buyers with sellers or offer value-added services.

## Pricing

**$7.00 per 1,000 results** (Free tier)  
Actor start: $0.002 per GB

The actor is billed **pay-per-result** on Apify — you only pay for rows returned.
See the live pricing on the [Apify listing](https://apify.com/data-slayer/facebook-marketplace-details).

## Runnable example

Paste this into the actor's input (JSON) on Apify and press **Start**:

```json
{
  "listingId": "1547618196594748"
}
```

## Get started

**[Run Facebook Listing Details on Apify →](https://apify.com/data-slayer/facebook-marketplace-details?utm_source=github&utm_medium=content&utm_campaign=facebook-marketplace-details)**

## Categories

Social Media
