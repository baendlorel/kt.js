import { ref } from 'kt.js';

export const state = {
  theme: ref<ThemeMode>('light'),
};

type ThemeMode = 'light' | 'dark';
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
  state.theme.value = theme;
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem(themeStorageKey, theme);
};
