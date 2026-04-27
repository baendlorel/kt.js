import assert from 'node:assert';
import './path-join.js';
import fs from 'node:fs';

export namespace dirs {
  export const root = import.meta.dirname.join('..');
  export const pkgs = root.join('packages');
  export const plugins = root.join('plugins');
}
assert(fs.existsSync(dirs.root), `Root directory not found at ${dirs.root}`);
assert(fs.existsSync(dirs.pkgs), `Packages directory not found at ${dirs.pkgs}`);
assert(fs.existsSync(dirs.plugins), `Plugins directory not found at ${dirs.plugins}`);
