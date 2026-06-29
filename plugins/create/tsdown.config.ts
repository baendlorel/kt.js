import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'tsdown';

const packagePath = import.meta.dirname;
const repoPath = path.resolve(packagePath, '..', '..');
const rawQuery = '?raw';
const ktjsDependencyVersionToken = '__KTJS_DEPENDENCY_VERSIONS__';

const createVersionToken = (packageName: string): string =>
  `__VERSION_${packageName
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toUpperCase()}__`;

const collectKtjsDependencyVersions = (): Record<string, string> => {
  const versions: Record<string, string> = {};
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

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')) as {
        name?: string;
        version?: string;
      };

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

const applyVersionPlaceholders = (content: string): string => {
  let nextContent = content;

  for (const [packageName, version] of Object.entries(ktjsDependencyVersions)) {
    nextContent = nextContent.replaceAll(createVersionToken(packageName), version);
  }

  return nextContent;
};

const rawPlugin = () => ({
  name: 'raw-import',
  resolveId(source: string, importer?: string) {
    if (!source.endsWith(rawQuery)) {
      return null;
    }

    const sourcePath = source.slice(0, -rawQuery.length);
    if (path.isAbsolute(sourcePath)) {
      return `${sourcePath}${rawQuery}`;
    }
    if (!sourcePath.startsWith('.')) {
      return null;
    }

    const basePath = importer ? path.dirname(importer) : path.join(packagePath, 'src');
    return `${path.resolve(basePath, sourcePath)}${rawQuery}`;
  },
  load(id: string) {
    if (!id.endsWith(rawQuery)) {
      return null;
    }

    const sourcePath = id.slice(0, -rawQuery.length);
    const content = applyVersionPlaceholders(fs.readFileSync(sourcePath, 'utf-8'));
    return `export default ${JSON.stringify(content)};`;
  },
});

const injectKtjsDependencyVersionsPlugin = () => ({
  name: 'inject-ktjs-dependency-versions',
  transform(code: string, id: string) {
    if (path.resolve(id) !== path.join(packagePath, 'src', 'index.ts')) {
      return null;
    }

    return {
      code: code.replace(ktjsDependencyVersionToken, JSON.stringify(ktjsDependencyVersions)),
      map: null,
    };
  },
});

export default defineConfig({
  entry: [{ index: path.join(packagePath, 'src', 'index.ts') }],
  format: ['esm'],
  dts: false,
  clean: true,
  sourcemap: true,
  target: 'node24',
  banner: '#!/usr/bin/env node',
  plugins: [rawPlugin(), injectKtjsDependencyVersionsPlugin()],
  deps: {
    neverBundle: [/^node:/],
  },
});
