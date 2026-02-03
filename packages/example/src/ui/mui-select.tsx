import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Select } from '@ktjs/mui';

export function MuiSelectDemo() {
  const selectedValue = ref<string>('apple');
  const outputText = <div class="output-text">Selected: apple</div>;

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango' },
  ];

  const select = Select({
    label: 'Choose a fruit',
    value: 'apple',
    options,
    'kt:change': (value) => {
      selectedValue.value = value;
      outputText.textContent = `Selected: ${value}`;
    },
  });

  return (
    <div class="demo-section">
      <h2>Select Component</h2>
      <p class="description">Select components let users pick a value from a list.</p>

      {select}
      {outputText}

      <div style="margin-top: 20px;">
        <Select label="Disabled Select" disabled value="banana" options={options} kt:change={(value) => {}} />
      </div>
    </div>
  );
}