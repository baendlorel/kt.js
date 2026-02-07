import type ts from 'typescript/lib/tsserverlibrary.js';

type JsxNode = ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment;

type DisplayParts = ts.SymbolDisplayPart[] | undefined;

type Checker = ts.TypeChecker;

type TypeText = string | null;

// 补全相关类型
interface EnhancedCompletionInfo extends ts.CompletionInfo {
  _isEnhanced?: boolean;
}

let log: ts.server.Logger['info'] = (() => {}) as any;

const init: ts.server.PluginModuleFactory = (mod) => {
  const tsModule = mod.typescript;

  return {
    create(info) {
      const logInfo = info.project?.projectService?.logger?.info;
      log = logInfo ? (message: string) => logInfo(`[ts-plugin-jsx-dom] ${message}`) : log;

      log('Plugin initialized');

      const languageService = info.languageService;
      const proxy = Object.create(null) as ts.LanguageService;

      for (const key of Object.keys(languageService) as Array<keyof ts.LanguageService>) {
        const value = languageService[key];
        if (value !== undefined) {
          proxy[key] = value as any;
        }
      }

      proxy.getQuickInfoAtPosition = (fileName, position) => {
        const prior = languageService.getQuickInfoAtPosition(fileName, position);
        if (!prior) {
          log(`getQuickInfoAtPosition: no prior info at ${fileName}:${position}`);
          return prior;
        }

        const program = languageService.getProgram();
        if (!program) {
          log(`getQuickInfoAtPosition: no program for ${fileName}`);
          return prior;
        }

        const sourceFile = program.getSourceFile(fileName);
        if (!sourceFile) {
          log(`getQuickInfoAtPosition: no sourceFile for ${fileName}`);
          return prior;
        }

        const checker = program.getTypeChecker();
        const typeText = resolvePreferredTypeText(tsModule, checker, sourceFile, position);
        if (!typeText) {
          log(`getQuickInfoAtPosition: could not resolve type at ${fileName}:${position}`);
          return prior;
        }

        const displayText = tsModule.displayPartsToString(prior.displayParts || []);
        if (!displayText.includes('JSX.Element')) {
          log(`getQuickInfoAtPosition: not JSX.Element at ${fileName}:${position} - "${displayText}"`);
          return prior;
        }

        const replacedText = displayText.replace(/JSX\.Element/g, typeText);
        log(`getQuickInfoAtPosition: replaced JSX.Element -> ${typeText} at ${fileName}:${position}`);
        return {
          ...prior,
          displayParts: [{ text: replacedText, kind: 'text' }],
        };
      };

      proxy.getCompletionsAtPosition = (fileName, position, options, formattingSettings) => {
        log(`getCompletionsAtPosition called at ${fileName}:${position}`);
        const prior = languageService.getCompletionsAtPosition(fileName, position, options, formattingSettings);
        if (!prior) {
          log(`getCompletionsAtPosition: no prior completions at ${fileName}:${position}`);
          return prior;
        }

        const program = languageService.getProgram();
        if (!program) {
          log(`getCompletionsAtPosition: no program for ${fileName}`);
          return prior;
        }

        const sourceFile = program.getSourceFile(fileName);
        if (!sourceFile) {
          log(`getCompletionsAtPosition: no sourceFile for ${fileName}`);
          return prior;
        }

        const checker = program.getTypeChecker();

        const node = findNodeAtPosition(tsModule, sourceFile, position);
        if (!node) {
          log(`getCompletionsAtPosition: could not find node at ${fileName}:${position}`);
          return prior;
        }

        let targetType: ts.Type | null = null;
        if (tsModule.isPropertyAccessExpression(node)) {
          const leftType = checker.getTypeAtLocation(node.expression);
          targetType = leftType;
          log(
            `getCompletionsAtPosition: property access expression, left type: ${checker.typeToString(leftType, sourceFile)}`,
          );
        } else if (tsModule.isIdentifier(node)) {
          const symbol = checker.getSymbolAtLocation(node);
          if (symbol) {
            targetType = checker.getTypeOfSymbolAtLocation(symbol, node);
            log(
              `getCompletionsAtPosition: identifier ${node.getText()}, type: ${checker.typeToString(targetType, sourceFile)}`,
            );
          }
        }

        if (!targetType) {
          log(`getCompletionsAtPosition: could not determine target type at ${fileName}:${position}`);
          return prior;
        }

        const typeText = checker.typeToString(targetType, sourceFile, tsModule.TypeFormatFlags.NoTruncation);
        if (!typeText.includes('JSX.Element')) {
          log(`getCompletionsAtPosition: not JSX.Element at ${fileName}:${position} - "${typeText}"`);
          return prior;
        }

        const preferredType = tsModule.isPropertyAccessExpression(node)
          ? (resolvePreferredTypeFromExpression(tsModule, checker, sourceFile, node.expression) ??
            resolvePreferredType(tsModule, checker, sourceFile, position))
          : resolvePreferredType(tsModule, checker, sourceFile, position);
        if (!preferredType) {
          log(`getCompletionsAtPosition: could not resolve preferred JSX type at ${fileName}:${position}`);
          return prior;
        }

        const jsxTypeText = checker.typeToString(preferredType, sourceFile, tsModule.TypeFormatFlags.NoTruncation);
        if (!jsxTypeText) {
          log(`getCompletionsAtPosition: could not resolve JSX type at ${fileName}:${position}`);
          return prior;
        }

        log(`getCompletionsAtPosition: JSX.Element -> ${jsxTypeText} at ${fileName}:${position}`);

        const entries = buildEntriesFromType(tsModule, checker, preferredType);
        if (entries.length === 0) {
          log(`getCompletionsAtPosition: no properties found for ${jsxTypeText}`);
          return prior;
        }

        const enhancedPrior: EnhancedCompletionInfo = {
          ...prior,
          entries,
          _isEnhanced: true,
        };

        return enhancedPrior;
      };

      proxy.getCompletionEntryDetails = (fileName, position, entryName, formatOptions, source, preferences, data) => {
        log(`getCompletionEntryDetails called at ${fileName}:${position} for "${entryName}"`);
        const prior = languageService.getCompletionEntryDetails(
          fileName,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
          data,
        );
        if (!prior) {
          log(`getCompletionEntryDetails: no prior details at ${fileName}:${position}`);
          return prior;
        }

        const program = languageService.getProgram();
        if (!program) {
          log(`getCompletionEntryDetails: no program for ${fileName}`);
          return prior;
        }

        const sourceFile = program.getSourceFile(fileName);
        if (!sourceFile) {
          log(`getCompletionEntryDetails: no sourceFile for ${fileName}`);
          return prior;
        }

        const checker = program.getTypeChecker();

        const jsxTypeText = resolvePreferredTypeText(tsModule, checker, sourceFile, position);
        if (!jsxTypeText) {
          log(`getCompletionEntryDetails: could not resolve JSX type at ${fileName}:${position}`);
          return prior;
        }

        if (prior.displayParts) {
          const displayText = tsModule.displayPartsToString(prior.displayParts);
          if (displayText.includes('JSX.Element')) {
            const replacedText = displayText.replace(/JSX\.Element/g, jsxTypeText);
            log(`getCompletionEntryDetails: replaced JSX.Element -> ${jsxTypeText} at ${fileName}:${position}`);
            return {
              ...prior,
              displayParts: [{ text: replacedText, kind: 'text' }],
            };
          } else {
            log(
              `getCompletionEntryDetails: display text does not contain JSX.Element at ${fileName}:${position} - "${displayText}"`,
            );
          }
        } else {
          log(`getCompletionEntryDetails: no displayParts at ${fileName}:${position}`);
        }

        return prior;
      };

      function resolvePreferredTypeText(
        tsModule: typeof ts,
        checker: Checker,
        sourceFile: ts.SourceFile,
        position: number,
      ): TypeText {
        const preferredType = resolvePreferredType(tsModule, checker, sourceFile, position);
        if (!preferredType) {
          return null;
        }

        return checker.typeToString(preferredType, sourceFile, tsModule.TypeFormatFlags.NoTruncation);
      }

      function resolvePreferredType(
        tsModule: typeof ts,
        checker: Checker,
        sourceFile: ts.SourceFile,
        position: number,
      ): ts.Type | null {
        const jsxNode = findNearestJsxNode(tsModule, sourceFile, position);
        if (jsxNode) {
          log(`resolvePreferredType: found nearest JSX node at ${sourceFile.fileName}:${position}`);
          const type = getJsxNodeType(tsModule, checker, sourceFile, jsxNode);
          if (type) {
            log(`resolvePreferredType: JSX node type resolved to ${checker.typeToString(type, sourceFile)}`);
            return type;
          }
          log(`resolvePreferredType: JSX node type could not be resolved`);
        }

        const token = (tsModule as any).getTokenAtPosition(sourceFile, position);
        if (!token) {
          log(`resolvePreferredType: no token at ${sourceFile.fileName}:${position}`);
          return null;
        }

        log(`resolvePreferredType: token kind=${token.kind}, text="${token.getText?.(sourceFile) || ''}"`);

        const symbol = checker.getSymbolAtLocation(token);
        if (!symbol) {
          log(`resolvePreferredType: no symbol at ${sourceFile.fileName}:${position}`);
          return null;
        }

        log(`resolvePreferredType: symbol name="${symbol.getName()}"`);

        const declarations = symbol.getDeclarations();
        if (!declarations || declarations.length === 0) {
          log(`resolvePreferredType: no declarations for symbol "${symbol.getName()}"`);
          return null;
        }

        log(`resolvePreferredType: found ${declarations.length} declaration(s)`);

        for (const decl of declarations) {
          const initializer = getInitializerFromDeclaration(tsModule, decl);
          if (initializer) {
            log(`resolvePreferredType: found initializer, isJsxNode=${isJsxNode(tsModule, initializer)}`);
            if (isJsxNode(tsModule, initializer)) {
              const type = getJsxNodeType(tsModule, checker, sourceFile, initializer);
              if (type) {
                log(`resolvePreferredType: initializer type resolved to ${checker.typeToString(type, sourceFile)}`);
                return type;
              }
              log(`resolvePreferredType: initializer type could not be resolved`);
            }

            const type = checker.getTypeAtLocation(initializer);
            if (type) {
              log(`resolvePreferredType: initializer type resolved to ${checker.typeToString(type, sourceFile)}`);
              return type;
            }
          }
        }

        log(`resolvePreferredType: no JSX initializer found`);
        return null;
      }

      function resolvePreferredTypeFromExpression(
        tsModule: typeof ts,
        checker: Checker,
        sourceFile: ts.SourceFile,
        expression: ts.Expression,
      ): ts.Type | null {
        const symbol = checker.getSymbolAtLocation(expression);
        if (!symbol) {
          log(`resolvePreferredTypeFromExpression: no symbol for expression "${expression.getText(sourceFile)}"`);
          return null;
        }

        const declarations = symbol.getDeclarations();
        if (!declarations || declarations.length === 0) {
          log(`resolvePreferredTypeFromExpression: no declarations for symbol "${symbol.getName()}"`);
          return null;
        }

        for (const decl of declarations) {
          const initializer = getInitializerFromDeclaration(tsModule, decl);
          if (initializer) {
            log(`resolvePreferredTypeFromExpression: found initializer, isJsxNode=${isJsxNode(tsModule, initializer)}`);
            if (isJsxNode(tsModule, initializer)) {
              const type = getJsxNodeType(tsModule, checker, sourceFile, initializer);
              if (type) {
                log(
                  `resolvePreferredTypeFromExpression: initializer type resolved to ${checker.typeToString(type, sourceFile)}`,
                );
                return type;
              }
            }

            const type = checker.getTypeAtLocation(initializer);
            if (type) {
              log(
                `resolvePreferredTypeFromExpression: initializer type resolved to ${checker.typeToString(type, sourceFile)}`,
              );
              return type;
            }
          }
        }

        return null;
      }

      function findNearestJsxNode(tsModule: typeof ts, sourceFile: ts.SourceFile, position: number): JsxNode | null {
        const token = (tsModule as any).getTokenAtPosition(sourceFile, position);
        if (!token) {
          return null;
        }

        let current: ts.Node | undefined = token;
        while (current) {
          if (isJsxNode(tsModule, current)) return current;
          current = current.parent;
        }

        return null;
      }

      return proxy;
    },
  };
};

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
  if (tsModule.isJsxFragment(node)) {
    log(`getJsxNodeTypeText: node is JSX fragment, skipping`);
    return null;
  }

  const tagName = getTagNameFromJsx(tsModule, node);
  if (!tagName) {
    log(`getJsxNodeTypeText: no tag name found`);
    return null;
  }

  if (tsModule.isIdentifier(tagName)) {
    const tagText = tagName.text;
    log(`getJsxNodeTypeText: identifier tag="${tagText}"`);
    if (isIntrinsicTag(tagText)) {
      log(`getJsxNodeTypeText: intrinsic tag "${tagText}"`);
      const typeText = getIntrinsicElementTypeText(tsModule, checker, sourceFile, tagText);
      log(`getJsxNodeTypeText: intrinsic type resolved to ${typeText || 'null'}`);
      return typeText;
    }
    log(`getJsxNodeTypeText: component tag "${tagText}"`);
    return getComponentReturnTypeText(tsModule, checker, tagName);
  }

  if (tsModule.isPropertyAccessExpression(tagName)) {
    log(`getJsxNodeTypeText: property access expression`);
    return getComponentReturnTypeText(tsModule, checker, tagName);
  }

  if (tsModule.isJsxNamespacedName(tagName)) {
    const localName = tagName.name.text;
    log(`getJsxNodeTypeText: namespaced tag="${localName}"`);
    return getIntrinsicElementTypeText(tsModule, checker, sourceFile, localName);
  }

  log(`getJsxNodeTypeText: unknown tag type`);
  return null;
}

