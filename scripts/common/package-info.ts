import { readFileSync, writeFileSync } from 'node:fs';
import { loadJson, type CommonPackageJson } from '../../common/utils.js';
import { dirs } from '../../common/consts.js';
import { Version } from '../../common/version.js';

export interface PackageInfo {
  /**
   * Absolute path to the package directory, e.g. ...path-to-kt.js/packages/core
   */
  path: string;
  /**
   * Absolute path to the package.json
   */
  jsonPath: string;
  version: Version;
  json: CommonPackageJson;
  name: string;
  nameVer: string;
  env: {
    /**
     * Used to tell the child process which package to build. The vite config will read this variable to determine the entry file and output file name.
     */
    CURRENT_PKG_PATH: string;
    TZ?: string | undefined;
  };
}

const publishGroupMap = new Map<string | undefined, string[]>([
  [undefined, ['core', 'kt.js', 'mui']],
  ['router', ['core', 'kt.js', 'router']],
  ['plugin', ['vite', 'babel', 'transformer', 'create']],
  ['all', ['shared', 'core', 'kt.js', 'mui', 'mui-icon', 'router']],
]);

export const rootPackageJsonPath = dirs.root.join('package.json');

const getAbsolutePath = (who: string) => {
  const p = dirs.packages.tryJoin(who) ?? dirs.plugins.tryJoin(who);
  if (p) {
    return p;
  }
  console.error(`Package "${who}" does not exist in either "packages" or "plugins" directory.`);
  process.exit(1);
};

const getGroup = (who: string | undefined): string[] => {
  const raw = publishGroupMap.get(who);
  if (raw) {
    return raw.map(getAbsolutePath);
  }
  if (typeof who === 'string') {
    return [getAbsolutePath(who)];
  } else {
    console.error(`Unknown package group: ${who}`);
    process.exit(1);
  }
};

export const getPackageInfo = (who: string | undefined): PackageInfo[] =>
  getGroup(who)
    .map((absolutePath) => {
      const packageJsonPath = absolutePath.tryJoin('package.json');
      if (!packageJsonPath) {
        return null;
      }

      const packageJson = loadJson(packageJsonPath);
      return {
        path: absolutePath,
        jsonPath: packageJsonPath,
        version: new Version(packageJson.version),
        json: packageJson,
        name: packageJson.name as string,
        nameVer: `${packageJson.name}@${packageJson.version}`,
        env: { ...process.env, CURRENT_PKG_PATH: absolutePath },
      };
    })
    .filter((info): info is PackageInfo => info !== null);

export function syncRootPackageVersionFromCore(group: PackageInfo[]): string | undefined {
  const coreInfo = group.find((info) => info.name === '@ktjs/core');
  if (!coreInfo) {
    return undefined;
  }

  const rootPackageJson = JSON.parse(readFileSync(rootPackageJsonPath, 'utf-8'));
  if (rootPackageJson.version === coreInfo.json.version) {
    return undefined;
  }

  rootPackageJson.version = coreInfo.json.version;
  writeFileSync(rootPackageJsonPath, `${JSON.stringify(rootPackageJson, null, 2)}\n`, 'utf-8');
  console.log(`Synced root package version to ${coreInfo.json.version} from @ktjs/core`);
  return rootPackageJsonPath;
}
