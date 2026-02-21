import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const packagesDir = path.join(import.meta.dirname, '..', 'packages');
export const getAliases = () => {
  const packageDirs = readdirSync(packagesDir);
  const aliasMap: Record<string, string> = {};
  for (const dir of packageDirs) {
    const jsonPath = path.join(packagesDir, dir, 'package.json');
    if (!existsSync(jsonPath)) {
      continue;
    }
    const json = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    aliasMap[json.name] = path.join(packagesDir, dir, 'src', 'index.ts');
    if (json.name === '@ktjs/core') {
      aliasMap[json.name + '/jsx'] = path.join(packagesDir, dir, 'src', 'index.ts');
      aliasMap[json.name + '/jsx-runtime'] = path.join(packagesDir, dir, 'src', 'jsx-runtime.ts');
      aliasMap[json.name + '/jsx-dev-runtime'] = path.join(packagesDir, dir, 'src', 'jsx-runtime.ts');
    } else if (json.name === 'kt.js') {
      aliasMap[json.name + '/jsx'] = path.join(packagesDir, dir, 'src', 'jsx.ts');
      aliasMap[json.name + '/jsx-runtime'] = path.join(packagesDir, dir, 'src', 'jsx-runtime.ts');
      aliasMap[json.name + '/jsx-dev-runtime'] = path.join(packagesDir, dir, 'src', 'jsx-runtime.ts');
    }
  }

  return Object.entries(aliasMap)
    .sort(([a], [b]) => b.length - a.length)
    .map(([find, replacement]) => ({ find, replacement }));
};
