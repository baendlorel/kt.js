import { execSync } from 'node:child_process';
import { resolve } from 'node:path';
import { getPackageInfo } from './common/package-info.js';

export async function test(who: string | undefined) {
  const info = getPackageInfo(who);

  const vitestConfigPath = resolve('vitest.config.ts');
  const testPackageDir = resolve(info.jsonPath, '..', 'tests');

  execSync(`vitest ${testPackageDir} --config ${vitestConfigPath}`, { stdio: 'inherit', env: info.env });
}
