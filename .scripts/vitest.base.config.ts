import path from 'node:path';
import { ViteUserConfig } from 'vitest/config';

export const test: ViteUserConfig['test'] = {
  reporters: ['dot'],
  environment: 'jsdom',
  include: [
    'tests/**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)',
    'packages/**/tests/**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)',
  ],
};

export const resolve: (dirname: string) => ViteUserConfig['resolve'] = (dirname) => ({
  alias: {
    '@': path.resolve(dirname, 'packages/shared/index.ts'),
    '@ktjs/shared': path.resolve(dirname, 'packages/shared/index.ts'),
    '@ktjs/core': path.resolve(dirname, 'packages/core/src/index.ts'),
    '@ktjs/router': path.resolve(dirname, 'packages/router/src/main.ts'),
    '@ktjs/shortcuts': path.resolve(dirname, 'packages/shortcuts/src/index.ts'),
    '@tests': path.resolve(dirname, 'tests'),
  },
});
