import type { NodePath } from '@babel/core';
import * as t from '@babel/types';

const KTCONDITIONAL_HELPER_CACHE_KEY = '__kt_conditional_component_identifier__';
const KTCONDITIONAL_COMPONENT_IMPORT_NAME = 'KTConditional';
const KTUNSUPPORTED_ELSEIF_WARNING_CACHE_KEY = '__kt_unsupported_else_if_warning_cache__';
const CONDITIONAL_DIRECTIVES = new Set(['k-if', 'k-else-if', 'k-else']);

type ConditionalDirectiveType = 'k-if' | 'k-else-if' | 'k-else';
type ConditionalValue = t.Expression | t.StringLiteral | null;

interface ConditionalDirective {
  type: ConditionalDirectiveType;
  condition: ConditionalValue;
}

interface ConditionalCallArgs {
  tag: t.Expression;
  props: t.ObjectExpression;
}

function hasConditionalDirective(element: t.JSXElement): boolean {
  const attributes = element.openingElement.attributes || [];
  return attributes.some((attr) => {
    if (!t.isJSXAttribute(attr)) {
      return false;
    }
    if (!t.isJSXIdentifier(attr.name)) {
      return false;
    }
    return CONDITIONAL_DIRECTIVES.has(attr.name.name);
  });
}

function getConditionalDirective(element: t.JSXElement): ConditionalDirective | null {
  const attributes = element.openingElement.attributes || [];
  for (const attr of attributes) {
    if (!t.isJSXAttribute(attr) || !t.isJSXIdentifier(attr.name)) {
      continue;
    }

    if (attr.name.name === 'k-if' || attr.name.name === 'k-else-if') {
      let condition: t.Expression | t.StringLiteral | null = null;
      if (attr.value) {
        if (t.isJSXExpressionContainer(attr.value)) {
          condition = attr.value.expression as t.Expression;
        } else if (t.isStringLiteral(attr.value)) {
          condition = attr.value;
        }
      }
      return { type: attr.name.name, condition };
    }

    if (attr.name.name === 'k-else') {
      return { type: 'k-else', condition: null };
    }
  }
  return null;
}

function removeConditionalDirectives(attributes: (t.JSXAttribute | t.JSXSpreadAttribute)[]) {
  return attributes.filter((attr) => {
    if (!t.isJSXAttribute(attr)) {
      return true;
    }
    if (!t.isJSXIdentifier(attr.name)) {
      return true;
    }
    return !CONDITIONAL_DIRECTIVES.has(attr.name.name);
  });
}

function getConditionExpression(condition: ConditionalValue): t.Expression {
  if (condition && t.isExpression(condition)) {
    return t.cloneNode(condition, true);
  }
  return t.booleanLiteral(true);
}

function buildConditionalCallArgs(element: t.JSXElement): ConditionalCallArgs {
  const openingElement = element.openingElement;
  const attributes = removeConditionalDirectives(openingElement.attributes || []);
  const tag = jsxTagNameToExpression(openingElement.name);
  const props = buildPropsObject(attributes, element.children);

  return { tag, props };
}

function buildPropsObject(
  attributes: Array<t.JSXAttribute | t.JSXSpreadAttribute>,
  children: t.JSXElement['children'],
): t.ObjectExpression {
  const properties: Array<t.ObjectProperty | t.SpreadElement> = [];

  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    if (t.isJSXSpreadAttribute(attr)) {
      properties.push(t.spreadElement(t.cloneNode(attr.argument, true)));
      continue;
    }

    const attrName = getJSXAttributeName(attr.name);
    if (!attrName || CONDITIONAL_DIRECTIVES.has(attrName)) {
      continue;
    }

    let value: t.Expression = t.booleanLiteral(true);
    if (attr.value) {
      if (t.isStringLiteral(attr.value)) {
        value = t.cloneNode(attr.value, true);
      } else if (t.isJSXExpressionContainer(attr.value)) {
        value = t.isJSXEmptyExpression(attr.value.expression)
          ? t.booleanLiteral(true)
          : t.cloneNode(attr.value.expression, true);
      }
    }

    properties.push(t.objectProperty(createObjectKey(attrName), value));
  }

  const childrenExpression = buildChildrenExpression(children);
  if (childrenExpression) {
    properties.push(t.objectProperty(t.identifier('children'), childrenExpression));
  }

  return t.objectExpression(properties);
}

