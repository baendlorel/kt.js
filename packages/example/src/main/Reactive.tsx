import { css } from '@emotion/css';
import { computed, ref } from 'kt.js';

import exampleCode from '../code/directives.tsx?raw';
import { highlight } from '../common/highlight.js';

const styles = {
  description: css`
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  `,
};
export function Reactivity() {
  const kifFlag = ref(false);
  const kmodelText = ref('Reactive text');
  const khtmlContent = ref('<span style="color: #52c41a;">初始HTML</span>');

  const code = highlight(exampleCode);

  // Timer for demonstrating automatic updates
  setInterval(() => {
    kifFlag.value = !kifFlag.value;
  }, 1500);

  const notKifFLag = computed(() => !kifFlag.value, [kifFlag]);

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    kmodelText.value = `更新于: ${time}`;
  }, 2000);

  setInterval(() => {
    khtmlContent.value = `<div style="padding: 8px; background: #f0f0f0; margin: 5px 0;">
      <strong>动态HTML</strong><br/>
      随机值: ${Math.random().toFixed(3)}<br/>
      时间: ${new Date().toLocaleTimeString()}
    </div>`;
  }, 2500);

  return (
    <div>
      <div class="demo-section">
        <h3>Directives</h3>
        <p>
          Demonstrates the reactive behavior of the three major directives k-if, k-model, and k-html when passing refs:
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px;">
          <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
            <h4>k-if 指令</h4>
            <p>
              当前状态:
              <span k-if={kifFlag}>true</span>
              <span k-if={notKifFLag}>false</span>
            </p>
            <p class={styles.description}>
              k-if passes a ref, redraws when ref content changes (even if boolean value is the same)
            </p>
          </div>

          <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
            <h4>k-model 指令</h4>
            <input
              type="text"
              k-model={kmodelText}
              style="width: 100%; padding: 8px; margin: 10px 0; box-sizing: border-box;"
            />
            <p>当前值: {kmodelText}</p>
            <p class={styles.description}>k-model must pass a ref, implements two-way binding</p>
          </div>

          <div style="border: 1px solid #d9d9d9; padding: 15px; border-radius: 4px;">
            <h4>k-html 指令</h4>
            <div k-html={khtmlContent} style="min-height: 100px; border: 1px dashed #ccc; padding: 10px;" />
            <p class={styles.description}>k-html passes a ref, automatically redraws when ref changes</p>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <h4>Example Codes</h4>
        {code}
      </div>
    </div>
  );
}
