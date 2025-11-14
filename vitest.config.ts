import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['dot'],
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
  },
  resolve: {
    alias: {
      '@ktjs/core': path.resolve(import.meta.dirname, 'packages/core/src/index.ts'),
      '@ktjs/router': path.resolve(import.meta.dirname, 'packages/router/src/main.ts'),
      '@ktjs/shortcuts': path.resolve(import.meta.dirname, 'packages/shortcuts/src/index.ts'),
      '@': path.resolve(import.meta.dirname, 'packages/core/src'),
      '@tests': path.resolve(import.meta.dirname, 'tests'),
    },
  },
});
