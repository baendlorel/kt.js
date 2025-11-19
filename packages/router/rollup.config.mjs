// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: '@ktjs/router',
  packageDir: 'packages/router',
  entry: 'main.ts',
  // iifeName: '__ktjs_router__',
  withLegacy: true,
});
