import path from 'node:path';
import type tsModule from 'typescript/lib/tsserverlibrary';

interface KForPluginConfig {
  forAttr?: string;
  itemAttr?: string;
  indexAttr?: string;
  itemName?: string;
  indexName?: string;
}

interface ResolvedConfig {
  forAttr: string;
  itemAttr: string;
  indexAttr: string;
  itemName: string;
  indexName: string;
}

interface KForScope {
  start: number;
  end: number;
  itemName: string;
  indexName: string;
}

const DIAGNOSTIC_CANNOT_FIND_NAME = 2304;
const IDENTIFIER_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

function init(modules: { typescript: typeof tsModule }) {
  const ts = modules.typescript;

  function create(info: tsModule.server.PluginCreateInfo): tsModule.LanguageService {
    const languageService = info.languageService;
    const config = resolveConfig(info.config as KForPluginConfig | undefined);
    const proxy = Object.create(null) as tsModule.LanguageService;

    for (const key of Object.keys(languageService) as Array<keyof tsModule.LanguageService>) {
      const member = languageService[key];
      (proxy as any)[key] = (...args: unknown[]) => (member as any).apply(languageService, args);
    }

    proxy.getSemanticDiagnostics = (fileName: string) => {
      const diagnostics = languageService.getSemanticDiagnostics(fileName);
      if (!isJsxLikeFile(fileName)) {
        return diagnostics;
      }

      const sourceFile = languageService.getProgram()?.getSourceFile(fileName);
      if (!sourceFile) {
        return diagnostics;
      }

      const scopes = collectKForScopes(sourceFile, ts, config);
      if (scopes.length === 0) {
        return diagnostics;
      }

      return diagnostics.filter((diag) => {
        if (diag.code !== DIAGNOSTIC_CANNOT_FIND_NAME || diag.start == null || diag.length == null) {
          return true;
        }

        const name = sourceFile.text.slice(diag.start, diag.start + diag.length).trim();
        if (!isValidIdentifier(name)) {
          return true;
        }

        return !isSuppressed(diag.start, name, scopes);
      });
    };

    return proxy;
  }

  return { create };
}

function resolveConfig(config?: KForPluginConfig): ResolvedConfig {
  return {
    forAttr: config?.forAttr || 'k-for',
    itemAttr: config?.itemAttr || 'k-for-item',
    indexAttr: config?.indexAttr || 'k-for-index',
    itemName: config?.itemName || 'item',
    indexName: config?.indexName || 'index',
  };
}

function isJsxLikeFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ext === '.tsx' || ext === '.jsx';
}

function collectKForScopes(
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
  config: ResolvedConfig,
): KForScope[] {
  const scopes: KForScope[] = [];

  const visit = (node: tsModule.Node) => {
    if (ts.isJsxElement(node)) {
      const forAttr = getJsxAttribute(node.openingElement, config.forAttr, ts);
      if (forAttr) {
        const itemName = getScopeName(node.openingElement, config.itemAttr, config.itemName, ts);
        const indexName = getScopeName(node.openingElement, config.indexAttr, config.indexName, ts);
        const start = node.openingElement.end;
        const end = node.closingElement.getStart(sourceFile);

        if (start < end) {
          scopes.push({ start, end, itemName, indexName });
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function getScopeName(
  opening: tsModule.JsxOpeningElement,
  attrName: string,
  fallback: string,
  ts: typeof tsModule,
): string {
  const attr = getJsxAttribute(opening, attrName, ts);
  const raw = getStringLikeAttributeValue(attr, ts);
  if (raw && isValidIdentifier(raw)) {
    return raw;
  }
  return fallback;
}

function getJsxAttribute(
  opening: tsModule.JsxOpeningElement | tsModule.JsxSelfClosingElement,
  attrName: string,
  ts: typeof tsModule,
): tsModule.JsxAttribute | undefined {
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
  return undefined;
}

function getStringLikeAttributeValue(attr: tsModule.JsxAttribute | undefined, ts: typeof tsModule): string | undefined {
  if (!attr || !attr.initializer) {
    return undefined;
  }

  if (ts.isStringLiteral(attr.initializer)) {
    return attr.initializer.text;
  }

  if (!ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
    return undefined;
  }

  const expr = attr.initializer.expression;
  if (ts.isStringLiteralLike(expr)) {
    return expr.text;
  }
  if (ts.isIdentifier(expr)) {
    return expr.text;
  }
  return undefined;
}

function getAttributeName(name: tsModule.JsxAttributeName): string {
  if ('text' in name) {
    return String(name.text);
  }
  return name.getText();
}

function isSuppressed(position: number, diagnosticName: string, scopes: KForScope[]): boolean {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const scope = scopes[i];
    if (position < scope.start || position >= scope.end) {
      continue;
    }
    if (diagnosticName === scope.itemName || diagnosticName === scope.indexName) {
      return true;
    }
  }
  return false;
}

function isValidIdentifier(name: string): boolean {
  return IDENTIFIER_RE.test(name);
}

export = init;
