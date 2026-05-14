import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);

describe('ts plugin module export', () => {
  it('exports the tsserver init function directly for CommonJS require', () => {
    const init = require('../dist/index.js');

    expect(typeof init).toBe('function');
  });
});
