import { execSync } from 'node:child_process';
import { getPackageInfo } from './package-info.js';

export async function check(who: string | undefined) {
  const info = getPackageInfo(who);
  execSync(`clear`, { stdio: 'inherit' });

  info.forEach((pkg) => {
    const jsonPath = pkg.path.join('tsconfig.build.json').existsOr(pkg.path.join('tsconfig.json'));
    try {
      execSync(`tsc --project ${jsonPath.safe()} --noEmit`, { stdio: 'inherit', env: pkg.env });
    } catch {
      // do nothing, the error is already printed by tsc
    }
  });
}
