---
layout: use-case
title: "How to get Instagram likes data"
description: "Scrape Instagram post likers with profile enrichment and verified email finding. Usernames, full names, verification status, plus optional emails, phones…"
slug: "how-to-get-instagram-likes-data"
canonical_url: "https://dataslayer.dev/use-cases/how-to-get-instagram-likes-data/"
date: "2026-11-01"
tags: ["instagram", "how-to", "social media manager"]
target_keyword: "how to get instagram likes data"
actor_username: "data-slayer"
actor_slug: "instagram-likes"
actor_url: "https://apify.com/data-slayer/instagram-likes"
persona: "social media manager"
content_type: "how-to"
neuronwriter_brief_id: "4c8e9736f9020a41"
neuronwriter_score: 91
status: "draft"
cover: "/assets/covers/how-to-get-instagram-likes-data.jpg"
---
# How to get Instagram likes data

Pulling Instagram likes data by hand does not scale. You either copy-paste it one item at a time, or you fight the API — rate limits, auth, and pagination — and still end up with half the fields missing. For a social media manager, the data only matters if it is complete, fresh, and in a sheet you can act on. That is the gap Instagram Likes Scraper · No Cookies closes.

> **Instagram Likes Scraper · No Cookies** runs **480 times a month** on Apify.

## What you get

- verified email finding. Usernames
- full names
- verification status
- plus optional emails

