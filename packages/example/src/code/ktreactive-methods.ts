import { ref } from 'kt.js';

const state = ref(1);

// 1) value: read + write
state.value = state.value + 1;

// 2) toComputed: derive a computed value
const doubled = state.toComputed((current) => current * 2);

// 3) addOnChange: subscribe to changes
const listenerKey = state.addOnChange((next, prev) => {
  console.log('state changed:', prev, '->', next);
});

// 4) removeOnChange: unsubscribe by key
state.removeOnChange(listenerKey);

// 5) mutate: in-place mutation + emit once
const profile = ref({ count: 0, updatedAt: '--:--:--' });
profile.mutate((current) => {
  current.count += 1;
  current.updatedAt = new Date().toLocaleTimeString();
});

// 6) notify: force emit after in-place mutation
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
