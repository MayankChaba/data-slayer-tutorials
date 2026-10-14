import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Actor, ActorField, ActorFile, PlatformId } from "./types";
import { getPlatform, site, type Platform } from "./site";

const HERE = dirname(fileURLToPath(import.meta.url));

let cachedFile: ActorFile | null = null;

function isActorFile(value: unknown): value is ActorFile {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as { actors?: unknown; generatedAt?: unknown };
  return Array.isArray(candidate.actors) && typeof candidate.generatedAt === "string";
}

/** Read the build-time actor cache written by scripts/fetch-actors.mjs. */
function dataFile(): ActorFile {
  if (cachedFile) return cachedFile;
  const candidates = [
    join(process.cwd(), "src", "data", "actors.json"),
    join(HERE, "..", "data", "actors.json"),
  ];
  const path = candidates.find((candidate) => existsSync(candidate));
  if (!path) {
    throw new Error("src/data/actors.json is missing. Run `npm run fetch:actors` first.");
  }
  const parsed: unknown = JSON.parse(readFileSync(path, "utf8"));
  if (!isActorFile(parsed)) {
    throw new Error("src/data/actors.json is malformed. Re-run `npm run fetch:actors`.");
  }
  cachedFile = parsed;
  return cachedFile;
}

export function getActors(): Actor[] {
  return dataFile().actors;
}

export function getGeneratedAt(): string {
  return dataFile().generatedAt;
}

export function getActorSlugs(): string[] {
  return getActors().map((actor) => actor.slug);
}

export function getActorBySlug(slug: string): Actor | undefined {
  return getActors().find((actor) => actor.slug === slug);
}

export function successRate(actor: Actor): number | null {
  const { runs30, succeeded30 } = actor.stats;
  return runs30 > 0 ? succeeded30 / runs30 : null;
}

export interface PortfolioTotals {
  count: number;
  runs30: number;
  succeeded30: number;
  successRate: number | null;
  totalRuns: number;
  totalUsers: number;
  priceMin: number | null;
  generatedAt: string;
}

export function getTotals(actors: Actor[] = getActors()): PortfolioTotals {
  const runs30 = actors.reduce((sum, actor) => sum + actor.stats.runs30, 0);
  const succeeded30 = actors.reduce((sum, actor) => sum + actor.stats.succeeded30, 0);
  const prices = actors
    .map((actor) => actor.pricing?.per1kFrom ?? null)
    .filter((price): price is number => price !== null);

  return {
    count: actors.length,
    runs30,
    succeeded30,
    successRate: runs30 > 0 ? succeeded30 / runs30 : null,
    totalRuns: actors.reduce((sum, actor) => sum + actor.stats.totalRuns, 0),
    totalUsers: actors.reduce((sum, actor) => sum + actor.stats.totalUsers, 0),
    priceMin: prices.length > 0 ? Math.min(...prices) : null,
    generatedAt: getGeneratedAt(),
  };
}

export interface PlatformGroup extends Platform {
  actors: Actor[];
  runs30: number;
  priceMin: number | null;
}

const PLATFORM_ORDER: PlatformId[] = [
  "instagram",
  "linkedin",
  "twitter",
  "facebook",
  "tiktok",
  "reddit",
  "other",
];

export function getPlatformGroups(actors: Actor[] = getActors()): PlatformGroup[] {
  return PLATFORM_ORDER.map((id) => {
    const platform = getPlatform(id);
    const list = actors
      .filter((actor) => actor.platform === id)
      .sort((a, b) => b.stats.runs30 - a.stats.runs30);
    const prices = list
      .map((actor) => actor.pricing?.per1kFrom ?? null)
      .filter((price): price is number => price !== null);
    return {
      ...platform,
      actors: list,
      runs30: list.reduce((sum, actor) => sum + actor.stats.runs30, 0),
      priceMin: prices.length > 0 ? Math.min(...prices) : null,
    };
  }).filter((group) => group.actors.length > 0);
}

