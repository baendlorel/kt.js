#!/usr/bin/env tsx

import { readdirSync, readFileSync, writeFileSync } from 'fs';
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

  console.log(`Start syncing to: ${targetVersion}`);

  let successCount = 0;
  let errorCount = 0;

  const packagesDir = join(process.cwd(), 'packages');
  const packageFolders = readdirSync(packagesDir);
  packageFolders.push('..');

  for (const pkg of packageFolders) {
    try {
      const filePath = join(packagesDir, pkg, 'package.json');
      const content = readFileSync(filePath, 'utf8');
      const packageJson = JSON.parse(content);
      if (packageJson.version === undefined) {
        continue;
      }

      const oldVersion = packageJson.version;
      if (oldVersion === targetVersion) {
        console.log(`✅ ${packageJson.name} is already [${targetVersion}]`);
        successCount++;
        continue;
      }

      packageJson.version = targetVersion;
      writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');
      console.log(`✅ ${packageJson.name}: ${oldVersion} → ${targetVersion}`);
    } catch (error) {
      console.error(`❌ ${pkg}: update failed - ${error instanceof Error ? error.message : String(error)}`);
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
