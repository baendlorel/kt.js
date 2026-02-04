import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import clickEventCode from '../code/click-event.tsx?raw';
import { highlight } from '../common/highlight.js';
import { Counter } from './Counter.js';

/**
 * Basic Usage page - Combines directives, events, and ktfor demos
 */
export function Events() {
  const outputRef = ref('No events yet.');
  const clickEventHighlighted = highlight(clickEventCode);
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
        <div class="demo-result">{clickEventHighlighted}</div>
      </div>

      <Counter></Counter>
    </div>
  );
}
