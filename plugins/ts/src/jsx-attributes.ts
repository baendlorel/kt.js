import type tsModule from 'typescript/lib/tsserverlibrary';
import { isValidIdentifier } from './identifiers';
import type { JsxOpeningLikeElement } from './types';

export function getScopeName(
  opening: JsxOpeningLikeElement,
  attrName: string,
  fallback: string,
  ts: typeof tsModule,
): string {
  const attr = getJsxAttribute(opening, attrName, ts);
  const raw = getAttributeText(attr, ts, true);
  if (raw && isValidIdentifier(raw)) {
    return raw;
  }
  return fallback;
}

export function getJsxAttribute(
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

export function getAttributeText(
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

export function getAttributeExpression(
  attr: tsModule.JsxAttribute | undefined,
  ts: typeof tsModule,
): tsModule.Expression | undefined {
  if (!attr?.initializer || !ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
    return undefined;
  }
  return attr.initializer.expression;
}

function getAttributeName(name: tsModule.JsxAttributeName): string {
  if ('text' in name) {
    return String(name.text);
  }
  return name.getText();
}
