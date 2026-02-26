import { describe, expect, it, vi } from 'vitest';

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

const readRuntimeFactoryAlias = (code: string, factoryName: 'svg' | 'mathml') => {
  const match = code.match(
    new RegExp(
      `import\\s*\\{[\\s\\S]*?\\b${factoryName}\\s+as\\s+([A-Za-z_$][\\w$]*)[\\s\\S]*?\\}\\s*from\\s*['\"][^'\"]*jsx(?:-dev)?-runtime['\"]`,
    ),
  );
  return match?.[1] ?? null;
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
    const svgAlias = readRuntimeFactoryAlias(code, 'svg');
    expect(svgAlias).toBeTruthy();
    expect(code).toContain(`${svgAlias}("svg"`);
    expect(code).toContain(`${svgAlias}("circle"`);
    expect(code).toContain('KTConditional as _KTConditional');
    expect(code).toContain('_KTConditional(ok, "div"');
    expect(code).not.toContain('k-if');
    expect(code).not.toContain('k-else');
  });

  it('compiles k-if + k-else chain with whitespace between siblings', async () => {
    const result = await runTransform(
      'const view = (<>\n  <div k-if={ok}>A</div>\n  <div k-else>B</div>\n</>);',
    );
    const code = toCode(result);
    expect(code).toContain('KTConditional as _KTConditional');
    expect(code).toContain('_KTConditional(ok, "div"');
    expect(code).not.toContain('k-if');
    expect(code).not.toContain('k-else');
  });

  it('compiles standalone k-if into KTConditional call', async () => {
    const result = await runTransform('const view = <div id="box" k-if={ok}>A</div>;');
    const code = toCode(result);
    expect(code).toContain('KTConditional as _KTConditional');
    expect(code).toContain('_KTConditional(ok, "div"');
    expect(code).toContain('id: "box"');
    expect(code).not.toContain('k-if');
  });

  it('warns and skips transform when k-else-if is used', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const result = await runTransform('const view = <><div k-if={ok}>A</div><div k-else-if={x}>B</div></>;');
      const code = toCode(result);
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`k-else-if` is not supported'));
      expect(code).toContain('k-else-if');
      expect(code).not.toContain('KTConditional as _KTConditional');
    } finally {
      warnSpy.mockRestore();
    }
  });

  it('still compiles leading k-if + k-else when trailing k-else-if exists', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      const result = await runTransform(
        'const view = <><div k-if={ok}>A</div><div k-else>B</div><div k-else-if={x}>C</div></>;',
      );
      const code = toCode(result);
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`k-else-if` is not supported'));
      expect(code).toContain('KTConditional as _KTConditional');
      expect(code).toContain('_KTConditional(ok, "div"');
      expect(code).toContain('k-else-if');
    } finally {
      warnSpy.mockRestore();
    }
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

  it('wraps k-key expression with k-for aliases', async () => {
    const result = await runTransform('const view = <li k-for="item in users" k-key={item.id}>{item.name}</li>;');
    const code = toCode(result);

    expect(code).toContain('key: (item, index) => item.id');
    expect(code).toContain('map: (item, index) =>');
    expect(code).not.toContain('k-key');
  });

  it('keeps k-key function expression as-is', async () => {
    const result = await runTransform('const view = <li k-for="item in users" k-key={(a) => a.id}>{item.name}</li>;');
    const code = toCode(result);

    expect(code).toContain('key: a => a.id');
    expect(code).toContain('map: (item, index) =>');
    expect(code).not.toContain('k-key');
  });

  it('keeps k-key function identifier as-is', async () => {
    const result = await runTransform('const view = <li k-for="item in users" k-key={getKey}>{item.name}</li>;');
    const code = toCode(result);

    expect(code).toContain('key: getKey');
    expect(code).toContain('map: (item, index) =>');
    expect(code).not.toContain('k-key');
  });

  it('still wraps k-key alias identifier expression', async () => {
    const result = await runTransform('const view = <li k-for="item in users" k-key={item}>{item.name}</li>;');
    const code = toCode(result);

    expect(code).toContain('key: (item, index) => item');
    expect(code).toContain('map: (item, index) =>');
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

  it('rewrites lowered jsx-runtime svg/mathml calls to namespace helpers', async () => {
    const result = await runTransform(
      [
        "import { jsx as _jsx } from '@ktjs/core/jsx-runtime';",
        'const icon = _jsx("svg", { children: _jsx("circle", {}) });',
        'const formula = _jsx("math", { children: _jsx("math:mi", { children: "x" }) });',
      ].join(' '),
    );

    const code = toCode(result);
    const svgAlias = readRuntimeFactoryAlias(code, 'svg');
    const mathAlias = readRuntimeFactoryAlias(code, 'mathml');

    expect(svgAlias).toBeTruthy();
    expect(mathAlias).toBeTruthy();
    expect(code).toContain(`${svgAlias}("svg"`);
    expect(code).toContain(`${svgAlias}("circle"`);
    expect(code).toContain(`${mathAlias}("math"`);
    expect(code).toContain(`${mathAlias}("mi"`);
    expect(code).not.toContain('"math:mi"');
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
    const includedCode = toCode(included);
    const svgAlias = readRuntimeFactoryAlias(includedCode, 'svg');
    expect(svgAlias).toBeTruthy();
    expect(includedCode).toContain(`${svgAlias}("svg"`);

    const excluded = await runTransform(code, '/src/icon.custom', {
      include: /\.custom$/,
      exclude: /icon\.custom$/,
    });
    expect(excluded).toBeNull();
  });
});
