import path from 'node:path';
import type tsModule from 'typescript/lib/tsserverlibrary';

interface KForPluginConfig {
  forAttr?: string;
  itemAttr?: string;
  indexAttr?: string;
  itemName?: string;
  indexName?: string;
  allowOfKeyword?: boolean;
}

interface ResolvedConfig {
  forAttr: string;
  itemAttr: string;
  indexAttr: string;
  itemName: string;
  indexName: string;
  allowOfKeyword: boolean;
}

interface KForBinding {
  name: string;
  types: tsModule.Type[];
}

interface KForScope {
  start: number;
  end: number;
  bindings: KForBinding[];
}

interface ParsedKForExpression {
  aliases: string[];
  source: string;
}

interface TypeResolutionContext {
  checker: tsModule.TypeChecker;
  ts: typeof tsModule;
  scopeNode: tsModule.Node;
  localBindings?: ReadonlyMap<string, readonly tsModule.Type[]>;
}

interface MemberCompletionContext {
  receiver: string;
  prefix: string;
}

interface FileAnalysis {
  sourceFile: tsModule.SourceFile;
  checker: tsModule.TypeChecker;
  scopes: KForScope[];
}

const DIAGNOSTIC_CANNOT_FIND_NAME = 2304;
const IDENTIFIER_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const KFOR_SINGLE_PATTERN = /^([A-Za-z_$][A-Za-z0-9_$]*)\s+(in|of)\s+([\s\S]+)$/;
const KFOR_TUPLE_PATTERN =
  /^\(\s*([A-Za-z_$][A-Za-z0-9_$]*)(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?\s*\)\s+(in|of)\s+([\s\S]+)$/;
const MEMBER_COMPLETION_PATTERN =
  /([A-Za-z_$][A-Za-z0-9_$]*(?:\s*(?:\.\s*[A-Za-z_$][A-Za-z0-9_$]*|\[\s*(?:'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|\d+)\s*\]))*)\s*\.\s*([A-Za-z_$][A-Za-z0-9_$]*)?$/;

type JsxOpeningLikeElement = tsModule.JsxOpeningElement | tsModule.JsxSelfClosingElement;

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

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return diagnostics;
      }

      return diagnostics.filter((diag) => {
        if (diag.code !== DIAGNOSTIC_CANNOT_FIND_NAME || diag.start == null || diag.length == null) {
          return true;
        }

        const name = analysis.sourceFile.text.slice(diag.start, diag.start + diag.length).trim();
        if (!isValidIdentifier(name)) {
          return true;
        }

        return !isSuppressed(diag.start, name, analysis.scopes);
      });
    };

    proxy.getQuickInfoAtPosition = (fileName: string, position: number) => {
      const quickInfo = languageService.getQuickInfoAtPosition(fileName, position);
      if (!isJsxLikeFile(fileName)) {
        return quickInfo;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return quickInfo;
      }

      const identifier = findIdentifierAtPosition(analysis.sourceFile, position, ts);
      if (!identifier) {
        return quickInfo;
      }

      const bindings = collectBindingsAtPosition(position, analysis.scopes);
      const binding = bindings.get(identifier.text);
      if (!binding) {
        return quickInfo;
      }

      const typeText = formatTypeList(binding.types, analysis.checker, identifier, ts);
      return {
        kind: ts.ScriptElementKind.localVariableElement,
        kindModifiers: '',
        textSpan: {
          start: identifier.getStart(analysis.sourceFile),
          length: identifier.getWidth(analysis.sourceFile),
        },
        displayParts: [{ text: `(k-for) ${binding.name}: ${typeText}`, kind: 'text' }],
      };
    };

    proxy.getCompletionsAtPosition = (
      fileName: string,
      position: number,
      options: tsModule.GetCompletionsAtPositionOptions | undefined,
      formattingSettings: tsModule.FormatCodeSettings | undefined,
    ) => {
      const completions = languageService.getCompletionsAtPosition(fileName, position, options, formattingSettings);
      if (!isJsxLikeFile(fileName)) {
        return completions;
      }

      const analysis = getFileAnalysis(fileName, languageService, ts, config);
      if (!analysis) {
        return completions;
      }

      const bindings = collectBindingsAtPosition(position, analysis.scopes);
      if (bindings.size === 0) {
        return completions;
      }

      const contextNode = findInnermostNode(analysis.sourceFile, normalizePosition(position, analysis.sourceFile), ts) || analysis.sourceFile;
      const localBindings = createBindingTypeMap(bindings);
      const memberContext = getMemberCompletionContext(analysis.sourceFile.text, position);
      if (memberContext) {
        const receiverTypes = resolveExpressionTypesFromText(memberContext.receiver, {
          checker: analysis.checker,
          ts,
          scopeNode: contextNode,
          localBindings,
        });
        const memberEntries = createMemberCompletionEntries(
          receiverTypes,
          memberContext.prefix,
          analysis.checker,
          contextNode,
          ts,
        );
        if (memberEntries.length > 0) {
          return mergeCompletionInfo(completions, memberEntries, true);
        }
      }

      const aliasEntries = createAliasCompletionEntries(bindings, analysis.sourceFile.text, position, ts);
      if (aliasEntries.length > 0) {
        return mergeCompletionInfo(completions, aliasEntries, false);
      }

      return completions;
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
    allowOfKeyword: config?.allowOfKeyword !== false,
  };
}

function isJsxLikeFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ext === '.tsx' || ext === '.jsx';
}

function getFileAnalysis(
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
  const scopes = collectKForScopes(sourceFile, checker, ts, config);
  if (scopes.length === 0) {
    return undefined;
  }

  return { sourceFile, checker, scopes };
}

function collectKForScopes(
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
  config: ResolvedConfig,
): KForScope[] {
  const scopes: KForScope[] = [];

  const visit = (node: tsModule.Node) => {
    if (ts.isJsxElement(node)) {
      const forAttr = getJsxAttribute(node.openingElement, config.forAttr, ts);
      if (forAttr) {
        const bindings = resolveScopeBindings(node.openingElement, forAttr, checker, config, ts);
        const start = node.openingElement.end;
        const end = node.closingElement.getStart(sourceFile);

        if (start < end && bindings.length > 0) {
          scopes.push({ start, end, bindings });
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function resolveScopeBindings(
  opening: JsxOpeningLikeElement,
  forAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  config: ResolvedConfig,
  ts: typeof tsModule,
): KForBinding[] {
  const forExpression = getAttributeText(forAttr, ts);
  if (forExpression !== undefined) {
    const parsed = parseKForExpression(forExpression, config.allowOfKeyword);
    if (parsed) {
      const sourceTypes = resolveExpressionTypesFromText(parsed.source, {
        checker,
        ts,
        scopeNode: opening,
      });
      return createBindings(parsed.aliases, sourceTypes, checker, opening, ts);
    }
  }

  const itemName = getScopeName(opening, config.itemAttr, config.itemName, ts);
  const indexName = getScopeName(opening, config.indexAttr, config.indexName, ts);
  const aliases = uniqueIdentifiers([itemName, indexName]);
  const sourceTypes = getLegacyForSourceTypes(forAttr, checker, ts);
  return createBindings(aliases, sourceTypes, checker, opening, ts);
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
    const sourceType = checker.getApparentType(candidates[i]);
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
    if (bindingCount > 2) {
      slots[2].push(checker.getNumberType());
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

function getLegacyForSourceTypes(
  forAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
): tsModule.Type[] {
  const expression = getAttributeExpression(forAttr, ts);
  if (!expression || ts.isStringLiteralLike(expression)) {
    return [];
  }
  return [checker.getTypeAtLocation(expression)];
}

function getAttributeExpression(attr: tsModule.JsxAttribute | undefined, ts: typeof tsModule): tsModule.Expression | undefined {
  if (!attr?.initializer || !ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
    return undefined;
  }
  return attr.initializer.expression;
}

function resolveExpressionTypesFromText(raw: string, context: TypeResolutionContext): tsModule.Type[] {
  const value = raw.trim();
  if (!value) {
    return [];
  }

  const sourceFile = context.ts.createSourceFile(
    '__k_for_expression.ts',
    `(${value});`,
    context.ts.ScriptTarget.Latest,
    true,
    context.ts.ScriptKind.TS,
  );

  if (sourceFile.statements.length === 0) {
    return [];
  }

  const statement = sourceFile.statements[0];
  if (!context.ts.isExpressionStatement(statement)) {
    return [];
  }

  const types = resolveExpressionTypes(statement.expression, context);
  return uniqueTypes(types, context.checker, context.scopeNode, context.ts);
}

function resolveExpressionTypes(expr: tsModule.Expression, context: TypeResolutionContext): tsModule.Type[] {
  const ts = context.ts;
  const target = unwrapExpression(expr, ts);

  if (ts.isIdentifier(target)) {
    return resolveIdentifierTypes(target.text, context);
  }

  if (ts.isPropertyAccessExpression(target)) {
    const objectTypes = resolveExpressionTypes(target.expression, context);
    return resolvePropertyTypes(objectTypes, target.name.text, context, false);
  }

  if (ts.isElementAccessExpression(target)) {
    const objectTypes = resolveExpressionTypes(target.expression, context);
    const arg = target.argumentExpression;
    if (!arg) {
      return [];
    }
    if (ts.isStringLiteralLike(arg)) {
      return resolvePropertyTypes(objectTypes, arg.text, context, true);
    }
    if (ts.isNumericLiteral(arg)) {
      return resolveNumericElementTypes(objectTypes, Number(arg.text), context);
    }
    return resolveIndexedTypes(objectTypes, context);
  }

  if (ts.isCallExpression(target)) {
    const calleeTypes = resolveExpressionTypes(target.expression, context);
    const result: tsModule.Type[] = [];
    for (let i = 0; i < calleeTypes.length; i++) {
      const signatures = context.checker.getSignaturesOfType(calleeTypes[i], ts.SignatureKind.Call);
      for (let j = 0; j < signatures.length; j++) {
        result.push(context.checker.getReturnTypeOfSignature(signatures[j]));
      }
    }
    return uniqueTypes(result, context.checker, context.scopeNode, ts);
  }

  if (ts.isConditionalExpression(target)) {
    const left = resolveExpressionTypes(target.whenTrue, context);
    const right = resolveExpressionTypes(target.whenFalse, context);
    return uniqueTypes([...left, ...right], context.checker, context.scopeNode, ts);
  }

  if (
    ts.isBinaryExpression(target) &&
    (target.operatorToken.kind === ts.SyntaxKind.BarBarToken ||
      target.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
      target.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken)
  ) {
    const left = resolveExpressionTypes(target.left, context);
    const right = resolveExpressionTypes(target.right, context);
    return uniqueTypes([...left, ...right], context.checker, context.scopeNode, ts);
  }

  return [];
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

function resolveIdentifierTypes(name: string, context: TypeResolutionContext): tsModule.Type[] {
  const localTypes = context.localBindings?.get(name);
  if (localTypes && localTypes.length > 0) {
    return [...localTypes];
  }

  const symbol = resolveSymbolInScope(name, context);
  if (!symbol) {
    return [];
  }

  return [context.checker.getTypeOfSymbolAtLocation(symbol, context.scopeNode)];
}

function resolveSymbolInScope(name: string, context: TypeResolutionContext): tsModule.Symbol | undefined {
  const symbols = context.checker.getSymbolsInScope(
    context.scopeNode,
    context.ts.SymbolFlags.Value | context.ts.SymbolFlags.Alias,
  );
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    if (symbol.getName() !== name) {
      continue;
    }
    if (symbol.flags & context.ts.SymbolFlags.Alias) {
      const aliased = context.checker.getAliasedSymbol(symbol);
      if (aliased.flags & context.ts.SymbolFlags.Value) {
        return aliased;
      }
      continue;
    }
    if (symbol.flags & context.ts.SymbolFlags.Value) {
      return symbol;
    }
  }
  return undefined;
}

function resolvePropertyTypes(
  objectTypes: tsModule.Type[],
  propertyName: string,
  context: TypeResolutionContext,
  allowStringIndexFallback: boolean,
): tsModule.Type[] {
  const result: tsModule.Type[] = [];
  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const prop = context.checker.getPropertyOfType(targetType, propertyName);
    if (prop) {
      result.push(context.checker.getTypeOfSymbolAtLocation(prop, context.scopeNode));
      continue;
    }
    if (allowStringIndexFallback) {
      const stringIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.String);
      if (stringIndexType) {
        result.push(stringIndexType);
      }
    }
  }
  return uniqueTypes(result, context.checker, context.scopeNode, context.ts);
}

function resolveNumericElementTypes(
  objectTypes: tsModule.Type[],
  index: number,
  context: TypeResolutionContext,
): tsModule.Type[] {
  const result: tsModule.Type[] = [];
  const indexName = String(index);
  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const property = context.checker.getPropertyOfType(targetType, indexName);
    if (property) {
      result.push(context.checker.getTypeOfSymbolAtLocation(property, context.scopeNode));
    }
    const numericIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.Number);
    if (numericIndexType) {
      result.push(numericIndexType);
    }
  }
  return uniqueTypes(result, context.checker, context.scopeNode, context.ts);
}

function resolveIndexedTypes(objectTypes: tsModule.Type[], context: TypeResolutionContext): tsModule.Type[] {
  const result: tsModule.Type[] = [];
  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const stringIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.String);
    if (stringIndexType) {
      result.push(stringIndexType);
    }
    const numericIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.Number);
    if (numericIndexType) {
      result.push(numericIndexType);
    }
  }
  return uniqueTypes(result, context.checker, context.scopeNode, context.ts);
}

function createMemberCompletionEntries(
  types: tsModule.Type[],
  prefix: string,
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.CompletionEntry[] {
  if (types.length === 0) {
    return [];
  }

  const entries = new Map<string, tsModule.CompletionEntry>();
  const typeCandidates = uniqueTypes(types, checker, scopeNode, ts);
  for (let i = 0; i < typeCandidates.length; i++) {
    const props = checker.getPropertiesOfType(checker.getApparentType(typeCandidates[i]));
    for (let j = 0; j < props.length; j++) {
      const prop = props[j];
      const name = prop.getName();
      if (!isValidIdentifier(name) || name.startsWith('__@')) {
        continue;
      }
      if (prefix && !name.startsWith(prefix)) {
        continue;
      }
      if (entries.has(name)) {
        continue;
      }
      entries.set(name, {
        name,
        kind: getCompletionKind(prop, ts),
        kindModifiers: '',
        sortText: '0',
      });
    }
  }

  return Array.from(entries.values()).sort((a, b) => a.name.localeCompare(b.name));
}

function createAliasCompletionEntries(
  bindings: Map<string, KForBinding>,
  text: string,
  position: number,
  ts: typeof tsModule,
): tsModule.CompletionEntry[] {
  const prefix = getIdentifierPrefix(text, position);
  if (prefix.isMemberAccess) {
    return [];
  }

  const entries: tsModule.CompletionEntry[] = [];
  for (const binding of bindings.values()) {
    if (prefix.text && !binding.name.startsWith(prefix.text)) {
      continue;
    }
    entries.push({
      name: binding.name,
      kind: ts.ScriptElementKind.localVariableElement,
      kindModifiers: '',
      sortText: '0',
    });
  }
  return entries;
}

function getCompletionKind(symbol: tsModule.Symbol, ts: typeof tsModule): tsModule.ScriptElementKind {
  const flags = symbol.flags;
  if (flags & ts.SymbolFlags.Method) {
    return ts.ScriptElementKind.memberFunctionElement;
  }
  if (flags & ts.SymbolFlags.Function) {
    return ts.ScriptElementKind.functionElement;
  }
  if (flags & (ts.SymbolFlags.GetAccessor | ts.SymbolFlags.SetAccessor | ts.SymbolFlags.Property)) {
    return ts.ScriptElementKind.memberVariableElement;
  }
  return ts.ScriptElementKind.memberVariableElement;
}

function mergeCompletionInfo(
  completions: tsModule.CompletionInfo | undefined,
  extraEntries: tsModule.CompletionEntry[],
  forceMemberCompletion: boolean,
): tsModule.CompletionInfo {
  if (!completions) {
    return {
      isGlobalCompletion: !forceMemberCompletion,
      isMemberCompletion: forceMemberCompletion,
      isNewIdentifierLocation: !forceMemberCompletion,
      entries: extraEntries,
    };
  }

  const seen = new Set<string>();
  for (let i = 0; i < completions.entries.length; i++) {
    seen.add(completions.entries[i].name);
  }

  const merged = completions.entries.slice();
  for (let i = 0; i < extraEntries.length; i++) {
    const entry = extraEntries[i];
    if (seen.has(entry.name)) {
      continue;
    }
    seen.add(entry.name);
    merged.push(entry);
  }

  return {
    ...completions,
    isMemberCompletion: completions.isMemberCompletion || forceMemberCompletion,
    entries: merged,
  };
}

function createBindingTypeMap(bindings: Map<string, KForBinding>): Map<string, readonly tsModule.Type[]> {
  const map = new Map<string, readonly tsModule.Type[]>();
  for (const binding of bindings.values()) {
    map.set(binding.name, binding.types);
  }
  return map;
}

function getMemberCompletionContext(text: string, position: number): MemberCompletionContext | undefined {
  const sliceStart = Math.max(0, position - 200);
  const snippet = text.slice(sliceStart, position);
  const match = MEMBER_COMPLETION_PATTERN.exec(snippet);
  if (!match) {
    return undefined;
  }
  return {
    receiver: match[1],
    prefix: match[2] || '',
  };
}

function getIdentifierPrefix(text: string, position: number): { text: string; isMemberAccess: boolean } {
  let start = position;
  while (start > 0 && isIdentifierPart(text.charCodeAt(start - 1))) {
    start--;
  }
  const prefix = text.slice(start, position);
  const isMemberAccess = start > 0 && text.charCodeAt(start - 1) === 46;
  return { text: prefix, isMemberAccess };
}

function isIdentifierPart(code: number): boolean {
  return (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57) ||
    code === 95 ||
    code === 36
  );
}

function findIdentifierAtPosition(
  sourceFile: tsModule.SourceFile,
  position: number,
  ts: typeof tsModule,
): tsModule.Identifier | undefined {
  const exact = findInnermostNode(sourceFile, normalizePosition(position, sourceFile), ts);
  if (exact && ts.isIdentifier(exact)) {
    return exact;
  }

  if (position > 0) {
    const prev = findInnermostNode(sourceFile, normalizePosition(position - 1, sourceFile), ts);
    if (prev && ts.isIdentifier(prev)) {
      return prev;
    }
  }

  return undefined;
}

function normalizePosition(position: number, sourceFile: tsModule.SourceFile): number {
  const max = Math.max(sourceFile.text.length - 1, 0);
  if (position < 0) {
    return 0;
  }
  if (position > max) {
    return max;
  }
  return position;
}

function findInnermostNode(
  node: tsModule.Node,
  position: number,
  ts: typeof tsModule,
): tsModule.Node | undefined {
  if (position < node.getFullStart() || position >= node.end) {
    return undefined;
  }

  let match: tsModule.Node | undefined;
  ts.forEachChild(node, (child) => {
    const childMatch = findInnermostNode(child, position, ts);
    if (childMatch) {
      match = childMatch;
    }
  });

  return match || node;
}

function collectBindingsAtPosition(position: number, scopes: KForScope[]): Map<string, KForBinding> {
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

function formatTypeList(
  types: tsModule.Type[],
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): string {
  if (types.length === 0) {
    return 'any';
  }

  const texts = new Set<string>();
  for (let i = 0; i < types.length; i++) {
    texts.add(checker.typeToString(types[i], scopeNode, ts.TypeFormatFlags.NoTruncation));
  }
  return Array.from(texts).join(' | ');
}

function uniqueTypes(
  types: tsModule.Type[],
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.Type[] {
  const seen = new Set<string>();
  const result: tsModule.Type[] = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const text = checker.typeToString(type, scopeNode, ts.TypeFormatFlags.NoTruncation);
    if (seen.has(text)) {
      continue;
    }
    seen.add(text);
    result.push(type);
  }
  return result;
}

function getScopeName(opening: JsxOpeningLikeElement, attrName: string, fallback: string, ts: typeof tsModule): string {
  const attr = getJsxAttribute(opening, attrName, ts);
  const raw = getAttributeText(attr, ts, true);
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

function getAttributeText(
  attr: tsModule.JsxAttribute | undefined,
  ts: typeof tsModule,
  allowIdentifier = false,
): string | undefined {
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
  if (allowIdentifier && ts.isIdentifier(expr)) {
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
    for (let j = 0; j < scope.bindings.length; j++) {
      if (scope.bindings[j].name === diagnosticName) {
        return true;
      }
    }
  }
  return false;
}

function parseKForExpression(raw: string, allowOfKeyword: boolean): ParsedKForExpression | null {
  const value = raw.trim();
  if (!value) {
    return null;
  }

  const tupleMatch = KFOR_TUPLE_PATTERN.exec(value);
  if (tupleMatch) {
    const keyword = tupleMatch[4];
    const source = tupleMatch[5]?.trim();
    if ((!allowOfKeyword && keyword === 'of') || !source) {
      return null;
    }
    return {
      aliases: uniqueIdentifiers([tupleMatch[1], tupleMatch[2], tupleMatch[3]].filter(Boolean) as string[]),
      source,
    };
  }

  const singleMatch = KFOR_SINGLE_PATTERN.exec(value);
  if (singleMatch) {
    const keyword = singleMatch[2];
    const source = singleMatch[3]?.trim();
    if ((!allowOfKeyword && keyword === 'of') || !source) {
      return null;
    }
    return {
      aliases: uniqueIdentifiers([singleMatch[1]]),
      source,
    };
  }

  return null;
}

function isValidIdentifier(name: string): boolean {
  return IDENTIFIER_RE.test(name);
}

function uniqueIdentifiers(names: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!isValidIdentifier(name) || seen.has(name)) {
      continue;
    }
    seen.add(name);
    result.push(name);
  }
  return result;
}

export = init;
