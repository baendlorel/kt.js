// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: '@ktjs/core',
  packageDir: 'packages/core',
  // iifeName: '__ktjs_core__',
  withLegacy: true,
});
