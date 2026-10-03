---
layout: post
title: "How to scrape LinkedIn company posts without cookies or a login"
date: 2026-09-29 09:00:00 +0000
description: "Step-by-step: scrape any LinkedIn company page's posts — text, likes, comments, shares, dates — without LinkedIn cookies, a login, or proxies. Export to JSON, CSV, or Excel."
categories: linkedin
---

Scraping LinkedIn company posts is the fastest way to answer real competitive questions:
what is a competitor posting, how often, and what actually gets engagement?

The problem is that most approaches need a logged-in LinkedIn session — which means
cookies, session rotation, and account bans. This tutorial shows the cookieless way:
one company URL in, structured post data out.

**The tool:** [LinkedIn Company Posts Scraper](https://apify.com/data-slayer/linkedin-company-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-posts-scraper)
on the Apify Store. No LinkedIn login, no cookies, no proxy setup — the actor runs on
Apify's infrastructure and returns clean, structured data.

## What you get

Every run returns one row per company post (or repost) with the fields you actually need:

| Field | What it is |
|---|---|
| `text` | The full post text |
| `likes`, `comments`, `shares` | Engagement counts |
| `created_at` | When the post was published |
| `url` | Direct link to the post |
| `is_repost` | Whether the company reposted someone else's content |
| `author` | Who published it (company or employee) |
| `attachments` | Images, videos, documents, links |
| `mentions` | @-mentioned people and companies |

Export as JSON, CSV, or Excel — or pull the dataset through the Apify API.

## Step 1 — Get the company page URL

Open the company's LinkedIn page and copy the URL from the address bar:

```
https://www.linkedin.com/company/apify/
```

Any public company page works. You don't need to be logged in to LinkedIn, and the
company doesn't need to be in your network.

## Step 2 — Run the actor

Open
[LinkedIn Company Posts Scraper](https://apify.com/data-slayer/linkedin-company-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-posts-scraper)
and fill in the two input fields:

```json
{
  "linkedin_url": "https://www.linkedin.com/company/apify/",
  "maxPages": 5
}
```

- **`linkedin_url`** (required) — the company page URL from step 1.
- **`maxPages`** — how many pages of posts to fetch. Pagination is handled
  automatically; 5 pages is usually the last several months of posts for an
  active page.

Click **Run**. A run typically finishes in a couple of minutes.

## Step 3 — Export the results

When the run finishes, open the **Data** tab. You get one row per post:

```json
{
  "text": "We just released something new...",
  "likes": 342,
  "comments": 27,
  "shares": 12,
  "created_at": "2026-09-14T10:22:00.000Z",
  "url": "https://www.linkedin.com/posts/apify_something-new-activity-1234",
  "is_repost": false,
  "author": { "name": "Apify" },
  "attachments": [],
  "mentions": []
}
```

Export the whole dataset as **JSON**, **CSV**, or **Excel** from the dataset view,
or download it programmatically:

```bash
curl "https://api.apify.com/v2/datasets/<DATASET_ID>/items?format=json"
```

## What this is good for

- **Competitor content audits** — what topics a competitor posts, how often, and which posts over-perform.
- **Engagement benchmarking** — median likes/comments per post across 5–10 competitors.
- **Content calendar research** — see what a target audience responds to before you plan your own posts.
- **Sales triggers** — hiring posts, product launches, and event announcements from target accounts.

## Going further

- Track the *people* engaging with these posts — see the
  [LinkedIn profile scraper CRM-refresh tutorial](https://dataslayer.dev/tutorials/refresh-your-crm-with-fresh-linkedin-profile-data/).
- Want warm-intro paths into a target company? See
  [how to find warm paths into any LinkedIn account](https://dataslayer.dev/tutorials/find-warm-intro-paths-into-any-linkedin-account/).

## Pricing

The actor is pay-per-event — you pay for the posts actually scraped, not for
compute time. New Apify accounts include free platform credit, so your first
runs cost nothing out of pocket. See the
[actor page](https://apify.com/data-slayer/linkedin-company-posts-scraper?utm_source=github&utm_medium=content&utm_campaign=linkedin-company-posts-scraper)
for the current per-event price.

## FAQ

**Do I need a LinkedIn account?** No. The actor works without any LinkedIn login or cookies.

**Will my IP get flagged?** No — the scraping runs on Apify's infrastructure, not your machine.

**Can I scrape multiple companies?** Run the actor once per company, or use Apify's
API to chain runs. For a scheduled, multi-company monitor, wire it into n8n or Make
with our [automation templates](https://dataslayer.dev/).
