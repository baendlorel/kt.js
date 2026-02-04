import { ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import counterDemoCode from '../code/counter-demo.tsx?raw';
import { highlight } from '../common/highlight.js';

/**
 * Counter Demo - Demonstrates manual state updates
 */
export function Counter() {
  const counterRef = ref(0);
  const counterDemoHighlighted = highlight(counterDemoCode);

  return (
    <div class="demo-section">
      <h3>Counter Demo</h3>
      <p>A simple counter demonstrating manual state updates in KT.js.</p>
      <div style="margin: 24px 0; font-size: 2rem; font-weight: bold; color: #667eea;">Count: {counterRef}</div>
      <div>
        <Button color="primary" on:click={() => counterRef.value--}>
          -1
        </Button>
        <Button color="primary" on:click={() => counterRef.value++}>
          +1
        </Button>
        <Button color="primary" on:click={() => (counterRef.value += 10)}>
          +10
        </Button>
        <Button color="primary" on:click={() => (counterRef.value = 0)}>
          Reset
        </Button>
      </div>
      <div>{counterDemoHighlighted}</div>
    </div>
  );
}
