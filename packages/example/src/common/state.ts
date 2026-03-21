import { ref } from 'kt.js';

type ThemeMode = 'light' | 'dark';
export const state = ref({
  theme: 'light' as ThemeMode,
});

const themeStorageKey = 'ktjs-example-theme';
export const resolveInitialTheme = (): ThemeMode => {
  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    applyTheme(storedTheme);
    return storedTheme;
  }
  const themeFromMedia = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(themeFromMedia);
  return themeFromMedia;
};

export const applyTheme = (theme: ThemeMode) => {
  state.draft.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem(themeStorageKey, theme);
};
