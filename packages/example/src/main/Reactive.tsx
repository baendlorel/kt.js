import { computed, ref } from 'kt.js';

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

  return (
    <div>
      <div class="demo-section">
        <h3 k-html={t('reactive.section.title')}></h3>
        <p k-html={t('reactive.section.description')}></p>
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
    </div>
  );
}
