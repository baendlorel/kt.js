import './styles/main.css';
import './styles/demo.css';
import '@ktjs/mui/styles';

import { ref } from '@ktjs/core';
import type { Nav, NavItem } from './types/router.js';
import icon from '../assets/icon.svg';
import { applyTheme, resolveInitialTheme, state } from './common/state.js';
import { t, LocaleOptions } from './i18n/index.js';

import { mainNavs } from './main/index.js';
import { muiNav } from './ui/index.js';

const navs: Nav[] = [...mainNavs, muiNav];
const navsFlat: NavItem[] = muiNav.items.concat(...mainNavs.map((nav) => ('items' in nav ? nav.items : [nav])));
const githubRepoUrl = 'https://github.com/baendlorel/kt.js';

function createApp() {
  resolveInitialTheme();

  const firstItem = mainNavs[0] as NavItem; // mainNavs is guaranteed to have at least one item

  const page = ref(firstItem.id);
  const currentSection = ref(firstItem.label);
  const openedGroup = ref(mainNavs[0].id);
  const headerTitleRef = ref(firstItem.title);
  const headerDescRef = ref(firstItem.description);
  const contentBodyRef = ref<HTMLDivElement>();
  const view = ref(firstItem.component());
  const locale = window.location.href.includes('en-US') ? 'en-US' : 'zh-CN';

  const navigateTo = (pageId: string) => {
    const navItem = navsFlat.find((nav) => nav.id === pageId);
    if (!navItem) {
      throw new Error('Invalid page id: ' + pageId);
    }

    if (page.value === navItem.id) {
      return;
    }

    page.value = navItem.id;
    currentSection.value = navItem.label;
    if (navItem.groupId) {
      openedGroup.value = navItem.groupId;
    }
    headerTitleRef.value = navItem.title;
    headerDescRef.value = navItem.description;
    view.value = navItem.component();
    contentBodyRef.value.scrollTop = 0;
  };

  const toggleGroup = (groupId: string) => {
    if (openedGroup.value === groupId) {
      openedGroup.value = '';
    } else {
      openedGroup.value = groupId;
    }
  };
  const navIndex = page.toComputed((v) => navs.findIndex((entry) => entry.id === v));
  const prev = navIndex.toComputed((i) => (i <= 0 ? null : navs[i - 1]));
  const next = navIndex.toComputed((i) => (i < 0 || i >= navs.length - 1 ? null : navs[i + 1]));

  const themeLabel = state.theme.toComputed((v) => t(('app.theme.' + v) as any));
  const themeIcon = state.theme.toComputed((v) => (v === 'dark' ? '🌙' : '☀️'));
  const toggleTheme = () => applyTheme(state.theme.value === 'dark' ? 'light' : 'dark');

  return (
    <div class="app-layout">
      <div class="floating-controls" aria-label={t('app.controls.ariaLabel')}>
        <button type="button" class={state.theme.toComputed((v) => `theme-toggle-btn ${v}`)} on:click={toggleTheme}>
          <span class="theme-toggle-icon">{themeIcon}</span>
          <span class="theme-toggle-text">{themeLabel}</span>
        </button>
        <a
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="github-link-btn"
          aria-label={t('app.controls.githubRepo')}
          title={t('app.controls.githubRepo')}
        >
          GitHub
        </a>
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
          {navs.map((nav) => {
            if ('items' in nav) {
              return (
                <div class="nav-section">
                  <button
                    type="button"
                    class={openedGroup.toComputed((v) => `nav-group-toggle ${v === nav.id ? 'open' : ''}`)}
                    on:click={() => toggleGroup(nav.id)}
                  >
                    <span>{nav.label}</span>
                    <span class={openedGroup.toComputed((v) => `nav-group-arrow ${v === nav.id ? 'open' : ''}`)}>
                      ▾
                    </span>
                  </button>

                  <div class={openedGroup.toComputed((v) => `nav-group-panel ${v === nav.id ? 'open' : 'collapsed'}`)}>
                    {nav.items.map((item) => (
                      <button
                        type="button"
                        class={page.toComputed((v) => `nav-item ${item.id === v ? 'active' : ''}`)}
                        on:click={() => navigateTo(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <div class="nav-section">
                  <button
                    type="button"
                    class={page.toComputed((p) => `nav-item nav-item-top ${nav.id === p ? 'active' : ''}`)}
                    on:click={() => navigateTo(nav.id)}
                  >
                    {nav.label}
                  </button>
                </div>
              );
            }
          })}
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
                navigateTo(prev.value.id);
              }
            }}
          >
            <span class="content-pagination-caption" k-html={t('app.pagination.prev')}></span>
            <span
              class="content-pagination-title"
              k-html={prev.toComputed((v) => v?.label ?? t('app.pagination.noPrev'))}
            ></span>
          </button>
          <button
            type="button"
            class={next.toComputed((v) => `content-pagination-btn content-pagination-next ${v ? '' : 'disabled'}`)}
            disabled={next.toComputed((v) => !v)}
            on:click={() => {
              if (next.value) {
                navigateTo(next.value.id);
              }
            }}
          >
            <span class="content-pagination-caption" k-html={t('app.pagination.next')}></span>
            <span
              class="content-pagination-title"
              k-html={next.toComputed((v) => v?.label ?? t('app.pagination.noNext'))}
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
