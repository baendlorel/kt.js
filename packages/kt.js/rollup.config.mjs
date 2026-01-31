// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for kt.js
const mainConfig = createPackageConfig({
  packageName: 'kt.js',
  packageDir: 'packages/kt.js',
  external: ['@ktjs/core', '@ktjs/router'],
  iifeName: 'kt',
  withLegacy: true,
});

// JSX runtime config
const jsxRuntimeConfig = createPackageConfig({
  packageName: 'kt.js',
  packageDir: 'packages/kt.js',
  entry: 'jsx-runtime.ts',
  external: ['@ktjs/core', '@ktjs/router'],
  iifeName: '',
  withLegacy: false,
  withCjs: false,
});

// Modify jsx-runtime outputs
const modifiedJsxRuntimeConfig = jsxRuntimeConfig.map(config => {
  if (Array.isArray(config.output)) {
    config.output = config.output.map(output => {
      if (output.file && output.file.includes('index.mjs')) {
        return {
          ...output,
          file: output.file.replace('index.mjs', 'jsx-runtime.mjs'),
        };
      }
      if (output.file && output.file.includes('index.d.ts')) {
        return {
          ...output,
          file: output.file.replace('index.d.ts', 'jsx-runtime.d.ts'),
        };
      }
      return output;
    });
  }
  return config;
});

export default [...mainConfig, ...modifiedJsxRuntimeConfig];
