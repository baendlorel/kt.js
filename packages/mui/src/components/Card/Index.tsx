import type { JSX } from '@ktjs/core';
import { type KTReactive, toReactive, computed } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';

import './Card.css';
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
  const variant = toReactive(props.variant ?? 'elevation');
  const elevation = toReactive(props.elevation ?? 1);
  const square = toReactive(props.square ?? false);
  const raised = toReactive(props.raised ?? false);
  const style = toReactive($parseStyle(props.style ?? ''));
  const customClass = toReactive(props.class ?? '');

  const className = computed(() => {
    return [
      `mui-card`,
      `mui-card-${variant.value}`,
      variant.value === 'elevation' ? `mui-card-elevation-${Math.min(24, Math.max(0, elevation.value))}` : '',
      square.value ? 'mui-card-square' : '',
      raised.value ? 'mui-card-raised' : '',
      customClass.value,
    ].join(' ');
  }, [variant, elevation, square, raised, customClass]);

  const container = (
    <div class={className} style={style} on:click={props['on:click']}>
      {props.children}
    </div>
  ) as KTMuiCard;

  registerPrefixedEvents(container, props);
  return container;
}
