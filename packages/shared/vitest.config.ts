import { defineConfig } from 'vitest/config';
import { test, resolve } from '../../.scripts/vitest.base.config.js';

export default defineConfig({ test, resolve: resolve(import.meta.dirname) });
