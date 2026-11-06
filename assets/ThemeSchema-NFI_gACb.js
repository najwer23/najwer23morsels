import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t}from"./Theme-dRwbthXJ.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{x as r}from"./iframe-Ck-V0SGv.js";import{c as i,d as a,h as o,l as s,m as c}from"./blocks-BzXYOWoj.js";function l(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`Documentation/Theme/Schema`}),`
`,(0,d.jsx)(n.h1,{id:`theme-schema`,children:`Theme Schema`}),`
`,(0,d.jsx)(n.p,{children:`The theme system provides a centralized way to customize the visual appearance of components across your application. Instead of relying on hard-coded colors, components use design tokens defined in a shared theme schema.`}),`
`,(0,d.jsx)(n.p,{children:`A theme is a strongly typed TypeScript object that defines the colors used by individual components, their variants, and typography elements. This approach keeps styling consistent, makes customization straightforward, and allows you to change the appearance of your application without modifying individual components.`}),`
`,(0,d.jsxs)(n.p,{children:[`The library includes three predefined themes: `,(0,d.jsx)(n.code,{children:`default`}),`, `,(0,d.jsx)(n.code,{children:`ocean`}),`, and `,(0,d.jsx)(n.code,{children:`forest`}),`. You can use them as provided or create your own theme to match your application's visual identity.`]}),`
`,(0,d.jsx)(n.h1,{id:`available-themes`,children:`Available Themes`}),`
`,(0,d.jsx)(n.p,{children:`The following themes are included in the library:`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Default`}),` – A neutral, versatile color palette suitable for general-purpose applications.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Ocean`}),` – A cool-toned palette inspired by ocean colors.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Forest`}),` – A nature-inspired palette with earthy green tones.`]}),`
`]}),`
`,(0,d.jsx)(n.h1,{id:`default-theme-schema`,children:`Default Theme Schema`}),`
`,(0,d.jsxs)(n.p,{children:[`The complete schema of the built-in `,(0,d.jsx)(n.code,{children:`default`}),` theme is displayed below. It is generated directly from the source configuration, ensuring that the documentation always reflects the latest available theme structure.`]}),`
`,(0,d.jsx)(s,{language:`json`,code:JSON.stringify(t.default,null,2)}),`
`,(0,d.jsx)(n.h1,{id:`using-a-built-in-theme`,children:`Using a Built-in Theme`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`Theme`}),` component provides a simple way to apply a predefined theme to your application.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Pass the desired theme name through the `,(0,d.jsx)(n.code,{children:`name`}),` prop. The selected theme is applied to the wrapping element and inherited by its child components.`]}),`
`,(0,d.jsxs)(n.p,{children:[`If no theme is specified, the `,(0,d.jsx)(n.code,{children:`default`}),` theme is used.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-tsx`,children:`import { Theme } from 'najwer23morsels/lib/Theme';

const App = () => (
  <Theme name="ocean">
    <AppContent />
  </Theme>
);
`})}),`
`,(0,d.jsx)(n.h1,{id:`creating-a-custom-theme`,children:`Creating a Custom Theme`}),`
`,(0,d.jsxs)(n.p,{children:[`You can define your own color palette by creating an object that follows the `,(0,d.jsx)(n.code,{children:`ThemeSchema`}),` interface.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Pass your custom configuration through the `,(0,d.jsx)(n.code,{children:`schema`}),` prop instead of selecting a predefined theme with `,(0,d.jsx)(n.code,{children:`name`}),`. The custom schema takes precedence over the built-in theme selection.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-tsx`,children:`import { Theme, ThemeSchema } from 'najwer23morsels/lib/Theme';

const sunset: ThemeSchema = {
  name: 'sunset',
  components: {
    button: {
      variants: {
        primary: {
          background: '#C2410C',
          border: '#9A3412',
          text: '#FFFFFF',
          focus: '#C2410C',
        },
        // ...all other variants
      },
    },
    typography: {
      colors: {
        body: { color: '#292524' },
        // ...all other tokens
      },
    },
  },
};

const App = () => (
  <Theme schema={sunset}>
    <AppContent />
  </Theme>
);
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`ThemeSchema`}),` type provides compile-time validation of your configuration. TypeScript reports missing required properties and misspelled keys, helping prevent incomplete or incorrectly structured themes.`]}),`
`,(0,d.jsx)(n.h1,{id:`theme-configuration-tips`,children:`Theme Configuration Tips`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Define all required tokens.`}),` A theme represents a complete configuration rather than a partial override. Make sure every component variant and typography token is included.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Maintain sufficient color contrast.`}),` Ensure text colors are readable against their corresponding backgrounds. For normal-sized text, WCAG 2.1 AA requires a minimum contrast ratio of 4.5:1.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Use consistent color relationships.`}),` Keep backgrounds, borders, text, and focus indicators visually consistent across component variants.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Scope themes to specific sections.`}),` Themes are applied to the wrapping element, allowing you to nest `,(0,d.jsx)(n.code,{children:`Theme`}),` components and create independently styled sections within the same application.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Target themes in CSS.`}),` The wrapper exposes a `,(0,d.jsx)(n.code,{children:`data-n23m-theme`}),` attribute containing the theme name and applies the `,(0,d.jsx)(n.code,{children:`n23mTheme`}),` class. This allows you to write theme-specific styles when needed.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=n(),c(),a(),r()})))()}f();export{u as default};