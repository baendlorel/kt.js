#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import ts from 'typescript';

/**
 * How to use:
 * 1) Install in your project: `pnpm add -D @ktjs/kt-tsc typescript`
 * 2) Run with project mode: `kt-tsc -p ./tsconfig.json`
 * 3) Or let it auto-find tsconfig.json in current directory: `kt-tsc`
 * 4) Add `--verbose` (or `-v`) to print every checked file path.
 */
const HELP_TEXT = `kt-tsc

Usage:
  kt-tsc -p ./tsconfig.json
  kt-tsc --project ./tsconfig.json
  kt-tsc --verbose -p ./tsconfig.json

Notes:
  - project mode only
  - check only, never emit files
  - only suppresses k-for alias false positives
`;

const IDENTIFIER_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const KFOR_SINGLE_PATTERN = /^([A-Za-z_$][A-Za-z0-9_$]*)\s+(in|of)\s+([\s\S]+)$/;
const KFOR_TUPLE_PATTERN =
  /^\(\s*([A-Za-z_$][A-Za-z0-9_$]*)(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?\s*\)\s+(in|of)\s+([\s\S]+)$/;
const SUPPRESSED_DIAGNOSTIC_CODES = new Set([2304, 2552]);

interface KForConfig {
  forAttr: string;
  allowOfKeyword: boolean;
}

interface KForBinding {
  name: string;
  types: ts.Type[];
}

interface KForScope {
  start: number;
  end: number;
  bindings: KForBinding[];
}

interface ParsedKFor {
  aliases: string[];
  source: string;
}

interface TypeResolutionContext {
  checker: ts.TypeChecker;
  scopeNode: ts.Node;
  localBindings?: Map<string, readonly ts.Type[]>;
}

function main() {
  const rawArgv = process.argv.slice(2);
  if (rawArgv.includes('-h') || rawArgv.includes('--help')) {
    console.log(HELP_TEXT);
    process.exit(0);
  }

  const verbose = rawArgv.includes('--verbose') || rawArgv.includes('-v');
  const argv = rawArgv.filter((item) => item !== '--verbose' && item !== '-v');

  const commandLine = ts.parseCommandLine(argv);
  if (commandLine.errors.length > 0) {
    report(commandLine.errors, commandLine.options.pretty !== false);
    process.exit(1);
  }

  if (commandLine.fileNames.length > 0) {
    console.error('[kt-tsc] file mode is not supported yet. Please use --project.');
    process.exit(1);
  }

  const projectPath = resolveProjectPath(commandLine.options.project);
  const parsed = loadProject(projectPath, commandLine.options);
  const projects = parsed.fileNames.length > 0 ? [parsed] : [];

  if (parsed.projectReferences?.length) {
    const visited = new Set([projectPath]);
    const queue = [...parsed.projectReferences];
    while (queue.length > 0) {
      const reference = queue.shift();
      if (!reference) {
        continue;
      }
      const referencePath = resolveProjectPath(reference.path);
      if (visited.has(referencePath)) {
        continue;
      }
      visited.add(referencePath);
      const referencedParsed = loadProject(referencePath, commandLine.options);
      projects.push(referencedParsed);
      if (referencedParsed.projectReferences?.length) {
        queue.push(...referencedParsed.projectReferences);
      }
    }
  }

  const checkedFileNames = new Set<string>();
  const allDiagnostics: ts.Diagnostic[] = [];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    for (let j = 0; j < project.fileNames.length; j++) {
      const fileName = project.fileNames[j];
      checkedFileNames.add(fileName);
      if (!verbose) {
        continue;
      }
      const relativePath = path.relative(process.cwd(), fileName) || '.';
      console.log(relativePath);
    }

    const config = resolveKForConfig(project.options.plugins);
    const program = ts.createProgram({
      rootNames: project.fileNames,
      options: {
        ...project.options,
        noEmit: true,
        incremental: false,
      },
    });

    const checker = program.getTypeChecker();
    const projectDiagnostics = ts.sortAndDeduplicateDiagnostics([...project.errors, ...ts.getPreEmitDiagnostics(program)]);
    const { diagnostics, memberDiagnostics } = filterDiagnostics(projectDiagnostics, config, checker);

    if (diagnostics.length > 0) {
      allDiagnostics.push(...diagnostics);
    }
    if (memberDiagnostics.length > 0) {
      allDiagnostics.push(...memberDiagnostics);
    }
  }

  const finalDiagnostics = ts.sortAndDeduplicateDiagnostics(allDiagnostics);
  if (finalDiagnostics.length > 0) {
    report(finalDiagnostics, commandLine.options.pretty !== false);
    reportSummary(finalDiagnostics, checkedFileNames.size, true);
    process.exit(1);
  }

  reportSummary([], checkedFileNames.size, false);
}

