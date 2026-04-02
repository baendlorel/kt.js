import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { computed } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';

import { toPseudoRef } from '../../common/pseudo-ref.js';
import type { KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute.js';
import './Card.css.js';

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
  const customClass = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const variantRef = toPseudoRef(props.variant ?? 'elevation');
  const elevationRef = toPseudoRef(props.elevation ?? 1);
  const squareRef = toPseudoRef(props.square ?? false);
  const raisedRef = toPseudoRef(props.raised ?? false);

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
