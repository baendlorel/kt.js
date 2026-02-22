import { describe, it, expect, vi } from 'vitest';
import babel from '@babel/core';
import plugin from '../src/index.js';

describe('babel-plugin-ktjsx', () => {
  const transform = (code: string) => {
    const result = babel.transformSync(code, {
      plugins: [plugin],
      parserOpts: { plugins: ['typescript', 'jsx'] },
      configFile: false,
      babelrc: false,
    })?.code;

    if (!result) {
      throw new Error('Transform returned empty code.');
    }
    return result;
  };

  describe('SVG/MathML flag addition', () => {
    it('should add SVG flag to svg element', () => {
      const code = `const el = <svg width="100" height="100"></svg>;`;
      const result = transform(code);
      expect(result).toMatch(/<svg[^>]*__[^>\s=]*svg[^>\s=]*/i);
    });

    it('should add MathML flag to math element', () => {
      const code = `const el = <math></math>;`;
      const result = transform(code);
      expect(result).toMatch(/<math[^>]*__[^>\s=]*math/i);
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
      // Both svg and circle should have flag
      expect(result).toMatch(/<svg[^>]*__[^>\s=]*svg[^>\s=]*/i);
      expect(result).toMatch(/<circle[^>]*__[^>\s=]*svg[^>\s=]*/i);
    });

    it('should not add flag to non-SVG/MathML elements', () => {
      const code = `const el = <div></div>;`;
      const result = transform(code);
      expect(result).not.toMatch(/__[^>\s=]*svg/i);
      expect(result).not.toMatch(/__[^>\s=]*math/i);
    });
  });

  describe('conditional directive transformation', () => {
    it('should handle standalone k-if', () => {
      const code = `const el = <div k-if={condition}>Content</div>;`;
      const result = transform(code);
      expect(result).toContain('k-if={condition}');
    });

    it('should compile adjacent k-if + k-else chain to KTConditional call', () => {
      const code = `const el = <><div k-if={condition}>A</div><div k-else>B</div></>;`;
      const result = transform(code);
      expect(result).toContain('KTConditional as _KTConditional');
      expect(result).toContain('_KTConditional(condition, "div"');
      expect(result).not.toContain('k-else');
      expect(result).not.toContain('k-if');
    });

    it('should warn and skip transform when k-else-if is used', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      try {
        const code = `const el = <><div k-if={a}>A</div><div k-else-if={b}>B</div><div k-else>C</div></>;`;
        const result = transform(code);
        expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`k-else-if` is not supported'));
        expect(result).toContain('k-else-if');
        expect(result).toContain('k-else');
        expect(result).not.toContain('KTConditional as _KTConditional');
      } finally {
        warnSpy.mockRestore();
      }
    });

    it('should still compile leading k-if + k-else when trailing k-else-if exists', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      try {
        const code = `const el = <><div k-if={a}>A</div><div k-else>B</div><div k-else-if={b}>C</div></>;`;
        const result = transform(code);
        expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`k-else-if` is not supported'));
        expect(result).toContain('KTConditional as _KTConditional');
        expect(result).toContain('_KTConditional(a, "div"');
        expect(result).toContain('k-else-if');
      } finally {
        warnSpy.mockRestore();
      }
    });

    it('should preserve other attributes', () => {
      const code = `const el = <svg width="100" height="100" class="icon" k-if={show}></svg>;`;
      const result = transform(code);
      expect(result).toMatch(/__[^>\s=]*svg/i);
      expect(result).toContain('width="100"');
      expect(result).toContain('class="icon"');
      expect(result).toContain('k-if');
    });
  });

  describe('k-for transformation', () => {
    it('transforms `k-for` to KTFor call with default index alias', () => {
      const code = `const list = <li k-for="item in users">{item.name}</li>;`;
      const result = transform(code);

      expect(result).toContain('import { KTFor as _KTFor }');
      expect(result).toContain('list: users');
      expect(result).toContain('map: (item, index) =>');
      expect(result).not.toContain('k-for');
    });

    it('supports tuple aliases and compiles k-key callback', () => {
      const code = `const list = <li k-for="(item, index, arr) in users" k-key="item.id">{index}-{item.name}-{arr.length}</li>;`;
      const result = transform(code);

      expect(result).toContain('key: (item, index, arr) => item.id');
      expect(result).toContain('map: (item, index, arr) =>');
      expect(result).not.toContain('k-key');
    });

    it('transforms already lowered jsx-runtime call form', () => {
      const code = `
        import { jsx } from '@ktjs/core/jsx-runtime';
        const list = jsx('li', { 'k-for': '(item, index) in users', children: item });
      `;
      const result = transform(code);

      expect(result).toContain('import { KTFor as _KTFor }');
      expect(result).toContain('list: users');
      expect(result).toContain('map: (item, index) => jsx');
      expect(result).not.toContain('k-for');
    });
  });

  describe('invalid directive combinations', () => {
    it('throws when k-if and k-else are used on the same element', () => {
      const code = `const el = <div k-if={ok} k-else>content</div>;`;
      expect(() => transform(code)).toThrow(/k-if.*k-else/i);
    });

    it('throws when k-for is mixed with k-if/k-else directives', () => {
      const code = `const el = <li k-for="item in users" k-if={ok}>{item}</li>;`;
      expect(() => transform(code)).toThrow(/k-for.*k-if.*k-else-if.*k-else/i);
    });
  });
});
