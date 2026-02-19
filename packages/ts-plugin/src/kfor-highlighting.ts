import type tsModule from 'typescript/lib/tsserverlibrary';
import { getAttributeExpression, getJsxAttribute } from './jsx-attributes';
import { parseKForExpression } from './kfor-parser';
import { isValidIdentifier } from './identifiers';
import type { ResolvedConfig } from './types';

type HighlightTokenKind = 'alias' | 'source' | 'keyword';

interface HighlightToken {
  start: number;
  length: number;
  kind: HighlightTokenKind;
}

interface EncodedSpan {
  start: number;
  length: number;
  classification: number;
}

const TOKEN_TYPE_VARIABLE = 7;
const TOKEN_MODIFIER_READONLY = 1 << 3;
const TOKEN_ENCODING_TYPE_OFFSET = 8;

const IDENTIFIER_PATTERN = /[A-Za-z_$][A-Za-z0-9_$]*/g;
const KEYWORD_DELIMITER_PATTERN = /\s+(in|of)\s+/;

export function addKForSemanticClassifications(
  base: tsModule.Classifications,
  sourceFile: tsModule.SourceFile,
  span: tsModule.TextSpan,
  format: tsModule.SemanticClassificationFormat | undefined,
  ts: typeof tsModule,
  config: ResolvedConfig,
): tsModule.Classifications {
  const tokens = collectHighlightTokens(sourceFile, ts, config, span);
  if (tokens.length === 0) {
    return base;
  }

  const semanticSpans = buildSemanticSpans(tokens, format, ts);
  if (semanticSpans.length === 0) {
    return base;
  }

  return mergeClassifications(base, semanticSpans, false);
}

export function addKForSyntacticClassifications(
  base: tsModule.Classifications,
  sourceFile: tsModule.SourceFile,
  span: tsModule.TextSpan,
  ts: typeof tsModule,
  config: ResolvedConfig,
): tsModule.Classifications {
  const tokens = collectHighlightTokens(sourceFile, ts, config, span);
  if (tokens.length === 0) {
    return base;
  }

  const keywordSpans = buildSyntacticKeywordSpans(tokens, ts);
  if (keywordSpans.length === 0) {
    return base;
  }

  return mergeClassifications(base, keywordSpans, true);
}

