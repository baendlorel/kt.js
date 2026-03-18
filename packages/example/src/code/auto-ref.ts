import { createRef, ref } from 'kt.js';

const list = ref([1, 2]);
list.push(3);
list.splice(1, 1, 9);

const mapping = ref(new Map<string, number>());
mapping.set('a', 1).set('b', 2).delete('a');

const tags = ref(new Set(['alpha']));
tags.add('beta');

const clock = ref(new Date('2024-01-01T00:00:00.000Z'));
clock.setUTCFullYear(2026);

// Directly mutating `.value` still needs manual emit.
list.value.push(10);
list.notify();

// If you need a plain KTRef, keep using createRef().
const plain = createRef([1, 2, 3]);
plain.value.push(4);
plain.notify();
