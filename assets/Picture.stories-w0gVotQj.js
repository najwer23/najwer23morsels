import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as F}from"./iframe-UYaHvHS2.js";import{u as E}from"./useWindowSize-DREX08Te.js";import{g as L,T as N}from"./TextBox-DFC4gm2V.js";import"./preload-helper-PPVm8Dsz.js";const T="_n23mPictureFigure_ebjny_2",C="_n23mPicture_ebjny_2",I="_border_ebjny_11",R="_loaded_ebjny_25",a={n23mPictureFigure:T,n23mPicture:C,border:I,loaded:R},i=({children:r,className:h,style:f,draggable:g=!1,alt:x,src:P,srcDesktop:c,srcMobile:d,ar:j,arMobile:t,arDesktop:l,border:_=!1,borderColor:y="black",loading:w="lazy",srcset:b,sizes:v,maxHeight:S,maxHeightMobile:s,maxHeightDesktop:u,figcaption:p,figcaptionColor:z,...V})=>{const[q,B]=F.useState(!1),{width:m}=E();return e.jsxs("figure",{className:a.n23mPictureFigure,children:[e.jsxs("picture",{className:[a.n23mPicture,"n23mPicture",_&&a.border,q&&a.loaded,h].filter(Boolean).join(" "),...V,style:{...L({"--picture-bc":y,"--picture-mh":u||s?s&&m<767.98?s:u||s:S}),...f},children:[c&&e.jsx("source",{media:"(min-width: 768px)",srcSet:c}),d&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:d}),e.jsx("img",{sizes:v,srcSet:b,width:l||t?t&&m<767.98?t:l||t:j,height:1,src:c||d||P||"",alt:x,loading:w,onLoad:()=>B(!0),draggable:g})]}),p&&e.jsx("figcaption",{children:e.jsx(N,{tag:"p",desktopSize:12,mobileSize:12,color:z,margin:"3px 0 3px 0",children:p})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const G={title:"Picture/Picture",component:i,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:r=>e.jsx("div",{children:e.jsx(i,{...r,children:"hello world!"})})},n={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(i,{...r,children:"hello world!"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const J=["Default","PictureBorder"];export{o as Default,n as PictureBorder,J as __namedExportsOrder,G as default};
