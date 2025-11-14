// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: '@ktjs/shortcuts',
  packageDir: 'packages/shortcuts',
  external: { '@ktjs/core': '@ktjs/core' },
});
