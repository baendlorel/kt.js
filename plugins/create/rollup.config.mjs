import fs from 'node:fs';
import path from 'node:path';
import { rimraf } from 'rimraf';
import typescript from '@rollup/plugin-typescript';

const packagePath = process.env.CURRENT_PKG_PATH ?? import.meta.dirname;
const tsconfigPath = path.join(packagePath, 'tsconfig.json');
const RAW_QUERY = '?raw';

await rimraf(path.join(packagePath, 'dist'));

const rawPlugin = () => ({
  name: 'raw-import',
  resolveId(source, importer) {
    if (!source.endsWith(RAW_QUERY)) {
      return null;
    }

    const sourcePath = source.slice(0, -RAW_QUERY.length);
    if (path.isAbsolute(sourcePath)) {
      return `${sourcePath}${RAW_QUERY}`;
    }
    if (!sourcePath.startsWith('.')) {
      return null;
    }

    const basePath = importer ? path.dirname(importer) : path.join(packagePath, 'src');
    return `${path.resolve(basePath, sourcePath)}${RAW_QUERY}`;
  },
  load(id) {
    if (!id.endsWith(RAW_QUERY)) {
      return null;
    }
    const sourcePath = id.slice(0, -RAW_QUERY.length);
    const content = fs.readFileSync(sourcePath, 'utf-8');
    return `export default ${JSON.stringify(content)};`;
  },
});

export default {
  input: path.join(packagePath, 'src', 'index.ts'),
  output: {
    file: path.join(packagePath, 'dist', 'index.mjs'),
    format: 'esm',
    sourcemap: true,
    banner: '#!/usr/bin/env node',
  },
  external: [/^node:/],
  plugins: [
    rawPlugin(),
    typescript({
      tsconfig: tsconfigPath,
      compilerOptions: {
        composite: false,
        incremental: false,
        declaration: false,
      },
    }),
  ],
};
