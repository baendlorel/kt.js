import { ref } from '@ktjs/core';
import { BottomNavigation } from '@ktjs/mui';

export function BottomNavigationExample() {
  const value = ref('home');

  return (
    <BottomNavigation
      k-model={value}
      showLabels
      options={[
        { value: 'home', label: 'Home' },
        { value: 'files', label: 'Files' },
        { value: 'menu', label: 'Menu' },
      ]}
    />
  );
}
