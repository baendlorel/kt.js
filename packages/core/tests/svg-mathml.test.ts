import { describe, expect, it } from 'vitest';

import { mathml as createMathML, svg as createSVG } from '../src/h/index.js';
import { mathml as jsxMathML, svg as jsxSVG } from '../src/jsx/jsx-runtime.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const MATHML_NS = 'http://www.w3.org/1998/Math/MathML';

describe('svg/mathml creation', () => {
  it('creates nested SVG nodes with namespace and children', () => {
    const circle = createSVG('circle', { cx: '10', cy: '10', r: '4' });
    const root = createSVG('svg', {}, [circle]);

    expect(root.namespaceURI).toBe(SVG_NS);
    expect(circle.namespaceURI).toBe(SVG_NS);
    expect(root.firstChild).toBe(circle);
    expect(root.innerHTML.length).toBeGreaterThan(0);
  });

  it('creates nested MathML nodes with namespace and children', () => {
    const mi = createMathML('mi', {}, ['x']);
    const root = createMathML('math', {}, [mi]);

    expect(root.namespaceURI).toBe(MATHML_NS);
    expect(mi.namespaceURI).toBe(MATHML_NS);
    expect(root.firstChild).toBe(mi);
    expect(root.textContent).toBe('x');
  });

  it('keeps children when using jsx-runtime svg/mathml helpers', () => {
    const icon = jsxSVG('svg', {
      children: jsxSVG('circle', { cx: '8', cy: '8', r: '3' }),
    }) as SVGElement;

    const formula = jsxMathML('math', {
      children: jsxMathML('mi', { children: 'y' }),
    }) as MathMLElement;

    expect(icon.firstElementChild?.tagName.toLowerCase()).toBe('circle');
    expect(icon.firstElementChild?.namespaceURI).toBe(SVG_NS);
    expect(icon.innerHTML.length).toBeGreaterThan(0);

    expect(formula.firstElementChild?.tagName.toLowerCase()).toBe('mi');
    expect(formula.firstElementChild?.namespaceURI).toBe(MATHML_NS);
    expect(formula.textContent).toBe('y');
  });
});
