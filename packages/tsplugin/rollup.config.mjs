// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for tsplugin package
const mainConfig = createPackageConfig({
  packageName: '@ktjs/tsplugin',
  packageDir: 'packages/tsplugin',
  iifeName: '',
  withLegacy: false,
  withCjs: false,
});

export default [...mainConfig];
