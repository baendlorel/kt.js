import { execSync } from 'node:child_process';
import { dirs } from '../common/consts.js';
import { getPackageInfo } from './package-info.js';

export async function test(who: string | undefined) {
  getPackageInfo(who).forEach((pkg) => {
    const vitestConfigPath = dirs.configs.join('vitest.config.ts');

    execSync(`vitest ${pkg.path.safe()} --config ${vitestConfigPath.safe()} --passWithNoTests`, {
      stdio: 'inherit',
      env: pkg.env,
    });
  });
}
