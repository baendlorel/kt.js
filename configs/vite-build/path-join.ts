import path from 'node:path';

declare global {
  interface String {
    /**
     * This is included by vite.config.ts.
     */
    join(...paths: string[]): string;
  }
}

String.prototype.join = function (...paths: string[]) {
  return path.join(this.toString(), ...paths);
};
