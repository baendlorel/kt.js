import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

import { askYesNo } from './common/ask.js';
import { getPackageInfo, type PackageInfo } from './common/package-info.js';
import { build } from './build.js';

export async function publish(who: string | PackageInfo | undefined) {
  if (!who) {
    console.error('getPackageInfo: No package specified.');
    process.exit(1);
  }

  if (typeof who === 'string') {
    who = getPackageInfo(who);
  }
  const currentVersionStr = who.version.toString();
  const nextVersionStr = who.version.duplicate().bumpPatch().toString();
  const tagName = `${who.name}@${currentVersionStr}`;

  console.log(`Build and publish:${who.name}@${currentVersionStr}`);
  console.log(`After publish, bump version to v${nextVersionStr}`);

  const goon = await askYesNo(`Publish ${who.name}@${currentVersionStr} and then bump to ${nextVersionStr}?`);

  if (!goon) {
    console.log('Aborted.');
    return;
  }

  await build(who);
  execSync('pnpm publish --access public --no-git-checks', { stdio: 'inherit', cwd: who.path });

  console.log(`Published ${who.name}@${currentVersionStr}`);

  const tagExists = execSync(`git tag -l "${tagName}"`, { encoding: 'utf-8' }).trim().length > 0;
  if (tagExists) {
    console.warn(`Tag ${tagName} already exists, skip tagging.`);
  } else {
    execSync(`git tag ${tagName}`, { stdio: 'inherit' });
  }

  who.json.version = nextVersionStr;
  writeFileSync(who.jsonPath, JSON.stringify(who.json, null, 2) + '\n', 'utf-8');
  console.log(`Bumped ${who.name} to version ${nextVersionStr}`);

  execSync(`git add "${who.jsonPath}"`, { stdio: 'inherit' });
  execSync(`git commit -m "release: bump ${who.name} to ${nextVersionStr}"`, { stdio: 'inherit' });
  console.log(`Committed version bump and finished release flow.`);

  // release example:
  // pnpm pub bind-params
}
