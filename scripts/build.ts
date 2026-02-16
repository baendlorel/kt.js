import { execSync } from 'node:child_process';
import { getPackageInfo } from './common/package-info.js';

export async function build(who: string | undefined) {
  const info = getPackageInfo(who);
  execSync('vite build --config vite.config.ts', { stdio: 'inherit', env: info.env });
}
