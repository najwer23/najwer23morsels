import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-2h5s4yBs.js";import{u as q}from"./useWindowSize-Dv6FYWNr.js";import{T as B}from"./TextBox-D9DrAIot.js";import{g as R}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const N=(t,u=25)=>{const[w,n]=d.useState(null),o=d.useRef(null),m=d.useCallback((r,s,c=null)=>{let a;const p=new Promise((j,_)=>{a=setTimeout(()=>_(c),r)});return Promise.race([s,p]).finally(()=>{clearTimeout(a)})},[]);return d.useEffect(()=>{if(!t){n(null);return}const r=new Image;o.current=r;const s=new Promise((c,a)=>{r.onload=()=>c(r),r.onerror=()=>a(new Error("Image load error")),r.src=t});return m(u,s,"Image not loaded from cache").then(()=>n(!0)).catch(()=>n(!1)).finally(()=>{o.current=null}),()=>{o.current&&(o.current.onload=null,o.current.onerror=null,o.current=null)}},[t,u,m]),w},k="_n23mPictureFigure_11cex_2",O="_n23mPicture_11cex_2",U="_border_11cex_11",W="_loaded_11cex_25",Y="_cacheLoaded_11cex_30",i={n23mPictureFigure:k,n23mPicture:O,border:U,loaded:W,cacheLoaded:Y},l=({children:t,className:u,style:w,draggable:n=!1,alt:o,src:m,srcDesktop:r,srcMobile:s,ar:c,arMobile:a,arDesktop:p,border:j=!1,borderColor:_="black",loading:b="lazy",srcset:I,sizes:L,maxHeight:T,maxHeightMobile:h,maxHeightDesktop:v,figcaption:y,figcaptionColor:F,...z})=>{const[E,V]=d.useState(!1),{width:g}=q(),S=r&&g>=768?r:s&&g<768?s:m||"",C=N(S,25);return e.jsxs("figure",{className:i.n23mPictureFigure,children:[e.jsxs("picture",{className:["n23mPicture",i.n23mPicture,j&&i.border,E&&!C&&i.loaded,C&&i.cacheLoaded,u].filter(Boolean).join(" "),...z,style:{...R({"--picture-bc":_,"--picture-mh":v||h?h&&g<767.98?h:v||h:T}),...w},children:[r&&e.jsx("source",{media:"(min-width: 768px)",srcSet:r}),s&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:s}),e.jsx("img",{sizes:L,srcSet:I,width:p||a?a&&g<767.98?a:p||a:c,height:1,src:S,alt:o,loading:b,onLoad:()=>V(!0),draggable:n})]}),y&&e.jsx("figcaption",{children:e.jsx(B,{tag:"p",desktopSize:12,mobileSize:12,color:F,margin:"3px 0 3px 0",children:y})})]})};l.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const Z={title:"Picture/Picture",component:l,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},f={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:t=>e.jsx("div",{children:e.jsx(l,{...t,children:"hello world!"})})},x={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:t=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(l,{...t,children:"hello world!"})})},P={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager",figcaption:"what a view!",figcaptionColor:"red"},render:t=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(l,{...t,children:"hello world!"})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const $=["Default","PictureBorder","PictureFigcaption"];export{f as Default,x as PictureBorder,P as PictureFigcaption,$ as __namedExportsOrder,Z as default};
