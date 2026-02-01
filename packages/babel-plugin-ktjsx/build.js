import { execSync } from 'node:child_process';
import fs from 'node:fs';

console.log('Building babel-plugin-ktjsx...');
console.log('Removing old build...');
fs.rmSync('dist', { recursive: true, force: true });
fs.rmSync('tsconfig.tsbuildinfo', { recursive: true, force: true });
console.log('Compiling TypeScript...');
execSync('tsc -b --force');
console.log('Build complete.');
