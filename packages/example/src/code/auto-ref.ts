import { autoRef, ref } from 'kt.js';

const list = autoRef([1, 2]);
list.push(3);
list.splice(1, 1, 9);

const mapping = autoRef(new Map<string, number>());
mapping.set('a', 1).set('b', 2).delete('a');

const tags = autoRef(new Set(['alpha']));
tags.add('beta');

const clock = autoRef(new Date('2024-01-01T00:00:00.000Z'));
clock.setUTCFullYear(2026);

// Directly mutating `.value` still needs manual emit.
list.value.push(10);
list.notify();

// If you need a plain KTRef, keep using ref().
const plain = ref([1, 2, 3]);
plain.value.push(4);
plain.notify();
