import { readFileSync } from 'node:fs';
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

const publishGroupMap = new Map<string | undefined, readonly string[]>([
  [undefined, ['core', 'kt.js']],
  ['core', ['core']],
  ['kt', ['kt.js']],
  ['shared', ['shared']],
  ['router', ['router']],
  ['mui', ['mui']],
  ['shortcuts', ['shortcuts']],
  ['plugin', ['babel-plugin-ktjsx']],
  ['vite-plugin', ['vite-plugin-ktjsx']],
  ['ts-plugin', ['ts-plugin']],
  ['runtime', ['shared', 'core', 'kt.js']],
  [
    'all',
    ['shared', 'core', 'kt.js', 'router', 'shortcuts', 'mui', 'babel-plugin-ktjsx', 'vite-plugin-ktjsx', 'ts-plugin'],
  ],
]);

export const getPackageInfo = (who: string | undefined): PackageInfo[] => {
  const group = publishGroupMap.get(who);
  if (!group) {
    console.error(`Unknown package group: ${who}`);
    process.exit(1);
  }

  return group.map((name) => {
    const packagePath = join(import.meta.dirname, '..', '..', 'packages', name);
    const packageJsonPath = join(packagePath, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    return {
      path: packagePath,
      jsonPath: packageJsonPath,
      version: new Version(packageJson.version),
      json: packageJson,
      name: packageJson.name as string,
      nameVer: `${packageJson.name}@${packageJson.version}`,
      env: { ...process.env, CURRENT_PKG_PATH: packagePath },
    };
  });
};
