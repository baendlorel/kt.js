import fs from 'node:fs';
import { dirs } from './consts.js';
import path from 'node:path';

export interface CommonPackageJson {
  name: string;
  version: string;
  description: string;
  description_zh: string;
  author: {
    name: string;
    email: string;
  };
  license: string;
  repository: {
    type: string;
    url: string;
  };
}

export const loadJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, 'utf-8')) as CommonPackageJson;

/**
 * Load package.json of the given name.
 * @param name Can be package name or absolute package directory path
 */
export const loadPackageJson = (name: string): CommonPackageJson | null => {
  if (path.isAbsolute(name)) {
    const p = name.tryJoin('package.json');
    return p ? loadJson(p) : null;
  }

  const p = dirs.packages.tryJoin(name, 'package.json') ?? dirs.plugins.tryJoin(name, 'package.json');
  if (!p) {
    return null;
  }
  return loadJson(p);
};

const pad = (n: number) => (n > 9 ? n.toString() : '0' + n);
export function dtm(dt = new Date()) {
  const y = dt.getFullYear();
  const m = pad(dt.getMonth() + 1);
  const d = pad(dt.getDate());
  const hh = pad(dt.getHours());
  const mm = pad(dt.getMinutes());
  const ss = pad(dt.getSeconds());
  const ms = String(dt.getMilliseconds()).padStart(3, '0');
  return `${y}.${m}.${d} ${hh}:${mm}:${ss}.${ms}`;
}
