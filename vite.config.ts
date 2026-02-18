import path from 'node:path';
import { existsSync, renameSync } from 'node:fs';

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

const D_MTS_SUFFIX = '.d.mts';
const EXAMPLE_PACKAGE_PATH = path.join(import.meta.dirname, 'packages', 'example');
export default defineConfig(({ mode }) => {
  const currentPackagePath = mode === 'exp' ? EXAMPLE_PACKAGE_PATH : process.env.LIB_PACKAGE_PATH || '';
  const currentPackageName = path.basename(currentPackagePath);
  const tsconfigPath = getTsConfigPath(currentPackagePath);
  const enableRollupTypes = path.basename(currentPackagePath) !== 'kt.js';
  const entry = path.join(currentPackagePath, 'src', 'index.ts');

  const isPlugin = currentPackageName === 'vite-plugin-ktjsx';
  const external = externalFromPeerDependencies(currentPackagePath);
  const rollupPlugins = [replace(replaceOpts(currentPackagePath))];

  return {
    resolve: {
      alias: getAliases(),
    },
    define: {
      'flags.svg': JSON.stringify('__svg'),
      'flags.mathml': JSON.stringify('__mathml'),
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
        rollupTypes: enableRollupTypes,
        copyDtsFiles: enableRollupTypes,
        afterBuild(emittedFiles) {
          if (!enableRollupTypes) {
            return;
          }

          for (const filePath of emittedFiles.keys()) {
            if (!filePath.endsWith(D_MTS_SUFFIX) || !existsSync(filePath)) {
              continue;
            }

            const dtsPath = filePath.slice(0, -D_MTS_SUFFIX.length) + '.d.ts';
            renameSync(filePath, dtsPath);
          }
        },
        compilerOptions: {
          composite: false,
          incremental: false,
        },
        logLevel: 'silent',
      }),
    ],
    ssr: isPlugin ? { noExternal: true as const } : undefined,
    build: {
      target: 'esnext',
      sourcemap: false,
      minify: false,
      emptyOutDir: true,
      outDir: path.join(currentPackagePath, 'dist'),
      ssr: isPlugin ? entry : undefined,
      lib: {
        entry,
        formats: ['es' as const],
        fileName: () => 'index.mjs',
      },
      rollupOptions: {
        external,
        plugins: rollupPlugins,
      },
    },
  };
});
