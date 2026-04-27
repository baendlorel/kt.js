import { Packages, loadJson } from './utils.js';

export const getAliases = () => {
  const aliases: Array<{ find: string; replacement: string }> = [];

  for (const packageDir of Packages) {
    const { name } = loadJson(packageDir.join('package.json'));
    const src = packageDir.join('src');
    aliases.push({ find: name, replacement: src.join('index.ts') });

    if (!['@ktjs/core', 'kt.js'].includes(name)) {
      continue;
    }

    // Extra aliases for jsx runtimes
    if (name === '@ktjs/core') {
      aliases.push({ find: name + '/jsx', replacement: src.join('index.ts') });
    } else if (name === 'kt.js') {
      aliases.push({ find: name + '/jsx', replacement: src.join('jsx.ts') });
    }
    aliases.push({ find: name + '/jsx-runtime', replacement: src.join('jsx-runtime.ts') });
    aliases.push({ find: name + '/jsx-dev-runtime', replacement: src.join('jsx-runtime.ts') });
  }

  // ! Keep longer paths first to ensure correct matching
  // (e.g. @ktjs/core/jsx should be matched before @ktjs/core)
  return aliases.sort((a, b) => b.find.length - a.find.length);
};
