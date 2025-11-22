import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-DZALNTGB.js";import{u as E}from"./useWindowSize-CyYZj6xy.js";import{T as L}from"./TextBox-C6kT2mjf.js";import{g as N}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const T="_n23mPictureFigure_ebjny_2",I="_n23mPicture_ebjny_2",R="_border_ebjny_11",O="_loaded_ebjny_25",o={n23mPictureFigure:T,n23mPicture:I,border:R,loaded:O},t=({children:r,className:g,style:f,draggable:x=!1,alt:P,src:w,srcDesktop:d,srcMobile:l,ar:j,arMobile:s,arDesktop:u,border:v=!1,borderColor:y="black",loading:_="lazy",srcset:b,sizes:S,maxHeight:F,maxHeightMobile:a,maxHeightDesktop:p,figcaption:m,figcaptionColor:z,...V})=>{const[q,B]=C.useState(!1),{width:h}=E();return e.jsxs("figure",{className:o.n23mPictureFigure,children:[e.jsxs("picture",{className:[o.n23mPicture,"n23mPicture",v&&o.border,q&&o.loaded,g].filter(Boolean).join(" "),...V,style:{...N({"--picture-bc":y,"--picture-mh":p||a?a&&h<767.98?a:p||a:F}),...f},children:[d&&e.jsx("source",{media:"(min-width: 768px)",srcSet:d}),l&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:l}),e.jsx("img",{sizes:S,srcSet:b,width:u||s?s&&h<767.98?s:u||s:j,height:1,src:d||l||w||"",alt:P,loading:_,onLoad:()=>B(!0),draggable:x})]}),m&&e.jsx("figcaption",{children:e.jsx(L,{tag:"p",desktopSize:12,mobileSize:12,color:z,margin:"3px 0 3px 0",children:m})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const K={title:"Picture/Picture",component:t,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},n={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:r=>e.jsx("div",{children:e.jsx(t,{...r,children:"hello world!"})})},i={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(t,{...r,children:"hello world!"})})},c={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager",figcaption:"what a view!",figcaptionColor:"red"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(t,{...r,children:"hello world!"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    border: true,
    loading: 'eager',
    figcaption: 'what a view!',
    figcaptionColor: 'red'
  },
  render: args => <div style={{
    width: '300px',
    height: '400px'
  }}>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...c.parameters?.docs?.source}}};const Q=["Default","PictureBorder","PictureFigcaption"];export{n as Default,i as PictureBorder,c as PictureFigcaption,Q as __namedExportsOrder,K as default};
