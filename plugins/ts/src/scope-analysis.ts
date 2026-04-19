import type tsModule from 'typescript/lib/tsserverlibrary';
import { createBindingTypeMap } from './completion';
import { DIAGNOSTIC_KFOR_INVALID_MEMBER, DIAGNOSTIC_SOURCE } from './constants';
import { getAttributeExpression, getAttributeText, getJsxAttribute } from './jsx-attributes';
import { parseKForExpression } from './kfor-parser';
import { formatTypeList, resolveExpressionTypesFromText, uniqueTypes } from './type-resolution';
import type {
  FileAnalysis,
  KIfNarrowing,
  KIfScope,
  JsxOpeningLikeElement,
  KForBinding,
  KForScope,
  ResolvedConfig,
} from './types';

export function getFileAnalysis(
  fileName: string,
  languageService: tsModule.LanguageService,
  ts: typeof tsModule,
  config: ResolvedConfig,
): FileAnalysis | undefined {
  const program = languageService.getProgram();
  if (!program) {
    return undefined;
  }

  const sourceFile = program.getSourceFile(fileName);
  if (!sourceFile) {
    return undefined;
  }

  const checker = program.getTypeChecker();
  const ifScopes = collectKIfScopes(sourceFile, checker, ts, config);
  const scopes = collectKForScopes(sourceFile, checker, ts, config, ifScopes);
  if (scopes.length === 0 && ifScopes.length === 0) {
    return undefined;
  }

  return { sourceFile, checker, scopes, ifScopes };
}

export function isSuppressed(position: number, diagnosticName: string, scopes: KForScope[]): boolean {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const scope = scopes[i];
    if (position < scope.start || position >= scope.end) {
      continue;
    }

    for (let j = 0; j < scope.bindings.length; j++) {
      if (scope.bindings[j].name === diagnosticName) {
        return true;
      }
    }
  }

  return false;
}

export function collectBindingsAtPosition(position: number, scopes: KForScope[]): Map<string, KForBinding> {
  const bindings = new Map<string, KForBinding>();

  for (let i = scopes.length - 1; i >= 0; i--) {
    const scope = scopes[i];
    if (position < scope.start || position >= scope.end) {
      continue;
    }

    for (let j = 0; j < scope.bindings.length; j++) {
      const binding = scope.bindings[j];
      if (!bindings.has(binding.name)) {
        bindings.set(binding.name, binding);
      }
    }
  }

  return bindings;
}

export function collectIfNarrowingsAtPosition(
  position: number,
  ifScopes: KIfScope[],
): Map<string, readonly tsModule.Type[]> {
  const narrowings = new Map<string, readonly tsModule.Type[]>();

  for (let i = ifScopes.length - 1; i >= 0; i--) {
    const scope = ifScopes[i];
    if (position < scope.start || position >= scope.end) {
      continue;
    }

    for (let j = 0; j < scope.narrowings.length; j++) {
      const narrowing = scope.narrowings[j];
      if (!narrowings.has(narrowing.text)) {
        narrowings.set(narrowing.text, narrowing.types);
      }
    }
  }

  return narrowings;
}

export function resolveBindingsForForAttribute(
  opening: JsxOpeningLikeElement,
  forAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  config: ResolvedConfig,
  ts: typeof tsModule,
  ifScopes?: KIfScope[],
): KForBinding[] {
  return resolveScopeBindings(opening, forAttr, checker, config, ts, ifScopes);
}

