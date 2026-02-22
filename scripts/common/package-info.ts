import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
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
  [undefined, ['core', 'kt.js']],
  ['plugin', ['vite', 'babel', 'transformer']],
]);

const getGroup = (who: string | undefined): string[] => {
  const raw = publishGroupMap.get(who);
  if (raw) {
    return raw;
  }
  if (typeof who === 'string' && existsSync(join(import.meta.dirname, '..', '..', 'packages', who))) {
    const absolutePathInPackage = join(import.meta.dirname, '..', '..', 'packages', who);
    const absolutePathInPlugins = join(import.meta.dirname, '..', '..', 'plugins', who);
    if (existsSync(absolutePathInPackage)) {
      return [absolutePathInPackage];
    }
    if (existsSync(absolutePathInPlugins)) {
      return [absolutePathInPlugins];
    }
    console.error(`Package "${who}" does not exist in either "packages" or "plugins" directory.`);
    process.exit(1);
  } else {
    console.error(`Unknown package group: ${who}`);
    process.exit(1);
  }
};

export const getPackageInfo = (who: string | undefined): PackageInfo[] =>
  getGroup(who).map((absolutePath) => {
    const packageJsonPath = join(absolutePath, 'package.json');
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
