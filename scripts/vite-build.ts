import { execSync } from 'node:child_process';
import { dirs } from '../common/consts.js';
import { getPackageInfo, syncRootVersion, PackageInfo } from './package-info.js';

export function vitebuild(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

const config = dirs.root.join('configs', 'vite-build', 'vite.config.ts');

export function buildWithInfo(info: PackageInfo) {
  console.log(`Vite Building package: ${info.name}`);
  // , '@ktjs/mui'
  if (['@ktjs/ts-plugin', '@ktjs/kt-tsc', '@ktjs/example'].includes(info.name)) {
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
  } else {
    execSync(`vite build --config ${config.safe()} ${info.path.safe()}`, { stdio: 'inherit', env: info.env });
  }
}
