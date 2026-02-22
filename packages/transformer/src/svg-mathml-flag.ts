import type { NodePath } from '@babel/core';
import * as t from '@babel/types';

type NamespaceKind = 'svg' | 'mathml';

const SVG_FLAG_ATTR = '__svg';
const MATHML_FLAG_ATTR = '__mathml';
const SVG_HELPER_CACHE_KEY = '__kt_svg_runtime_identifier__';
const MATHML_HELPER_CACHE_KEY = '__kt_mathml_runtime_identifier__';
const JSX_RUNTIME_FACTORIES = new Set(['jsx', 'jsxs', 'jsxDEV', 'svg', 'mathml']);

function isRuntimeImportSource(source: string) {
  return source.endsWith('/jsx-runtime') || source.endsWith('/jsx-dev-runtime');
}

function isSvgTag(tag: string) {
  return tag === 'svg' || tag.startsWith('svg:');
}

function isMathTag(tag: string) {
  return tag === 'math' || tag.startsWith('math:');
}

function isCompatTag(tagName: string) {
  return /^[a-z]/.test(tagName) || tagName.includes('-');
}

function normalizeTagName(tag: string) {
  if (tag.startsWith('svg:')) {
    return tag.slice('svg:'.length);
  }
  if (tag.startsWith('math:')) {
    return tag.slice('math:'.length);
  }
  return tag;
}

function resolveNamespaceKindFromTag(tag: string): NamespaceKind | null {
  if (isMathTag(tag)) {
    return 'mathml';
  }
  if (isSvgTag(tag)) {
    return 'svg';
  }
  return null;
}

