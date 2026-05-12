import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://marshalkoi.github.io",
  base: "/meeting-room-interactive-tutorial",
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
