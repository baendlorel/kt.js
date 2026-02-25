import { JSX, computed, Fragment, ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import { i18n } from '../i18n/index.js';
import { i18nText } from '../i18n/text.js';

import fragmentDemoCode from '../code/fragment-demo.tsx?raw';

const defaultSections = [
  i18nText('fragment.default.header'),
  i18nText('fragment.default.content'),
  i18nText('fragment.default.actions'),
];

const createPill = (label: string, index: number): JSX.Element => (
  <span class="fragment-pill">
    <span class="fragment-pill__index">#{index + 1}</span>
    {label}
  </span>
);

export function FragmentDemo() {
  const labelsRef = ref<string[]>([...defaultSections]);
  const childrenRef = ref<JSX.Element[]>(labelsRef.value.map(createPill));
  const summaryRef = computed(
    () => i18nText('fragment.reactive.summary', labelsRef.value.length, labelsRef.value.join(' / ')),
    [labelsRef],
  );

  const syncChildren = (nextLabels: string[]) => {
    labelsRef.value = nextLabels;
    childrenRef.value = nextLabels.map(createPill);
  };

  const addItem = () =>
    syncChildren([...labelsRef.value, `${i18nText('fragment.reactive.sectionPrefix')} ${labelsRef.value.length + 1}`]);

  const removeItem = () => {
    if (labelsRef.value.length <= 1) {
      return;
    }
    syncChildren(labelsRef.value.slice(0, -1));
  };

  const rotate = () => {
    if (labelsRef.value.length <= 1) {
      return;
    }
    const [first, ...rest] = labelsRef.value;
    syncChildren([...rest, first]);
  };

  const reset = () => syncChildren([...defaultSections]);

  return (
    <div>
      <div class="demo-section">
        <h3>{i18n('fragment.shorthand.title')}</h3>
        <p>{i18n('fragment.shorthand.description')}</p>
        <div class="demo-block fragment-row">
          <>
            <span class="fragment-pill fragment-pill--preview">{i18n('fragment.shorthand.preview.title')}</span>
            <span class="fragment-pill fragment-pill--preview">{i18n('fragment.shorthand.preview.description')}</span>
            <span class="fragment-pill fragment-pill--preview">{i18n('fragment.shorthand.preview.actions')}</span>
          </>
        </div>
        <p class="demo-desc">{i18n('fragment.shorthand.note')}</p>
      </div>

      <div class="demo-section">
        <h3>{i18n('fragment.reactive.title')}</h3>
        <p>{i18n('fragment.reactive.description')}</p>
        <div class="demo-flex-gap">
          <Button variant="contained" color="primary" on:click={addItem}>
            {i18n('fragment.reactive.addItem')}
          </Button>
          <Button variant="contained" color="primary" on:click={removeItem}>
            {i18n('fragment.reactive.removeLast')}
          </Button>
          <Button variant="contained" color="primary" on:click={rotate}>
            {i18n('fragment.reactive.rotate')}
          </Button>
          <Button variant="contained" color="primary" on:click={reset}>
            {i18n('fragment.reactive.reset')}
          </Button>
        </div>
        <div class="demo-result">{summaryRef}</div>
        <div class="demo-block fragment-row">
          <Fragment children={childrenRef} />
        </div>
        <Code code={fragmentDemoCode} />
      </div>
    </div>
  );
}
