import path from 'node:path';
import { existsSync, readFileSync, renameSync } from 'node:fs';

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

const getEntryImportPath = (value: unknown): string | undefined => {
  if (typeof value === 'string') {
    return value;
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return undefined;
  }

  const record = value as Record<string, unknown>;
  if (typeof record.import === 'string') {
    return record.import;
  }
  if (typeof record.default === 'string') {
    return record.default;
  }

  for (const nestedValue of Object.values(record)) {
    const nestedImportPath = getEntryImportPath(nestedValue);
    if (nestedImportPath) {
      return nestedImportPath;
    }
  }

  return undefined;
};

const getLibEntries = (packagePath: string) => {
  const entries = new Map([['index', path.join(packagePath, 'src', 'index.ts')]]);
  const packageJsonPath = path.join(packagePath, 'package.json');
  if (!existsSync(packageJsonPath)) {
    return Object.fromEntries(entries);
  }

  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as {
    exports?: unknown;
  };
  if (!packageJson.exports || typeof packageJson.exports !== 'object' || Array.isArray(packageJson.exports)) {
    return Object.fromEntries(entries);
  }

  for (const exportValue of Object.values(packageJson.exports as Record<string, unknown>)) {
    const importPath = getEntryImportPath(exportValue);
    if (!importPath || !importPath.startsWith('./dist/') || !/\.[mc]?js$/.test(importPath)) {
      continue;
    }

    const entryName = importPath.slice('./dist/'.length).replace(/\.[mc]?js$/, '');
    const tsPath = path.join(packagePath, 'src', `${entryName}.ts`);
    const tsxPath = path.join(packagePath, 'src', `${entryName}.tsx`);
    const sourcePath = existsSync(tsPath) ? tsPath : existsSync(tsxPath) ? tsxPath : '';
    if (!sourcePath || entries.has(entryName)) {
      continue;
    }
    entries.set(entryName, sourcePath);
  }

  return Object.fromEntries(entries);
};

const D_MTS_SUFFIX = '.d.mts';
const EXAMPLE_PACKAGE_PATH = path.join(import.meta.dirname, 'packages', 'example');
export default defineConfig(({ mode }) => {
  console.log(`Current mode = ${mode}`);
  if (mode === 'exp') {
    return {
      root: EXAMPLE_PACKAGE_PATH,
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
  const libEntries = getLibEntries(currentPackagePath);
  const enableRollupTypes = currentPackageName !== 'kt.js';

  const isPlugin = currentPackageName === 'vite-plugin-ktjsx';
  const external = externalFromPeerDependencies(currentPackagePath);
  const rollupPlugins = [replace(replaceOpts(currentPackagePath))];
 
  return {
    resolve: {
      alias:{}, // ! No need to resolve aliases in production mode
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
        pathsToAliases:false,
        entryRoot: path.join(currentPackagePath, 'src'),
        outDir: path.join(currentPackagePath, 'dist'),
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
      ssr: isPlugin ? libEntries.index : undefined,
      lib: {
        entry: libEntries,
        formats: ['es' as const],
        fileName: (_format, entryName) => `${entryName}.mjs`,
      },
      rollupOptions: {
        external,
        plugins: rollupPlugins,
      },
    },
  };
});
