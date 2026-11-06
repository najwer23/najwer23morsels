import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t}from"./Theme-V6EXnANl.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{x as r}from"./iframe-wbJEx1eG.js";import{c as i,d as a,h as o,l as s,m as c}from"./blocks-DoczLpLa.js";function l(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`Documentation/Theme/Theme Schema`}),`
`,(0,d.jsx)(n.h1,{id:`theme-schema`,children:`Theme Schema`}),`
`,(0,d.jsx)(n.p,{children:`A theme is a plain TypeScript object that defines the colors used by the components in this library. Components read their colors from the active theme instead of hard-coding them, so you can restyle everything by changing one object.`}),`
`,(0,d.jsxs)(n.p,{children:[`Three themes are built in: `,(0,d.jsx)(n.code,{children:`default`}),`, `,(0,d.jsx)(n.code,{children:`ocean`}),` and `,(0,d.jsx)(n.code,{children:`forest`}),`. You can also pass your own schema, with no changes to the library.`]}),`
`,(0,d.jsx)(n.h2,{id:`default-theme`,children:`Default theme`}),`
`,(0,d.jsxs)(n.p,{children:[`The full schema of the `,(0,d.jsx)(n.code,{children:`default`}),` theme, generated from the source code so it is always up to date.`]}),`
`,(0,d.jsx)(s,{language:`json`,code:JSON.stringify(t.default,null,2)}),`
`,(0,d.jsx)(n.h2,{id:`using-a-built-in-theme`,children:`Using a built-in theme`}),`
`,(0,d.jsxs)(n.p,{children:[`Wrap your app (or any part of it) in `,(0,d.jsx)(n.code,{children:`Theme`}),` and choose a theme with `,(0,d.jsx)(n.code,{children:`themeName`}),`. If you omit it, `,(0,d.jsx)(n.code,{children:`default`}),` is used.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-tsx`,children:`<Theme themeName="ocean">
  <App />
</Theme>
`})}),`
`,(0,d.jsx)(n.h2,{id:`using-your-own-schema`,children:`Using your own schema`}),`
`,(0,d.jsxs)(n.p,{children:[`Pass a schema object to the `,(0,d.jsx)(n.code,{children:`themeSchema`}),` prop. It follows the structure above and takes priority over `,(0,d.jsx)(n.code,{children:`themeName`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-tsx`,children:`import { Theme, ThemeSchema } from 'najwer23morsels/lib/Theme';

const sunset: ThemeSchema = {
  name: 'Sunset',
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

<Theme themeSchema={sunset}>
  <App />
</Theme>
`})}),`
`,(0,d.jsxs)(n.p,{children:[`Typing the object as `,(0,d.jsx)(n.code,{children:`ThemeSchema`}),` makes TypeScript report missing or misspelled keys.`]}),`
`,(0,d.jsx)(n.h3,{id:`tips`,children:`Tips`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Define every variant and token.`}),` The schema is a full `,(0,d.jsx)(n.code,{children:`ThemeSchema`}),`, not a partial one.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Keep text readable.`}),` Check that `,(0,d.jsx)(n.code,{children:`text`}),` has enough contrast against `,(0,d.jsx)(n.code,{children:`background`}),` (WCAG AA recommends 4.5:1 for normal text).`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Scope a theme to part of the page.`}),` Colors are applied to the wrapping element, so you can nest `,(0,d.jsx)(n.code,{children:`Theme`}),` components to style one section differently.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`Target a theme in CSS.`}),` The wrapper sets a `,(0,d.jsx)(n.code,{children:`data-n23m-theme`}),` attribute with the theme `,(0,d.jsx)(n.code,{children:`name`}),`, and adds the `,(0,d.jsx)(n.code,{children:`n23mTheme`}),` class.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=n(),c(),a(),r()})))()}f();export{u as default};