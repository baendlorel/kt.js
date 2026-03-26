#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import ts from 'typescript';

const HELP_TEXT = `kt-tsc

Usage:
  kt-tsc -p ./tsconfig.json
  kt-tsc --project ./tsconfig.json

Notes:
  - project mode only
  - check only, never emit files
  - only suppresses k-for alias false positives
`;

const IDENTIFIER_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const KFOR_SINGLE_PATTERN = /^([A-Za-z_$][A-Za-z0-9_$]*)\s+(in|of)\s+([\s\S]+)$/;
const KFOR_TUPLE_PATTERN =
  /^\(\s*([A-Za-z_$][A-Za-z0-9_$]*)(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?\s*\)\s+(in|of)\s+([\s\S]+)$/;
const SUPPRESSED_DIAGNOSTIC_CODES = new Set([2304, 2552]);

interface KForConfig {
  forAttr: string;
  allowOfKeyword: boolean;
}

interface KForScope {
  start: number;
  end: number;
  names: string[];
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('-h') || argv.includes('--help')) {
    console.log(HELP_TEXT);
    process.exit(0);
  }

  const commandLine = ts.parseCommandLine(argv);
  if (commandLine.errors.length > 0) {
    report(commandLine.errors, commandLine.options.pretty !== false);
    process.exit(1);
  }

  if (commandLine.fileNames.length > 0) {
    console.error('[kt-tsc] file mode is not supported yet. Please use --project.');
    process.exit(1);
  }

  const projectPath = resolveProjectPath(commandLine.options.project);
  const parsed = loadProject(projectPath, commandLine.options);
  const config = resolveKForConfig(parsed.options.plugins);
  const program = ts.createProgram({
    rootNames: parsed.fileNames,
    options: {
      ...parsed.options,
      noEmit: true,
      incremental: false,
    },
    projectReferences: parsed.projectReferences,
  });

  const diagnostics = ts.sortAndDeduplicateDiagnostics([...parsed.errors, ...ts.getPreEmitDiagnostics(program)]);
  const filtered = filterDiagnostics(diagnostics, config);
  if (filtered.length > 0) {
    report(filtered, parsed.options.pretty !== false);
    process.exit(1);
  }
}

function resolveProjectPath(projectOption: string | undefined) {
  if (projectOption) {
    const absolutePath = path.resolve(projectOption);
    if (ts.sys.directoryExists(absolutePath)) {
      const configPath = path.join(absolutePath, 'tsconfig.json');
      if (ts.sys.fileExists(configPath)) {
        return configPath;
      }
    }
    if (ts.sys.fileExists(absolutePath)) {
      return absolutePath;
    }
    console.error(`[kt-tsc] Cannot find project: ${projectOption}`);
    process.exit(1);
  }

  const configPath = ts.findConfigFile(process.cwd(), ts.sys.fileExists, 'tsconfig.json');
  if (configPath) {
    return configPath;
  }

  console.error('[kt-tsc] Cannot find tsconfig.json from current directory.');
  process.exit(1);
}

function loadProject(projectPath: string, options: ts.CompilerOptions) {
  const readResult = ts.readConfigFile(projectPath, ts.sys.readFile);
  if (readResult.error) {
    report([readResult.error], options.pretty !== false);
    process.exit(1);
  }

  const parsed = ts.parseJsonConfigFileContent(
    readResult.config,
    ts.sys,
    path.dirname(projectPath),
    options,
    projectPath,
  );
  if (parsed.errors.length > 0) {
    report(parsed.errors, parsed.options.pretty !== false);
    process.exit(1);
  }

  return parsed;
}

function resolveKForConfig(plugins: unknown): KForConfig {
  const pluginList = Array.isArray(plugins) ? (plugins as Array<Record<string, unknown>>) : [];
  const plugin = pluginList.find((item) => item?.name === '@ktjs/ts-plugin');
  return {
    forAttr: typeof plugin?.forAttr === 'string' && plugin.forAttr ? plugin.forAttr : 'k-for',
    allowOfKeyword: plugin?.allowOfKeyword !== false,
  };
}

