import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

import { ask, getPackageInfo, PackageInfo, Version } from './common/index.js';
import { buildWithInfo } from './build.js';

export async function publish(who: string | undefined) {
  const group = getPackageInfo(who);

  if (group.length === 0) {
    console.error(`No package selected for publish by '${who}'`);
    process.exit(1);
  }

  let maxVersion: Version = new Version('0.0.0');
  let maxVerLen = 0;
  const releasePlan = group.map((info) => {
    const nameVersion = `${info.name}@${info.version.toString()}`;
    maxVersion = Version.max(maxVersion, info.version);
    maxVerLen = Math.max(maxVerLen, nameVersion.length);
    return {
      info,
      oldVer: nameVersion,
      ver: info.version.duplicate().bumpPatch().toString(),
    };
  });

  console.log('Publish plan:');
  releasePlan.forEach((item) => console.log(`- ${item.oldVer.padEnd(maxVerLen, ' ')} -> ${item.ver}`));

  const goon = await ask(`Build + publish ${releasePlan.length} package(s), then bump all versions together?`);
  if (!goon) {
    console.log('Aborted.');
    return;
  }

  // * Here we modify group's json data, bump the versions
  group.forEach((info) => {
    info.json.version = maxVersion.duplicate().bumpPatch().toString();
    writeFileSync(info.jsonPath, JSON.stringify(info.json, null, 2), 'utf-8');
  });

  // ! Must do this separately to ensure all versions are bumped before building.
  // ! Otherwise inter-dependencies may cause build failures
  group.forEach(buildWithInfo);
  group.forEach(gitTag);

  const releaseInfo = group.map((info, i) => `${i}.${info.name}@${info.json.version}`).join('\n');
  execSync(`git add ${group.map((info) => `"${info.jsonPath}"`).join(' ')}`, { stdio: 'inherit' });
  execSync(`git commit -m "release: \n${releaseInfo}"`, { stdio: 'inherit' });
  console.log('Committed :', releaseInfo);
}

function gitTag(item: PackageInfo) {
  const publishedVer = `${item.name}@${item.json.version}`;
  execSync('pnpm publish --access public --no-git-checks', { stdio: 'inherit', cwd: item.path });
  console.log(`Published ${publishedVer}`);

  const tagExists = execSync(`git tag -l "${publishedVer}"`, { encoding: 'utf-8' }).trim().length > 0;
  if (tagExists) {
    console.warn(`Tag ${publishedVer} already exists, skip tagging.`);
  } else {
    execSync(`git tag "${publishedVer}"`, { stdio: 'inherit' });
  }
}
