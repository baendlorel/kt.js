#!/usr/bin/env tsx
/**
 * Vite 构建脚本
 * 与 rollup 配置等价，同时构建 JS 代码和类型定义
 */

import { build } from 'vite';
import { rollup } from 'rollup';
import path from 'node:path';

const libPath = process.env.CURRENT_PKG_PATH;
if (!libPath) {
  console.error('Error: CURRENT_PKG_PATH environment variable is not set.');
  process.exit(1);
}

console.log('Building with Vite:', libPath);
console.log('1/2 Building JS code...');

// 构建 JS 代码
await build({
  configFile: path.join(import.meta.dirname, '..', 'vite.config.ts'),
});

console.log('2/2 Building type definitions...');

// 构建类型定义
const { createDtsConfig } = await import('../vite.config.js');
const dtsConfig = createDtsConfig(libPath);

const bundle = await rollup(dtsConfig);
await bundle.write(dtsConfig.output);
await bundle.close();

console.log('Build complete!');
