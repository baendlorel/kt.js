import { execSync } from 'node:child_process';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { getPackageInfo, PackageInfo, syncRootVersion } from './common/index.js';

export function build(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

export function buildWithInfo(info: PackageInfo) {
  console.log(`Building package: ${info.name}`);
  if (['@ktjs/ts-plugin', '@ktjs/kt-tsc', '@ktjs/example', '@ktjs/mui'].includes(info.name)) {
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
    return;
  }

  const baseConfigPath = path.join(import.meta.dirname, '..', 'configs', `rollup.config.base.js`);
  if (!existsSync(baseConfigPath)) {
    console.log('Base rollup config not found, running prebuild to generate it...');
    execSync('tsc -p ./configs/tsconfig.rollup-base.json', { stdio: 'inherit' });
  }

  const localConfigPath = path.join(info.path, `rollup.config.mjs`);
  const configPath = existsSync(localConfigPath) ? localConfigPath : baseConfigPath;
  execSync(`rollup --config ${configPath}`, { stdio: 'inherit', env: info.env });
}
