import { computed, ref } from 'kt.js';
import { Button, TextField } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import directivesCode from '../code/directives.tsx?raw';

export function Directives() {
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

  return (
    <div>
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
        <Code code={directivesCode} />
      </div>
    </div>
  );
}
