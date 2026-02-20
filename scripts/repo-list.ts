import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

function generate() {
  const packagesDir = path.join(import.meta.dirname, '..', 'packages');
  const names = readdirSync(packagesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const list: any[] = [];
  for (const name of names) {
    const pkgPath = path.join(packagesDir, name, 'package.json');
    if (!existsSync(pkgPath)) {
      continue;
    }

    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    pkg.isMonorepo = true;
    list.push(pkg);
  }

  const packages = { packages: list };

  writeFileSync(path.join(import.meta.dirname, '..', 'repo-list.json'), JSON.stringify(packages, null, 2));
}
generate();
