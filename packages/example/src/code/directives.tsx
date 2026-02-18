import { ref } from 'kt.js';

export function Demo() {
  const show = ref(true);
  const inputValue = ref('Initial Value');
  const htmlContent = ref('<strong>This is bold text</strong>');

  return (
    <div>
      <button on:click={() => (show.value = !show.value)}>Toggle Branch</button>
      <div k-if={show}>This block is rendered by k-if.</div>
      <div k-else>This block is rendered by k-else.</div>
      <input type="text" k-model={inputValue} />
      <p>Input Value: {inputValue}</p>
      <div k-html={htmlContent} />
    </div>
  );
}
