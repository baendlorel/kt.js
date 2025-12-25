// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';

// Main config for core package
const mainConfig = createPackageConfig({
  packageName: '@ktjs/core',
  packageDir: 'packages/core',
  iifeName: '__ktjs_core__',
  withLegacy: true,
});

// JSX runtime config
const jsxRuntimeConfig = createPackageConfig({
  packageName: '@ktjs/core',
  packageDir: 'packages/core',
  entry: 'jsx/jsx-runtime.ts',
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
          file: output.file.replace('index.mjs', 'jsx/jsx-runtime.mjs'),
        };
      }
      if (output.file && output.file.includes('index.d.ts')) {
        return {
          ...output,
          file: output.file.replace('index.d.ts', 'jsx/jsx-runtime.d.ts'),
        };
      }
      return output;
    });
  }
  return config;
});

// JSX index config
const jsxIndexConfig = createPackageConfig({
  packageName: '@ktjs/core',
  packageDir: 'packages/core',
  entry: 'jsx/index.ts',
  iifeName: '',
  withLegacy: false,
  withCjs: false,
});

// Modify jsx index outputs
const modifiedJsxIndexConfig = jsxIndexConfig.map(config => {
  if (Array.isArray(config.output)) {
    config.output = config.output.map(output => {
      if (output.file && output.file.includes('index.mjs')) {
        return {
          ...output,
          file: output.file.replace('index.mjs', 'jsx/index.mjs'),
        };
      }
      if (output.file && output.file.includes('index.d.ts')) {
        return {
          ...output,
          file: output.file.replace('index.d.ts', 'jsx/index.d.ts'),
        };
      }
      return output;
    });
  }
  return config;
});

export default [...mainConfig, ...modifiedJsxRuntimeConfig, ...modifiedJsxIndexConfig];
