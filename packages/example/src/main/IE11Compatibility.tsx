import ieCompatibleViteConfig from '../code/plugin.ie11.vite.config.ts?raw';
import { Code } from '../components/Code';

export function IE11Compatibility() {
  return (
    <div class="demo-section">
      <h1>IE11 Compatibility</h1>
      <p>kt.js contains built-in polyfills for certain DOM methods to support IE11.</p>
      <p>
        To make your project fully compatible with IE11, we need to transpile the code using Babel and include necessary
        polyfills. Below is the Vite configuration we used for this purpose:
      </p>
      <Code code={ieCompatibleViteConfig}></Code>
    </div>
  );
}
