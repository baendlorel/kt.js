import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';

import './Badge.css.ts';
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
  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));
  const rootClassRef = customClassRef.toComputed((v) => 'mui-badge-root ' + v);

  const contentRef = toReactive<BadgeContent>((props.badgeContent as BadgeContent | KTReactive<BadgeContent>) ?? '');
  const maxRef = toReactive(props.max ?? 99);
  const showZeroRef = toReactive(props.showZero ?? false);
  const invisibleRef = toReactive(props.invisible ?? false);
  const colorRef = toReactive(props.color ?? 'default');
  const variantRef = toReactive(props.variant ?? 'standard');
  const overlapRef = toReactive(props.overlap ?? 'rectangular');
  const anchorOriginRef = toReactive(props.anchorOrigin ?? DEFAULT_ANCHOR_ORIGIN);

  const contentText = computed(() => {
    if (variantRef.value === 'dot') {
      return '';
    }

    const v = contentRef.value;
    if (typeof v === 'number') {
      return v > maxRef.value ? `${maxRef.value}+` : `${v}`;
    }
    return v ?? '';
  }, [contentRef, maxRef, variantRef]);

  const isInvisible = computed(() => {
    if (invisibleRef.value) {
      return true;
    }
    if (variantRef.value === 'dot') {
      return false;
    }
    const v = contentRef.value;
    const isEmpty = v === '' || v === null || v === undefined;
    const isZero = v === 0 || v === '0';
    return isEmpty || (isZero && !showZeroRef.value);
  }, [invisibleRef, variantRef, contentRef, showZeroRef]);

  const badgeClass = computed(() => {
    const vertical = anchorOriginRef.value?.vertical ?? DEFAULT_ANCHOR_ORIGIN.vertical;
    const horizontal = anchorOriginRef.value?.horizontal ?? DEFAULT_ANCHOR_ORIGIN.horizontal;
    return [
      'mui-badge-badge',
      `mui-badge-${variantRef.value}`,
      `mui-badge-color-${colorRef.value}`,
      `mui-badge-overlap-${overlapRef.value}`,
      `mui-badge-anchor-${vertical}-${horizontal}`,
      isInvisible.value ? 'mui-badge-invisible' : '',
    ].join(' ');
  }, [variantRef, colorRef, overlapRef, anchorOriginRef, isInvisible]);

  const container = (
    <span class={rootClassRef} style={styleRef}>
      <span class="mui-badge-content">{props.children}</span>
      <span class={badgeClass} aria-hidden={isInvisible}>
        {contentText}
      </span>
    </span>
  ) as KTMuiBadge;

  registerPrefixedEvents(container, props);
  return container;
}
