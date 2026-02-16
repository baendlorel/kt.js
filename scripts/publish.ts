import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

import { askYesNo } from './common/ask.js';
import { getPackageInfo } from './common/package-info.js';

export async function publish(who: string | undefined) {
  const info = getPackageInfo(who);
  const currentVersionStr = info.version.toString();
  const nextVersionStr = info.version.duplicate().bumpPatch().toString();
  const tagName = `${info.name}@${currentVersionStr}`;

  console.log(`Build and publish:${info.name}@${currentVersionStr}`);
  console.log(`After publish, bump version to v${nextVersionStr}`);

  const goon = await askYesNo(`Publish ${info.name}@${currentVersionStr} and then bump to ${nextVersionStr}?`);

  if (!goon) {
    console.log('Aborted.');
    return;
  }

  execSync('vite build --config vite.config.ts', {
    stdio: 'inherit',
    env: info.env,
  });
  execSync(`npm publish ${info.path} --access public`, { stdio: 'inherit', cwd: info.path });

  console.log(`Published ${info.name}@${currentVersionStr}`);

  const tagExists = execSync(`git tag -l "${tagName}"`, { encoding: 'utf-8' }).trim().length > 0;
  if (tagExists) {
    console.warn(`Tag ${tagName} already exists, skip tagging.`);
  } else {
    execSync(`git tag ${tagName}`, { stdio: 'inherit' });
  }

  info.json.version = nextVersionStr;
  writeFileSync(info.jsonPath, JSON.stringify(info.json, null, 2) + '\n', 'utf-8');
  console.log(`Bumped ${info.name} to version ${nextVersionStr}`);

  execSync(`git add "${info.jsonPath}"`, { stdio: 'inherit' });
  execSync(`git commit -m "release: bump ${info.name} to ${nextVersionStr}"`, { stdio: 'inherit' });
  console.log(`Committed version bump and finished release flow.`);

  // release example:
  // pnpm pub bind-params
}
