import path from 'node:path';
import { ViteUserConfig } from 'vitest/config';

export const test: ViteUserConfig['test'] = {
  reporters: ['dot'],
  environment: 'jsdom',
  include: ['tests/**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
};

export const resolve: () => ViteUserConfig['resolve'] = () => ({
  alias: {
    '@': path.resolve(import.meta.dirname, 'packages/shared/index.ts'),
    '@ktjs/shared': path.resolve(import.meta.dirname, 'packages/shared/index.ts'),
    '@ktjs/core': path.resolve(import.meta.dirname, 'packages/core/src/index.ts'),
    '@ktjs/router': path.resolve(import.meta.dirname, 'packages/router/src/main.ts'),
    '@ktjs/shortcuts': path.resolve(import.meta.dirname, 'packages/shortcuts/src/index.ts'),
    '@tests': path.resolve(import.meta.dirname, 'tests'),
  },
});
