import { computed, ref } from 'kt.js';

import exampleCode from '../code/directives.tsx?raw';
import { highlight } from '../common/highlight.js';
import { TextField } from '@ktjs/mui';

export function Reactivity() {
  const kifFlag = ref(false);
  const kmodelText = ref('Reactive text');
  const khtmlContent = ref('<span style="color: #52c41a;">初始HTML</span>');

  // Timer for demonstrating automatic updates
  setInterval(() => (kifFlag.value = !kifFlag.value), 1500);

  const notKifFLag = computed(() => !kifFlag.value, [kifFlag]);

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    kmodelText.value = `Updated at: ${time}`;
  }, 2000);

  setInterval(() => {
    const color = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0');
    khtmlContent.value = `<span style="color: #${color};">初始HTML</span>`;
  }, 2500);

  // # attr refs
  const styleRef = ref('width: 10%;height:20px;background-color:#1890ff;transition: width 1s;');
  const styleWidthRef = ref(10);
  setInterval(() => {
    styleWidthRef.value = Math.floor(Math.random() * 100);
    styleRef.value = `width: ${styleWidthRef.value}%;height:20px;background-color:#1890ff;transition: width 1s;`;
  }, 1000);

  return (
    <div>
      <div class="demo-section">
        <h3>Attribute Ref</h3>
        <p>
          Use <code>ref</code> to make attributes reactive
        </p>
        <div style={styleRef}></div>
        <div class="demo-result">Current Width: {styleWidthRef}</div>
        <div class="demo-code">{highlight(`<div style={styleRef}></div>`)}</div>
      </div>
      <div class="demo-section">
        <h3>Directives</h3>
        <h4>k-if</h4>
        <p>
          Current Value: <span k-if={kifFlag}>true</span>
          <span k-if={notKifFLag}>false</span>
        </p>
        <p class="demo-desc">k-if passes a ref, redraws when ref content changes (even if boolean value is the same)</p>
        <div class="demo-code">{highlight(`<span k-if={kifFlag}>true</span>`)}</div>

        <h4>k-model</h4>
        <TextField k-model={kmodelText}></TextField>
        <p class="demo-desc">k-model must pass a ref, implements two-way binding</p>
        <div class="demo-result">{kmodelText}</div>
        <div class="demo-code">
          {highlight(`<TextField k-model={kmodelText}></TextField> // TextField is from @ktjs/mui`)}
        </div>

        <h4>k-html</h4>
        <div k-html={khtmlContent} class="demo-block" />
        <p class="demo-desc">k-html passes a ref, automatically redraws when ref changes</p>
        <div class="demo-code">{highlight(` <div k-html={khtmlContent} class="demo-block"></div>`)}</div>

        <h4>Full Demo</h4>
        <div class="demo-code">{highlight(exampleCode)}</div>
      </div>
    </div>
  );
}
