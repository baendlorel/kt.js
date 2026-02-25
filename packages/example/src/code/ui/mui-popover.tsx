import { ref } from '@ktjs/core';
import { Button, Popover } from '@ktjs/mui';

export function PopoverExample() {
  const open = ref(false);
  const anchorEl = ref<HTMLButtonElement>();

  return (
    <div>
      <Button ref={anchorEl} on:click={() => (open.value = !open.value)}>
        Toggle Popover
      </Button>
      <Popover open={open} anchorEl={anchorEl} on:close={() => (open.value = false)}>
        <div style="padding:12px 16px;">Popover content</div>
      </Popover>
    </div>
  );
}
