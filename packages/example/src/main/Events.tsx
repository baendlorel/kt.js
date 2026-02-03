import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';

/**
 * Event Handling Demo - Shows how to use event handlers in KT.js
 */
export function FeatEvents() {
  const outputRef = ref('Click a button to see event handling in action');

  return (
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
      <div class="output-text">{outputRef}</div>
    </div>
  );
}
