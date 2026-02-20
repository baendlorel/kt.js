import { execSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { askYesNo } from './common/ask.js';
import { getPackageInfo, type PackageInfo } from './common/package-info.js';
import { build } from './build.js';

const packageRoot = join(import.meta.dirname, '..', 'packages');
const releaseOrder = ['shared', 'core', 'kt.js', 'router', 'shortcuts', 'mui', 'babel-plugin-ktjsx', 'vite-plugin-ktjsx', 'ts-plugin'];

const publishGroupMap = new Map<string, readonly string[]>([
  ['default', ['core', 'kt.js']],
  ['main', ['core', 'kt.js']],
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
  ['all', ['shared', 'core', 'kt.js', 'router', 'shortcuts', 'mui', 'babel-plugin-ktjsx', 'vite-plugin-ktjsx', 'ts-plugin']],
]);

const orderRank = new Map(releaseOrder.map((name, index) => [name, index]));

const normalizeTarget = (target: string) => {
  if (target.startsWith('@ktjs/')) {
    return target.slice('@ktjs/'.length);
  }
  return target;
};

const isKnownPackageDir = (name: string) => existsSync(join(packageRoot, name, 'package.json'));

function compareByReleaseOrder(a: string, b: string) {
  const aRank = orderRank.get(a);
  const bRank = orderRank.get(b);
  if (aRank === undefined && bRank === undefined) {
    return a.localeCompare(b);
  }
  if (aRank === undefined) {
    return 1;
  }
  if (bRank === undefined) {
    return -1;
  }
  return aRank - bRank;
}

function resolvePackageDirs(targets: readonly string[]) {
  const normalizedTargets = targets.length === 0 ? ['default'] : targets;
  const resolved: string[] = [];
  const seen = new Set<string>();

  const pushUnique = (name: string) => {
    if (!seen.has(name)) {
      seen.add(name);
      resolved.push(name);
    }
  };

  for (const targetRaw of normalizedTargets) {
    const target = targetRaw.trim();
    if (!target) {
      continue;
    }

    const group = publishGroupMap.get(target);
    if (group) {
      for (const packageDir of group) {
        pushUnique(packageDir);
      }
      continue;
    }

    const packageDir = normalizeTarget(target);
    if (isKnownPackageDir(packageDir)) {
      pushUnique(packageDir);
      continue;
    }

    const availableGroups = [...publishGroupMap.keys()].join(', ');
    throw new Error(`Unknown publish target "${target}". Available groups: ${availableGroups}`);
  }

  return resolved.sort(compareByReleaseOrder);
}

function toPackageInfoList(who: string | readonly string[] | undefined): PackageInfo[] {
  if (who === undefined) {
    return resolvePackageDirs([]).map((name) => getPackageInfo(name));
  }
  if (typeof who === 'string') {
    return resolvePackageDirs([who]).map((name) => getPackageInfo(name));
  }
  return resolvePackageDirs(who).map((name) => getPackageInfo(name));
}

function buildCommitMessage(packages: { name: string; nextVersion: string }[]) {
  if (packages.length === 1) {
    return `release: bump ${packages[0].name} to ${packages[0].nextVersion}`;
  }
  const joined = packages.map((pkg) => `${pkg.name}@${pkg.nextVersion}`).join(', ');
  return `release: bump ${joined}`;
}

export async function publish(who: string | readonly string[] | undefined) {
  let packages: PackageInfo[];
  try {
    packages = toPackageInfoList(who);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    process.exit(1);
  }

  if (packages.length === 0) {
    console.error('No package selected for publish.');
    process.exit(1);
  }

  const releasePlan = packages.map((pkg) => ({
    info: pkg,
    currentVersion: pkg.version.toString(),
    nextVersion: pkg.version.duplicate().bumpPatch().toString(),
  }));

  console.log('Publish plan:');
  for (const item of releasePlan) {
    console.log(`- ${item.info.name}@${item.currentVersion} -> ${item.nextVersion}`);
  }

  const goon = await askYesNo(`Build + publish ${releasePlan.length} package(s), then bump all versions together?`);
  if (!goon) {
    console.log('Aborted.');
    return;
  }

  for (const item of releasePlan) {
    await build(item.info);
  }

  for (const item of releasePlan) {
    execSync('pnpm publish --access public --no-git-checks', { stdio: 'inherit', cwd: item.info.path });
    console.log(`Published ${item.info.name}@${item.currentVersion}`);

    const tagName = `${item.info.name}@${item.currentVersion}`;
    const tagExists = execSync(`git tag -l "${tagName}"`, { encoding: 'utf-8' }).trim().length > 0;
    if (tagExists) {
      console.warn(`Tag ${tagName} already exists, skip tagging.`);
    } else {
      execSync(`git tag "${tagName}"`, { stdio: 'inherit' });
    }
  }

  for (const item of releasePlan) {
    item.info.json.version = item.nextVersion;
    writeFileSync(item.info.jsonPath, JSON.stringify(item.info.json, null, 2) + '\n', 'utf-8');
    console.log(`Bumped ${item.info.name} to version ${item.nextVersion}`);
  }

  const quotedPaths = releasePlan.map((item) => `"${item.info.jsonPath}"`).join(' ');
  execSync(`git add ${quotedPaths}`, { stdio: 'inherit' });
  execSync(`git commit -m "${buildCommitMessage(releasePlan.map((item) => ({ name: item.info.name, nextVersion: item.nextVersion })))}"`, {
    stdio: 'inherit',
  });
  console.log('Committed version bumps and finished release flow.');
}
