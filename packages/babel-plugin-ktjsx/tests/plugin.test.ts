import { describe, it, expect } from 'vitest';
import babel from '@babel/core';
import plugin from '../src/index.js';

describe('babel-plugin-ktjsx', () => {
  const transform = (code: string) => {
    return babel.transformSync(code, {
      plugins: [plugin],
      parserOpts: { plugins: ['typescript', 'jsx'] },
      configFile: false,
      babelrc: false,
    })?.code;
  };

  describe('SVG/MathML flag addition', () => {
    it('should add SVG flag to svg element', () => {
      const code = `const el = <svg width="100" height="100"></svg>;`;
      const result = transform(code);
      expect(result).toContain('__kt_svg__');
      expect(result).toMatch(/<svg[^>]*__kt_svg__/);
    });

    it('should add MathML flag to math element', () => {
      const code = `const el = <math></math>;`;
      const result = transform(code);
      expect(result).toContain('__kt_mathml__');
      expect(result).toMatch(/<math[^>]*__kt_mathml__/);
    });

    it('should add SVG flag to elements inside svg', () => {
      const code = `
        const el = (
          <svg>
            <circle cx="50" cy="50" r="40" />
          </svg>
        );
      `;
      const result = transform(code);
      expect(result).toContain('__kt_svg__');
      // Both svg and circle should have flag
      expect(result).toMatch(/<svg[^>]*__kt_svg__/);
      expect(result).toMatch(/<circle[^>]*__kt_svg__/);
    });

    it('should not add flag to non-SVG/MathML elements', () => {
      const code = `const el = <div></div>;`;
      const result = transform(code);
      expect(result).not.toContain('__kt_svg__');
      expect(result).not.toContain('__kt_mathml__');
    });

    it('should handle svg: prefix namespaced elements', () => {
      const code = `const el = <svg:path d="M0 0 L10 10" />;`;
      const result = transform(code);
      expect(result).toContain('__kt_svg__');
    });
  });

  describe('conditional directive transformation', () => {
    it('should transform k-if chain', () => {
      const code = `
        const el = (
          <div>
            <p k-if={show}>A</p>
            <p k-else-if={show2}>B</p>
            <p k-else>C</p>
          </div>
        );
      `;
      const result = transform(code);
      expect(result).toMatch(/k-if={show}/);
      // The else-if and else should be transformed to k-if with compound conditions
      // We can't easily test the exact transformation, but ensure no k-else-if or k-else remain
      expect(result).not.toContain('k-else-if');
      expect(result).not.toContain('k-else');
    });

    it('should handle standalone k-if', () => {
      const code = `const el = <div k-if={condition}>Content</div>;`;
      const result = transform(code);
      expect(result).toContain('k-if={condition}');
    });

    it('should handle k-else-if without preceding k-if', () => {
      // This might produce invalid output but plugin should handle it
      const code = `const el = <div k-else-if={condition}>Content</div>;`;
      const result = transform(code);
      expect(result).not.toContain('k-else-if');
      expect(result).toContain('k-if');
    });

    it('should preserve other attributes', () => {
      const code = `const el = <svg width="100" height="100" class="icon" k-if={show}></svg>;`;
      const result = transform(code);
      expect(result).toContain('__kt_svg__');
      expect(result).toContain('width="100"');
      expect(result).toContain('class="icon"');
      expect(result).toContain('k-if');
    });
  });
});