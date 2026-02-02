import { ref } from 'kt.js';

function KIf() {
  const show = ref(false);
  console.log('KIf component rendered, wait for 2 second to show content.');
  setInterval(() => {
    show.value = !show.value;
  }, 2000);

  return <div k-if={show}>KIf works!</div>;
}

function KModel() {
  const inputValue = ref('Hello, kt.js!');

  let count = 0;
  const interval = setInterval(() => {
    inputValue.value += '!';
    console.log('KModel inputValue updated to:', inputValue.value);
    if (count++ > 3) {
      clearInterval(interval);
    }
  }, 1000);

  const selectValue = ref('option2');
  const checkValue = ref(false);

  setInterval(() => {
    checkValue.value = !checkValue.value;
  }, 1000);

  return (
    <form
      on:submit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const fd = new FormData(form);
        const data = Object.fromEntries(fd.entries());
        console.log(data, 'checkValue.value', checkValue.value);
      }}
    >
      <h3>k-model Example</h3>
      <input name="inputValue" type="text" k-model={inputValue} />
      <select name="selectValue" k-model={selectValue}>
        <option value="option1">1</option>
        <option value="option2">2</option>
        <option value="option3">3</option>
      </select>
      <input type="checkbox" name="checkValue" k-model={checkValue} value="aa" />
      <p>Input Value: {inputValue.value}</p>

      <button style="padding:15px 25px">Submit</button>
    </form>
  );
}

export const FeatDirectives = () => {
  return (
    <div>
      <h2>feat-directives</h2>
      <div style="margin:20px 0px">
        <KIf />
      </div>
      <hr />
      <div style="margin:20px 0px">
        <KModel />
      </div>
    </div>
  );
};
