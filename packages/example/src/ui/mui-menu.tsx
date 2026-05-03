import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, KTMuiMenuContent, Menu } from '@ktjs/mui';
import { Code } from '../components/Code.js';
import muiMenuCode from '../code/ui/mui-menu.tsx?raw';

export function MuiMenuDemo() {
  const open = ref(false);
  const selected = ref('none');
  const autoClose = ref(true);

  const actions = ref<KTMuiMenuContent[]>([
    { value: 'rename', label: 'Rename' },
    { value: 'duplicate', label: 'Duplicate' },
    { value: 'archive', label: 'Archive' },
    { value: 'delete', label: 'Delete', disabled: true },
  ]);

  return (
    <div class="demo-section">
      <div class="button-group">
        <Menu
          open={open}
          options={actions}
          autoClose={autoClose}
          on:close={() => (open.value = false)}
          on:select={(value) => (selected.value = value)}
        >
          <Button variant="contained" on:click={() => (open.value = !open.value)}>
            {open.map((value) => (value ? 'Close Menu' : 'Open Menu'))}
          </Button>
        </Menu>
        <Button variant="outlined" on:click={() => (autoClose.value = !autoClose.value)}>
          Auto Close: {autoClose.map((value) => (value ? 'On' : 'Off'))}
        </Button>
      </div>

      <div class="demo-result">Last action: {selected}</div>
      <Code code={muiMenuCode} />
    </div>
  );
}
