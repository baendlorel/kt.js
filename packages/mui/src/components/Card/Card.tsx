import type { JSX } from '@ktjs/core';
import { type KTReactive, toReactive, computed } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';

import './Card.css.ts';
import type { KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute.js';

export interface KTMuiCardProps extends KTMuiProps {
  variant?: 'elevation' | 'outlined' | 'contained';
  elevation?: number | KTReactive<number>;
  square?: boolean | KTReactive<boolean>;
  raised?: boolean | KTReactive<boolean>;
  'on:click'?: (event: PointerEvent) => void;
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
