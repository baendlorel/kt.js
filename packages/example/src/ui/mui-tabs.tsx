import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, type KTMuiTabOption, Tabs } from '@ktjs/mui';
import { ContentCopyIcon, DownloadIcon, HomeIcon, MenuIcon } from '@ktjs/mui-icon';
import { Code } from '../components/Code.js';
import muiTabsCode from '../code/ui/mui-tabs.tsx?raw';

export function MuiTabsDemo() {
  const model = ref('overview');
  const orientation = ref<'horizontal' | 'vertical'>('horizontal');
  const variant = ref<'standard' | 'scrollable' | 'fullWidth'>('standard');

  const options = ref<KTMuiTabOption[]>([
    { value: 'overview', label: 'Overview', icon: <HomeIcon /> },
    { value: 'files', label: 'Files', icon: <ContentCopyIcon /> },
    { value: 'downloads', label: 'Downloads', icon: <DownloadIcon /> },
    { value: 'settings', label: 'Settings', icon: <MenuIcon />, disabled: true },
  ]);

  return (
    <div class="demo-section">
      <h2>Tabs Component</h2>
      <p class="description">Tabs organize content into multiple switchable views.</p>

      <div class="button-group">
        <Button
          variant="outlined"
          size="small"
          on:click={() => (orientation.value = orientation.value === 'horizontal' ? 'vertical' : 'horizontal')}
        >
          Orientation: {orientation}
        </Button>
        <Button
          variant="outlined"
          size="small"
          on:click={() =>
            (variant.value =
              variant.value === 'standard' ? 'scrollable' : variant.value === 'scrollable' ? 'fullWidth' : 'standard')
          }
        >
          Variant: {variant}
        </Button>
        <Button
          variant="outlined"
          size="small"
          on:click={() => {
            options.value = [
              { value: 'overview', label: 'Overview', icon: <HomeIcon /> },
              { value: 'history', label: 'History', icon: <ContentCopyIcon /> },
              { value: 'downloads', label: 'Downloads', icon: <DownloadIcon /> },
            ];
          }}
        >
          Replace Options
        </Button>
      </div>

      <div style="margin-top: 16px;">
        <Tabs
          k-model={model}
          options={options}
          variant={variant}
          orientation={orientation}
          indicatorColor="secondary"
          textColor="primary"
        />
      </div>

      <div class="demo-result">Current tab: {model}</div>
      <Code code={muiTabsCode} />
    </div>
  );
}
