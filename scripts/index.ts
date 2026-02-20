#!/usr/bin/env tsx

import { build } from './build.js';
import { publish } from './publish.js';
import { test } from './test.js';

async function main() {
  const task = process.argv[2];
  const args = process.argv.slice(3);
  const [who] = args;
  if (task === '--publish') {
    await publish(args);
  } else if (task === '--build') {
    build(who);
  } else if (task === '--test') {
    test(who);
  } else {
    console.error(`Unknown task: ${task}`);
  }
}
main();
