import { describe, expect, it } from 'vitest';
import ts from 'typescript/lib/tsserverlibrary';

import init from '../src/index.js';
import {
  DIAGNOSTIC_DRAFT_ASSIGN_MESSAGE,
  DIAGNOSTIC_DRAFT_CALL_MESSAGE,
  DIAGNOSTIC_DRAFT_ESCAPE_MESSAGE,
} from '../src/constants.js';

interface InMemoryFile {
  text: string;
  version: number;
}

const SHARED_TYPES = `
  class KTReactive<T> {
    readonly isKT: true = true;
    readonly ktType = 1;
    get value(): T {
      return undefined as unknown as T;
    }
    set value(_value: T) {}
  }

  class KTRef<T> extends KTReactive<T> {
    readonly ktType = 3;
    get draft(): T {
      return undefined as unknown as T;
    }
  }
`;

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

function getPluginDiagnostics(code: string): ts.Diagnostic[] {
  const fileName = '/src/view.tsx';
  const languageService = createLanguageService(fileName, code);
  const plugin = init({ typescript: ts });
  const proxy = plugin.create({
    config: {},
    languageService,
  } as ts.server.PluginCreateInfo);

  return proxy.getSemanticDiagnostics(fileName).filter((diagnostic) => diagnostic.source === '@ktjs/ts-plugin');
}

describe('ts plugin draft diagnostics', () => {
  it('does not report nested writes or descendant method calls', () => {
    const diagnostics = getPluginDiagnostics(`
      ${SHARED_TYPES}
      declare const user: KTRef<{ profile: { name: string }; tags: string[] }>;
      user.draft.profile.name = 'Jane';
      user.draft.tags.push('active');
    `);

    expect(diagnostics).toHaveLength(0);
  });

  it('reports assigning to draft itself', () => {
    const diagnostics = getPluginDiagnostics(`
      ${SHARED_TYPES}
      declare const user: KTRef<{ profile: { name: string } }>;
      user.draft = { profile: { name: 'Jane' } };
    `);

    expect(diagnostics).toHaveLength(1);
    expect(diagnostics[0].messageText).toBe(DIAGNOSTIC_DRAFT_ASSIGN_MESSAGE);
  });

  it('reports draft escape reads', () => {
    const diagnostics = getPluginDiagnostics(`
      ${SHARED_TYPES}
      declare const user: KTRef<{ profile: { name: string } }>;
      const profile = user.draft.profile;
    `);

    expect(diagnostics).toHaveLength(1);
    expect(diagnostics[0].messageText).toBe(DIAGNOSTIC_DRAFT_ESCAPE_MESSAGE);
  });

  it('reports calling draft itself', () => {
    const diagnostics = getPluginDiagnostics(`
      ${SHARED_TYPES}
      declare const user: KTRef<() => void>;
      user.draft();
    `);

    expect(diagnostics).toHaveLength(1);
    expect(diagnostics[0].messageText).toBe(DIAGNOSTIC_DRAFT_CALL_MESSAGE);
  });

  it('ignores non-KTRef draft properties', () => {
    const diagnostics = getPluginDiagnostics(`
      interface Foo {
        draft: { name: string };
      }

      declare const foo: Foo;
      const name = foo.draft.name;
    `);

    expect(diagnostics).toHaveLength(0);
  });
});
