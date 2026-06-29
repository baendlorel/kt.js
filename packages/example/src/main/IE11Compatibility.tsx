import ieCompatibleViteConfig from '../code/plugin.ie11.vite.config.txt?raw';
import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';

export function IE11Compatibility() {
  return (
    <div class="demo-section">
      <p k-html={t('ie11.intro')}></p>
      <p k-html={t('ie11.description')}></p>
      <Code code={ieCompatibleViteConfig}></Code>
    </div>
  );
}
