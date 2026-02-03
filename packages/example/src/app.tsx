import './styles.css';
import { ref } from '@ktjs/core';
import icon from '../assets/icon.svg';
import { NavItem } from './types/router.js';

import { basicNavItems } from './main/index.js';
import { muiNavItems } from './ui/index.js';

const navItems: { [section: string]: NavItem[] } = {
  'Core Features': basicNavItems,
  'MUI Components': muiNavItems,
};

// Create the main app
function createApp() {
  const home = basicNavItems[0];

  const currentPageRef = ref<string>('home');
  const headerTitleRef = ref(home.title);
  const headerDescRef = ref(home.description);

  // Initialize with home page content
  const view = ref(basicNavItems[0].component());

  // Find nav item by id
  const findNavItem = (id: string): NavItem | undefined => {
    for (const items of Object.values(navItems)) {
      const found = items.find((item) => item.id === id);
      if (found) {
        return found;
      }
    }
    return undefined;
  };

  // Navigation handler
  const navigateTo = (pageId: string) => {
    if (currentPageRef.value === pageId) {
      return;
    }
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
    if (!navItem) {
      return;
    }

    // Update header
    headerTitleRef.value = navItem.title;
    headerDescRef.value = navItem.description;

    // Create new content and replace current
    view.value = navItem.component();

    // Scroll to top
    const contentBody = view.value.parentElement;
    if (contentBody) {
      contentBody.scrollTop = 0;
    }
  };

  return (
    <div class="app-layout">
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
      <div class="main-content">
        <div class="content-header">
          <h2>{headerTitleRef}</h2>
          <p>Introduction to KT.js framework and core concepts</p>
        </div>
        <div class="content-body">{view}</div>
      </div>
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
