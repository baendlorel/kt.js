import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, KTMuiSelectOption, Select } from '@ktjs/mui';

export function MuiSelectDemo() {
  const selectedValue = ref<string>('apple');

  const options = ref<KTMuiSelectOption[]>([
    <h4 style="color:gray; margin: 15px 5px 12px 5px">Small Fruits</h4>,
    { value: 'grape', label: 'Grape' },
    <h4 style="color:gray; margin: 15px 5px 12px 5px">Big Fruits</h4>,
    { value: 'mango', label: 'Mango' },
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]);

  return (
    <div class="demo-section">
      <h2>Select Component</h2>
      <p class="demo-desc">Select components let users pick a value from a list.</p>

      <Select k-model={selectedValue} label="Fruits" placeholder="Select a fruit" options={options}></Select>
      <div class="demo-btn-group">
        <Button on:click={() => (options.value = [{ label: 'Watermelon', value: 'watermelon' }])}>
          Change Options
        </Button>
      </div>
      <div class="demo-result">Selected: {selectedValue}</div>

      <div style="margin-top: 20px;">
        <Select
          style="width:400px"
          label="Disabled Select"
          disabled
          value="banana"
          options={[{ label: 'Watermelon', value: 'watermelon' }]}
        />
      </div>
    </div>
  );
}
