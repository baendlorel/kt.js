import '@ktjs/core/jsx';
import { KTHTMLElement } from '@ktjs/core/jsx';

/**
 * Event Handling Demo - Shows how to use event handlers in KT.js
 */
export function FeatEvents() {
  const output = (
    <div class="output-text">Click a button to see event handling in action</div>
  ) as KTHTMLElement<HTMLDivElement>;

  return (
    <div class="demo-section">
      <h3>Event Handling Demo</h3>
      <p>
        KT.js uses <code>on:eventName</code> syntax for event handlers. All standard DOM events are supported.
      </p>

      <div style="margin: 20px 0;">
        <button on:click={() => (output.textContent = `✓ Clicked at ${new Date().toLocaleTimeString()}`)}>
          Click Event
        </button>
        <button on:dblclick={() => (output.textContent = '✓ Double clicked!')}>Double Click</button>
        <button
          on:mouseenter={() => (output.textContent = '✓ Mouse entered!')}
          on:mouseleave={() => (output.textContent = '✓ Mouse left!')}
        >
          Hover Me
        </button>
        <button
          on:focus={() => (output.textContent = '✓ Button focused!')}
          on:blur={() => (output.textContent = '✓ Button blurred!')}
        >
          Focus Me
        </button>
      </div>

      {output}
    </div>
  );
}
