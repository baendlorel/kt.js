#!/usr/bin/env tsx
import { readFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const workMap = new Map([
  [undefined, ['core', 'kt.js']],
  ['shared', ['shared']],
  ['mui', ['mui']],
  ['doc', ['example']],
  ['exp', ['example']],
  ['router', ['example']],
  ['shortcuts', ['shortcuts']],
  ['plugin', ['babel-plugin-ktjsx']],
  ['all', ['core', 'kt.js', 'babel-plugin-ktjsx', 'example', 'mui', 'router', 'shared', 'shortcuts']],
]);

async function build(who: string | undefined) {
  if (!workMap.has(who)) {
    console.error(`Unknown package group: ${who}`);
    return;
  }
  const packages = workMap.get(who)!;

  for (const dir of packages) {
    const packageJsonPath = join(import.meta.dirname, '..', 'packages', dir, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    execSync(`pnpm --filter ${packageJson.name} build`, { stdio: 'inherit' });
  }
}

const [who] = process.argv.slice(2);
build(who);
