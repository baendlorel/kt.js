import { Code } from '../components/Code.js';

import installCode from '../code/install.sh?raw';
import tsconfigCode from '../code/tsconfig.example.json?raw';
import viteConfigCode from '../code/plugin.vite.example.ts?raw';
import babelConfigCode from '../code/plugin.babel.example.ts?raw';
import { t } from '../i18n/index.js';
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
          <span k-html={t('home.discussion.label')}>:</span> <code k-html={t('home.discussion.qq')}></code>
          <code>
            <a
              k-html={t('home.discussion.telegram')}
              href="https://t.me/kt_js"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </code>
        </p>
        <h3>{t('home.section.introduction')}</h3>
        <p>{t('home.section.introduction.content')}</p>
        <h3>{t('home.section.gettingStarted')}</h3>
        <p>{t('home.gettingStarted.guide')}</p>
        <h4>{t('home.step.installation')}</h4>
        <Code code={installCode} lang="bash" />
        <h4>{t('home.step.tsconfig')}</h4>
        <p>{t('home.tsconfig.description')}</p>
        <Code code={tsconfigCode} lang="json" />
        <h4>{t('home.step.tsPlugin')}</h4>
        <p>{t('home.tsPlugin.description')}</p>
        <Code code="pnpm add -D @ktjs/ts-plugin" lang="bash"></Code>
        <p>{t('home.tsPlugin.vscodeStep')}</p>
        <p>{t('home.tsPlugin.restartStep')}</p>
        <h4>{t('home.step.viteConfig')}</h4>
        <p>{t('home.viteConfig.description')}</p>
        <Code code={viteConfigCode} />
        <p>{t('home.label.useBabel')}</p>
        <Code code={babelConfigCode} />
      </div>
    </div>
  );
}