function collectHighlightTokens(
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
  config: ResolvedConfig,
  span: tsModule.TextSpan,
): HighlightToken[] {
  const tokens: HighlightToken[] = [];
  const spanStart = span.start;
  const spanEnd = span.start + span.length;

  const visit = (node: tsModule.Node) => {
    let opening: tsModule.JsxOpeningElement | tsModule.JsxSelfClosingElement | undefined;

    if (ts.isJsxElement(node)) {
      opening = node.openingElement;
    } else if (ts.isJsxSelfClosingElement(node)) {
      opening = node;
    }

    if (opening) {
      const attr = getJsxAttribute(opening, config.forAttr, ts);
      if (attr) {
        const parsed = parseKForAttributeTokens(attr, sourceFile, ts, config.allowOfKeyword);
        for (let i = 0; i < parsed.length; i++) {
          const token = parsed[i];
          const tokenStart = token.start;
          const tokenEnd = token.start + token.length;
          if (tokenEnd <= spanStart || tokenStart >= spanEnd) {
            continue;
          }

          const clippedStart = Math.max(tokenStart, spanStart);
          const clippedEnd = Math.min(tokenEnd, spanEnd);
          if (clippedEnd > clippedStart) {
            tokens.push({
              start: clippedStart,
              length: clippedEnd - clippedStart,
              kind: token.kind,
            });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return uniqueTokens(tokens);
}

function parseKForAttributeTokens(
  attr: tsModule.JsxAttribute,
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
  allowOfKeyword: boolean,
): HighlightToken[] {
  const content = getAttributeRawContent(attr, sourceFile, ts);
  if (!content) {
    return [];
  }

  const raw = content.text;
  const rawOffset = content.start;
  const value = raw.trim();
  if (!value) {
    return [];
  }

  const parsed = parseKForExpression(value, allowOfKeyword);
  if (!parsed) {
    return [];
  }

  const trimStart = raw.length - raw.trimStart().length;
  const delimiterMatch = KEYWORD_DELIMITER_PATTERN.exec(value);
  if (!delimiterMatch) {
    return [];
  }

  const keyword = delimiterMatch[1];
  const keywordOffsetInDelimiter = delimiterMatch[0].indexOf(keyword);

  const leftSegment = value.slice(0, delimiterMatch.index);
  const rightSegment = value.slice(delimiterMatch.index + delimiterMatch[0].length);

  const leftLeading = leftSegment.length - leftSegment.trimStart().length;
  const leftTrimmed = leftSegment.trim();

  let aliasText = leftTrimmed;
  let aliasTextStartInRaw = trimStart + leftLeading;
  if (leftTrimmed.startsWith('(') && leftTrimmed.endsWith(')')) {
    aliasText = leftTrimmed.slice(1, -1);
    aliasTextStartInRaw += 1;
  }

  const rightLeading = rightSegment.length - rightSegment.trimStart().length;
  const sourceText = rightSegment.trim();
  const sourceTextStartInRaw = trimStart + delimiterMatch.index + delimiterMatch[0].length + rightLeading;

  const keywordStartInRaw = trimStart + delimiterMatch.index + keywordOffsetInDelimiter;

  const tokens: HighlightToken[] = [];

  const aliasTokens = collectAliasTokens(aliasText, aliasTextStartInRaw, parsed.aliases);
  for (let i = 0; i < aliasTokens.length; i++) {
    tokens.push({
      start: rawOffset + aliasTokens[i].start,
      length: aliasTokens[i].length,
      kind: 'alias',
    });
  }

  tokens.push({
    start: rawOffset + keywordStartInRaw,
    length: keyword.length,
    kind: 'keyword',
  });

  const sourceTokens = collectSourceTokens(sourceText, sourceTextStartInRaw, ts);
  for (let i = 0; i < sourceTokens.length; i++) {
    tokens.push({
      start: rawOffset + sourceTokens[i].start,
      length: sourceTokens[i].length,
      kind: 'source',
    });
  }

  return tokens;
}

function collectAliasTokens(aliasText: string, baseStart: number, aliases: string[]): HighlightToken[] {
  const result: HighlightToken[] = [];
  const allowed = new Set(aliases);

  let match: RegExpExecArray | null;
  IDENTIFIER_PATTERN.lastIndex = 0;
  while ((match = IDENTIFIER_PATTERN.exec(aliasText))) {
    const name = match[0];
    if (!allowed.has(name) || !isValidIdentifier(name)) {
      continue;
    }

    result.push({
      start: baseStart + match.index,
      length: name.length,
      kind: 'alias',
    });
  }

  return result;
}

function collectSourceTokens(sourceText: string, baseStart: number, ts: typeof tsModule): HighlightToken[] {
  const tokens = collectSourceTokensWithAst(sourceText, baseStart, ts);
  if (tokens.length > 0) {
    return tokens;
  }

  const fallback: HighlightToken[] = [];
  let match: RegExpExecArray | null;
  IDENTIFIER_PATTERN.lastIndex = 0;
  while ((match = IDENTIFIER_PATTERN.exec(sourceText))) {
    const name = match[0];
    if (!isValidIdentifier(name)) {
      continue;
    }

    fallback.push({
      start: baseStart + match.index,
      length: name.length,
      kind: 'source',
    });
  }

  return fallback;
}

function collectSourceTokensWithAst(sourceText: string, baseStart: number, ts: typeof tsModule): HighlightToken[] {
  const snippet = `(${sourceText});`;
  const tempSourceFile = ts.createSourceFile(
    '__k_for_highlight.ts',
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

  const result: HighlightToken[] = [];

  const visit = (node: tsModule.Node) => {
    if (ts.isIdentifier(node) && isValidIdentifier(node.text)) {
      const start = node.getStart(tempSourceFile) - 1;
      const end = start + node.getWidth(tempSourceFile);
      if (start >= 0 && end <= sourceText.length) {
        result.push({
          start: baseStart + start,
          length: end - start,
          kind: 'source',
        });
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(statement.expression);
  return result;
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

function buildSemanticSpans(
  tokens: HighlightToken[],
  format: tsModule.SemanticClassificationFormat | undefined,
  ts: typeof tsModule,
): EncodedSpan[] {
  const spans: EncodedSpan[] = [];

  if (format === ts.SemanticClassificationFormat.TwentyTwenty) {
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      spans.push({
        start: token.start,
        length: token.length,
        classification:
          token.kind === 'keyword'
            ? encodeSemantic2020(TOKEN_TYPE_VARIABLE, TOKEN_MODIFIER_READONLY)
            : encodeSemantic2020(TOKEN_TYPE_VARIABLE, 0),
      });
    }
    return spans;
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    spans.push({
      start: token.start,
      length: token.length,
      classification:
        token.kind === 'keyword' ? ts.ClassificationType.keyword : ts.ClassificationType.identifier,
    });
  }

  return spans;
}

function buildSyntacticKeywordSpans(tokens: HighlightToken[], ts: typeof tsModule): EncodedSpan[] {
  const spans: EncodedSpan[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind !== 'keyword') {
      continue;
    }

    spans.push({
      start: token.start,
      length: token.length,
      classification: ts.ClassificationType.keyword,
    });
  }

  return spans;
}

function encodeSemantic2020(typeIndex: number, modifiers: number): number {
  return ((typeIndex + 1) << TOKEN_ENCODING_TYPE_OFFSET) + modifiers;
}

function mergeClassifications(
  base: tsModule.Classifications,
  overlays: EncodedSpan[],
  replaceOverlaps: boolean,
): tsModule.Classifications {
  if (overlays.length === 0) {
    return base;
  }

  const baseSpans = decodeSpans(base.spans);
  const extraSpans = normalizeSpans(overlays);
  if (extraSpans.length === 0) {
    return base;
  }

  const merged = replaceOverlaps
    ? [...removeOverlayOverlaps(baseSpans, extraSpans), ...extraSpans]
    : [...baseSpans, ...extraSpans];

  const normalized = normalizeSpans(merged);
  return {
    spans: encodeSpans(normalized),
    endOfLineState: base.endOfLineState,
  };
}

function removeOverlayOverlaps(baseSpans: EncodedSpan[], overlays: EncodedSpan[]): EncodedSpan[] {
  const result: EncodedSpan[] = [];

  for (let i = 0; i < baseSpans.length; i++) {
    let segments: EncodedSpan[] = [baseSpans[i]];

    for (let j = 0; j < overlays.length; j++) {
      const overlay = overlays[j];
      const nextSegments: EncodedSpan[] = [];

      for (let k = 0; k < segments.length; k++) {
        const segment = segments[k];
        const segmentStart = segment.start;
        const segmentEnd = segment.start + segment.length;
        const overlayStart = overlay.start;
        const overlayEnd = overlay.start + overlay.length;

        if (overlayEnd <= segmentStart || overlayStart >= segmentEnd) {
          nextSegments.push(segment);
          continue;
        }

        if (segmentStart < overlayStart) {
          nextSegments.push({
            start: segmentStart,
            length: overlayStart - segmentStart,
            classification: segment.classification,
          });
        }

        if (overlayEnd < segmentEnd) {
          nextSegments.push({
            start: overlayEnd,
            length: segmentEnd - overlayEnd,
            classification: segment.classification,
          });
        }
      }

      segments = nextSegments;
      if (segments.length === 0) {
        break;
      }
    }

    for (let j = 0; j < segments.length; j++) {
      result.push(segments[j]);
    }
  }

  return result;
}

function decodeSpans(spans: number[]): EncodedSpan[] {
  const decoded: EncodedSpan[] = [];

  for (let i = 0; i + 2 < spans.length; i += 3) {
    const start = spans[i];
    const length = spans[i + 1];
    const classification = spans[i + 2];
    if (length <= 0) {
      continue;
    }
    decoded.push({ start, length, classification });
  }

  return decoded;
}

function encodeSpans(spans: EncodedSpan[]): number[] {
  const encoded: number[] = [];

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    encoded.push(span.start, span.length, span.classification);
  }

  return encoded;
}

function normalizeSpans(spans: EncodedSpan[]): EncodedSpan[] {
  if (spans.length === 0) {
    return [];
  }

  const sorted = spans
    .filter((span) => span.length > 0)
    .slice()
    .sort((left, right) => {
      if (left.start !== right.start) {
        return left.start - right.start;
      }
      if (left.length !== right.length) {
        return left.length - right.length;
      }
      return left.classification - right.classification;
    });

  const normalized: EncodedSpan[] = [];
  for (let i = 0; i < sorted.length; i++) {
    const span = sorted[i];
    const previous = normalized[normalized.length - 1];
    if (
      previous &&
      previous.start === span.start &&
      previous.length === span.length &&
      previous.classification === span.classification
    ) {
      continue;
    }
    normalized.push(span);
  }

  return normalized;
}

function uniqueTokens(tokens: HighlightToken[]): HighlightToken[] {
  if (tokens.length === 0) {
    return [];
  }

  const map = new Map<string, HighlightToken>();
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const key = `${token.start}:${token.length}:${token.kind}`;
    if (!map.has(key)) {
      map.set(key, token);
    }
  }

  return Array.from(map.values()).sort((left, right) => {
    if (left.start !== right.start) {
      return left.start - right.start;
    }
    return left.length - right.length;
  });
}
