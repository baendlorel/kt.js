import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

import { getPackageInfo, syncRootVersion, PackageInfo } from './package-info.js';

export function rollupBuild(who: string | undefined) {
  const group = getPackageInfo(who);
  syncRootVersion(group);
  group.forEach(buildWithInfo);
}

function buildWithInfo(info: PackageInfo) {
  console.log(`Building package: ${info.name}`);
  const dist = info.path.tryJoin('dist');
  if (dist) {
    fs.rmSync(dist, { recursive: true, force: true });
  }

  if (['@ktjs/ts-plugin', '@ktjs/kt-tsc', '@ktjs/example', '@ktjs/mui'].includes(info.name)) {
    execSync(`pnpm --filter ${info.name} run build`, { stdio: 'inherit', env: info.env });
    return;
  }

  const baseConfigPath = path.join(import.meta.dirname, '..', 'configs', `rollup.config.base.js`);
  if (!fs.existsSync(baseConfigPath)) {
    console.log('Base rollup config not found, running prebuild to generate it...');
    execSync('tsc -p ./configs/tsconfig.rollup-base.json', { stdio: 'inherit' });
  }

  const localConfigPath = path.join(info.path, `rollup.config.mjs`);
  const configPath = fs.existsSync(localConfigPath) ? localConfigPath : baseConfigPath;
  execSync(`rollup --config ${configPath}`, { stdio: 'inherit', env: info.env });
}
