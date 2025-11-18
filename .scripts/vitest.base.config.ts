import path from 'node:path';
import { ViteUserConfig } from 'vitest/config';

export const test: ViteUserConfig['test'] = {
  reporters: ['dot'],
  environment: 'jsdom',
  include: ['tests/**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
};

export const resolve: (dirname: string) => ViteUserConfig['resolve'] = (dirname) => {
  const cwd = process.cwd();
  const currentDirname = path.basename(dirname);
  console.log('@ means', path.resolve(`packages/${currentDirname}/src/`));
  return {
    alias: {
      '@': path.join(cwd, `packages/${currentDirname}/src/`),
      '@tests': path.join(cwd, `packages/${currentDirname}/tests`),
      '@ktjs/core': path.join(cwd, 'packages/core/src/index.ts'),
      '@ktjs/router': path.join(cwd, 'packages/router/src/main.ts'),
      '@ktjs/shortcuts': path.join(cwd, 'packages/shortcuts/src/index.ts'),
    },
  };
};
