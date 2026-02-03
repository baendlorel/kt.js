import { ref } from '@ktjs/core';
import icon from './assets/icon.svg';
import { NavItem } from './src/types/router.js';

import { basicNavItems } from './src/main/index.js';
import { muiNavItems } from './src/ui/index.js';

const navItems: { [section: string]: NavItem[] } = {
  'Core Features': basicNavItems,
  'MUI Components': muiNavItems,
};

// Create the main app
function createApp() {
  const currentPageRef = ref<string>('home');
  const contentHeaderRef = ref<HTMLDivElement>();

  // Initialize with home page content
  let currentContent = basicNavItems[0].component();

  // Find nav item by id
  const findNavItem = (id: string): NavItem | undefined => {
    for (const items of Object.values(navItems)) {
      const found = items.find((item) => item.id === id);
      if (found) return found;
    }
    return undefined;
  };

  // Navigation handler
  const navigateTo = (pageId: string) => {
    if (currentPageRef.value === pageId) return;
    currentPageRef.value = pageId;

    // Update active state in nav items
    document.querySelectorAll('.nav-item').forEach((item) => {
      if (item.getAttribute('data-page') === pageId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Get page info
    const navItem = findNavItem(pageId);
    if (!navItem) return;

    // Update header
    if (contentHeaderRef.value) {
      const headerTitle = contentHeaderRef.value.querySelector('h2');
      const headerDesc = contentHeaderRef.value.querySelector('p');
      if (headerTitle) headerTitle.textContent = navItem.title;
      if (headerDesc) headerDesc.textContent = navItem.description;
    }

    // Create new content and replace current
    const componentFn = pageComponents[pageId];
    if (componentFn) {
      const newContent = componentFn();
      currentContent.replaceWith(newContent);
      currentContent = newContent;

      // Scroll to top
      const contentBody = currentContent.parentElement;
      if (contentBody) contentBody.scrollTop = 0;
    }
  };

  // Create sidebar navigation
  const sidebar = (
    <div class="sidebar">
      <div class="sidebar-header">
        <h1>KT.js (Constructing)</h1>
        <p>Framework Showcase</p>
      </div>
      <div class="nav-menu">
        {Object.entries(navItems).map(([section, items]) => (
          <div>
            <div class="nav-section-title">{section}</div>
            {items.map((item) => (
              <div
                class={`nav-item ${item.id === 'home' ? 'active' : ''}`}
                data-page={item.id}
                on:click={() => navigateTo(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  // Create main content area
  const mainContent = (
    <div class="main-content">
      <div class="content-header" ref={contentHeaderRef}>
        <h2>Getting Started</h2>
        <p>Introduction to KT.js framework and core concepts</p>
      </div>
      <div class="content-body">{currentContent}</div>
    </div>
  );

  return (
    <div class="app-layout">
      {sidebar}
      {mainContent}
    </div>
  );
}

function setIcon() {
  const link = <link rel="shortcut icon" href={icon} type="image/x-icon" />;
  document.head.appendChild(link);
}

// Mount the application
document.getElementById('app')!.appendChild(createApp());
setIcon();
