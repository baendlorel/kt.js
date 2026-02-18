import { defineConfig } from 'vitest/config';
import { getAliases } from './scripts/aliases';

export default defineConfig(() => {
  return {
    test: {
      environment: 'jsdom',
      // setupFiles: ['./src/macros.ts'],
      include: ['**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
      silent: false,
    },
    define: {
      'flags.svg': JSON.stringify('__svg'),
      'flags.mathml': JSON.stringify('__mathml'),
    },
    resolve: {
      alias: getAliases(),
    },
  };
});
