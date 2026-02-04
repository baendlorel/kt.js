import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Select } from '@ktjs/mui';

export function MuiSelectDemo() {
  const selectedValue = ref<string>('apple');

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
    },
  });

  return (
    <div class="demo-section">
      <h2>Select Component</h2>
      <p class="demo-desc">Select components let users pick a value from a list.</p>

      {select}
      <div class="demo-result">Selected: {selectedValue}</div>

      <div style="margin-top: 20px;">
        <Select label="Disabled Select" disabled value="banana" options={options} kt:change={(value) => {}} />
      </div>
    </div>
  );
}
