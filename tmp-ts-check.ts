import ts from 'typescript/lib/tsserverlibrary';
import { getFileAnalysis, collectBindingsAtPosition } from './plugins/ts/src/scope-analysis.ts';
import { resolveConfig } from './plugins/ts/src/config.ts';

function createLanguageService(fileName, code) {
  const files = new Map([[fileName, { text: code, version: 0 }]]);
  const host = {
    getCompilationSettings: () => ({ jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.NodeJs, strict: true }),
    getScriptFileNames: () => [fileName],
    getScriptVersion: (name) => String(files.get(name)?.version ?? 0),
    getScriptSnapshot: (name) => {
      const f = files.get(name);
      if (f) return ts.ScriptSnapshot.fromString(f.text);
      const text = ts.sys.readFile(name);
      return text == null ? undefined : ts.ScriptSnapshot.fromString(text);
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

const fileName = '/src/view.tsx';
const code = 
  const someobject = { prop: { arr: [{ id: 1, name: 'A' as string }] } };
  const f = (v: { id: number; name: string }) => v.name.length > 0 ? v : v;
  const view = <li k-for="item in someobject.prop.arr.map(v => f(v))">{item.id}</li>;
;
const ls = createLanguageService(fileName, code);
const analysis = getFileAnalysis(fileName, ls, ts, resolveConfig());
const index = code.indexOf('item.id');
const binding = collectBindingsAtPosition(index + 1, analysis.scopes).get('item');
console.log(binding?.types.map(t => analysis.checker.typeToString(t, analysis.sourceFile, ts.TypeFormatFlags.NoTruncation)));
