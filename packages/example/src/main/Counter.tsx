import '@ktjs/core/jsx';
import { DemoSection } from '../components/index.js';

/**
 * Counter Demo - Demonstrates manual state updates
 */
export function Counter() {
  let count = 0;
  const counterDisplay = (<span>{count}</span>) as HTMLSpanElement;

  return (
    <DemoSection>
      <h3>Counter Demo</h3>
      <p>A simple counter demonstrating manual state updates in KT.js.</p>
      <div style="margin: 24px 0; font-size: 2rem; font-weight: bold; color: #667eea;">Count: {counterDisplay}</div>
      <div>
        <button
          on:click={() => {
            count--;
            counterDisplay.textContent = String(count);
          }}
        >
          -1
        </button>
        <button
          on:click={() => {
            count++;
            counterDisplay.textContent = String(count);
          }}
        >
          +1
        </button>
        <button
          on:click={() => {
            count += 10;
            counterDisplay.textContent = String(count);
          }}
        >
          +10
        </button>
        <button
          on:click={() => {
            count = 0;
            counterDisplay.textContent = String(count);
          }}
        >
          Reset
        </button>
      </div>
    </DemoSection>
  );
}
