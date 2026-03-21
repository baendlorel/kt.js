import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Card } from '@ktjs/mui';
import { Code } from '../components/Code.js';

import muiCardCode from '../code/ui/mui-card.tsx?raw';

export function MuiCardDemo() {
  const clickCount = ref(0);

  return (
    <div class="demo-section">
      <h2>Card Component</h2>
      <p class="description">Cards group related content with different visual variants.</p>

      <div style="display:grid; gap:16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <Card variant="elevation" elevation={3} style="padding:16px;">
          <h4 style="margin:0 0 8px;">Elevation Card</h4>
          <p class="demo-desc" style="margin:0;">
            Uses shadow depth.
          </p>
        </Card>

        <Card variant="outlined" style="padding:16px;">
          <h4 style="margin:0 0 8px;">Outlined Card</h4>
          <p class="demo-desc" style="margin:0;">
            Uses border style.
          </p>
        </Card>

        <Card variant="contained" raised style="padding:16px;" on:click={() => (clickCount.value += 1)}>
          <h4 style="margin:0 0 8px;">Contained Clickable</h4>
          <p class="demo-desc" style="margin:0;">
            Click to increase count.
          </p>
        </Card>
      </div>

      <div class="button-group">
        <Button variant="outlined" on:click={() => (clickCount.value = 0)}>
          Reset Count
        </Button>
      </div>

      <div class="demo-result">Card click count: {clickCount}</div>
      <Code code={muiCardCode} />
    </div>
  );
}
