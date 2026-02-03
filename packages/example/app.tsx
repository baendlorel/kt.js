import { ref } from '@ktjs/core';
import icon from './assets/icon.svg';

// Import all feat components
import { FeatHome } from './src/main/feat-home.js';
import { FeatCounter } from './src/main/feat-counter.js';
import { FeatMainUsage } from './src/main/BasicUsage.js';
// Import MUI component demos
import { MuiButtonDemo } from './src/ui/mui-button.js';
import { MuiAlertDemo } from './src/ui/mui-alert.js';
import { MuiTextFieldDemo } from './src/ui/mui-textfield.js';
import { MuiTextFieldRefDemo } from './src/ui/mui-textfield-ref-demo.js';
import { MuiDialogDemo } from './src/ui/mui-dialog.js';
import { MuiProgressDemo } from './src/ui/mui-progress.js';
import { MuiRadioDemo } from './src/ui/mui-radio.js';
import { MuiCheckboxDemo } from './src/ui/mui-checkbox.js';
import { MuiSelectDemo } from './src/ui/mui-select.js';
import { MuiIconsDemo } from './src/ui/mui-icons.js';

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
      id: 'basic-usage',
      label: 'Basic Usage',
      title: 'Basic Usage',
      description: 'Directives, Event Handling, and KTFor list rendering',
    },
    {
      id: 'counter',
      label: 'Counter Demo',
      title: 'Counter Demo',
      description: 'Basic state management with manual DOM updates',
    },
  ],
  'MUI Components': [
    {
      id: 'mui-button',
      label: 'Button',
      title: 'MUI Button',
      description: 'Material-UI Button component',
    },
    {
      id: 'mui-alert',
      label: 'Alert',
      title: 'MUI Alert',
      description: 'Material-UI Alert component',
    },
    {
      id: 'mui-textfield',
      label: 'TextField',
      title: 'MUI TextField',
      description: 'Material-UI TextField component',
    },
    {
      id: 'mui-textfield-ref',
      label: 'TextField (Reactive Refs)',
      title: 'MUI TextField with Reactive Refs',
      description: 'Demonstrates all TextField properties controlled via KTRefs',
    },
    {
      id: 'mui-dialog',
      label: 'Dialog',
      title: 'MUI Dialog',
      description: 'Material-UI Dialog component',
    },
    {
      id: 'mui-progress',
      label: 'Progress',
      title: 'MUI LinearProgress',
      description: 'Material-UI Progress indicator',
    },
    {
      id: 'mui-radio',
      label: 'Radio',
      title: 'MUI Radio',
      description: 'Material-UI Radio component',
    },
    {
      id: 'mui-checkbox',
      label: 'Checkbox',
      title: 'MUI Checkbox',
      description: 'Material-UI Checkbox component',
    },
    {
      id: 'mui-select',
      label: 'Select',
      title: 'MUI Select',
      description: 'Material-UI Select component',
    },
    {
      id: 'mui-icons',
      label: 'Icons',
      title: 'MUI Icons',
      description: 'Material-UI Icons',
    },
  ],
};

// Page components mapping
const pageComponents: { [key: string]: () => JSX.Element } = {
  home: FeatHome,
  'basic-usage': FeatMainUsage,
  counter: FeatCounter,
  'mui-button': MuiButtonDemo,
  'mui-alert': MuiAlertDemo,
  'mui-textfield': MuiTextFieldDemo,
  'mui-textfield-ref': MuiTextFieldRefDemo,
  'mui-dialog': MuiDialogDemo,
  'mui-progress': MuiProgressDemo,
  'mui-radio': MuiRadioDemo,
  'mui-checkbox': MuiCheckboxDemo,
  'mui-select': MuiSelectDemo,
  'mui-icons': MuiIconsDemo,
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
