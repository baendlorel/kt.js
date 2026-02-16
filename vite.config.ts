import path from 'node:path';
import { existsSync } from 'node:fs';

import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { getAliases } from './scripts/aliases.js';
import { replaceOpts } from './scripts/replace-options.js';
import { externalFromPeerDependencies } from './scripts/common/package-info.js';

const getTsConfigPath = (packagePath: string) => {
  const tsconfigPath1 = path.join(packagePath, 'tsconfig.build.json');
  if (existsSync(tsconfigPath1)) {
    return tsconfigPath1;
  }
  return path.join(packagePath, 'tsconfig.json');
};

export default defineConfig(() => {
  const currentPackagePath = process.env.LIB_PACKAGE_PATH || '';
  const tsconfigPath = getTsConfigPath(currentPackagePath);
  const entry = path.join(currentPackagePath, 'src', 'index.ts');
  const external = externalFromPeerDependencies(currentPackagePath);

  console.log({ tsconfigPath, entry });

  return {
    resolve: {
      alias: getAliases(),
    },
    plugins: [
      dts({
        tsconfigPath,
        include: [
          path.join(currentPackagePath, 'src/**/*.ts'),
          path.join(currentPackagePath, 'src/**/*.tsx'),
          path.join(currentPackagePath, 'src/**/*.d.ts'),
        ],
        entryRoot: path.join(currentPackagePath, 'src'),
        outDir: path.join(currentPackagePath, 'dist'),
        insertTypesEntry: true,
        compilerOptions: {
          composite: false,
          incremental: false,
        },
        logLevel: 'silent',
      }),
    ],
    build: {
      target: 'esnext',
      sourcemap: false,
      minify: false,
      emptyOutDir: false,
      outDir: path.join(currentPackagePath, 'dist'),
      lib: {
        entry,
        formats: ['es'],
        fileName: () => 'index.mjs',
      },
      rollupOptions: {
        external,
        plugins: [
          replace(replaceOpts(currentPackagePath)),
          terser({
            format: {
              beautify: true,
              indent_level: 2,
              comments: false,
            },
            compress: {
              drop_console: true,
              dead_code: true,
              evaluate: true,
            },
            mangle: {
              properties: {
                regex: /^_/,
              },
            },
          }),
        ],
      },
    },
  };
});
