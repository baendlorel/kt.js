import { ref } from '@ktjs/core/jsx';
import { Suspense } from '@ktjs/core';

const FCA = function (): Promise<HTMLElement> {
  const count = ref(1);
  const d = (<div>{count}</div>) as HTMLElement;
  setTimeout(() => {
    count.value += 1;
    const d = <div>{count}</div>;
    document.body.appendChild(d);
  }, 600);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(d);
    }, 1600);
  });
};

const c = (
  <div style="color: red;">
    <Suspense component={FCA} on:click={(e) => console.log(e)} />
  </div>
);
document.body.appendChild(c);
