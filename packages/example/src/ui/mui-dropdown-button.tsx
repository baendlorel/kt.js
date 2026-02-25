import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { DropdownButton } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiDropdownButtonCode from '../code/ui/mui-dropdown-button.tsx?raw';

export function MuiDropdownButtonDemo() {
  const selectedAction = ref('None');
  const actions = ref([
    { value: 'open', label: 'Open File' },
    { value: 'save', label: 'Save' },
    { value: 'share', label: 'Share Link' },
    { value: 'delete', label: 'Delete (Disabled)', disabled: true },
  ]);

  return (
    <div class="demo-section">
      <h2>DropdownButton Component</h2>
      <p class="description">Combines a button trigger with a quick action menu.</p>

      <div class="button-group">
        <DropdownButton
          label="Quick Actions"
          options={actions}
          variant="contained"
          color="primary"
          on:select={(value, option) => {
            const label = typeof option.label === 'string' ? option.label : value;
            selectedAction.value = `${label} (${value})`;
          }}
        />
        <DropdownButton label="Disabled" options={actions} variant="outlined" color="secondary" disabled />
      </div>

      <div class="demo-result">Selected action: {selectedAction}</div>
      <Code code={muiDropdownButtonCode} />
    </div>
  );
}
