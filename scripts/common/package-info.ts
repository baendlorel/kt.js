import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Version } from './version.js';

const tagMap = new Map([
  [undefined, ['core', 'kt.js']],
  ['core', ['core']],
  ['plugin', ['babel-plugin-ktjsx']],
  ['shared', ['shared']],
  ['router', ['router']],
  ['mui', ['mui']],
  ['exp', ['example']],
  ['shortcuts', ['shortcuts']],
  ['all', ['kt.js', 'core', 'babel-plugin-ktjsx', 'example', 'mui', 'router', 'shared', 'shortcuts']],
]);

export const getTagName = (who: string | undefined) => {
  const tagPackageDir = tagMap.get(who)![0];
  const packageJsonPath = join(import.meta.dirname, '..', '..', 'packages', tagPackageDir, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  return packageJson.name as string;
};

export interface PackageInfo {
  path: string;
  jsonPath: string;
  version: Version;
  json: any;
  name: string;
  env: {
    LIB_PACKAGE_PATH: string;
    TZ?: string | undefined;
  };
}

export const getPackageInfo = (who: string | undefined): PackageInfo => {
  const packagePath = getPackagePath(who);
  const packageJsonPath = join(packagePath, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  return {
    path: packagePath,
    jsonPath: packageJsonPath,
    version: new Version(packageJson.version),
    json: packageJson,
    name: packageJson.name as string,
    env: { ...process.env, LIB_PACKAGE_PATH: packagePath },
  };
};

export const getPackagePath = (who: string | undefined) => {
  if (!who) {
    console.log('getPackagePath: No package specified.');
    process.exit(1);
  }
  return join(import.meta.dirname, '..', '..', 'packages', who);
};

export const externalFromPeerDependencies = (packagePath: string) => {
  if (!packagePath) {
    return [];
  }

  const packageJsonPath = join(packagePath, 'package.json');
  if (!existsSync(packageJsonPath)) {
    return [];
  }

  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as {
    dependencies?: Record<string, string>;
    optionalDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
  };

  const packages = [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.optionalDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ];

  if (packages.length === 0) {
    return [];
  }

  return (id: string) => {
    const normalized = id.startsWith('node:') ? id.slice(5) : id;
    return packages.some((name) => normalized === name || normalized.startsWith(`${name}/`));
  };
};
