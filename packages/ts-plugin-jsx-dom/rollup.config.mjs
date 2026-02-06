// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: '@ktjs/ts-plugin-jsx-dom',
  packageDir: 'packages/ts-plugin-jsx-dom',
  withLegacy: false,
  withCjs: true,
});
