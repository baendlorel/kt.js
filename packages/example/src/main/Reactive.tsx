import { computed, ref } from 'kt.js';
import { Button, TextField } from '@ktjs/mui';

import exampleCode from '../code/directives.tsx?raw';
import reactiveCode from '../code/reactive.tsx?raw';
import { Code } from '../components/Code.js';

export function Reactivity() {
  const kifFlag = ref(false);
  const kmodelText = ref('Reactive text');
  const khtmlContent = ref('<span style="color: #52c41a;">初始HTML</span>');

  const kifStateText = computed(() => (kifFlag.value ? 'true' : 'false'), [kifFlag]);

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    kmodelText.value = `Updated at: ${time}`;
  }, 1000);

  setInterval(() => {
    const color = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0');
    khtmlContent.value = `<span style="color: #${color};">初始HTML</span>`;
  }, 1000);

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
        <h3>
          <code>ref</code> and <code>computed</code>
        </h3>
        <p>
          Note that you should manually specify the dependencies of a <code>computed</code> value.
        </p>
        <p>
          It looks like <code>Vue</code>
        </p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3>Attribute Ref</h3>
        <p>
          Use <code>ref</code> to make attributes reactive
        </p>
        <div style={styleRef}></div>
        <div class="demo-result">Current Width: {styleWidthRef}</div>
        <Code code={`<div style={styleRef}></div>`} />
      </div>
      <div class="demo-section">
        <h3>Directives</h3>
        <h4>k-if + k-else</h4>
        <p>
          <code>k-if</code> and <code>k-else</code> can be used as adjacent sibling branches.
        </p>
        <div class="demo-flex-gap">
          <Button variant="contained" color="primary" on:click={() => (kifFlag.value = true)}>
            Show k-if
          </Button>
          <Button variant="contained" color="primary" on:click={() => (kifFlag.value = false)}>
            Show k-else
          </Button>
          <Button variant="contained" color="primary" on:click={() => (kifFlag.value = !kifFlag.value)}>
            Toggle
          </Button>
        </div>
        <div class="demo-result">
          Condition: {kifStateText}
          <div class="demo-block" style="margin-top: 12px;">
            <span k-if={kifFlag}>k-if branch: primary content is rendered.</span>
            <span k-else>k-else branch: fallback content is rendered.</span>
          </div>
        </div>
        <p class="demo-desc">Syntax rule: k-else must be immediately after a sibling k-if.</p>
        <Code code={`<span k-if={kifFlag}>primary content</span>\n<span k-else>fallback content</span>`} />

        <h4>k-model</h4>
        <TextField k-model={kmodelText}></TextField>
        <p class="demo-desc">k-model must pass a ref, implements two-way binding</p>
        <div class="demo-result">{kmodelText}</div>
        <Code code={`<TextField k-model={kmodelText}></TextField> // TextField is from @ktjs/mui`} />

        <h4>k-html</h4>
        <div k-html={khtmlContent} class="demo-block" />
        <p class="demo-desc">k-html passes a ref, automatically redraws when ref changes</p>
        <Code code={`<div k-html={khtmlContent} class="demo-block"></div>`} />

        <h4>Full Demo</h4>
        <Code code={exampleCode} />
      </div>
    </div>
  );
}
