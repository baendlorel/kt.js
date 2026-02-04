import { ref } from 'kt.js';

export function Demo() {
  const show = ref(true);
  const inputValue = ref('Initial Value');
  const htmlContent = ref('<strong>This is bold text</strong>');

  // Examples of using directives

  const kif = <div k-if={show}>This div is conditionally rendered.</div>;
  const kmodel = <input type="text" k-model={inputValue} />;
  const khtml = <div k-html={htmlContent} />;

  return (
    <div>
      {kif}
      {kmodel}
      <p>Input Value: {inputValue}</p>
      {khtml}
    </div>
  );
}
