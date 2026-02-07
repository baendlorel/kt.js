#!/usr/bin/env tsx
import { readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { askYesNo } from './common/ask.js';
import { workMap } from './common/consts.js';
import { Version } from './common/version.js';

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

    // & special deal with tsplugin place
    if (p.name === '@ktjs/ts-plugin-jsx-dom') {
      console.log('Moving dist/index.js to index.js for ts-plugin-jsx-dom');
      const distIndexJSPath = join(import.meta.dirname, '..', 'packages', 'ts-plugin-jsx-dom', 'dist', 'index.js');
      const distIndexJSPath2 = join(import.meta.dirname, '..', 'packages', 'ts-plugin-jsx-dom', 'index.js');
      renameSync(distIndexJSPath, distIndexJSPath2);
    }

    execSync(`pnpm --filter ${p.name} publish --no-git-checks --access public`, { stdio: 'inherit' });
    console.log(`Published ${p.name}@${newVersionStr}`);
  }

  // pnpm --filter @ktjs/router build && pnpm --filter @ktjs/router publish --no-git-checks --access public
  // pnpm --filter @ktjs/example dev  --no-git-checks
}

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

const task = process.argv[2];
const [who] = process.argv.slice(3);
if (task === '--publish') {
  publish(who);
} else if (task === '--build') {
  build(who);
} else {
  console.error(`Unknown task: ${task}`);
}
