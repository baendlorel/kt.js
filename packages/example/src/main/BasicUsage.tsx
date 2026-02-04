import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { FeatKTFor } from './KTFor.js';
import clickEventCode from '../code/click-event.tsx?raw';
import { highlight } from '../common/highlight.js';

/**
 * Basic Usage page - Combines directives, events, and ktfor demos
 */
export function BasicUsage() {
  const outputRef = ref('No events yet.');
  const clickEventHighlighted = highlight(clickEventCode);
  return (
    <div>
      <div class="demo-section">
        <h3>Event Handling</h3>
        <p>
          KT.js uses the <code>on:</code> syntax for event handling, similar to React but with direct DOM events.
        </p>
        <div>
          <div>
            <Button
              style="margin:0px 15px"
              on:click={() => (outputRef.value = `✓ Clicked at ${new Date().toLocaleTimeString()}`)}
            >
              Click Event
            </Button>
            <Button style="margin:0px 15px" on:dblclick={() => (outputRef.value = '✓ Double clicked!')}>
              Double Click
            </Button>
            <Button
              style="margin:0px 15px"
              on:mouseenter={() => (outputRef.value = '✓ Mouse entered!')}
              on:mouseleave={() => (outputRef.value = '✓ Mouse left!')}
            >
              Hover Me
            </Button>
            <Button
              style="margin:0px 15px"
              on:focus={() => (outputRef.value = '✓ Button focused!')}
              on:blur={() => (outputRef.value = '✓ Button blurred!')}
            >
              Focus Me
            </Button>
          </div>
          <div>{outputRef}</div>
        </div>
        <div style="margin-top: 20px">{clickEventHighlighted}</div>
      </div>

      <div>
        <h3>KTFor List Rendering</h3>
        <p>
          The <code>KTFor</code> component provides efficient list rendering with key-based DOM reuse, similar to
          React's <code>key</code> prop but with manual control.
        </p>
        <FeatKTFor />
      </div>
    </div>
  );
}
