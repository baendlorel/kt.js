import path from 'node:path';

const workspaceRoot = path.join(import.meta.dirname, '..');

const PATH_ALIASES: Record<string, string> = {
  '@ktjs/babel-plugin-ktjsx': 'packages/babel-plugin-ktjsx/src/index.ts',
  '@ktjs/ts-plugin-jsx-dom': 'packages/ts-plugin-jsx-dom/src/index.ts',
  '@ktjs/runtime': 'packages/core/src/runtime.ts',
  '@ktjs/router': 'packages/router/src/main.ts',
  '@ktjs/shortcuts': 'packages/shortcuts/src/index.ts',
  '@ktjs/mui': 'packages/mui/src/index.ts',
  '@ktjs/shared': 'packages/shared/src/index.ts',

  '@ktjs/core': 'packages/core/src/index.ts',
  '@ktjs/core/jsx': 'packages/core/src/jsx/index.ts',
  '@ktjs/core/jsx-runtime': 'packages/core/src/jsx/jsx-runtime.ts',

  'kt.js': 'packages/kt.js/src/index.ts',
  'kt.js/jsx-runtime': 'packages/kt.js/src/jsx/jsx-runtime.ts',
};

export function getVitestAliases() {
  const alias: Record<string, string> = {};
  for (const [find, replacement] of Object.entries(PATH_ALIASES)) {
    alias[find] = path.join(workspaceRoot, replacement);
  }
  return alias;
}

export function getRollupAliases() {
  const alias: { entries: Array<{ find: RegExp | string; replacement: string }> } = { entries: [] };
  const sortedEntries = Object.entries(PATH_ALIASES).sort(([a], [b]) => b.length - a.length);
  for (const [find, replacement] of sortedEntries) {
    alias.entries.push({
      find,
      replacement: path.join(workspaceRoot, replacement),
    });
  }
  return alias;
}
