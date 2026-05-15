import { describe, expect, it } from 'vitest';
import ts from 'typescript/lib/tsserverlibrary';

import init from '../src/index.js';
import { DIAGNOSTIC_LABEL_NOT_ALLOWED, DIAGNOSTIC_UNUSED_LABEL } from '../src/constants.js';

interface InMemoryFile {
  text: string;
  version: number;
}

function createLanguageService(fileName: string, code: string): ts.LanguageService {
  const files = new Map<string, InMemoryFile>([[fileName, { text: code, version: 0 }]]);
  const compilerOptions: ts.CompilerOptions = {
    allowJs: true,
    checkJs: true,
    allowUnusedLabels: false,
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

function getLabelDiagnostics(code: string): ts.Diagnostic[] {
  return getPluginDiagnostics(code).filter(
    (diagnostic) => diagnostic.code === DIAGNOSTIC_LABEL_NOT_ALLOWED || diagnostic.code === DIAGNOSTIC_UNUSED_LABEL,
  );
}

describe('ts plugin js label diagnostics', () => {
  it('suppresses ts1344 and ts7028 for kt labels followed by a single variable declaration', () => {
    const diagnostics = getLabelDiagnostics(`
      ref:
      const value = 1;

      computed:
      let doubled = value * 2;

      subref:
      var child = { value };
    `);

    expect(diagnostics).toHaveLength(0);
  });

  it('keeps label diagnostics for non-kt labels', () => {
    const diagnostics = getLabelDiagnostics(`
      other:
      const value = 1;
    `);

    expect(diagnostics.map((diagnostic) => diagnostic.code).sort()).toEqual([
      DIAGNOSTIC_LABEL_NOT_ALLOWED,
      DIAGNOSTIC_UNUSED_LABEL,
    ]);
  });

  it('keeps label diagnostics for kt labels followed by multiple variable declarations', () => {
    const diagnostics = getLabelDiagnostics(`
      ref:
      const first = 1, second = 2;
    `);

    expect(diagnostics.map((diagnostic) => diagnostic.code).sort()).toEqual([
      DIAGNOSTIC_LABEL_NOT_ALLOWED,
      DIAGNOSTIC_UNUSED_LABEL,
    ]);
  });

  it('keeps label diagnostics for kt labels not followed by variable declarations', () => {
    const diagnostics = getLabelDiagnostics(`
      ref:
      class Box {}

      computed:
      function read() {
        return 1;
      }
    `);

    expect(diagnostics.filter((diagnostic) => diagnostic.code === DIAGNOSTIC_LABEL_NOT_ALLOWED)).toHaveLength(2);
    expect(diagnostics.filter((diagnostic) => diagnostic.code === DIAGNOSTIC_UNUSED_LABEL)).toHaveLength(2);
  });
});
