import { execSync } from 'node:child_process';
import { getPackageInfo, PackageInfo, syncRootPackageVersionFromCore } from './common/index.js';

export function vitebuild(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootPackageVersionFromCore(group);
  group.forEach(buildWithInfo);
}

function buildWithInfo(info: PackageInfo) {
  console.log(`Vite Building package: ${info.name}`);
  execSync(`pnpm --filter ${info.name} run vitebuild`, { stdio: 'inherit', env: info.env });
}
