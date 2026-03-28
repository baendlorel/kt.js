import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';

import { Code } from '../../components/Code.js';
import { t } from '../../i18n/index.js';
import { i18nText } from '../../i18n/text.js';
import reactiveCode from './ref-computed.example.tsx?raw';
import subrefCode from './subref.example.tsx?raw';
import deepCode from './deep.example.tsx?raw';

export function Reactivity() {
  return (
    <div>
      <div class="demo-section">
        <h3>响应式数据</h3>
        <p>
          <code>ref</code> 与 <code>computed</code>用于创建响应式数据和计算属性。
        </p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3>响应式子属性</h3>
        <p>
          通过<code>get</code>和<code>subref</code>导出轻量级响应式的子属性
        </p>
        <Code code={subrefCode} />
      </div>
      <div class="demo-section">
        <h3>深度响应</h3>
        <p>
          <code>ref.value</code>只接收本身的变化，若要深度响应，则使用api<code>ref.draft</code>
          。它会标记当前ref对象，将响应变化在微队列中执行，以实现简单高效的深度响应。
        </p>
        <Code code={deepCode} />
      </div>
    </div>
  );
}
