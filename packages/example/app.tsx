import { KTHTMLElement, ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, Home, Delete, Download, Menu } from '@ktjs/mui';
import { createKTForDemo } from './feats/feat-ktfor';

// Navigation items
interface NavItem {
  id: string;
  label: string;
  description: string;
}

const navItems: { [section: string]: NavItem[] } = {
  'Core Features': [
    { id: 'home', label: 'Getting Started', description: 'Introduction to KT.js framework' },
    { id: 'counter', label: 'Counter Demo', description: 'Basic state management and updates' },
    { id: 'ktfor', label: 'KTFor Component', description: 'Efficient list rendering with key-based updates' },
    { id: 'events', label: 'Event Handling', description: 'Working with DOM events' },
  ],
  'MUI Components': [
    { id: 'mui-buttons', label: 'Buttons', description: 'Button variants and styles' },
    { id: 'mui-alerts', label: 'Alerts', description: 'Alert notifications' },
    { id: 'mui-textfield', label: 'TextField', description: 'Input fields' },
    { id: 'mui-dialog', label: 'Dialog', description: 'Modal dialogs' },
    { id: 'mui-progress', label: 'Progress', description: 'Progress indicators' },
    { id: 'mui-radio', label: 'Radio', description: 'Radio button groups' },
    { id: 'mui-select', label: 'Select', description: 'Dropdown selections' },
    { id: 'mui-icons', label: 'Icons', description: 'Icon collection' },
  ],
};

// Demo pages
function createHomePage() {
  return (
    <div>
      <div class="demo-section">
        <h3>Welcome to KT.js Framework</h3>
        <p>
          KT.js is a lightweight, direct DOM manipulation framework that <strong>never re-renders</strong>. Unlike React
          or Vue which use virtual DOM and automatic re-rendering, KT.js gives you fine-grained control over when and
          how DOM updates happen.
        </p>
        <p>
          <strong>Core Philosophy:</strong> Create DOM elements once, then update them manually when needed using the{' '}
          <code>redraw()</code> method. No automatic reactivity, no hidden magic - just direct control.
        </p>
      </div>

      <div class="demo-section">
        <h3>Key Features</h3>
        <ul style="margin-left: 24px; color: #666; line-height: 2;">
          <li>Direct DOM manipulation without virtual DOM overhead</li>
          <li>JSX support with TypeScript</li>
          <li>Manual redraw mechanism for precise control</li>
          <li>Efficient list rendering with KTFor component</li>
          <li>Material-UI inspired component library</li>
          <li>Client-side routing with @ktjs/router</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>Quick Example</h3>
        <p style="color: #666;">Here's how you create and update elements in KT.js:</p>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; overflow-x: auto;">
          {`const div = (<div>Initial content</div>) as KTHTMLElement;
div.redraw(undefined, 'Updated content'); // Manual update

// Function component
function Counter({ count = 0 }) {
  return (
    <div>
      <span>Count: {count}</span>
      <button on:click={() => element.redraw({ count: count + 1 })}>+</button>
    </div>
  );
}
const element = (<Counter />) as KTHTMLElement;`}
        </pre>
      </div>
    </div>
  );
}

