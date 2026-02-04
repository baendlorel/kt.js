import { ref } from 'kt.js';

export function Demo() {
  const show = ref(true);
  const inputValue = ref('Initial Value');
  const htmlContent = ref('<strong>This is bold text</strong>');

  return (
    <div>
      <div k-if={show}>This div is conditionally rendered.</div>
      <input type="text" k-model={inputValue} />
      <p>Input Value: {inputValue}</p>
      <div k-html={htmlContent} />
    </div>
  );
}
