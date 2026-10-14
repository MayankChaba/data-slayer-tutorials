import { site } from "./site";
import type { Actor, OutputField } from "./types";

const MAX_LIST_ITEMS = 2;

function trim(value: unknown): unknown {
  return Array.isArray(value) ? value.slice(0, MAX_LIST_ITEMS) : value;
}

function toPython(value: unknown, indent = 0): string {
  const pad = "    ".repeat(indent);
  const inner = "    ".repeat(indent + 1);
  if (value === null || value === undefined) return "None";
  if (value === true) return "True";
  if (value === false) return "False";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((v) => `${inner}${toPython(v, indent + 1)},`).join("\n")}\n${pad}]`;
  }
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length === 0) return "{}";
  return `{\n${entries
    .map(([k, v]) => `${inner}${JSON.stringify(k)}: ${toPython(v, indent + 1)},`)
    .join("\n")}\n${pad}}`;
}

function indentLines(text: string, spaces: number): string {
  const pad = " ".repeat(spaces);
  return text
    .split("\n")
    .map((line, i) => (i === 0 ? line : pad + line))
    .join("\n");
}

/** The fields of one result row, written like a type: { "like_count": integer, ... } */
export function buildRowShape(outputFields: OutputField[], max = 14): string | null {
  if (outputFields.length === 0) return null;
  const lines = outputFields
    .slice(0, max)
    .map((field) => `  ${JSON.stringify(field.key)}: ${field.type || "any"},`);
  const rest = outputFields.length - max;
  if (rest > 0) lines.push(`  // + ${rest} more fields`);
  return `{\n${lines.join("\n")}\n}`;
}

export interface CodeSample {
  id: string;
  label: string;
  code: string;
}

/** The same request in three languages. `input` is the example body. */
export function buildCodeSamples(actor: Actor, input: Record<string, unknown>): CodeSample[] {
  const actorId = `${site.apifyUsername}/${actor.apifyName}`;
  const json = JSON.stringify(input, null, 2);

  const curl = `curl -X POST "${site.apifyApiBase}/acts/${site.apifyUsername}~${actor.apifyName}/run-sync-get-dataset-items" \\
  -H "Authorization: Bearer $APIFY_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '${indentLines(json, 2).replace(/'/g, "'\\''")}'`;

  const node = `import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor('${actorId}').call(${json});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);`;

  const python = `import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("${actorId}").call(run_input=${toPython(input)})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)`;

  return [
    { id: "curl", label: "cURL", code: curl },
    { id: "node", label: "Node.js", code: node },
    { id: "python", label: "Python", code: python },
  ];
}
