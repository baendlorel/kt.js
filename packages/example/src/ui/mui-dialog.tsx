import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Dialog, Button } from '@ktjs/mui';

export function MuiDialogDemo() {
  const open = ref(false);

  setInterval(() => {
    console.log('Dialog open state:', open.value);
  }, 1200);

  return (
    <div class="demo-section">
      <Button variant="contained" on:click={() => (open.value = true)}>
        Open Dialog
      </Button>

      <Dialog
        k-model={open}
        title="Dialog Title"
        on:close={() => {
          console.log('Dialog closed');
          open.value = false;
        }}
      >
        <div style="padding: 20px;">
          <p>This is a dialog with some content inside.</p>
          <p style="margin-top: 12px;">You can close it by clicking outside or the close button.</p>

          <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: flex-end;">
            <Button variant="text" on:click={() => (open.value = false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              on:click={() => {
                alert('Action confirmed!');
                open.value = false;
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
