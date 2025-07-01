The najwer23morsels npm package allows you to style React UI components using native CSS logic, primarily through global CSS variables. This enables full customization without relying on additional styling libraries. With this approach, you can control the appearance of a component simply by overriding CSS variables or applying your own CSS rules, keeping styling workflows simple and native. It supports styling flexibility by leveraging standard CSS practices, making it easy to customize the design system to your needs while maintaining styling logic that is straightforward and native to the web platform.

![NPM Downloads](https://img.shields.io/npm/dm/najwer23morsels)

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
    --n23mFontFamily:  --fontFamily, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
      Cantarell, Ubuntu, roboto, noto, arial, sans-serif;

    /* MorselsTextBox  */
    --n23mTextBoxMargin: 20px;
    --n23mTextBoxColor: red;
    --n23mTextBoxColorHover: orange;
    --n23mTextBoxLineHeight: 1.42857;
    --n23mTextBoxFontWeight: 400;
    --n23mTextBoxFontWeightHover: 800;

    /* MorselsButton */
    --n23mButtonBg: black;
    --n23mButtonBorderColor: black;
    --n23mButtonBgDisabled: black;
}
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