function buildChildrenExpression(children: t.JSXElement['children']): t.Expression | null {
  const normalizedChildren: Array<t.Expression | t.SpreadElement> = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (t.isJSXText(child)) {
      const text = normalizeJSXText(child.value);
      if (text) {
        normalizedChildren.push(t.stringLiteral(text));
      }
      continue;
    }

    if (t.isJSXExpressionContainer(child)) {
      if (!t.isJSXEmptyExpression(child.expression)) {
        normalizedChildren.push(t.cloneNode(child.expression, true));
      }
      continue;
    }

    if (t.isJSXSpreadChild(child)) {
      normalizedChildren.push(t.spreadElement(t.cloneNode(child.expression, true)));
      continue;
    }

    if (t.isJSXElement(child) || t.isJSXFragment(child)) {
      normalizedChildren.push(t.cloneNode(child, true));
    }
  }

  if (normalizedChildren.length === 0) {
    return null;
  }

  if (normalizedChildren.length === 1 && t.isExpression(normalizedChildren[0])) {
    return normalizedChildren[0];
  }

  const arrayItems: Array<t.Expression | t.SpreadElement | null> = [];
  for (let i = 0; i < normalizedChildren.length; i++) {
    arrayItems.push(t.cloneNode(normalizedChildren[i], true) as t.Expression | t.SpreadElement);
  }
  return t.arrayExpression(arrayItems);
}

function normalizeJSXText(value: string): string {
  const lines = value.replace(/\r\n?/g, '\n').split('\n');
  let lastNonEmptyLine = -1;

  for (let i = 0; i < lines.length; i++) {
    if (/[^\t ]/.test(lines[i])) {
      lastNonEmptyLine = i;
    }
  }

  if (lastNonEmptyLine < 0) {
    return '';
  }

  let content = '';
  for (let i = 0; i < lines.length; i++) {
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    let line = lines[i].replace(/\t/g, ' ');

    if (!isFirstLine) {
      line = line.replace(/^[ ]+/, '');
    }
    if (!isLastLine) {
      line = line.replace(/[ ]+$/, '');
    }

    if (!line) {
      continue;
    }

    content += line;
    if (i !== lastNonEmptyLine) {
      content += ' ';
    }
  }

  return content;
}

function createObjectKey(name: string): t.Identifier | t.StringLiteral {
  if (t.isValidIdentifier(name)) {
    return t.identifier(name);
  }
  return t.stringLiteral(name);
}

function getJSXAttributeName(name: t.JSXIdentifier | t.JSXNamespacedName): string | null {
  if (t.isJSXIdentifier(name)) {
    return name.name;
  }

  if (t.isJSXNamespacedName(name) && t.isJSXIdentifier(name.namespace) && t.isJSXIdentifier(name.name)) {
    return `${name.namespace.name}:${name.name.name}`;
  }

  return null;
}

function jsxTagNameToExpression(name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName): t.Expression {
  if (t.isJSXIdentifier(name)) {
    if (name.name === 'this') {
      return t.thisExpression();
    }
    if (isCompatTag(name.name)) {
      return t.stringLiteral(name.name);
    }
    return t.identifier(name.name);
  }

  if (t.isJSXMemberExpression(name)) {
    return t.memberExpression(jsxTagNameToExpression(name.object), t.identifier(name.property.name));
  }

  if (t.isJSXNamespacedName(name) && t.isJSXIdentifier(name.namespace) && t.isJSXIdentifier(name.name)) {
    return t.stringLiteral(`${name.namespace.name}:${name.name.name}`);
  }

  return t.stringLiteral('div');
}

function isCompatTag(tagName: string): boolean {
  return /^[a-z]/.test(tagName) || tagName.includes('-');
}

function buildKTConditionalCall(
  path: NodePath<t.JSXElement>,
  condition: ConditionalValue,
  ifElement: t.JSXElement,
  elseElement: t.JSXElement,
): t.CallExpression {
  const helperIdentifier = ensureKTConditionalIdentifier(path);
  const ifArgs = buildConditionalCallArgs(ifElement);
  const elseArgs = buildConditionalCallArgs(elseElement);

  return t.callExpression(helperIdentifier, [
    getConditionExpression(condition),
    ifArgs.tag,
    ifArgs.props,
    elseArgs.tag,
    elseArgs.props,
  ]);
}

