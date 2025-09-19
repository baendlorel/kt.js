import { describe, it, expect } from 'vitest';
import c from 'tinyrainbow';

import { css } from '../src/core/css.js';

describe('css and scopeCss', () => {
  it('try read', () => {
    const sample = css`
      color: red;
    `;

    console.log('sample', sample);
  });
});
