import type tsModule from 'typescript/lib/tsserverlibrary';
import { getAttributeExpression, getAttributeText, getJsxAttribute } from './jsx-attributes';
import { parseKForExpression } from './kfor-parser';
import { resolveExpressionTypesFromText, uniqueTypes } from './type-resolution';
import type {
  FileAnalysis,
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
  const scopes = collectKForScopes(sourceFile, checker, ts, config);
  if (scopes.length === 0) {
    return undefined;
  }

  return { sourceFile, checker, scopes };
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

export function resolveBindingsForForAttribute(
  opening: JsxOpeningLikeElement,
  forAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  config: ResolvedConfig,
  ts: typeof tsModule,
): KForBinding[] {
  return resolveScopeBindings(opening, forAttr, checker, config, ts);
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
        if (bindings.length > 0) {
          const bodyStart = node.openingElement.end;
          const bodyEnd = node.closingElement.getStart(sourceFile);
          if (bodyStart < bodyEnd) {
            scopes.push({ start: bodyStart, end: bodyEnd, bindings });
          }

          const keyScope = resolveKeyAttributeScope(node.openingElement, sourceFile, ts, config);
          if (keyScope) {
            scopes.push({ start: keyScope.start, end: keyScope.end, bindings });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function resolveKeyAttributeScope(
  opening: JsxOpeningLikeElement,
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
  config: ResolvedConfig,
): { start: number; end: number } | undefined {
  const keyAttr = getJsxAttribute(opening, config.keyAttr, ts);
  if (!keyAttr) {
    return undefined;
  }

  const keyExpression = getAttributeExpression(keyAttr, ts);
  if (!keyExpression || !keyAttr.initializer || !ts.isJsxExpression(keyAttr.initializer)) {
    return undefined;
  }

  const start = keyAttr.initializer.getStart(sourceFile);
  const end = keyAttr.initializer.end;
  if (start >= end) {
    return undefined;
  }

  return { start, end };
}

function resolveScopeBindings(
  opening: JsxOpeningLikeElement,
  forAttr: tsModule.JsxAttribute,
  checker: tsModule.TypeChecker,
  config: ResolvedConfig,
  ts: typeof tsModule,
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
  });
  return createBindings(parsed.aliases, sourceTypes, checker, opening, ts);
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
      if (bindingCount > 2) {
        slots[2].push(checker.getNumberType());
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
  return !!checker.getPropertyOfType(sourceType, 'isKT');
}
