import { ref } from '@ktjs/core';
import { Button, Menu } from '@ktjs/mui';

export function MenuExample() {
  const open = ref(false);

  return (
    <div>
      <Menu
        open={open}
        options={[
          { value: 'rename', label: 'Rename' },
          { value: 'duplicate', label: 'Duplicate' },
        ]}
        on:close={() => (open.value = false)}
      >
        <Button on:click={() => (open.value = !open.value)}>Toggle Menu</Button>
      </Menu>
    </div>
  );
}
