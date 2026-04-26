import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { afterEach, describe, expect, it } from 'vitest';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const cliEntry = path.join(repoRoot, 'plugins', 'kt-tsc', 'src', 'index.ts');
const pnpmCommand = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
const tempDirs: string[] = [];

afterEach(() => {
  while (tempDirs.length > 0) {
    const tempDir = tempDirs.pop();
    if (tempDir) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
});

function runKtTsc(code: string) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kt-tsc-kif-'));
  tempDirs.push(tempDir);

  const entryFile = path.join(tempDir, 'view.tsx');
  const tsconfigFile = path.join(tempDir, 'tsconfig.json');

  fs.writeFileSync(entryFile, code, 'utf8');
  fs.writeFileSync(
    tsconfigFile,
    JSON.stringify(
      {
        compilerOptions: {
          jsx: 'preserve',
          strict: true,
          noEmit: true,
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'Bundler',
        },
        include: ['./view.tsx'],
      },
      null,
      2,
    ),
    'utf8',
  );

  const result = spawnSync(pnpmCommand, ['exec', 'tsx', cliEntry, '-p', tsconfigFile], {
    cwd: repoRoot,
    encoding: 'utf8',
  });

  if (result.error) {
    throw result.error;
  }

  return result;
}

describe('kt-tsc k-if narrowing', () => {
  it('suppresses nullish and falsy diagnostics inside a simple k-if guard', () => {
    const result = runKtTsc(`
      declare namespace JSX { interface IntrinsicElements { div: any } }
      declare const changed: { yaos: Array<{ x: number }> } | null | undefined | false;
      const view = <div k-if={changed} class="hexagram">
        {changed.yaos[0].x}
      </div>;
    `);

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('Found 0 errors');
  });

  it('suppresses property-chain diagnostics inside a k-if guard', () => {
    const result = runKtTsc(`
      declare namespace JSX { interface IntrinsicElements { div: any } }
      declare const o: { prop: { id: number } | null | undefined | false };
      const view = <div k-if={o.prop} data-id={o.prop.id}>{o.prop.id}</div>;
    `);

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('Found 0 errors');
  });

  it('keeps diagnostics outside the k-if scope', () => {
    const result = runKtTsc(`
      declare namespace JSX { interface IntrinsicElements { div: any } }
      declare const o: { prop: { id: number } | null | undefined | false };
      const outside = o.prop.id;
      const view = <div k-if={o.prop}>{o.prop.id}</div>;
    `);

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('view.tsx');
  });
});
