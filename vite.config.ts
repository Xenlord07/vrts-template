/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Embed basic app metadata into the bundle (name, version, build time)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf-8"),
) as { name: string; version: string };

// https://vite.dev/config/
export default defineConfig({
  // React Fast Refresh + TS path aliases from tsconfig
  plugins: [react(), tsconfigPaths()],

  // Use explicit env prefix to avoid leaking unexpected vars
  envPrefix: "VITE_",

  // Dev server ergonomics for teams/containers
  server: {
    host: true, // listen on all interfaces (LAN/devcontainers)
    port: 5173,
    strictPort: true, // fail fast if port is taken (no silent port bump)
    open: true, // open browser on start
  },

  // Local preview mirrors prod-ish server settings
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },

  // Resolve to avoid duplicate React copies in monorepos / linked deps
  resolve: {
    dedupe: ["react", "react-dom"],
  },

  // Speed up cold starts and keep targets aligned with TS
  optimizeDeps: {
    include: ["react", "react-dom"],
    esbuildOptions: { target: "es2020" },
  },

  // Build for modern browsers; keep sourcemaps for debugging
  build: {
    target: "es2020",
    sourcemap: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        // Split vendor chunks for better long-term caching
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
  },

  // Compile-time constants (typed in src/vite-env.d.ts)
  define: {
    __APP_NAME__: JSON.stringify(pkg.name),
    __APP_VERSION__: JSON.stringify(pkg.version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },

  // Vitest configuration for unit testing
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./config/vitest/setup.ts"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.d.ts",
        "**/*.config.*",
        "dist/",
      ],
    },
  },
});
