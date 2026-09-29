# Data Slayer Tutorials

Practical tutorials for scraping and automating social platforms with [Apify](https://apify.com) actors.

**Live site:** https://mayankchaba.github.io/data-slayer-tutorials/

## Structure

- `_config.yml` — Jekyll config (theme: minima; plugins: jekyll-seo-tag, jekyll-sitemap)
- `index.md` — hub homepage
- `robots.txt` — crawler rules (AI bots explicitly allowed) + sitemap
- `llms.txt` — summary for AI agents
- `tutorials/` — one markdown file per tutorial (added as each tutorial ships)

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
