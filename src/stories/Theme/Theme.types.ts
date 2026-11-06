export interface ThemeButtonColor {
  background: string;
  border: string;
  text: string;
  focus: string;
}

export interface ThemeButtonVariants {
  // Default action: Log in, Save changes, Reset password. Dark charcoal.
  primary: ThemeButtonColor;
  // Neutral, lower-emphasis action: Close, Cancel, Back. Mid grey.
  secondary: ThemeButtonColor;
  // Destructive action: Delete, Remove, Discard. Red.
  danger: ThemeButtonColor;
  // Positive or confirming action: Sign up, Confirm, Publish. Green.
  success: ThemeButtonColor;
  // Copy-to-clipboard and similar utility actions. Deep orange.
  copy: ThemeButtonColor;
  // Menu / dropdown / toolbar triggers. Purple.
  menu: ThemeButtonColor;
  // Unavailable state: shown for variant="disabled" or the disabled prop. Flat grey.
  disabled: ThemeButtonColor;
  /** Low-emphasis buttons for secondary UI controls, such as Calendar selections and toolbar actions. */
  subtle: ThemeButtonColor;
}

export type ThemeButtonVariant = keyof ThemeButtonVariants;

export interface ThemeButton {
  variants: ThemeButtonVariants;
}

export interface ThemeTypographyColor {
  color: string;
  hover?: string;
}

export interface ThemeTypographyColors {
  display: ThemeTypographyColor;
  heading: ThemeTypographyColor;
  subheading: ThemeTypographyColor;
  body: ThemeTypographyColor;
  caption: ThemeTypographyColor;
  link: ThemeTypographyColor;
  validatorFormError: ThemeTypographyColor;
  validatorFormSuccess: ThemeTypographyColor;
  validatorInputError: ThemeTypographyColor;
  validatorDialogError: ThemeTypographyColor;
  validatorDialogSuccess: ThemeTypographyColor;
  loaderForm: ThemeTypographyColor;
  loaderPage: ThemeTypographyColor;
}

export type ThemeTypographyVariant = keyof ThemeTypographyColors;

export interface ThemeTypography {
  colors: ThemeTypographyColors;
}

export interface ThemeSchema {
  name: string;

  components: {
    button: ThemeButton;
    typography: ThemeTypography;
  };
}
