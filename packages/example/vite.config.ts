import { defineConfig } from 'vite';
import { resolve } from 'path';

// Vite config for KT.js development
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@ktjs/core',
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@ktjs/core/jsx-dev-runtime': resolve(import.meta.dirname, '../core/src/jsx/jsx-runtime.ts'),
      '@ktjs/core/jsx-runtime': resolve(import.meta.dirname, '../core/src/jsx/jsx-runtime.ts'),
      '@ktjs/core/jsx': resolve(import.meta.dirname, '../core/src/jsx/index.ts'),
      '@ktjs/core': resolve(import.meta.dirname, '../core/src/index.ts'),
      '@ktjs/mui': resolve(import.meta.dirname, '../mui/src/index.ts'),
      '@ktjs/shared': resolve(import.meta.dirname, '../shared/src/index.ts'),
      'kt.js': resolve(import.meta.dirname, '../kt.js/src/index.ts'),
      '@': resolve(import.meta.dirname, '../core/src/'),
    },
  },
});
