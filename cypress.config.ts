import { defineConfig } from "cypress";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
//import viteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: async () => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const viteConfigPath = path.resolve(__dirname, "vite.config.ts");

        const viteConfig = await import(viteConfigPath);
        return viteConfig.default;
      },
    },
    specPattern: "cypress/component/**/*.cy.{ts,tsx}",
    supportFile: false,
    //'cypress/support/component.js',
  },

  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
