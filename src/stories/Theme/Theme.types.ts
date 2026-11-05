export interface ThemeButtonColor {
  background: string;
  border: string;
  text: string;
  focus: string;
}

export interface ThemeButtonVariants {
  primary: ThemeButtonColor;
  secondary: ThemeButtonColor;
  danger: ThemeButtonColor;
  success: ThemeButtonColor;
  copy: ThemeButtonColor;
  menu: ThemeButtonColor;
  disabled: ThemeButtonColor;
}

export interface ThemeButton {
  variants: ThemeButtonVariants;
}

export interface ThemeConfig {
  name: string;

  components: {
    button: ThemeButton;
  };
}
