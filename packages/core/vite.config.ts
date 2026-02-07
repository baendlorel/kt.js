import { defineConfig } from 'vite';
import { resolve } from 'path';
import babel from 'vite-plugin-babel';
import babelKTjsx from '@ktjs/babel-plugin-ktjsx';

// Vite config for KT.js development
export default defineConfig({
  base: '/kt.js',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: false,
  },
  plugins: [
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: [babelKTjsx()], // Plugin path will be loaded by Babel
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias mappings for monorepo package development
      '@ktjs/core/jsx-dev-runtime': resolve(import.meta.dirname, './src/jsx/jsx-runtime.ts'),
      '@ktjs/core/jsx-runtime': resolve(import.meta.dirname, './src/jsx/jsx-runtime.ts'),
      '@ktjs/core/jsx': resolve(import.meta.dirname, './src/jsx/index.ts'),
      '@ktjs/core': resolve(import.meta.dirname, './src/index.ts'),
      '@ktjs/mui': resolve(import.meta.dirname, './src/index.ts'),
      '@ktjs/shared': resolve(import.meta.dirname, './src/index.ts'),
      'kt.js': resolve(import.meta.dirname, './src/index.ts'),
      '@': resolve(import.meta.dirname, './src/'),
    },
  },
});
