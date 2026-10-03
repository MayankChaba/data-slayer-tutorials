# Data Slayer Tutorials

Practical tutorials for scraping and automating social platforms with [Apify](https://apify.com) actors.

**Live site:** https://dataslayer.dev/

## Structure

- `_config.yml` — Jekyll config (theme: minima; plugins: jekyll-seo-tag, jekyll-sitemap)
- `index.md` — hub homepage
- `robots.txt` — crawler rules (AI bots explicitly allowed) + sitemap
- `llms.txt` — summary for AI agents
- `tutorials/` — one markdown file per tutorial (added as each tutorial ships)
- `_includes/head.html` — head override: GA4 + Microsoft Clarity + Search Console verification (each off until its ID is set in `_config.yml`)

## Adding a tutorial

Create `tutorials/<slug>.md` with front matter:

```yaml
---
layout: page
title: How to scrape X without cookies
---
```

Then link it from `index.md`. Each tutorial should target a problem query and link to the
relevant actor with UTM tags (`?utm_source=github&utm_medium=content&utm_campaign=<slug>`).

## Analytics & Search Console

The head is overridden in `_includes/head.html` (minima 2.5.1 does not ship a `head-custom`
hook). Each tag is inert until its value is set in `_config.yml`:

| Key | What it enables | Where to get it |
|-----|-----------------|-----------------|
| `google_site_verification` | `<meta name="google-site-verification">` | Search Console → URL-prefix property → HTML tag |
| `google_analytics` | GA4 `gtag.js` | analytics.google.com → Admin → Data streams |
| `clarity_project_id` | Microsoft Clarity script | clarity.microsoft.com → project → Settings |

### Search Console setup (project-site property)

1. Create a **URL-prefix** property for `https://dataslayer.dev/`
   (a Domain property needs DNS, which `github.io` does not allow).
2. Verify with the **HTML tag** method → paste the token into `google_site_verification`,
   or use the **HTML file** method → drop the `googleXXXX.html` file at the repo root.
3. Submit `sitemap.xml` under Sitemaps.
4. Indexing is automatic from there; the cadence ramp is advanced on GSC signals
   (see `PUBLISH-CADENCE.md`).

