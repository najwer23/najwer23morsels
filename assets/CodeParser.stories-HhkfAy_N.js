import{j as e}from"./jsx-runtime-D_zvdyIk.js";const t="_n23mCodeParserContainer_jarsd_40",i={n23mCodeParserContainer:t},n=({children:a,className:o,...s})=>e.jsx("div",{className:[i.n23mCodeParserContainer,"MorselsCodeParser",o].filter(Boolean).join(" "),...s,children:e.jsx("pre",{children:e.jsx("code",{children:a})})});n.displayName="CodeParser";n.__docgenInfo={description:"",methods:[],displayName:"CodeParser",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const c={title:"CodeParser/CodeParser",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{},render:a=>e.jsx("div",{children:e.jsx(n,{...a,children:`@keyframes rounded-mask-reveal {
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
