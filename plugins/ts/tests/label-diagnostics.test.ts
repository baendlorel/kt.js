import { describe, expect, it } from 'vitest';
import ts from 'typescript/lib/tsserverlibrary';

import init from '../src/index.js';
import { DIAGNOSTIC_LABEL_NOT_ALLOWED } from '../src/constants.js';

interface InMemoryFile {
  text: string;
  version: number;
}

function createLanguageService(fileName: string, code: string): ts.LanguageService {
  const files = new Map<string, InMemoryFile>([[fileName, { text: code, version: 0 }]]);
  const compilerOptions: ts.CompilerOptions = {
    allowJs: true,
    checkJs: true,
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

function getPluginDiagnostics(code: string): ts.Diagnostic[] {
  const fileName = '/src/view.js';
  const languageService = createLanguageService(fileName, code);
  const plugin = init({ typescript: ts });
  const proxy = plugin.create({
    config: {},
    languageService,
  } as ts.server.PluginCreateInfo);

  return proxy.getSemanticDiagnostics(fileName);
}

describe('ts plugin js label diagnostics', () => {
  it('suppresses ts1344 for labels followed by declarations', () => {
    const diagnostics = getPluginDiagnostics(`
      constLabel:
      const value = 1;

      classLabel:
      class Box {}

      functionLabel:
      function read() {
        return value;
      }
    `);

    expect(diagnostics.filter((diagnostic) => diagnostic.code === DIAGNOSTIC_LABEL_NOT_ALLOWED)).toHaveLength(0);
  });

  it('suppresses nested labels followed by declarations', () => {
    const diagnostics = getPluginDiagnostics(`
      outerLabel:
      innerLabel:
      let value = 1;
    `);

    expect(diagnostics.filter((diagnostic) => diagnostic.code === DIAGNOSTIC_LABEL_NOT_ALLOWED)).toHaveLength(0);
  });
});
