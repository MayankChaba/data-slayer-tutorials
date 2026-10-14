import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Static (SSG) output. Canonical URLs, sitemap and JSON-LD all resolve against `site`.
export default defineConfig({
  site: "https://dataslayer.dev",
  output: "static",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/_") && !page.endsWith("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
