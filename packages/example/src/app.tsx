import './styles/main.css';
import './styles/demo.css';

import { computed, ref } from '@ktjs/core';
import icon from '../assets/icon.svg';
import { t, I18NContent, LocaleOptions } from './i18n/index.js';
import type { NavItem } from './types/router.js';

import { basicNavItems } from './main/index.js';
import { muiNavItems } from './ui/index.js';
import { applyTheme, resolveInitialTheme, state } from './common/state.js';

interface NavGroup {
  id: string;
  label: I18NContent;
  items: NavItem[];
}

interface NavLookup {
  section: I18NContent;
  item: NavItem;
  groupId?: string;
}

const pickBasicItems = (ids: string[]): NavItem[] => basicNavItems.filter((item) => ids.includes(item.id));
const topLevelItems = pickBasicItems(['home', 'ie11-compatibility', 'changelog']);
const navGroups: NavGroup[] = [
  {
    id: 'features',
    label: t('app.nav.group.features'),
    items: pickBasicItems(['reactive', 'directives', 'fragment', 'events', 'other-elements']),
  },
  {
    id: 'mui',
    label: t('app.nav.group.mui'),
    items: muiNavItems,
  },
];

const navs: NavLookup[] = [
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

const navLookupMap = new Map<string, NavLookup>(navs.map((entry) => [entry.item.id, entry]));

function createApp() {
  resolveInitialTheme();

  const firstItem = topLevelItems[0] ?? navGroups[0].items[0];

  const page = ref(firstItem.id);
  const currentSection = ref(firstItem.label);
  const openedGroup = ref(navGroups[0].id);
  const headerTitleRef = ref(firstItem.title);
  const headerDescRef = ref(firstItem.description);
  const contentBodyRef = ref<HTMLDivElement>();
  const view = ref(firstItem.component());
  const locale = window.location.href.includes('en-US') ? 'en-US' : 'zh-CN';

  const navigateTo = (pageId: string) => {
    const navItem = navLookupMap.get(pageId);
    if (!navItem) {
      return;
    }

    if (page.value === navItem.item.id) {
      return;
    }

    page.value = navItem.item.id;
    currentSection.value = navItem.section;
    if (navItem.groupId) {
      openedGroup.value = navItem.groupId;
    }
    headerTitleRef.value = navItem.item.title;
    headerDescRef.value = navItem.item.description;
    view.value = navItem.item.component();
    contentBodyRef.value.scrollTop = 0;
  };

  const toggleGroup = (groupId: string) => (openedGroup.value = groupId); // equal values does not trigger onChange events

  const navIndex = page.toComputed((v) => navs.findIndex((entry) => entry.item.id === v));
  const prev = navIndex.toComputed((i) => (i <= 0 ? null : navs[i - 1]));
  const next = navIndex.toComputed((i) => (i < 0 || i >= navs.length - 1 ? null : navs[i + 1]));

  const themeLabel = state.theme.toComputed((v) => t(('app.theme.' + v) as any));
  const themeIcon = state.theme.toComputed((v) => (v === 'dark' ? '🌙' : '☀️'));
  const themeAriaLabel = state.theme.toComputed((v) =>
    v === 'dark' ? t('app.theme.switchToLight') : t('app.theme.switchToDark'),
  );
  const toggleTheme = () => applyTheme(state.theme.value === 'dark' ? 'light' : 'dark');

  return (
    <div class="app-layout">
      <div class="floating-controls" aria-label={t('app.controls.ariaLabel')}>
        <button
          type="button"
          class={state.theme.toComputed((v) => `theme-toggle-btn ${v}`)}
          on:click={toggleTheme}
          aria-label={themeAriaLabel}
          title={themeAriaLabel}
        >
          <span class="theme-toggle-icon">{themeIcon}</span>
          <span class="theme-toggle-text">{themeLabel}</span>
        </button>
        <div class="locale-switch">
          {LocaleOptions.map((option) => (
            <a
              href={`${process.env.BASE_URL}?lang=${option.value}`}
              class={`locale-switch-btn ${option.value === locale ? 'active' : ''}`}
              aria-current={option.value === locale ? 'true' : undefined}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="brand-icon-wrap">
            <img src={icon} alt="KT.js" class="brand-icon" />
          </div>
          <div class="brand-content">
            <h1>KT.js</h1>
            <p k-html={t('app.brand.tagline')}></p>
          </div>
        </div>

        <nav class="nav-menu">
          <div class="nav-top-level">
            {topLevelItems.map((item) => (
              <button
                type="button"
                class={page.toComputed((p) => `nav-item nav-item-top ${item.id === p ? 'active' : ''}`)}
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
                class={computed(
                  () => `nav-group-toggle ${openedGroup.value === group.id ? 'open' : ''}`,
                  [openedGroup],
                )}
                on:click={() => toggleGroup(group.id)}
              >
                <span>{group.label}</span>
                <span
                  class={computed(
                    () => `nav-group-arrow ${openedGroup.value === group.id ? 'open' : ''}`,
                    [openedGroup],
                  )}
                >
                  ▾
                </span>
              </button>

              <div class={openedGroup.toComputed((v) => `nav-group-panel ${v === group.id ? 'open' : 'collapsed'}`)}>
                {group.items.map((item) => (
                  <button
                    type="button"
                    class={page.toComputed((v) => `nav-item ${item.id === v ? 'active' : ''}`)}
                    on:click={() => navigateTo(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div
                k-if={groupIndex !== navGroups.length - 1}
                class="nav-section-divider nav-section-divider-group"
              ></div>
            </div>
          ))}
        </nav>
      </aside>

      <main class="main-content">
        <div ref={contentBodyRef} class="content-body">
          <div class="content-header">
            <p class="content-eyebrow">{currentSection}</p>
            <h2>{headerTitleRef}</h2>
            <p class="content-description">{headerDescRef}</p>
          </div>
          {view}
        </div>
        <div class="content-pagination">
          <button
            type="button"
            class={prev.toComputed((v) => `content-pagination-btn ${v ? '' : 'disabled'}`)}
            disabled={prev.toComputed((v) => !v)}
            on:click={() => {
              if (prev.value) {
                navigateTo(prev.value.item.id);
              }
            }}
          >
            <span class="content-pagination-caption" k-html={t('app.pagination.prev')}></span>
            <span
              class="content-pagination-title"
              k-html={prev.toComputed((v) => v?.item.label ?? t('app.pagination.noPrev'))}
            ></span>
          </button>
          <button
            type="button"
            class={next.toComputed((v) => `content-pagination-btn content-pagination-next ${v ? '' : 'disabled'}`)}
            disabled={next.toComputed((v) => !v)}
            on:click={() => {
              if (next.value) {
                navigateTo(next.value.item.id);
              }
            }}
          >
            <span class="content-pagination-caption" k-html={t('app.pagination.next')}></span>
            <span
              class="content-pagination-title"
              k-html={next.toComputed((v) => v?.item.label ?? t('app.pagination.noNext'))}
            ></span>
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
}

init();
