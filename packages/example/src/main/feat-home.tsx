import { ref } from 'kt.js';
import { codeToHtml } from 'shiki';

/**
 * Home page - Introduction to KT.js framework
 */
export function Home() {
  let counterCode = ref('');
  codeToHtml(
    `const div = (<div>Initial</div>) as JSX.Element;
div.redraw(undefined, 'Updated content');

function Counter({ count = 0 }) {
  return (
    <div>
      <span>Count: {count}</span>
      <button on:click={() => el.redraw({ count: count + 1 })}>
        +
      </button>
    </div>
  );
}
const el = (<Counter />) as JSX.Element;`,
    {
      lang: 'tsx',
      theme: 'github-light',
    },
  ).then((v) => (counterCode.value = v));
  return (
    <div>
      <div class="demo-section">
        <h3>Welcome to KT.js Framework</h3>
        <p>
          KT.js is a lightweight, direct DOM manipulation framework that <strong>never re-renders</strong>. Unlike React
          or Vue which use virtual DOM and automatic re-rendering, KT.js gives you fine-grained control over when and
          how DOM updates happen.
        </p>
        <p>
          <strong>Core Philosophy:</strong> Create DOM elements once, then update them manually when needed using the{' '}
          <code>redraw()</code> method. No automatic reactivity, no hidden magic - just direct control.
        </p>
      </div>

      <div class="demo-section">
        <h3>Key Features</h3>
        <ul style="margin-left: 24px; color: #666; line-height: 2;">
          <li>📦 Direct DOM manipulation without virtual DOM overhead</li>
          <li>⚡ JSX support with TypeScript</li>
          <li>🎯 Manual redraw mechanism and precise `ref` objects</li>
          <li>📋 Efficient list rendering with KTFor component</li>
          <li>🎨 Material-UI inspired component library</li>
          <li>🔀 Client-side routing with @ktjs/router</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>Quick Example</h3>
        <p style="color: #666;">Here's how you create and update elements in KT.js:</p>
        <div k-html={counterCode}></div>
      </div>

      <div class="demo-section">
        <h3>Getting Started</h3>
        <p style="color: #666; margin-bottom: 16px;">Follow these steps to start using KT.js in your project:</p>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">1. Installation</h4>
        <p>Choose your package manager:</p>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 16px; font-family: 'Courier New', monospace;">
          <p style="margin: 0 0 8px 0;">
            <strong>npm:</strong>
          </p>
          <code>npm install @ktjs/core @ktjs/mui</code>
        </div>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 24px; font-family: 'Courier New', monospace;">
          <p style="margin: 0 0 8px 0;">
            <strong>pnpm:</strong>
          </p>
          <code>pnpm add @ktjs/core @ktjs/mui</code>
        </div>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">2. TypeScript Configuration</h4>
        <p>
          Add these settings to your <code>tsconfig.json</code>:
        </p>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 16px; font-family: 'Courier New', monospace;">
          <pre style="margin: 0; overflow-x: auto;">{`{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@ktjs/core",
    "plugins": [
      {
        "name": "@ktjs/tsplugin"
      }
    ]
  }
}`}</pre>
        </div>
        <p style="color: #666; margin-top: 12px;">
          The TypeScript plugin provides better IDE support and type checking for KT.js directives.
        </p>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">3. Vite Configuration (Optional)</h4>
        <p>
          If using Vite, add this to your <code>vite.config.ts</code>:
        </p>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; font-family: 'Courier New', monospace;">
          <pre style="margin: 0; overflow-x: auto;">{`import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@ktjs/core',
  },
});`}</pre>
        </div>
      </div>
    </div>
  );
}
