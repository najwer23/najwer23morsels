import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as P}from"./iframe-71p0qQ0A.js";import{u as I}from"./useWindowSize-VxZ8JhSj.js";import{T as N}from"./TextBox-Diiw4o0R.js";import{g as R}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const T="_n23mPictureFigure_11cex_2",O="_n23mPicture_11cex_2",U="_border_11cex_11",W="_loaded_11cex_25",Y="_cacheLoaded_11cex_30",t={n23mPictureFigure:T,n23mPicture:O,border:U,loaded:W,cacheLoaded:Y},a=({children:r,className:w,style:_,draggable:j=!1,alt:v,src:m,srcDesktop:o,srcMobile:s,ar:y,arMobile:n,arDesktop:h,border:S=!1,borderColor:b="black",loading:L="lazy",srcset:F,sizes:z,maxHeight:V,maxHeightMobile:c,maxHeightDesktop:g,figcaption:f,figcaptionColor:q,...B})=>{const[C,E]=P.useState(!1),{width:x}=I(),u=P.useRef(!1),p=new Image;return p.src=o||s||m||"",u.current=p.complete,p.src="",e.jsxs("figure",{className:t.n23mPictureFigure,children:[e.jsxs("picture",{className:[t.n23mPicture,"n23mPicture",S&&t.border,C&&t.loaded,u.current&&t.cacheLoaded,w].filter(Boolean).join(" "),...B,style:{...R({"--picture-bc":b,"--picture-mh":g||c?c&&x<767.98?c:g||c:V}),..._},children:[o&&e.jsx("source",{media:"(min-width: 768px)",srcSet:o}),s&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:s}),e.jsx("img",{sizes:z,srcSet:F,width:h||n?n&&x<767.98?n:h||n:y,height:1,src:o||s||m||"",alt:v,loading:L,onLoad:()=>E(()=>!u.current),draggable:j})]}),f&&e.jsx("figcaption",{children:e.jsx(N,{tag:"p",desktopSize:12,mobileSize:12,color:q,margin:"3px 0 3px 0",children:f})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const Z={title:"Picture/Picture",component:a,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},i={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:r=>e.jsx("div",{children:e.jsx(a,{...r,children:"hello world!"})})},d={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(a,{...r,children:"hello world!"})})},l={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager",figcaption:"what a view!",figcaptionColor:"red"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(a,{...r,children:"hello world!"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const $=["Default","PictureBorder","PictureFigcaption"];export{i as Default,d as PictureBorder,l as PictureFigcaption,$ as __namedExportsOrder,Z as default};
