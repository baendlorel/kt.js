import { ref } from 'kt.js';
import './style.css';
import icon from './logo.svg';

const count = ref(0);
const isClicked = count.toComputed((v) => v > 0);

const app = (
  <main class="app">
    <div style="text-align:center">
      <h1>
        Hello{' '}
        <a href="https://baendlorel.github.io/kt.js" target="_blank">
          KT.js
        </a>
      </h1>
      <img src={icon} alt="kt.js logo" width="120px" style="margin:10px auto" />
      <p>Count: {count}</p>
      <p k-if={isClicked}>Clicked!</p>
      <p k-else>Not clicked yet</p>
      <button on:click={() => count.value++}>+1</button>
    </div>
  </main>
);

const root = document.querySelector('#app');
if (!root) {
  throw new Error('Missing #app root element.');
}
root.appendChild(app);
