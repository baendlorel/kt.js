// scripts/transform-css-ts-native.ts
import { readFileSync, writeFileSync } from 'fs';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const CSS_INJECTOR_PATH = '../../common/css-injector.js';

async function findCssTsFiles(dir: string): Promise<string[]> {
  const results: string[] = [];

  async function scan(currentDir: string) {
    const entries = await readdir(currentDir);

    for (const entry of entries) {
      // 跳过 node_modules, dist, .git
      if (['node_modules', 'dist', '.git'].includes(entry)) continue;

      const fullPath = join(currentDir, entry);
      const fileStat = await stat(fullPath);

      if (fileStat.isDirectory()) {
        await scan(fullPath);
      } else if (entry.endsWith('.css.ts')) {
        results.push(fullPath);
      }
    }
  }

  await scan(dir);
  return results;
}

async function transformCssTsFiles() {
  const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');

  console.log(`Scanning for .css.ts files in ${rootDir}\n`);

  const files = await findCssTsFiles(rootDir);
  console.log(`Found ${files.length} .css.ts files\n`);

  let modifiedCount = 0;
  const results: string[] = [];

  for (const file of files) {
    try {
      const original = readFileSync(file, 'utf-8');
      let modified = original;

      modified = modified
        .replaceAll(`import { injectGlobal } from '@emotion/css';`, `import { css } from '${CSS_INJECTOR_PATH}';`)
        .replace('void injectGlobal', 'export default css');

      // 写入文件
      if (modified !== original) {
        writeFileSync(file, modified, 'utf-8');
        modifiedCount++;
        results.push(file);
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error instanceof Error ? error.message : error);
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`Total: ${files.length} files | Modified: ${modifiedCount}`);
  if (results.length > 0) {
    console.log(`\nModified files:`);
    results.forEach((f) => console.log(`  • ${f}`));
  }
}

transformCssTsFiles().catch(console.error);
