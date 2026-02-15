import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('./packages');

const IGNORE_DIRS = new Set(['node_modules', 'dist']);

// '.js', 'mjs', 'cjs', '.cpp', '.h', '.py', '.rs', '.rc', '.json'
const EXTENSIONS = new Set(['.ts', '.tsx', '.css']);

let totalLines = 0;
let fileCount = 0;

function countLines(filePath: string): number {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.split(/\r\n|\n|\r/).length;
}

function walk(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) {
        continue;
      }
      walk(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const ext = path.extname(entry.name);
    if (!EXTENSIONS.has(ext)) {
      continue;
    }

    const lines = countLines(fullPath);
    totalLines += lines;
    fileCount++;

    console.log(`${lines.toString().padStart(7)}  ${path.relative(ROOT, fullPath)}`);
  }
}

// "lines": "clear && find ./packages -type f \\( -name \"*.ts\" -o -name \"*.tsx\" -o -name \"*.js\" -o -name \"*.mjs\" -o -name \"*.cjs\" \\) | xargs wc -l",

walk(ROOT);
console.log(`Files: ${fileCount} for ${[...EXTENSIONS].join(', ')}`);
console.log(`Total lines: ${totalLines}`);
