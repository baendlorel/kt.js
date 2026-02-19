import { execSync } from 'node:child_process';
import { getPackageInfo, type PackageInfo } from './common/package-info.js';

export async function build(who: string | PackageInfo | undefined) {
  if (!who) {
    console.error('getPackageInfo: No package specified.');
    process.exit(1);
  }

  // special cases
  if (who === 'ts-plugin') {
    execSync('pnpm --filter @ktjs/ts-plugin run build', { stdio: 'inherit' });
  }

  // normal cases
  if (typeof who === 'string') {
    who = getPackageInfo(who);
  }
  execSync('vite build --config vite.config.ts', { stdio: 'inherit', env: who.env });
}
