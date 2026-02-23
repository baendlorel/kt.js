import { describe, expect, it } from 'vitest';
import { mathml, svg } from '../src/jsx/jsx-runtime.js';
import { mathml as mathmlFromRoot, svg as svgFromRoot } from '../src/index.js';

describe('svg/mathml runtime children', () => {
  it('does not render "undefined" for empty leaf svg nodes', () => {
    const icon = svg('svg', {
      width: '100',
      height: '100',
      children: [
        svg('circle', { cx: '50', cy: '50', r: '40' }),
        svg('circle', { cx: '50', cy: '50', r: '30' }),
        svg('circle', { cx: '50', cy: '50', r: '20' }),
      ],
    }) as SVGElement;

    expect(icon.querySelectorAll('circle').length).toBe(3);
    expect(icon.innerHTML).not.toContain('undefined');
    expect(icon.textContent).toBe('');
  });

  it('does not render "undefined" for mathml tree', () => {
    const formula = mathml('math', {
      xmlns: 'http://www.w3.org/1998/Math/MathML',
      children: [
        mathml('msup', {
          children: [mathml('mi', { children: 'x' }), mathml('mn', { children: '2' })],
        }),
        mathml('mo', { children: '+' }),
        mathml('mi', { children: 'b' }),
        mathml('mo', { children: 'x' }),
        mathml('mo', { children: '+' }),
        mathml('mi', { children: 'c' }),
      ],
    }) as MathMLElement;

    expect(formula.querySelectorAll('mi').length).toBeGreaterThan(0);
    expect(formula.innerHTML).not.toContain('undefined');
    expect(formula.textContent).toContain('x2+bx+c');
  });

  it('exposes svg/mathml runtime helpers from package root export', () => {
    const icon = svgFromRoot('svg', {
      children: [svgFromRoot('circle', { cx: '10', cy: '10', r: '4' })],
    }) as SVGElement;
    const formula = mathmlFromRoot('math', {
      children: [mathmlFromRoot('mi', { children: 'x' })],
    }) as MathMLElement;

    expect(icon.querySelectorAll('circle').length).toBe(1);
    expect(icon.innerHTML).not.toContain('undefined');
    expect(formula.querySelectorAll('mi').length).toBe(1);
    expect(formula.innerHTML).not.toContain('undefined');
  });
});
