import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';

// Import all feat components
import { FeatHome } from './feats/feat-home.js';
import { FeatCounter } from './feats/feat-counter.js';
import { FeatEvents } from './feats/feat-events.js';
import { FeatKTFor } from './feats/feat-ktfor.js';
import { FeatMui } from './feats/feat-mui.js';

// Navigation structure
interface NavItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

const navItems: { [section: string]: NavItem[] } = {
  'Core Features': [
    {
      id: 'home',
      label: 'Getting Started',
      title: 'Getting Started',
      description: 'Introduction to KT.js framework and core concepts',
    },
    {
      id: 'counter',
      label: 'Counter Demo',
      title: 'Counter Demo',
      description: 'Basic state management with manual DOM updates',
    },
    {
      id: 'events',
      label: 'Event Handling',
      title: 'Event Handling',
      description: 'Working with DOM events using on: syntax',
    },
    {
      id: 'ktfor',
      label: 'KTFor Lists',
      title: 'KTFor Component',
      description: 'Efficient list rendering with key-based DOM reuse',
    },
  ],
  'MUI Components': [
    {
      id: 'mui',
      label: 'All MUI Demos',
      title: 'MUI Component Library',
      description: 'Material-UI inspired components for KT.js',
    },
  ],
};

// Page components mapping
const pageComponents: { [key: string]: () => JSX.Element } = {
  home: FeatHome,
  counter: FeatCounter,
  events: FeatEvents,
  ktfor: FeatKTFor,
  mui: FeatMui,
};

// Create the main app
function createApp() {
  const currentPageRef = ref<string>('home');
  const contentHeaderRef = ref<HTMLDivElement>();

  // Initialize with home page content
  let currentContent = FeatHome();

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
        <h1>KT.js</h1>
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

// Mount the application
const appContainer = document.getElementById('app')!;
appContainer.appendChild(createApp());
