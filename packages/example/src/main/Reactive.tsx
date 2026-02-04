import { computed, ref } from 'kt.js';

import exampleCode from '../code/directives.tsx?raw';
import { highlight } from '../common/highlight.js';
import { TextField } from '@ktjs/mui';

export function Reactivity() {
  const kifFlag = ref(false);
  const kmodelText = ref('Reactive text');
  const khtmlContent = ref('<span style="color: #52c41a;">初始HTML</span>');

  const code = highlight(exampleCode);

  // Timer for demonstrating automatic updates
  setInterval(() => (kifFlag.value = !kifFlag.value), 1500);

  const notKifFLag = computed(() => !kifFlag.value, [kifFlag]);

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    kmodelText.value = `Updated at: ${time}`;
  }, 2000);

  setInterval(() => {
    khtmlContent.value = `<div style="padding: 8px; background: #f0f0f0; margin: 5px 0;">
      <strong>Dynamic HTML</strong><br/>
      Random Number: ${Math.random().toFixed(3)}<br/>
      Time: ${new Date().toLocaleTimeString()}
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
          <div class="demo-block">
            <h4>k-if</h4>
            <p>
              Current Value:
              <span k-if={kifFlag}>true</span>
              <span k-if={notKifFLag}>false</span>
            </p>
            <p class="demo-desc">
              k-if passes a ref, redraws when ref content changes (even if boolean value is the same)
            </p>
          </div>

          <div class="demo-block">
            <h4>k-model</h4>
            <TextField k-model={kmodelText}></TextField>
            <p>Current Value: {kmodelText}</p>
            <p class="demo-desc">k-model must pass a ref, implements two-way binding</p>
          </div>

          <div class="demo-block">
            <h4>k-html</h4>
            <div k-html={khtmlContent} style="min-height: 100px; border: 1px dashed #ccc; padding: 10px;" />
            <p class="demo-desc">k-html passes a ref, automatically redraws when ref changes</p>
          </div>
        </div>
      </div>
      <div class="demo-section">
        <h4>Example Codes</h4>
        <p>
          Use <code>ref</code> to make them reactive
        </p>
        {code}
      </div>
    </div>
  );
}
