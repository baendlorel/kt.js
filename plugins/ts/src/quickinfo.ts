import type tsModule from 'typescript/lib/tsserverlibrary';
import { findIdentifierAtPosition } from './ast';
import { createBindingTypeMap } from './completion';
import { getAttributeExpression, getJsxAttribute } from './jsx-attributes';
import { isValidIdentifier } from './identifiers';
import { parseKForExpression } from './kfor-parser';
import { collectBindingsAtPosition, resolveBindingsForForAttribute } from './scope-analysis';
import { formatTypeList, resolveExpressionTypesFromText } from './type-resolution';
import type { FileAnalysis, JsxOpeningLikeElement, ResolvedConfig } from './types';

type KForStringTokenKind = 'alias' | 'source' | 'keyword';

interface KForStringToken {
  kind: KForStringTokenKind;
  text: string;
  start: number;
  length: number;
}

interface KForStringContext {
  opening: JsxOpeningLikeElement;
  attr: tsModule.JsxAttribute;
  sourceText: string;
  sourceStart: number;
  token: KForStringToken;
}

interface TokenSpan {
  text: string;
  start: number;
  length: number;
}

const IDENTIFIER_PATTERN = /[A-Za-z_$][A-Za-z0-9_$]*/g;
const KEYWORD_DELIMITER_PATTERN = /\s+(in|of)\s+/;

export function getKForQuickInfoAtPosition(
  analysis: FileAnalysis,
  position: number,
  ts: typeof tsModule,
  config: ResolvedConfig,
): tsModule.QuickInfo | undefined {
  const stringQuickInfo = getKForStringQuickInfo(analysis, position, ts, config);
  if (stringQuickInfo) {
    return stringQuickInfo;
  }

  const identifier = findIdentifierAtPosition(analysis.sourceFile, position, ts);
  if (!identifier) {
    return undefined;
  }

  const bindings = collectBindingsAtPosition(position, analysis.scopes);
  if (bindings.size === 0) {
    return undefined;
  }

  const aliasBinding = bindings.get(identifier.text);
  if (aliasBinding) {
    return createQuickInfo(identifier, `(k-for) ${aliasBinding.name}`, aliasBinding.types, analysis.checker, ts);
  }

  const memberTypes = resolveMemberQuickInfoTypes(identifier, bindings, analysis.sourceFile, analysis.checker, ts);
  if (memberTypes.length > 0) {
    return createQuickInfo(identifier, `(k-for) ${identifier.text}`, memberTypes, analysis.checker, ts);
  }

  return undefined;
}

function getKForStringQuickInfo(
  analysis: FileAnalysis,
  position: number,
  ts: typeof tsModule,
  config: ResolvedConfig,
): tsModule.QuickInfo | undefined {
  const context = findKForStringContextAtPosition(analysis.sourceFile, position, ts, config);
  if (!context) {
    return undefined;
  }

  if (context.token.kind === 'alias') {
    const bindings = resolveBindingsForForAttribute(
      context.opening,
      context.attr,
      analysis.checker,
      config,
      ts,
    );
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (binding.name === context.token.text) {
        return createQuickInfoForSpan(
          context.token.start,
          context.token.length,
          `(k-for) ${binding.name}`,
          binding.types,
          analysis.checker,
          context.opening,
          ts,
        );
      }
    }
    return undefined;
  }

  if (context.token.kind === 'source') {
    const expression = getSourceExpressionForToken(context, ts);
    if (!expression) {
      return undefined;
    }

    const types = resolveExpressionTypesFromText(expression, {
      checker: analysis.checker,
      ts,
      scopeNode: context.opening,
    });

    if (types.length === 0) {
      return undefined;
    }

    return createQuickInfoForSpan(
      context.token.start,
      context.token.length,
      `(k-for source) ${context.token.text}`,
      types,
      analysis.checker,
      context.opening,
      ts,
    );
  }

  return undefined;
}

function resolveMemberQuickInfoTypes(
  identifier: tsModule.Identifier,
  bindings: Map<string, { name: string; types: tsModule.Type[] }>,
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
): tsModule.Type[] {
  const parent = identifier.parent;
  let expressionText: string | undefined;

  if (ts.isPropertyAccessExpression(parent) && parent.name === identifier) {
    expressionText = parent.getText(sourceFile);
  } else if (ts.isElementAccessExpression(parent) && parent.argumentExpression === identifier) {
    expressionText = parent.getText(sourceFile);
  }

  if (!expressionText) {
    return [];
  }

  return resolveExpressionTypesFromText(expressionText, {
    checker,
    ts,
    scopeNode: identifier,
    localBindings: createBindingTypeMap(bindings),
  });
}

