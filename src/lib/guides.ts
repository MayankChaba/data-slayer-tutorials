import type { PlatformId } from "./types";

const PLATFORM_IDS = ["instagram", "linkedin", "twitter", "facebook", "tiktok", "reddit"] as const;

/**
 * Best-effort platform for a migrated guide, inferred from its frontmatter
 * (tags, categories, actor_slug, target keyword, title). Falls back to "other".
 */
export function guidePlatform(data: Record<string, unknown>): PlatformId {
  const parts: string[] = [];
  if (Array.isArray(data.tags)) parts.push(...(data.tags as string[]));
  if (Array.isArray(data.categories)) parts.push(...(data.categories as string[]));
  else if (data.categories) parts.push(String(data.categories));
  for (const key of ["actor_slug", "target_keyword", "title", "slug"]) {
    if (data[key]) parts.push(String(data[key]));
  }
  const hay = parts.join(" ").toLowerCase();
  for (const id of PLATFORM_IDS) {
    if (hay.includes(id)) return id;
  }
  if (hay.includes(" x ") || hay.includes("tweet") || hay.includes("twitter")) return "twitter";
  return "other";
}

/** The most specific label available for a guide: first tag, else category. */
export function guideTag(data: Record<string, unknown>): string {
  if (Array.isArray(data.tags) && data.tags.length > 0) return String(data.tags[0]);
  if (Array.isArray(data.categories) && data.categories.length > 0) return String(data.categories[0]);
  if (data.categories) return String(data.categories);
  return "Guide";
}

export function guideDateLabel(data: Record<string, unknown>): string | null {
  if (!data.date) return null;
  const d = new Date(String(data.date));
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function readTime(body: string | undefined): number {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
