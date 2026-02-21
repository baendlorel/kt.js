import { execSync } from 'node:child_process';
import { getPackageInfo, PackageInfo } from './common/index.js';
import path from 'node:path';

export function build(who: string | undefined) {
  // special cases
  // if (who === 'ts-plugin' || (typeof who === 'object' && who.name === '@ktjs/ts-plugin')) {
  //   rmSync('packages/ts-plugin/dist', { recursive: true, force: true });
  //   execSync('pnpm --filter @ktjs/ts-plugin run build', { stdio: 'inherit' });
  //   return;
  // }

  // normal cases
  const group = getPackageInfo(who);
  group.forEach(buildWithInfo);
}

export function buildWithInfo(info: PackageInfo) {
  console.log(`Building package: ${info.name}`);
  const configPath = path.join(import.meta.dirname, '..', 'configs', `rollup.config.base.mjs`);
  execSync(`rollup --config ${configPath}`, { stdio: 'inherit', env: info.env });
}
