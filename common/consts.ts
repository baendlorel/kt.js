import './path-join.js';

export namespace dirs {
  export const root = import.meta.dirname.join('..');
  export const pkgs = root.join('packages');
  export const plugins = root.join('plugins');
}
