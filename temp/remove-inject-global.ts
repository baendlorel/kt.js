// scripts/transform-css-ts-native.ts
import { readFileSync, writeFileSync } from 'fs';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname } from 'path';
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
      let hasChanges = false;

      // 处理第一行 import
      const lines = modified.split('\n');
      const firstLine = lines[0] || '';

      // 检查并替换现有的 css import
      const importMatch = firstLine.match(/^import\s*\{\s*css\s*\}\s*from\s*['"][^'"]+['"]/);

      if (importMatch) {
        // 替换现有 import
        lines[0] = `import { css } from '${CSS_INJECTOR_PATH}';`;
        hasChanges = true;
        console.log(`  ↻ Updated import path in: ${file}`);
      } else if (!firstLine.includes('import { css }')) {
        // 没有 css import，插入新行
        let insertIndex = 0;
        if (firstLine.startsWith('#!') || firstLine.startsWith('//')) {
          insertIndex = 1;
        }
        lines.splice(insertIndex, 0, `import { css } from '${CSS_INJECTOR_PATH}';`);
        hasChanges = true;
        console.log(`  + Added import to: ${file}`);
      }

      modified = lines.join('\n');

      // 替换 void injectGlobal
      if (/void\s+injectGlobal/.test(modified)) {
        modified = modified.replace(/void\s+injectGlobal/g, 'export default css');
        hasChanges = true;
        console.log(`  ↻ Replaced injectGlobal in: ${file}`);
      }

      // 写入文件
      if (hasChanges) {
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