function getJsxNodeType(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  node: JsxNode,
): ts.Type | null {
  if (tsModule.isJsxFragment(node)) {
    log(`getJsxNodeType: node is JSX fragment, skipping`);
    return null;
  }

  const tagName = getTagNameFromJsx(tsModule, node);
  if (!tagName) {
    log(`getJsxNodeType: no tag name found`);
    return null;
  }

  if (tsModule.isIdentifier(tagName)) {
    const tagText = tagName.text;
    log(`getJsxNodeType: identifier tag="${tagText}"`);
    if (isIntrinsicTag(tagText)) {
      log(`getJsxNodeType: intrinsic tag "${tagText}"`);
      return getIntrinsicElementType(tsModule, checker, sourceFile, tagText);
    }
    log(`getJsxNodeType: component tag "${tagText}"`);
    return getComponentReturnType(tsModule, checker, tagName);
  }

  if (tsModule.isPropertyAccessExpression(tagName)) {
    log(`getJsxNodeType: property access expression`);
    return getComponentReturnType(tsModule, checker, tagName);
  }

  if (tsModule.isJsxNamespacedName(tagName)) {
    const localName = tagName.name.text;
    log(`getJsxNodeType: namespaced tag="${localName}"`);
    return getIntrinsicElementType(tsModule, checker, sourceFile, localName);
  }

  log(`getJsxNodeType: unknown tag type`);
  return null;
}

