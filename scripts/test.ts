import { execSync } from 'node:child_process';
import path from 'node:path';
import { getPackageInfo } from './common/package-info.js';

export async function test(who: string | undefined) {
  const info = getPackageInfo(who);

  info.forEach((pkg) => {
    const vitestConfigPath = path.join(import.meta.dirname, '..', 'configs', 'vitest.config.ts');

    execSync(`vitest ${JSON.stringify(pkg.path)} --config ${JSON.stringify(vitestConfigPath)}`, {
      stdio: 'inherit',
      env: pkg.env,
    });
  });
}
