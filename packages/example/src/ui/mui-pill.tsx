import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Pill } from '@ktjs/mui';
import { HomeIcon } from '@ktjs/mui-icon';
import { Code } from '../components/Code.js';

import muiPillCode from '../code/ui/mui-pill.tsx?raw';

export function MuiPillDemo() {
  const interaction = ref('No interaction yet.');

  return (
    <div class="demo-section">
      <h2>Pill Component</h2>
      <p class="description">Pills (chips) are compact elements for labels, actions, or filters.</p>

      <div class="button-group">
        <Pill label="Default" />
        <Pill label="Primary" color="primary" />
        <Pill label="Outlined" color="secondary" variant="outlined" />
        <Pill label="Small" color="info" size="small" />
        <Pill label="With Icon" color="success" icon={<HomeIcon />} />
        <Pill
          label="Clickable"
          color="warning"
          clickable
          on:click={() => {
            interaction.value = 'Clickable pill pressed';
          }}
        />
        <Pill
          label="Closable"
          color="error"
          on:delete={() => {
            interaction.value = 'Closable pill deleted';
          }}
        />
      </div>

      <div class="demo-result">Last interaction: {interaction}</div>
      <Code code={muiPillCode} />
    </div>
  );
}
