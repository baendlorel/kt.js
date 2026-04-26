import path from 'node:path';

declare global {
  interface String {
    join(...paths: string[]): string;
  }
}

String.prototype.join = function (...paths: string[]) {
  return path.join(this.toString(), ...paths);
};
