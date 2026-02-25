import { Code } from '../components/Code.js';

import installCode from '../code/install.sh?raw';
import tsconfigCode from '../code/tsconfig.example.json?raw';
import viteConfigCode from '../code/plugin.vite.example.ts?raw';
import babelConfigCode from '../code/plugin.babel.example.ts?raw';
import { css } from '@emotion/css';

const styles = {
  discussion: css`
    display: flex;
    gap: 15px;
    align-items: baseline;
  `,
};
/**
 * Home page - Introduction to KT.js framework
 */
export function Home() {
  return (
    <div>
      <div class="demo-section">
        <div class="home-badges">
          <a href="https://www.npmjs.com/package/kt.js" aria-label="kt.js npm version badge">
            <img src="https://img.shields.io/npm/v/kt.js?label=npm" alt="npm version" />
          </a>
          <a href="https://www.npmjs.com/package/kt.js" aria-label="kt.js npm downloads badge">
            <img src="https://img.shields.io/npm/dm/kt.js?label=downloads" alt="npm downloads" />
          </a>
          <a href="https://www.npmjs.com/package/kt.js" aria-label="kt.js npm license badge">
            <img src="https://img.shields.io/npm/l/kt.js?label=license" alt="npm license" />
          </a>
        </div>
        <p class={styles.discussion}>
          <span>Discussion:</span>
          <code> QQ Group 1070434849</code>
          <code>
            <a href="https://t.me/kt_js" target="_blank" rel="noopener noreferrer">
              Telegram Group
            </a>
          </code>
        </p>
        <h3>Introduction</h3>
        <p>
          kt.js is a lightweight, direct DOM manipulation framework with <code>jsx</code>. Unlike React or Vue which use
          virtual DOM and automatic re-rendering, kt.js gives you fine-grained control over when and how DOM updates
          happen.
        </p>
        <h3>Getting Started</h3>
        <p>Follow these steps to start using KT.js in your project:</p>
        <h4>1. Installation</h4>
        <Code code={installCode} lang="bash" />
        <h4>2. TypeScript Configuration</h4>
        <p>
          Add these settings to your <code>tsconfig.json</code>:
        </p>
        <Code code={tsconfigCode} lang="json" />
        <h4>3. TypeScript Plugin</h4>
        <p>
          Add ts-plugin to your project to provide better support for kt.js in your editor(mainly for <code>k-for</code>{' '}
          directive)
        </p>
        <Code code="pnpm add -D @ktjs/ts-plugin" lang="bash"></Code>
        <p>
          Press <code>Ctrl+Shift+P</code> in VSCode, select <strong>TypeScript: Select TypeScript Version</strong>, then
          select <strong>Use Workspace Version</strong>.
        </p>
        <p>
          Finally, restart the TypeScript server by selecting <strong>TypeScript: Restart TS Server</strong> from the
          command palette.
        </p>
        <h4>4. Vite Configuration</h4>
        <p>
          Using <code>vite.config.ts</code> is recommended. It provides support for <code>svg</code> and{' '}
          <code>mathml</code> elements:
        </p>
        <Code code={viteConfigCode} />
        <p>Use babel</p>
        <Code code={babelConfigCode} />
      </div>
    </div>
  );
}
