import { describe, expect, it } from 'vitest';
import ts from 'typescript/lib/tsserverlibrary';

import init from '../src/index.js';
import { resolveConfig } from '../src/config.js';
import { collectIfNarrowingsAtPosition, getFileAnalysis } from '../src/scope-analysis.js';

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
    // @ts-expect-error
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
  const fileName = '/src/view.tsx';
  const languageService = createLanguageService(fileName, code);
  const plugin = init({ typescript: ts });
  const proxy = plugin.create({
    config: {},
    languageService,
  } as ts.server.PluginCreateInfo);

  return proxy.getSemanticDiagnostics(fileName);
}

function isNullishOrFalsyAccessDiagnostic(diagnostic: ts.Diagnostic): boolean {
  return (
    diagnostic.code === 2531 ||
    diagnostic.code === 2532 ||
    diagnostic.code === 2533 ||
    diagnostic.code === 18049 ||
    diagnostic.code === 2339
  );
}

describe('ts plugin k-if narrowing', () => {
  it('narrows the same element attributes and children', () => {
    const diagnostics = getPluginDiagnostics(`
      declare namespace JSX { interface IntrinsicElements { div: any } }
      declare const o: { prop: { id: number } | null | undefined | false };
      const view = <div k-if={o.prop} data-id={o.prop.id}>{o.prop.id}</div>;
    `);

    expect(diagnostics.filter(isNullishOrFalsyAccessDiagnostic)).toHaveLength(0);
  });

  it('keeps nullish diagnostics outside the k-if scope', () => {
    const code = `
      declare namespace JSX { interface IntrinsicElements { div: any } }
      declare const o: { prop: { id: number } | null | undefined | false };
      const outside = o.prop.id;
      const view = <div k-if={o.prop}>{o.prop.id}</div>;
    `;

    const diagnostics = getPluginDiagnostics(code);
    const outsideStart = code.indexOf('o.prop.id;');
    const nullishDiagnostics = diagnostics.filter(
      (diagnostic) =>
        isNullishOrFalsyAccessDiagnostic(diagnostic) &&
        diagnostic.start != null &&
        diagnostic.start < outsideStart + 'o.prop.id'.length,
    );

    expect(nullishDiagnostics.length).toBeGreaterThan(0);
  });

  it('collects narrowed types for property chains', () => {
    const fileName = '/src/view.tsx';
    const code = `
      declare namespace JSX { interface IntrinsicElements { div: any } }
      declare const o: { prop: { id: number } | null | undefined | false };
      const view = <div k-if={o.prop} data-id={o.prop.id}>{o.prop.id}</div>;
    `;

    const languageService = createLanguageService(fileName, code);
    const analysis = getFileAnalysis(fileName, languageService, ts, resolveConfig());
    if (!analysis) {
      throw new Error('Expected k-if analysis to be available.');
    }

    const position = code.indexOf('data-id={o.prop.id}') + 'data-id={'.length + 1;
    const narrowed = collectIfNarrowingsAtPosition(position, analysis.ifScopes);
    const propTypes = narrowed.get('o.prop') || [];
    const texts = propTypes.map((type) =>
      analysis.checker.typeToString(type, analysis.sourceFile, ts.TypeFormatFlags.NoTruncation),
    );

    expect(texts).toEqual(['{ id: number; }']);
  });
});
