// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for mui package - need to handle CSS imports
const configs = createPackageConfig({
  packageName: '@ktjs/rollup-plugin-ktjsx',
  packageDir: 'packages/rollup-plugin-ktjsx',
  iifeName: '__ktjs_rollup-plugin-ktjsx__',
  withLegacy: false,
  external: [],
});

export default configs;
