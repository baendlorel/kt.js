import type tsModule from 'typescript/lib/tsserverlibrary';
import { getAttributeText, getJsxAttribute } from './jsx-attributes';
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
        const bindings = resolveScopeBindings(opening, forAttr, checker, config, ts);
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
  forAttr: tsModule.JsxAttribute,
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

    if (!ts.isJsxAttribute(attr) || attr === forAttr || !attr.initializer) {
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
