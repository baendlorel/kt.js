import { execSync } from 'node:child_process';
import { getPackageInfo } from './common/package-info.js';

export async function check(who: string | undefined) {
  const info = getPackageInfo(who);

  info.forEach((pkg) => {
    try {
      execSync(`tsc --project ${JSON.stringify(pkg.path)} --noEmit`, { stdio: 'inherit', env: pkg.env });
    } catch {
      // do nothing, the error is already printed by tsc
    }
  });
}
