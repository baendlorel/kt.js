import { defineConfig } from 'vitest/config';
import { getVitestAliases } from './scripts/aliases';

export default defineConfig(() => {
  return {
    test: {
      // setupFiles: ['./src/macros.ts'],
      include: ['**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
      silent: false,
    },
    resolve: {
      alias: getVitestAliases(),
    },
  };
});
