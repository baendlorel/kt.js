import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

function generate() {
  const packagesDir = path.join(import.meta.dirname, '..', 'packages');
  const pluginsDir = path.join(import.meta.dirname, '..', 'plugins');
  const packagesDirNames = readdirSync(packagesDir, { withFileTypes: true });
  const pluginsDirNames = readdirSync(pluginsDir, { withFileTypes: true });

  const pkgPaths = [...packagesDirNames, ...pluginsDirNames]
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(dirent.parentPath, dirent.name));

  const list: any[] = [];
  for (const pkgPath of pkgPaths) {
    const pkgJson = path.join(pkgPath, 'package.json');
    if (!existsSync(pkgJson)) {
      continue;
    }

    const data = JSON.parse(readFileSync(pkgJson, 'utf-8'));
    data.isMonorepo = true;
    list.push(data);
  }

  const packages = { packages: list };

  writeFileSync(path.join(import.meta.dirname, '..', 'repo-list.json'), JSON.stringify(packages, null, 2));
}
generate();
