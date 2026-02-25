import ieCompatibleViteConfig from '../code/plugin.ie11.vite.config.ts?raw';
import { Code } from '../components/Code';
import { t } from '../i18n/index.js';

export function IE11Compatibility() {
  return (
    <div class="demo-section">
      <p>{t('ie11.intro')}</p>
      <p>{t('ie11.description')}</p>
      <Code code={ieCompatibleViteConfig}></Code>
    </div>
  );
}
