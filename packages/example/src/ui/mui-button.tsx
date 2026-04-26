import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button } from '@ktjs/mui';
import { Delete, Download, Home, Menu } from '@ktjs/mui-icon';

export function MuiButtonDemo() {
  const clickCount = ref<number>(0);
  const counterText = (<span>0</span>) as HTMLSpanElement;

  const handleClick = () => {
    clickCount.value++;
    counterText.textContent = String(clickCount.value);
  };

  return (
    <div class="demo-section">
      <div class="button-group">
        <h3>Variants</h3>
        <Button variant="contained" color="primary" on:click={handleClick}>
          Contained
        </Button>
        <Button variant="outlined" color="primary" on:click={handleClick}>
          Outlined
        </Button>
        <Button variant="text" color="primary" on:click={handleClick}>
          Text
        </Button>
      </div>

      <div class="button-group">
        <h3>Colors</h3>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </div>

      <div class="button-group">
        <h3>Sizes</h3>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>

      <div class="button-group">
        <h3>With Icons</h3>
        <Button variant="contained" startIcon={<Home />}>
          Home
        </Button>
        <Button variant="contained" color="error" startIcon={<Delete />}>
          Delete
        </Button>
        <Button variant="outlined" endIcon={<Download />}>
          Download
        </Button>
        <Button variant="contained" iconOnly>
          <Menu style="width:20px" />
        </Button>
      </div>

      <div class="button-group">
        <h3>States</h3>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" fullWidth>
          Full Width
        </Button>
      </div>
    </div>
  );
}
