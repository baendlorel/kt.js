import { ref } from '@ktjs/core';
import { Button, Menu } from '@ktjs/mui';

export function MenuExample() {
  const open = ref(false);
  const anchorEl = ref<HTMLButtonElement>();

  return (
    <div>
      <Button ref={anchorEl} on:click={() => (open.value = !open.value)}>
        Toggle Menu
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        options={[
          { value: 'rename', label: 'Rename' },
          { value: 'duplicate', label: 'Duplicate' },
        ]}
        on:close={() => (open.value = false)}
      />
    </div>
  );
}
