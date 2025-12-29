import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@ktjs/core',
  },
  resolve: {
    alias: {
      '@ktjs/core/jsx-dev-runtime': resolve(import.meta.dirname, '../core/src/jsx/jsx-runtime.ts'),
      '@ktjs/core/jsx-runtime': resolve(import.meta.dirname, '../core/src/jsx/jsx-runtime.ts'),
      '@ktjs/core/jsx': resolve(import.meta.dirname, '../core/src/jsx/index.ts'),
      '@ktjs/core': resolve(import.meta.dirname, '../core/src/index.ts'),
      '@': resolve(import.meta.dirname, '../core/src/'),
    },
  },
});
