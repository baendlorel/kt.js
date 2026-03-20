import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Modal, modalAlert, modalPrompt } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import muiModalCode from '../code/ui/mui-modal.tsx?raw';

export function MuiModalDemo() {
  const result = ref('No action yet');

  const openAlert = async () => {
    await modalAlert('Saved successfully.', { title: 'System Message' });
    result.state = 'Alert closed';
  };

  const openConfirm = async () => {
    const ok = await Modal.confirm('Delete this record?', { title: 'Confirm Action' });
    result.state = `Confirm result: ${ok ? 'confirmed' : 'canceled'}`;
  };

  const openPrompt = async () => {
    const value = await modalPrompt('Please enter your nickname', {
      title: 'Prompt',
      defaultValue: 'kt-user',
      validator: (v) => (v.trim().length >= 2 ? true : 'At least 2 characters'),
    });
    result.state = value === null ? 'Prompt canceled' : `Prompt value: ${value}`;
  };

  return (
    <div class="demo-section">
      <h2>Modal Helpers</h2>
      <p class="description">Use modal-based APIs to replace native alert, confirm, and prompt.</p>

      <div class="button-group">
        <Button variant="contained" on:click={openAlert}>
          Open Alert
        </Button>
        <Button variant="outlined" on:click={openConfirm}>
          Open Confirm
        </Button>
        <Button variant="text" on:click={openPrompt}>
          Open Prompt
        </Button>
      </div>

      <div class="demo-result">{result}</div>
      <Code code={muiModalCode} />
    </div>
  );
}
