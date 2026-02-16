import { execSync } from 'node:child_process';
import { getPackageInfo } from './common/package-info.js';

export async function build(who: string | undefined) {
  const info = getPackageInfo(who);
  execSync(`pnpm exec tsx ./node_modules/rollup/dist/bin/rollup -c rollup.config.ts`, {
    stdio: 'inherit',
    env: info.env,
  });
}
