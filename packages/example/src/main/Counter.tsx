import '@ktjs/core/jsx';
import { ref } from 'kt.js';

/**
 * Counter Demo - Demonstrates manual state updates
 */
export function Counter() {
  const counterRef = ref(0);

  return (
    <div class="demo-section">
      <h3>Counter Demo</h3>
      <p>A simple counter demonstrating manual state updates in KT.js.</p>
      <div style="margin: 24px 0; font-size: 2rem; font-weight: bold; color: #667eea;">Count: {counterRef}</div>
      <div>
        <button on:click={() => counterRef.value--}>-1</button>
        <button on:click={() => counterRef.value++}>+1</button>
        <button on:click={() => (counterRef.value += 10)}>+10</button>
        <button on:click={() => (counterRef.value = 0)}>Reset</button>
      </div>
    </div>
  );
}
