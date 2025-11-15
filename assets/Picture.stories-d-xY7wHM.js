import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-CRLBbyvq.js";import{g as _}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const b="_n23mPicture_10xqu_2",P="_border_10xqu_5",j="_loaded_10xqu_20",t={n23mPicture:b,border:P,loaded:j},s=({children:o,className:a,style:l,draggable:d=!1,alt:c,src:i,ar:u,border:n=!1,borderColor:m="black",maxHeight:p,...f})=>{const[h,g]=x.useState(!1);return r.jsx("picture",{className:[t.n23mPicture,"n23mPicture",n&&t.border,h&&t.loaded,a].filter(Boolean).join(" "),...f,style:{..._({"--picture-bc":m,"--picture-mh":p}),...l},children:r.jsx("img",{width:u,height:1,src:i,alt:c,loading:"lazy",onLoad:()=>g(!0),draggable:d})})};s.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1}}};const V={title:"Picture/Picture",component:s,parameters:{layout:"centered",docs:{description:{component:"\nTest Test\n\n```tsx\nimport { Picture } from 'najwer23morsels/lib/picture';\n```\n      "}}},tags:["autodocs"]},e={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:o=>r.jsx("div",{children:r.jsx(s,{...o,children:"hello world!"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...e.parameters?.docs?.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,V as default};
