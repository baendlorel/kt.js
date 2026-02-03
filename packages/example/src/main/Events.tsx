import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';

/**
 * Event Handling Demo - Shows how to use event handlers in KT.js
 */
export function FeatEvents() {
  const outputRef = ref('Click a button to see event handling in action');

  return (
    <div class="demo-section">
      <h3>Event Handling Demo</h3>
      <p>
        KT.js uses <code>on:eventName</code> syntax for event handlers. All standard DOM events are supported.
      </p>

      <div style="margin: 20px 0;">
        <Button on:click={() => (outputRef.value = `✓ Clicked at ${new Date().toLocaleTimeString()}`)}>
          Click Event
        </Button>
        <Button on:dblclick={() => (outputRef.value = '✓ Double clicked!')}>Double Click</Button>
        <Button
          on:mouseenter={() => (outputRef.value = '✓ Mouse entered!')}
          on:mouseleave={() => (outputRef.value = '✓ Mouse left!')}
        >
          Hover Me
        </Button>
        <Button
          on:focus={() => (outputRef.value = '✓ Button focused!')}
          on:blur={() => (outputRef.value = '✓ Button blurred!')}
        >
          Focus Me
        </Button>
      </div>
      <div class="output-text"> {outputRef}</div>
    </div>
  );
}
