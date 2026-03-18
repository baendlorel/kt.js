import { autoRef, ref } from 'kt.js';

const state = ref(1);

// 1) value: read + write
state.value = state.value + 1;

// 2) auto specialized refs for common containers
const list = autoRef([1, 2]); // KTArrayRef<number>
list.push(3);

const mapping = autoRef(new Map<string, number>()); // KTMapRef<string, number>
mapping.set('count', 1);

const clock = autoRef(new Date()); // KTDateRef
clock.setUTCFullYear(2026);

// Mutating through `.value` is still manual.
list.value.push(4);
list.notify();

// 3) toComputed: derive a computed value
const doubled = state.toComputed((current) => current * 2);

// 4) addOnChange: subscribe to changes
const listenerKey = state.addOnChange((next, prev) => {
  console.log('state changed:', prev, '->', next);
});

// 5) removeOnChange: unsubscribe by key
state.removeOnChange(listenerKey);

// 6) mutate: in-place mutation + emit once
const profile = ref({ count: 0, updatedAt: '--:--:--' });
profile.mutate((current) => {
  current.count += 1;
  current.updatedAt = new Date().toLocaleTimeString();
});

// 7) notify: force emit after in-place mutation
profile.value.count += 1;
profile.notify();

// toComputed with extra dependencies
const discount = ref(10);
const tax = ref(6);
const total = state.toComputed((price) => {
  const discounted = price * (1 - discount.value / 100);
  return discounted * (1 + tax.value / 100);
}, [discount, tax]);

console.log(doubled.value, total.value);