function resolveProjectPath(projectOption: string | undefined) {
  if (projectOption) {
    const absolutePath = path.resolve(projectOption);
    if (ts.sys.directoryExists(absolutePath)) {
      const configPath = path.join(absolutePath, 'tsconfig.json');
      if (ts.sys.fileExists(configPath)) {
        return configPath;
      }
    }
    if (ts.sys.fileExists(absolutePath)) {
      return absolutePath;
    }
    console.error(`[kt-tsc] Cannot find project: ${projectOption}`);
    process.exit(1);
  }

  const configPath = ts.findConfigFile(process.cwd(), ts.sys.fileExists, 'tsconfig.json');
  if (configPath) {
    return configPath;
  }

  console.error('[kt-tsc] Cannot find tsconfig.json from current directory.');
  process.exit(1);
}

function loadProject(projectPath: string, options: ts.CompilerOptions) {
  const readResult = ts.readConfigFile(projectPath, ts.sys.readFile);
  if (readResult.error) {
    report([readResult.error], options.pretty !== false);
    process.exit(1);
  }

  const parsed = ts.parseJsonConfigFileContent(
    readResult.config,
    ts.sys,
    path.dirname(projectPath),
    options,
    projectPath,
  );
  if (parsed.errors.length > 0) {
    report(parsed.errors, parsed.options.pretty !== false);
    process.exit(1);
  }

  return parsed;
}

function resolveKForConfig(plugins: unknown): KForConfig {
  const pluginList = Array.isArray(plugins) ? (plugins as Array<Record<string, unknown>>) : [];
  const plugin = pluginList.find((item) => item?.name === '@ktjs/ts-plugin');
  return {
    forAttr: typeof plugin?.forAttr === 'string' && plugin.forAttr ? plugin.forAttr : 'k-for',
    allowOfKeyword: plugin?.allowOfKeyword !== false,
  };
}

function filterDiagnostics(diagnostics: readonly ts.Diagnostic[], config: KForConfig, checker: ts.TypeChecker) {
  const scopeCache = new Map<string, KForScope[]>();
  const memberCache = new Map<string, ts.DiagnosticWithLocation[]>();

  const getFileScopes = (sourceFile: ts.SourceFile) => {
    let scopes = scopeCache.get(sourceFile.fileName);
    if (scopes) {
      return scopes;
    }

    scopes = collectKForScopes(sourceFile, config, checker);
    scopeCache.set(sourceFile.fileName, scopes);
    memberCache.set(sourceFile.fileName, getKForMemberDiagnostics(sourceFile, checker, scopes));
    return scopes;
  };

  const filteredDiagnostics = diagnostics.filter((diagnostic) => {
    const length = diagnostic.length ?? 0;
    if (!diagnostic.file || diagnostic.start === null || diagnostic.start === undefined || length === 0) {
      return true;
    }
    if (!SUPPRESSED_DIAGNOSTIC_CODES.has(diagnostic.code)) {
      return true;
    }
    if (!isJsxLikeFile(diagnostic.file.fileName)) {
      return true;
    }

    const name = diagnostic.file.text.slice(diagnostic.start, diagnostic.start + length).trim();
    if (!IDENTIFIER_RE.test(name)) {
      return true;
    }

    const scopes = getFileScopes(diagnostic.file);
    return !isSuppressed(diagnostic.start, name, scopes);
  });

  const memberDiagnostics: ts.DiagnosticWithLocation[] = [];
  for (const diagnostics of memberCache.values()) {
    if (diagnostics.length > 0) {
      memberDiagnostics.push(...diagnostics);
    }
  }

  return { diagnostics: filteredDiagnostics, memberDiagnostics };
}

