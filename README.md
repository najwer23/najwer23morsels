The najwer23morsels npm package offers React user interface components that support styling through configurable parameters or by applying custom CSS classes. This design system uses native CSS features, mainly global CSS variables, to enable comprehensive customization of component appearance. Instead of relying on external styling libraries, you can control the look and feel by overriding these CSS variables or by adding your own CSS rules. This method ensures that styling remains straightforward, maintainable, and fully compatible with standard web technologies. By following native CSS conventions, the package provides a flexible and efficient way to adapt the design system to different branding requirements or design preferences while keeping the styling logic clear and easy to manage.

[![NPM Downloads](https://img.shields.io/npm/dm/najwer23morsels?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/najwer23morsels)

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

```css
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

[![Portfolio](https://img.shields.io/badge/Portfolio-9F2B68?style=for-the-badge&logo=paintbrush&logoColor=white)](https://najwer23.github.io/)
[![Résumé](https://img.shields.io/badge/Résumé-017745?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://najwer23.github.io/resume/)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/najwer23)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/najwer23/)
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/~najwer23)




