import { Button, modalAlert, modalConfirm, modalPrompt } from '@ktjs/mui';

export function ModalExample() {
  return (
    <div>
      <Button on:click={async () => await modalAlert('Saved successfully')}>Alert</Button>
      <Button on:click={async () => await modalConfirm('Delete this record?')}>Confirm</Button>
      <Button on:click={async () => await modalPrompt('Enter your nickname')}>Prompt</Button>
    </div>
  );
}