function collectKForScopes(sourceFile: ts.SourceFile, config: KForConfig, checker: ts.TypeChecker) {
  const scopes: KForScope[] = [];

  const visit = (node: ts.Node) => {
    let opening: ts.JsxOpeningElement | ts.JsxSelfClosingElement | undefined;
    let bodyScope: { start: number; end: number } | undefined;

    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
      const start = opening.end;
      const end = node.closingElement.getStart(sourceFile);
      if (start < end) {
        bodyScope = { start, end };
      }
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const forAttr = getJsxAttribute(opening, config.forAttr);
      if (forAttr) {
        const parsed = parseKForExpression(getAttributeText(forAttr), config.allowOfKeyword);
        if (parsed) {
          const bindings = createBindings(parsed, checker, opening);
          if (bindings.length > 0) {
            if (bodyScope) {
              scopes.push({ start: bodyScope.start, end: bodyScope.end, bindings });
            }

            const attrs = opening.attributes.properties;
            for (let i = 0; i < attrs.length; i++) {
              const attr = attrs[i];
              if (ts.isJsxSpreadAttribute(attr)) {
                const start = attr.getStart(sourceFile);
                const end = attr.end;
                if (start < end) {
                  scopes.push({ start, end, bindings });
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
                scopes.push({ start, end, bindings });
              }
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return scopes;
}

function createBindings(parsed: ParsedKFor, checker: ts.TypeChecker, scopeNode: ts.Node) {
  const sourceTypes = resolveExpressionTypesFromText(parsed.source, {
    checker,
    scopeNode,
  });
  const inferred = inferBindingTypes(sourceTypes, parsed.aliases.length, checker, scopeNode);
  const bindings: KForBinding[] = [];

  for (let i = 0; i < parsed.aliases.length; i++) {
    bindings.push({
      name: parsed.aliases[i],
      types: inferred[i] || [],
    });
  }

  return bindings;
}

function inferBindingTypes(sourceTypes: ts.Type[], bindingCount: number, checker: ts.TypeChecker, scopeNode: ts.Node) {
  const slots: ts.Type[][] = Array.from({ length: bindingCount }, () => []);
  const candidates = expandUnionTypes(sourceTypes);

  for (let i = 0; i < candidates.length; i++) {
    const iterableCandidates = getIterableCandidates(candidates[i], checker, scopeNode);
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
    }
  }

  for (let i = 0; i < slots.length; i++) {
    slots[i] = uniqueTypes(slots[i], checker, scopeNode);
  }

  return slots;
}

function getIterableCandidates(sourceType: ts.Type, checker: ts.TypeChecker, scopeNode: ts.Node) {
  const result: ts.Type[] = [sourceType];
  const apparentType = checker.getApparentType(sourceType);
  if (!isReactiveLikeType(apparentType, checker)) {
    return result;
  }

  const valueProperty = checker.getPropertyOfType(apparentType, 'value');
  if (!valueProperty) {
    return result;
  }

  const valueType = checker.getTypeOfSymbolAtLocation(valueProperty, scopeNode);
  const unwrapped = expandUnionTypes([valueType]);
  for (let i = 0; i < unwrapped.length; i++) {
    result.push(unwrapped[i]);
  }

  return result;
}

function isReactiveLikeType(sourceType: ts.Type, checker: ts.TypeChecker) {
  const hasValue = !!checker.getPropertyOfType(sourceType, 'value');
  if (!hasValue) {
    return false;
  }
  return !!checker.getPropertyOfType(sourceType, 'kid') && !!checker.getPropertyOfType(sourceType, 'ktype');
}

function getKForMemberDiagnostics(sourceFile: ts.SourceFile, checker: ts.TypeChecker, scopes: KForScope[]) {
  if (scopes.length === 0) {
    return [];
  }

  const diagnostics: ts.DiagnosticWithLocation[] = [];

  const visit = (node: ts.Node) => {
    let diagnostic: ts.DiagnosticWithLocation | undefined;

    if (ts.isPropertyAccessExpression(node) && !node.questionDotToken) {
      diagnostic = getMemberAccessDiagnostic(node, node.name.text, node.name, sourceFile, checker, scopes);
    } else if (ts.isElementAccessExpression(node) && !node.questionDotToken && node.argumentExpression) {
      if (ts.isStringLiteralLike(node.argumentExpression) || ts.isNumericLiteral(node.argumentExpression)) {
        diagnostic = getMemberAccessDiagnostic(
          node,
          node.argumentExpression.text,
          node.argumentExpression,
          sourceFile,
          checker,
          scopes,
        );
      }
    }

    if (diagnostic) {
      diagnostics.push(diagnostic);
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return diagnostics;
}

function getMemberAccessDiagnostic(
  node: ts.PropertyAccessExpression | ts.ElementAccessExpression,
  memberName: string,
  highlightNode: ts.Node,
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  scopes: KForScope[],
) {
  const bindings = collectBindingsAtPosition(node.getStart(sourceFile), scopes);
  if (bindings.size === 0) {
    return undefined;
  }

  const root = getRootIdentifier(node.expression);
  if (!root || !bindings.has(root.text)) {
    return undefined;
  }

  const localBindings = createBindingTypeMap(bindings);
  const receiverTypes = resolveExpressionTypesFromText(node.expression.getText(sourceFile), {
    checker,
    scopeNode: node,
    localBindings,
  });
  if (receiverTypes.length === 0 || canSkipMemberCheck(receiverTypes)) {
    return undefined;
  }

  const accessTypes = resolveExpressionTypesFromText(node.getText(sourceFile), {
    checker,
    scopeNode: node,
    localBindings,
  });
  if (accessTypes.length > 0) {
    return undefined;
  }

  const start = highlightNode.getStart(sourceFile);
  return {
    file: sourceFile,
    start,
    length: highlightNode.end - start,
    category: ts.DiagnosticCategory.Error,
    code: 2339,
    messageText: `Property '${memberName}' does not exist on type '${formatTypeList(receiverTypes, checker, node)}'.`,
  };
}

function canSkipMemberCheck(types: ts.Type[]) {
  for (let i = 0; i < types.length; i++) {
    if (types[i].flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
      return true;
    }
  }
  return false;
}

function collectBindingsAtPosition(position: number, scopes: KForScope[]) {
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

function createBindingTypeMap(bindings: Map<string, KForBinding>) {
  const map = new Map<string, readonly ts.Type[]>();
  for (const binding of bindings.values()) {
    map.set(binding.name, binding.types);
  }
  return map;
}

function getRootIdentifier(expr: ts.Expression): ts.Identifier | undefined {
  let current = unwrapExpression(expr);

  while (true) {
    if (ts.isIdentifier(current)) {
      return current;
    }
    if (ts.isPropertyAccessExpression(current)) {
      current = unwrapExpression(current.expression);
      continue;
    }
    if (ts.isElementAccessExpression(current)) {
      current = unwrapExpression(current.expression);
      continue;
    }
    if (ts.isCallExpression(current)) {
      current = unwrapExpression(current.expression);
      continue;
    }
    return undefined;
  }
}

function resolveExpressionTypesFromText(raw: string, context: TypeResolutionContext) {
  const value = raw.trim();
  if (!value) {
    return [];
  }

  const sourceFile = ts.createSourceFile(
    '__k_for_expression.ts',
    `(${value});`,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  if (sourceFile.statements.length === 0) {
    return [];
  }

  const statement = sourceFile.statements[0];
  if (!ts.isExpressionStatement(statement)) {
    return [];
  }

  const types = resolveExpressionTypes(statement.expression, context);
  return uniqueTypes(types, context.checker, context.scopeNode);
}

function resolveExpressionTypes(expr: ts.Expression, context: TypeResolutionContext): ts.Type[] {
  const target = unwrapExpression(expr);

  if (ts.isIdentifier(target)) {
    return resolveIdentifierTypes(target.text, context);
  }

  if (ts.isPropertyAccessExpression(target)) {
    const objectTypes = resolveExpressionTypes(target.expression, context);
    return resolvePropertyTypes(objectTypes, target.name.text, context, false);
  }

  if (ts.isElementAccessExpression(target)) {
    const objectTypes = resolveExpressionTypes(target.expression, context);
    const argument = target.argumentExpression;
    if (!argument) {
      return [];
    }
    if (ts.isStringLiteralLike(argument)) {
      return resolvePropertyTypes(objectTypes, argument.text, context, true);
    }
    if (ts.isNumericLiteral(argument)) {
      return resolveNumericElementTypes(objectTypes, Number(argument.text), context);
    }
    return resolveIndexedTypes(objectTypes, context);
  }

  if (ts.isCallExpression(target)) {
    const calleeTypes = resolveExpressionTypes(target.expression, context);
    const result: ts.Type[] = [];

    for (let i = 0; i < calleeTypes.length; i++) {
      const signatures = context.checker.getSignaturesOfType(calleeTypes[i], ts.SignatureKind.Call);
      for (let j = 0; j < signatures.length; j++) {
        result.push(context.checker.getReturnTypeOfSignature(signatures[j]));
      }
    }

    return uniqueTypes(result, context.checker, context.scopeNode);
  }

  if (ts.isConditionalExpression(target)) {
    const whenTrue = resolveExpressionTypes(target.whenTrue, context);
    const whenFalse = resolveExpressionTypes(target.whenFalse, context);
    return uniqueTypes([...whenTrue, ...whenFalse], context.checker, context.scopeNode);
  }

  if (
    ts.isBinaryExpression(target) &&
    (target.operatorToken.kind === ts.SyntaxKind.BarBarToken ||
      target.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
      target.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken)
  ) {
    const left = resolveExpressionTypes(target.left, context);
    const right = resolveExpressionTypes(target.right, context);
    return uniqueTypes([...left, ...right], context.checker, context.scopeNode);
  }

  return [];
}

function resolveIdentifierTypes(name: string, context: TypeResolutionContext) {
  const localTypes = context.localBindings?.get(name);
  if (localTypes && localTypes.length > 0) {
    return [...localTypes];
  }

  const symbol = resolveSymbolInScope(name, context);
  if (!symbol) {
    return [];
  }

  return [context.checker.getTypeOfSymbolAtLocation(symbol, context.scopeNode)];
}

function resolveSymbolInScope(name: string, context: TypeResolutionContext) {
  const symbols = context.checker.getSymbolsInScope(context.scopeNode, ts.SymbolFlags.Value | ts.SymbolFlags.Alias);

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    if (symbol.getName() !== name) {
      continue;
    }

    if (symbol.flags & ts.SymbolFlags.Alias) {
      const aliased = context.checker.getAliasedSymbol(symbol);
      if (aliased.flags & ts.SymbolFlags.Value) {
        return aliased;
      }
      continue;
    }

    if (symbol.flags & ts.SymbolFlags.Value) {
      return symbol;
    }
  }

  return undefined;
}

function resolvePropertyTypes(
  objectTypes: ts.Type[],
  propertyName: string,
  context: TypeResolutionContext,
  allowStringIndexFallback: boolean,
) {
  const result: ts.Type[] = [];

  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const property = context.checker.getPropertyOfType(targetType, propertyName);
    if (property) {
      result.push(context.checker.getTypeOfSymbolAtLocation(property, context.scopeNode));
      continue;
    }

    if (allowStringIndexFallback) {
      const stringIndexType = context.checker.getIndexTypeOfType(targetType, ts.IndexKind.String);
      if (stringIndexType) {
        result.push(stringIndexType);
      }
    }
  }

  return uniqueTypes(result, context.checker, context.scopeNode);
}

function resolveNumericElementTypes(objectTypes: ts.Type[], index: number, context: TypeResolutionContext) {
  const result: ts.Type[] = [];
  const indexName = String(index);

  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const property = context.checker.getPropertyOfType(targetType, indexName);
    if (property) {
      result.push(context.checker.getTypeOfSymbolAtLocation(property, context.scopeNode));
    }

    const numericIndexType = context.checker.getIndexTypeOfType(targetType, ts.IndexKind.Number);
    if (numericIndexType) {
      result.push(numericIndexType);
    }
  }

  return uniqueTypes(result, context.checker, context.scopeNode);
}

function resolveIndexedTypes(objectTypes: ts.Type[], context: TypeResolutionContext) {
  const result: ts.Type[] = [];

  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const stringIndexType = context.checker.getIndexTypeOfType(targetType, ts.IndexKind.String);
    if (stringIndexType) {
      result.push(stringIndexType);
    }

    const numericIndexType = context.checker.getIndexTypeOfType(targetType, ts.IndexKind.Number);
    if (numericIndexType) {
      result.push(numericIndexType);
    }
  }

  return uniqueTypes(result, context.checker, context.scopeNode);
}

function formatTypeList(types: ts.Type[], checker: ts.TypeChecker, scopeNode: ts.Node) {
  if (types.length === 0) {
    return 'any';
  }

  const texts = new Set<string>();
  for (let i = 0; i < types.length; i++) {
    texts.add(checker.typeToString(types[i], scopeNode, ts.TypeFormatFlags.NoTruncation));
  }

  return Array.from(texts).join(' | ');
}

function uniqueTypes(types: ts.Type[], checker: ts.TypeChecker, scopeNode: ts.Node) {
  const seen = new Set<string>();
  const result: ts.Type[] = [];

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const text = checker.typeToString(type, scopeNode, ts.TypeFormatFlags.NoTruncation);
    if (seen.has(text)) {
      continue;
    }
    seen.add(text);
    result.push(type);
  }

  return result;
}

function expandUnionTypes(types: ts.Type[]) {
  const result: ts.Type[] = [];

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    if (type.flags & ts.TypeFlags.Union) {
      const union = type as ts.UnionType;
      result.push(...union.types);
      continue;
    }
    result.push(type);
  }

  return result;
}

function isSuppressed(position: number, name: string, scopes: readonly KForScope[]) {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const scope = scopes[i];
    if (position < scope.start || position >= scope.end) {
      continue;
    }
    for (let j = 0; j < scope.bindings.length; j++) {
      if (scope.bindings[j].name === name) {
        return true;
      }
    }
  }
  return false;
}

function isJsxLikeFile(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();
  return extension === '.tsx' || extension === '.jsx';
}

function getJsxAttribute(opening: ts.JsxOpeningElement | ts.JsxSelfClosingElement, attrName: string) {
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
}

function getAttributeName(name: ts.JsxAttributeName) {
  if ('text' in name) {
    return String(name.text);
  }
  return name.getText();
}

function getAttributeText(attr: ts.JsxAttribute | undefined) {
  if (!attr?.initializer) {
    return undefined;
  }
  if (ts.isStringLiteral(attr.initializer)) {
    return attr.initializer.text;
  }
  if (!ts.isJsxExpression(attr.initializer) || !attr.initializer.expression) {
    return undefined;
  }
  if (ts.isStringLiteralLike(attr.initializer.expression)) {
    return attr.initializer.expression.text;
  }
  return undefined;
}

function parseKForExpression(raw: string | undefined, allowOfKeyword: boolean): ParsedKFor | undefined {
  if (!raw) {
    return undefined;
  }

  const value = raw.trim();
  if (!value) {
    return undefined;
  }

  const tupleMatch = KFOR_TUPLE_PATTERN.exec(value);
  if (tupleMatch) {
    const keyword = tupleMatch[4];
    if (!allowOfKeyword && keyword === 'of') {
      return undefined;
    }
    const aliases = [...new Set([tupleMatch[1], tupleMatch[2], tupleMatch[3]].filter(Boolean) as string[])];
    if (aliases.length === 0) {
      return undefined;
    }
    return {
      aliases,
      source: tupleMatch[5].trim(),
    };
  }

  const singleMatch = KFOR_SINGLE_PATTERN.exec(value);
  if (singleMatch) {
    const keyword = singleMatch[2];
    if (!allowOfKeyword && keyword === 'of') {
      return undefined;
    }
    return {
      aliases: [...new Set([singleMatch[1], 'index'])],
      source: singleMatch[3].trim(),
    };
  }

  return undefined;
}

function unwrapExpression(expr: ts.Expression): ts.Expression {
  let current = expr;

  while (true) {
    if (ts.isParenthesizedExpression(current)) {
      current = current.expression;
      continue;
    }
    if (ts.isAsExpression(current) || ts.isTypeAssertionExpression(current) || ts.isSatisfiesExpression(current)) {
      current = current.expression;
      continue;
    }
    if (ts.isNonNullExpression(current)) {
      current = current.expression;
      continue;
    }
    return current;
  }
}

function report(diagnostics: readonly ts.Diagnostic[], pretty: boolean) {
  const formatHost: ts.FormatDiagnosticsHost = {
    getCurrentDirectory: () => process.cwd(),
    getCanonicalFileName: (fileName) => fileName,
    getNewLine: () => ts.sys.newLine,
  };

  const text = pretty
    ? ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost)
    : ts.formatDiagnostics(diagnostics, formatHost);
  if (text) {
    process.stderr.write(text);
  }
}

function reportSummary(diagnostics: readonly ts.Diagnostic[], checkedFileCount: number, hasErrors: boolean) {
  if (diagnostics.length === 0) {
    process.stdout.write(`Found 0 errors. Checked ${checkedFileCount} files.\n`);
    return;
  }

  const fileSet = new Set<string>();
  for (let i = 0; i < diagnostics.length; i++) {
    const fileName = diagnostics[i].file?.fileName;
    if (fileName) {
      fileSet.add(fileName);
    }
  }

  const errorWord = diagnostics.length === 1 ? 'error' : 'errors';
  const fileWord = fileSet.size === 1 ? 'file' : 'files';
  const summary = `Found ${diagnostics.length} ${errorWord} in ${fileSet.size} ${fileWord}. Checked ${checkedFileCount} files.\n`;
  const output = hasErrors ? process.stderr : process.stdout;
  output.write(summary);

  if (fileSet.size > 0) {
    const filePaths = Array.from(fileSet).map((fileName) => path.relative(process.cwd(), fileName) || '.');
    filePaths.sort();
    output.write('Error files:\n');
    for (let i = 0; i < filePaths.length; i++) {
      output.write(`- ${filePaths[i]}\n`);
    }
  }
}

main();
