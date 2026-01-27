// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for mui package
const mainConfig = createPackageConfig({
  packageName: '@ktjs/mui',
  packageDir: 'packages/mui',
  iifeName: '__ktjs_mui__',
  withLegacy: false,
});

export default mainConfig;
