import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { toReactive, computed } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';

import './Card.css.ts';
import type { KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute.js';

export type KTMuiCardVariant = 'elevation' | 'outlined' | 'contained';

export interface KTMuiCardProps extends KTMuiProps {
  variant?: KTMaybeReactive<KTMuiCardVariant>;
  elevation?: KTMaybeReactive<number>;
  square?: KTMaybeReactive<boolean>;
  raised?: KTMaybeReactive<boolean>;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiCard = JSX.Element & {};

/**
 * Card component - mimics MUI Card appearance and behavior
 */
export function Card(props: KTMuiCardProps): KTMuiCard {
  // # ref props
  const customClass = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const variantRef = toReactive(props.variant ?? 'elevation');
  const elevationRef = toReactive(props.elevation ?? 1);
  const squareRef = toReactive(props.square ?? false);
  const raisedRef = toReactive(props.raised ?? false);

  const className = computed(() => {
    return [
      `mui-card`,
      `mui-card-${variantRef.value}`,
      variantRef.value === 'elevation' ? `mui-card-elevation-${Math.min(24, Math.max(0, elevationRef.value))}` : '',
      squareRef.value ? 'mui-card-square' : '',
      raisedRef.value ? 'mui-card-raised' : '',
      customClass.value,
    ].join(' ');
  }, [variantRef, elevationRef, squareRef, raisedRef, customClass]);

  const container = (
    <div class={className} style={styleRef} on:click={props['on:click']}>
      {props.children}
    </div>
  ) as KTMuiCard;

  registerPrefixedEvents(container, props);
  return container;
}
