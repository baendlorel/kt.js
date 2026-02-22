import type tsModule from 'typescript/lib/tsserverlibrary';
import { MEMBER_COMPLETION_PATTERN } from './constants';
import { isIdentifierPart, isValidIdentifier } from './identifiers';
import { uniqueTypes } from './type-resolution';
import type { KForBinding, MemberCompletionContext } from './types';

export function createMemberCompletionEntries(
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
  const candidates = uniqueTypes(types, checker, scopeNode, ts);

  for (let i = 0; i < candidates.length; i++) {
    const properties = checker.getPropertiesOfType(checker.getApparentType(candidates[i]));
    for (let j = 0; j < properties.length; j++) {
      const property = properties[j];
      const name = property.getName();
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
        kind: getCompletionKind(property, ts),
        kindModifiers: '',
        sortText: '0',
      });
    }
  }

  return Array.from(entries.values()).sort((left, right) => left.name.localeCompare(right.name));
}

export function createAliasCompletionEntries(
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

export function mergeCompletionInfo(
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

export function createBindingTypeMap(bindings: Map<string, KForBinding>): Map<string, readonly tsModule.Type[]> {
  const map = new Map<string, readonly tsModule.Type[]>();
  for (const binding of bindings.values()) {
    map.set(binding.name, binding.types);
  }
  return map;
}

export function getMemberCompletionContext(text: string, position: number): MemberCompletionContext | undefined {
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

function getIdentifierPrefix(text: string, position: number): { text: string; isMemberAccess: boolean } {
  let start = position;
  while (start > 0 && isIdentifierPart(text.charCodeAt(start - 1))) {
    start--;
  }

  const prefix = text.slice(start, position);
  const isMemberAccess = start > 0 && text.charCodeAt(start - 1) === 46;
  return { text: prefix, isMemberAccess };
}
