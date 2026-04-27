import fs from 'node:fs';
import assert from 'node:assert';
import { execSync } from 'node:child_process';

import { getPackageInfo, PackageInfo, syncRootPackageVersionFromCore } from './common/index.js';
import { dirs } from '../common/consts.js';

export function vitebuild(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootPackageVersionFromCore(group);
  group.forEach(buildWithInfo);
}

const config = dirs.root.join('configs', 'vite-build', 'vite.config.ts');
assert(fs.existsSync(config), `Vite config file not found at ${config}`);

function buildWithInfo(info: PackageInfo) {
  console.log(`Vite Building package: ${info.name}`);
  execSync(`vite build --config ${config} ${info.path}`, { stdio: 'inherit', env: info.env });
}
