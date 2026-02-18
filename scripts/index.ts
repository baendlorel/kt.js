#!/usr/bin/env tsx

import { build } from './build.js';
import { publish } from './publish.js';
import { test } from './test.js';

async function main() {
  const task = process.argv[2];
  const [who] = process.argv.slice(3);
  if (task === '--publish') {
    if (who === undefined) {
      await publish('core');
      await publish('kt.js');
    } else {
      publish(who);
    }
  } else if (task === '--build') {
    build(who);
  } else if (task === '--test') {
    test(who);
  } else {
    console.error(`Unknown task: ${task}`);
  }
}
main();
