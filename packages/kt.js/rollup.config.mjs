// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: 'kt.js',
  packageDir: 'packages/kt.js',
  external: {
    '@ktjs/core': '@ktjs/core',
    '@ktjs/router': '@ktjs/router',
    '@ktjs/shortcuts': '@ktjs/shortcuts',
  },
  withIIFE: true,
  withLegacy: true,
});