function getTagNameFromJsx(
  tsModule: typeof ts,
  node: ts.JsxElement | ts.JsxSelfClosingElement,
): ts.JsxTagNameExpression {
  if (tsModule.isJsxElement(node)) {
    return node.openingElement.tagName;
  }
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
  if (htmlType) {
    return htmlType;
  }

  const svgType = getElementTypeFromMap(tsModule, checker, sourceFile, 'SVGElementTagNameMap', tagName);
  if (svgType) {
    return svgType;
  }

  return null;
}

function getIntrinsicElementType(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  tagName: string,
): ts.Type | null {
  const htmlType = getElementTypeFromMapType(tsModule, checker, sourceFile, 'HTMLElementTagNameMap', tagName);
  if (htmlType) {
    return htmlType;
  }

  const svgType = getElementTypeFromMapType(tsModule, checker, sourceFile, 'SVGElementTagNameMap', tagName);
  if (svgType) {
    return svgType;
  }

  return null;
}

function getElementTypeFromMap(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  mapName: string,
  tagName: string,
): TypeText {
  const propType = getElementTypeFromMapType(tsModule, checker, sourceFile, mapName, tagName);
  if (!propType) {
    return null;
  }

  const typeText = checker.typeToString(propType, sourceFile, tsModule.TypeFormatFlags.NoTruncation);
  log(`getElementTypeFromMap: "${tagName}" resolved to ${typeText}`);
  return typeText;
}

