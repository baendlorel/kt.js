// @ts-nocheck
const left = ref(1);
const right = ref(1);
const same = left.is(right); // true

const profile = ref({
  user: { name: 'Aldia', role: 'maintainer' },
  prefs: { theme: 'dark', tags: ['core'] },
});
const matcher = ref({ prefs: { theme: 'dark' } });
const matched = profile.match(matcher); // true