/** A spread across platforms: every platform's most-run scraper first, then seconds, etc. */
export function getFeaturedActors(count = 9): Actor[] {
  const groups = getPlatformGroups();
  const picks: Actor[] = [];
  const deepest = groups.reduce((max, group) => Math.max(max, group.actors.length), 0);
  for (let round = 0; round < deepest && picks.length < count; round += 1) {
    for (const group of groups) {
      const actor = group.actors[round];
      if (actor && picks.length < count) picks.push(actor);
    }
  }
  return picks;
}

const FILLER_WORDS = new Set([
  "scraper",
  "and",
  "with",
  "for",
  "the",
  "no",
  "login",
  "api",
  "data",
]);

function topicWords(actor: Actor): Set<string> {
  const words = actor.name.toLowerCase().match(/[a-z]{3,}/g) ?? [];
  return new Set(
    words
      .filter((word) => !FILLER_WORDS.has(word))
      .map((word) => word.replace(/s$/, "").slice(0, 7)),
  );
}

/** Same-platform neighbours, closest in name first and most-run among equals. */
export function getRelated(actor: Actor, count = 4): Actor[] {
  const own = topicWords(actor);
  return getActors()
    .filter((other) => other.platform === actor.platform && other.slug !== actor.slug)
    .map((other) => ({
      other,
      shared: [...topicWords(other)].filter((word) => own.has(word)).length,
    }))
    .sort((a, b) => b.shared - a.shared || b.other.stats.runs30 - a.other.stats.runs30)
    .slice(0, count)
    .map((entry) => entry.other);
}

export type SortKey = "runs" | "price" | "name";

export function sortActors(actors: Actor[], key: SortKey): Actor[] {
  const copy = [...actors];
  switch (key) {
    case "price":
      return copy.sort((a, b) => {
        const pa = a.pricing?.per1kFrom ?? Number.POSITIVE_INFINITY;
        const pb = b.pricing?.per1kFrom ?? Number.POSITIVE_INFINITY;
        return pa - pb || b.stats.runs30 - a.stats.runs30;
      });
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "runs":
    default:
      return copy.sort((a, b) => b.stats.runs30 - a.stats.runs30);
  }
}

export interface ExampleInput {
  value: Record<string, unknown>;
  /** True when the example was assembled from the input schema (no real example exists). */
  derived: boolean;
}

function placeholderFor(field: ActorField): unknown {
  const firstOption = field.enum?.[0];
  if (typeof firstOption === "string") return firstOption;
  if (field.type.includes("array")) return [];
  if (field.type.includes("integer") || field.type.includes("number")) return 0;
  if (field.type.includes("boolean")) return false;
  return "";
}

/**
 * The actor's own example input when Apify has one, otherwise a minimal body
 * assembled from required schema fields and their published defaults.
 */
export function getExampleInput(actor: Actor): ExampleInput | null {
  if (actor.exampleInput && Object.keys(actor.exampleInput).length > 0) {
    return { value: actor.exampleInput, derived: false };
  }
  const fields = actor.input?.fields ?? [];
  if (fields.length === 0) return null;
  const required = fields.filter((field) => field.required);
  const chosen = required.length > 0 ? required : fields.slice(0, 2);
  const value: Record<string, unknown> = {};
  for (const field of chosen) {
    value[field.key] = field.default !== undefined ? field.default : placeholderFor(field);
  }
  return { value, derived: true };
}

/** The Apify "run actor" request for a given input body. */
export function buildCurl(actor: Actor, body: Record<string, unknown>): string {
  const endpoint = `${site.apifyApiBase}/acts/${site.apifyUsername}~${actor.apifyName}/runs`;
  const payload = JSON.stringify(body, null, 2);
  return `curl -X POST "${endpoint}?token=$APIFY_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d '${payload}'`;
}