function createCounterDemo() {
  let count = 0;
  const counterDisplay = (<span class="counter">{count}</span>) as HTMLSpanElement;

  return (
    <div class="demo-section">
      <h3>Counter Demo</h3>
      <p>A simple counter demonstrating manual state updates.</p>
      <div style="margin: 20px 0;">
        <p style="font-size: 1.5rem;">Count: {counterDisplay}</p>
      </div>
      <div>
        <button
          on:click={() => {
            count--;
            counterDisplay.textContent = String(count);
          }}
        >
          Decrement
        </button>
        <button
          on:click={() => {
            count++;
            counterDisplay.textContent = String(count);
          }}
        >
          Increment
        </button>
        <button
          on:click={() => {
            count = 0;
            counterDisplay.textContent = String(count);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function createEventsDemo() {
  const output = (<div class="output-text">Click a button to see the event</div>) as HTMLDivElement;

  return (
    <div class="demo-section">
      <h3>Event Handling Demo</h3>
      <p>
        KT.js uses <code>on:eventName</code> syntax for event handlers.
      </p>

      <div style="margin: 20px 0;">
        <button on:click={() => (output.textContent = `Clicked at ${new Date().toLocaleTimeString()}`)}>
          Click Event
        </button>
        <button on:dblclick={() => (output.textContent = 'Double clicked!')}>Double Click</button>
        <button
          on:mouseenter={() => (output.textContent = 'Mouse entered!')}
          on:mouseleave={() => (output.textContent = 'Mouse left!')}
        >
          Hover Me
        </button>
      </div>

      {output}
    </div>
  );
}

// MUI Buttons Demo
function createMuiButtonsDemo() {
  const clickCount = ref<number>(0);
  const counterText = (<span>0</span>) as HTMLSpanElement;

  const handleClick = () => {
    clickCount.value++;
    counterText.textContent = String(clickCount.value);
  };

  return (
    <div>
      <div class="demo-section">
        <h3>Button Variants</h3>
        <p>Click count: {counterText}</p>
        <div class="button-group">
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
      </div>

      <div class="demo-section">
        <h3>Button Colors</h3>
        <div class="button-group">
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
      </div>

      <div class="demo-section">
        <h3>With Icons</h3>
        <div class="button-group">
          <Button variant="contained" startIcon={<Home />}>
            Home
          </Button>
          <Button variant="contained" color="error" startIcon={<Delete />}>
            Delete
          </Button>
          <Button variant="outlined" endIcon={<Download />}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main App
export function createApp() {
  const currentPageRef = ref<string>('home');
  const contentBodyRef = ref<HTMLDivElement>();
  const contentHeaderRef = ref<HTMLDivElement>();

  // Page content mapping
  const pages: { [key: string]: { title: string; description: string; content: () => HTMLElement } } = {
    home: {
      title: 'Getting Started',
      description: 'Introduction to KT.js framework',
      content: createHomePage,
    },
    counter: {
      title: 'Counter Demo',
      description: 'Basic state management and manual updates',
      content: createCounterDemo,
    },
    ktfor: {
      title: 'KTFor Component',
      description: 'Efficient list rendering with key-based DOM reuse',
      content: createKTForDemo,
    },
    events: {
      title: 'Event Handling',
      description: 'Working with DOM events in KT.js',
      content: createEventsDemo,
    },
    'mui-buttons': {
      title: 'MUI Buttons',
      description: 'Button components with various styles',
      content: createMuiButtonsDemo,
    },
    // Add more MUI pages as needed
  };

  // Navigation function
  const navigateTo = (pageId: string) => {
    currentPageRef.value = pageId;

    // Update active state in nav items
    document.querySelectorAll('.nav-item').forEach((item) => {
      if (item.getAttribute('data-page') === pageId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update content
    const page = pages[pageId];
    if (page && contentBodyRef.value && contentHeaderRef.value) {
      // Update header
      const headerTitle = contentHeaderRef.value.querySelector('h2');
      const headerDesc = contentHeaderRef.value.querySelector('p');
      if (headerTitle) headerTitle.textContent = page.title;
      if (headerDesc) headerDesc.textContent = page.description;

      // Update content
      contentBodyRef.value.innerHTML = '';
      contentBodyRef.value.appendChild(page.content());
      contentBodyRef.value.scrollTop = 0;
    }
  };

  // Create sidebar
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

  // Create main content
  const mainContent = (
    <div class="main-content">
      <div class="content-header" ref={contentHeaderRef}>
        <h2>Getting Started</h2>
        <p>Introduction to KT.js framework</p>
      </div>
      <div class="content-body" ref={contentBodyRef}>
        {createHomePage()}
      </div>
    </div>
  );

  return (
    <div class="app-layout">
      {sidebar}
      {mainContent}
    </div>
  );
}

// Mount the app
const app = document.getElementById('app')!;
app.appendChild(createApp());
