// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

export default createPackageConfig({
  packageName: 'kt.js',
  packageDir: 'packages/kt.js',
  external: ['@ktjs/core', '@ktjs/jsx', '@ktjs/router', '@ktjs/shortcuts'],
  iifeName: 'kt',
  withLegacy: true,
});
