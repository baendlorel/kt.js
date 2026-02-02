// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for tsplugin-events package
const mainConfig = createPackageConfig({
  packageName: '@ktjs/tsplugin-events',
  packageDir: 'packages/tsplugin-events',
  iifeName: '',
  withLegacy: false,
  withCjs: false,
});

export default [...mainConfig];