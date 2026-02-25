import './styles/main.css';
import './styles/demo.css';

import { computed, ref } from '@ktjs/core';
import icon from '../assets/icon.svg';
import type { NavItem } from './types/router.js';

import { basicNavItems } from './main/index.js';
import { muiNavItems } from './ui/index.js';

type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

type NavLookup = {
  section: string;
  item: NavItem;
  groupId?: string;
};

const basicItemMap = new Map<string, NavItem>(basicNavItems.map((item) => [item.id, item]));

const pickBasicItems = (ids: string[]): NavItem[] => {
  const items: NavItem[] = [];
  for (let i = 0; i < ids.length; i++) {
    const item = basicItemMap.get(ids[i]);
    if (item) {
      items.push(item);
    }
  }
  return items;
};

const topLevelItems = pickBasicItems(['home', 'ie11-compatibility', 'changelog']);

const navGroups: NavGroup[] = [
  {
    id: 'features',
    label: 'Features',
    items: pickBasicItems(['reactive', 'directives', 'fragment', 'events', 'other-elements']),
  },
  {
    id: 'mui',
    label: 'MUI Components',
    items: muiNavItems,
  },
];

const orderedNavItems: NavLookup[] = [
  ...topLevelItems.map((item) => ({
    section: item.label,
    item,
  })),
  ...navGroups.flatMap((group) =>
    group.items.map((item) => ({
      section: group.label,
      item,
      groupId: group.id,
    })),
  ),
];

const navLookupMap = new Map<string, NavLookup>(orderedNavItems.map((entry) => [entry.item.id, entry]));

function createApp() {
  const firstItem = topLevelItems[0] ?? navGroups[0].items[0];

  const currentPageRef = ref<string>(firstItem.id);
  const currentSectionRef = ref<string>(firstItem.label);
  const openGroupRef = ref<string>(navGroups[0].id);
  const headerTitleRef = ref(firstItem.title);
  const headerDescRef = ref(firstItem.description);
  const contentBodyRef = ref<HTMLDivElement>();
  const view = ref(firstItem.component());

  const findNavItem = (id: string): NavLookup | undefined => navLookupMap.get(id);

  const navigateTo = (pageId: string) => {
    const navItem = findNavItem(pageId);
    if (!navItem) {
      return;
    }

    if (currentPageRef.value === navItem.item.id) {
      return;
    }

    currentPageRef.value = navItem.item.id;
    currentSectionRef.value = navItem.section;
    if (navItem.groupId) {
      openGroupRef.value = navItem.groupId;
    }
    headerTitleRef.value = navItem.item.title;
    headerDescRef.value = navItem.item.description;
    view.value = navItem.item.component();
    contentBodyRef.value.scrollTop = 0;
  };

  const toggleGroup = (groupId: string) => {
    if (openGroupRef.value === groupId) {
      return;
    }
    openGroupRef.value = groupId;
  };

  const headerEyebrowRef = computed(() => currentSectionRef.value, [currentSectionRef]);
  const currentNavIndexRef = computed(
    () => orderedNavItems.findIndex((entry) => entry.item.id === currentPageRef.value),
    [currentPageRef],
  );
  const prevNavRef = computed(() => {
    const currentIndex = currentNavIndexRef.value;
    if (currentIndex <= 0) {
      return undefined;
    }

    return orderedNavItems[currentIndex - 1];
  }, [currentNavIndexRef]);
  const nextNavRef = computed(() => {
    const currentIndex = currentNavIndexRef.value;
    if (currentIndex < 0 || currentIndex >= orderedNavItems.length - 1) {
      return undefined;
    }

    return orderedNavItems[currentIndex + 1];
  }, [currentNavIndexRef]);

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

        <nav class="nav-menu">
          <div class="nav-top-level">
            {topLevelItems.map((item) => (
              <button
                type="button"
                class={computed(() => `nav-item nav-item-top ${item.id === currentPageRef.value ? 'active' : ''}`, [currentPageRef])}
                on:click={() => navigateTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div class="nav-section-divider"></div>

          {navGroups.map((group, groupIndex) => (
            <div class="nav-section">
              <button
                type="button"
                class={computed(() => `nav-group-toggle ${openGroupRef.value === group.id ? 'open' : ''}`, [openGroupRef])}
                on:click={() => toggleGroup(group.id)}
              >
                <span>{group.label}</span>
                <span class={computed(() => `nav-group-arrow ${openGroupRef.value === group.id ? 'open' : ''}`, [openGroupRef])}>
                  ▾
                </span>
              </button>

              <div class={computed(() => `nav-group-panel ${openGroupRef.value === group.id ? 'open' : 'collapsed'}`, [openGroupRef])}>
                {group.items.map((item) => (
                  <button
                    type="button"
                    class={computed(() => `nav-item ${item.id === currentPageRef.value ? 'active' : ''}`, [currentPageRef])}
                    on:click={() => navigateTo(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div k-if={groupIndex !== navGroups.length - 1} class="nav-section-divider nav-section-divider-group"></div>
            </div>
          ))}
        </nav>
      </aside>

      <main class="main-content">
        <div ref={contentBodyRef} class="content-body">
          <div class="content-header">
            <p class="content-eyebrow">{headerEyebrowRef}</p>
            <h2>{headerTitleRef}</h2>
            <p class="content-description">{headerDescRef}</p>
          </div>
          {view}
        </div>
        <div class="content-pagination">
          <button
            type="button"
            class={computed(() => `content-pagination-btn ${prevNavRef.value ? '' : 'disabled'}`, [prevNavRef])}
            disabled={computed(() => !prevNavRef.value, [prevNavRef])}
            on:click={() => {
              const prev = prevNavRef.value;
              if (prev) {
                navigateTo(prev.item.id);
              }
            }}
          >
            <span class="content-pagination-caption">← Prev</span>
            <span class="content-pagination-title">
              {computed(() => prevNavRef.value?.item.label ?? 'No previous page', [prevNavRef])}
            </span>
          </button>
          <button
            type="button"
            class={computed(() => `content-pagination-btn content-pagination-next ${nextNavRef.value ? '' : 'disabled'}`, [nextNavRef])}
            disabled={computed(() => !nextNavRef.value, [nextNavRef])}
            on:click={() => {
              const next = nextNavRef.value;
              if (next) {
                navigateTo(next.item.id);
              }
            }}
          >
            <span class="content-pagination-caption">Next →</span>
            <span class="content-pagination-title">
              {computed(() => nextNavRef.value?.item.label ?? 'No next page', [nextNavRef])}
            </span>
          </button>
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
