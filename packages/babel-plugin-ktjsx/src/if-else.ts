import type { NodePath } from '@babel/core';
import type { JSXElement } from '@babel/types';
import { types as t } from '@babel/core';

/**
 * Check if a JSX element has any conditional directive (k-if, k-else-if, k-else)
 */
function hasConditionalDirective(element: JSXElement): boolean {
  const openingElement = element.openingElement;
  const attributes = openingElement.attributes || [];
  return attributes.some(attr => {
    if (t.isJSXAttribute(attr)) {
      const name = attr.name;
      if (t.isJSXIdentifier(name)) {
        return name.name === 'k-if' || name.name === 'k-else-if' || name.name === 'k-else';
      }
    }
    return false;
  });
}

/**
 * Get the conditional directive value from a JSX element
 * Returns { type: 'k-if' | 'k-else-if' | 'k-else', condition: any }
 * For k-else, condition is null
 */
function getConditionalDirective(element: JSXElement): { type: string; condition: any } | null {
  const openingElement = element.openingElement;
  const attributes = openingElement.attributes || [];

  for (const attr of attributes) {
    if (t.isJSXAttribute(attr)) {
      const name = attr.name;
      if (t.isJSXIdentifier(name)) {
        if (name.name === 'k-if' || name.name === 'k-else-if') {
          let condition: any = null;
          if (attr.value) {
            if (t.isJSXExpressionContainer(attr.value)) {
              condition = attr.value.expression;
            } else {
              condition = attr.value;
            }
          }
          return {
            type: name.name,
            condition
          };
        } else if (name.name === 'k-else') {
          return { type: 'k-else', condition: null };
        }
      }
    }
  }
  return null;
}

/**
 * Remove conditional directives from JSX element attributes
 */
function removeConditionalDirectives(attributes: any[]): any[] {
  return attributes.filter(attr => {
    if (!t.isJSXAttribute(attr)) return true;
    const name = attr.name;
    if (!t.isJSXIdentifier(name)) return true;
    return name.name !== 'k-if' && name.name !== 'k-else-if' && name.name !== 'k-else';
  });
}

/**
 * Create a logical expression for else-if or else conditions
 * For else-if with condition C after previous conditions P1, P2, ..., Pn:
 *   Create: !P1 && !P2 && ... && !Pn && C
 * For else after previous conditions P1, P2, ..., Pn:
 *   Create: !P1 && !P2 && ... && !Pn
 */
function createCompoundCondition(prevConditions: any[], currentCondition: any = null): any {
  if (prevConditions.length === 0) {
    // No previous conditions, just return current condition or true
    return currentCondition || t.booleanLiteral(true);
  }

  // Start with negation of first previous condition
  let compound: any = t.unaryExpression('!', prevConditions[0] || t.booleanLiteral(false));

  // Add negation of remaining previous conditions
  for (let i = 1; i < prevConditions.length; i++) {
    const condition = prevConditions[i] || t.booleanLiteral(false);
    const negated = t.unaryExpression('!', condition);
    compound = t.logicalExpression('&&', compound, negated);
  }

  // Add current condition for else-if
  if (currentCondition) {
    compound = t.logicalExpression('&&', compound, currentCondition);
  }

  return compound;
}

/**
 * Transform a conditional chain of JSX elements
 * Collects consecutive sibling elements with conditional directives and transforms them
 * into standalone k-if elements with compound conditions
 */
export function transformConditionalChains(path: NodePath<JSXElement>): void {
  const { node } = path;

  // Only process if this element has a conditional directive
  if (!hasConditionalDirective(node)) {
    return;
  }

  // Check if this element is the start of a chain (no previous sibling with conditional directive)
  // If not, skip processing - the chain will be handled by the first element
  const prevSibling = path.getPrevSibling();
  if (prevSibling && prevSibling.isJSXElement() && hasConditionalDirective(prevSibling.node)) {
    // This element is not the start of the chain, skip processing
    return;
  }

  // This is the start of a chain, collect all consecutive siblings with conditional directives
  const chain: NodePath<JSXElement>[] = [path];
  let current: NodePath<JSXElement> = path;

  while (true) {
    const nextSibling = current.getNextSibling();
    if (!nextSibling || !nextSibling.isJSXElement() || !hasConditionalDirective((nextSibling.node as JSXElement))) {
      break;
    }
    chain.push(nextSibling as NodePath<JSXElement>);
    current = nextSibling as NodePath<JSXElement>;
  }

  // If chain has only one element, no transformation needed (except ensure it's processed)
  if (chain.length === 1) {
    // Still need to ensure k-if is properly handled, but runtime will do that
    return;
  }

  // Process the chain
  const prevConditions: any[] = [];

  for (let i = 0; i < chain.length; i++) {
    const elementPath = chain[i];
    const element = elementPath.node;
    const directive = getConditionalDirective(element);

    if (!directive) continue;

    // Get element attributes without conditional directives
    const openingElement = element.openingElement;
    const newAttributes = removeConditionalDirectives(openingElement.attributes || []);

    // Create new k-if condition based on position in chain
    let newCondition: any;

    if (directive.type === 'k-if') {
      // First element: use original condition
      newCondition = directive.condition || t.booleanLiteral(true);
      prevConditions.push(directive.condition);
    } else if (directive.type === 'k-else-if') {
      // else-if: compound condition of all previous negated conditions + current
      if (prevConditions.length === 0) {
        // Should not happen if chain is valid, but handle gracefully
        newCondition = directive.condition || t.booleanLiteral(true);
      } else {
        const currentCondition = directive.condition || t.booleanLiteral(true);
        newCondition = createCompoundCondition(prevConditions, currentCondition);
      }
      prevConditions.push(directive.condition);
    } else if (directive.type === 'k-else') {
      // else: compound condition of all previous negated conditions
      if (prevConditions.length === 0) {
        // Should not happen if chain is valid
        newCondition = t.booleanLiteral(true);
      } else {
        newCondition = createCompoundCondition(prevConditions);
      }
      // No condition to add to prevConditions for else
    }

    // Create new k-if attribute
    const kIfAttribute = t.jsxAttribute(
      t.jsxIdentifier('k-if'),
      t.jsxExpressionContainer(newCondition)
    );

    // Add k-if attribute to attributes
    newAttributes.push(kIfAttribute);

    // Update the existing opening element's attributes
    openingElement.attributes = newAttributes;

    // Skip this element to avoid infinite loops
    elementPath.skip();
  }
}