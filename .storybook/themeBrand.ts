import { create } from 'storybook/theming/create';

export default create({
  // Base theme: the starting point everything else overrides
  base: 'dark', // 'light' | 'dark'

  // Brand (sidebar top-left)
  brandTitle: 'najwer23morsels',
  brandUrl: 'https://najwer23.github.io/najwer23morsels',
  brandImage: 'logo.svg',
  brandTarget: '_self', // '_blank' | '_self' | '_parent' | '_top'
});
