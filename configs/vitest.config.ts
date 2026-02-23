import { defineConfig } from 'vitest/config';
import { getAliases, globalDefines } from './rollup.config.base.js';
import path from 'node:path';

export default defineConfig(() => {
  const packageDir = process.env.CURRENT_PKG_PATH || path.join(import.meta.dirname, '..', '(packages|plugins)');
  return {
    test: {
      environment: 'jsdom',
      // setupFiles: ['./src/macros.ts'],
      include: [path.join(packageDir, '**', '*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)')],
      silent: false,
    },
    define: globalDefines,
    resolve: { alias: getAliases() },
  };
});
