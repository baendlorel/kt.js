// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for mui package - need to handle CSS imports
const configs = createPackageConfig({
  packageName: '@ktjs/babel-plugin-ktjsx',
  packageDir: 'packages/babel-plugin-ktjsx',
  withLegacy: false,
  external: [],
});

export default configs;
