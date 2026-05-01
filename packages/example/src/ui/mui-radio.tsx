import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { RadioGroup, FormLabel } from '@ktjs/mui';

export function MuiRadioDemo() {
  const selectedValue = ref<string>('option1');

  const radioGroup = RadioGroup({
    name: 'demo-radio',
    value: 'option1',
    'on:change': (value) => (selectedValue.value = value),
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
    ],
  });
  const radioGroupRow = RadioGroup({
    name: 'demo-radio',
    value: 'option1',
    row: true,
    'on:change': (value) => (selectedValue.value = value),
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
    ],
  });

  return (
    <div class="demo-section">
      <FormLabel>Choose an option:</FormLabel>
      <div style="margin-top:15px">row: false</div>
      {radioGroup}
      <div style="margin-top:15px">row: true</div>
      {radioGroupRow}
      <div class="demo-result">Selected: {selectedValue}</div>
    </div>
  );
}
