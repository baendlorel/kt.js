import { defineConfig } from 'vitest/config';
import { getAliases, globalDefines } from './rollup.config.base.js';

export default defineConfig(() => {
  return {
    test: {
      environment: 'jsdom',
      // setupFiles: ['./src/macros.ts'],
      include: ['**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
      silent: false,
    },
    define: globalDefines,
    resolve: { alias: getAliases() },
  };
});
