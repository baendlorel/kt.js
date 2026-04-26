import '@ktjs/core/jsx';
import { Home, Delete, ContentCopy, Download, Menu } from '@ktjs/mui-icon';

export function MuiIconsDemo() {
  return (
    <div class="demo-section">
      <div class="icons-grid">
        <div class="icon-item">
          <Home />
          <span>Home</span>
        </div>
        <div class="icon-item">
          <Delete />
          <span>Delete</span>
        </div>
        <div class="icon-item">
          <ContentCopy />
          <span>Copy</span>
        </div>
        <div class="icon-item">
          <Download />
          <span>Download</span>
        </div>
        <div class="icon-item">
          <Menu />
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
}
