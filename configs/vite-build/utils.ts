import fs from 'node:fs';

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

const existOrNull = (p: string) => (fs.existsSync(p) ? p : null);
export const getTSBuildConfig = (p: string) => ({
  global: Root.join('configs', 'tsconfig.build.json'),
  build: existOrNull(p.join('tsconfig.build.json')),
  local: p.join('tsconfig.json'),
});

export const loadJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, 'utf-8')) as CommonPackageJson;

export const Root = import.meta.dirname.join('..', '..');
export const Packages = ['packages', 'plugins']
  .map((t) => {
    const p = Root.join(t);
    const ls = fs.readdirSync(p);
    return ls.map((l) => p.join(l));
  })
  .flat()
  .filter((p) => fs.existsSync(p.join('package.json')));
