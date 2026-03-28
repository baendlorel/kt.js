// @ts-nocheck
const staff = ref({ name: 'Alice', age: 30, salary: 5000 });
const name: KTSubComputed<number> = staff.get('name'); // readonly
const salary: KTSubRef<number> = staff.get('salary'); // writable
const element = (
  <div>
    <p>name: {name}</p>
    <p>salary: {salary}</p>
    <input type="number" k-model={salary} /> // Two way binding with subref
  </div>
);
