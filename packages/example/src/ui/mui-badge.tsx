import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Badge, Button } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiBadgeCode from '../code/ui/mui-badge.tsx?raw';

export function MuiBadgeDemo() {
  const unread = ref(5);
  const showZero = ref(false);

  return (
    <div class="demo-section">
      <h2>Badge Component</h2>
      <p class="description">Badges show counts and status indicators on top of content.</p>

      <div class="button-group" style="align-items:center;">
        <Badge badgeContent={unread} color="error" max={99} showZero={showZero}>
          <Button variant="outlined">Inbox</Button>
        </Badge>
        <Button variant="contained" on:click={() => (unread.value += 1)}>
          +1
        </Button>
        <Button variant="outlined" on:click={() => (unread.value = 0)}>
          Mark all read
        </Button>
        <Button variant="text" on:click={() => (showZero.value = !showZero.value)}>
          Show Zero: {showZero}
        </Button>
      </div>

      <div class="button-group" style="align-items:center;">
        <Badge variant="dot" color="success" overlap="circular">
          <span
            style="display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:50%; background:#dbeafe; color:#1d4ed8; font-weight:700;"
          >
            A
          </span>
        </Badge>
        <Badge badgeContent="new" color="info" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <span style="padding:8px 12px; border-radius:8px; border:1px solid #d8e2f0;">Release</span>
        </Badge>
      </div>

      <div class="demo-result">Unread count: {unread}</div>
      <Code code={muiBadgeCode} />
    </div>
  );
}
