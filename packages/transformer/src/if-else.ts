import type { NodePath } from '@babel/core';
import * as t from '@babel/types';

function hasConditionalDirective(element: t.JSXElement): boolean {
  const attributes = element.openingElement.attributes || [];
  return attributes.some((attr) => {
    if (!t.isJSXAttribute(attr)) {
      return false;
    }
    if (!t.isJSXIdentifier(attr.name)) {
      return false;
    }
    return attr.name.name === 'k-if' || attr.name.name === 'k-else-if' || attr.name.name === 'k-else';
  });
}

function getConditionalDirective(
  element: t.JSXElement,
): { type: 'k-if' | 'k-else-if' | 'k-else'; condition: t.Expression | t.StringLiteral | null } | null {
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
    return attr.name.name !== 'k-if' && attr.name.name !== 'k-else-if' && attr.name.name !== 'k-else';
  });
}

function createCompoundCondition(
  prevConditions: Array<t.Expression | t.StringLiteral | null>,
  currentCondition: t.Expression | t.StringLiteral | null = null,
): t.Expression {
  if (prevConditions.length === 0) {
    if (currentCondition && t.isExpression(currentCondition)) {
      return currentCondition;
    }
    return t.booleanLiteral(true);
  }

  const first = prevConditions[0];
  let compound: t.Expression = t.unaryExpression('!', t.isExpression(first) ? first : t.booleanLiteral(false));
  for (let i = 1; i < prevConditions.length; i++) {
    const condition = prevConditions[i];
    const negated = t.unaryExpression('!', t.isExpression(condition) ? condition : t.booleanLiteral(false));
    compound = t.logicalExpression('&&', compound, negated);
  }

  if (currentCondition && t.isExpression(currentCondition)) {
    compound = t.logicalExpression('&&', compound, currentCondition);
  }

  return compound;
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
    return;
  }

  const prevConditions: Array<t.Expression | t.StringLiteral | null> = [];
  for (let i = 0; i < chain.length; i++) {
    const elementPath = chain[i];
    const element = elementPath.node;
    const directive = getConditionalDirective(element);
    if (!directive) {
      continue;
    }

    const openingElement = element.openingElement;
    const newAttributes = removeConditionalDirectives(openingElement.attributes || []);

    let newCondition: t.Expression;
    if (directive.type === 'k-if') {
      newCondition = t.isExpression(directive.condition) ? directive.condition : t.booleanLiteral(true);
      prevConditions.push(directive.condition);
    } else if (directive.type === 'k-else-if') {
      if (prevConditions.length === 0) {
        newCondition = t.isExpression(directive.condition) ? directive.condition : t.booleanLiteral(true);
      } else {
        newCondition = createCompoundCondition(prevConditions, directive.condition);
      }
      prevConditions.push(directive.condition);
    } else {
      if (prevConditions.length === 0) {
        newCondition = t.booleanLiteral(true);
      } else {
        newCondition = createCompoundCondition(prevConditions);
      }
    }

    newAttributes.push(t.jsxAttribute(t.jsxIdentifier('k-if'), t.jsxExpressionContainer(newCondition)));
    openingElement.attributes = newAttributes;
    elementPath.skip();
  }
}
