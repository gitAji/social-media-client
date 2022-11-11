import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
      // implement node event listeners here
    },
  },
});
