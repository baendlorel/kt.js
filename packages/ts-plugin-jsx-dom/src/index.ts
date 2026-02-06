import type ts from 'typescript/lib/tsserverlibrary.js';

type JsxNode = ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment;

type DisplayParts = ts.SymbolDisplayPart[] | undefined;

type Checker = ts.TypeChecker;

type TypeText = string | null;

const init: ts.server.PluginModuleFactory = (mod) => {
  const tsModule = mod.typescript;

  return {
    create(info) {
      const languageService = info.languageService;
      const proxy = Object.create(null) as ts.LanguageService;

      for (const key of Object.keys(languageService) as Array<keyof ts.LanguageService>) {
        const value = languageService[key];
        proxy[key] = (...args: unknown[]) => (value as (...innerArgs: unknown[]) => unknown)(...args);
      }

      proxy.getQuickInfoAtPosition = (fileName, position) => {
        const prior = languageService.getQuickInfoAtPosition(fileName, position);
        if (!prior) return prior;

        const program = languageService.getProgram();
        if (!program) return prior;

        const sourceFile = program.getSourceFile(fileName);
        if (!sourceFile) return prior;

        const checker = program.getTypeChecker();
        const typeText = resolvePreferredTypeText(tsModule, checker, sourceFile, position);
        if (!typeText) return prior;

        const displayText = tsModule.displayPartsToString(prior.displayParts || []);
        if (!displayText.includes('JSX.Element')) return prior;

        const replacedText = displayText.replace(/JSX\.Element/g, typeText);
        return {
          ...prior,
          displayParts: [{ text: replacedText, kind: 'text' }],
        };
      };

      return proxy;
    },
  };
};

function resolvePreferredTypeText(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  position: number,
): TypeText {
  const jsxNode = findNearestJsxNode(tsModule, sourceFile, position);
  if (jsxNode) {
    return getJsxNodeTypeText(tsModule, checker, sourceFile, jsxNode);
  }

  const token = tsModule.getTokenAtPosition(sourceFile, position);
  if (!token) return null;

  const symbol = checker.getSymbolAtLocation(token);
  if (!symbol) return null;

  for (const decl of symbol.getDeclarations() || []) {
    const initializer = getInitializerFromDeclaration(tsModule, decl);
    if (initializer && isJsxNode(tsModule, initializer)) {
      return getJsxNodeTypeText(tsModule, checker, sourceFile, initializer);
    }
  }

  return null;
}

function findNearestJsxNode(tsModule: typeof ts, sourceFile: ts.SourceFile, position: number): JsxNode | null {
  const token = tsModule.getTokenAtPosition(sourceFile, position);
  if (!token) return null;

  let current: ts.Node | undefined = token;
  while (current) {
    if (isJsxNode(tsModule, current)) return current;
    current = current.parent;
  }

  return null;
}

function isJsxNode(tsModule: typeof ts, node: ts.Node): node is JsxNode {
  return tsModule.isJsxElement(node) || tsModule.isJsxSelfClosingElement(node) || tsModule.isJsxFragment(node);
}

function getInitializerFromDeclaration(tsModule: typeof ts, decl: ts.Declaration): ts.Expression | null {
  if (tsModule.isVariableDeclaration(decl) || tsModule.isPropertyDeclaration(decl)) {
    return decl.initializer ?? null;
  }

  if (tsModule.isParameter(decl)) {
    return decl.initializer ?? null;
  }

  return null;
}

function getJsxNodeTypeText(tsModule: typeof ts, checker: Checker, sourceFile: ts.SourceFile, node: JsxNode): TypeText {
  if (tsModule.isJsxFragment(node)) return null;

  const tagName = getTagNameFromJsx(tsModule, node);
  if (!tagName) return null;

  if (tsModule.isIdentifier(tagName)) {
    if (isIntrinsicTag(tagName.text)) {
      return getIntrinsicElementTypeText(tsModule, checker, sourceFile, tagName.text);
    }
    return getComponentReturnTypeText(tsModule, checker, tagName);
  }

  if (tsModule.isPropertyAccessExpression(tagName)) {
    return getComponentReturnTypeText(tsModule, checker, tagName);
  }

  if (tsModule.isJsxNamespacedName(tagName)) {
    const localName = tagName.name.text;
    return getIntrinsicElementTypeText(tsModule, checker, sourceFile, localName);
  }

  return null;
}

function getTagNameFromJsx(
  tsModule: typeof ts,
  node: ts.JsxElement | ts.JsxSelfClosingElement,
): ts.JsxTagNameExpression {
  if (tsModule.isJsxElement(node)) return node.openingElement.tagName;
  return node.tagName;
}

function isIntrinsicTag(tagName: string): boolean {
  return tagName[0] === tagName[0].toLowerCase();
}

function getIntrinsicElementTypeText(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  tagName: string,
): TypeText {
  const htmlType = getElementTypeFromMap(tsModule, checker, sourceFile, 'HTMLElementTagNameMap', tagName);
  if (htmlType) return htmlType;

  const svgType = getElementTypeFromMap(tsModule, checker, sourceFile, 'SVGElementTagNameMap', tagName);
  if (svgType) return svgType;

  return null;
}

function getElementTypeFromMap(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  mapName: string,
  tagName: string,
): TypeText {
  const mapSymbol = checker
    .getSymbolsInScope(sourceFile, tsModule.SymbolFlags.Interface)
    .find((symbol) => symbol.getName() === mapName);

  if (!mapSymbol) return null;

  const mapType = checker.getTypeOfSymbolAtLocation(mapSymbol, sourceFile);
  const propSymbol = mapType.getProperty(tagName);
  if (!propSymbol) return null;

  const propType = checker.getTypeOfSymbolAtLocation(propSymbol, sourceFile);
  return checker.typeToString(propType, sourceFile, tsModule.TypeFormatFlags.NoTruncation);
}

function getComponentReturnTypeText(tsModule: typeof ts, checker: Checker, tagName: ts.JsxTagNameExpression): TypeText {
  const symbol = checker.getSymbolAtLocation(tagName);
  if (!symbol) return null;

  const targetSymbol = symbol.flags & tsModule.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;

  const type = checker.getTypeOfSymbolAtLocation(targetSymbol, tagName);
  const signatures = type.getCallSignatures();
  const signature = signatures[0] || type.getConstructSignatures()[0];
  if (!signature) return null;

  const returnType = checker.getReturnTypeOfSignature(signature);
  return checker.typeToString(returnType, tagName, tsModule.TypeFormatFlags.NoTruncation);
}

export default init;
