import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';

import autoRefCode from '../code/auto-ref.ts?raw';
import reactiveCode from '../code/reactive.tsx?raw';
import reactiveApiCode from '../code/ktreactive-methods.ts?raw';
import { Code } from '../components/Code.js';
import { t } from '../i18n/index.js';
import { i18nText } from '../i18n/text.js';

export function Reactivity() {
  // # attr refs
  const styleRef = ref('width: 10%;height:20px;background-color:#1890ff;transition: width 1s;');
  const styleWidthRef = ref(10);
  setInterval(() => {
    styleWidthRef.state = Math.floor(Math.random() * 100);
    styleRef.state = `width: ${styleWidthRef.state}%;height:20px;background-color:#1890ff;transition: width 1s;`;
  }, 1000);
  const widthTextRef = computed(
    () => i18nText('reactive.attribute.currentWidth', styleWidthRef.state),
    [styleWidthRef],
  );

  const childRef = ref(i18nText('reactive.children.initial'));
  let isChildUpdated = false;
  setInterval(() => {
    isChildUpdated = !isChildUpdated;
    childRef.state = i18nText(isChildUpdated ? 'reactive.children.updated' : 'reactive.children.initial');
  }, 1000);

  const valueRef = ref(1);
  const valueTextRef = valueRef.map((value) => i18nText('reactive.api.value.current', value));
  const valueDoubleTextRef = valueRef.map((value) => i18nText('reactive.api.value.double', value * 2));

  const objectStateRef = ref({
    count: 0,
    updatedAt: '--:--:--',
  });
  const objectSummaryRef = objectStateRef.map((state) =>
    i18nText('reactive.api.notifyMutate.summary', state.count, state.updatedAt),
  );
  const patchInPlaceOnly = () => {
    objectStateRef.state.count += 1;
    objectStateRef.state.updatedAt = new Date().toLocaleTimeString();
  };
  const forceNotify = () => objectStateRef.notify();
  const mutateAndNotify = () => {
    objectStateRef.mutate((state) => {
      state.count += 1;
      state.updatedAt = new Date().toLocaleTimeString();
    });
  };

  const priceRef = ref(120);
  const discountRef = ref(10);
  const taxRef = ref(6);
  const finalPriceRef = priceRef.map(
    (price) => {
      const discountedPrice = price * (1 - discountRef.state / 100);
      return (discountedPrice * (1 + taxRef.state / 100)).toFixed(2);
    },
    [discountRef, taxRef],
  );
  const priceTextRef = priceRef.map((value) => i18nText('reactive.api.toComputed.price', value));
  const discountTextRef = discountRef.map((value) => i18nText('reactive.api.toComputed.discount', value));
  const taxTextRef = taxRef.map((value) => i18nText('reactive.api.toComputed.tax', value));
  const finalPriceTextRef = finalPriceRef.map((value) => i18nText('reactive.api.toComputed.total', value));

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
    listenerLogsRef.mutate((logs) => {
      logs.unshift(message);
      if (logs.length > 8) {
        logs.length = 8;
      }
    });
  };
  const enableListener = () => {
    if (listenerActiveRef.state) {
      return;
    }
    listenerValueRef.addOnChange((newValue, oldValue) => {
      pushListenerLog(
        i18nText('reactive.api.listeners.log.changed', oldValue, newValue, new Date().toLocaleTimeString()),
      );
    }, listenerKey);
    listenerActiveRef.state = true;
    pushListenerLog(i18nText('reactive.api.listeners.log.listenerOn'));
  };
  const disableListener = () => {
    if (!listenerActiveRef.state) {
      return;
    }
    listenerValueRef.removeOnChange(listenerKey);
    listenerActiveRef.state = false;
    pushListenerLog(i18nText('reactive.api.listeners.log.listenerOff'));
  };
  const clearListenerLogs = () => {
    listenerLogsRef.state = [];
  };

  return (
    <div>
      <div class="demo-section">
        <h3 k-html={t('reactive.section.title')}></h3>
        <p k-html={t('reactive.section.description')}></p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.ref.title')}></h3>
        <p k-html={t('reactive.ref.description')}></p>
        <div class="demo-block">
          <p class="demo-desc" k-html={t('reactive.ref.overview')}></p>
          <ul class="reactive-api-method-list">
            <li>
              <code>autoRef([]) -&gt; KTArrayRef</code>
              <p k-html={t('reactive.ref.item.array')}></p>
            </li>
            <li>
              <code>autoRef(new Map()) / autoRef(new Set())</code>
              <p k-html={t('reactive.ref.item.mapSet')}></p>
            </li>
            <li>
              <code>autoRef(new WeakMap()) / autoRef(new WeakSet())</code>
              <p k-html={t('reactive.ref.item.weak')}></p>
            </li>
            <li>
              <code>autoRef(new Date()) -&gt; KTDateRef</code>
              <p k-html={t('reactive.ref.item.date')}></p>
            </li>
          </ul>
          <p class="demo-desc" k-html={t('reactive.ref.tip')}></p>
        </div>
        <Code code={autoRefCode} lang="ts" />
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
              <code>notify(handlerKeys?: (string | number)[]): void</code>
              <p k-html={t('reactive.api.method.notify')}></p>
            </li>
            <li>
              <code>mutate&lt;R = void&gt;(mutator: (value: T) =&gt; R, handlerKeys?: (string | number)[]): R</code>
              <p k-html={t('reactive.api.method.mutate')}></p>
            </li>
            <li>
              <code>
                toComputed&lt;R&gt;(calculator: (value: T) =&gt; R, dependencies?: KTReactive&lt;any&gt;[]):
                KTComputed&lt;R&gt;
              </code>
              <p k-html={t('reactive.api.method.toComputed')}></p>
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
              <Button variant="contained" color="primary" on:click={() => valueRef.state--}>
                {t('reactive.api.value.decrement')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => valueRef.state++}>
                {t('reactive.api.value.increment')}
              </Button>
            </div>
            <div class="demo-result">
              <div>{valueTextRef}</div>
              <div>{valueDoubleTextRef}</div>
            </div>
          </div>

          <div class="demo-block reactive-api-card">
            <h4 k-html={t('reactive.api.notifyMutate.title')}></h4>
            <p class="demo-desc" k-html={t('reactive.api.notifyMutate.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={patchInPlaceOnly}>
                {t('reactive.api.notifyMutate.inline')}
              </Button>
              <Button variant="contained" color="primary" on:click={forceNotify}>
                {t('reactive.api.notifyMutate.notify')}
              </Button>
              <Button variant="contained" color="primary" on:click={mutateAndNotify}>
                {t('reactive.api.notifyMutate.mutate')}
              </Button>
            </div>
            <div class="demo-result">{objectSummaryRef}</div>
            <p class="demo-desc" k-html={t('reactive.api.notifyMutate.tip')}></p>
          </div>

          <div class="demo-block reactive-api-card">
            <h4 k-html={t('reactive.api.toComputed.title')}></h4>
            <p class="demo-desc" k-html={t('reactive.api.toComputed.description')}></p>
            <div class="demo-flex-gap">
              <Button
                variant="contained"
                color="primary"
                on:click={() => (priceRef.state = Math.max(0, priceRef.state - 10))}
              >
                {t('reactive.api.toComputed.priceMinus')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => (priceRef.state += 10)}>
                {t('reactive.api.toComputed.pricePlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (discountRef.state = Math.max(0, discountRef.state - 5))}
              >
                {t('reactive.api.toComputed.discountMinus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (discountRef.state = Math.min(90, discountRef.state + 5))}
              >
                {t('reactive.api.toComputed.discountPlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (taxRef.state = Math.max(0, taxRef.state - 1))}
              >
                {t('reactive.api.toComputed.taxMinus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (taxRef.state = Math.min(30, taxRef.state + 1))}
              >
                {t('reactive.api.toComputed.taxPlus')}
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
              <Button variant="contained" color="primary" on:click={() => listenerValueRef.state++}>
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

        <Code code={reactiveApiCode} lang="ts" />
      </div>
    </div>
  );
}
