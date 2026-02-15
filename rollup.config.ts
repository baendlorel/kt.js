import path from 'node:path';
import { existsSync } from 'node:fs';

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

import { getAliases } from 'scripts/aliases.js';
import { replaceOpts } from 'scripts/replace-options.js';
import { externalFromPeerDependencies } from 'scripts/common/package-info';

const getTsConfigPath = (packagePath: string) => {
  const tsconfigPath1 = path.join(packagePath, 'tsconfig.build.json');
  if (existsSync(tsconfigPath1)) {
    return tsconfigPath1;
  }
  return path.join(packagePath, 'tsconfig.json');
};

export default () => {
  const currentPackagePath = process.env.LIB_PACKAGE_PATH || '';
  const tsconfigPath = getTsConfigPath(currentPackagePath);
  const external = externalFromPeerDependencies(currentPackagePath);
  return [
    // * Main
    {
      input: path.join(currentPackagePath, 'src', 'index.ts'),
      output: [
        {
          file: path.join(currentPackagePath, 'dist', 'index.mjs'),
          format: 'esm',
          sourcemap: false,
        },
      ],

      plugins: [
        alias({ entries: getAliases() }),
        replace(replaceOpts(currentPackagePath)),
        resolve(),
        commonjs(),
        typescript({ tsconfig: tsconfigPath }),
        terser({
          format: {
            beautify: true,
            indent_level: 2,
            comments: false, // remove comments
          },
          compress: {
            drop_console: true,
            dead_code: true, // ✅ Safe: remove dead code
            evaluate: true, // ✅ Safe: evaluate constant expressions
          },
          mangle: {
            properties: {
              regex: /^_/, // only mangle properties starting with '_'
            },
          },
        }),
      ],
      external,
    },
    // * Declarations
    {
      input: path.join(currentPackagePath, 'src', 'index.ts'),
      output: [{ file: path.join(currentPackagePath, 'dist', 'index.d.ts'), format: 'es' }],
      plugins: [
        alias({ entries: getAliases() }),
        replace(replaceOpts(currentPackagePath)),
        dts({ tsconfig: tsconfigPath }),
      ],
      external,
    },
  ];
};
