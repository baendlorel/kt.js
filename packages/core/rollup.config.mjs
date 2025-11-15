// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: '@ktjs/core',
  packageDir: 'packages/core',
  external: {},
  withIIFE: true,
  withLegacy: true,
});
