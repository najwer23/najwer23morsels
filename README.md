The npm package najwer23morsels allows you to style its React UI components using native CSS logic, primarily through global CSS variables, enabling full customization without relying on additional styling libraries. This approach means you can control component appearance by simply overriding CSS variables or applying your own CSS rules, maintaining straightforward and native styling workflows. It supports styling flexibility by leveraging standard CSS practices, making it easy to adapt the design system to your own needs while keeping the styling logic simple and native to the web platform.

# najwer23morsels

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://najwer23.github.io/najwer23morsels) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/najwer23/najwer23morsels) [![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/search?q=najwer23morsels)

1. Reusable UI Components
2. Documentation and Guidelines
3. Style Guides
4. Design Tokens
5. Tree shaking
6. Your own custom CSS classes

### Global css variables available

```CSS
:root {
    /* Main */
    --najwer23morselsFontFamily:  --fontFamily, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
      Cantarell, Ubuntu, roboto, noto, arial, sans-serif;

    /* MorselsTextBox  */
    --najwer23morselsTextBoxMargin: 20px;
    --najwer23morselsTextBoxColor: red;
    --najwer23morselsTextBoxColorHover: orange;
    --najwer23morselsTextBoxLineHeight: 1.42857;
    --najwer23morselsTextBoxFontWeight: 400;
    --najwer23morselsTextBoxFontWeightHover: 800;

    /* MorselsSlider */
    --najwer23morselsSliderArrowsColorBackground: white;
    --najwer23morselsSliderArrowsColorBorder: black;
    --najwer23morselsSliderArrowsColor: black;
}
```
