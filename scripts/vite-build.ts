import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

import { dirs } from '../common/consts.js';
import { getPackageInfo, syncRootVersion, PackageInfo } from './package-info.js';

export function vitebuild(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

const config = dirs.configs.join('vite.config.ts');
const specialLibs = ['@ktjs/ts-plugin', void '@ktjs/kt-tsc', '@ktjs/example'].filter((t) => t !== undefined);

export function buildWithInfo(info: PackageInfo) {
  console.log(`Vite Building package: ${info.name}`);

  const dist = info.path.tryJoin('dist');
  if (dist) {
    fs.rmSync(dist, { recursive: true, force: true });
  }

  if (specialLibs.includes(info.name)) {
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
    return;
  }

  const actualConfig = info.path.tryJoin('vite.config.ts') ?? config;
  execSync(`vite build --config ${actualConfig.safe()} ${info.path.safe()}`, { stdio: 'inherit', env: info.env });
}
