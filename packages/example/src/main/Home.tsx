import { Code } from '../components/Code.js';

import installCode from '../code/install.sh?raw';
import tsconfigCode from '../code/tsconfig.example.json?raw';
import viteConfigCode from '../code/plugin.vite.example.ts?raw';
import babelConfigCode from '../code/plugin.babel.example.ts?raw';

/**
 * Home page - Introduction to KT.js framework
 */
export function Home() {
  return (
    <div>
      <div>
        <div>svg</div>
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
          <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
          <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        </svg>
        <div>MathML</div>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mi>b</mi>
          <mo>x</mo>
          <mo>+</mo>
          <mi>c</mi>
        </math>
      </div>
      <div class="demo-section">
        <h3>Introduction</h3>
        <p>
          kt.js is a lightweight, direct DOM manipulation framework with <code>jsx</code>. Unlike React or Vue which use
          virtual DOM and automatic re-rendering, kt.js gives you fine-grained control over when and how DOM updates
          happen.
        </p>
        <h3>Getting Started</h3>
        <p style="color: #666; margin-bottom: 16px;">Follow these steps to start using KT.js in your project:</p>
        <h4 style="margin-top: 24px; margin-bottom: 12px;">1. Installation</h4>
        <Code code={installCode} lang="bash" />
        <h4 style="margin-top: 24px; margin-bottom: 12px;">2. TypeScript Configuration</h4>
        <p>
          Add these settings to your <code>tsconfig.json</code>:
        </p>
        <Code code={tsconfigCode} lang="json" />
        <h4 style="margin-top: 24px; margin-bottom: 12px;">3. TypeScript Plugin</h4>
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
        <h4 style="margin-top: 24px; margin-bottom: 12px;">4. Vite Configuration</h4>
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
