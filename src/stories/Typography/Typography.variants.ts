// Typography.variants.ts
import type { ThemeTypographyVariant } from '../Theme/Theme.types';
import { TypographyPreset } from './Typography.types';

// Shared bases
const formMessage: TypographyPreset = {
  mobileSize: 12,
  desktopSize: 12,
  fontWeight: 400,
  margin: '15px 0 10px',
};

const dialogMessage: TypographyPreset = {
  tag: 'p',
  mobileSize: 16,
  desktopSize: 16,
  fontWeight: 400,
  margin: '10px 0 0',
};

export const TYPOGRAPHY_VARIANTS: Record<ThemeTypographyVariant, TypographyPreset> = {
  display: {
    tag: 'h1',
    mobileSize: 42,
    desktopSize: 76,
    lineHeight: 1.05,
    fontWeight: 700,
    textWrap: 'balance',
    margin: 'clamp(40px, 8vw, 60px) 0 10px',
  },

  heading: {
    tag: 'h2',
    mobileSize: 30,
    desktopSize: 52,
    fontWeight: 650,
    lineHeight: 1.1,
    textWrap: 'balance',
    margin: 'clamp(30px, 8vw, 40px) 0 5px',
  },

  subheading: {
    tag: 'h3',
    mobileSize: 20,
    desktopSize: 26,
    lineHeight: 1.25,
    fontWeight: 500,
    margin: '30px 0 0',
  },

  body: {
    tag: 'p',
    mobileSize: 16,
    desktopSize: 17,
    fontWeight: 400,
    margin: '10px 0 0',
  },

  caption: {
    tag: 'span',
    mobileSize: 11,
    desktopSize: 12,
    lineHeight: 1,
    fontWeight: 600,
    margin: 0,
    style: { textTransform: 'uppercase' },
  },

  link: {
    tag: 'a',
    mobileSize: 'inherit',
    desktopSize: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontWeight: 'inherit',
    margin: 0,
  },

  validatorFormError: { ...formMessage, tag: 'p' },
  validatorFormSuccess: { ...formMessage, tag: 'p' },
  loaderForm: { ...formMessage },

  validatorInputError: {
    tag: 'p',
    mobileSize: 12,
    desktopSize: 12,
    fontWeight: 400,
    lineHeight: '14px',
    margin: '2px 0',
  },

  validatorDialogError: { ...dialogMessage },
  validatorDialogSuccess: { ...dialogMessage },

  loaderPage: {
    mobileSize: 16,
    desktopSize: 16,
    lineHeight: 1.2,
    fontWeight: 400,
    margin: 0,
  },
};
