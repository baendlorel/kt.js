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
     * Used for config file paths in commands.
     * It ensures that the path is safely represented as a string.
     * @returns `JSON.stringify(this)`
     */
    safe(): string;

    existsOr(): string | null;
    existsOr<T = string>(defaultValue: T): string | T;
  }
}

String.prototype.join = function (...paths: string[]) {
  return path.join(this.toString(), ...paths);
};

String.prototype.safe = function () {
  return JSON.stringify(this.toString());
};

String.prototype.existsOr = function <T = string>(defaultValue: T = null as any): string | T | null {
  console.log(`Checking existence of path: ${this.toString()}`);
  return existsSync(this.toString()) ? this.toString() : defaultValue;
};
