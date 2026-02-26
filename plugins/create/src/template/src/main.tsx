import { ref } from 'kt.js';
import './style.css';

const count = ref(0);

const app = (
  <main class="app">
    <h1>Hello KT.js</h1>
    <p>Count: {count}</p>
    <button on:click={() => count.value++}>+1</button>
  </main>
);

const root = document.querySelector('#app');
if (!root) {
  throw new Error('Missing #app root element.');
}
root.appendChild(app);
