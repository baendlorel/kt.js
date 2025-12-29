import { ref } from '@ktjs/core/jsx';

function FCA() {
  const count = ref(1);
  const d = <div>{count}</div>;
  document.body.appendChild(d);
  setTimeout(() => {
    count.value += 1;
    const d = <div>{count}</div>;
    document.body.appendChild(d);
  }, 2000);
  return d;
}
FCA();

const c = (
  <div style="color: red;">
    <FCA />
  </div>
);
document.body.appendChild(c);