function warnUnsupportedElseIf(path: NodePath<t.JSXElement>) {
  const programPath = getProgramPath(path);
  let warningCache = programPath.getData(KTUNSUPPORTED_ELSEIF_WARNING_CACHE_KEY) as Set<string> | undefined;
  if (!warningCache) {
    warningCache = new Set<string>();
    programPath.setData(KTUNSUPPORTED_ELSEIF_WARNING_CACHE_KEY, warningCache);
  }

  const loc = path.node.loc?.start;
  const cacheKey = loc ? `${loc.line}:${loc.column}` : `${path.node.start ?? 'unknown'}`;
  if (warningCache.has(cacheKey)) {
    return;
  }
  warningCache.add(cacheKey);

  const file = (((programPath as any).hub?.file?.opts?.filename as string | undefined) || 'unknown file');
  const pos = loc ? `${loc.line}:${loc.column + 1}` : 'unknown';
  console.warn(
    `[ktjs-transformer] \`k-else-if\` is not supported yet and will be left untransformed (${file}:${pos}).`,
  );
}

export function transformConditionalChains(path: NodePath<t.JSXElement>) {
  const { node } = path;
  if (!hasConditionalDirective(node)) {
    return;
  }

  const prevSibling = path.getPrevSibling();
  if (prevSibling && prevSibling.isJSXElement() && hasConditionalDirective(prevSibling.node)) {
    return;
  }

  const chain: Array<NodePath<t.JSXElement>> = [path];
  let current: NodePath<t.JSXElement> = path;

  while (true) {
    const nextSibling = current.getNextSibling();
    if (!nextSibling || !nextSibling.isJSXElement() || !hasConditionalDirective(nextSibling.node)) {
      break;
    }
    chain.push(nextSibling);
    current = nextSibling;
  }

  if (chain.length === 1) {
    const onlyDirective = getConditionalDirective(chain[0].node);
    if (onlyDirective?.type === 'k-else-if') {
      warnUnsupportedElseIf(chain[0]);
    }
    return;
  }

  const firstDirective = getConditionalDirective(chain[0].node);
  const secondDirective = getConditionalDirective(chain[1].node);
  if (firstDirective?.type === 'k-if' && secondDirective?.type === 'k-else') {
    const conditionalCall = buildKTConditionalCall(path, firstDirective.condition, chain[0].node, chain[1].node);
    if (isInsideJSXChildren(path)) {
      path.replaceWith(t.jsxExpressionContainer(conditionalCall));
    } else {
      path.replaceWith(conditionalCall);
    }
    chain[1].remove();

    for (let i = 2; i < chain.length; i++) {
      const directive = getConditionalDirective(chain[i].node);
      if (directive?.type === 'k-else-if') {
        warnUnsupportedElseIf(chain[i]);
      }
    }
    return;
  }

  for (let i = 0; i < chain.length; i++) {
    const directive = getConditionalDirective(chain[i].node);
    if (directive?.type === 'k-else-if') {
      warnUnsupportedElseIf(chain[i]);
      return;
    }
  }
}

function isInsideJSXChildren(path: NodePath<t.JSXElement>): boolean {
  if (!path.inList || path.listKey !== 'children') {
    return false;
  }

  const parent = path.parentPath;
  return !!parent && (parent.isJSXElement() || parent.isJSXFragment());
}

function ensureKTConditionalIdentifier(path: NodePath<t.Node>): t.Identifier {
  const programPath = getProgramPath(path);
  const cached = programPath.getData(KTCONDITIONAL_HELPER_CACHE_KEY);
  if (t.isIdentifier(cached)) {
    return t.identifier(cached.name);
  }

  const importSource = hasImportSource(programPath, '@ktjs/core') ? '@ktjs/core' : 'kt.js';
  const localIdentifier = programPath.scope.generateUidIdentifier(KTCONDITIONAL_COMPONENT_IMPORT_NAME);
  const importDeclaration = t.importDeclaration(
    [t.importSpecifier(localIdentifier, t.identifier(KTCONDITIONAL_COMPONENT_IMPORT_NAME))],
    t.stringLiteral(importSource),
  );

  const insertIndex = findImportInsertIndex(programPath.node.body);
  programPath.node.body.splice(insertIndex, 0, importDeclaration);
  programPath.scope.crawl();
  programPath.setData(KTCONDITIONAL_HELPER_CACHE_KEY, t.identifier(localIdentifier.name));
  return t.identifier(localIdentifier.name);
}

function getProgramPath(path: NodePath<t.Node>): NodePath<t.Program> {
  const programPath = path.findParent((currentPath) => currentPath.isProgram()) as NodePath<t.Program> | null;
  if (!programPath) {
    throw path.buildCodeFrameError('Failed to resolve Program path while transforming conditional directives.');
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
