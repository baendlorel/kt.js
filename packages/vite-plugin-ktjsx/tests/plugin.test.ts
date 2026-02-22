import { describe, expect, it } from 'vitest';

import viteKTjsx from '../src/index.js';

const toCode = (result: any) => {
  if (!result) {
    return null;
  }

  if (typeof result === 'string') {
    return result;
  }

  return result.code;
};

describe('vite-plugin-ktjsx', () => {
  const runTransform = async (code: string, id = '/src/view.tsx', options = {}) => {
    const plugin = viteKTjsx(options);
    if (!plugin.transform) {
      throw new Error('transform hook is not available');
    }

    return plugin.transform.call({} as never, code, id);
  };

  it('applies the same JSX transforms as babel-plugin-ktjsx', async () => {
    const result = await runTransform(
      'const view = <><div k-if={ok}>A</div><div k-else>B</div><svg><circle /></svg></>;',
    );

    const code = toCode(result);
    expect(code).toMatch(/__[^>\s=]*svg/i);
    expect(code).toContain('k-if');
    expect(code).not.toContain('k-else');
  });

  it('transforms k-for into KTFor call and strips directive attributes', async () => {
    const result = await runTransform(
      'const view = <li k-for="(item, index, arr) in users" k-key="item.id">{index}-{item.name}-{arr.length}</li>;',
    );

    const code = toCode(result);
    expect(code).toContain('import { KTFor as _KTFor }');
    expect(code).toContain('list: users');
    expect(code).toContain('key: (item, index, arr) => item.id');
    expect(code).toContain('map: (item, index, arr) =>');
    expect(code).not.toContain('k-for');
    expect(code).not.toContain('k-key');
  });

  it('provides default index alias for `item in list` syntax', async () => {
    const result = await runTransform('const view = <li k-for="item in users">{item.name}-{index}</li>;');
    const code = toCode(result);
    expect(code).toContain('map: (item, index) =>');
    expect(code).toContain('{item.name}-{index}');
  });

  it('supports already lowered jsx-runtime call form', async () => {
    const result = await runTransform(
      "import { jsx } from '@ktjs/core/jsx-runtime'; const view = jsx('li', { 'k-for': '(item,index) in users', children: item });",
      '/src/view.tsx',
    );
    const code = toCode(result);
    expect(code).toContain('import { KTFor as _KTFor }');
    expect(code).toContain('list: users');
    expect(code).toContain('map: (item, index) => jsx');
    expect(code).not.toContain('k-for');
  });

  it('throws when k-for is mixed with conditional directives on the same element', async () => {
    await expect(runTransform('const view = <li k-for="item in users" k-if={ok}>{item}</li>;')).rejects.toThrow(
      /k-for.*k-if.*k-else-if.*k-else/i,
    );
  });

  it('only processes JSX/TSX files by default', async () => {
    const result = await runTransform('const count = 1;', '/src/count.ts');
    expect(result).toBeNull();
  });

  it('supports include and exclude filters', async () => {
    const code = 'const icon = <svg></svg>;';

    const included = await runTransform(code, '/src/icon.custom', { include: /\.custom$/ });
    expect(toCode(included)).toMatch(/__[^>\s=]*svg/i);

    const excluded = await runTransform(code, '/src/icon.custom', {
      include: /\.custom$/,
      exclude: /icon\.custom$/,
    });
    expect(excluded).toBeNull();
  });
});
