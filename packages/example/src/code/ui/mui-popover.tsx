import { ref } from '@ktjs/core';
import { Button, Popover } from '@ktjs/mui';

export function PopoverExample() {
  const open = ref(false);

  return (
    <div>
      <Popover
        open={open}
        direction="bottom"
        content={<div style="padding:12px 16px;">Popover content</div>}
        on:close={() => (open.value = false)}
      >
        <Button on:click={() => (open.value = !open.value)}>Toggle Popover</Button>
      </Popover>
    </div>
  );
}
