import type tsModule from 'typescript/lib/tsserverlibrary';
import { getAttributeExpression, getAttributeText, getJsxAttribute, getScopeName } from './jsx-attributes';
import { parseKForExpression } from './kfor-parser';
import { uniqueIdentifiers } from './identifiers';
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
