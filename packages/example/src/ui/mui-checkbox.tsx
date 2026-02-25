import { ref } from '@ktjs/core';
import { CheckboxGroup, FormLabel } from '@ktjs/mui';

export function MuiCheckboxDemo() {
  const selectedValues = ref<string[]>(['html', 'css']);

  return (
    <div class="demo-section">
      <h2>Checkbox Component</h2>
      <p class="description">Checkboxes allow users to select multiple options from a set.</p>

      <FormLabel>Select technologies:</FormLabel>

      <CheckboxGroup
        k-model={selectedValues}
        options={[
          { value: 'html', label: 'HTML' },
          { value: 'css', label: 'CSS' },
          { value: 'javascript', label: 'JavaScript' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'react', label: 'React (Disabled)', disabled: true },
        ]}
      />

      <div class="demo-result">
        Selected:
        {selectedValues}
        {/* <span k-for="item in selectedValues">{item}</span> */}
      </div>

      <div class="demo-mt">
        <h3>Different Colors</h3>
        <CheckboxGroup
          row
          k-model={ref(['primary'])}
          options={[
            { value: 'primary', label: 'Primary', color: 'primary' },
            { value: 'secondary', label: 'Secondary', color: 'secondary' },
            { value: 'success', label: 'Success', color: 'success' },
            { value: 'error', label: 'Error', color: 'error' },
            { value: 'warning', label: 'Warning', color: 'warning' },
          ]}
        />
      </div>
    </div>
  );
}