export function getKForMemberDiagnostics(
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  scopes: KForScope[],
  ifScopes: KIfScope[],
  ts: typeof tsModule,
): tsModule.DiagnosticWithLocation[] {
  if (scopes.length === 0) {
    return [];
  }

  const diagnostics: tsModule.DiagnosticWithLocation[] = [];

  const visit = (node: tsModule.Node) => {
    let diagnostic: tsModule.DiagnosticWithLocation | undefined;

    if (ts.isPropertyAccessExpression(node) && !node.questionDotToken) {
      diagnostic = getMemberAccessDiagnostic(node, node.name.text, node.name, sourceFile, checker, scopes, ifScopes, ts);
    } else if (ts.isElementAccessExpression(node) && !node.questionDotToken && node.argumentExpression) {
      if (ts.isStringLiteralLike(node.argumentExpression) || ts.isNumericLiteral(node.argumentExpression)) {
        diagnostic = getMemberAccessDiagnostic(
          node,
          node.argumentExpression.text,
          node.argumentExpression,
          sourceFile,
          checker,
          scopes,
          ifScopes,
          ts,
        );
      }
    }

    if (diagnostic) {
      diagnostics.push(diagnostic);
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return diagnostics;
}

export function collectUsedSourceDeclarationSpans(
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
  config: ResolvedConfig,
): Set<string> {
  const used = new Set<string>();

  const visit = (node: tsModule.Node) => {
    let opening: JsxOpeningLikeElement | undefined;
    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const forAttr = getJsxAttribute(opening, config.forAttr, ts);
      if (forAttr) {
        collectUsedSourceDeclarationSpansForAttribute(opening, forAttr, sourceFile, checker, ts, config, used);
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return used;
}

function collectKForScopes(
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
  config: ResolvedConfig,
  ifScopes: KIfScope[],
): KForScope[] {
  const scopes: KForScope[] = [];

  const visit = (node: tsModule.Node) => {
    let opening: JsxOpeningLikeElement | undefined;
    let bodyScope: { start: number; end: number } | undefined;

    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
      bodyScope = resolveElementBodyScope(node, sourceFile);
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const forAttr = getJsxAttribute(opening, config.forAttr, ts);
      if (forAttr) {
        const bindings = resolveScopeBindings(opening, forAttr, checker, config, ts, ifScopes);
        if (bindings.length > 0) {
          if (bodyScope) {
            scopes.push({ start: bodyScope.start, end: bodyScope.end, bindings });
          }

          const attributeScopes = resolveAttributeExpressionScopes(opening, forAttr, sourceFile, ts);
          for (let i = 0; i < attributeScopes.length; i++) {
            scopes.push({ start: attributeScopes[i].start, end: attributeScopes[i].end, bindings });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function collectKIfScopes(
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
  config: ResolvedConfig,
): KIfScope[] {
  const scopes: KIfScope[] = [];

  const visit = (node: tsModule.Node) => {
    let opening: JsxOpeningLikeElement | undefined;
    let bodyScope: { start: number; end: number } | undefined;

    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
      bodyScope = resolveElementBodyScope(node, sourceFile);
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const ifAttr = getJsxAttribute(opening, config.ifAttr, ts);
      if (ifAttr) {
        const narrowings = resolveIfAttributeNarrowings(ifAttr, checker, sourceFile, ts);
        if (narrowings.length > 0) {
          if (bodyScope) {
            scopes.push({ start: bodyScope.start, end: bodyScope.end, narrowings });
          }

          const attributeScopes = resolveAttributeExpressionScopes(opening, ifAttr, sourceFile, ts);
          for (let i = 0; i < attributeScopes.length; i++) {
            scopes.push({ start: attributeScopes[i].start, end: attributeScopes[i].end, narrowings });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function resolveElementBodyScope(
  node: tsModule.JsxElement,
  sourceFile: tsModule.SourceFile,
): { start: number; end: number } | undefined {
  const start = node.openingElement.end;
  const end = node.closingElement.getStart(sourceFile);
  if (start >= end) {
    return undefined;
  }
  return { start, end };
}

function resolveAttributeExpressionScopes(
  opening: JsxOpeningLikeElement,
  excludedAttr: tsModule.JsxAttribute,
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
): Array<{ start: number; end: number }> {
  const scopes: Array<{ start: number; end: number }> = [];
  const attrs = opening.attributes.properties;

  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i];
    if (ts.isJsxSpreadAttribute(attr)) {
      const start = attr.getStart(sourceFile);
      const end = attr.end;
      if (start < end) {
        scopes.push({ start, end });
      }
      continue;
    }

    if (!ts.isJsxAttribute(attr) || attr === excludedAttr || !attr.initializer) {
      continue;
    }

    if (!ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
      continue;
    }

    const start = attr.initializer.getStart(sourceFile);
    const end = attr.initializer.end;
    if (start < end) {
      scopes.push({ start, end });
    }
  }

  return scopes;
}

function resolveIfAttributeNarrowings(
  ifAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
): KIfNarrowing[] {
  const expression = getAttributeExpression(ifAttr, ts);
  if (!expression) {
    return [];
  }

  const target = getStableIfNarrowingTarget(expression, ts);
  if (!target) {
    return [];
  }

  const types = getTruthyIfTypes(checker.getTypeAtLocation(target), checker, target, ts);
  if (types.length === 0) {
    return [];
  }

  return [
    {
      text: target.getText(sourceFile),
      types,
    },
  ];
}

function getStableIfNarrowingTarget(
  expression: tsModule.Expression,
  ts: typeof tsModule,
): tsModule.Expression | undefined {
  let current = expression;

  while (true) {
    if (ts.isParenthesizedExpression(current)) {
      current = current.expression;
      continue;
    }
    if (ts.isAsExpression(current) || ts.isTypeAssertionExpression(current) || ts.isSatisfiesExpression(current)) {
      current = current.expression;
      continue;
    }
    if (ts.isNonNullExpression(current)) {
      current = current.expression;
      continue;
    }
    break;
  }

  if (ts.isIdentifier(current)) {
    return current;
  }

  if (ts.isPropertyAccessExpression(current) && !current.questionDotToken) {
    const object = getStableIfNarrowingTarget(current.expression, ts);
    return object ? current : undefined;
  }

  return undefined;
}

function getTruthyIfTypes(
  sourceType: tsModule.Type,
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.Type[] {
  const candidates =
    sourceType.flags & ts.TypeFlags.Union ? (sourceType as tsModule.UnionType).types : [sourceType];
  const result: tsModule.Type[] = [];

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    if (candidate.flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined)) {
      continue;
    }
    if (
      candidate.flags & ts.TypeFlags.BooleanLiteral &&
      (candidate as tsModule.Type & { intrinsicName?: string }).intrinsicName === 'false'
    ) {
      continue;
    }
    result.push(candidate);
  }

  return uniqueTypes(result, checker, scopeNode, ts);
}

function resolveScopeBindings(
  opening: JsxOpeningLikeElement,
  forAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  config: ResolvedConfig,
  ts: typeof tsModule,
  ifScopes?: KIfScope[],
): KForBinding[] {
  const forExpression = getAttributeText(forAttr, ts);
  if (forExpression === undefined) {
    return [];
  }

  const parsed = parseKForExpression(forExpression, config.allowOfKeyword);
  if (!parsed) {
    return [];
  }

  const sourceTypes = resolveExpressionTypesFromText(parsed.source, {
    checker,
    ts,
    scopeNode: opening,
    narrowedExpressions: ifScopes ? collectIfNarrowingsAtPosition(opening.getStart(), ifScopes) : undefined,
  });
  return createBindings(parsed.aliases, sourceTypes, checker, opening, ts);
}

function collectUsedSourceDeclarationSpansForAttribute(
  opening: JsxOpeningLikeElement,
  forAttr: tsModule.JsxAttribute,
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
  config: ResolvedConfig,
  used: Set<string>,
) {
  const forExpression = getAttributeText(forAttr, ts);
  if (forExpression === undefined) {
    return;
  }

  const parsed = parseKForExpression(forExpression, config.allowOfKeyword);
  if (!parsed) {
    return;
  }

  const names = collectExternalSourceIdentifiers(parsed.source, ts);
  for (let i = 0; i < names.length; i++) {
    const symbol = resolveSymbolInScope(names[i], checker, opening, ts);
    if (!symbol?.declarations?.length) {
      continue;
    }

    for (let j = 0; j < symbol.declarations.length; j++) {
      const declaration = symbol.declarations[j];
      const declarationSource = declaration.getSourceFile();
      if (declarationSource.fileName !== sourceFile.fileName) {
        continue;
      }
      const nameNode = getDeclarationNameNode(declaration) || declaration;
      const start = nameNode.getStart(declarationSource);
      const length = nameNode.getWidth(declarationSource);
      if (length > 0) {
        used.add(`${declarationSource.fileName}:${start}:${length}`);
      }
    }
  }
}

function createBindings(
  names: string[],
  sourceTypes: tsModule.Type[],
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): KForBinding[] {
  if (names.length === 0) {
    return [];
  }

  const inferred = inferBindingTypes(sourceTypes, names.length, checker, scopeNode, ts);
  const bindings: KForBinding[] = [];

  for (let i = 0; i < names.length; i++) {
    bindings.push({
      name: names[i],
      types: inferred[i] || [],
    });
  }

  return bindings;
}

function inferBindingTypes(
  sourceTypes: tsModule.Type[],
  bindingCount: number,
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.Type[][] {
  const slots: tsModule.Type[][] = Array.from({ length: bindingCount }, () => []);
  const candidates = expandUnionTypes(sourceTypes, ts);

  for (let i = 0; i < candidates.length; i++) {
    const iterableCandidates = getIterableCandidates(candidates[i], checker, scopeNode, ts);
    for (let j = 0; j < iterableCandidates.length; j++) {
      const sourceType = checker.getApparentType(iterableCandidates[j]);
      const elementType = checker.getIndexTypeOfType(sourceType, ts.IndexKind.Number);
      const stringValueType = elementType ? undefined : checker.getIndexTypeOfType(sourceType, ts.IndexKind.String);
      const valueTypes = elementType ? [elementType] : stringValueType ? [stringValueType] : [];
      if (valueTypes.length === 0) {
        continue;
      }

      slots[0].push(...valueTypes);
      if (bindingCount > 1) {
        slots[1].push(elementType ? checker.getNumberType() : checker.getStringType());
      }
    }
  }

  for (let i = 0; i < slots.length; i++) {
    slots[i] = uniqueTypes(slots[i], checker, scopeNode, ts);
  }

  return slots;
}

function expandUnionTypes(types: tsModule.Type[], ts: typeof tsModule): tsModule.Type[] {
  const result: tsModule.Type[] = [];

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    if (type.flags & ts.TypeFlags.Union) {
      const union = type as tsModule.UnionType;
      result.push(...union.types);
      continue;
    }
    result.push(type);
  }

  return result;
}

function getIterableCandidates(
  sourceType: tsModule.Type,
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.Type[] {
  const result: tsModule.Type[] = [sourceType];
  const apparentType = checker.getApparentType(sourceType);
  if (!isReactiveLikeType(apparentType, checker)) {
    return result;
  }

  const valueProperty = checker.getPropertyOfType(apparentType, 'value');
  if (!valueProperty) {
    return result;
  }

  const valueType = checker.getTypeOfSymbolAtLocation(valueProperty, scopeNode);
  const unwrapped = expandUnionTypes([valueType], ts);
  for (let i = 0; i < unwrapped.length; i++) {
    result.push(unwrapped[i]);
  }

  return result;
}

function isReactiveLikeType(sourceType: tsModule.Type, checker: tsModule.TypeChecker): boolean {
  const hasValue = !!checker.getPropertyOfType(sourceType, 'value');
  if (!hasValue) {
    return false;
  }
  return !!checker.getPropertyOfType(sourceType, 'kid') && !!checker.getPropertyOfType(sourceType, 'ktype');
}

function getMemberAccessDiagnostic(
  node: tsModule.PropertyAccessExpression | tsModule.ElementAccessExpression,
  memberName: string,
  highlightNode: tsModule.Node,
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  scopes: KForScope[],
  ifScopes: KIfScope[],
  ts: typeof tsModule,
): tsModule.DiagnosticWithLocation | undefined {
  const bindings = collectBindingsAtPosition(node.getStart(sourceFile), scopes);
  if (bindings.size === 0) {
    return undefined;
  }

  const root = getRootIdentifier(node.expression, ts);
  if (!root || !bindings.has(root.text)) {
    return undefined;
  }

  const localBindings = createBindingTypeMap(bindings);
  const receiverTypes = resolveExpressionTypesFromText(node.expression.getText(sourceFile), {
    checker,
    ts,
    scopeNode: node,
    localBindings,
    narrowedExpressions: collectIfNarrowingsAtPosition(node.getStart(sourceFile), ifScopes),
  });
  if (receiverTypes.length === 0) {
    return undefined;
  }

  const accessTypes = resolveExpressionTypesFromText(node.getText(sourceFile), {
    checker,
    ts,
    scopeNode: node,
    localBindings,
    narrowedExpressions: collectIfNarrowingsAtPosition(node.getStart(sourceFile), ifScopes),
  });
  if (accessTypes.length > 0) {
    return undefined;
  }

  const start = highlightNode.getStart(sourceFile);
  return {
    file: sourceFile,
    start,
    length: highlightNode.end - start,
    category: ts.DiagnosticCategory.Error,
    code: DIAGNOSTIC_KFOR_INVALID_MEMBER,
    messageText: `Property '${memberName}' does not exist on type '${formatTypeList(receiverTypes, checker, node, ts)}'.`,
    source: DIAGNOSTIC_SOURCE,
  };
}

function getRootIdentifier(expr: tsModule.Expression, ts: typeof tsModule): tsModule.Identifier | undefined {
  let current = unwrapExpression(expr, ts);

  while (true) {
    if (ts.isIdentifier(current)) {
      return current;
    }
    if (ts.isPropertyAccessExpression(current)) {
      current = unwrapExpression(current.expression, ts);
      continue;
    }
    if (ts.isElementAccessExpression(current)) {
      current = unwrapExpression(current.expression, ts);
      continue;
    }
    if (ts.isCallExpression(current)) {
      current = unwrapExpression(current.expression, ts);
      continue;
    }
    return undefined;
  }
}

function collectExternalSourceIdentifiers(raw: string, ts: typeof tsModule): string[] {
  const sourceFile = ts.createSourceFile(
    '__k_for_identifiers.ts',
    `(${raw});`,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const statement = sourceFile.statements[0];
  if (!statement || !ts.isExpressionStatement(statement)) {
    return [];
  }

  const identifiers = new Set<string>();
  const scopes: Array<Set<string>> = [new Set()];

  const isLocal = (name: string) => {
    for (let i = scopes.length - 1; i >= 0; i--) {
      if (scopes[i].has(name)) {
        return true;
      }
    }
    return false;
  };

  const declareName = (name: tsModule.BindingName) => {
    if (ts.isIdentifier(name)) {
      scopes[scopes.length - 1].add(name.text);
      return;
    }
    if (ts.isObjectBindingPattern(name) || ts.isArrayBindingPattern(name)) {
      for (let i = 0; i < name.elements.length; i++) {
        const element = name.elements[i];
        if (ts.isOmittedExpression(element)) {
          continue;
        }
        declareName(element.name);
      }
    }
  };

  const visitFunctionLike = (
    node: tsModule.FunctionExpression | tsModule.ArrowFunction,
    body: tsModule.Node,
  ) => {
    const scope = new Set<string>();
    scopes.push(scope);
    if (ts.isFunctionExpression(node) && node.name) {
      scope.add(node.name.text);
    }
    for (let i = 0; i < node.parameters.length; i++) {
      declareName(node.parameters[i].name);
    }
    visit(body);
    scopes.pop();
  };

  const visit = (node: tsModule.Node) => {
    if (ts.isIdentifier(node)) {
      if (ts.isPropertyAccessExpression(node.parent) && node.parent.name === node) {
        return;
      }
      if (ts.isPropertyAssignment(node.parent) && node.parent.name === node) {
        return;
      }
      if (
        (ts.isBindingElement(node.parent) && node.parent.name === node) ||
        (ts.isParameter(node.parent) && node.parent.name === node) ||
        (ts.isVariableDeclaration(node.parent) && node.parent.name === node)
      ) {
        return;
      }
      if (!isLocal(node.text)) {
        identifiers.add(node.text);
      }
      return;
    }

    if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
      visitFunctionLike(node, node.body);
      return;
    }

    if (ts.isBlock(node)) {
      scopes.push(new Set());
      ts.forEachChild(node, visit);
      scopes.pop();
      return;
    }

    if (ts.isVariableDeclaration(node)) {
      declareName(node.name);
      if (node.initializer) {
        visit(node.initializer);
      }
      return;
    }

    ts.forEachChild(node, visit);
  };

  visit(statement.expression);
  return Array.from(identifiers);
}

function resolveSymbolInScope(
  name: string,
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.Symbol | undefined {
  const symbols = checker.getSymbolsInScope(scopeNode, ts.SymbolFlags.Value | ts.SymbolFlags.Alias);

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    if (symbol.getName() !== name) {
      continue;
    }

    if (symbol.flags & ts.SymbolFlags.Alias) {
      const aliased = checker.getAliasedSymbol(symbol);
      if (aliased.flags & ts.SymbolFlags.Value) {
        return aliased;
      }
      continue;
    }

    if (symbol.flags & ts.SymbolFlags.Value) {
      return symbol;
    }
  }

  return undefined;
}

function getDeclarationNameNode(node: tsModule.Declaration): tsModule.Node | undefined {
  const namedNode = node as tsModule.Declaration & { name?: tsModule.Node };
  return namedNode.name;
}

function unwrapExpression(expr: tsModule.Expression, ts: typeof tsModule): tsModule.Expression {
  let current = expr;

  while (true) {
    if (ts.isParenthesizedExpression(current)) {
      current = current.expression;
      continue;
    }
    if (ts.isAsExpression(current) || ts.isTypeAssertionExpression(current) || ts.isSatisfiesExpression(current)) {
      current = current.expression;
      continue;
    }
    if (ts.isNonNullExpression(current)) {
      current = current.expression;
      continue;
    }
    return current;
  }
}
