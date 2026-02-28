import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const pkgDir = path.resolve(import.meta.dirname);
const srcDir = path.join(pkgDir, 'src');
const defaultOutput = path.join(pkgDir, 'dist', 'index.css');

const normalizePath = (value) => value.split(path.sep).join('/');

async function walkCssFiles(baseDir) {
  const entries = await readdir(baseDir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkCssFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
}

function sortCssFiles(files, sourceRoot) {
  const sorted = files.sort((a, b) => {
    const left = normalizePath(path.relative(sourceRoot, a));
    const right = normalizePath(path.relative(sourceRoot, b));
    return left.localeCompare(right);
  });

  const mainIndex = sorted.findIndex((file) => normalizePath(path.relative(sourceRoot, file)) === 'main.css');
  if (mainIndex <= 0) {
    return sorted;
  }

  const [mainCss] = sorted.splice(mainIndex, 1);
  sorted.unshift(mainCss);
  return sorted;
}

export async function aggregateCss(options = {}) {
  const sourceDir = options.sourceDir ?? srcDir;
  const outputFile = options.outputFile ?? defaultOutput;

  const cssFiles = sortCssFiles(await walkCssFiles(sourceDir), sourceDir);
  const chunks = await Promise.all(
    cssFiles.map(async (file) => {
      const relativePath = normalizePath(path.relative(sourceDir, file));
      const content = (await readFile(file, 'utf8')).trimEnd();
      return `/* ${relativePath} */\n${content}\n`;
    }),
  );

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, chunks.join('\n'), 'utf8');

  return {
    outputFile,
    files: cssFiles.map((file) => normalizePath(path.relative(sourceDir, file))),
  };
}

const isCLI = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isCLI) {
  const { outputFile, files } = await aggregateCss();
  console.log(`Aggregated ${files.length} CSS files into ${normalizePath(path.relative(pkgDir, outputFile))}`);
}

const cssFileRE = /\.css$/;
export const ignoreCssImports = () => {
  return {
    name: 'ignore-css-imports',
    resolveId(source, importer) {
      if (!cssFileRE.test(source) || !importer) {
        return null;
      }
      return path.resolve(path.dirname(importer), source);
    },
    load(id) {
      if (!cssFileRE.test(id)) {
        return null;
      }
      return 'export default undefined;';
    },
  };
};
