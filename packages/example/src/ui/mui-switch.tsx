import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Switch } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiSwitchCode from '../code/ui/mui-switch.tsx?raw';

export function MuiSwitchDemo() {
  const darkMode = ref(false);
  const autoSave = ref(true);
  const lastChanged = ref('None');

  const reset = () => {
    darkMode.value = false;
    autoSave.value = true;
    lastChanged.value = 'Reset to default values';
  };

  return (
    <div class="demo-section">
      <h2>Switch Component</h2>
      <p class="description">Switches toggle a value between on and off states.</p>

      <div class="demo-flex-gap-column">
        <Switch
          k-model={darkMode}
          label="Dark Mode"
          color="primary"
          on:change={(checked) => {
            lastChanged.value = `Dark Mode: ${checked}`;
          }}
        />
        <Switch
          k-model={autoSave}
          label="Auto Save"
          color="success"
          on:change={(checked) => {
            lastChanged.value = `Auto Save: ${checked}`;
          }}
        />
        <Switch checked disabled label="Disabled Switch" />
      </div>

      <div class="button-group">
        <Button variant="outlined" on:click={reset}>
          Reset
        </Button>
      </div>

      <div class="demo-result">
        Dark Mode: {darkMode} | Auto Save: {autoSave} | Last Change: {lastChanged}
      </div>
      <Code code={muiSwitchCode} />
    </div>
  );
}
