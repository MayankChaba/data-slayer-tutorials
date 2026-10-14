#!/usr/bin/env node
/**
 * Build the data-slayer actor catalogue cache from Apify's public JSON API.
 *
 *   node scripts/fetch-actors.mjs          # or: npm run fetch:actors
 *
 * Only JSON endpoints are used — no HTML is scraped. Every value written to
 * src/data/actors.json comes straight from Apify; missing data is omitted
 * rather than invented. The token is read from APIFY_TOKEN or ~/.apify/auth.json.
 *
 * Endpoints:
 *   GET /v2/acts?my=1&limit=400                       list actors (filtered to the account)
 *   GET /v2/acts/{id}                                 title, description, stats, exampleRunInput, pricingInfos
 *   GET /v2/acts/{id}/builds/default                  input schema + dataset output field schema
 *   GET /v2/acts/{id}/runs/last/dataset/items?limit=1 one real sample result (PII redacted)
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = join(ROOT, "src", "data", "actors.json");

const API = "https://api.apify.com/v2";
const USERNAME = "data-slayer";
const PUBLISHER = "Data Slayer";
const CONCURRENCY = 5;
const MAX_ATTEMPTS = 6;

/** Prefixes that decide which platform a scraper belongs to (order matters). */
const PLATFORM_PREFIXES = [
  "instagram",
  "linkedin",
  "twitter",
  "facebook",
  "tiktok",
  "reddit",
  "youtube",
  "threads",
];

/** Keys whose values are redacted before a sample result is cached. */
const PII_KEY = /(email|phone|contact|token|secret|password|api[_-]?key)/i;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function readToken() {
  if (typeof process.env.APIFY_TOKEN === "string" && process.env.APIFY_TOKEN.trim()) {
    return process.env.APIFY_TOKEN.trim();
  }
  const candidates = [
    join(homedir(), ".apify", "auth.json"),
    process.env.APIFY_AUTH_FILE ?? "",
  ].filter((value) => value.length > 0);

  for (const file of candidates) {
    try {
      const parsed = JSON.parse(await readFile(file, "utf8"));
      if (typeof parsed?.token === "string" && parsed.token.length > 0) {
        return parsed.token;
      }
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }
  throw new Error(
    'No Apify token found. Set APIFY_TOKEN, or create ~/.apify/auth.json with a { "token": "..." } field.',
  );
}

/** GET a JSON endpoint with bounded retries on 429/5xx and transient network errors. */
async function fetchJson(path, token) {
  const url = new URL(`${API}${path}`);
  url.searchParams.set("token", token);
  let lastStatus = 0;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    let response;
    try {
      response = await fetch(url, { headers: { accept: "application/json" } });
    } catch (error) {
      lastStatus = 0;
      if (attempt === MAX_ATTEMPTS - 1) {
        throw new Error(`Network error for ${url.pathname}: ${error.message}`);
      }
      await sleep((250 + Math.random() * 750) * 2 ** attempt);
      continue;
    }

    if (response.ok) return response.json();
    if (response.status === 404) return null;
    lastStatus = response.status;
    if (response.status !== 429 && response.status < 500) {
      throw new Error(`Apify API ${response.status} for ${url.pathname}`);
    }
    await sleep((250 + Math.random() * 750) * 2 ** attempt);
  }
  throw new Error(`Apify API request failed (${lastStatus}) for ${url.pathname}`);
}

