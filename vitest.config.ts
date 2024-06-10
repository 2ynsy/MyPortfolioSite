import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    globals: true,
    environment: "nuxt",
    setupFiles: ["./utils/image.ts"],
    coverage: {
      reporter: ["text", "html"],
      provider: "istanbul",
      reportsDirectory: "./coverage",
    },
  },
});
