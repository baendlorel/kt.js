import fs from 'fs';
import path from 'path';
import babel from '@babel/core';

let plugin;
try {
  const pluginMod = await import(path.resolve(import.meta.dirname, '../dist/index.mjs'));
  plugin = (pluginMod && (pluginMod.default || pluginMod)) || pluginMod;
  console.log(plugin);
} catch (err) {
  console.log(err);
}

const samplePath = path.resolve(import.meta.dirname, 'sample.tsx');
const code = fs.readFileSync(samplePath, 'utf8');

const res = babel.transformSync(code, {
  filename: samplePath,
  plugins: [plugin],
  parserOpts: { plugins: ['typescript', 'jsx'] },
  configFile: false,
  babelrc: false,
});

if (!res) {
  console.error('No transform result');
  process.exit(1);
}

console.log('\n--- Transformed output ---\n');
console.log(res);
console.log('\n--- Written to tests/out.js ---\n');
