import { writeFileSync } from 'node:fs';
import { loadJson, loadPackageJson, type CommonPackageJson } from '../common/utils.js';
import { dirs } from '../common/consts.js';
import { Version } from '../common/version.js';

export interface PackageInfo {
  /**
   * Absolute path to the package directory, e.g. ...path-to-kt.js/packages/core
   */
  path: string;
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

const publishGroupMap = new Map<string, string[]>([
  ['main', ['core', 'kt.js', 'mui']],
  ['router', ['core', 'kt.js', 'router']],
  ['plugin', ['vite', 'babel', 'transformer', 'create']],
  ['all', ['shared', 'core', 'kt.js', 'mui', 'mui-icon', 'router']],
]);

const getAbsolutePath = (who: string) => dirs.packages.tryJoin(who) ?? dirs.plugins.join(who);
const getGroup = (who: string): string[] => {
  const raw = publishGroupMap.get(who);
  return raw ? raw.map(getAbsolutePath) : [getAbsolutePath(who)];
};

export function getPackageInfo(who: string = 'main'): PackageInfo[] {
  return getGroup(who)
    .map((absolutePackagePath) => {
      const data = loadPackageJson(absolutePackagePath);
      if (!data) {
        return null;
      }

      return {
        path: absolutePackagePath,
        version: new Version(data.version),
        json: data,
        name: data.name as string,
        nameVer: `${data.name}@${data.version}`,
        env: { ...process.env, CURRENT_PKG_PATH: absolutePackagePath },
      };
    })
    .filter((info): info is PackageInfo => info !== null);
}

export function syncRootVersion(group: PackageInfo[]): string | null {
  const coreInfo = group.find((info) => info.name === '@ktjs/core');
  if (!coreInfo) {
    return null;
  }

  const data = loadJson(dirs.rootPackageJson);
  if (data.version === coreInfo.json.version) {
    return null;
  }

  data.version = coreInfo.json.version;
  writeFileSync(dirs.rootPackageJson, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`Synced root package version to ${coreInfo.json.version} from @ktjs/core`);
  return dirs.rootPackageJson;
}
