import { defineConfig } from 'vitest/config';
import { getAliases } from './scripts/aliases';
import { defineGlobals } from './scripts/replace-options';

export default defineConfig(() => {
  return {
    test: {
      environment: 'jsdom',
      // setupFiles: ['./src/macros.ts'],
      include: ['**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
      silent: false,
    },
    define: defineGlobals,
    resolve: { alias: getAliases() },
  };
});
