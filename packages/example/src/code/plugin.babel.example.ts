import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import babelKTjsx from '@ktjs/babel-plugin-ktjsx';

// Babel config for KT.js development
export default defineConfig({
  // ...otherConfigs,
  plugins: [
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: [babelKTjsx()], // Plugin path will be loaded by Babel
      },
    }),
  ],
});
