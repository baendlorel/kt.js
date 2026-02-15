import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const workspaceRoot = path.join(import.meta.dirname, '..');
const packagesDir = path.join(import.meta.dirname, '..', 'packages');
const getAliases = () => {
  const packageDirs = readdirSync(packagesDir);
  const alias: Record<string, string> = {};
  for (const dir of packageDirs) {
    const jsonPath = path.join(packagesDir, dir, 'package.json');
    if (!existsSync(jsonPath)) {
      continue;
    }
    const json = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    alias[json.name] = path.join(packagesDir, dir, 'src', 'index.ts');
    if (json.name === '@ktjs/core' || json.name === 'kt.js') {
      alias[json.name + '/jsx'] = path.join(packagesDir, dir, 'src', 'jsx', 'index.ts');
      alias[json.name + '/jsx-runtime'] = path.join(packagesDir, dir, 'src', 'jsx', 'jsx-runtime.ts');
      alias[json.name + '/jsx-dev-runtime'] = path.join(packagesDir, dir, 'src', 'jsx', 'jsx-runtime.ts');
    }
  }
  return alias;
};

export function getVitestAliases() {
  return getAliases(); // & Ensure we include package aliases as well
}

export function getRollupAliases() {
  const alias: { entries: Array<{ find: RegExp | string; replacement: string }> } = { entries: [] };
  const sortedEntries = Object.entries(getAliases()).sort(([a], [b]) => b.length - a.length);
  for (const [find, replacement] of sortedEntries) {
    alias.entries.push({
      find,
      replacement: path.join(workspaceRoot, replacement),
    });
  }
  return alias;
}
