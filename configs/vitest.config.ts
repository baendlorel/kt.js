import { defineConfig } from 'vitest/config';
import { resolve } from '../scripts/vitest.base.config';

export default defineConfig({
  test: {
    projects: ['packages/*'],
  },
  resolve: resolve(import.meta.dirname),
});
