import { defineConfig } from 'vitest/config';
import { test, resolve } from './.scripts/vitest.base.config';

export default defineConfig({
  test: {
    projects: ['packages/*'],
  },
  resolve: resolve(import.meta.dirname),
});
