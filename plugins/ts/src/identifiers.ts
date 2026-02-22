import { IDENTIFIER_RE } from './constants';

export function isValidIdentifier(name: string): boolean {
  return IDENTIFIER_RE.test(name);
}

export function uniqueIdentifiers(names: string[]): string[] {
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

export function isIdentifierPart(code: number): boolean {
  return (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57) ||
    code === 95 ||
    code === 36
  );
}
