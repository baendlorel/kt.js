import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export function syncReadme(_who?: string) {
  const rootPath = path.join(import.meta.dirname, '..');
  const rootReadmePath = path.join(rootPath, 'README.md');
  const rootReadme = readFileSync(rootReadmePath, 'utf-8');
  const readmePaths = [rootReadmePath];

  ['packages', 'plugins'].forEach((baseDir) => {
    const basePath = path.join(rootPath, baseDir);
    if (!existsSync(basePath)) {
      return;
    }

    readdirSync(basePath, { withFileTypes: true }).forEach((entry) => {
      if (!entry.isDirectory()) {
        return;
      }

      const packagePath = path.join(basePath, entry.name);
      if (!existsSync(path.join(packagePath, 'package.json'))) {
        return;
      }

      const readmePath = path.join(packagePath, 'README.md');
      if (!existsSync(readmePath) || readFileSync(readmePath, 'utf-8') !== rootReadme) {
        writeFileSync(readmePath, rootReadme, 'utf-8');
      }
      readmePaths.push(readmePath);
    });
  });

  console.log(`Synced root README.md to ${readmePaths.length - 1} sub-package(s).`);
  return readmePaths;
}
