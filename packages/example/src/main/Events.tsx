import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import clickEventCode from '../code/click-event.tsx?raw';
import counterDemoCode from '../code/counter-demo.tsx?raw';

/**
 * Basic Usage page - Combines directives, events, and ktfor demos
 */
export function Events() {
  const outputRef = ref('No events yet.');
  const counterRef = ref(0);

  return (
    <div>
      <div class="demo-section">
        <p>
          KT.js uses the <code>on:</code> syntax for event handling, similar to Svelte and with direct DOM events.
        </p>
        <div>
          <div class="demo-flex-gap">
            <Button
              variant="contained"
              color="primary"
              on:click={() => (outputRef.value = `✓ Clicked at ${new Date().toLocaleTimeString()}`)}
            >
              Click Event
            </Button>
            <Button variant="contained" color="primary" on:dblclick={() => (outputRef.value = '✓ Double clicked!')}>
              Double Click
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:mouseenter={() => (outputRef.value = '✓ Mouse entered!')}
              on:mouseleave={() => (outputRef.value = '✓ Mouse left!')}
            >
              Hover Me
            </Button>
            <Button
              variant="contained"
              color="primary"
              on:focus={() => (outputRef.value = '✓ Button focused!')}
              on:blur={() => (outputRef.value = '✓ Button blurred!')}
            >
              Focus Me
            </Button>
          </div>
          <div class="demo-result">{outputRef}</div>
        </div>
        <Code code={clickEventCode} />
      </div>

      <div class="demo-section">
        <h3>Counter</h3>
        <p>A simple counter demonstrating manual state updates in KT.js.</p>
        <div class="demo-flex-gap">
          <div style="width:200px; font-size: 2rem; font-weight: bold; color: #667eea;">Count: {counterRef}</div>
          <Button variant="contained" color="primary" on:click={() => counterRef.value--}>
            -1
          </Button>
          <Button variant="contained" color="primary" on:click={() => counterRef.value++}>
            +1
          </Button>
          <Button variant="contained" color="primary" on:click={() => (counterRef.value += 10)}>
            +10
          </Button>
          <Button variant="contained" color="primary" on:click={() => (counterRef.value = 0)}>
            Reset
          </Button>
        </div>
        <Code code={counterDemoCode} />
      </div>
    </div>
  );
}
