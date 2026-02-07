import * as path from 'node:path';
import { ViteUserConfig } from 'vitest/config';

export const test: ViteUserConfig['test'] = {
  reporters: ['dot'],
  environment: 'jsdom',
  include: ['tests/**/*.{test,spec,e2e-spec}.?(c|m)[jt]s?(x)'],
};

export const resolve: (dirname: string) => ViteUserConfig['resolve'] = (dirname) => {
  // Calculate project root from the current dirname
  // dirname could be 'configs/' or 'packages/*/', we need to find the project root
  let projectRoot = dirname;

  // If dirname is inside packages/, go up two levels to reach project root
  if (dirname.includes('/packages/')) {
    projectRoot = path.resolve(dirname, '../..');
  }
  // If dirname is configs/, go up one level to reach project root
  else if (dirname.endsWith('/configs') || dirname.endsWith('\\configs')) {
    projectRoot = path.resolve(dirname, '..');
  }

  const currentDirname = path.basename(dirname);

  return {
    alias: {
      '@': path.join(projectRoot, 'packages/core/src/'), // @ is fixed to core/src
      '@tests': path.join(projectRoot, `packages/${currentDirname}/tests`),
      '@ktjs/runtime': path.join(projectRoot, 'packages/core/src/runtime.ts'),
      '@ktjs/core': path.join(projectRoot, 'packages/core/src/index.ts'),
      '@ktjs/router': path.join(projectRoot, 'packages/router/src/main.ts'),
      '@ktjs/shortcuts': path.join(projectRoot, 'packages/shortcuts/src/index.ts'),
      '@ktjs/mui': path.join(projectRoot, 'packages/mui/src/index.ts'),
      '@ktjs/shared': path.join(projectRoot, 'packages/shared/src/index.ts'),
      '@ktjs/babel-plugin-ktjsx': path.join(projectRoot, 'packages/babel-plugin-ktjsx/src/index.ts'),
      '@ktjs/kt.js': path.join(projectRoot, 'packages/kt.js/src/index.ts'),
    },
  };
};
