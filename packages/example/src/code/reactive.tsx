import { ref } from 'kt.js';

export function ComponentA() {
  const workspace = ref({
    user: {
      profile: {
        name: 'KT.js',
        city: 'Hangzhou',
      },
    },
    ui: {
      theme: 'light' as 'light' | 'dark',
      volume: 30,
    },
  });
  const city = workspace.get('user', 'profile', 'city');
  const theme = workspace.subref('ui', 'theme');
  const volume = workspace.subref('ui', 'volume');

  const moveCity = () => {
    workspace.value = {
      ...workspace.value,
      user: {
        ...workspace.value.user,
        profile: {
          ...workspace.value.user.profile,
          city: workspace.value.user.profile.city === 'Hangzhou' ? 'Tokyo' : 'Hangzhou',
        },
      },
    };
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  const increaseVolume = () => {
    volume.value = Math.min(100, volume.value + 10);
  };

  return (
    <div>
      <button on:click={moveCity}>Update city via parent ref</button>
      <button on:click={toggleTheme}>Toggle theme via subref</button>
      <button on:click={increaseVolume}>Volume +10 via subref</button>

      <div>City from get(): {city}</div>
      <div>Theme from subref(): {theme}</div>
      <div>Volume from subref(): {volume}</div>
    </div>
  );
}
