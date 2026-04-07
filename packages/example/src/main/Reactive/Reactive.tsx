import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { Code } from '../../components/Code.js';
import { t } from '../../i18n/index.js';

import reactiveCode from './__ref-computed.tsx?raw';
import subrefCode from './__subref.tsx?raw';
import mapCode from './__map.tsx?raw';
import isMatchCode from './__is-match.tsx?raw';
import deepCode from './__deep.tsx?raw';
import deepComplexCode from './__deep-complex.tsx?raw';

class MutableBadge {
  constructor(
    public label: string,
    public count: number,
  ) {}

  pulse() {
    this.count += 1;
  }

  rename(nextLabel: string) {
    this.label = nextLabel;
  }
}

export function Reactivity() {
  const salary = ref(12000);
  const bonusRate = ref(0.12);
  const annualBonus = computed(() => Math.round(salary.value * bonusRate.value), [salary, bonusRate]);
  const totalIncome = computed(() => salary.value + annualBonus.value, [salary, annualBonus]);

  const profile = ref({
    name: 'Aldia',
    role: 'Core Maintainer',
    settings: {
      theme: 'light',
      volume: 35,
    },
  });
  const readonlyName = profile.get('name');
  const editableName = profile.subref('name');
  const theme = profile.subref('settings', 'theme');
  const volume = profile.subref('settings', 'volume');
  const profileSummary = computed(
    () => `${readonlyName.value} / ${profile.value.role} / ${theme.value} / ${t('reactive.demo.label.volume')} ${volume.value}`,
    [profile],
  );

  const salaryBand = salary.map((value) =>
    value >= 15000 ? t('reactive.demo.band.senior') : t('reactive.demo.band.growth'),
  );
  const profileBadge = profile.map(
    (value) => `${value.name} / ${value.settings.theme} / ${t('reactive.demo.label.volume')} ${value.settings.volume}`,
  );
  const salaryTarget = ref(12000);
  const salaryEqualsTarget = salary.is(salaryTarget);
  const profileMatcher = ref({ settings: { theme: 'light' } });
  const profileMatched = profile.match(profileMatcher);

  const draftState = ref({
    stats: {
      visits: 3,
    },
    tags: ['kt.js', 'draft'],
    payroll: new Map([
      ['Mary', { salary: 5000 }],
      ['Lin', { salary: 4200 }],
    ]),
    badge: new MutableBadge('runtime', 2),
  });
  const visits = draftState.map((value) => value.stats.visits);
  const tagsText = draftState.map((value) => value.tags.join(', '));
  const marySalary = computed(() => draftState.value.payroll.get('Mary')?.salary ?? 0, [draftState]);
  const badgeLabel = computed(() => draftState.value.badge.label, [draftState]);
  const badgeCount = computed(() => draftState.value.badge.count, [draftState]);

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  const adjustVolume = (delta: number) => {
    volume.value = Math.max(0, Math.min(100, volume.value + delta));
  };

  const addTag = () => {
    draftState.draft.tags.push(`tag-${draftState.value.tags.length + 1}`);
  };

  const raiseMarySalary = () => {
    const mary = draftState.draft.payroll.get('Mary');
    if (!mary) {
      return;
    }
    mary.salary += 500;
  };

  const pulseBadge = () => {
    draftState.draft.badge.pulse();
  };

  const renameBadge = () => {
    draftState.draft.badge.rename(`runtime-${draftState.value.badge.count + 1}`);
  };

  return (
    <div>
      <div class="demo-section">
        <h3 k-html={t('reactive.demo.section.data.title')}></h3>
        <p k-html={t('reactive.demo.section.data.description')}></p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.demo.section.subpath.title')}></h3>
        <p k-html={t('reactive.demo.section.subpath.description')}></p>
        <Code code={subrefCode} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.demo.section.map.title')}></h3>
        <p k-html={t('reactive.demo.section.map.description')}></p>
        <Code code={mapCode} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.isMatch.section.title')}></h3>
        <p k-html={t('reactive.isMatch.section.description')}></p>
        <Code code={isMatchCode} />
      </div>
      <div class="demo-section">
        <h3 k-html={t('reactive.demo.section.deep.title')}></h3>
        <p k-html={t('reactive.demo.section.deep.description')}></p>
        <Code code={deepCode} />
        <p k-html={t('reactive.demo.section.deep.extra')}></p>
        <Code code={deepComplexCode} />
      </div>

      <div class="demo-section">
        <h3 k-html={t('reactive.demo.section.playground.title')}></h3>
        <p k-html={t('reactive.demo.section.playground.description')}></p>

        <div class="demo-container">
          <div class="controls-panel">
            <h4 k-html={t('reactive.demo.panel.refComputed.title')}></h4>
            <p k-html={t('reactive.demo.panel.refComputed.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => (salary.value += 1000)}>
                {t('reactive.demo.panel.refComputed.button.salaryPlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (bonusRate.value = Math.min(0.3, +(bonusRate.value + 0.01).toFixed(2)))}
              >
                {t('reactive.demo.panel.refComputed.button.bonusPlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => {
                  salary.value = 12000;
                  bonusRate.value = 0.12;
                }}
              >
                {t('reactive.demo.panel.refComputed.button.reset')}
              </Button>
            </div>
            <div class="demo-result">
              <div>
                {t('reactive.demo.panel.refComputed.label.baseSalary')}: {salary}
              </div>
              <div>
                {t('reactive.demo.panel.refComputed.label.bonusRate')}:{' '}
                {bonusRate.map((value) => `${Math.round(value * 100)}%`)}
              </div>
              <div>
                {t('reactive.demo.panel.refComputed.label.annualBonus')}: {annualBonus}
              </div>
              <div>
                {t('reactive.demo.panel.refComputed.label.totalIncome')}: {totalIncome}
              </div>
            </div>
          </div>

          <div class="controls-panel">
            <h4 k-html={t('reactive.demo.panel.getSubref.title')}></h4>
            <p k-html={t('reactive.demo.panel.getSubref.description')}></p>
            <div class="demo-flex-gap-column">
              {
                // fixme editableName有异常，没有addonchage功能
              }
              <input
                k-model={editableName}
                type="text"
                aria-label={t('reactive.demo.panel.getSubref.inputAria')}
                style="padding: 10px 12px; border: 1px solid #d8e2f0; border-radius: 10px; background: #fff; font-size: 0.95rem;"
              />
            </div>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={toggleTheme}>
                {t('reactive.demo.panel.getSubref.button.toggleTheme')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => adjustVolume(-5)}>
                {t('reactive.demo.panel.getSubref.button.volumeDown')}
              </Button>
              <Button variant="contained" color="primary" on:click={() => adjustVolume(5)}>
                {t('reactive.demo.panel.getSubref.button.volumeUp')}
              </Button>
            </div>
            <div class="demo-result">
              <div>
                {t('reactive.demo.panel.getSubref.label.getName')}: {readonlyName}
              </div>
              <div>
                {t('reactive.demo.panel.getSubref.label.themeSubref')}: {theme}
              </div>
              <div>
                {t('reactive.demo.panel.getSubref.label.volumeSubref')}: {volume}
              </div>
              <div>{profileSummary}</div>
            </div>
          </div>

          <div class="controls-panel">
            <h4 k-html={t('reactive.demo.panel.map.title')}></h4>
            <p k-html={t('reactive.demo.panel.map.description')}></p>
            <div class="demo-result">
              <div>
                {t('reactive.demo.panel.map.label.salaryBand')}: {salaryBand}
              </div>
              <div>
                {t('reactive.demo.panel.map.label.profileBadge')}: {profileBadge}
              </div>
            </div>
          </div>

          <div class="controls-panel">
            <h4 k-html={t('reactive.isMatch.playground.title')}></h4>
            <p k-html={t('reactive.isMatch.playground.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => (salaryTarget.value += 1000)}>
                {t('reactive.isMatch.button.targetPlus')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (profileMatcher.value = { settings: { theme: theme.value } })}
              >
                {t('reactive.isMatch.button.syncMatcher')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() =>
                  (profileMatcher.value = { settings: { theme: theme.value === 'dark' ? 'light' : 'dark' } })
                }
              >
                {t('reactive.isMatch.button.toggleMatcher')}
              </Button>
            </div>
            <div class="demo-result">
              <div>
                {t('reactive.isMatch.label.target')}: {salaryTarget}
              </div>
              <div>
                {t('reactive.isMatch.label.is')}:<span k-if={salaryEqualsTarget}>{t('reactive.demo.bool.true')}</span>
                <span k-else>{t('reactive.demo.bool.false')}</span>
              </div>
              <div>
                {t('reactive.isMatch.label.matcher')}: {profileMatcher.map((v) => JSON.stringify(v))}
              </div>
              <span k-if={profileMatched}>{t('reactive.demo.bool.true')}</span>
              <span k-else>{t('reactive.demo.bool.false')}</span>
            </div>
          </div>

          <div class="controls-panel">
            <h4 k-html={t('reactive.demo.panel.draft.title')}></h4>
            <p k-html={t('reactive.demo.panel.draft.description')}></p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => (draftState.draft.stats.visits += 1)}>
                {t('reactive.demo.panel.draft.button.visitsPlus')}
              </Button>
              <Button variant="contained" color="primary" on:click={addTag}>
                {t('reactive.demo.panel.draft.button.addTag')}
              </Button>
              <Button variant="contained" color="primary" on:click={raiseMarySalary}>
                {t('reactive.demo.panel.draft.button.raiseMary')}
              </Button>
              <Button variant="contained" color="primary" on:click={pulseBadge}>
                {t('reactive.demo.panel.draft.button.badgePulse')}
              </Button>
              <Button variant="contained" color="primary" on:click={renameBadge}>
                {t('reactive.demo.panel.draft.button.badgeRename')}
              </Button>
            </div>
            <div class="demo-result">
              <div>
                {t('reactive.demo.panel.draft.label.visits')}: {visits}
              </div>
              <div>
                {t('reactive.demo.panel.draft.label.tags')}: {tagsText}
              </div>
              <div>
                {t('reactive.demo.panel.draft.label.marySalary')}: {marySalary}
              </div>
              <div>
                {t('reactive.demo.panel.draft.label.customObject')}: {badgeLabel} / {badgeCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