function findKForStringContextAtPosition(
  sourceFile: tsModule.SourceFile,
  position: number,
  ts: typeof tsModule,
  config: ResolvedConfig,
): KForStringContext | undefined {
  let found: KForStringContext | undefined;

  const visit = (node: tsModule.Node) => {
    if (found) {
      return;
    }

    let opening: JsxOpeningLikeElement | undefined;
    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const attr = getJsxAttribute(opening, config.forAttr, ts);
      if (attr) {
        const tokenContext = findTokenInForAttribute(attr, opening, sourceFile, position, ts, config.allowOfKeyword);
        if (tokenContext) {
          found = tokenContext;
          return;
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return found;
}

function findTokenInForAttribute(
  attr: tsModule.JsxAttribute,
  opening: JsxOpeningLikeElement,
  sourceFile: tsModule.SourceFile,
  position: number,
  ts: typeof tsModule,
  allowOfKeyword: boolean,
): KForStringContext | undefined {
  const content = getAttributeRawContent(attr, sourceFile, ts);
  if (!content) {
    return undefined;
  }

  const raw = content.text;
  const rawStart = content.start;
  if (position < rawStart || position >= rawStart + raw.length) {
    return undefined;
  }

  const value = raw.trim();
  if (!value) {
    return undefined;
  }

  const parsed = parseKForExpression(value, allowOfKeyword);
  if (!parsed) {
    return undefined;
  }

  const delimiterMatch = KEYWORD_DELIMITER_PATTERN.exec(value);
  if (!delimiterMatch) {
    return undefined;
  }

  const trimStart = raw.length - raw.trimStart().length;
  const keyword = delimiterMatch[1];
  const keywordOffsetInDelimiter = delimiterMatch[0].indexOf(keyword);

  const leftSegment = value.slice(0, delimiterMatch.index);
  const rightSegment = value.slice(delimiterMatch.index + delimiterMatch[0].length);

  const leftLeading = leftSegment.length - leftSegment.trimStart().length;
  const leftTrimmed = leftSegment.trim();

  let aliasText = leftTrimmed;
  let aliasStartInRaw = trimStart + leftLeading;
  if (leftTrimmed.startsWith('(') && leftTrimmed.endsWith(')')) {
    aliasText = leftTrimmed.slice(1, -1);
    aliasStartInRaw += 1;
  }

  const rightLeading = rightSegment.length - rightSegment.trimStart().length;
  const sourceText = rightSegment.trim();
  const sourceStartInRaw = trimStart + delimiterMatch.index + delimiterMatch[0].length + rightLeading;

  const aliasTokens = collectAliasTokens(aliasText, aliasStartInRaw, parsed.aliases, rawStart);
  const sourceTokens = collectSourceTokens(sourceText, sourceStartInRaw, rawStart, ts);

  const keywordToken: KForStringToken = {
    kind: 'keyword',
    text: keyword,
    start: rawStart + trimStart + delimiterMatch.index + keywordOffsetInDelimiter,
    length: keyword.length,
  };

  const allTokens = [...aliasTokens, keywordToken, ...sourceTokens];
  for (let i = 0; i < allTokens.length; i++) {
    const token = allTokens[i];
    if (position >= token.start && position < token.start + token.length) {
      return {
        opening,
        attr,
        sourceText,
        sourceStart: rawStart + sourceStartInRaw,
        token,
      };
    }
  }

  return undefined;
}

function collectAliasTokens(
  aliasText: string,
  aliasStartInRaw: number,
  aliases: string[],
  rawStart: number,
): KForStringToken[] {
  const result: KForStringToken[] = [];
  const allowed = new Set(aliases);

  let match: RegExpExecArray | null;
  IDENTIFIER_PATTERN.lastIndex = 0;
  while ((match = IDENTIFIER_PATTERN.exec(aliasText))) {
    const name = match[0];
    if (!allowed.has(name) || !isValidIdentifier(name)) {
      continue;
    }

    result.push({
      kind: 'alias',
      text: name,
      start: rawStart + aliasStartInRaw + match.index,
      length: name.length,
    });
  }

  return result;
}

function collectSourceTokens(
  sourceText: string,
  sourceStartInRaw: number,
  rawStart: number,
  ts: typeof tsModule,
): KForStringToken[] {
  const tokens = collectSourceTokensWithAst(sourceText, sourceStartInRaw, rawStart, ts);
  if (tokens.length > 0) {
    return tokens;
  }

  const result: KForStringToken[] = [];
  let match: RegExpExecArray | null;
  IDENTIFIER_PATTERN.lastIndex = 0;
  while ((match = IDENTIFIER_PATTERN.exec(sourceText))) {
    const name = match[0];
    if (!isValidIdentifier(name)) {
      continue;
    }

    result.push({
      kind: 'source',
      text: name,
      start: rawStart + sourceStartInRaw + match.index,
      length: name.length,
    });
  }

  return result;
}

function collectSourceTokensWithAst(
  sourceText: string,
  sourceStartInRaw: number,
  rawStart: number,
  ts: typeof tsModule,
): KForStringToken[] {
  const snippet = `(${sourceText});`;
  const tempSourceFile = ts.createSourceFile(
    '__k_for_quickinfo.ts',
    snippet,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  if (tempSourceFile.statements.length === 0) {
    return [];
  }

  const statement = tempSourceFile.statements[0];
  if (!ts.isExpressionStatement(statement)) {
    return [];
  }

  const tokens: KForStringToken[] = [];

  const visit = (node: tsModule.Node) => {
    if (ts.isIdentifier(node) && isValidIdentifier(node.text)) {
      const start = node.getStart(tempSourceFile) - 1;
      const length = node.getWidth(tempSourceFile);
      if (start >= 0 && start + length <= sourceText.length) {
        tokens.push({
          kind: 'source',
          text: node.text,
          start: rawStart + sourceStartInRaw + start,
          length,
        });
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(statement.expression);
  return uniqueSourceTokens(tokens);
}

function uniqueSourceTokens(tokens: KForStringToken[]): KForStringToken[] {
  const map = new Map<string, KForStringToken>();

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const key = `${token.start}:${token.length}:${token.text}`;
    if (!map.has(key)) {
      map.set(key, token);
    }
  }

  return Array.from(map.values()).sort((left, right) => left.start - right.start);
}

function getSourceExpressionForToken(context: KForStringContext, ts: typeof tsModule): string | undefined {
  const relativeStart = context.token.start - context.sourceStart;
  if (relativeStart < 0 || relativeStart >= context.sourceText.length) {
    return undefined;
  }

  const snippet = `(${context.sourceText});`;
  const tempSourceFile = ts.createSourceFile(
    '__k_for_quickinfo_resolve.ts',
    snippet,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  const lookupPosition = relativeStart + 1;
  const identifier = findIdentifierAtPosition(tempSourceFile, lookupPosition, ts);
  if (!identifier) {
    return context.token.text;
  }

  if (ts.isPropertyAccessExpression(identifier.parent) && identifier.parent.name === identifier) {
    return identifier.parent.getText(tempSourceFile);
  }
  if (ts.isElementAccessExpression(identifier.parent) && identifier.parent.argumentExpression === identifier) {
    return identifier.parent.getText(tempSourceFile);
  }

  return identifier.getText(tempSourceFile);
}

function getAttributeRawContent(
  attr: tsModule.JsxAttribute,
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
): { start: number; text: string } | undefined {
  const initializer = attr.initializer;
  if (!initializer) {
    return undefined;
  }

  if (ts.isStringLiteral(initializer)) {
    const quotedText = initializer.getText(sourceFile);
    if (quotedText.length < 2) {
      return undefined;
    }
    return {
      start: initializer.getStart(sourceFile) + 1,
      text: quotedText.slice(1, -1),
    };
  }

  const expression = getAttributeExpression(attr, ts);
  if (!expression || !ts.isStringLiteralLike(expression)) {
    return undefined;
  }

  const quotedText = expression.getText(sourceFile);
  if (quotedText.length < 2) {
    return undefined;
  }

  return {
    start: expression.getStart(sourceFile) + 1,
    text: quotedText.slice(1, -1),
  };
}

function createQuickInfo(
  identifier: tsModule.Identifier,
  label: string,
  types: tsModule.Type[],
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
): tsModule.QuickInfo | undefined {
  if (types.length === 0) {
    return undefined;
  }

  return createQuickInfoForSpan(
    identifier.getStart(),
    identifier.getWidth(),
    label,
    types,
    checker,
    identifier,
    ts,
  );
}

function createQuickInfoForSpan(
  start: number,
  length: number,
  label: string,
  types: tsModule.Type[],
  checker: tsModule.TypeChecker,
  scopeNode: tsModule.Node,
  ts: typeof tsModule,
): tsModule.QuickInfo {
  return {
    kind: ts.ScriptElementKind.localVariableElement,
    kindModifiers: '',
    textSpan: { start, length },
    displayParts: [{ text: `${label}: ${formatTypeList(types, checker, scopeNode, ts)}`, kind: 'text' }],
  };
}
