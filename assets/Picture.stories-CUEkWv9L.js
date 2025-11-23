import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-DVCmNHd_.js";import{u as q}from"./useWindowSize-B3oQct_n.js";import{T as B}from"./TextBox-DKKy4-Ay.js";import{g as R}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const N="_n23mPictureFigure_11cex_2",O="_n23mPicture_11cex_2",U="_border_11cex_11",W="_loaded_11cex_25",Y="_cacheLoaded_11cex_30",d={n23mPictureFigure:N,n23mPicture:O,border:U,loaded:W,cacheLoaded:Y},k=(r,s,i=null)=>{let o;const t=new Promise((a,n)=>{o=setTimeout(()=>n(i),r)});return Promise.race([s,t]).finally(()=>{clearTimeout(o)})},A=(r,s=25)=>{const[i,o]=x.useState(null),t=x.useRef(null);return x.useEffect(()=>{if(!r){o(null);return}const a=new Image;t.current=a;const n=new Promise((c,P)=>{a.onload=()=>c(a),a.onerror=()=>P(new Error("Image load error")),a.src=r});return k(s,n,"Image not loaded from cache").then(()=>o(!0)).catch(()=>o(!1)).finally(()=>{t.current=null}),()=>{t.current&&(t.current.onload=null,t.current.onerror=null,t.current=null)}},[r,s]),i},l=({children:r,className:s,style:i,draggable:o=!1,alt:t,src:a,srcDesktop:n,srcMobile:c,ar:P,arMobile:u,arDesktop:w,border:S=!1,borderColor:C="black",loading:b="lazy",srcset:I,sizes:L,maxHeight:T,maxHeightMobile:m,maxHeightDesktop:_,figcaption:j,figcaptionColor:F,...z})=>{const[E,V]=x.useState(!1),{width:p}=q(),v=n&&p>=768?n:c&&p<768?c:a||"",y=A(v,25);return e.jsxs("figure",{className:d.n23mPictureFigure,children:[e.jsxs("picture",{className:["n23mPicture",d.n23mPicture,S&&d.border,E&&!y&&d.loaded,y&&d.cacheLoaded,s].filter(Boolean).join(" "),...z,style:{...R({"--picture-bc":C,"--picture-mh":_||m?m&&p<767.98?m:_||m:T}),...i},children:[n&&e.jsx("source",{media:"(min-width: 768px)",srcSet:n}),c&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:c}),e.jsx("img",{sizes:L,srcSet:I,width:w||u?u&&p<767.98?u:w||u:P,height:1,src:v,alt:t,loading:b,onLoad:()=>V(!0),draggable:o})]}),j&&e.jsx("figcaption",{children:e.jsx(B,{tag:"p",desktopSize:12,mobileSize:12,color:F,margin:"3px 0 3px 0",children:j})})]})};l.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const $={title:"Picture/Picture",component:l,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},h={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:r=>e.jsx("div",{children:e.jsx(l,{...r,children:"hello world!"})})},g={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(l,{...r,children:"hello world!"})})},f={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager",figcaption:"what a view!",figcaptionColor:"red"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(l,{...r,children:"hello world!"})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const D=["Default","PictureBorder","PictureFigcaption"];export{h as Default,g as PictureBorder,f as PictureFigcaption,D as __namedExportsOrder,$ as default};
