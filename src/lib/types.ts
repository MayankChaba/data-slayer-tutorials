/** Platform ids match the Apify actor name prefix and the site's platform taxonomy. */
export type PlatformId =
  | "instagram"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "tiktok"
  | "reddit"
  | "other";

/** An input parameter, normalized from the actor's input schema. */
export interface ActorField {
  key: string;
  title: string;
  type: string;
  nullable: boolean;
  description: string;
  required?: boolean;
  default?: unknown;
  enum?: string[];
}

/** A dataset output field, from the published schema or observed on a real run. */
export interface OutputField {
  key: string;
  title: string;
  type: string;
  nullable: boolean;
  description: string;
}

export interface PricingEvent {
  key: string;
  title: string;
  description: string;
  isPrimary: boolean;
  isStart: boolean;
  priceUsd: number | null;
  lowestUsd: number | null;
  tiers: Record<string, number | null> | null;
}

export interface ActorPricing {
  model: string | null;
  primaryTitle: string | null;
  /** Standard price for 1,000 primary events (free-plan tier). */
  per1k: number | null;
  /** Lowest tier price for 1,000 primary events, when tiered. */
  per1kFrom: number | null;
  hasTiers: boolean;
  startUsd: number | null;
  events: PricingEvent[];
}

export interface ActorStats {
  totalRuns: number;
  runs30: number;
  succeeded30: number;
  failed30: number;
  aborted30: number;
  timedOut30: number;
  totalUsers: number;
  users30: number;
  rating: number | null;
  reviewCount: number;
  lastRunStartedAt: string | null;
}

export type OutputSource = "schema" | "observed" | null;

export interface Actor {
  id: string;
  /** The Apify actor name, e.g. "instagram-followers-scraper---no-login". */
  apifyName: string;
  slug: string;
  /** Full Apify title, e.g. "Instagram Followers Scraper & Enricher · No Login". */
  title: string;
  /** Title with the "· tag" suffix removed. */
  name: string;
  tags: string[];
  description: string;
  seoTitle: string | null;
  seoDescription: string | null;
  platform: PlatformId;
  categories: string[];
  pictureUrl: string | null;
  apifyUrl: string;
  createdAt: string | null;
  modifiedAt: string | null;
  stats: ActorStats;
  pricing: ActorPricing | null;
  input: { fields: ActorField[]; required: string[] } | null;
  output: OutputField[];
  outputSource: OutputSource;
  exampleInput: Record<string, unknown> | null;
  sampleOutput: Record<string, unknown> | null;
  version: string | null;
  updatedAt: string | null;
}

export interface ActorFile {
  generatedAt: string;
  source: string;
  username: string;
  publisher: string;
  actorCount: number;
  actors: Actor[];
}
