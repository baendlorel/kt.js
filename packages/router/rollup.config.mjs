// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: '@ktjs/router',
  packageDir: 'packages/router',
  entry: 'main.ts',
  // external: { '@ktjs/core': '@ktjs/core' },
  withIIFE: true,
  withLegacy: true,
});
