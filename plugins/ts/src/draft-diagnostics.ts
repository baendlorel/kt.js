import type tsModule from 'typescript/lib/tsserverlibrary';
import {
  DIAGNOSTIC_DRAFT_ASSIGN_MESSAGE,
  DIAGNOSTIC_DRAFT_CALL_MESSAGE,
  DIAGNOSTIC_DRAFT_DELETE_MESSAGE,
  DIAGNOSTIC_DRAFT_ESCAPE,
  DIAGNOSTIC_DRAFT_ESCAPE_MESSAGE,
  DIAGNOSTIC_DRAFT_UPDATE_MESSAGE,
  DIAGNOSTIC_SOURCE,
  DRAFT_PROPERTY_NAME,
} from './constants';

type DraftChain = tsModule.PropertyAccessExpression | tsModule.ElementAccessExpression;

export function getDraftEscapeDiagnostics(
  sourceFile: tsModule.SourceFile,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
): tsModule.DiagnosticWithLocation[] {
  if (!sourceFile.text.includes(DRAFT_PROPERTY_NAME)) {
    return [];
  }

  const diagnostics: tsModule.DiagnosticWithLocation[] = [];

  const visit = (node: tsModule.Node) => {
    if (
      ts.isPropertyAccessExpression(node) &&
      node.name.text === DRAFT_PROPERTY_NAME &&
      isKtRefDraftAccess(node, checker, ts)
    ) {
      const diagnostic = getDraftEscapeDiagnostic(node, sourceFile, ts);
      if (diagnostic) {
        diagnostics.push(diagnostic);
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return diagnostics;
}

function getDraftEscapeDiagnostic(
  node: tsModule.PropertyAccessExpression,
  sourceFile: tsModule.SourceFile,
  ts: typeof tsModule,
): tsModule.DiagnosticWithLocation | undefined {
  const topNode = getTopDraftChain(node, ts);
  const parent = topNode.parent;
  if (!parent) {
    return undefined;
  }

  if (
    ts.isBinaryExpression(parent) &&
    parent.left === topNode &&
    parent.operatorToken.kind >= ts.SyntaxKind.FirstAssignment &&
    parent.operatorToken.kind <= ts.SyntaxKind.LastAssignment
  ) {
    if (topNode !== node) {
      return undefined;
    }
    return createDraftDiagnostic(topNode, sourceFile, DIAGNOSTIC_DRAFT_ASSIGN_MESSAGE, ts);
  }

  if (
    ((ts.isPrefixUnaryExpression(parent) && parent.operand === topNode) ||
      (ts.isPostfixUnaryExpression(parent) && parent.operand === topNode)) &&
    (parent.operator === ts.SyntaxKind.PlusPlusToken || parent.operator === ts.SyntaxKind.MinusMinusToken)
  ) {
    if (topNode !== node) {
      return undefined;
    }
    return createDraftDiagnostic(topNode, sourceFile, DIAGNOSTIC_DRAFT_UPDATE_MESSAGE, ts);
  }

  if (ts.isDeleteExpression(parent) && parent.expression === topNode) {
    if (topNode !== node) {
      return undefined;
    }
    return createDraftDiagnostic(topNode, sourceFile, DIAGNOSTIC_DRAFT_DELETE_MESSAGE, ts);
  }

  if (ts.isCallExpression(parent) && parent.expression === topNode) {
    if (topNode !== node) {
      return undefined;
    }
    return createDraftDiagnostic(topNode, sourceFile, DIAGNOSTIC_DRAFT_CALL_MESSAGE, ts);
  }

  return createDraftDiagnostic(topNode, sourceFile, DIAGNOSTIC_DRAFT_ESCAPE_MESSAGE, ts);
}

function isKtRefDraftAccess(
  node: tsModule.PropertyAccessExpression,
  checker: tsModule.TypeChecker,
  ts: typeof tsModule,
): boolean {
  const symbol = checker.getSymbolAtLocation(node.name);
  if (!symbol?.declarations?.length) {
    return false;
  }

  for (let i = 0; i < symbol.declarations.length; i++) {
    const parent = symbol.declarations[i].parent;
    if (!parent) {
      continue;
    }
    if ((ts.isClassDeclaration(parent) || ts.isInterfaceDeclaration(parent)) && parent.name?.text === 'KTRef') {
      return true;
    }
  }

  return false;
}

function getTopDraftChain(node: tsModule.PropertyAccessExpression, ts: typeof tsModule): DraftChain {
  let current: DraftChain = node;

  while (true) {
    const parent = current.parent;
    if (!parent) {
      return current;
    }
    if (
      (ts.isPropertyAccessExpression(parent) || ts.isElementAccessExpression(parent)) &&
      parent.expression === current
    ) {
      current = parent;
      continue;
    }
    return current;
  }
}

function createDraftDiagnostic(
  node: DraftChain,
  sourceFile: tsModule.SourceFile,
  messageText: string,
  ts: typeof tsModule,
): tsModule.DiagnosticWithLocation {
  const start = node.getStart(sourceFile);
  return {
    file: sourceFile,
    start,
    length: node.end - start,
    category: ts.DiagnosticCategory.Error,
    code: DIAGNOSTIC_DRAFT_ESCAPE,
    messageText,
    source: DIAGNOSTIC_SOURCE,
  };
}
