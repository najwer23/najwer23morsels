import { ThemeConfig } from './Theme.types';

export const THEMES: Record<string, ThemeConfig> = {
  default: {
    name: 'Default',

    components: {
      button: {
        variants: {
          primary: {
            background: '#3F454B',
            border: '#343A40',
            text: '#FFFFFF',
            focus: '#3F454B',
          },
          secondary: {
            background: '#6B6F76',
            border: '#585C62',
            text: '#FFFFFF',
            focus: '#6B6F76',
          },
          danger: {
            background: '#C24141',
            border: '#A93434',
            text: '#FFFFFF',
            focus: '#C24141',
          },
          success: {
            background: '#367C59',
            border: '#2D684B',
            text: '#FFFFFF',
            focus: '#367C59',
          },
          copy: {
            background: '#B45309',
            border: '#92400E',
            text: '#FFFFFF',
            focus: '#B45309',
          },
          menu: {
            background: '#6B4FA0',
            border: '#593F89',
            text: '#FFFFFF',
            focus: '#6B4FA0',
          },
          disabled: {
            background: '#CFCFCF',
            border: '#C8C8C8',
            text: '#555555',
            focus: '#8A8A8A',
          },
          subtle: {
            background: '#F2F0EF',
            border: '#3F454B',
            text: '#343A40',
            focus: '#3F454B',
          },
        },
      },
    },
  },
};
