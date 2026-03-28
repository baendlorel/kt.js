// @ts-nocheck
const staff = ref({ name: 'Alice', age: 30, salary: 5000 });
const salary: KTComputed<number> = staff.map((s) => s.value.salary);
const element = <p>salary: {salary}</p>; // "salary: 5000"
