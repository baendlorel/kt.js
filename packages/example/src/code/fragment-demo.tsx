import { Fragment, ref } from 'kt.js';

const labelsRef = ref(['Header', 'Content', 'Actions']);
const childrenRef = ref(
  labelsRef.value.map((label, index) => (
    <span class="fragment-pill">
      <span class="fragment-pill__index">#{index + 1}</span>
      {label}
    </span>
  )),
);

const sync = (nextLabels: string[]) => {
  labelsRef.value = nextLabels;
  childrenRef.value = nextLabels.map((label, index) => (
    <span class="fragment-pill">
      <span class="fragment-pill__index">#{index + 1}</span>
      {label}
    </span>
  ));
};

export function FragmentDemo() {
  return (
    <div>
      <>
        <h4>Shorthand Fragment</h4>
        <p>These nodes render as siblings without an extra wrapper.</p>
      </>

      <Fragment children={childrenRef} />

      <button on:click={() => sync([...labelsRef.value, `Section ${labelsRef.value.length + 1}`])}>Add Item</button>
    </div>
  );
}
