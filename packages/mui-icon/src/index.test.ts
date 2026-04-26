import { describe, expect, it } from 'vitest';

describe('@ktjs/mui-icon exports', () => {
  it('should generate all underscore icon elements', async () => {
    const defaults = await import('./index.js');
    const icons = Object.entries(defaults);

    expect(icons.length).toBeGreaterThan(0);

    for (const [name, icon] of icons) {
      expect(icon, `${name} should be an SVGElement`).toBeInstanceOf(SVGElement);
      expect(typeof icon).toBe('function');
    }
  });
});
