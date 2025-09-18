// @ts-check
import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { execute } from './execute.mjs';

const toArr = (o) => (Array.isArray(o) ? o : typeof o === 'object' && o !== null ? [] : [o]);

function getOutputFiles(rollupConfig) {
  const output = [];
  toArr(rollupConfig).forEach((c) => output.push(...toArr(c.output)));
  return output.map((o) => o.file);
}

function printSize(files) {
  const mapper =
    (maxLen) =>
    ({ file, size }) =>
      `${file.padEnd(maxLen, ' ')} - ${(size / 1024).toFixed(3)} KB`;
  let maxLen = 0;
  let total = 0;
  const info = [];
  files.forEach((file) => {
    try {
      const size = statSync(file).size;
      maxLen = Math.max(maxLen, file.length);
      total += size;
      info.push({ file, size });
    } catch (e) {
      console.warn(`${file}: Not found or no permission to read`, e);
    }
  });

  info.sort((a, b) => a.size - b.size);
  info.push({ file: 'Total', size: total });
  console.log(info.map(mapper(maxLen)).join('\n'));
}

/**
 * Because Node.js finds the package from current project first,
 * we need to rename the package temporarily to make it search node_modules
 */
class Renamer {
  origin = '';
  packageJson;

  constructor(packageJsonPath) {
    this.packageJsonPath = packageJsonPath;
    this.origin = readFileSync(packageJsonPath, 'utf-8');
    this.packageJson = JSON.parse(this.origin);
  }

  get realName() {
    return JSON.parse(this.origin).name;
  }

  read() {
    return readFileSync(this.packageJsonPath, 'utf-8');
  }

  write(content) {
    return writeFileSync(this.packageJsonPath, content, 'utf-8');
  }

  useTempName() {
    if (this.packageJson.purpose !== 'rollup-plugin') {
      console.log('Not a rollup plugin. Skip renaming package.json');
      return;
    }
    this.origin = this.read();
    const j = JSON.parse(this.origin);
    j.name = 'kasukabe-tsumugi-temporary-name';
    this.write(JSON.stringify(j, null, 2));
  }

  restoreRealName() {
    if (this.packageJson.purpose !== 'rollup-plugin') {
      console.log('Not a rollup plugin. Skip restoring package.json');
      return;
    }
    this.write(this.origin);
  }
}

async function run() {
  const renamer = new Renamer(join(import.meta.dirname, '..', 'package.json'));

  process.env.KSKB_TSUMUGI_REAL_NAME = renamer.realName;

  try {
    renamer.useTempName();

    await execute(['rimraf', 'dist']);

    const { name, version, purpose } = renamer.packageJson;
    console.log(`Building`, `[${purpose}]`, name, version);

    // ! Must read configs here, or nodejs will not
    // ! be able to find the installed package of this project
    const rollupConfig = (await import('../rollup.config.mjs')).default;

    await execute(['rollup', '-c'], { env: { ...process.env } });

    const files = getOutputFiles(rollupConfig);
    printSize(files);
  } catch (error) {
    console.log('error', error);
  } finally {
    renamer.restoreRealName();
  }
}

run();
