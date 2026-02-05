import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { RadioGroup, FormLabel } from '@ktjs/mui';

export function MuiRadioDemo() {
  const selectedValue = ref<string>('option1');

  const radioGroup = RadioGroup({
    name: 'demo-radio',
    value: 'option1',
    'on:change': (value) => {
      selectedValue.value = value;
    },
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
    ],
  });

  return (
    <div class="demo-section">
      <h2>Radio Component</h2>
      <p class="description">Radio buttons let users select one option from a set.</p>

      <FormLabel>Choose an option:</FormLabel>
      {radioGroup}
      <div class="demo-result">Selected: {selectedValue}</div>
    </div>
  );
}
