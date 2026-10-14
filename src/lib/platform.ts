import type { PlatformId } from "./types";

/**
 * Per-platform visual metadata for the dark theme: a readable tint (for card
 * price strips and dots), the Font Awesome brand icon, and the tile background.
 * Instagram/TikTok carry brand gradients; the rest are flat brand colours.
 */
export interface PlatformVisual {
  tint: string;
  icon: string;
  background: string;
  /** Icon size as a fraction of the tile. */
  scale: number;
  /** TikTok-style two-colour offset glyphs. */
  offsets?: [string, string];
}

export const PLATFORM_VISUAL: Record<PlatformId, PlatformVisual> = {
  instagram: {
    tint: "var(--color-instagram)",
    icon: "fa6-brands:instagram",
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
    scale: 0.6,
  },
  linkedin: {
    tint: "var(--color-linkedin)",
    icon: "fa6-brands:linkedin-in",
    background: "#0a66c2",
    scale: 0.52,
  },
  twitter: {
    tint: "var(--color-twitter)",
    icon: "fa6-brands:x-twitter",
    background: "#000000",
    scale: 0.52,
  },
  facebook: {
    tint: "var(--color-facebook)",
    icon: "fa6-brands:facebook-f",
    background: "#0866ff",
    scale: 0.52,
  },
  tiktok: {
    tint: "var(--color-tiktok)",
    icon: "fa6-brands:tiktok",
    background: "#000000",
    scale: 0.5,
    offsets: ["#25f4ee", "#fe2c55"],
  },
  reddit: {
    tint: "var(--color-reddit)",
    icon: "fa6-brands:reddit-alien",
    background: "#ff4500",
    scale: 0.6,
  },
  other: {
    tint: "var(--color-other)",
    icon: "fa6-solid:layer-group",
    background: "#20201c",
    scale: 0.52,
  },
};

export function platformTint(id: PlatformId): string {
  return PLATFORM_VISUAL[id]?.tint ?? "var(--color-other)";
}
