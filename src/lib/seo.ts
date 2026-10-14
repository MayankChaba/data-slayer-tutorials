import { site } from "./site";
import type { Actor } from "./types";

export interface Crumb {
  name: string;
  path: string;
}
export interface Faq {
  q: string;
  a: string;
}

const abs = (path: string) => new URL(path, site.url).href;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.publisher,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    sameAs: [site.apifyProfileUrl],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.wordmark,
    url: site.url,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function softwareAppSchema(actor: Actor) {
  const price = actor.pricing?.per1kFrom ?? null;
  return {
    "@type": "SoftwareApplication",
    name: actor.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description: actor.description,
    url: abs(`/scrapers/${actor.slug}/`),
    offers: price !== null ? { "@type": "Offer", price, priceCurrency: "USD" } : undefined,
    isPartOf: { "@id": `${site.url}/#organization` },
  };
}

export function collectionSchema(input: {
  name: string;
  description: string;
  path: string;
  actors: Actor[];
}) {
  return {
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.actors.length,
      itemListElement: input.actors.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.name,
        url: abs(`/scrapers/${a.slug}/`),
      })),
    },
  };
}

export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
