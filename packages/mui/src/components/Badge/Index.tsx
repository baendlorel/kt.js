import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Badge.css';

type BadgeColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type BadgeVariant = 'standard' | 'dot';
type BadgeOverlap = 'rectangular' | 'circular';

export interface KTMuiBadgeAnchorOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

type BadgeContent = string | number;

export interface KTMuiBadgeProps extends KTMuiProps {
  badgeContent?: BadgeContent | KTReactive<number> | KTReactive<string>;
  max?: number | KTReactive<number>;
  showZero?: boolean | KTReactive<boolean>;
  invisible?: boolean | KTReactive<boolean>;
  color?: BadgeColor | KTReactive<BadgeColor>;
  variant?: BadgeVariant | KTReactive<BadgeVariant>;
  overlap?: BadgeOverlap | KTReactive<BadgeOverlap>;
  anchorOrigin?: KTMuiBadgeAnchorOrigin | KTReactive<KTMuiBadgeAnchorOrigin>;
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
  const rawContent = props.badgeContent as BadgeContent | KTReactive<BadgeContent> | undefined;
  const contentRef = toReactive<BadgeContent>(rawContent ?? '');
  const maxRef = toReactive(props.max ?? 99);
  const showZeroRef = toReactive(props.showZero ?? false);
  const invisibleRef = toReactive(props.invisible ?? false);
  const colorRef = toReactive(props.color ?? 'default');
  const variantRef = toReactive(props.variant ?? 'standard');
  const overlapRef = toReactive(props.overlap ?? 'rectangular');
  const anchorOriginRef = toReactive(props.anchorOrigin ?? DEFAULT_ANCHOR_ORIGIN);
  const classRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style ?? ''));

  const rootClass = computed(() => {
    return ['mui-badge-root', classRef.value].join(' ').trim();
  }, [classRef]);

  const contentText = computed(() => {
    if (variantRef.value === 'dot') {
      return '';
    }

    const content = contentRef.value;
    if (typeof content === 'number') {
      return content > maxRef.value ? `${maxRef.value}+` : `${content}`;
    }
    return content ?? '';
  }, [contentRef, maxRef, variantRef]);

  const isInvisible = computed(() => {
    if (invisibleRef.value) {
      return true;
    }
    if (variantRef.value === 'dot') {
      return false;
    }
    const content = contentRef.value;
    const isEmpty = content === '' || content === null || content === undefined;
    const isZero = content === 0 || content === '0';
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
    ]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');
  }, [variantRef, colorRef, overlapRef, anchorOriginRef, isInvisible]);

  const container = (
    <span class={rootClass} style={styleRef}>
      <span class="mui-badge-content">{props.children}</span>
      <span class={badgeClass} aria-hidden={isInvisible}>
        {contentText}
      </span>
    </span>
  ) as KTMuiBadge;

  return container;
}
