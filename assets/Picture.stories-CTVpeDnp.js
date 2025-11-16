import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as E}from"./iframe-CX9DNCml.js";import{u as L}from"./useWindowSize-CePX8s5S.js";import{g as C}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const I="_n23mPicture_zb5xs_2",N="_border_zb5xs_6",R="_loaded_zb5xs_20",i={n23mPicture:I,border:N,loaded:R},n=({children:r,className:m,style:h,draggable:f=!1,alt:g,src:x,srcDesktop:c,srcMobile:d,ar:P,arMobile:t,arDesktop:l,border:w=!1,borderColor:_="black",loading:j="lazy",maxHeight:v,sizes:y,maxHeightMobile:s,maxHeightDesktop:u,srcset:b,...S})=>{const[z,V]=E.useState(!1),{width:p}=L(),q=l||t?t&&p<767.98?t:l||t:P,B=u||s?s&&p<767.98?s:u||s:v;return e.jsxs("picture",{className:[i.n23mPicture,"n23mPicture",w&&i.border,z&&i.loaded,m].filter(Boolean).join(" "),...S,style:{...C({"--picture-bc":_,"--picture-mh":B}),...h},children:[c&&e.jsx("source",{media:"(min-width: 768px)",srcSet:c}),d&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:d}),e.jsx("img",{sizes:y,srcSet:b,width:q,height:1,src:c||d||x||"",alt:g,loading:j,onLoad:()=>V(!0),draggable:f})]})};n.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const Y={title:"Picture/Picture",component:n,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},a={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:r=>e.jsx("div",{children:e.jsx(n,{...r,children:"hello world!"})})},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(n,{...r,children:"hello world!"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    border: true,
    loading: 'eager'
  },
  render: args => <div style={{
    width: '300px',
    height: '400px'
  }}>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...o.parameters?.docs?.source}}};const F=["Default","PictureBorder"];export{a as Default,o as PictureBorder,F as __namedExportsOrder,Y as default};
