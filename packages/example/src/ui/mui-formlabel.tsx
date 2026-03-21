import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, FormLabel } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiFormLabelCode from '../code/ui/mui-formlabel.tsx?raw';

export function MuiFormLabelDemo() {
  const required = ref(true);
  const focused = ref(false);
  const error = ref(false);
  const disabled = ref(false);

  return (
    <div class="demo-section">
      <h2>FormLabel Component</h2>
      <p class="description">Displays label states for forms and fieldsets.</p>

      <div class="button-group">
        <Button variant="outlined" on:click={() => (required.value = !required.value)}>
          Required: {required}
        </Button>
        <Button variant="outlined" on:click={() => (focused.value = !focused.value)}>
          Focused: {focused}
        </Button>
        <Button variant="outlined" on:click={() => (error.value = !error.value)}>
          Error: {error}
        </Button>
        <Button variant="outlined" on:click={() => (disabled.value = !disabled.value)}>
          Disabled: {disabled}
        </Button>
      </div>

      <div class="demo-block" style="display:flex; flex-direction:column; gap:16px;">
        <div style="display:flex; flex-direction:column; gap:8px;">
          <FormLabel required={required} focused={focused} error={error} disabled={disabled}>
            Account Name
          </FormLabel>
          <input
            type="text"
            placeholder="Type here..."
            disabled={disabled}
            style="height:36px; border-radius:8px; border:1px solid #cfd8e3; padding:0 12px;"
          />
        </div>

        <fieldset style="border:1px solid #d8e2f0; border-radius:10px; padding:12px 14px;">
          <FormLabel component="legend" required>
            Notification Channels
          </FormLabel>
          <label style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" checked />
            Email
          </label>
        </fieldset>
      </div>

      <Code code={muiFormLabelCode} />
    </div>
  );
}
