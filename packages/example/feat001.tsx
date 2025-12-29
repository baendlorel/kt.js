import { ref } from '@ktjs/core/jsx';

const FCA: any = function () {
  const count = ref(1);
  const d = <div>{count}</div>;
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
    <FCA />
  </div>
);
document.body.appendChild(c);
