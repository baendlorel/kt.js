import fs from 'node:fs';
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

export const getTSConfig = (p: string) => {
  const tsconfigBuildPath = path.join(p, 'tsconfig.build.json');
  const tsconfigPath = path.join(p, 'tsconfig.json');
  return fs.existsSync(tsconfigBuildPath) ? tsconfigBuildPath : tsconfigPath;
};

export const loadJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, 'utf-8')) as CommonPackageJson;

export const Root = path.join(import.meta.dirname, '..');
export const Packages = ['packages', 'plugins']
  .map((t) => {
    const p = path.join(Root, t);
    const ls = fs.readdirSync(p);
    return ls.map((l) => path.join(p, l));
  })
  .flat()
  .filter((p) => fs.existsSync(path.join(p, 'package.json')));

declare global {
  interface String {
    join(...paths: string[]): string;
  }
}

String.prototype.join = function (...paths: string[]) {
  return path.join(this.toString(), ...paths);
};
