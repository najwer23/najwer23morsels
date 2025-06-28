The npm package najwer23morsels allows you to style its React UI components using native CSS logic, primarily through global CSS variables, enabling full customization without relying on additional styling libraries. This approach means you can control component appearance by simply overriding CSS variables or applying your own CSS rules, maintaining straightforward and native styling workflows. It supports styling flexibility by leveraging standard CSS practices, making it easy to adapt the design system to your own needs while keeping the styling logic simple and native to the web platform.

# najwer23morsels

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://najwer23.github.io/najwer23morsels) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/najwer23/najwer23morsels) [![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/search?q=najwer23morsels)

1. Reusable UI Components
2. Documentation and Guidelines
3. Style Guides
4. Design Tokens
5. Tree shaking
6. Your own custom CSS classes

# Install

```js
yarn add najwer23morsels --dev
```

```js
npm install najwer23morsels --save-dev
```

# Example

```typescript
import { TextBox } from "najwer23morsels/lib/textbox";

export const Example = () => {
    return (
        <TextBox color="grey" mobileSize={20} desktopSize={20}>
            Hello!
        </TextBox>
    );
}
```

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

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)