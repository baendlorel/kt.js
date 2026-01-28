// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';
import postcss from 'rollup-plugin-postcss';

// Main config for mui package - need to handle CSS imports
const configs = createPackageConfig({
  packageName: '@ktjs/mui',
  packageDir: 'packages/mui',
  iifeName: '__ktjs_mui__',
  withLegacy: false,
  external: ['kt.js', 'kt.js/jsx-runtime'],
});

// Add postcss plugin to all configs to handle CSS imports
configs.forEach((config) => {
  if (!config.plugins) return;

  // Check if this is the dts config (rollup-plugin-dts)
  const isDtsConfig = config.plugins.some((p) => p && p.name === 'dts');

  if (isDtsConfig) {
    // For dts config, add postcss at the beginning to handle CSS before dts processes files
    config.plugins.unshift(
      postcss({
        inject: false, // Don't inject CSS
        extract: false, // Don't extract CSS for type generation
      }),
    );
  } else {
    // For regular build configs, insert postcss plugin before typescript plugin
    const tsIndex = config.plugins.findIndex((p) => p && p.name === 'typescript');
    if (tsIndex !== -1) {
      config.plugins.splice(
        tsIndex,
        0,
        postcss({
          extract: true, // Extract CSS to separate file
          minimize: true,
          sourceMap: false,
        }),
      );
    }
  }
});

export default configs;
