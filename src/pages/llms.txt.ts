import type { APIRoute } from "astro";
import { site } from "../lib/site";
import { getActors, getTotals } from "../lib/actors";
import { formatUsd } from "../lib/format";
import { PLATFORM_CONTENT } from "../lib/platformContent";

/**
 * llms.txt — a plain-text summary of the site for AI agents and answer engines.
 * Convention: https://llmstxt.org
 */
export const GET: APIRoute = () => {
  const totals = getTotals();
  const actors = getActors();
  const fromPrice = totals.priceMin !== null ? formatUsd(totals.priceMin) : "n/a";

  const hubs = Object.values(PLATFORM_CONTENT)
    .map((c) => {
      const list = actors
        .filter((a) => a.platform === c.id)
        .sort((a, b) => b.stats.runs30 - a.stats.runs30);
      const top = list
        .slice(0, 6)
        .map((a) => `  - ${a.name} — ${site.url}/scrapers/${a.slug}/`)
        .join("\n");
      return `### ${c.h1} (${list.length} scrapers)\n${c.tagline}\n${site.url}/${c.slug}/\n${top}`;
    })
    .join("\n\n");

  const faqs = Object.values(PLATFORM_CONTENT)
    .flatMap((c) => c.faqs)
    .map((f) => `- Q: ${f.q}\n  A: ${f.a}`)
    .join("\n");

  const body = `# ${site.wordmark}

> ${site.description}

${site.wordmark} publishes ${totals.count} production scraper APIs for public social-media data
across Instagram, LinkedIn, X (Twitter), Facebook, TikTok and Reddit. Each scraper is an Apify
actor: send one JSON request, read typed records back, and pay per result. No login, cookies or
proxies are required. One Apify token works across the whole portfolio.

## Key pages
- Home: ${site.url}/
- Scraper catalog: ${site.url}/scrapers/
- Documentation: ${site.url}/docs
- Pricing: ${site.url}/pricing
- Playbooks: ${site.url}/playbooks
- Blog: ${site.url}/blogs
- About: ${site.url}/about
- Contact: ${site.url}/contact
- Apify Store profile: ${site.apifyProfileUrl}

## Platform hubs
${hubs}

## How it works
1. Create an Apify account and copy your API token.
2. POST a JSON body to ${site.apifyApiBase}/acts/{actor}/run-sync-get-dataset-items.
3. Read typed JSON records back, or download the dataset as CSV or Excel.

## Pricing
Billed per result at each scraper's published rate; entry price is ${fromPrice} per 1,000 results.
No seats, no monthly minimum. Failed runs are not billed as results.

## Frequently asked questions
${faqs}

## Facts
- Publisher: ${site.publisher}
- Scrapers: ${totals.count}
- Runs in the last 30 days: ${totals.runs30}
- Runs all time: ${totals.totalRuns}
- Data source: public endpoints only; no login or cookies
- Platform: Apify (${site.apifyProfileUrl})

## Contact
${site.apifyProfileUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
