import { create } from 'storybook/theming/create';

export default create({
  // Base theme: the starting point everything else overrides
  base: 'light', // 'light' | 'dark'

  // Brand (sidebar top-left)
  // brandTitle: 'holly',
  // brandUrl: 'https://example.com',
  // brandImage: 'logo.svg',
  // brandTarget: '_self', // '_blank' | '_self' | '_parent' | '_top'

  // // Main colors
  // colorPrimary: '#3A10E5',
  // colorSecondary: '#585C6D',

  // // UI
  // appBg: '#F6F9FC', // sidebar and overall app background
  // appContentBg: '#FFFFFF', // docs / panels content background
  // appPreviewBg: '#FFFFFF', // canvas (preview iframe) background
  // appBorderColor: '#E1E4E8',
  // appBorderRadius: 4,

  // // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace',

  // // Text colors
  // textColor: '#10162F',
  // textInverseColor: '#FFFFFF',
  // textMutedColor: '#5C6870',

  // // Toolbar
  // barTextColor: '#9E9E9E',
  // barHoverColor: '#585C6D',
  // barSelectedColor: '#585C6D',
  // barBg: '#FFFFFF',

  // // Buttons
  // buttonBg: '#F3F3F3',
  // buttonBorder: '#D0D5DD',

  // // Boolean toggle (Controls panel)
  // booleanBg: '#F1F1F1',
  // booleanSelectedBg: '#FFFFFF',

  // // Form inputs
  // inputBg: '#FFFFFF',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,

  // // Grid (used by the grid overlay in the toolbar)
  // gridCellSize: 20,
});
