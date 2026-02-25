import { computed, ref } from 'kt.js';
import { Button, TextField } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';
import { i18nText } from '../i18n/text.js';

import directivesCode from '../code/directives.tsx?raw';

export function Directives() {
  const kifFlag = ref(false);
  const kmodelText = ref(i18nText('directives.model.initialValue'));
  const khtmlContent = ref(`<span style="color: #52c41a;">${i18nText('directives.html.initialContent')}</span>`);

  const kifStateText = computed(
    () => i18nText(kifFlag.value ? 'directives.ifElse.state.true' : 'directives.ifElse.state.false'),
    [kifFlag],
  );

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    kmodelText.value = i18nText('directives.model.updatedAt', time);
  }, 1000);

  setInterval(() => {
    const color = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0');
    khtmlContent.value = `<span style="color: #${color};">${i18nText('directives.html.initialContent')}</span>`;
  }, 1000);

  return (
    <div>
      <div class="demo-section">
        <h3>{t('directives.title')}</h3>
        <h4>{t('directives.ifElse.title')}</h4>
        <p>{t('directives.ifElse.description')}</p>
        <div class="demo-flex-gap">
          <Button variant="contained" color="primary" on:click={() => (kifFlag.value = true)}>
            {t('directives.ifElse.showIf')}
          </Button>
          <Button variant="contained" color="primary" on:click={() => (kifFlag.value = false)}>
            {t('directives.ifElse.showElse')}
          </Button>
          <Button variant="contained" color="primary" on:click={() => (kifFlag.value = !kifFlag.value)}>
            {t('directives.ifElse.toggle')}
          </Button>
        </div>
        <div class="demo-result">
          {t('directives.ifElse.condition')} {kifStateText}
          <div class="demo-block" style="margin-top: 12px;">
            <span k-if={kifFlag}>{t('directives.ifElse.branchIf')}</span>
            <span k-else>{t('directives.ifElse.branchElse')}</span>
          </div>
        </div>
        <p class="demo-desc">{t('directives.ifElse.syntax')}</p>
        <Code code={`<span k-if={kifFlag}>primary content</span>\n<span k-else>fallback content</span>`} />

        <h4>{t('directives.model.title')}</h4>
        <TextField k-model={kmodelText}></TextField>
        <p class="demo-desc">{t('directives.model.description')}</p>
        <div class="demo-result">{kmodelText}</div>
        <Code code={`<TextField k-model={kmodelText}></TextField> // TextField is from @ktjs/mui`} />

        <h4>{t('directives.html.title')}</h4>
        <div k-html={khtmlContent} class="demo-block" />
        <p class="demo-desc">{t('directives.html.description')}</p>
        <Code code={`<div k-html={khtmlContent} class="demo-block"></div>`} />

        <h4>{t('directives.fullDemo')}</h4>
        <Code code={directivesCode} />
      </div>
    </div>
  );
}
