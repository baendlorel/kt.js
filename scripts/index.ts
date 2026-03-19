#!/usr/bin/env tsx

import { build } from './build.js';
import { check } from './check.js';
import { publish } from './publish.js';
import { syncReadme } from './readme.js';
import { test } from './test.js';

const taskHandler = {
  '--publish': publish,
  '--build': build,
  '--test': test,
  '--check': check,
  '--readme': syncReadme,
};

async function main() {
  const task = process.argv[2];
  const args = process.argv.slice(3);
  const [who] = args;
  const handler = taskHandler[task as keyof typeof taskHandler];
  if (handler) {
    await handler(who);
  } else {
    console.error(`Unknown task: ${task}`);
  }
}
main();