function filterDiagnostics(diagnostics: readonly ts.Diagnostic[], config: KForConfig) {
  const scopeCache = new Map<string, KForScope[]>();

  return diagnostics.filter((diagnostic) => {
    if (!diagnostic.file || diagnostic.start === null || diagnostic.start === undefined || diagnostic.length === 0) {
      return true;
    }
    if (!SUPPRESSED_DIAGNOSTIC_CODES.has(diagnostic.code)) {
      return true;
    }
    if (!isJsxLikeFile(diagnostic.file.fileName)) {
      return true;
    }

    const name = diagnostic.file.text.slice(diagnostic.start, diagnostic.start + diagnostic.length).trim();
    if (!IDENTIFIER_RE.test(name)) {
      return true;
    }

    let scopes = scopeCache.get(diagnostic.file.fileName);
    if (!scopes) {
      scopes = collectKForScopes(diagnostic.file, config);
      scopeCache.set(diagnostic.file.fileName, scopes);
    }

    return !isSuppressed(diagnostic.start, name, scopes);
  });
}

function collectKForScopes(sourceFile: ts.SourceFile, config: KForConfig) {
  const scopes: KForScope[] = [];

  const visit = (node: ts.Node) => {
    let opening: ts.JsxOpeningElement | ts.JsxSelfClosingElement | undefined;
    let bodyScope: KForScope | undefined;

    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
      const start = opening.end;
      const end = node.closingElement.getStart(sourceFile);
      if (start < end) {
        bodyScope = { start, end, names: [] };
      }
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const forAttr = getJsxAttribute(opening, config.forAttr);
      if (forAttr) {
        const names = parseKForNames(getAttributeText(forAttr), config.allowOfKeyword);
        if (names.length > 0) {
          if (bodyScope) {
            bodyScope.names = names;
            scopes.push(bodyScope);
          }

          const attrs = opening.attributes.properties;
          for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            if (ts.isJsxSpreadAttribute(attr)) {
              const start = attr.getStart(sourceFile);
              const end = attr.end;
              if (start < end) {
                scopes.push({ start, end, names });
              }
              continue;
            }

            if (!ts.isJsxAttribute(attr) || attr === forAttr || !attr.initializer) {
              continue;
            }
            if (!ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
              continue;
            }

            const start = attr.initializer.getStart(sourceFile);
            const end = attr.initializer.end;
            if (start < end) {
              scopes.push({ start, end, names });
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function getJsxAttribute(opening: ts.JsxOpeningElement | ts.JsxSelfClosingElement, attrName: string) {
  const attrs = opening.attributes.properties;
  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i];
    if (!ts.isJsxAttribute(attr)) {
      continue;
    }
    if (getAttributeName(attr.name) === attrName) {
      return attr;
    }
  }
}

function getAttributeName(name: ts.JsxAttributeName) {
  if ('text' in name) {
    return String(name.text);
  }
  return name.getText();
}

function getAttributeText(attr: ts.JsxAttribute | undefined) {
  if (!attr?.initializer) {
    return undefined;
  }
  if (ts.isStringLiteral(attr.initializer)) {
    return attr.initializer.text;
  }
  if (!ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
    return undefined;
  }
  if (ts.isStringLiteralLike(attr.initializer.expression)) {
    return attr.initializer.expression.text;
  }
  return undefined;
}

function parseKForNames(raw: string | undefined, allowOfKeyword: boolean) {
  if (!raw) {
    return [];
  }

  const value = raw.trim();
  if (!value) {
    return [];
  }

  const tupleMatch = KFOR_TUPLE_PATTERN.exec(value);
  if (tupleMatch) {
    const keyword = tupleMatch[4];
    if (!allowOfKeyword && keyword === 'of') {
      return [];
    }
    return [...new Set([tupleMatch[1], tupleMatch[2], tupleMatch[3]].filter(Boolean) as string[])];
  }

  const singleMatch = KFOR_SINGLE_PATTERN.exec(value);
  if (singleMatch) {
    const keyword = singleMatch[2];
    if (!allowOfKeyword && keyword === 'of') {
      return [];
    }
    return [...new Set([singleMatch[1], 'index'])];
  }

  return [];
}

function isSuppressed(position: number, name: string, scopes: readonly KForScope[]) {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const scope = scopes[i];
    if (position < scope.start || position >= scope.end) {
      continue;
    }
    if (scope.names.includes(name)) {
      return true;
    }
  }
  return false;
}

function isJsxLikeFile(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();
  return extension === '.tsx' || extension === '.jsx';
}

function report(diagnostics: readonly ts.Diagnostic[], pretty: boolean) {
  const formatHost: ts.FormatDiagnosticsHost = {
    getCurrentDirectory: () => process.cwd(),
    getCanonicalFileName: (fileName) => fileName,
    getNewLine: () => ts.sys.newLine,
  };

  const text = pretty
    ? ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost)
    : ts.formatDiagnostics(diagnostics, formatHost);
  if (text) {
    process.stderr.write(text);
  }
}

main();
