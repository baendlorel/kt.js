import { describe, expect, it } from 'vitest';
import ts from 'typescript/lib/tsserverlibrary';

import { resolveConfig } from '../src/config.js';
import { collectBindingsAtPosition, getFileAnalysis } from '../src/scope-analysis.js';

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

function getBindingsAtSnippet(code: string, snippet: string): Map<string, { name: string; types: ts.Type[] }> {
  const fileName = '/src/view.tsx';
  const languageService = createLanguageService(fileName, code);
  const analysis = getFileAnalysis(fileName, languageService, ts, resolveConfig());
  if (!analysis) {
    throw new Error('Expected k-for analysis to be available.');
  }

  const index = code.indexOf(snippet);
  if (index < 0) {
    throw new Error(`Snippet not found: ${snippet}`);
  }

  const position = index + 1;
  return collectBindingsAtPosition(position, analysis.scopes);
}

describe('scope-analysis attribute scopes', () => {
  it('includes k-for aliases inside normal JSX attribute expressions', () => {
    const code = `
      const users = [{ id: 1, name: 'A' }];
      const view = <li k-for="item in users" data-id={item.id}>{item.name}</li>;
    `;

    const bindings = getBindingsAtSnippet(code, 'item.id');
    const itemBinding = bindings.get('item');

    expect(itemBinding).toBeDefined();
    expect(itemBinding?.types.length).toBeGreaterThan(0);
  });

  it('includes k-for aliases on self-closing elements without k-key', () => {
    const code = `
      const users = [{ id: 1, name: 'A' }];
      const view = <input k-for="item in users" value={item.name} />;
    `;

    const bindings = getBindingsAtSnippet(code, 'item.name');
    const itemBinding = bindings.get('item');

    expect(itemBinding).toBeDefined();
    expect(itemBinding?.types.length).toBeGreaterThan(0);
  });
});
