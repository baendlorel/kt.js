import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { BottomNavigation, Button } from '@ktjs/mui';
import { ContentCopyIcon, HomeIcon, MenuIcon } from '@ktjs/mui-icon';
import { Code } from '../components/Code.js';
import muiBottomNavigationCode from '../code/ui/mui-bottom-navigation.tsx?raw';

export function MuiBottomNavigationDemo() {
  const value = ref('home');
  const showLabels = ref(false);

  const options = ref([
    { value: 'home', label: 'Home', icon: <HomeIcon /> },
    { value: 'files', label: 'Files', icon: <ContentCopyIcon /> },
    { value: 'menu', label: 'Menu', icon: <MenuIcon /> },
  ]);

  return (
    <div class="demo-section">
      <h2>BottomNavigation Component</h2>
      <p class="description">Bottom navigation helps users switch between top-level destinations.</p>

      <div class="button-group">
        <Button variant="outlined" size="small" on:click={() => (showLabels.value = !showLabels.value)}>
          Show Labels: {showLabels.toComputed((v) => (v ? 'On' : 'Off'))}
        </Button>
      </div>

      <div style="margin-top: 16px; border: 1px solid rgba(0,0,0,0.12); border-radius: 10px; overflow: hidden;">
        <BottomNavigation k-model={value} options={options} showLabels={showLabels} />
      </div>

      <div class="demo-result">Current destination: {value}</div>
      <Code code={muiBottomNavigationCode} />
    </div>
  );
}
