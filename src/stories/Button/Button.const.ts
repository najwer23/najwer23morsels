import { ButtonVariant } from './Button.types';

/**
 * Color palette for each Button variant.
 *
 * background - fill color of the button
 * border     - 1px border, a darker shade of the background
 * text       - label color (and loader color while loading)
 * focus      - outline color shown on keyboard focus (:focus-visible)
 */
export const BUTTON_VARIANTS: Record<
  ButtonVariant,
  { background: string; border: string; text: string; focus: string }
> = {
  // Default action: Log in, Save changes, Reset password. Dark charcoal.
  primary: { background: '#3F454B', border: '#343A40', text: '#FFFFFF', focus: '#3F454B' },

  // Neutral, lower-emphasis action: Close, Cancel, Back. Mid grey.
  secondary: { background: '#6B6F76', border: '#585C62', text: '#FFFFFF', focus: '#6B6F76' },

  // Destructive action: Delete, Remove, Discard. Red.
  danger: { background: '#C24141', border: '#A93434', text: '#FFFFFF', focus: '#C24141' },

  // Positive or confirming action: Sign up, Confirm, Publish. Green.
  success: { background: '#367C59', border: '#2D684B', text: '#FFFFFF', focus: '#367C59' },

  // Copy-to-clipboard and similar utility actions. Deep orange.
  copy: { background: '#B45309', border: '#92400E', text: '#FFFFFF', focus: '#B45309' },

  // Menu / dropdown / toolbar triggers. Purple.
  menu: { background: '#6B4FA0', border: '#593F89', text: '#FFFFFF', focus: '#6B4FA0' },

  // Unavailable state: shown for variant="disabled" or the disabled prop. Flat grey.
  disabled: { background: '#CFCFCF', border: '#C8C8C8', text: '#555555', focus: '#8A8A8A' },

  // Subtle UI controls: Sidebar toggles, toolbar controls, button with arrows.
};
