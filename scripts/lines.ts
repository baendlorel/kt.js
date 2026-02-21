import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('./packages');

const INCLUDE = ['**/*.{ts,tsx,css}'];
const EXCLUDE = ['**/node_modules/**', '**/dist/**', '**/*.test.{ts,tsx}'];

let totalLines = 0;
let fileCount = 0;

function countLines(filePath: string): number {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.split(/\r\n|\n|\r/).length;
}

function resolveFiles(rootDir: string): string[] {
  const matched = fs
    .globSync(INCLUDE, {
      cwd: rootDir,
      exclude: EXCLUDE,
    })
    .map((relativePath) => path.relative(ROOT, path.join(rootDir, relativePath)).replaceAll(path.sep, '/'));

  const unique = Array.from(new Set(matched));

  return unique
    .filter((relativePath) => fs.existsSync(path.join(ROOT, relativePath)))
    .sort((a, b) => a.localeCompare(b));
}

// "lines": "clear && find ./packages -type f \\( -name \"*.ts\" -o -name \"*.tsx\" -o -name \"*.js\" -o -name \"*.mjs\" -o -name \"*.cjs\" \\) | xargs wc -l",

function main() {
  const subPackage = process.argv[2];
  const rootDir = subPackage ? path.join(ROOT, subPackage) : ROOT;
  if (!fs.existsSync(rootDir)) {
    console.error(`Sub package not found: ${subPackage}`);
    process.exit(1);
  }

  const files = resolveFiles(rootDir);
  for (const relativePath of files) {
    const fullPath = path.join(ROOT, relativePath);
    const lines = countLines(fullPath);
    totalLines += lines;
    fileCount++;
    console.log(`${lines.toString().padStart(7)}  ${relativePath}`);
  }

  console.log(`Files: ${fileCount} for ${INCLUDE.join(', ')}`);
  console.log(`Total lines: ${totalLines}`);
}
main();
