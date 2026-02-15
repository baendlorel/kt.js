// @ts-check
import { createPackageConfig } from '../../scripts/rollup-factory.mjs';

// Main config for shared package
const configs = createPackageConfig({
  packageName: '@ktjs/shared',
  packageDir: 'packages/shared',
  iifeName: '__ktjs_shared__',
  withLegacy: true,
});

export default configs;
