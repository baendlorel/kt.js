import './styles/main.css';
import './styles/demo.css';

import { computed, ref } from '@ktjs/core';
import icon from '../assets/icon.svg';
import { NavItem } from './types/router.js';

import { basicNavItems } from './main/index.js';
import { muiNavItems } from './ui/index.js';

const navItems: { [section: string]: NavItem[] } = {
  'Core Features': basicNavItems,
  'MUI Components': muiNavItems,
};

type NavLookup = {
  section: string;
  item: NavItem;
};

// Create the main app
function createApp() {
  const home = basicNavItems[0];

  const currentPageRef = ref<string>(home.id);
  const currentSectionRef = ref<string>('Core Features');
  const headerTitleRef = ref(home.title);
  const headerDescRef = ref(home.description);
  const contentBodyRef = ref<HTMLDivElement>();

  const isHomeRef = computed(() => currentPageRef.value === home.id, [currentPageRef]);
  const headerClassRef = computed(() => `content-header ${isHomeRef.value ? 'is-home' : ''}`, [isHomeRef]);
  const headerEyebrowRef = computed(() => (isHomeRef.value ? 'Welcome' : currentSectionRef.value), [isHomeRef, currentSectionRef]);

  // Initialize with home page content
  const view = ref(home.component());

  // Find nav item by id and section
  const findNavItem = (id: string): NavLookup | undefined => {
    for (const [section, items] of Object.entries(navItems)) {
      const found = items.find((item) => item.id === id);
      if (found) {
        return { section, item: found };
      }
    }
    return undefined;
  };

  // Navigation handler
  const navigateTo = (pageId: string) => {
    if (currentPageRef.value === pageId) {
      return;
    }

    // Get page info
    const navItem = findNavItem(pageId);
    if (!navItem) {
      return;
    }

    currentPageRef.value = navItem.item.id;
    currentSectionRef.value = navItem.section;

    // Update header
    headerTitleRef.value = navItem.item.title;
    headerDescRef.value = navItem.item.description;

    // Create new content and replace current
    view.value = navItem.item.component();

    // Scroll to top
    contentBodyRef.value.scrollTop = 0;
  };

  return (
    <div class="app-layout">
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="brand-icon-wrap">
            <img src={icon} alt="KT.js" class="brand-icon" />
          </div>
          <div class="brand-content">
            <h1>KT.js</h1>
            <p>Fine-grained DOM framework playground</p>
          </div>
        </div>
        <div class="sidebar-search">⌘K Quick Search · Coming Soon</div>
        <nav class="nav-menu">
          {Object.entries(navItems).map(([section, items]) => (
            <div class="nav-section">
              <div class="nav-section-title">{section}</div>
              {items.map((item) => (
                <button
                  type="button"
                  class={computed(() => `nav-item ${item.id === currentPageRef.value ? 'active' : ''}`, [currentPageRef])}
                  data-page={item.id}
                  on:click={() => navigateTo(item.id)}
                >
                  <span>{item.label}</span>
                  <span class="nav-item-arrow">›</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div class="sidebar-footer">
          <span class="sidebar-badge">Inspired by react.dev</span>
          <span class="sidebar-badge sidebar-badge-vue">Inspired by vuejs.org</span>
        </div>
      </aside>
      <main class="main-content">
        <div class={headerClassRef}>
          <p class="content-eyebrow">{headerEyebrowRef}</p>
          <h2>{headerTitleRef}</h2>
          <p class="content-description">{headerDescRef}</p>
          <div k-if={isHomeRef} class="content-chip-row">
            <span class="content-chip">JSX-first</span>
            <span class="content-chip">No Virtual DOM</span>
            <span class="content-chip">Fine-grained updates</span>
          </div>
        </div>
        <div ref={contentBodyRef} class="content-body">
          {view}
        </div>
      </main>
    </div>
  );
}

function init() {
  const app = createApp();
  document.getElementById('app')!.appendChild(app);

  const link = <link rel="shortcut icon" href={icon} type="image/x-icon" />;
  document.head.appendChild(link);

  const syncBannerHeight = () => {
    const banner = document.getElementById('under-construction');
    const height = banner ? banner.getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty('--ktjs-banner-height', `${height}px`);
  };

  syncBannerHeight();
  window.addEventListener('resize', syncBannerHeight);
}

init();
