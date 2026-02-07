import { describe, it, expect } from 'vitest';
import { SVG_ATTR_FLAG, MATHML_ATTR_FLAG, DIRV_TYPE } from '../src/consts/index.js';

describe('shared constants', () => {
  it('should have correct SVG attribute flag', () => {
    expect(SVG_ATTR_FLAG).toBe('__kt_svg__');
  });

  it('should have correct MathML attribute flag', () => {
    expect(MATHML_ATTR_FLAG).toBe('__kt_mathml__');
  });

  it('should have DIRV_TYPE as a Symbol', () => {
    expect(typeof DIRV_TYPE).toBe('symbol');
    expect(DIRV_TYPE.toString()).toBe('Symbol(kt-directive-type)');
  });
});