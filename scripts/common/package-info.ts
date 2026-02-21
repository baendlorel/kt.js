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
  ['core', ['core']],
  ['kt.js', ['kt.js']],
  ['shared', ['shared']],
  ['router', ['router']],
  ['mui', ['mui']],
  ['shortcuts', ['shortcuts']],
  ['transformer', ['transformer']],
  ['babel-plugin-ktjsx', ['babel-plugin-ktjsx']],
  ['vite-plugin-ktjsx', ['vite-plugin-ktjsx']],
  ['ts-plugin', ['ts-plugin']],
  ['runtime', ['shared', 'core', 'kt.js']],
  [
    'all',
    [
      'shared',
      'core',
      'kt.js',
      'router',
      'shortcuts',
      'mui',
      'transformer',
      'babel-plugin-ktjsx',
      'vite-plugin-ktjsx',
      'ts-plugin',
    ],
  ],
]);

const getGroup = (who: string | undefined): string[] => {
  const raw = publishGroupMap.get(who);
  if (raw) {
    return raw;
  }
  if (typeof who === 'string' && existsSync(join(import.meta.dirname, '..', '..', 'packages', who))) {
    return [who];
  } else {
    console.error(`Unknown package group: ${who}`);
    process.exit(1);
  }
};

export const getPackageInfo = (who: string | undefined): PackageInfo[] =>
  getGroup(who).map((name) => {
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
