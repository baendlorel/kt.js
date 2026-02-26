import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { Version } from './version.js';

export interface PackageInfo {
  path: string;
  jsonPath: string;
  version: Version;
  json: any;
  name: string;
  nameVer: string;
  env: {
    CURRENT_PKG_PATH: string;
    TZ?: string | undefined;
  };
}

const publishGroupMap = new Map<string | undefined, string[]>([
  [undefined, ['core', 'kt.js', 'shared']],
  ['plugin', ['vite', 'babel', 'transformer', 'create']],
]);

const getAbsolutePath = (who: string) => {
  const path1 = path.join(import.meta.dirname, '..', '..', 'packages', who);
  const path2 = path.join(import.meta.dirname, '..', '..', 'plugins', who);
  if (existsSync(path1)) {
    return path1;
  }
  if (existsSync(path2)) {
    return path2;
  }
  console.error(`Package "${who}" does not exist in either "packages" or "plugins" directory.`);
  process.exit(1);
};

const getGroup = (who: string | undefined): string[] => {
  const raw = publishGroupMap.get(who);
  if (raw) {
    return raw.map(getAbsolutePath);
  }
  if (typeof who === 'string') {
    return [getAbsolutePath(who)];
  } else {
    console.error(`Unknown package group: ${who}`);
    process.exit(1);
  }
};

export const getPackageInfo = (who: string | undefined): PackageInfo[] =>
  getGroup(who).map((absolutePath) => {
    const packageJsonPath = path.join(absolutePath, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    return {
      path: absolutePath,
      jsonPath: packageJsonPath,
      version: new Version(packageJson.version),
      json: packageJson,
      name: packageJson.name as string,
      nameVer: `${packageJson.name}@${packageJson.version}`,
      env: { ...process.env, CURRENT_PKG_PATH: absolutePath },
    };
  });
