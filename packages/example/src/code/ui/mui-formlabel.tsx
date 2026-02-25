import { ref } from '@ktjs/core';
import { Button, FormLabel } from '@ktjs/mui';

export function FormLabelExample() {
  const required = ref(true);

  return (
    <div>
      <FormLabel required={required}>Account Name</FormLabel>
      <input type="text" placeholder="Type here..." />
      <Button variant="outlined" on:click={() => (required.value = !required.value)}>
        Toggle Required
      </Button>
    </div>
  );
}
