#!/usr/bin/env tsx
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { askYesNo } from './ask';
import { execSync } from 'child_process';

const workMap = new Map([
  [undefined, ['core', 'kt.js']],
  ['tsplugin', ['tsplugin']],
  ['shared', ['shared']],
  ['mui', ['mui']],
  ['doc', ['example']],
  ['exp', ['example']],
  ['router', ['example']],
  ['plugin', ['babel-plugin-ktjsx']],
  ['all', ['core', 'kt.js', 'babel-plugin-ktjsx', 'example', 'mui', 'router', 'shared', 'shortcuts']],
]);

class Version {
  static max(...versions: Version[]) {
    return versions.reduce((max, v) => {
      if (v.major > max.major) return v;
      if (v.major < max.major) return max;
      if (v.minor > max.minor) return v;
      if (v.minor < max.minor) return max;
      if (v.patch > max.patch) return v;
      return max;
    }, versions[0]);
  }

  major: number;
  minor: number;
  patch: number;

  constructor(versionStr: string) {
    const [major, minor, patch] = versionStr.split('.').map(Number);
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  bumpPatch() {
    this.patch += 1;
    return this;
  }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  duplicate() {
    return new Version(this.toString());
  }
}

async function publish(who: string | undefined) {
  if (!workMap.has(who)) {
    console.error(`Unknown package group: ${who}`);
    return;
  }
  const packages = workMap.get(who)!;

  const info = packages.map((dir) => {
    const packageJsonPath = join(import.meta.dirname, '..', 'packages', dir, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    return {
      path: packageJsonPath,
      version: new Version(packageJson.version),
      json: packageJson,
      name: packageJson.name as string,
    };
  });

  const newVersionStr = Version.max(...info.map((i) => i.version))
    .duplicate()
    .bumpPatch()
    .toString();

  console.log(`Build and publish: ${info.map((p) => `${p.name}@${p.json.version}`).join(', ')} -> v${newVersionStr}`);

  const goon = await askYesNo(`Publish version ${newVersionStr} for packages: ${info.map((i) => i.name).join(', ')}?`);

  if (!goon) {
    console.log('Aborted.');
    return;
  }

  for (const p of info) {
    p.json.version = newVersionStr;
    writeFileSync(p.path, JSON.stringify(p.json, null, 2) + '\n', 'utf-8');
    console.log(`Updated ${p.name} to version ${newVersionStr}`);
  }

  execSync(`git commit -am "release: ${newVersionStr}"`, { stdio: 'inherit' });
  execSync(`git tag v${newVersionStr}`, { stdio: 'inherit' });

  for (const p of info) {
    execSync(`pnpm --filter ${p.name} build`, { stdio: 'inherit' });
    execSync(`pnpm --filter ${p.name} publish --no-git-checks --access public`, { stdio: 'inherit' });
    console.log(`Published ${p.name}@${newVersionStr}`);
  }

  // pnpm --filter @ktjs/router build && pnpm --filter @ktjs/router publish --no-git-checks --access public
  // pnpm --filter @ktjs/example dev  --no-git-checks
}

const [who] = process.argv.slice(2);
console.log(process.argv);
publish(who);
