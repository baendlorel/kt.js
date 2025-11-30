// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Use the standard factory to generate base configs for index.ts
const baseConfigs = createPackageConfig({
  packageName: '@ktjs/jsx',
  packageDir: 'packages/jsx',
  external: ['@ktjs/core'],
  iifeName: '', // No IIFE needed for jsx package
  withLegacy: false,
  withCjs: true,
});

// Export: base configs + additional jsx-runtime configs
export default [...baseConfigs];
