/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

/**
 * Compile-time injected app metadata (from vite config).
 * These are safe to use anywhere in the client code.
 */
declare const __APP_NAME__: string;
declare const __APP_VERSION__: string;
declare const __BUILD_TIME__: string;
