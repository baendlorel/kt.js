import { ref } from 'kt.js';

export function Counter() {
  const counterRef = ref(0);

  return (
    <div>
      <h3>Counter Demo</h3>
      <p>A simple counter demonstrating manual state updates in KT.js.</p>
      <div>Count: {counterRef}</div>
      <div>
        <button on:click={() => counterRef.value--}>-1</button>
        <button on:click={() => counterRef.value++}>+1</button>
        <button on:click={() => (counterRef.value += 10)}>+10</button>
        <button on:click={() => (counterRef.value = 0)}>Reset</button>
      </div>
    </div>
  );
}