function getCallTagName(callExpression: t.CallExpression): string | null {
  const tagArgument = callExpression.arguments[0];
  if (!tagArgument || !t.isStringLiteral(tagArgument)) {
    return null;
  }
  return tagArgument.value;
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

function resolveNamespaceKindFromProps(callExpression: t.CallExpression): NamespaceKind | null {
  const propsArgument = callExpression.arguments[1];
  if (!propsArgument || !t.isObjectExpression(propsArgument)) {
    return null;
  }

  for (let i = 0; i < propsArgument.properties.length; i++) {
    const property = propsArgument.properties[i];
    if (!t.isObjectProperty(property)) {
      continue;
    }

    const propertyName = getObjectPropertyName(property);
    if (propertyName === MATHML_FLAG_ATTR) {
      return 'mathml';
    }
    if (propertyName === SVG_FLAG_ATTR) {
      return 'svg';
    }
  }

  return null;
}

function resolveFactoryNameFromCallee(path: NodePath<t.CallExpression>): string | null {
  const callee = path.node.callee;
  if (!t.isIdentifier(callee)) {
    return null;
  }

  const binding = path.scope.getBinding(callee.name);
  if (!binding || !binding.path.isImportSpecifier()) {
    return null;
  }

  const importPath = binding.path.parentPath;
  if (!importPath.isImportDeclaration() || importPath.node.importKind === 'type') {
    return null;
  }

  if (!isRuntimeImportSource(importPath.node.source.value)) {
    return null;
  }

  const imported = binding.path.node.imported;
  const importedName = t.isIdentifier(imported) ? imported.name : imported.value;
  return JSX_RUNTIME_FACTORIES.has(importedName) ? importedName : null;
}

function resolveNamespaceKindFromCallee(path: NodePath<t.CallExpression>): NamespaceKind | null {
  const factoryName = resolveFactoryNameFromCallee(path);
  if (factoryName === 'svg') {
    return 'svg';
  }
  if (factoryName === 'mathml') {
    return 'mathml';
  }

  if (factoryName) {
    return null;
  }

  const callee = path.node.callee;
  if (!t.isIdentifier(callee)) {
    return null;
  }

  if (!path.scope.getBinding(callee.name)) {
    if (callee.name === 'svg') {
      return 'svg';
    }
    if (callee.name === 'mathml') {
      return 'mathml';
    }
  }

  return null;
}

function isRuntimeFactoryCall(path: NodePath<t.CallExpression>): boolean {
  const factoryName = resolveFactoryNameFromCallee(path);
  if (factoryName) {
    return true;
  }

  const callee = path.node.callee;
  if (!t.isIdentifier(callee)) {
    return false;
  }

  if (path.scope.getBinding(callee.name)) {
    return false;
  }

  return JSX_RUNTIME_FACTORIES.has(callee.name);
}

function resolveOwnCallNamespace(path: NodePath<t.CallExpression>): NamespaceKind | null {
  const tagName = getCallTagName(path.node);
  if (tagName) {
    const namespaceByTag = resolveNamespaceKindFromTag(tagName);
    if (namespaceByTag) {
      return namespaceByTag;
    }
  }

  const namespaceByProps = resolveNamespaceKindFromProps(path.node);
  if (namespaceByProps) {
    return namespaceByProps;
  }

  return resolveNamespaceKindFromCallee(path);
}

function resolveCallNamespace(path: NodePath<t.CallExpression>): NamespaceKind | null {
  const ownNamespace = resolveOwnCallNamespace(path);
  if (ownNamespace) {
    return ownNamespace;
  }

  let current = path.parentPath;
  while (current) {
    if (current.isCallExpression() && isRuntimeFactoryCall(current as NodePath<t.CallExpression>)) {
      const currentNamespace = resolveOwnCallNamespace(current as NodePath<t.CallExpression>);
      if (currentNamespace) {
        return currentNamespace;
      }
    }
    current = current.parentPath;
  }

  return null;
}

function getProgramPath(path: NodePath<t.Node>): NodePath<t.Program> {
  const programPath = path.findParent((currentPath) => currentPath.isProgram()) as NodePath<t.Program> | null;
  if (!programPath) {
    throw path.buildCodeFrameError('Failed to resolve Program path while transforming svg/mathml runtime calls.');
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

function resolveRuntimeImportSource(path: NodePath<t.CallExpression>, programPath: NodePath<t.Program>): string {
  const calleeFactory = resolveFactoryNameFromCallee(path);
  if (calleeFactory) {
    const callee = path.node.callee;
    if (t.isIdentifier(callee)) {
      const binding = path.scope.getBinding(callee.name);
      if (binding?.path.isImportSpecifier()) {
        const importPath = binding.path.parentPath;
        if (importPath.isImportDeclaration() && importPath.node.importKind !== 'type') {
          return importPath.node.source.value;
        }
      }
    }
  }

  const body = programPath.node.body;
  for (let i = 0; i < body.length; i++) {
    const statement = body[i];
    if (!t.isImportDeclaration(statement) || statement.importKind === 'type') {
      continue;
    }
    if (isRuntimeImportSource(statement.source.value)) {
      return statement.source.value;
    }
  }

  return hasImportSource(programPath, '@ktjs/core') ? '@ktjs/core/jsx-runtime' : 'kt.js/jsx-runtime';
}

function findImportedFactoryIdentifier(
  programPath: NodePath<t.Program>,
  importSource: string,
  factoryName: string,
): t.Identifier | null {
  const body = programPath.node.body;
  for (let i = 0; i < body.length; i++) {
    const statement = body[i];
    if (!t.isImportDeclaration(statement) || statement.importKind === 'type' || statement.source.value !== importSource) {
      continue;
    }

    for (let j = 0; j < statement.specifiers.length; j++) {
      const specifier = statement.specifiers[j];
      if (!t.isImportSpecifier(specifier)) {
        continue;
      }
      const importedName = t.isIdentifier(specifier.imported) ? specifier.imported.name : specifier.imported.value;
      if (importedName === factoryName) {
        return t.identifier(specifier.local.name);
      }
    }
  }

  return null;
}

function findMutableImportDeclaration(
  programPath: NodePath<t.Program>,
  importSource: string,
): NodePath<t.ImportDeclaration> | null {
  const bodyPaths = programPath.get('body');
  for (let i = 0; i < bodyPaths.length; i++) {
    const statement = bodyPaths[i];
    if (!statement.isImportDeclaration()) {
      continue;
    }

    const declaration = statement.node;
    if (declaration.importKind === 'type' || declaration.source.value !== importSource) {
      continue;
    }
    if (declaration.specifiers.some((specifier) => t.isImportNamespaceSpecifier(specifier))) {
      continue;
    }

    return statement as NodePath<t.ImportDeclaration>;
  }

  return null;
}

function ensureNamespaceFactoryIdentifier(path: NodePath<t.CallExpression>, namespace: NamespaceKind): t.Identifier {
  const cacheKey = namespace === 'svg' ? SVG_HELPER_CACHE_KEY : MATHML_HELPER_CACHE_KEY;
  const programPath = getProgramPath(path);

  const cached = programPath.getData(cacheKey);
  if (t.isIdentifier(cached)) {
    return t.identifier(cached.name);
  }

  const importSource = resolveRuntimeImportSource(path, programPath);
  const existingFactoryIdentifier = findImportedFactoryIdentifier(programPath, importSource, namespace);
  if (existingFactoryIdentifier) {
    programPath.setData(cacheKey, t.identifier(existingFactoryIdentifier.name));
    return t.identifier(existingFactoryIdentifier.name);
  }

  const localIdentifier = programPath.scope.generateUidIdentifier(namespace);
  const importDeclaration = findMutableImportDeclaration(programPath, importSource);
  if (importDeclaration) {
    importDeclaration.node.specifiers.push(t.importSpecifier(localIdentifier, t.identifier(namespace)));
  } else {
    const newImportDeclaration = t.importDeclaration(
      [t.importSpecifier(localIdentifier, t.identifier(namespace))],
      t.stringLiteral(importSource),
    );
    const insertIndex = findImportInsertIndex(programPath.node.body);
    programPath.node.body.splice(insertIndex, 0, newImportDeclaration);
  }

  programPath.scope.crawl();
  programPath.setData(cacheKey, t.identifier(localIdentifier.name));
  return t.identifier(localIdentifier.name);
}

export function transformSvgMathMLCallExpression(path: NodePath<t.CallExpression>): boolean {
  if (!isRuntimeFactoryCall(path)) {
    return false;
  }

  const tagArgument = path.node.arguments[0];
  if (!tagArgument || !t.isStringLiteral(tagArgument)) {
    return false;
  }

  const namespace = resolveCallNamespace(path);
  if (!namespace) {
    return false;
  }

  const normalizedTagName = normalizeTagName(tagArgument.value);
  if (!isCompatTag(normalizedTagName)) {
    return false;
  }

  let hasChanged = false;
  if (tagArgument.value !== normalizedTagName) {
    tagArgument.value = normalizedTagName;
    hasChanged = true;
  }

  const namespaceFactory = ensureNamespaceFactoryIdentifier(path, namespace);
  if (!t.isIdentifier(path.node.callee) || path.node.callee.name !== namespaceFactory.name) {
    path.node.callee = t.identifier(namespaceFactory.name);
    hasChanged = true;
  }

  return hasChanged;
}

export function addFlagToSvgMathMLElement(path: NodePath<t.JSXElement>) {
  const opening = path.node.openingElement;
  if (!opening) {
    return;
  }

  const oname = opening.name;
  if (t.isJSXNamespacedName(oname)) {
    return;
  }
  if (!t.isJSXIdentifier(oname)) {
    return;
  }

  const tag = oname.name;
  const isSvgRoot = isSvgTag(tag);
  const isMathRoot = isMathTag(tag);

  let insideSvg = false;
  if (!isSvgRoot) {
    const parentSvg = path.findParent((p) => {
      if (!p.isJSXElement()) {
        return false;
      }
      const popping = p.node.openingElement && p.node.openingElement.name;
      if (!popping) {
        return false;
      }
      if (t.isJSXIdentifier(popping)) {
        return isSvgTag(popping.name);
      }
      if (t.isJSXNamespacedName(popping)) {
        return t.isJSXIdentifier(popping.namespace) && popping.namespace.name === 'svg';
      }
      return false;
    });
    insideSvg = !!parentSvg;
  }

  let insideMath = false;
  if (!isMathRoot) {
    const parentMath = path.findParent((p) => {
      if (!p.isJSXElement()) {
        return false;
      }
      const popping = p.node.openingElement && p.node.openingElement.name;
      if (!popping) {
        return false;
      }
      if (t.isJSXIdentifier(popping)) {
        return isMathTag(popping.name);
      }
      if (t.isJSXNamespacedName(popping)) {
        return t.isJSXIdentifier(popping.namespace) && popping.namespace.name === 'math';
      }
      return false;
    });
    insideMath = !!parentMath;
  }

  const inSvgContext = isSvgRoot || insideSvg;
  const inMathContext = isMathRoot || insideMath;
  if (!inSvgContext && !inMathContext) {
    return;
  }

  const attrs = opening.attributes || [];
  const flag = inSvgContext ? flags.svg : flags.mathml;
  const hasFlag = attrs.some((a) => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name) && a.name.name === flag);
  if (!hasFlag) {
    attrs.push(t.jsxAttribute(t.jsxIdentifier(flag)));
    opening.attributes = attrs;
  }
}
