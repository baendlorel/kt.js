import type { NodePath, PluginObj } from '@babel/core';
import * as t from '@babel/types';
import { addFlagToSvgMathMLElement, transformSvgMathMLCallExpression, transformSvgMathMLJSX } from './svg-mathml-flag.js';
import { transformConditionalCallChains, transformConditionalChains } from './if-else.js';
import { transformKFor, transformKForCallExpression, validateDirectiveCombinations } from './k-for.js';

const DRAFT_PROPERTY_NAME = 'draft';

type DraftAccessPath = NodePath<t.MemberExpression | t.OptionalMemberExpression>;

export function transformerKTjsx(): PluginObj {
  return {
    name: 'ktjs-transformer',
    visitor: {
      MemberExpression: {
        exit(path) {
          validateDraftUsage(path);
        },
      },
      OptionalMemberExpression: {
        exit(path) {
          validateDraftUsage(path);
        },
      },
      JSXElement: {
        enter(path) {
          validateDirectiveCombinations(path);
          addFlagToSvgMathMLElement(path);
          transformConditionalChains(path);
        },
        exit(path) {
          transformKFor(path);
        },
      },
      CallExpression: {
        exit(path) {
          transformSvgMathMLCallExpression(path);
          transformKForCallExpression(path);
          transformConditionalCallChains(path);
        },
      },
      Program: {
        exit(path) {
          transformSvgMathMLJSX(path);
        },
      },
    },
  };
}

export default transformerKTjsx;

function validateDraftUsage(path: DraftAccessPath) {
  if (!isDraftAccess(path.node)) {
    return;
  }

  const topPath = getTopMemberExpressionPath(path);
  const parentPath = topPath.parentPath;
  if (!parentPath) {
    return;
  }

  if (parentPath.isAssignmentExpression() && parentPath.node.left === topPath.node) {
    if (topPath !== path) {
      return;
    }
    throw path.buildCodeFrameError(
      '`draft` itself cannot be assigned. Use `ref.value = nextValue` for whole-value replacement, or mutate nested fields via `ref.draft.xxx`.',
    );
  }

  if (parentPath.isUpdateExpression() && parentPath.node.argument === topPath.node) {
    if (topPath !== path) {
      return;
    }
    throw path.buildCodeFrameError('`draft` itself cannot be updated. Update a nested field instead.');
  }

  if (parentPath.isUnaryExpression({ operator: 'delete' }) && parentPath.node.argument === topPath.node) {
    if (topPath !== path) {
      return;
    }
    throw path.buildCodeFrameError('`draft` itself cannot be deleted. Delete a nested field instead.');
  }

  if (parentPath.isCallExpression() && parentPath.node.callee === topPath.node) {
    if (topPath !== path) {
      return;
    }
    throw path.buildCodeFrameError('`draft` cannot escape through calls. Only nested writes or descendant method calls are allowed.');
  }

  if (parentPath.isOptionalCallExpression() && parentPath.node.callee === topPath.node) {
    if (topPath !== path) {
      return;
    }
    throw path.buildCodeFrameError('`draft` cannot escape through calls. Only nested writes or descendant method calls are allowed.');
  }

  throw path.buildCodeFrameError(
    '`draft` cannot escape. Use `ref.value = nextValue` for whole-value replacement, or mutate nested fields or call descendant methods via `ref.draft.xxx`.',
  );
}

function isDraftAccess(node: t.MemberExpression | t.OptionalMemberExpression) {
  return !node.computed && t.isIdentifier(node.property, { name: DRAFT_PROPERTY_NAME });
}

function getTopMemberExpressionPath(path: DraftAccessPath) {
  let currentPath = path;
  while (currentPath.parentPath) {
    const parentPath = currentPath.parentPath;
    if (!parentPath.isMemberExpression() && !parentPath.isOptionalMemberExpression()) {
      return currentPath;
    }
    if (parentPath.node.object !== currentPath.node) {
      return currentPath;
    }
    currentPath = parentPath as DraftAccessPath;
  }
  return currentPath;
}