function getElementTypeFromMapType(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  mapName: string,
  tagName: string,
): ts.Type | null {
  log(`getElementTypeFromMapType: looking for "${tagName}" in ${mapName}`);

  const mapSymbol = resolveGlobalSymbol(tsModule, checker, sourceFile, mapName, tsModule.SymbolFlags.Interface);
  if (!mapSymbol) {
    log(`getElementTypeFromMapType: ${mapName} not found`);
    return null;
  }

  log(`getElementTypeFromMapType: ${mapName} found`);
  const mapType =
    checker.getDeclaredTypeOfSymbol(mapSymbol) || checker.getTypeOfSymbolAtLocation(mapSymbol, sourceFile);
  const propSymbol = checker.getPropertyOfType(mapType, tagName) ?? mapType.getProperty(tagName);
  if (!propSymbol) {
    log(`getElementTypeFromMapType: property "${tagName}" not found in ${mapName}`);
    return null;
  }

  const propType = checker.getTypeOfSymbolAtLocation(propSymbol, sourceFile);
  log(`getElementTypeFromMapType: "${tagName}" resolved to ${checker.typeToString(propType, sourceFile)}`);
  return propType;
}

function resolveGlobalSymbol(
  tsModule: typeof ts,
  checker: Checker,
  sourceFile: ts.SourceFile,
  name: string,
  meaning: ts.SymbolFlags,
): ts.Symbol | undefined {
  const resolveName = (checker as any).resolveName as
    | ((name: string, location: ts.Node, meaning: ts.SymbolFlags, excludeGlobals?: boolean) => ts.Symbol | undefined)
    | undefined;

  if (resolveName) {
    const resolved = resolveName(name, sourceFile, meaning, false);
    if (resolved) {
      return resolved;
    }
  }

  const allSymbols = checker.getSymbolsInScope(sourceFile, meaning);
  log(`resolveGlobalSymbol: found ${allSymbols.length} symbol(s) for ${tsModule.SymbolFlags[meaning] || meaning}`);
  return allSymbols.find((symbol) => symbol.getName() === name);
}

