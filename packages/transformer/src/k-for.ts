import { parseSync, type NodePath } from '@babel/core';
import * as t from '@babel/types';

const KFOR_SINGLE_PATTERN = /^([A-Za-z_$][A-Za-z0-9_$]*)\s+(in|of)\s+([\s\S]+)$/;
const KFOR_TUPLE_PATTERN =
  /^\(\s*([A-Za-z_$][A-Za-z0-9_$]*)(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?\s*\)\s+(in|of)\s+([\s\S]+)$/;
const KTFOR_HELPER_CACHE_KEY = '__kt_for_component_identifier__';
const KTFOR_COMPONENT_IMPORT_NAME = 'KTFor';

interface ParsedKForExpression {
  aliases: string[];
  source: string;
}

export function validateDirectiveCombinations(path: NodePath<t.JSXElement>) {
  const opening = path.node.openingElement;
  const hasFor = hasAttribute(opening, 'k-for');
  const hasIf = hasAttribute(opening, 'k-if');
  const hasElse = hasAttribute(opening, 'k-else');
  const hasElseIf = hasAttribute(opening, 'k-else-if');

  if (hasIf && hasElse) {
    throw path.buildCodeFrameError(
      'Invalid directive usage: `k-if` and `k-else` cannot be used on the same element.',
    );
  }

  if (hasFor && (hasIf || hasElseIf || hasElse)) {
    throw path.buildCodeFrameError(
      'Invalid directive usage: `k-for` cannot be combined with `k-if` / `k-else-if` / `k-else` on the same element.',
    );
  }
}

export function transformKFor(path: NodePath<t.JSXElement>): boolean {
  const opening = path.node.openingElement;
  const forAttr = getAttribute(opening, 'k-for');
  if (!forAttr) {
    return false;
  }

  const parsedForText = readAttributeStringValue(forAttr, path, 'k-for');
  const parsedFor = parseKForExpression(parsedForText);
  if (!parsedFor) {
    throw path.buildCodeFrameError(
      'Invalid `k-for` expression. Expected `item in list` or `(item, index[, array]) in list`.',
    );
  }

  const sourceExpression = parseTextAsExpression(path, parsedFor.source, 'k-for source');
  const keyAttr = getAttribute(opening, 'k-key');
  const keyCallback = createKeyCallback(path, keyAttr, parsedFor.aliases);

  const renderNode = t.cloneNode(path.node, true) as t.JSXElement;
  const renderOpening = renderNode.openingElement;
  renderOpening.attributes = removeAttributes(renderOpening.attributes, ['k-for', 'k-key']);

  const callbackParams = parsedFor.aliases.map((alias) => t.identifier(alias));
  const callback = t.arrowFunctionExpression(callbackParams, renderNode);
  const ktForIdentifier = ensureKTForIdentifier(path);
  const props: t.ObjectProperty[] = [
    t.objectProperty(t.identifier('list'), sourceExpression),
    t.objectProperty(t.identifier('map'), callback),
  ];

  if (keyCallback) {
    props.splice(1, 0, t.objectProperty(t.identifier('key'), keyCallback));
  }

  const ktForCall = t.callExpression(ktForIdentifier, [t.objectExpression(props)]);

  if (isInsideJSXChildren(path)) {
    path.replaceWith(t.jsxExpressionContainer(ktForCall));
  } else {
    path.replaceWith(ktForCall);
  }

  return true;
}

function parseKForExpression(raw: string): ParsedKForExpression | null {
  const value = raw.trim();
  if (!value) {
    return null;
  }

  const tupleMatch = KFOR_TUPLE_PATTERN.exec(value);
  if (tupleMatch) {
    const source = tupleMatch[5]?.trim();
    if (!source) {
      return null;
    }
    const aliases = [tupleMatch[1], tupleMatch[2], tupleMatch[3]].filter(
      (item): item is string => typeof item === 'string' && item.length > 0,
    );
    return {
      aliases,
      source,
    };
  }

  const singleMatch = KFOR_SINGLE_PATTERN.exec(value);
  if (singleMatch) {
    const source = singleMatch[3]?.trim();
    if (!source) {
      return null;
    }
    return {
      aliases: [singleMatch[1]],
      source,
    };
  }

  return null;
}

function parseTextAsExpression(path: NodePath<t.JSXElement>, text: string, label: string): t.Expression {
  try {
    const ast = parseSync(`(${text});`, {
      configFile: false,
      babelrc: false,
      sourceType: 'module',
      parserOpts: {
        plugins: ['typescript', 'jsx'],
      },
    });

    if (!ast) {
      throw new Error('Babel returned an empty AST.');
    }
    const statement = ast.program.body[0];
    if (!statement || !t.isExpressionStatement(statement)) {
      throw new Error('Expected an expression statement.');
    }
    return statement.expression;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw path.buildCodeFrameError(`Failed to parse ${label}: ${message}`);
  }
}

function getAttribute(
  opening: t.JSXOpeningElement,
  name: string,
): t.JSXAttribute | undefined {
  const attributes = opening.attributes || [];
  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    if (!t.isJSXAttribute(attr) || !t.isJSXIdentifier(attr.name)) {
      continue;
    }
    if (attr.name.name === name) {
      return attr;
    }
  }
  return undefined;
}

