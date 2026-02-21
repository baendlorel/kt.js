import { ref } from 'kt.js';

import reactiveCode from '../code/reactive.tsx?raw';
import { Code } from '../components/Code.js';

export function Reactivity() {
  // # attr refs
  const styleRef = ref('width: 10%;height:20px;background-color:#1890ff;transition: width 1s;');
  const styleWidthRef = ref(10);
  setInterval(() => {
    styleWidthRef.value = Math.floor(Math.random() * 100);
    styleRef.value = `width: ${styleWidthRef.value}%;height:20px;background-color:#1890ff;transition: width 1s;`;
  }, 1000);

  const childRef = ref('Initial Child');
  setInterval(() => {
    childRef.value = childRef.value === 'Updated Child' ? 'Initial Child' : 'Updated Child';
  }, 1000);

  return (
    <div>
      <div class="demo-section">
        <h3>
          <code>ref</code> and <code>computed</code>
        </h3>
        <p>
          Note that you should manually specify the dependencies of a <code>computed</code> value.
        </p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3>Attribute Ref</h3>
        <p>Make attributes reactive</p>
        <div style={styleRef}></div>
        <div class="demo-result">Current Width: {styleWidthRef}</div>
        <Code code={`<div style={styleRef}></div>`} />
      </div>
      <div class="demo-section">
        <h3>Children</h3>
        <p>Make children reactive.</p>
        <div class="demo-result">{childRef}</div>
        <Code code={`<div>{childRef}</div>`} />
      </div>
    </div>
  );
}
