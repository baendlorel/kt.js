import { Button, Modal } from '@ktjs/mui';

export function ModalExample() {
  return (
    <div>
      <Button on:click={async () => await Modal.alert('Saved successfully')}>Alert</Button>
      <Button on:click={async () => await Modal.confirm('Delete this record?')}>Confirm</Button>
      <Button on:click={async () => await Modal.prompt('Enter your nickname')}>Prompt</Button>
    </div>
  );
}
