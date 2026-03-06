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

interface ConditionalCallDirective extends ConditionalDirective {
  propsArgIndex: number;
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

function getConditionalCallDirective(callExpression: t.CallExpression): ConditionalCallDirective | null {
  for (let i = 0; i < callExpression.arguments.length; i++) {
    const argument = callExpression.arguments[i];
    if (!t.isObjectExpression(argument)) {
      continue;
    }

    for (let j = 0; j < argument.properties.length; j++) {
      const property = argument.properties[j];
      if (!t.isObjectProperty(property)) {
        continue;
      }

      const directive = getConditionalDirectiveFromObjectProperty(property);
      if (directive) {
        return {
          ...directive,
          propsArgIndex: i,
        };
      }
    }
  }

  return null;
}

function getConditionalDirectiveFromObjectProperty(property: t.ObjectProperty): ConditionalDirective | null {
  const propertyName = getObjectPropertyName(property);
  if (propertyName === 'k-if' || propertyName === 'k-else-if') {
    return {
      type: propertyName,
      condition: t.isExpression(property.value) ? property.value : null,
    };
  }

  if (propertyName === 'k-else') {
    return {
      type: 'k-else',
      condition: null,
    };
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

function removeConditionalObjectDirectives(
  properties: Array<t.ObjectMethod | t.ObjectProperty | t.SpreadElement>,
): Array<t.ObjectMethod | t.ObjectProperty | t.SpreadElement> {
  return properties.filter((property) => {
    if (!t.isObjectProperty(property)) {
      return true;
    }

    const propertyName = getObjectPropertyName(property);
    if (!propertyName) {
      return true;
    }

    return !CONDITIONAL_DIRECTIVES.has(propertyName);
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

function buildConditionalCallArgsFromCallExpression(
  callExpression: t.CallExpression,
  directive: ConditionalCallDirective,
): ConditionalCallArgs {
  const tagArgument = callExpression.arguments[0];
  const tag =
    tagArgument && !t.isSpreadElement(tagArgument) && !t.isArgumentPlaceholder(tagArgument) && t.isExpression(tagArgument)
      ? (t.cloneNode(tagArgument, true) as t.Expression)
      : t.stringLiteral('div');

  const propsArgument = callExpression.arguments[directive.propsArgIndex];
  if (!propsArgument || !t.isObjectExpression(propsArgument)) {
    return {
      tag,
      props: t.objectExpression([]),
    };
  }

  const props = t.cloneNode(propsArgument, true) as t.ObjectExpression;
  props.properties = removeConditionalObjectDirectives(props.properties);
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

function getObjectPropertyName(property: t.ObjectProperty): string | null {
  if (property.computed) {
    if (t.isStringLiteral(property.key)) {
      return property.key.value;
    }
    return null;
  }

  if (t.isIdentifier(property.key)) {
    return property.key.name;
  }

  if (t.isStringLiteral(property.key)) {
    return property.key.value;
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
  elseElement?: t.JSXElement,
): t.CallExpression {
  const helperIdentifier = ensureKTConditionalIdentifier(path);
  const ifArgs = buildConditionalCallArgs(ifElement);
  const callArgs: t.Expression[] = [getConditionExpression(condition), ifArgs.tag, ifArgs.props];

  if (elseElement) {
    const elseArgs = buildConditionalCallArgs(elseElement);
    callArgs.push(elseArgs.tag, elseArgs.props);
  }

  return t.callExpression(helperIdentifier, callArgs);
}

function buildKTConditionalCallFromCallExpression(
  path: NodePath<t.CallExpression>,
  condition: ConditionalValue,
  ifCallExpression: t.CallExpression,
  ifDirective: ConditionalCallDirective,
  elseCallExpression?: t.CallExpression,
  elseDirective?: ConditionalCallDirective,
): t.CallExpression {
  const helperIdentifier = ensureKTConditionalIdentifier(path);
  const ifArgs = buildConditionalCallArgsFromCallExpression(ifCallExpression, ifDirective);
  const callArgs: t.Expression[] = [getConditionExpression(condition), ifArgs.tag, ifArgs.props];

  if (elseCallExpression && elseDirective) {
    const elseArgs = buildConditionalCallArgsFromCallExpression(elseCallExpression, elseDirective);
    callArgs.push(elseArgs.tag, elseArgs.props);
  }

  return t.callExpression(helperIdentifier, callArgs);
}

function warnUnsupportedElseIf(path: NodePath<t.Node>) {
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
  const currentDirective = getConditionalDirective(path.node);
  if (!currentDirective) {
    return;
  }

  const prevSibling = getPrevSignificantJSXSibling(path);
  if (prevSibling) {
    const prevDirective = getConditionalDirective(prevSibling.node);
    if (prevDirective && (currentDirective.type === 'k-else' || currentDirective.type === 'k-else-if')) {
      return;
    }
  }

  if (currentDirective.type === 'k-else-if') {
    warnUnsupportedElseIf(path);
    return;
  }

  if (currentDirective.type === 'k-else') {
    return;
  }

  const nextSibling = getNextSignificantJSXSibling(path);
  const nextDirective = nextSibling ? getConditionalDirective(nextSibling.node) : null;

  if (!nextDirective || nextDirective.type === 'k-if') {
    const conditionalCall = buildKTConditionalCall(path, currentDirective.condition, path.node);
    if (isInsideJSXChildren(path)) {
      path.replaceWith(t.jsxExpressionContainer(conditionalCall));
    } else {
      path.replaceWith(conditionalCall);
    }
    return;
  }

  if (nextDirective.type === 'k-else-if') {
    warnUnsupportedElseIf(nextSibling!);
    return;
  }

  const trailingSibling = getNextSignificantJSXSibling(nextSibling!);
  const conditionalCall = buildKTConditionalCall(path, currentDirective.condition, path.node, nextSibling!.node);
  if (isInsideJSXChildren(path)) {
    path.replaceWith(t.jsxExpressionContainer(conditionalCall));
  } else {
    path.replaceWith(conditionalCall);
  }
  nextSibling!.remove();

  if (trailingSibling) {
    const trailingDirective = getConditionalDirective(trailingSibling.node);
    if (trailingDirective?.type === 'k-else-if') {
      warnUnsupportedElseIf(trailingSibling);
    }
  }
}

export function transformConditionalCallChains(path: NodePath<t.CallExpression>) {
  const currentDirective = getConditionalCallDirective(path.node);
  if (!currentDirective) {
    return;
  }

  const prevSibling = getPrevSignificantCallSibling(path);
  if (prevSibling) {
    const prevDirective = getConditionalCallDirective(prevSibling.node);
    if (prevDirective && (currentDirective.type === 'k-else' || currentDirective.type === 'k-else-if')) {
      return;
    }
  }

  if (currentDirective.type === 'k-else-if') {
    warnUnsupportedElseIf(path);
    return;
  }

  if (currentDirective.type === 'k-else') {
    return;
  }

  const nextSibling = getNextSignificantCallSibling(path);
  const nextDirective = nextSibling ? getConditionalCallDirective(nextSibling.node) : null;

  if (!nextDirective || nextDirective.type === 'k-if') {
    const conditionalCall = buildKTConditionalCallFromCallExpression(
      path,
      currentDirective.condition,
      path.node,
      currentDirective,
    );
    path.replaceWith(conditionalCall);
    return;
  }

  if (nextDirective.type === 'k-else-if') {
    warnUnsupportedElseIf(nextSibling!);
    return;
  }

  const trailingSibling = getNextSignificantCallSibling(nextSibling!);
  const conditionalCall = buildKTConditionalCallFromCallExpression(
    path,
    currentDirective.condition,
    path.node,
    currentDirective,
    nextSibling!.node,
    nextDirective,
  );
  path.replaceWith(conditionalCall);
  nextSibling!.remove();

  if (trailingSibling) {
    const trailingDirective = getConditionalCallDirective(trailingSibling.node);
    if (trailingDirective?.type === 'k-else-if') {
      warnUnsupportedElseIf(trailingSibling);
    }
  }
}

function getPrevSignificantJSXSibling(path: NodePath<t.JSXElement>): NodePath<t.JSXElement> | null {
  if (!path.inList || typeof path.key !== 'number') {
    return null;
  }

  for (let index = path.key - 1; index >= 0; index--) {
    const sibling = path.getSibling(index);
    if (sibling.isJSXText()) {
      if (sibling.node.value.trim() === '') {
        continue;
      }
      return null;
    }
    if (sibling.isJSXExpressionContainer() && t.isJSXEmptyExpression(sibling.node.expression)) {
      continue;
    }
    if (sibling.isJSXElement()) {
      return sibling as NodePath<t.JSXElement>;
    }
    return null;
  }

  return null;
}

function getPrevSignificantCallSibling(path: NodePath<t.CallExpression>): NodePath<t.CallExpression> | null {
  if (!isConditionalCallChainListPath(path)) {
    return null;
  }
  const currentIndex = path.key as number;

  for (let index = currentIndex - 1; index >= 0; index--) {
    const sibling = path.getSibling(index);
    if (isIgnorableCallSibling(sibling)) {
      continue;
    }
    if (sibling.isCallExpression()) {
      return sibling as NodePath<t.CallExpression>;
    }
    return null;
  }

  return null;
}

function getNextSignificantJSXSibling(path: NodePath<t.JSXElement>): NodePath<t.JSXElement> | null {
  if (!path.inList || typeof path.key !== 'number' || !path.container || !Array.isArray(path.container)) {
    return null;
  }

  for (let index = path.key + 1; index < path.container.length; index++) {
    const sibling = path.getSibling(index);
    if (sibling.isJSXText()) {
      if (sibling.node.value.trim() === '') {
        continue;
      }
      return null;
    }
    if (sibling.isJSXExpressionContainer() && t.isJSXEmptyExpression(sibling.node.expression)) {
      continue;
    }
    if (sibling.isJSXElement()) {
      return sibling as NodePath<t.JSXElement>;
    }
    return null;
  }

  return null;
}

function getNextSignificantCallSibling(path: NodePath<t.CallExpression>): NodePath<t.CallExpression> | null {
  if (
    !isConditionalCallChainListPath(path) ||
    !path.container ||
    !Array.isArray(path.container)
  ) {
    return null;
  }
  const currentIndex = path.key as number;

  for (let index = currentIndex + 1; index < path.container.length; index++) {
    const sibling = path.getSibling(index);
    if (isIgnorableCallSibling(sibling)) {
      continue;
    }
    if (sibling.isCallExpression()) {
      return sibling as NodePath<t.CallExpression>;
    }
    return null;
  }

  return null;
}

function isConditionalCallChainListPath(path: NodePath<t.CallExpression>): boolean {
  if (!path.inList || typeof path.key !== 'number' || !path.parentPath) {
    return false;
  }

  if (path.parentPath.isArrayExpression()) {
    return true;
  }

  if (path.parentPath.isCallExpression() && path.listKey === 'arguments') {
    return true;
  }

  return false;
}

function isIgnorableCallSibling(path: NodePath<t.Node>): boolean {
  if (path.isStringLiteral()) {
    return path.node.value.trim() === '';
  }
  return false;
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
