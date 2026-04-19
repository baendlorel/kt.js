import fs from 'node:fs';
import path from 'node:path';
import { rimraf } from 'rimraf';
import typescript from '@rollup/plugin-typescript';

const packagePath = process.env.CURRENT_PKG_PATH ?? import.meta.dirname;
const tsconfigPath = path.join(packagePath, 'tsconfig.json');
const repoPath = path.resolve(packagePath, '..', '..');
const RAW_QUERY = '?raw';
const KTJS_DEPENDENCY_VERSION_TOKEN = '__KTJS_DEPENDENCY_VERSIONS__';

const createVersionToken = (packageName) =>
  `__VERSION_${packageName
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase()}__`;

const collectKtjsDependencyVersions = () => {
  const versions = {};
  const directories = [path.join(repoPath, 'packages'), path.join(repoPath, 'plugins')];

  for (const directory of directories) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const packageJsonPath = path.join(directory, entry.name, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        continue;
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      if (typeof packageJson.name !== 'string' || typeof packageJson.version !== 'string') {
        continue;
      }
      if (packageJson.name !== 'kt.js' && !packageJson.name.startsWith('@ktjs/')) {
        continue;
      }

      versions[packageJson.name] = `^${packageJson.version}`;
    }
  }

  return versions;
};

const ktjsDependencyVersions = collectKtjsDependencyVersions();

const applyVersionPlaceholders = (content) => {
  let nextContent = content;

  for (const [packageName, version] of Object.entries(ktjsDependencyVersions)) {
    nextContent = nextContent.replaceAll(createVersionToken(packageName), version);
  }

  return nextContent;
};

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
    const content = applyVersionPlaceholders(fs.readFileSync(sourcePath, 'utf-8'));
    return `export default ${JSON.stringify(content)};`;
  },
});

const injectKtjsDependencyVersionsPlugin = () => ({
  name: 'inject-ktjs-dependency-versions',
  transform(code, id) {
    if (path.resolve(id) !== path.join(packagePath, 'src', 'index.ts')) {
      return null;
    }

    return {
      code: code.replace(
        KTJS_DEPENDENCY_VERSION_TOKEN,
        JSON.stringify(ktjsDependencyVersions),
      ),
      map: null,
    };
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
    injectKtjsDependencyVersionsPlugin(),
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