Instead of building a scraper, you point **Instagram Likes Scraper · No Cookies** ([`data-slayer/instagram-likes`](https://apify.com/data-slayer/instagram-likes)) at your input and run it. It handles the requests, retries, and parsing, and returns one clean row per item in the format you already use.

## How it works — step by step

**1. Open the actor**
Go to [`data-slayer/instagram-likes`](https://apify.com/data-slayer/instagram-likes?utm_source=github&utm_medium=use-case&utm_campaign=how-to-get-instagram-likes-data) and click **Try for free**.

**2. Paste your input**
```json
{
  "postCode": "DVEGQskiMcy"
}
```

**3. Run it**
Click **Start**. A typical run finishes in under a minute and returns one row per item.

**4. Get your data**
Download as **JSON, CSV, or Excel**, or push straight to Google Sheets / Airtable via the built-in integrations.

### What the output looks like

| Field | Example | Use it for |
|---|---|---|
| `url` | `https://…/item/ABC123` | link back to the source |
| `caption` | `"…"` | content analysis |
| `engagement` | `…` | filter / sort / export |
| `collectedAt` | `2026-09-30T12:00:00Z` | time-series / scheduling |

## Why scraping Instagram likes without getting blocked is hard in 2026

Instagram is one of the most aggressively defended sites on the web, and 2026 is the hardest
year yet to pull Instagram data at scale. If you have tried to **scrape Instagram** yourself, you have
probably already hit one of these walls:

- **Anti-bot detection.** Instagram fingerprints the TLS handshake, the HTTP headers, and the
  request timing of every client. A plain `requests` call is flagged before it ever reaches
  a public profile, and you **get blocked** with a login wall or an empty response.
- **Rate limits.** The public endpoints throttle by IP and by session. Hit the rate limit
  and the API returns errors for minutes; ignore it and the account or IP is temporarily
  banned.
- **Login walls and cookies.** Many surfaces (stories, some reels, follower lists) are only
  served to a logged-in session, so a naive scraper needs a real login, a cookie jar, and a
  way to refresh it — which is exactly what gets accounts disabled.
- **Pagination and shifting JSON.** Instagram changes its private JSON shape without notice, so a
  scraper you wrote last quarter silently returns half the fields today.

That is the difference between a script that works once on your laptop and a **Instagram scraper**
that runs every day without maintenance. For a likes job you do not want to babysit
proxies, cookies, and retries — you want the rows.

## Three ways to get Instagram data — and which one to use

There are three honest ways to get Instagram likes data in 2026. Each has a real cost.

![Several platform nodes connected to one hub](/assets/art/multi-platform.jpg)

<!-- art-auto -->
























































































| Approach | How it works | The catch |
|---|---|---|
| **Build your own scraper** | Write a Python scraper with `requests`, rotate residential proxies, manage a login session, parse the private JSON | Weeks of work, constant breakage, and you own the block/ban risk. Fine for a one-off, painful at scale. |
| **Official Instagram API** | Use the platform's own API | Heavily restricted, requires app review, returns a fraction of the public fields, and is not built for bulk extraction. |
| **A ready-made scraping API / actor** | Point a maintained actor at your input and download clean rows | You pay per result, but you skip the proxy, login, and parsing work entirely. |

For most likes work the third option wins on total cost. A **scraping API** gives you the
same **public Instagram data** a hand-built Python scraper would, without the account-handling
system around it. **Apify** hosts these actors and exposes them through a **web scraping
API**, so you can run one by hand, on a schedule, or from code with the **Apify API**.

## How to scrape Instagram likes without getting blocked

If you do build your own **Instagram scraper**, these are the controls that actually keep it
alive. Every one of them is already handled for you inside a maintained actor.

1. **Use residential proxies.** Datacenter IP ranges are blocked on sight. Rotate
   **residential proxies** per request so no single IP crosses the rate limit.
2. **Respect the rate limit.** Throttle to a concurrency the target tolerates, and back off
   exponentially when you see a 429. A conservative rate limit beats a fast ban.
3. **Send real headers and a warm session.** Match a browser's headers, keep a cookie jar,
   and reuse a session instead of opening a cold connection every call.
4. **Retry with jitter.** Transient failures are normal; retry with exponential backoff and
   random jitter, and treat an empty body as a failure, not a result.
5. **Page carefully.** Follow cursors to the end, dedupe by id, and stop cleanly when the
   feed ends — do not hammer the same page.
6. **Cache what you already have.** Re-fetch only new items. Most "blocks" are self-inflicted
   by re-scraping the same public profile hundreds of times.

Do all six and you can **scrape Instagram without getting blocked** for a while. Do none of them
and you will **get blocked** on day one. That maintenance burden is the real reason teams
move to a hosted **Instagram scraper** instead of owning the plumbing.

## What you can do with Instagram likes data

Once the rows land in a sheet, the data does the work. Four patterns we see most:

![An API request flowing into an endpoint and returning records](/assets/art/api-request.jpg)

<!-- art-auto -->
























































































- **Competitor benchmarking.** Track the engagement metrics of a competitor's public posts
  over time and see what format wins in your niche.
- **Creator and lead discovery.** Pull the public profiles behind a hashtag or keyword and
  build a shortlist of creators to work with.
- **Content research.** Export the top posts for a topic, cluster their captions and
  hashtags, and use the winners as a brief for your own content.
- **Reporting and monitoring.** Schedule the actor daily, push to Google Sheets, and let a
  dashboard refresh itself instead of paying an analyst to copy-paste numbers.

All of it runs on **public data** — no login, no personal data, and no private accounts.

## Is scraping Instagram likes legal?

Scraping **public Instagram data** is generally lawful in most jurisdictions, but the rules are
not uniform and they change. A few principles keep you on the right side of it:

- **Public data only.** If a field is visible to a logged-out visitor, it is fair game in
  most readings; private profiles, DMs, and anything behind a login are not.
- **Mind privacy law.** GDPR, CCPA, and similar regimes still govern how you *store and
  process* personal data even when you collected it lawfully. Do not build profiles of
  individuals from public data without a lawful basis.
- **Respect terms and robots.** Follow the platform's terms and its `robots.txt`, and never
  use scraped data to harass, spam, or re-identify people.
- **Keep it proportionate.** A steady, modest rate limit is both more ethical and more
  durable than a burst that degrades the service for everyone.

This article is not legal advice. When the use case is commercial and the data is personal,
get a lawyer's read before you scale.

## Best Instagram scraper: how to choose one in 2026

Search for the **best Instagram scraper** and you get a wall of tools. The **best Instagram scraper**
for your job comes down to four questions:

![Two options weighed side by side](/assets/art/comparison.jpg)

<!-- art-auto -->
























































































- **Does it run logged out?** If a tool needs your Instagram login, it is putting your account at
  risk. A good **Instagram scraper** reads public data without a session.
- **Does it handle the blocking for you?** Residential proxies, retries, and pacing should
  be the tool's problem, not yours.
- **Does it return the fields you need?** A tool that returns ten fields when you need
  fifty is a false economy.
- **Can you schedule it?** The value compounds when the data refreshes itself.

Across the **Instagram scrapers in 2026**, the ones that last are maintained, logged-out, and
API-first. That is the design of the actor on this page.

## What you can extract from Instagram URLs, posts, reels and hashtags

The unit of work is a **Instagram URL** or handle. From those you can **extract Instagram** data
across every public surface:

- **Posts and reels** — captions, media, view counts, and engagement metrics.
- **Comments** — the public comment thread, with authors and timestamps.
- **Hashtags** — the public posts behind a **hashtag**, for trend and creator research.
- **Profiles** — the **public profile** fields a logged-out visitor can see.

You hand the actor the **Instagram URLs** you care about and it returns one row per item. Because
it is a single **Instagram scraper API**, the same call works for posts, reels, comments, and
hashtags — you do not stitch together four tools.

## Instagram scraping API vs Bright Data vs a custom build

If you have looked at **Bright Data** or another **scraping API**, the trade-off is the
same everywhere: a **web scraping API** sells you the unblocking layer, and you still own
the parsing. A hosted **Instagram scraper API** goes one step further — it returns the parsed
likes rows, not just the HTML.

| | Custom Python build | Bright Data / raw proxy | Hosted actor |
|---|---|---|---|
| Unblocking | you build it | included | included |
| Parsing to fields | you build it | you build it | included |
| Maintenance | ongoing | low | vendor |
| Time to first row | days | hours | minutes |

**Social media scraping** is a maintenance problem, not a one-off script. The cheapest
line item is almost never the one that costs you a week of engineering every quarter.

## Instagram likes terms, explained

A quick reference for the terms this guide uses:

- **instagram profile** — the public profile or page you point the actor at. A run returns instagram profile for every row.
- **like count** — part of the Instagram likes data you get back. A run returns like count for every row.

Readers also search for instagram reels, instagram posts, instagram comments, get likes, follower count, use instagram, scrape data, data scraping, instagram's, instagram website, web scraper, privacy policy, number of likes, likes and comments, access instagram, post url, public instagram profiles, data collection, data extraction, graph api, instagram apis, data scraper, profile url, scrape public instagram, publicly available data, comments section, instagram business or creator, comment count, number of comments, gather data, scrape instagram comments, publicly available, automate data, official api, scraper tool, post or reel, digital marketing, node.js, using the api, available instagram, view post, api endpoints, user id, via api, instantly scrape, image url, number of followers, millions of users, facebook developer account, facebook app, using facebook, list of leads, tagged users, posting frequency, growth hacking, competitor analysis — the same actor answers all of it.

## Instagram likes: web scraper, top posts, view post, and instagram profile

Teams evaluating Instagram likes work through web scraper, top posts, view post, instagram profile. Each shapes how the data is gathered and used.

## instagram api, instagram reels, data scraping, and scrape instagram data

Teams evaluating Instagram likes work through instagram api, instagram reels, data scraping, scrape instagram data. Each shapes how the data is gathered and used.

## data collection, official instagram api, available instagram, and extract instagram

Teams evaluating Instagram likes work through data collection, official instagram api, available instagram, extract instagram. Each shapes how the data is gathered and used.

## analytics, comments section, python, and like count

Teams evaluating Instagram likes work through analytics, comments section, python, like count. Each shapes how the data is gathered and used.

## FAQ

**Can I scrape Instagram without logging in?**
Yes — for public Instagram data you do not need a login or cookies. The actor runs logged out on your side, which is exactly what keeps your own account safe.

**Does Instagram block scraping?**
Instagram blocks naive scrapers aggressively: datacenter IPs, cold sessions, and fast bursts all get flagged. A maintained **Instagram scraper** rotates residential proxies, paces itself under the rate limit, and retries cleanly, so it does not get blocked.

**Do I need coding skills to scrape Instagram data?**
No. You paste your input into the actor's form and click Start — no Python, no proxy setup, no cookie handling. Developers can still drive the same actor through the **Apify API**.

**How much does it cost to scrape Instagram likes?**
You pay Apify compute plus a small per-result price; check the actor's Pricing tab for the exact rate. The free tier covers small runs, so you can test before you commit.

**Can I export Instagram likes to CSV or Excel?**
Yes — download as JSON, CSV, or Excel, or connect Google Sheets / Airtable directly from the actor page: https://apify.com/data-slayer/instagram-likes

**Am I going to jail for web scraping?**
Open [data-slayer/instagram-likes](https://apify.com/data-slayer/instagram-likes), paste your input, and click Start; developers can also call the same actor through the **Apify API**.

**And other analytics data?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**Any idea if the data can be acquired through web scraping?**
Open [data-slayer/instagram-likes](https://apify.com/data-slayer/instagram-likes), paste your input, and click Start; developers can also call the same actor through the **Apify API**.

**Are Instagram likes more meaningful than comments or saves?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**Are the likers real business accounts with bios and websites, or empty profiles and bots?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**But is your Instagram marketing strategy working?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**But would those APIs be enough for scraping Instagram?**
Open [data-slayer/instagram-likes](https://apify.com/data-slayer/instagram-likes), paste your input, and click Start; developers can also call the same actor through the **Apify API**.

**Can AI agents use the Instagram Scraper API?**
Open [data-slayer/instagram-likes](https://apify.com/data-slayer/instagram-likes), paste your input, and click Start; developers can also call the same actor through the **Apify API**.

**Can I crack the Instagram password by using Python?**
A ready-made **scraping API** skips the Python scraper, the residential proxies, and the login/cookie system you would otherwise maintain. You trade a per-result price for not owning the block risk.

**Can I download Instagram followers using Python?**
A ready-made **scraping API** skips the Python scraper, the residential proxies, and the login/cookie system you would otherwise maintain. You trade a per-result price for not owning the block risk.

**Can I download reels or images from Instagram?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**Can I enrich Instagram data with data from Google Maps?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**Can I get the behind-login data from Instagram?**
No login needed — the actor runs logged out, so your own Instagram account is never at risk.

**Can I make an Android app with Python?**
A ready-made **scraping API** skips the Python scraper, the residential proxies, and the login/cookie system you would otherwise maintain. You trade a per-result price for not owning the block risk.

**Can I scrape Instagram data through MCP?**
You can expose the actor to an agent through Apify's MCP server and call it like any other tool; the actor itself is a standard Apify actor.

**Can I scrape Instagram stories or follower names without a login?**
No login needed — the actor runs logged out, so your own Instagram account is never at risk.

**Can I scrape both Instagram users and Threads users?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**Can I scrape both posts and comments in one go?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

**Can I scrape likers from multiple posts at once?**
You can run the actor across the likes URLs you care about in one job and get one row per item, mixed types included.

**Can I use the Instagram Scraper API for competitive analysis?**
Open [data-slayer/instagram-likes](https://apify.com/data-slayer/instagram-likes), paste your input, and click Start; developers can also call the same actor through the **Apify API**.

**Can I use this scraper with API?**
Open [data-slayer/instagram-likes](https://apify.com/data-slayer/instagram-likes), paste your input, and click Start; developers can also call the same actor through the **Apify API**.

**Can Instagram detect likes from Famoid?**
Short answer: run **Instagram Likes Scraper · No Cookies** on your Instagram likes input — it returns clean rows without a login. Full detail is above.

## Who this is for

If you are a **social media manager**, this replaces the manual Instagram likes pull. Run it on a schedule, push the output to Sheets or Airtable, and your report refreshes itself.

## Related use cases

- [how to scrape instagram followers without getting blocked](https://dataslayer.dev/use-cases/how-to-scrape-instagram-followers-without-getting-blocked/)
- [how to scrape instagram likes without getting blocked](https://dataslayer.dev/use-cases/how-to-scrape-instagram-likes-without-getting-blocked/)
- [how to scrape instagram tagged posts without getting blocked](https://dataslayer.dev/use-cases/how-to-scrape-instagram-tagged-posts-without-getting-blocked/)

## Try it now

Ready to run it yourself? **[Open Instagram Likes Scraper · No Cookies on Apify →](https://apify.com/data-slayer/instagram-likes?utm_source=github&utm_medium=use-case&utm_campaign=how-to-get-instagram-likes-data)**

No login, no code. Free tier included.

---

<!-- status: draft. NEURONwriter brief (neuronwriter_brief_id) + score (neuronwriter_score)
     still owed before publish; gate = score >= 70. -->
