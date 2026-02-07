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
  });

  describe('conditional directive transformation', () => {
    it('should handle standalone k-if', () => {
      const code = `const el = <div k-if={condition}>Content</div>;`;
      const result = transform(code);
      expect(result).toContain('k-if={condition}');
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
