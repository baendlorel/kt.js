import { computed, ref } from 'kt.js';
import { Button } from '@ktjs/mui';
import { Code } from '../../components/Code.js';

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
    () => `${readonlyName.value} / ${profile.value.role} / ${theme.value} / volume ${volume.value}`,
    [readonlyName, theme, volume, profile],
  );

  const salaryBand = salary.map((value) => (value >= 15000 ? 'senior band' : 'growth band'));
  const profileBadge = profile.map(
    (value) => `${value.name} / ${value.settings.theme} / volume ${value.settings.volume}`,
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
        <h3>响应式数据</h3>
        <p>
          <code>ref</code> 与 <code>computed</code>用于创建响应式数据和计算属性。
        </p>
        <Code code={reactiveCode} />
      </div>
      <div class="demo-section">
        <h3>响应式子属性</h3>
        <p>
          通过<code>get</code>和<code>subref</code>导出轻量级响应式的子属性
        </p>
        <Code code={subrefCode} />
      </div>
      <div class="demo-section">
        <h3>派生computed</h3>
        <p>
          通过<code>map</code>函数派生出computed对象
        </p>
        <Code code={mapCode} />
      </div>
      <div class="demo-section">
        <h3>
          <code>is</code> 与 <code>match</code>
        </h3>
        <p>
          <code>is</code>用于生成“是否相等”的布尔computed，<code>match</code>用于对象结构匹配（深度匹配）。
        </p>
        <Code code={isMatchCode} />
      </div>
      <div class="demo-section">
        <h3>深度响应</h3>
        <p>
          <code>ref.value</code>只接收本身的变化，若要深度响应，则使用api<code>ref.draft</code>
          。它会标记当前ref对象，将响应变化在微队列中执行，以实现简单高效的深度响应。
        </p>
        <Code code={deepCode} />
        <p>天然支持复杂的自定义对象</p>
        <Code code={deepComplexCode} />
      </div>

      <div class="demo-section">
        <h3>实时综合演示</h3>
        <p>下面这块是真实运行的 playground，直接把本页提到的能力串在一起：修改后会立即联动更新。</p>

        <div class="demo-container">
          <div class="controls-panel">
            <h4>
              <code>ref</code> + <code>computed</code>
            </h4>
            <p>基础状态和计算属性都由真实 reactive 对象驱动。</p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => (salary.value += 1000)}>
                薪资 +1000
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (bonusRate.value = Math.min(0.3, +(bonusRate.value + 0.01).toFixed(2)))}
              >
                奖金比例 +1%
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => {
                  salary.value = 12000;
                  bonusRate.value = 0.12;
                }}
              >
                重置
              </Button>
            </div>
            <div class="demo-result">
              <div>base salary: {salary}</div>
              <div>bonus rate: {bonusRate.map((value) => `${Math.round(value * 100)}%`)}</div>
              <div>annual bonus: {annualBonus}</div>
              <div>total income: {totalIncome}</div>
            </div>
          </div>

          <div class="controls-panel">
            <h4>
              <code>get</code> + <code>subref</code>
            </h4>
            <p>
              <code>get</code> 提供只读视图，<code>subref</code> 负责把嵌套路径拆成可写的小块。
            </p>
            <div class="demo-flex-gap-column">
              <input
                k-model={editableName}
                type="text"
                aria-label="subref name"
                style="padding: 10px 12px; border: 1px solid #d8e2f0; border-radius: 10px; background: #fff; font-size: 0.95rem;"
              />
            </div>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={toggleTheme}>
                切换主题
              </Button>
              <Button variant="contained" color="primary" on:click={() => adjustVolume(-5)}>
                音量 -5
              </Button>
              <Button variant="contained" color="primary" on:click={() => adjustVolume(5)}>
                音量 +5
              </Button>
            </div>
            <div class="demo-result">
              <div>get('name'): {readonlyName}</div>
              <div>theme subref: {theme}</div>
              <div>volume subref: {volume}</div>
              <div>{profileSummary}</div>
            </div>
          </div>

          <div class="controls-panel">
            <h4>
              <code>map</code>
            </h4>
            <p>派生出来的 computed 会随着原 ref 或子路径变化自动刷新。</p>
            <div class="demo-result">
              <div>salary band: {salaryBand}</div>
              <div>profile badge: {profileBadge}</div>
            </div>
          </div>

          <div class="controls-panel">
            <h4>
              <code>is</code> + <code>match</code>
            </h4>
            <p>用布尔 computed 做状态判断，支持 reactive 目标和 matcher。</p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => (salaryTarget.value += 1000)}>
                target +1000
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() => (profileMatcher.value = { settings: { theme: theme.value } })}
              >
                matcher 同步当前主题
              </Button>
              <Button
                variant="contained"
                color="primary"
                on:click={() =>
                  (profileMatcher.value = { settings: { theme: theme.value === 'dark' ? 'light' : 'dark' } })
                }
              >
                matcher 切换主题
              </Button>
            </div>
            <div class="demo-result">
              <div>salary target: {salaryTarget}</div>
              <div>salary.is(target): {salaryEqualsTarget.map((v) => (v ? 'true' : 'false'))}</div>
              <div>matcher: {profileMatcher.map((v) => JSON.stringify(v))}</div>
              <div>profile.match(matcher): {profileMatched.map((v) => (v ? 'true' : 'false'))}</div>
            </div>
          </div>

          <div class="controls-panel">
            <h4>
              <code>draft</code> + 复杂对象
            </h4>
            <p>
              深层对象、数组、Map 和自定义可变对象都通过 <code>draft</code> 进行内部修改。
            </p>
            <div class="demo-flex-gap">
              <Button variant="contained" color="primary" on:click={() => (draftState.draft.stats.visits += 1)}>
                visits +1
              </Button>
              <Button variant="contained" color="primary" on:click={addTag}>
                添加标签
              </Button>
              <Button variant="contained" color="primary" on:click={raiseMarySalary}>
                Mary 涨薪 +500
              </Button>
              <Button variant="contained" color="primary" on:click={pulseBadge}>
                badge pulse
              </Button>
              <Button variant="contained" color="primary" on:click={renameBadge}>
                badge rename
              </Button>
            </div>
            <div class="demo-result">
              <div>visits: {visits}</div>
              <div>tags: {tagsText}</div>
              <div>Mary salary from Map: {marySalary}</div>
              <div>
                custom object: {badgeLabel} / {badgeCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
