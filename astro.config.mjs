import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.andrewmarquez.com",
  integrations: [tailwind(), expressiveCode()],
});
