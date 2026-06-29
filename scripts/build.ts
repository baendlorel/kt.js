import fs from 'node:fs';
import { execSync } from 'node:child_process';

import { getPackageInfo, syncRootVersion, PackageInfo } from './package-info.js';

export function build(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

const config = import.meta.dirname.join('..', 'tsdown.config.ts');
const specialLibs = ['@ktjs/ts-plugin', void '@ktjs/kt-tsc', '@ktjs/example'].filter((t) => t !== undefined);

export function buildWithInfo(info: PackageInfo) {
  console.log(`Building package: ${info.name}`);

  const dist = info.path.tryJoin('dist');
  if (dist) {
    fs.rmSync(dist, { recursive: true, force: true });
  }

  if (specialLibs.includes(info.name)) {
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
    return;
  }

  const actualConfig = info.path.tryJoin('tsdown.config.ts') ?? config;
  execSync(`tsdown --config ${actualConfig}`, { stdio: 'inherit', cwd: info.path, env: info.env });
}
