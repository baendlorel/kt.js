import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';

import reactiveCode from '../code/reactive.tsx?raw';
import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';
import { i18nText } from '../i18n/text.js';

export function Reactivity() {
  // # attr refs
  const styleRef = ref('width: 10%;height:20px;background-color:#1890ff;transition: width 1s;');
  const styleWidthRef = ref(10);
  setInterval(() => {
    styleWidthRef.value = Math.floor(Math.random() * 100);
    styleRef.value = `width: ${styleWidthRef.value}%;height:20px;background-color:#1890ff;transition: width 1s;`;
  }, 1000);
  const widthTextRef = computed(
    () => i18nText('reactive.attribute.currentWidth', styleWidthRef.value),
    [styleWidthRef],
  );

  const childRef = ref(i18nText('reactive.children.initial'));
  let isChildUpdated = false;
  setInterval(() => {
    isChildUpdated = !isChildUpdated;
    childRef.value = i18nText(isChildUpdated ? 'reactive.children.updated' : 'reactive.children.initial');
  }, 1000);

  const valueRef = ref(1);
  const valueTextRef = valueRef.map((value) => i18nText('reactive.api.value.current', value));
  const valueDoubleTextRef = valueRef.map((value) => i18nText('reactive.api.value.double', value * 2));

  const profileRef = ref({
    user: {
      name: 'KT.js',
      visits: 1,
    },
    tags: ['direct-dom'],
  });
  const profileSummaryRef = profileRef.map((value) =>
    i18nText('reactive.api.draft.summary', value.user.name, value.user.visits, value.tags.join(' / ')),
  );

  const priceRef = ref(120);
  const discountRef = ref(10);
  const taxRef = ref(6);
  const finalPriceRef = priceRef.map(
    (price) => {
      const discountedPrice = price * (1 - discountRef.value / 100);
      return (discountedPrice * (1 + taxRef.value / 100)).toFixed(2);
    },
    [discountRef, taxRef],
  );
  const priceTextRef = priceRef.map((value) => i18nText('reactive.api.map.price', value));
  const discountTextRef = discountRef.map((value) => i18nText('reactive.api.map.discount', value));
  const taxTextRef = taxRef.map((value) => i18nText('reactive.api.map.tax', value));
  const finalPriceTextRef = finalPriceRef.map((value) => i18nText('reactive.api.map.total', value));

  const listenerValueRef = ref(0);
  const listenerActiveRef = ref(false);
  const listenerLogsRef = ref<string[]>([]);
  const listenerLogsTextRef = listenerLogsRef.map((logs) =>
    logs.length > 0 ? logs.join('\n') : i18nText('reactive.api.listeners.log.empty'),
  );
  const listenerStatusTextRef = listenerActiveRef.map((active) =>
    i18nText(active ? 'reactive.api.listeners.status.on' : 'reactive.api.listeners.status.off'),
  );
  const listenerStatusLineRef = listenerStatusTextRef.map((status) =>
    i18nText('reactive.api.listeners.status', status),
  );
  const listenerValueTextRef = listenerValueRef.map((value) => i18nText('reactive.api.listeners.value', value));
  const listenerKey = 'reactive-page-listener';
  const pushListenerLog = (message: string) => {
    const logs = listenerLogsRef.value;
    logs.unshift(message);
    if (logs.length > 8) {
      logs.length = 8;
      listenerLogsRef.notify();
    }
  };
  const enableListener = () => {
    if (listenerActiveRef.value) {
      return;
    }
    listenerValueRef.addOnChange((newValue, oldValue) => {
      pushListenerLog(
        i18nText('reactive.api.listeners.log.changed', oldValue, newValue, new Date().toLocaleTimeString()),
      );
    }, listenerKey);
    listenerActiveRef.value = true;
    pushListenerLog(i18nText('reactive.api.listeners.log.listenerOn'));
  };
  const disableListener = () => {
    if (!listenerActiveRef.value) {
      return;
    }
    listenerValueRef.removeOnChange(listenerKey);
    listenerActiveRef.value = false;
    pushListenerLog(i18nText('reactive.api.listeners.log.listenerOff'));
  };
  const clearListenerLogs = () => {
    listenerLogsRef.value = [];
  };
  const replaceProfileName = () => {
    const nextName = profileRef.value.user.name === 'KT.js' ? 'KT.js Next' : 'KT.js';
    profileRef.value = {
      ...profileRef.value,
      user: {
        ...profileRef.value.user,
        name: nextName,
      },
      tags: [...profileRef.value.tags],
    };
  };
  const bumpVisits = () => {
    profileRef.draft.user.visits += 1;
  };
  const addTag = () => {
    profileRef.draft.tags.push(`tag-${profileRef.value.tags.length + 1}`);
  };
  const removeTag = () => {
    if (profileRef.value.tags.length <= 1) {
      return;
    }
    profileRef.draft.tags.pop();
  };

  return (
    <div>
      <div class="demo-section">
        <div class="demo-block">
          <p class="demo-desc" k-html={t('reactive.ref.overview')}></p>
          <ul class="reactive-api-method-list">
            <li>
              <p k-html={t('reactive.ref.item.value')}></p>
            </li>
            <li>
              <p k-html={t('reactive.ref.item.array')}></p>
            </li>
            <li>
              <p k-html={t('reactive.ref.item.mapSet')}></p>
            </li>
            <li>
              <p k-html={t('reactive.ref.item.computed')}></p>
            </li>
          </ul>
        </div>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.attribute.title')}></h3>
        <p k-html={t('reactive.attribute.description')}></p>
        <div style={styleRef}></div>
        <div class="demo-result">{widthTextRef}</div>
        <Code code={`<div style={styleRef}></div>`} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.children.title')}></h3>
        <p k-html={t('reactive.children.description')}></p>
        <div class="demo-result">{childRef}</div>
        <Code code={`<div>{childRef}</div>`} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.api.title')}></h3>
        <p k-html={t('reactive.api.description')}></p>
        <div class="demo-block">
          <p class="demo-desc" k-html={t('reactive.api.overview')}></p>
          <ul class="reactive-api-method-list">
            <li>
              <code>value: T</code>
              <p k-html={t('reactive.api.method.value')}></p>
            </li>
            <li>
              <code>draft: T</code>
              <p k-html={t('reactive.api.method.draft')}></p>
            </li>
            <li>
              <code>notify(handlerKeys?: (string | number)[]): void</code>
              <p k-html={t('reactive.api.method.notify')}></p>
            </li>
            <li>
              <code>
                map&lt;R&gt;(calculator: (value: T) =&gt; R, dependencies?: KTReactive&lt;any&gt;[]):
                KTComputed&lt;R&gt;
              </code>
              <p k-html={t('reactive.api.method.map')}></p>
            </li>
            <li>
              <code>
                addOnChange&lt;K extends string | number | undefined&gt;(callback: ReactiveChangeHandler&lt;T&gt;, key?:
                K): K extends undefined ? number : K
              </code>
              <p k-html={t('reactive.api.method.addOnChange')}></p>
            </li>
            <li>
              <code>removeOnChange(key: string | number): ReactiveChangeHandler&lt;T&gt; | undefined</code>
              <p k-html={t('reactive.api.method.removeOnChange')}></p>
            </li>
          </ul>
        </div>

        <div class="reactive-api-grid">
          <div class="demo-block reactive-api-card">
            <h4 k-html={t('reactive.api.value.title')}></h4>
            <p class="demo-desc" k-html={t('reactive.api.value.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => valueRef.value--}>
                {t('reactive.api.value.decrement')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => valueRef.value++}>
                {t('reactive.api.value.increment')}
              </Button>
            </div>
            <div class="demo-result">
              <div>{valueTextRef}</div>
              <div>{valueDoubleTextRef}</div>
            </div>
          </div>
          <div class="demo-block reactive-api-card">
            <h4 k-html={t('reactive.api.draft.title')}></h4>
            <p class="demo-desc" k-html={t('reactive.api.draft.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={replaceProfileName}>
                {t('reactive.api.draft.replace')}
              </Button>
              <Button variant="contained" color="primary" on:click={bumpVisits}>
                {t('reactive.api.draft.bumpVisits')}
              </Button>
              <Button variant="contained" color="primary" on:click={addTag}>
                {t('reactive.api.draft.addTag')}
              </Button>
              <Button variant="contained" color="primary" on:click={removeTag}>
                {t('reactive.api.draft.removeTag')}
              </Button>
            </div>
            <div class="demo-result">
              <div>{profileSummaryRef}</div>
            </div>
            <Code
              code={`profileRef.value = { ...profileRef.value, user: { ...profileRef.value.user, name: 'KT.js Next' } }\nprofileRef.draft.user.visits += 1\nprofileRef.draft.tags.push('tag-2')`}
            />
          </div>
          <div class="demo-block reactive-api-card">
            <h4 k-html={t('reactive.api.map.title')}></h4>
            <p class="demo-desc" k-html={t('reactive.api.map.description')}></p>
            <div class="demo-flex-gap">
              <Button
                variant="contained"
                color="primary"
                on:click={() => (priceRef.value = Math.max(0, priceRef.value - 10))}
              >
                {t('reactive.api.map.priceMinus')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => (priceRef.value += 10)}>
                {t('reactive.api.map.pricePlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (discountRef.value = Math.max(0, discountRef.value - 5))}
              >
                {t('reactive.api.map.discountMinus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (discountRef.value = Math.min(90, discountRef.value + 5))}
              >
                {t('reactive.api.map.discountPlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (taxRef.value = Math.max(0, taxRef.value - 1))}
              >
                {t('reactive.api.map.taxMinus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (taxRef.value = Math.min(30, taxRef.value + 1))}
              >
                {t('reactive.api.map.taxPlus')}
              </Button>
            </div>
            <div class="demo-result">
              <div>{priceTextRef}</div>
              <div>{discountTextRef}</div>
              <div>{taxTextRef}</div>
              <div>{finalPriceTextRef}</div>
            </div>
          </div>

          <div class="demo-block reactive-api-card">
            <h4 k-html={t('reactive.api.listeners.title')}></h4>
            <p class="demo-desc" k-html={t('reactive.api.listeners.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={enableListener}>
                {t('reactive.api.listeners.enable')}
              </Button>
              <Button variant="contained" color="primary" on:click={disableListener}>
                {t('reactive.api.listeners.disable')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => listenerValueRef.value++}>
                {t('reactive.api.listeners.bump')}
              </Button>
              <Button variant="contained" color="primary" on:click={clearListenerLogs}>
                {t('reactive.api.listeners.clear')}
              </Button>
            </div>
            <div class="demo-result">
              <div>{listenerStatusLineRef}</div>
              <div>{listenerValueTextRef}</div>
            </div>
            <pre class="reactive-api-log">{listenerLogsTextRef}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
