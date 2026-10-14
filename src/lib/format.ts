/** Number formatting for metrics, prices and dates shown across the site. */

/** 1_234 -> "1.2K", 3_120_000 -> "3.1M". */
export function formatCount(value: number): string {
  if (value >= 1_000_000) return `${compact(value / 1_000_000)}M`;
  if (value >= 1_000) return `${compact(value / 1_000)}K`;
  return value.toLocaleString("en-US");
}

function compact(value: number): string {
  if (value >= 100) return String(Math.round(value));
  const fixed = value.toFixed(1);
  return fixed.endsWith(".0") ? fixed.slice(0, -2) : fixed;
}

/** 1234 -> "1,234". */
export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

/** A USD amount, with more precision the smaller it gets. */
export function formatUsd(value: number | null | undefined): string {
  if (value === null || value === undefined) return "—";
  if (value >= 100) return `$${Math.round(value).toLocaleString("en-US")}`;
  if (value >= 1) return `$${value.toFixed(2)}`;
  if (value >= 0.01) return `$${value.toFixed(3)}`;
  return `$${value.toFixed(4)}`;
}

/** 0.9731 -> "97.3%". */
export function formatPercent(value: number, digits = 1): string {
  return `${(value * 100).toFixed(digits)}%`;
}

/** ISO date -> "12 Oct 2026". Returns null when the input is missing or invalid. */
export function formatDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** ISO date -> "12 Oct 2026, 14:03 UTC". */
export function formatDateTime(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return `${formatDate(iso)}, ${date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  })}`;
}

/** Relative-ish label such as "12 Oct 2026" or "never". */
export function formatLastRun(iso: string | null | undefined): string {
  return formatDate(iso) ?? "no runs yet";
}

/** "array of strings" style label is already human; ensure empty types read cleanly. */
export function displayType(type: string): string {
  return type.trim().length > 0 ? type : "—";
}
