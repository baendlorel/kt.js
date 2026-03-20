import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';
import { i18nText } from '../i18n/text.js';

import clickEventCode from '../code/click-event.tsx?raw';
import counterDemoCode from '../code/counter-demo.tsx?raw';

/**
 * Basic Usage page - Combines directives, events, and ktfor demos
 */
export function Events() {
  const outputRef = ref(i18nText('events.output.none'));
  const counterRef = ref(0);

  return (
    <div>
      <div class="demo-section">
        <p k-html={t('events.intro')}></p>
        <div>
          <div class="demo-flex-gap">
            <Button
              variant="contained"
              color="primary"
              on:click={() =>
                (outputRef.mutable = i18nText('events.output.clickedAt', new Date().toLocaleTimeString()))
              }
            >
              {t('events.button.click')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:dblclick={() => (outputRef.mutable = i18nText('events.output.doubleClicked'))}
            >
              {t('events.button.doubleClick')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:mouseenter={() => (outputRef.mutable = i18nText('events.output.mouseEntered'))}
              on:mouseleave={() => (outputRef.mutable = i18nText('events.output.mouseLeft'))}
            >
              {t('events.button.hover')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:focus={() => (outputRef.mutable = i18nText('events.output.focused'))}
              on:blur={() => (outputRef.mutable = i18nText('events.output.blurred'))}
            >
              {t('events.button.focus')}
            </Button>
          </div>
          <div class="demo-result">{outputRef}</div>
        </div>
        <Code code={clickEventCode} />
      </div>

      <div class="demo-section">
        <h3 k-html={t('events.counter.title')}></h3>
        <p k-html={t('events.counter.description')}></p>
        <div class="demo-flex-gap">
          <div style="width:200px; font-size: 2rem; font-weight: bold; color: #667eea;">
            {i18nText('events.counter.label')} {counterRef}
          </div>
          <Button variant="contained" color="primary" on:click={() => counterRef.mutable--}>
            -1
          </Button>
          <Button variant="contained" color="primary" on:click={() => counterRef.mutable++}>
            +1
          </Button>
          <Button variant="contained" color="primary" on:click={() => (counterRef.mutable += 10)}>
            +10
          </Button>
          <Button variant="contained" color="primary" on:click={() => (counterRef.mutable = 0)}>
            {t('events.counter.reset')}
          </Button>
        </div>
        <Code code={counterDemoCode} />
      </div>
    </div>
  );
}
