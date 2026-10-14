/**
 * Content sections.
 *
 *   /playbooks/ — tutorials / use-cases / workflows: step-by-step strategies to
 *                 get a job done (may combine several actors and other tools).
 *   /blogs/     — general keyword-targeted articles (landing + comparison pages).
 */
export type Section = "blogs" | "playbooks";

const PLAYBOOK_TYPES = new Set(["how-to", "use-case"]);

export function sectionFor(contentType: unknown): Section {
  return PLAYBOOK_TYPES.has(String(contentType ?? "").toLowerCase()) ? "playbooks" : "blogs";
}

export function sectionLabel(section: Section): string {
  return section === "playbooks" ? "Playbooks" : "Blog";
}

export function sectionBlurb(section: Section): string {
  return section === "playbooks"
    ? "Step-by-step strategies for a job worth doing — the actors, the inputs and the workflow, start to finish."
    : "Articles on scraping public social data, the tools involved and the trade-offs behind them.";
}
