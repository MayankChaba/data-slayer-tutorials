import type { PlatformId } from "./types";

/** Site-wide constants. Change these in one place. */
export const site = {
  name: "dataslayer.dev",
  wordmark: "Dataslayer",
  publisher: "Data Slayer",
  url: "https://dataslayer.dev",
  tagline: "Web data APIs for social platforms",
  description:
    "Scraper APIs for Instagram, LinkedIn, X (Twitter), Facebook and TikTok. One key, structured JSON, pay per result — no logins, cookies or proxies to manage.",
  apifyUsername: "data-slayer",
  apifyProfileUrl: "https://apify.com/data-slayer",
  apifyApiBase: "https://api.apify.com/v2",
  consoleUrl: "/console",
  signInUrl: "/console",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation. Docs, Pricing and Resources are stubs for now. */
export const nav: NavItem[] = [
  { label: "Scrapers", href: "/scrapers" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "Blog", href: "/blogs" },
];

export interface Platform {
  id: PlatformId;
  label: string;
  short: string;
  /** CSS colour token used for the platform's tint. */
  tint: string;
}

/** Order here is the order platforms appear across the site. */
export const platforms: Platform[] = [
  { id: "instagram", label: "Instagram", short: "IG", tint: "var(--color-instagram)" },
  { id: "linkedin", label: "LinkedIn", short: "in", tint: "var(--color-linkedin)" },
  { id: "twitter", label: "X (Twitter)", short: "X", tint: "var(--color-twitter)" },
  { id: "facebook", label: "Facebook", short: "fb", tint: "var(--color-facebook)" },
  { id: "tiktok", label: "TikTok", short: "tt", tint: "var(--color-tiktok)" },
  { id: "reddit", label: "Reddit", short: "rd", tint: "var(--color-reddit)" },
];

const OTHER_PLATFORM: Platform = {
  id: "other",
  label: "Other",
  short: "··",
  tint: "var(--color-other)",
};

export function getPlatform(id: PlatformId): Platform {
  return platforms.find((platform) => platform.id === id) ?? OTHER_PLATFORM;
}
