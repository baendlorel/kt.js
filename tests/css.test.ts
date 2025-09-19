import { describe, it, expect } from 'vitest';
import c from 'tinyrainbow';

import { css, scopeCss, applyCss } from '../src/core/css.js';

describe('css and scopeCss', () => {
  it('try read', () => {
    const sample = css`
      color: red;
    `;

    console.log('sample', sample);
  });

  it('css should add raw css into applyCss output', () => {
    const sample = css`
      .foo {
        color: red;
      }
    `;

    const out = applyCss();
    console.log(c.cyan('normal out:'), out);
    expect(out).toContain('.foo');
    expect(out).toContain('color: red');
    expect(sample).toContain('.foo');
  });

  it('scopeCss should prefix selectors and add to applyCss output', () => {
    const css = scopeCss('scope');
    css`
      .bar {
        display: block;
      }
      .barsd {
        display: flex;
      }
    `;

    const out = applyCss();

    console.log(c.green('scoped out:'), out);
    // should contain the prefixed selector
    expect(out).toContain('[scope].bar');
    expect(out).toContain('display: block');
  });
});
