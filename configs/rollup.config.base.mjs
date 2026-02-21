import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import path from 'node:path';
import { existsSync } from 'node:fs';

const getTSConfig = (libPath) => {
  const tsconfigBuildPath = path.join(libPath, 'tsconfig.build.json');
  const tsconfigPath = path.join(libPath, 'tsconfig.json');
  return existsSync(tsconfigBuildPath) ? tsconfigBuildPath : tsconfigPath;
};

/**
 * Basic Rollup config for KT.js packages
 * @type {(commandLineArgs:Record<string,string[]>) => import('rollup').RollupOptions[]}
 */
export default (commandLineArgs) => {
  const libPath = process.env.CURRENT_PKG_PATH;
  if (!libPath) {
    console.error('Error: CURRENT_PKG_PATH environment variable is not set.');
    process.exit(1);
  }

  return [
    {
      input: path.join(libPath, 'src', 'index.ts'),
      output: [
        {
          file: path.join(libPath, 'dist', 'index.js'),
          format: 'esm', // ES module output
          sourcemap: true,
        },
      ],
      plugins: [resolve(), commonjs(), typescript({ tsconfig: getTSConfig(libPath) }), void terser()].filter(Boolean),
      external: [], // Add external dependencies here
    },
  ];
};
