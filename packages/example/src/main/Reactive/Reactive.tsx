import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';

import { Code } from '../../components/Code.js';
import { t } from '../../i18n/index.js';
import { i18nText } from '../../i18n/text.js';
import reactiveCode from './ref-computed.example.tsx?raw';
import subrefCode from './subref.example.tsx?raw';

export function Reactivity() {
  return (
    <div>
      <div class="demo-section">
        <h3>
          <code>ref</code> 与 <code>computed</code>
        </h3>
        <p>用于创建响应式数据和计算属性。</p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3>响应式子属性</h3>
        <p>通过`get`和`subref`导出轻量级响应式的子属性</p>
        <Code code={subrefCode} />
      </div>
    </div>
  );
}
