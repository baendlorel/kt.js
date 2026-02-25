import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Popover } from '@ktjs/mui';
import type { KTMuiPopoverCloseReason } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiPopoverCode from '../code/ui/mui-popover.tsx?raw';

export function MuiPopoverDemo() {
  const open = ref(false);
  const anchorEl = ref<HTMLButtonElement>();
  const closeReason = ref<KTMuiPopoverCloseReason | 'manual' | 'none'>('none');

  const closePopover = (reason: KTMuiPopoverCloseReason | 'manual') => {
    closeReason.value = reason;
    open.value = false;
  };

  return (
    <div class="demo-section">
      <h2>Popover Component</h2>
      <p class="description">Popover displays floating content anchored to another element.</p>

      <div class="button-group">
        <Button
          ref={anchorEl}
          variant="contained"
          on:click={() => {
            open.value = !open.value;
          }}
        >
          {open.toComputed((value) => (value ? 'Close Popover' : 'Open Popover'))}
        </Button>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        on:close={(reason) => {
          closeReason.value = reason;
        }}
      >
        <div style="padding:12px 16px; min-width:220px;">
          <h4 style="margin:0 0 8px;">Project Actions</h4>
          <p class="demo-desc" style="margin:0 0 12px;">
            This content is anchored to the trigger button.
          </p>
          <Button variant="text" on:click={() => closePopover('manual')}>
            Dismiss
          </Button>
        </div>
      </Popover>

      <div class="demo-result">Last close reason: {closeReason}</div>
      <Code code={muiPopoverCode} />
    </div>
  );
}
