// @ts-nocheck
const staff = ref({ name: 'Alice', age: 30, salary: 5000 });
const element = <p>salary: {staff.get('salary')}</p>; // "salary: 5000"
staff.draft.salary += 1000;
// now element will automatically update to "salary: 6000"
