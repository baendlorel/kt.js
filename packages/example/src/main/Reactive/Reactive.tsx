import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';

import { Code } from '../../components/Code.js';
import { t } from '../../i18n/index.js';
import { i18nText } from '../../i18n/text.js';

export function Reactivity() {
  return (
    <div>
      <div class="demo-section">
        <h3>
          最常用的响应式 API 是 <code>ref</code> 和 <code>computed</code>，它们分别用于创建响应式数据和计算属性。
        </h3>
        <Code code={reactiveCode} />
      </div>
    </div>
  );
}
