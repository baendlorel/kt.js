import { KFOR_SINGLE_PATTERN, KFOR_TUPLE_PATTERN } from './constants';
import { uniqueIdentifiers } from './identifiers';
import type { ParsedKForExpression } from './types';

export function parseKForExpression(raw: string, allowOfKeyword: boolean): ParsedKForExpression | null {
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
      aliases: uniqueIdentifiers([singleMatch[1], 'index']),
      source,
    };
  }

  return null;
}
