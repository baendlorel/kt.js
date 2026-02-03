import '@ktjs/core/jsx';
import { HomeIcon, DeleteIcon, ContentCopyIcon, DownloadIcon, MenuIcon } from '@ktjs/mui';

export function MuiIconsDemo() {
  return (
    <div class="demo-section">
      <h2>Icons</h2>
      <p class="description">A collection of commonly used icons.</p>

      <div class="icons-grid">
        <div class="icon-item">
          <HomeIcon />
          <span>Home</span>
        </div>
        <div class="icon-item">
          <DeleteIcon />
          <span>Delete</span>
        </div>
        <div class="icon-item">
          <ContentCopyIcon />
          <span>Copy</span>
        </div>
        <div class="icon-item">
          <DownloadIcon />
          <span>Download</span>
        </div>
        <div class="icon-item">
          <MenuIcon />
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
}