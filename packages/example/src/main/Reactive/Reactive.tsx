import { Code } from '../../components/Code.js';
import { t } from '../../i18n/index.js';
import { i18nText } from '../../i18n/text.js';

import reactiveCode from './__ref-computed.tsx?raw';
import subrefCode from './__subref.tsx?raw';
import mapCode from './__map.tsx?raw';
import deepCode from './__deep.tsx?raw';
import deepComplexCode from './__deep-complex.tsx?raw';

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
        <h3>派生computed</h3>
        <p>
          通过<code>map</code>函数派生出computed对象
        </p>
        <Code code={mapCode} />
      </div>
      <div class="demo-section">
        <h3>深度响应</h3>
        <p>
          <code>ref.value</code>只接收本身的变化，若要深度响应，则使用api<code>ref.draft</code>
          。它会标记当前ref对象，将响应变化在微队列中执行，以实现简单高效的深度响应。
        </p>
        <Code code={deepCode} />
        <p>天然支持复杂的自定义对象</p>
        <Code code={deepComplexCode} />
      </div>
    </div>
  );
}