function getComponentReturnTypeText(tsModule: typeof ts, checker: Checker, tagName: ts.JsxTagNameExpression): TypeText {
  const symbol = checker.getSymbolAtLocation(tagName);
  if (!symbol) {
    return null;
  }

  const targetSymbol = symbol.flags & tsModule.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;

  const type = checker.getTypeOfSymbolAtLocation(targetSymbol, tagName);
  const signatures = type.getCallSignatures();
  const signature = signatures[0] || type.getConstructSignatures()[0];
  if (!signature) {
    return null;
  }

  const returnType = checker.getReturnTypeOfSignature(signature);
  return checker.typeToString(returnType, tagName, tsModule.TypeFormatFlags.NoTruncation);
}

function getComponentReturnType(
  tsModule: typeof ts,
  checker: Checker,
  tagName: ts.JsxTagNameExpression,
): ts.Type | null {
  const symbol = checker.getSymbolAtLocation(tagName);
  if (!symbol) {
    return null;
  }

  const targetSymbol = symbol.flags & tsModule.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
  const type = checker.getTypeOfSymbolAtLocation(targetSymbol, tagName);
  const signatures = type.getCallSignatures();
  const signature = signatures[0] || type.getConstructSignatures()[0];
  if (!signature) {
    return null;
  }

  return checker.getReturnTypeOfSignature(signature);
}

function buildEntriesFromType(tsModule: typeof ts, checker: Checker, type: ts.Type): ts.CompletionEntry[] {
  const properties = checker.getPropertiesOfType(type);
  if (!properties || properties.length === 0) {
    return [];
  }

  return properties.map((symbol) => {
    const name = symbol.getName();
    const kind =
      symbol.flags & tsModule.SymbolFlags.Method
        ? tsModule.ScriptElementKind.memberFunctionElement
        : tsModule.ScriptElementKind.memberVariableElement;
    return {
      name,
      kind,
      kindModifiers: '',
      sortText: '0',
    } as ts.CompletionEntry;
  });
}

function findNodeAtPosition(tsModule: typeof ts, sourceFile: ts.SourceFile, position: number): ts.Node | undefined {
  const token = (tsModule as any).getTokenAtPosition(sourceFile, position);
  if (!token) {
    return undefined;
  }

  let node: ts.Node | undefined = token;
  while (node && (position < node.pos || position >= node.end)) {
    node = node.parent;
  }

  return node || undefined;
}

export = init;
