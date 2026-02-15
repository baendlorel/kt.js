import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const packagesDir = path.join(import.meta.dirname, '..', 'packages');
export function getVitestAliases() {
  const packageDirs = readdirSync(packagesDir);
  const alias: Record<string, string> = {};
  for (const dir of packageDirs) {
    const jsonPath = path.join(packagesDir, dir, 'package.json');
    if (!existsSync(jsonPath)) {
      continue;
    }
    const json = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    alias[json.name] = path.join(packagesDir, dir, 'src', 'index.ts');
  }
  return alias;
}

export function getRollupAliases() {
  const packageDirs = readdirSync(packagesDir);
  const alias: { entries: Array<{ find: RegExp | string; replacement: string }> } = { entries: [] };
  for (const dir of packageDirs) {
    const jsonPath = path.join(packagesDir, dir, 'package.json');
    if (!existsSync(jsonPath)) {
      continue;
    }
    const json = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    alias.entries.push({
      find: new RegExp(`^${json.name}`),
      replacement: path.join(packagesDir, dir, 'src'),
    });
  }
  return alias;
}
