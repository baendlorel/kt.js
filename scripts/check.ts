import { execSync } from 'node:child_process';
import { getPackageInfo } from './package-info.js';
import path from 'node:path';
import { existsSync } from 'node:fs';

export async function check(who: string | undefined) {
  const info = getPackageInfo(who);
  execSync(`clear`, { stdio: 'inherit' });

  info.forEach((pkg) => {
    const configBuildJson = path.join(pkg.path, 'tsconfig.build.json');
    const configJson = path.join(pkg.path, 'tsconfig.json');
    const jsonPath = existsSync(configBuildJson) ? configBuildJson : configJson;
    try {
      execSync(`tsc --project ${JSON.stringify(jsonPath)} --noEmit`, { stdio: 'inherit', env: pkg.env });
    } catch {
      // do nothing, the error is already printed by tsc
    }
  });
}
