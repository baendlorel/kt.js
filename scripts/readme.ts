import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';

import { dirs } from '../common/consts.js';

export function syncReadme(_who?: string) {
  const rootReadmePath = dirs.root.join('documents', 'README.SYNC.md');
  const rootReadme = readFileSync(rootReadmePath, 'utf-8');
  const readmePaths = [rootReadmePath];

  ['packages', 'plugins'].forEach((baseDir) => {
    const basePath = dirs.root.join(baseDir);
    if (!existsSync(basePath)) {
      return;
    }

    readdirSync(basePath, { withFileTypes: true }).forEach((entry) => {
      if (!entry.isDirectory()) {
        return;
      }

      const packagePath = basePath.join(entry.name);
      if (!existsSync(packagePath.join('package.json'))) {
        return;
      }

      const readmePath = packagePath.join('README.md');
      if (!existsSync(readmePath) || readFileSync(readmePath, 'utf-8') !== rootReadme) {
        writeFileSync(readmePath, rootReadme, 'utf-8');
      }
      readmePaths.push(readmePath);
    });
  });

  console.log(`Synced root README.md to ${readmePaths.length - 1} sub-package(s).`);
  return readmePaths;
}
