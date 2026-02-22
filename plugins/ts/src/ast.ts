import type tsModule from 'typescript/lib/tsserverlibrary';

export function findIdentifierAtPosition(
  sourceFile: tsModule.SourceFile,
  position: number,
  ts: typeof tsModule,
): tsModule.Identifier | undefined {
  const exact = findInnermostNode(sourceFile, normalizePosition(position, sourceFile), ts);
  if (exact && ts.isIdentifier(exact)) {
    return exact;
  }

  if (position > 0) {
    const previous = findInnermostNode(sourceFile, normalizePosition(position - 1, sourceFile), ts);
    if (previous && ts.isIdentifier(previous)) {
      return previous;
    }
  }

  return undefined;
}

export function normalizePosition(position: number, sourceFile: tsModule.SourceFile): number {
  const max = Math.max(sourceFile.text.length - 1, 0);
  if (position < 0) {
    return 0;
  }
  if (position > max) {
    return max;
  }
  return position;
}

export function findInnermostNode(
  node: tsModule.Node,
  position: number,
  ts: typeof tsModule,
): tsModule.Node | undefined {
  if (position < node.getFullStart() || position >= node.end) {
    return undefined;
  }

  let match: tsModule.Node | undefined;
  ts.forEachChild(node, (child) => {
    const childMatch = findInnermostNode(child, position, ts);
    if (childMatch) {
      match = childMatch;
    }
  });

  return match || node;
}
