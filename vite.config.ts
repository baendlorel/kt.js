import path from 'node:path';
import { existsSync } from 'node:fs';

import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { getAliases } from './scripts/aliases.js';
import { defineGlobals, replaceOpts } from './scripts/replace-options.js';
import { externalFromPeerDependencies } from './scripts/common/package-info.js';

const getTsConfigPath = (packagePath: string) => {
  const tsconfigPath1 = path.join(packagePath, 'tsconfig.build.json');
  if (existsSync(tsconfigPath1)) {
    return tsconfigPath1;
  }
  return path.join(packagePath, 'tsconfig.json');
};

export default defineConfig(({ mode }) => {
  console.log(`Current mode = ${mode}`);
  if (mode === 'exp') {
    return {
      root: path.join(import.meta.dirname, 'packages', 'example'),
      resolve: {
        alias: getAliases(),
      },
      define: {
        'flags.svg': JSON.stringify('__svg'),
        'flags.mathml': JSON.stringify('__mathml'),
      },
    };
  }

  const currentPackagePath = process.env.LIB_PACKAGE_PATH || '';
  const currentPackageName = path.basename(currentPackagePath);
  const tsconfigPath = getTsConfigPath(currentPackagePath);

  const isVitePlugin = currentPackageName === 'vite-plugin-ktjsx';
  const external = externalFromPeerDependencies(currentPackagePath);

  return {
    resolve: {
      alias: {}, // ! No need to resolve aliases in production mode
    },
    define: defineGlobals,
    plugins: [
      dts({
        tsconfigPath,
        include: [
          path.join(currentPackagePath, 'src/**/*.ts'),
          path.join(currentPackagePath, 'src/**/*.tsx'),
          path.join(currentPackagePath, 'src/**/*.d.ts'),
        ],
        pathsToAliases: false,
        entryRoot: path.join(currentPackagePath, 'src'),
        outDir: path.join(currentPackagePath, 'dist'),
        logLevel: 'silent',
      }),
    ],
    ssr: isVitePlugin ? { noExternal: true as const } : undefined,
    build: {
      target: 'esnext',
      sourcemap: false,
      minify: false,
      emptyOutDir: true,
      outDir: path.join(currentPackagePath, 'dist'),
      rollupOptions: {
        external,
        plugins: [replace(replaceOpts(currentPackagePath))],
      },
    },
  };
});
