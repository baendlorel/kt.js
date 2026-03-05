import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Menu } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import muiMenuCode from '../code/ui/mui-menu.tsx?raw';

export function MuiMenuDemo() {
  const open = ref(false);
  const anchorEl = ref<HTMLButtonElement>();
  const selected = ref('none');
  const autoClose = ref(true);

  const actions = ref([
    { value: 'rename', label: 'Rename' },
    { value: 'duplicate', label: 'Duplicate' },
    { value: 'archive', label: 'Archive' },
    { value: 'delete', label: 'Delete', disabled: true },
  ]);

  return (
    <div class="demo-section">
      <h2>Menu Component</h2>
      <p class="description">Menu displays a list of actions anchored to a trigger element.</p>

      <div class="button-group">
        <Button ref={anchorEl} variant="contained" on:click={() => (open.value = !open.value)}>
          {open.toComputed((value) => (value ? 'Close Menu' : 'Open Menu'))}
        </Button>
        <Button variant="outlined" on:click={() => (autoClose.value = !autoClose.value)}>
          Auto Close: {autoClose.toComputed((value) => (value ? 'On' : 'Off'))}
        </Button>
      </div>

      <Menu
        open={open}
        anchorEl={anchorEl}
        options={actions}
        autoClose={autoClose}
        on:close={() => {
          open.value = false;
        }}
        on:select={(value) => {
          selected.value = value;
        }}
      />

      <div class="demo-result">Last action: {selected}</div>
      <Code code={muiMenuCode} />
    </div>
  );
}
