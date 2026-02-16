import { describe, expect, it } from 'vitest';

import viteKTjsx from '../src/index.js';

const toCode = (result: Awaited<ReturnType<NonNullable<ReturnType<typeof viteKTjsx>['transform']>>>) => {
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
    expect(code).toContain('__kt_svg__');
    expect(code).toContain('k-if');
    expect(code).not.toContain('k-else');
  });

  it('only processes JSX/TSX files by default', async () => {
    const result = await runTransform('const count = 1;', '/src/count.ts');
    expect(result).toBeNull();
  });

  it('supports include and exclude filters', async () => {
    const code = 'const icon = <svg></svg>;';

    const included = await runTransform(code, '/src/icon.custom', { include: /\.custom$/ });
    expect(toCode(included)).toContain('__kt_svg__');

    const excluded = await runTransform(code, '/src/icon.custom', {
      include: /\.custom$/,
      exclude: /icon\.custom$/,
    });
    expect(excluded).toBeNull();
  });
});
