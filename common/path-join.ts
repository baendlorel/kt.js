import fs, { existsSync } from 'node:fs';
import path from 'node:path';

declare global {
  interface String {
    /**
     * `path.join` and asserts the existence of the resulting path.
     * @throws {Error} If the resulting path does not exist.
     */
    join(...paths: string[]): string;

    /**
     * `path.join` but returns `null` if the path does not exist
     */
    tryJoin(...paths: string[]): string | null;

    /**
     * Used for config file paths in commands.
     * It ensures that the path is safely represented as a string.
     * @returns `JSON.stringify(this)`
     */
    safe(): string;

    existsOr(defaultValue: string): string;
  }
}

String.prototype.join = function (...paths: string[]) {
  const p = path.join(this.toString(), ...paths);
  if (!fs.existsSync(p)) {
    throw new Error(`Path does not exist: ${paths.join(', ')} (resolved to ${p})`);
  }
  return p;
};

String.prototype.tryJoin = function (...paths: string[]) {
  const p = path.join(this.toString(), ...paths);
  return fs.existsSync(p) ? p : null;
};

String.prototype.safe = function () {
  return JSON.stringify(this.toString());
};

String.prototype.existsOr = function (defaultValue: string) {
  return existsSync(this.toString()) ? this.toString() : defaultValue;
};