function hasAttribute(opening: t.JSXOpeningElement, name: string): boolean {
  return !!getAttribute(opening, name);
}

function readAttributeStringValue(
  attr: t.JSXAttribute,
  path: NodePath<t.JSXElement>,
  attrName: string,
): string {
  if (!attr.value) {
    throw path.buildCodeFrameError(`Directive \`${attrName}\` requires a string value.`);
  }

  if (t.isStringLiteral(attr.value)) {
    return attr.value.value;
  }

  if (!t.isJSXExpressionContainer(attr.value)) {
    throw path.buildCodeFrameError(`Directive \`${attrName}\` must be a string literal.`);
  }
  if (t.isJSXEmptyExpression(attr.value.expression)) {
    throw path.buildCodeFrameError(`Directive \`${attrName}\` cannot be empty.`);
  }
  if (t.isStringLiteral(attr.value.expression)) {
    return attr.value.expression.value;
  }
  if (t.isTemplateLiteral(attr.value.expression) && attr.value.expression.expressions.length === 0) {
    return attr.value.expression.quasis[0]?.value.cooked ?? '';
  }

  throw path.buildCodeFrameError(`Directive \`${attrName}\` must be a string literal.`);
}

function hasStringLikeValue(attr: t.JSXAttribute): boolean {
  if (!attr.value) {
    return false;
  }
  if (t.isStringLiteral(attr.value)) {
    return true;
  }
  if (!t.isJSXExpressionContainer(attr.value)) {
    return false;
  }
  if (t.isStringLiteral(attr.value.expression)) {
    return true;
  }
  return t.isTemplateLiteral(attr.value.expression) && attr.value.expression.expressions.length === 0;
}

function createKeyCallback(
  path: NodePath<t.JSXElement>,
  keyAttr: t.JSXAttribute | undefined,
  aliases: string[],
): t.ArrowFunctionExpression | null {
  if (!keyAttr || !hasStringLikeValue(keyAttr)) {
    return null;
  }

  const keyText = readAttributeStringValue(keyAttr, path, 'k-key');
  const keyExpression = parseTextAsExpression(path, keyText, 'k-key');
  const params = aliases.map((alias) => t.identifier(alias));
  return t.arrowFunctionExpression(params, keyExpression);
}

function removeAttributes(
  attributes: (t.JSXAttribute | t.JSXSpreadAttribute)[] | undefined,
  names: string[],
): (t.JSXAttribute | t.JSXSpreadAttribute)[] {
  const set = new Set(names);
  if (!attributes || attributes.length === 0) {
    return [];
  }
  return attributes.filter((attr) => {
    if (!t.isJSXAttribute(attr) || !t.isJSXIdentifier(attr.name)) {
      return true;
    }
    return !set.has(attr.name.name);
  });
}

function isInsideJSXChildren(path: NodePath<t.JSXElement>): boolean {
  if (!path.inList || path.listKey !== 'children') {
    return false;
  }
  const parent = path.parentPath;
  return !!parent && (parent.isJSXElement() || parent.isJSXFragment());
}

function ensureKTForIdentifier(path: NodePath<t.JSXElement>): t.Identifier {
  const programPath = getProgramPath(path);
  const cached = programPath.getData(KTFOR_HELPER_CACHE_KEY);
  if (t.isIdentifier(cached)) {
    return t.identifier(cached.name);
  }

  const importSource = hasImportSource(programPath, '@ktjs/core') ? '@ktjs/core' : 'kt.js';
  const localIdentifier = programPath.scope.generateUidIdentifier(KTFOR_COMPONENT_IMPORT_NAME);
  const importDeclaration = t.importDeclaration(
    [t.importSpecifier(localIdentifier, t.identifier(KTFOR_COMPONENT_IMPORT_NAME))],
    t.stringLiteral(importSource),
  );

  const insertIndex = findImportInsertIndex(programPath.node.body);
  programPath.node.body.splice(insertIndex, 0, importDeclaration);
  programPath.scope.crawl();
  programPath.setData(KTFOR_HELPER_CACHE_KEY, t.identifier(localIdentifier.name));
  return t.identifier(localIdentifier.name);
}

function getProgramPath(path: NodePath<t.JSXElement>): NodePath<t.Program> {
  const programPath = path.findParent((currentPath) => currentPath.isProgram()) as NodePath<t.Program> | null;
  if (!programPath) {
    throw path.buildCodeFrameError('Failed to resolve Program path while transforming `k-for`.');
  }
  return programPath;
}

function hasImportSource(programPath: NodePath<t.Program>, source: string): boolean {
  const body = programPath.node.body;
  for (let i = 0; i < body.length; i++) {
    const statement = body[i];
    if (!t.isImportDeclaration(statement)) {
      continue;
    }
    if (statement.source.value === source && statement.importKind !== 'type') {
      return true;
    }
  }
  return false;
}

function findImportInsertIndex(body: t.Statement[]): number {
  let index = 0;
  while (index < body.length) {
    const statement = body[index];
    if (t.isImportDeclaration(statement)) {
      index++;
      continue;
    }
    if (t.isExpressionStatement(statement) && t.isStringLiteral(statement.expression)) {
      index++;
      continue;
    }
    break;
  }
  return index;
}
