import installSh from '../code/install.sh?raw';
import tsconfigCode from '../code/tsconfig.example.json?raw';
import viteConfigCode from '../code/vite.config.example.ts?raw';
import viteBabelConfigCode from '../code/vite.config.babel-example.ts?raw';
import { Code } from '../components/Code.js';

/**
 * Home page - Introduction to KT.js framework
 */
export function Home() {
  return (
    <div>
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
        <Code code={installSh} lang="bash" />
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
          Press <code>Ctrl+Shift+P</code> in VSCode, select "TypeScript: Select TypeScript Version", then select "Use
          Workspace Version".
        </p>
        <p>
          Finally, restart the TypeScript server by selecting "TypeScript: Restart TS Server" from the command palette.
        </p>
        <h4 style="margin-top: 24px; margin-bottom: 12px;">4. Vite Configuration</h4>
        <p>
          Must add this to <code>vite.config.ts</code> to support <code>svg</code> and <code>mathml</code> elements:
        </p>
        <Code code={viteConfigCode} />
        <p>Use babel</p>
        <Code code={viteBabelConfigCode} />
      </div>
    </div>
  );
}
