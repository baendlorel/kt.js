import { execSync } from 'node:child_process';
import path from 'node:path';
import { getPackageInfo } from './common/package-info.js';

export async function test(who: string | undefined) {
  const info = getPackageInfo(who);

  info.forEach((pkg) => {
    const vitestConfigPath = path.join(import.meta.dirname, '..', 'configs', 'vitest.config.ts');
    const testPackageDir = path.join(pkg.path, '..', 'tests');

    execSync(`vitest ${testPackageDir} --config ${vitestConfigPath}`, { stdio: 'inherit', env: pkg.env });
  });
}
