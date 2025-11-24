#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function syncVersions(targetVersion: string) {
  if (!targetVersion) {
    console.log('Usage: tsx sync-version.ts <version>');
    process.exit(1);
  }

  const versionRegex = /^\d+\.\d+\.\d+(-[\da-zA-Z-]+(\.[\da-zA-Z-]+)*)?$/;
  if (!versionRegex.test(targetVersion)) {
    console.warn(`Wrong format: ["${targetVersion}"`);
    console.log('Should be: 1.0.0, 2.1.3, 3.0.0-beta.1');
    process.exit(1);
  }

  const packages = [
    { path: './package.json', name: 'rootDir' },
    { path: './packages/kt.js/package.json', name: 'kt.js' },
    { path: './packages/core/package.json', name: '@ktjs/core' },
    { path: './packages/shortcuts/package.json', name: '@ktjs/shortcuts' },
  ];

  console.log(`Start syncing to: ${targetVersion}`);

  let successCount = 0;
  let errorCount = 0;

  for (const pkg of packages) {
    try {
      const filePath = join(process.cwd(), pkg.path);
      const packageJson = JSON.parse(readFileSync(filePath, 'utf8'));

      const oldVersion = packageJson.version;

      if (oldVersion === targetVersion) {
        console.log(`✅ ${pkg.name} is already [${targetVersion}]`);
        successCount++;
        continue;
      }

      packageJson.version = targetVersion;
      writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');

      console.log(`✅ ${pkg.name}: ${oldVersion} → ${targetVersion}`);
      successCount++;
    } catch (error) {
      console.error(`❌ ${pkg.name}: update failed - ${error instanceof Error ? error.message : String(error)}`);
      errorCount++;
    }
  }

  console.log(`Finished: ${successCount} succ, ${errorCount} err.`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

const targetVersion = process.argv[2];
syncVersions(targetVersion);
