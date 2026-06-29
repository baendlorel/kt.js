import fs from 'node:fs';
import { execSync } from 'node:child_process';

import { dirs } from '../common/consts.js';
import { getPackageInfo, syncRootVersion, PackageInfo } from './package-info.js';

export function build(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

const config = dirs.root.join('tsdown.config.ts');
const specialLibs = ['@ktjs/ts-plugin', void '@ktjs/kt-tsc', '@ktjs/example'].filter((t) => t !== undefined);

export function buildWithInfo(info: PackageInfo) {
  console.log(`Building package: ${info.name}`);

  const dist = info.path.join('dist').existsOr();
  if (dist) {
    fs.rmSync(dist, { recursive: true, force: true });
  }

  if (specialLibs.includes(info.name)) {
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
    return;
  }

  const actualConfig = info.path.join('tsdown.config.ts').existsOr(config);
  execSync(`tsdown --config-loader tsx --config ${actualConfig.safe()}`, {
    stdio: 'inherit',
    cwd: info.path,
    env: info.env,
  });
}
