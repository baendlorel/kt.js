import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Version } from './version.js';

const workMap = new Map([
  [undefined, ['core', 'kt.js']],
  ['plugin', ['babel-plugin-ktjsx']],
  ['shared', ['shared']],
  ['router', ['router']],
  ['mui', ['mui']],
  ['exp', ['example']],
  ['shortcuts', ['shortcuts']],
  [
    'all',
    ['kt.js', 'core', 'babel-plugin-ktjsx', 'ts-plugin-jsx-dom', 'example', 'mui', 'router', 'shared', 'shortcuts'],
  ],
]);

const tagMap = new Map([
  [undefined, ['kt.js']],
  ['plugin', ['babel-plugin-ktjsx']],
  ['shared', ['shared']],
  ['router', ['router']],
  ['mui', ['mui']],
  ['exp', ['example']],
  ['shortcuts', ['shortcuts']],
  [
    'all',
    ['kt.js', 'core', 'babel-plugin-ktjsx', 'ts-plugin-jsx-dom', 'example', 'mui', 'router', 'shared', 'shortcuts'],
  ],
]);

export const getTagName = (who: string | undefined) => {
  const tagPackageDir = tagMap.get(who)![0];
  const packageJsonPath = join(import.meta.dirname, '..', '..', 'packages', tagPackageDir, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  return packageJson.name as string;
};

export const getPackageGroup = (who: string | undefined) => {
  if (!workMap.has(who)) {
    console.error(`Unknown package group: ${who}`);
    process.exit(1);
  }
  const packages = workMap.get(who)!;
  return packages.map((dir) => {
    const packageJsonPath = join(import.meta.dirname, '..', '..', 'packages', dir, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    return {
      path: packageJsonPath,
      version: new Version(packageJson.version),
      json: packageJson,
      name: packageJson.name as string,
    };
  });
};
