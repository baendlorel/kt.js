import type { JSX } from '@ktjs/core';
import { type KTReactive, toReactive, computed } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Card.css';

export interface KTMuiCardProps extends KTMuiProps {
  variant?: 'elevation' | 'outlined' | 'contained';
  elevation?: number | KTReactive<number>;
  square?: boolean | KTReactive<boolean>;
  raised?: boolean | KTReactive<boolean>;
  'on:click'?: (event: MouseEvent) => void;
}

export type KTMuiCard = JSX.Element & {};

/**
 * Card component - mimics MUI Card appearance and behavior
 */
export function Card(props: KTMuiCardProps): KTMuiCard {
  // # ref props
  const variantRef = toReactive(props.variant ?? 'elevation');
  const elevationRef = toReactive(props.elevation ?? 1);
  const squareRef = toReactive(props.square ?? false);
  const raisedRef = toReactive(props.raised ?? false);
  const styleRef = toReactive($parseStyle(props.style ?? ''));
  const classRef = toReactive(props.class ?? '');

  const className = computed(() => {
    const base = 'mui-card';
    const variantClass = `mui-card-${variantRef.value}`;
    const elevationClass =
      variantRef.value === 'elevation' ? `mui-card-elevation-${Math.min(24, Math.max(0, elevationRef.value))}` : '';
    const squareClass = squareRef.value ? 'mui-card-square' : '';
    const raisedClass = raisedRef.value ? 'mui-card-raised' : '';
    return `${base} ${variantClass} ${elevationClass} ${squareClass} ${raisedClass} ${classRef.value}`
      .trim()
      .replace(/\s+/g, ' ');
  }, [variantRef, elevationRef, squareRef, raisedRef, classRef]);

  // Handle click
  const handleClick = props['on:click'] ?? (() => {});

  const container = (
    <div class={className} style={styleRef} on:click={handleClick}>
      {props.children}
    </div>
  ) as KTMuiCard;

  return container;
}
