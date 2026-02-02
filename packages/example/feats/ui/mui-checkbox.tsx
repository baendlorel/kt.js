import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { CheckboxGroup, FormLabel } from '@ktjs/mui';

export function MuiCheckboxDemo() {
  const selectedValues = ref<string[]>(['html', 'css']);
  const outputText = <div class="output-text">Selected: html, css</div>;

  const checkboxGroup = CheckboxGroup({
    value: ['html', 'css'],
    'kt:change': (values) => {
      selectedValues.value = values;
      outputText.textContent = values.length > 0 ? `Selected: ${values.join(', ')}` : 'None selected';
    },
    options: [
      { value: 'html', label: 'HTML' },
      { value: 'css', label: 'CSS' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'react', label: 'React (Disabled)', disabled: true },
    ],
  });

  return (
    <div class="demo-section">
      <h2>Checkbox Component</h2>
      <p class="description">Checkboxes allow users to select multiple options from a set.</p>

      <FormLabel>Select technologies:</FormLabel>
      {checkboxGroup}
      {outputText}

      <div style="margin-top: 20px;">
        <h3>Different Colors</h3>
        <CheckboxGroup
          row
          value={['primary']}
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