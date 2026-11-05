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

      typography: {
        colors: {
          display: { color: '#0F1014' },
          heading: { color: '#14151A' },
          subheading: { color: '#3F4043' },
          body: { color: '#26272E' },
          caption: { color: '#6B6D76' },
          link: {
            color: '#C73500',
            hover: '#C73500',
          },
          validatorFormError: { color: '#B42318' },
          validatorFormSuccess: { color: '#187A3D' },
          validatorInputError: { color: '#B42318' },
          validatorDialogError: { color: '#B42318' },
          validatorDialogSuccess: { color: '#187A3D' },
          loaderForm: { color: '#5F6368' },
          loaderPage: { color: 'black' },
        },
      },
    },
  },

  ocean: {
    name: 'Ocean',

    components: {
      button: {
        variants: {
          primary: {
            background: '#176B87',
            border: '#10566E',
            text: '#FFFFFF',
            focus: '#176B87',
          },
          secondary: {
            background: '#586D78',
            border: '#455963',
            text: '#FFFFFF',
            focus: '#586D78',
          },
          danger: {
            background: '#B42318',
            border: '#921B13',
            text: '#FFFFFF',
            focus: '#B42318',
          },
          success: {
            background: '#187A5A',
            border: '#126448',
            text: '#FFFFFF',
            focus: '#187A5A',
          },
          copy: {
            background: '#A64B0A',
            border: '#843B08',
            text: '#FFFFFF',
            focus: '#A64B0A',
          },
          menu: {
            background: '#62509A',
            border: '#4F407D',
            text: '#FFFFFF',
            focus: '#62509A',
          },
          disabled: {
            background: '#CDD7DB',
            border: '#BECBD0',
            text: '#4B5960',
            focus: '#82969E',
          },
          subtle: {
            background: '#EAF3F6',
            border: '#176B87',
            text: '#164C60',
            focus: '#176B87',
          },
        },
      },

      typography: {
        colors: {
          display: { color: '#102C38' },
          heading: { color: '#153744' },
          subheading: { color: '#345563' },
          body: { color: '#263F49' },
          caption: { color: '#617983' },
          link: {
            color: '#006B8F',
            hover: '#00536F',
          },
          validatorFormError: { color: '#B42318' },
          validatorFormSuccess: { color: '#187A3D' },
          validatorInputError: { color: '#B42318' },
          validatorDialogError: { color: '#B42318' },
          validatorDialogSuccess: { color: '#187A3D' },
          loaderForm: { color: '#586D78' },
          loaderPage: { color: '#176B87' },
        },
      },
    },
  },

  forest: {
    name: 'Forest',

    components: {
      button: {
        variants: {
          primary: {
            background: '#315B45',
            border: '#254735',
            text: '#FFFFFF',
            focus: '#315B45',
          },
          secondary: {
            background: '#6C756C',
            border: '#565F56',
            text: '#FFFFFF',
            focus: '#6C756C',
          },
          danger: {
            background: '#B42318',
            border: '#921B13',
            text: '#FFFFFF',
            focus: '#B42318',
          },
          success: {
            background: '#287A48',
            border: '#206239',
            text: '#FFFFFF',
            focus: '#287A48',
          },
          copy: {
            background: '#A45116',
            border: '#833F11',
            text: '#FFFFFF',
            focus: '#A45116',
          },
          menu: {
            background: '#69538B',
            border: '#554270',
            text: '#FFFFFF',
            focus: '#69538B',
          },
          disabled: {
            background: '#D2D5CE',
            border: '#C3C8BE',
            text: '#555B51',
            focus: '#8B9485',
          },
          subtle: {
            background: '#F0F2EB',
            border: '#53634F',
            text: '#354631',
            focus: '#53634F',
          },
        },
      },

      typography: {
        colors: {
          display: { color: '#1C2B20' },
          heading: { color: '#26392A' },
          subheading: { color: '#455847' },
          body: { color: '#343F35' },
          caption: { color: '#687568' },
          link: {
            color: '#28613E',
            hover: '#1D4B2F',
          },
          validatorFormError: { color: '#B42318' },
          validatorFormSuccess: { color: '#187A3D' },
          validatorInputError: { color: '#B42318' },
          validatorDialogError: { color: '#B42318' },
          validatorDialogSuccess: { color: '#187A3D' },
          loaderForm: { color: '#687568' },
          loaderPage: { color: '#315B45' },
        },
      },
    },
  },
} as const satisfies Record<string, ThemeConfig>;

export type ThemeName = keyof typeof THEMES;
