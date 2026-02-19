import type tsModule from 'typescript/lib/tsserverlibrary';
import type { TypeResolutionContext } from './types';

export function resolveExpressionTypesFromText(raw: string, context: TypeResolutionContext): tsModule.Type[] {
  const value = raw.trim();
  if (!value) {
    return [];
  }

  const sourceFile = context.ts.createSourceFile(
    '__k_for_expression.ts',
    `(${value});`,
    context.ts.ScriptTarget.Latest,
    true,
    context.ts.ScriptKind.TS,
  );

  if (sourceFile.statements.length === 0) {
    return [];
  }

  const statement = sourceFile.statements[0];
  if (!context.ts.isExpressionStatement(statement)) {
    return [];
  }

  const types = resolveExpressionTypes(statement.expression, context);
  return uniqueTypes(types, context.checker, context.scopeNode, context.ts);
}

export function formatTypeList(
  types: tsModule.Type[],
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): string {
  if (types.length === 0) {
    return 'any';
  }

  const texts = new Set<string>();
  for (let i = 0; i < types.length; i++) {
    texts.add(checker.typeToString(types[i], scopeNode, ts.TypeFormatFlags.NoTruncation));
  }

  return Array.from(texts).join(' | ');
}

export function uniqueTypes(
  types: tsModule.Type[],
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.Type[] {
  const seen = new Set<string>();
  const result: tsModule.Type[] = [];

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

function resolveExpressionTypes(expr: tsModule.Expression, context: TypeResolutionContext): tsModule.Type[] {
  const ts = context.ts;
  const target = unwrapExpression(expr, ts);

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
    const result: tsModule.Type[] = [];

    for (let i = 0; i < calleeTypes.length; i++) {
      const signatures = context.checker.getSignaturesOfType(calleeTypes[i], ts.SignatureKind.Call);
      for (let j = 0; j < signatures.length; j++) {
        result.push(context.checker.getReturnTypeOfSignature(signatures[j]));
      }
    }

    return uniqueTypes(result, context.checker, context.scopeNode, ts);
  }

  if (ts.isConditionalExpression(target)) {
    const whenTrue = resolveExpressionTypes(target.whenTrue, context);
    const whenFalse = resolveExpressionTypes(target.whenFalse, context);
    return uniqueTypes([...whenTrue, ...whenFalse], context.checker, context.scopeNode, ts);
  }

  if (
    ts.isBinaryExpression(target) &&
    (target.operatorToken.kind === ts.SyntaxKind.BarBarToken ||
      target.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
      target.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken)
  ) {
    const left = resolveExpressionTypes(target.left, context);
    const right = resolveExpressionTypes(target.right, context);
    return uniqueTypes([...left, ...right], context.checker, context.scopeNode, ts);
  }

  return [];
}

function unwrapExpression(expr: tsModule.Expression, ts: typeof tsModule): tsModule.Expression {
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

function resolveIdentifierTypes(name: string, context: TypeResolutionContext): tsModule.Type[] {
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

function resolveSymbolInScope(name: string, context: TypeResolutionContext): tsModule.Symbol | undefined {
  const symbols = context.checker.getSymbolsInScope(
    context.scopeNode,
    context.ts.SymbolFlags.Value | context.ts.SymbolFlags.Alias,
  );

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    if (symbol.getName() !== name) {
      continue;
    }

    if (symbol.flags & context.ts.SymbolFlags.Alias) {
      const aliased = context.checker.getAliasedSymbol(symbol);
      if (aliased.flags & context.ts.SymbolFlags.Value) {
        return aliased;
      }
      continue;
    }

    if (symbol.flags & context.ts.SymbolFlags.Value) {
      return symbol;
    }
  }

  return undefined;
}

function resolvePropertyTypes(
  objectTypes: tsModule.Type[],
  propertyName: string,
  context: TypeResolutionContext,
  allowStringIndexFallback: boolean,
): tsModule.Type[] {
  const result: tsModule.Type[] = [];

  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const property = context.checker.getPropertyOfType(targetType, propertyName);
    if (property) {
      result.push(context.checker.getTypeOfSymbolAtLocation(property, context.scopeNode));
      continue;
    }

    if (allowStringIndexFallback) {
      const stringIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.String);
      if (stringIndexType) {
        result.push(stringIndexType);
      }
    }
  }

  return uniqueTypes(result, context.checker, context.scopeNode, context.ts);
}

function resolveNumericElementTypes(
  objectTypes: tsModule.Type[],
  index: number,
  context: TypeResolutionContext,
): tsModule.Type[] {
  const result: tsModule.Type[] = [];
  const indexName = String(index);

  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const property = context.checker.getPropertyOfType(targetType, indexName);
    if (property) {
      result.push(context.checker.getTypeOfSymbolAtLocation(property, context.scopeNode));
    }

    const numericIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.Number);
    if (numericIndexType) {
      result.push(numericIndexType);
    }
  }

  return uniqueTypes(result, context.checker, context.scopeNode, context.ts);
}

function resolveIndexedTypes(objectTypes: tsModule.Type[], context: TypeResolutionContext): tsModule.Type[] {
  const result: tsModule.Type[] = [];

  for (let i = 0; i < objectTypes.length; i++) {
    const targetType = context.checker.getApparentType(objectTypes[i]);
    const stringIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.String);
    if (stringIndexType) {
      result.push(stringIndexType);
    }

    const numericIndexType = context.checker.getIndexTypeOfType(targetType, context.ts.IndexKind.Number);
    if (numericIndexType) {
      result.push(numericIndexType);
    }
  }

  return uniqueTypes(result, context.checker, context.scopeNode, context.ts);
}
