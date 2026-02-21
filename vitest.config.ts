import { defineConfig } from 'vitest/config';
import { getAliases } from './configs/aliases';
import { defineGlobals } from './configs/replace-options';

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
