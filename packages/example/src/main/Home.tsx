import { Code } from '../components/Code.js';

import installCode from '../code/install.sh?raw';
import tsconfigCode from '../code/tsconfig.example.json?raw';
import viteConfigCode from '../code/plugin.vite.example.ts?raw';
import babelConfigCode from '../code/plugin.babel.example.ts?raw';
import { i18n } from '../i18n/index.js';
/**
 * Home page - Introduction to KT.js framework
 */
export function Home() {
  return (
    <div>
      <div class="demo-section">
        <div class="home-badges">
          <a href="https://www.npmjs.com/package/kt.js" aria-label="kt.js npm version badge">
            <img src="https://img.shields.io/npm/v/kt.js?label=npm" alt="npm version" />
          </a>
          <a href="https://www.npmjs.com/package/kt.js" aria-label="kt.js npm downloads badge">
            <img src="https://img.shields.io/npm/dm/kt.js?label=downloads" alt="npm downloads" />
          </a>
          <a href="https://www.npmjs.com/package/kt.js" aria-label="kt.js npm license badge">
            <img src="https://img.shields.io/npm/l/kt.js?label=license" alt="npm license" />
          </a>
        </div>
        <p class="home-community">
          <span>{i18n('home.discussion.label')}:</span> <code>{i18n('home.discussion.qq')}</code>{' '}
          <code>
            <a href="https://t.me/+1i2ALsdw_LM2ZDY1" target="_blank" rel="noopener noreferrer">
              {i18n('home.discussion.telegram')}
            </a>
          </code>
        </p>
        <h3>{i18n('home.section.introduction')}</h3>
        <p>
          kt.js is a lightweight, direct DOM manipulation framework with <code>jsx</code>. Unlike React or Vue which use
          virtual DOM and automatic re-rendering, kt.js gives you fine-grained control over when and how DOM updates
          happen.
        </p>
        <h3>{i18n('home.section.gettingStarted')}</h3>
        <p>Follow these steps to start using KT.js in your project:</p>
        <h4>{i18n('home.step.installation')}</h4>
        <Code code={installCode} lang="bash" />
        <h4>{i18n('home.step.tsconfig')}</h4>
        <p>
          Add these settings to your <code>tsconfig.json</code>:
        </p>
        <Code code={tsconfigCode} lang="json" />
        <h4>{i18n('home.step.tsPlugin')}</h4>
        <p>
          Add ts-plugin to your project to provide better support for kt.js in your editor(mainly for <code>k-for</code>{' '}
          directive)
        </p>
        <Code code="pnpm add -D @ktjs/ts-plugin" lang="bash"></Code>
        <p>
          Press <code>Ctrl+Shift+P</code> in VSCode, select <strong>TypeScript: Select TypeScript Version</strong>, then
          select <strong>Use Workspace Version</strong>.
        </p>
        <p>
          Finally, restart the TypeScript server by selecting <strong>TypeScript: Restart TS Server</strong> from the
          command palette.
        </p>
        <h4>{i18n('home.step.viteConfig')}</h4>
        <p>
          Using <code>vite.config.ts</code> is recommended. It provides support for <code>svg</code> and{' '}
          <code>mathml</code> elements:
        </p>
        <Code code={viteConfigCode} />
        <p>{i18n('home.label.useBabel')}</p>
        <Code code={babelConfigCode} />
      </div>
    </div>
  );
}
