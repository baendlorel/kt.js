import { ref } from '@ktjs/core/jsx';

function a() {
  const count = ref(1);
  const d = <div>{count}</div>;
  document.body.appendChild(d);
  setTimeout(() => {
    count.value += 1;
    const d = <div>{count}</div>;
    document.body.appendChild(d);
  }, 2000);
}
a();
