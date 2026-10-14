/**
 * Comparison-page content. dataslayer's own column is factual (from the live
 * actor data). The "other" column describes each provider's general model from
 * public positioning and is deliberately hedged — we do not assert their current
 * pricing or feature set. A visible disclaimer tells readers to verify.
 */
export interface Competitor {
  slug: string;
  name: string;
  url: string;
  positioning: string;
  summary: string;
  rows: [string, string, string][];
  faqs: { q: string; a: string }[];
}

export const COMPETITORS: Competitor[] = [
  {
    slug: "scrapingbee",
    name: "ScrapingBee",
    url: "https://www.scrapingbee.com/",
    positioning: "a general-purpose web-scraping API",
    summary:
      "ScrapingBee is a general-purpose scraping API that fetches web pages and returns HTML or extracted content. dataslayer is narrower: a catalog of prebuilt scrapers that return structured records from public social-media data, so you skip writing and maintaining parsers.",
    rows: [
      ["What it is", "102 prebuilt scrapers for public social-media data", "A general-purpose scraping API"],
      ["Best for", "Structured social data (posts, profiles, comments, followers)", "Fetching and rendering arbitrary web pages"],
      ["Pricing model", "Per result, billed through Apify", "Typically credit- or request-based (check their site)"],
      ["Data coverage", "Instagram, LinkedIn, X, Facebook, TikTok, Reddit", "General web; social coverage varies"],
      ["Login / cookies", "Not required — public data only", "Depends on the target site"],
      ["Output", "Typed JSON, plus CSV and Excel export", "Typically HTML or extracted content"],
      ["Maintenance", "Scrapers maintained for you", "You handle selectors and parsing"],
    ],
    faqs: [
      { q: "Is dataslayer a ScrapingBee alternative?", a: "Only if you want structured social-media data. ScrapingBee is a general-purpose scraping API for arbitrary pages; dataslayer is a catalog of prebuilt scrapers that return typed records from public social data without you writing parsers." },
      { q: "When should I use a general scraping API instead?", a: "When you need to fetch arbitrary web pages outside the platforms dataslayer covers, or you need raw HTML/rendering rather than structured records." },
      { q: "How is dataslayer priced compared to credit-based APIs?", a: "dataslayer bills per result returned, at each scraper's published rate, through your Apify account — not per API credit. See the pricing page for current rates." },
    ],
  },
  {
    slug: "bright-data",
    name: "Bright Data",
    url: "https://brightdata.com/",
    positioning: "a large web-data platform",
    summary:
      "Bright Data is a broad web-data platform: proxy networks, datasets and scraping APIs across the public web. dataslayer is focused — a catalog of prebuilt scrapers for public social-media data, priced per result, with no proxy or network to manage yourself.",
    rows: [
      ["What it is", "102 prebuilt scrapers for public social-media data", "A broad web-data / proxy platform"],
      ["Best for", "Fast structured social data on a per-result basis", "Large-scale, multi-source data programs"],
      ["Pricing model", "Per result, billed through Apify", "Typically usage- or commitment-based (check their site)"],
      ["Data coverage", "Instagram, LinkedIn, X, Facebook, TikTok, Reddit", "Broad public web plus datasets"],
      ["Login / cookies", "Not required — public data only", "Depends on the target source"],
      ["Output", "Typed JSON, plus CSV and Excel export", "Varies by product (datasets, APIs, feeds)"],
      ["Setup", "One Apify token, one POST per run", "Provider account and product selection"],
    ],
    faqs: [
      { q: "Is dataslayer a Bright Data alternative?", a: "For social-media data, yes: dataslayer gives you prebuilt scrapers for six platforms, priced per result, with no proxy network to run. Bright Data is broader and aimed at larger multi-source data programs." },
      { q: "Do I need to manage proxies with dataslayer?", a: "No. Each scraper runs on Apify's infrastructure and handles its own fetching. You send a request and read structured records back." },
      { q: "How is dataslayer priced?", a: "Per result, at each scraper's published rate, through your Apify account. No subscription and no seat minimum." },
    ],
  },
  {
    slug: "scraperapi",
    name: "ScraperAPI",
    url: "https://www.scraperapi.com/",
    positioning: "a proxy-backed scraping API",
    summary:
      "ScraperAPI handles proxies, retries and rendering for you, then returns page content. dataslayer goes further up the stack: instead of raw pages, you get typed records from public social platforms, so there is nothing to parse or keep working.",
    rows: [
      ["What it is", "102 prebuilt scrapers for public social-media data", "A proxy-backed scraping API"],
      ["Best for", "Structured social records with no parsing", "Fetching pages behind anti-bot defences"],
      ["Pricing model", "Per result, billed through Apify", "Typically credit-based (check their site)"],
      ["Data coverage", "Instagram, LinkedIn, X, Facebook, TikTok, Reddit", "General web"],
      ["Login / cookies", "Not required — public data only", "Depends on the target site"],
      ["Output", "Typed JSON, plus CSV and Excel export", "Typically HTML"],
      ["What you maintain", "Nothing — scrapers maintained for you", "Your own parsing and selectors"],
    ],
    faqs: [
      { q: "Is dataslayer a ScraperAPI alternative?", a: "For social-media data, yes. ScraperAPI returns page content and leaves parsing to you; dataslayer returns typed records from public social platforms so there is nothing to parse." },
      { q: "Do I still need a proxy with dataslayer?", a: "No. Proxying and fetching are handled inside each scraper on Apify. You send one request per run." },
      { q: "How is dataslayer priced?", a: "Per result returned, at each scraper's published rate, through your Apify account. No subscription and no seat minimum." },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
