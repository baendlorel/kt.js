import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import { i18n } from '../i18n/index.js';
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
        <p>{i18n('events.intro')}</p>
        <div>
          <div class="demo-flex-gap">
            <Button
              variant="contained"
              color="primary"
              on:click={() => (outputRef.value = i18nText('events.output.clickedAt', new Date().toLocaleTimeString()))}
            >
              {i18n('events.button.click')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:dblclick={() => (outputRef.value = i18nText('events.output.doubleClicked'))}
            >
              {i18n('events.button.doubleClick')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:mouseenter={() => (outputRef.value = i18nText('events.output.mouseEntered'))}
              on:mouseleave={() => (outputRef.value = i18nText('events.output.mouseLeft'))}
            >
              {i18n('events.button.hover')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:focus={() => (outputRef.value = i18nText('events.output.focused'))}
              on:blur={() => (outputRef.value = i18nText('events.output.blurred'))}
            >
              {i18n('events.button.focus')}
            </Button>
          </div>
          <div class="demo-result">{outputRef}</div>
        </div>
        <Code code={clickEventCode} />
      </div>

      <div class="demo-section">
        <h3>{i18n('events.counter.title')}</h3>
        <p>{i18n('events.counter.description')}</p>
        <div class="demo-flex-gap">
          <div style="width:200px; font-size: 2rem; font-weight: bold; color: #667eea;">
            {i18nText('events.counter.label')} {counterRef}
          </div>
          <Button variant="contained" color="primary" on:click={() => counterRef.value--}>
            -1
          </Button>
          <Button variant="contained" color="primary" on:click={() => counterRef.value++}>
            +1
          </Button>
          <Button variant="contained" color="primary" on:click={() => (counterRef.value += 10)}>
            +10
          </Button>
          <Button variant="contained" color="primary" on:click={() => (counterRef.value = 0)}>
            {i18n('events.counter.reset')}
          </Button>
        </div>
        <Code code={counterDemoCode} />
      </div>
    </div>
  );
}
