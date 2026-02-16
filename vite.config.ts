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

export default defineConfig(() => {
  const currentPackagePath = process.env.LIB_PACKAGE_PATH || '';
  const currentPackageName = path.basename(currentPackagePath);
  const tsconfigPath = getTsConfigPath(currentPackagePath);
  const enableRollupTypes = path.basename(currentPackagePath) !== 'kt.js';
  const entry = path.join(currentPackagePath, 'src', 'index.ts');
  const isNodePluginPackage = currentPackageName === 'vite-plugin-ktjsx';
  const external = externalFromPeerDependencies(currentPackagePath);
  const rollupPlugins = [
    replace(replaceOpts(currentPackagePath)),
    ...(!isNodePluginPackage
      ? [
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
        ]
      : []),
  ];

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
    ssr: isNodePluginPackage
      ? {
          noExternal: true,
        }
      : undefined,
    build: {
      target: 'esnext',
      sourcemap: false,
      minify: false,
      emptyOutDir: false,
      outDir: path.join(currentPackagePath, 'dist'),
      ...(isNodePluginPackage ? { ssr: entry } : {}),
      lib: {
        entry,
        formats: ['es' as const],
        fileName: () => 'index.mjs',
      },
      rollupOptions: {
        external,
        output: isNodePluginPackage
          ? {
              entryFileNames: 'index.mjs',
              format: 'es',
            }
          : undefined,
        plugins: rollupPlugins,
      },
    },
  };
});
