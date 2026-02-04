import installSh from '../code/install.sh?raw';
import tsconfigCode from '../code/tsconfig.example.json?raw';
import viteConfigCode from '../code/vite.config.example.ts?raw';
import { highlight } from '../common/highlight.js';

/**
 * Home page - Introduction to KT.js framework
 */
export function Home() {
  const tsconfig = highlight(tsconfigCode, 'json');
  const viteConfig = highlight(viteConfigCode);

  const installScript = highlight(installSh, 'bash');

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

        <div>{installScript}</div>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">2. TypeScript Configuration</h4>
        <p>
          Add these settings to your <code>tsconfig.json</code>:
        </p>
        {tsconfig}

        <h4 style="margin-top: 24px; margin-bottom: 12px;">3. Vite Configuration</h4>
        <p>
          Must add this to <code>vite.config.ts</code> to support <code>svg</code> and <code>mathml</code> elements:
        </p>
        {viteConfig}
      </div>
    </div>
  );
}
