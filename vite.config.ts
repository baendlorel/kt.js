import path from 'node:path';
import { existsSync } from 'node:fs';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import replace from '@rollup/plugin-replace';

import { getAliases } from './scripts/aliases.js';
import { defineGlobals, replaceOpts } from './scripts/replace-options.js';

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
      resolve: { alias: getAliases() },
      define: defineGlobals,
    };
  }

  const PKG_PATH = process.env.KT_PKG_PATH || '';
  const currentPackageName = path.basename(PKG_PATH);
  const tsconfigPath = getTsConfigPath(PKG_PATH);

  const isVitePlugin = currentPackageName === 'vite-plugin-ktjsx';

  return {
    define: defineGlobals,
    plugins: [
      dts({
        tsconfigPath,
        include: [
          path.join(PKG_PATH, 'src/**/*.ts'),
          path.join(PKG_PATH, 'src/**/*.tsx'),
          path.join(PKG_PATH, 'src/**/*.d.ts'),
        ],
        pathsToAliases: false,
        entryRoot: path.join(PKG_PATH, 'src'),
        outDir: path.join(PKG_PATH, 'dist'),
      }),
    ],

    // ssr: isVitePlugin ? { noExternal: true as const } : undefined,
    build: {
      target: 'esnext',
      sourcemap: false,
      minify: false,
      emptyOutDir: true,
      outDir: path.join(PKG_PATH, 'dist'),
      lib: {
        entry: path.join(PKG_PATH, 'src/index.ts'),
        formats: ['es'],
      },
      rollupOptions: {
        external: [/^@ktjs\//],
        plugins: [replace(replaceOpts(PKG_PATH))],
      },
    },
  };
});
