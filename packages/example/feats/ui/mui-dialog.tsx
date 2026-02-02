import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Dialog, Button } from '@ktjs/mui';
import type { KTMuiDialog } from '@ktjs/mui';

export function MuiDialogDemo() {
  const dialogRef = ref<KTMuiDialog>();

  const openDialog = () => {
    dialogRef.value.open = true;
  };

  const handleClose = () => {
    console.log('Dialog closed');
    dialogRef.value.open = false;
  };

  return (
    <div class="demo-section">
      <h2>Dialog Component</h2>
      <p class="description">Dialogs inform users about a task and can contain critical information.</p>

      <Button variant="contained" on:click={openDialog}>
        Open Dialog
      </Button>

      <Dialog ref={dialogRef} title="Dialog Title" kt:close={handleClose}>
        <div style="padding: 20px;">
          <p>This is a dialog with some content inside.</p>
          <p style="margin-top: 12px;">You can close it by clicking outside or the close button.</p>

          <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: flex-end;">
            <Button variant="text" on:click={() => (dialogRef.value.open = false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              on:click={() => {
                alert('Action confirmed!');
                dialogRef.value.open = false;
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