import ieCompatibleViteConfig from '../code/plugin.ie11.vite.config.ts?raw';
import { Code } from '../components/Code';
import { i18n } from '../i18n/index.js';

export function IE11Compatibility() {
  return (
    <div class="demo-section">
      <p>{i18n('ie11.intro')}</p>
      <p>{i18n('ie11.description')}</p>
      <Code code={ieCompatibleViteConfig}></Code>
    </div>
  );
}
