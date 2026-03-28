// @ts-nocheck
const map = ref(new Map([['Mary', { salary: 5000 }]]));
const MarySalary = computed(() => map.value.get('Mary')?.salary);
map.draft.get('Mary').salary += 1000;
const element = <p>salary: {MarySalary}</p>; // "salary: 6000"