function safeParse(text) {
  if (typeof text !== "string") return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function toNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function round(value, decimals = 4) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function platformOf(apifyName) {
  const name = apifyName.toLowerCase();
  for (const platform of PLATFORM_PREFIXES) {
    if (name.startsWith(`${platform}-`)) return platform;
  }
  return "other";
}

function slugify(apifyName) {
  return apifyName.replace(/-+/g, "-").replace(/^-|-$/g, "");
}

/** "Instagram Followers Scraper · No Login" -> { base, tags: ["No Login"] }. */
function splitTitle(title) {
  const parts = title
    .split(" · ")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
  const [base = title, ...tags] = parts;
  return { base, tags };
}

function typeParts(type) {
  if (Array.isArray(type)) {
    const types = type.filter((entry) => typeof entry === "string" && entry !== "null");
    return { type: types.join(" | ") || "any", nullable: type.includes("null") };
  }
  if (typeof type === "string") return { type, nullable: false };
  return { type: "", nullable: false };
}

/** Current pricing = the record with the latest startedAt; per-1K derived from the primary charge event. */
function normalizePricing(pricingInfos) {
  if (!Array.isArray(pricingInfos) || pricingInfos.length === 0) return null;

  const current = [...pricingInfos].sort(
    (a, b) => Date.parse(b?.startedAt ?? 0) - Date.parse(a?.startedAt ?? 0),
  )[0];

  const chargeEvents = current?.pricingPerEvent?.actorChargeEvents ?? {};
  const events = Object.entries(chargeEvents).map(([key, event]) => {
    const tiers = event?.eventTieredPricingUsd
      ? Object.fromEntries(
          Object.entries(event.eventTieredPricingUsd).map(([tier, value]) => [
            tier,
            typeof value?.tieredEventPriceUsd === "number" ? value.tieredEventPriceUsd : null,
          ]),
        )
      : null;
    const tierValues = tiers
      ? Object.values(tiers).filter((value) => typeof value === "number")
      : [];
    const priceUsd =
      typeof event?.eventPriceUsd === "number" ? event.eventPriceUsd : (tiers?.FREE ?? null);
    const lowestUsd = tierValues.length > 0 ? Math.min(...tierValues) : priceUsd;
    return {
      key,
      title: typeof event?.eventTitle === "string" ? event.eventTitle : key,
      description: typeof event?.eventDescription === "string" ? event.eventDescription : "",
      isPrimary: Boolean(event?.isPrimaryEvent),
      isStart: key === "apify-actor-start",
      priceUsd,
      lowestUsd,
      tiers,
    };
  });

  const primary = events.find((event) => event.isPrimary) ?? events.find((event) => !event.isStart) ?? null;
  const start = events.find((event) => event.isStart) ?? null;

  if (!primary) {
    return {
      model: typeof current?.pricingModel === "string" ? current.pricingModel : null,
      primaryTitle: null,
      per1k: null,
      per1kFrom: null,
      hasTiers: false,
      startUsd: typeof start?.priceUsd === "number" ? start.priceUsd : null,
      events,
    };
  }

  return {
    model: typeof current?.pricingModel === "string" ? current.pricingModel : null,
    primaryTitle: primary.title,
    per1k: typeof primary.priceUsd === "number" ? round(primary.priceUsd * 1000) : null,
    per1kFrom: typeof primary.lowestUsd === "number" ? round(primary.lowestUsd * 1000) : null,
    hasTiers: primary.tiers !== null,
    startUsd: typeof start?.priceUsd === "number" ? start.priceUsd : null,
    events,
  };
}

function normalizeInputSchema(schema) {
  if (!schema || typeof schema !== "object") return null;
  const properties = schema.properties ?? {};
  const required = Array.isArray(schema.required) ? schema.required : [];

  const fields = Object.entries(properties)
    .filter(([, property]) => property && typeof property === "object" && property.editor !== "hidden")
    .map(([key, property]) => {
      const { type, nullable } = typeParts(property.type);
      const field = {
        key,
        title: typeof property.title === "string" ? property.title : key,
        type,
        nullable,
        description: typeof property.description === "string" ? property.description : "",
        required: required.includes(key),
      };
      if (property.default !== undefined) field.default = property.default;
      if (Array.isArray(property.enum)) field.enum = property.enum;
      return field;
    });

  return { fields, required };
}

/**
 * Apify publishes dataset fields in two shapes:
 *   A) a JSON schema  -> { type: "object", properties: { key: {...} } }
 *   B) a plain map     -> { key: { type, title, description } }
 * Both normalize to the same field list.
 */
function extractFieldMap(dataset) {
  const fields = dataset?.fields;
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) return null;
  if (fields.properties && typeof fields.properties === "object") return fields.properties;
  return Object.fromEntries(
    Object.entries(fields).filter(
      ([, value]) => value && typeof value === "object" && !Array.isArray(value),
    ),
  );
}

function normalizeOutputFields(dataset) {
  const map = extractFieldMap(dataset);
  if (!map) return [];

  return Object.entries(map)
    .filter(([, field]) => field && typeof field === "object" && !Array.isArray(field))
    .map(([key, field]) => {
      const { type, nullable } = typeParts(field.type);
      return {
        key,
        title: typeof field.title === "string" ? field.title : "",
        type,
        nullable,
        description: typeof field.description === "string" ? field.description : "",
      };
    });
}

/** Apify's default placeholder example is `{ "helloWorld": 123 }` — treat it as "no example". */
function isPlaceholderInput(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.length === 1 && keys[0] === "helloWorld" && value.helloWorld === 123;
}

function parseExampleInput(exampleRunInput) {
  const parsed = safeParse(exampleRunInput?.body);
  if (parsed === null || isPlaceholderInput(parsed)) return null;
  return parsed;
}

/** Redact obvious PII and clamp long strings so the cached sample is safe to commit. */
function sanitizeSample(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return null;
  const out = {};
  for (const [key, value] of Object.entries(item)) {
    if (PII_KEY.test(key)) {
      out[key] = "[redacted]";
    } else if (typeof value === "string" && value.length > 80) {
      out[key] = `${value.slice(0, 77)}…`;
    } else {
      out[key] = value;
    }
  }
  return out;
}

async function fetchSampleOutput(actorId, token) {
  const items = await fetchJson(`/acts/${actorId}/runs/last/dataset/items?limit=1&clean=true`, token);
  if (!Array.isArray(items) || items.length === 0) return null;
  return sanitizeSample(items[0]);
}

/** A coarse type label inferred from a real observed value. */
function inferType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

/**
 * Fallback when an Actor publishes no dataset field schema: read the field
 * names Apify observed on the last run's dataset (real, not inferred names).
 */
