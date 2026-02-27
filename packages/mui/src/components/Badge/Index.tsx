import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';

import './Badge.css';
import type { KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute.js';

type BadgeColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type BadgeVariant = 'standard' | 'dot';
type BadgeOverlap = 'rectangular' | 'circular';
type BadgeContent = string | number;

export interface KTMuiBadgeAnchorOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

export interface KTMuiBadgeProps extends KTMuiProps {
  badgeContent?: BadgeContent | KTReactive<number> | KTReactive<string>;
  max?: KTMaybeReactive<number>;
  showZero?: KTMaybeReactive<boolean>;
  invisible?: KTMaybeReactive<boolean>;
  color?: KTMaybeReactive<BadgeColor>;
  variant?: KTMaybeReactive<BadgeVariant>;
  overlap?: KTMaybeReactive<BadgeOverlap>;
  anchorOrigin?: KTMaybeReactive<KTMuiBadgeAnchorOrigin>;
}

export type KTMuiBadge = JSX.Element & {};

const DEFAULT_ANCHOR_ORIGIN: KTMuiBadgeAnchorOrigin = {
  vertical: 'top',
  horizontal: 'right',
};

/**
 * Badge component - mimics MUI Badge appearance and behavior
 */
export function Badge(props: KTMuiBadgeProps): KTMuiBadge {
  const customClass = toReactive(props.class ?? '');
  const style = toReactive($parseStyle(props.style ?? ''));

  const rawContent = props.badgeContent as BadgeContent | KTReactive<BadgeContent> | undefined;
  const content = toReactive<BadgeContent>(rawContent ?? '');
  const max = toReactive(props.max ?? 99);
  const showZero = toReactive(props.showZero ?? false);
  const invisible = toReactive(props.invisible ?? false);
  const color = toReactive(props.color ?? 'default');
  const variant = toReactive(props.variant ?? 'standard');
  const overlap = toReactive(props.overlap ?? 'rectangular');
  const anchorOrigin = toReactive(props.anchorOrigin ?? DEFAULT_ANCHOR_ORIGIN);

  const rootClass = customClass.toComputed((v) => 'mui-badge-root ' + v);

  const contentText = computed(() => {
    if (variant.value === 'dot') {
      return '';
    }

    const v = content.value;
    if (typeof v === 'number') {
      return v > max.value ? `${max.value}+` : `${v}`;
    }
    return v ?? '';
  }, [content, max, variant]);

  const isInvisible = computed(() => {
    if (invisible.value) {
      return true;
    }
    if (variant.value === 'dot') {
      return false;
    }
    const v = content.value;
    const isEmpty = v === '' || v === null || v === undefined;
    const isZero = v === 0 || v === '0';
    return isEmpty || (isZero && !showZero.value);
  }, [invisible, variant, content, showZero]);

  const badgeClass = computed(() => {
    const vertical = anchorOrigin.value?.vertical ?? DEFAULT_ANCHOR_ORIGIN.vertical;
    const horizontal = anchorOrigin.value?.horizontal ?? DEFAULT_ANCHOR_ORIGIN.horizontal;
    return [
      'mui-badge-badge',
      `mui-badge-${variant.value}`,
      `mui-badge-color-${color.value}`,
      `mui-badge-overlap-${overlap.value}`,
      `mui-badge-anchor-${vertical}-${horizontal}`,
      isInvisible.value ? 'mui-badge-invisible' : '',
    ].join(' ');
  }, [variant, color, overlap, anchorOrigin, isInvisible]);

  const container = (
    <span class={rootClass} style={style}>
      <span class="mui-badge-content">{props.children}</span>
      <span class={badgeClass} aria-hidden={isInvisible}>
        {contentText}
      </span>
    </span>
  ) as KTMuiBadge;

  registerPrefixedEvents(container, props);
  return container;
}
