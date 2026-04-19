import { describe, expect, it } from 'vitest';
import ts from 'typescript/lib/tsserverlibrary';

import { resolveConfig } from '../src/config.js';
import { collectUsedSourceDeclarationSpans, getFileAnalysis } from '../src/scope-analysis.js';

interface InMemoryFile {
  text: string;
  version: number;
}

function createLanguageService(fileName: string, code: string): ts.LanguageService {
  const files = new Map<string, InMemoryFile>([[fileName, { text: code, version: 0 }]]);
  const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.Preserve,
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    strict: true,
    noUnusedLocals: true,
  };

  const host: ts.LanguageServiceHost = {
    getCompilationSettings: () => compilerOptions,
    getScriptFileNames: () => [fileName],
    getScriptVersion: (name) => String(files.get(name)?.version ?? 0),
    getScriptSnapshot: (name) => {
      const inMemory = files.get(name);
      if (inMemory) {
        return ts.ScriptSnapshot.fromString(inMemory.text);
      }

      const text = ts.sys.readFile(name);
      if (text == null) {
        return undefined;
      }
      return ts.ScriptSnapshot.fromString(text);
    },
    getCurrentDirectory: () => process.cwd(),
    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  };

  return ts.createLanguageService(host);
}

describe('ts plugin k-for source usage', () => {
  it('collects local declarations referenced from k-for sources', () => {
    const fileName = '/src/view.tsx';
    const code = `
      function render() {
        const arr = [{ id: 1 }];
        return <li k-for="item in arr">{item.id}</li>;
      }
    `;

    const languageService = createLanguageService(fileName, code);
    const analysis = getFileAnalysis(fileName, languageService, ts, resolveConfig());
    if (!analysis) {
      throw new Error('Expected k-for analysis to be available.');
    }

    const arrStart = code.indexOf('arr =');
    const used = collectUsedSourceDeclarationSpans(analysis.sourceFile, analysis.checker, ts, resolveConfig());
    expect(used.has(`${fileName}:${arrStart}:3`)).toBe(true);
  });
});
