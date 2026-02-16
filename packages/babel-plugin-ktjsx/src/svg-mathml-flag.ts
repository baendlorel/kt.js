import type { NodePath } from '@babel/core';
import * as t from '@babel/types';

function isSvgTag(tag: string) {
  return tag === 'svg' || (typeof tag === 'string' && tag.startsWith('svg:'));
}

function isMathTag(tag: string) {
  return tag === 'math' || (typeof tag === 'string' && tag.startsWith('math:'));
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
    /**
     * @type {import('@babel/core').NodePath | null}
     */
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
    /**
     * @type {import('@babel/core').NodePath | null}
     */
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

  // If this element is neither an svg/math root nor inside one, skip.
  const inSvgContext = isSvgRoot || insideSvg;
  const inMathContext = isMathRoot || insideMath;
  if (!inSvgContext && !inMathContext) {
    return;
  }

  // Add boolean attribute (SVG or MATHML) to opening element if not present
  const attrs = opening.attributes || [];
  const flag = inSvgContext ? SVG_FLAG : MATHML_FLAG;
  const hasFlag = attrs.some((a) => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name) && a.name.name === flag);
  if (!hasFlag) {
    attrs.push(t.jsxAttribute(t.jsxIdentifier(flag)));
    opening.attributes = attrs;
  }
}
