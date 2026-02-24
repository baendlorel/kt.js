import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import legacy from '@vitejs/plugin-legacy';
import babelKTjsx from '@ktjs/babel-plugin-ktjsx';

export default defineConfig(() => {
  return {
    plugins: [
      babel({
        filter: /\.[jt]sx?$/,
        loader: (id: string) => {
          if (id.endsWith('.ts')) {
            return 'ts';
          }
          if (id.endsWith('.tsx')) {
            return 'tsx';
          }
          return 'js';
        },
        babelConfig: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  ie: '11',
                },
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
            '@babel/preset-typescript',
          ],
          plugins: [babelKTjsx()],
        },
      }),
      legacy({
        targets: ['ie >= 11'],
      }),
    ],
  };
});
