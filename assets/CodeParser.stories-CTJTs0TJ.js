import{j as e}from"./jsx-runtime-u17CrQMm.js";const t="_n23mCodeParser_t5r6o_36",i={n23mCodeParser:t},a=({children:o,className:n,...s})=>e.jsx("div",{className:[i.n23mCodeParser,"n23mCodeParser",n].filter(Boolean).join(" "),...s,children:e.jsx("pre",{children:e.jsx("code",{children:o})})});a.displayName="CodeParser";a.__docgenInfo={description:"",methods:[],displayName:"CodeParser",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const c={title:"CodeParser/CodeParser",component:a,parameters:{layout:"centered",docs:{description:{component:`
This is a CodeParser component that can be used to display code snippets with syntax highlighting. It supports various properties such as language, theme, and more.

You can import the CodeParser component from the library and use it in your application as follows:
\`\`\`tsx
import { CodeParser } from 'najwer23morsels/lib/CodeParser';
\`\`\`
      `}}},tags:["autodocs"]},r={args:{},render:o=>e.jsx("div",{children:e.jsx(a,{...o,children:`@keyframes rounded-mask-reveal {
  from {
    clip-path: inset(10% 10% 10% 10% round 30px);
  }
  to {
    clip-path: inset(0% 0% 0% 0% round 30px);
  }
}

video {
  animation: rounded-mask-reveal linear both;
  animation-timeline: view();
  animation-range: cover 0% cover 50%;
}`})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div>
      <CodeParser {...args}>{\`@keyframes rounded-mask-reveal {
  from {
    clip-path: inset(10% 10% 10% 10% round 30px);
  }
  to {
    clip-path: inset(0% 0% 0% 0% round 30px);
  }
}

video {
  animation: rounded-mask-reveal linear both;
  animation-timeline: view();
  animation-range: cover 0% cover 50%;
}\`}</CodeParser>
    </div>
}`,...r.parameters?.docs?.source}}};const m=["Default"];export{r as Default,m as __namedExportsOrder,c as default};
