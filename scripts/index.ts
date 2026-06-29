#!/usr/bin/env tsx

import { check } from './check.js';
import { publish } from './publish.js';
import { syncReadme } from './readme.js';
import { test } from './test.js';
import { build } from './build.js';

const taskHandler = {
  '--publish': publish,
  '--test': test,
  '--check': check,
  '--readme': syncReadme,
  '--build': build,
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
