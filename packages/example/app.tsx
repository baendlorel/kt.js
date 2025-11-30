import { jsx } from '../jsx/src/jsx-runtime.js';

// Simple counter component
function createCounter() {
  let count = 0;

  const counterDisplay = (<span class="counter">{count}</span>) as HTMLSpanElement;

  const incrementBtn = <button>Increment</button>;

  const decrementBtn = <button>Decrement</button>;

  incrementBtn.onclick = () => {
    count++;
    counterDisplay.textContent = String(count);
  };

  decrementBtn.onclick = () => {
    count--;
    counterDisplay.textContent = String(count);
  };

  return (
    <div class="card">
      <h2>Counter Demo</h2>
      <p>Count: {counterDisplay}</p>
      <div>
        {decrementBtn}
        {incrementBtn}
      </div>
    </div>
  );
}

// List rendering demo
function createList() {
  const items = ['Apple', 'Banana', 'Orange', 'Grape'];

  return (
    <div class="card">
      <h2>List Demo</h2>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Event handler demo
function createEventDemo() {
  return (
    <div class="card">
      <h2>Event Handler Demo</h2>
      <button onclick={() => alert('Hello from JSX!')}>Click me!</button>
    </div>
  );
}

// Main app
const app = (
  <div>
    <h1>@ktjs/jsx Demo</h1>
    <p>Testing JSX support for KT.js</p>
    {createCounter()}
    {createList()}
    {createEventDemo()}
  </div>
);

document.getElementById('app')!.appendChild(app);
