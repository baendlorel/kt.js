import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Select } from '@ktjs/mui';

export function MuiSelectDemo() {
  const selectedValue = ref<string>('apple');

  const options = ref([
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango' },
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
          options={options}
          kt:change={(value) => {}}
        />
      </div>
    </div>
  );
}