async function fetchObservedFields(actorId, sampleOutput, token) {
  const lastRun = (await fetchJson(`/acts/${actorId}/runs/last`, token))?.data ?? null;
  const datasetId = lastRun?.defaultDatasetId;
  if (typeof datasetId !== "string") return [];
  const dataset = (await fetchJson(`/datasets/${datasetId}`, token))?.data ?? null;
  if (!Array.isArray(dataset?.fields)) return [];
  return dataset.fields.map((key) => ({
    key,
    title: "",
    type: sampleOutput && key in sampleOutput ? inferType(sampleOutput[key]) : "",
    nullable: false,
    description: "",
  }));
}

async function buildActor(listItem, token) {
  const id = listItem.id;
  const detail = (await fetchJson(`/acts/${id}`, token))?.data ?? {};
  const build = (await fetchJson(`/acts/${id}/builds/default`, token))?.data ?? null;
  const sampleOutput = await fetchSampleOutput(id, token);

  const definition = build?.actorDefinition ?? {};
  const stats = detail.stats ?? {};
  const run30 = stats.publicActorRunStats30Days ?? {};
  const title = detail.title ?? listItem.title ?? listItem.name;
  const { base, tags } = splitTitle(title);

  let output = normalizeOutputFields(definition.storages?.dataset);
  let outputSource = output.length > 0 ? "schema" : null;
  if (output.length === 0) {
    const observed = await fetchObservedFields(id, sampleOutput, token);
    if (observed.length > 0) {
      output = observed;
      outputSource = "observed";
    }
  }

  return {
    id,
    apifyName: listItem.name,
    slug: slugify(listItem.name),
    title,
    name: base,
    tags,
    description: typeof detail.description === "string" ? detail.description : "",
    seoTitle: typeof detail.seoTitle === "string" ? detail.seoTitle : null,
    seoDescription: typeof detail.seoDescription === "string" ? detail.seoDescription : null,
    platform: platformOf(listItem.name),
    categories: Array.isArray(detail.categories) ? detail.categories : [],
    pictureUrl: typeof detail.pictureUrl === "string" ? detail.pictureUrl : null,
    apifyUrl: `https://apify.com/${USERNAME}/${listItem.name}`,
    createdAt: detail.createdAt ?? listItem.createdAt ?? null,
    modifiedAt: detail.modifiedAt ?? listItem.modifiedAt ?? null,
    stats: {
      totalRuns: toNumber(stats.totalRuns),
      runs30: toNumber(run30.TOTAL),
      succeeded30: toNumber(run30.SUCCEEDED),
      failed30: toNumber(run30.FAILED),
      aborted30: toNumber(run30.ABORTED),
      timedOut30: toNumber(run30["TIMED-OUT"]),
      totalUsers: toNumber(stats.totalUsers),
      users30: toNumber(stats.totalUsers30Days),
      rating: typeof stats.actorReviewRating === "number" ? stats.actorReviewRating : null,
      reviewCount: toNumber(stats.actorReviewCount),
      lastRunStartedAt: stats.lastRunStartedAt ?? null,
    },
    pricing: normalizePricing(detail.pricingInfos),
    input: normalizeInputSchema(definition.input ?? safeParse(build?.inputSchema)),
    output,
    outputSource,
    exampleInput: parseExampleInput(detail.exampleRunInput),
    sampleOutput,
    version: build?.buildNumber ?? null,
    updatedAt: build?.finishedAt ?? null,
  };
}

async function main() {
  const token = await readToken();
  const list = await fetchJson("/acts?my=1&limit=400", token);
  const listItems = (list?.data?.items ?? []).filter(
    (item) => item?.username === USERNAME && item?.isPublic !== false,
  );
  if (listItems.length === 0) {
    throw new Error(`No public actors found for "${USERNAME}".`);
  }
  console.log(`Fetching ${listItems.length} ${USERNAME} actors (concurrency ${CONCURRENCY})…`);

  const actors = [];
  let cursor = 0;
  let failures = 0;

  async function worker() {
    while (cursor < listItems.length) {
      const item = listItems[cursor];
      cursor += 1;
      try {
        actors.push(await buildActor(item, token));
      } catch (error) {
        failures += 1;
        console.error(`\n  ! ${item.name}: ${error.message}`);
      }
      process.stdout.write(`\r  ${actors.length + failures}/${listItems.length} done`);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, listItems.length) }, () => worker()),
  );
  process.stdout.write("\n");

  actors.sort((a, b) => b.stats.runs30 - a.stats.runs30);

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "apify",
    username: USERNAME,
    publisher: PUBLISHER,
    actorCount: actors.length,
    actors,
  };

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const withPricing = actors.filter((actor) => actor.pricing?.per1k != null).length;
  const withOutput = actors.filter((actor) => actor.output.length > 0).length;
  const withSample = actors.filter((actor) => actor.sampleOutput !== null).length;
  console.log(`Wrote ${actors.length} actors to ${OUT_FILE}`);
  console.log(`  pricing: ${withPricing} · output schema: ${withOutput} · sample result: ${withSample}`);
  if (failures > 0) console.log(`  skipped: ${failures} (see messages above)`);
}

main().catch((error) => {
  console.error(`\nfetch-actors failed: ${error.message}`);
  process.exitCode = 1;
});
