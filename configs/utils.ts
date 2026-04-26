import fs from 'node:fs';
import path from 'node:path';

export const getTSConfig = (p: string) => {
  const tsconfigBuildPath = path.join(p, 'tsconfig.build.json');
  const tsconfigPath = path.join(p, 'tsconfig.json');
  return fs.existsSync(tsconfigBuildPath) ? tsconfigBuildPath : tsconfigPath;
};

export const loadJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, 'utf-8'));

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
