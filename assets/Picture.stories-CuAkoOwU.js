import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-CKGPxuaw.js";import{u as N}from"./useWindowSize-B5aFNNIi.js";import{T as R}from"./TextBox-CqUloUEa.js";import{g as O}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const U="_n23mPictureFigure_11cex_2",W="_n23mPicture_11cex_2",Y="_border_11cex_11",A="_loaded_11cex_25",G="_cacheLoaded_11cex_30",o={n23mPictureFigure:U,n23mPicture:W,border:Y,loaded:A,cacheLoaded:G},s=({children:r,className:j,style:v,draggable:y=!1,alt:S,src:p,srcDesktop:t,srcMobile:a,ar:b,arMobile:n,arDesktop:g,border:L=!1,borderColor:F="black",loading:C="lazy",srcset:z,sizes:V,maxHeight:q,maxHeightMobile:c,maxHeightDesktop:f,figcaption:x,figcaptionColor:B,...E})=>{const[T,P]=h.useState(!1),[w,m]=h.useState(!1),{width:_}=N();return h.useLayoutEffect(()=>{const i=new Image,I=t||a||p||"";return i.src=I,i.complete?(P(!0),m(!0)):(m(!1),i.onload=()=>{P(!0),m(!1)}),()=>{i.onload=null}},[t,a,p]),e.jsxs("figure",{className:o.n23mPictureFigure,children:[e.jsxs("picture",{className:["n23mPicture",o.n23mPicture,L&&o.border,T&&!w&&o.loaded,w&&o.cacheLoaded,j].filter(Boolean).join(" "),...E,style:{...O({"--picture-bc":F,"--picture-mh":f||c?c&&_<767.98?c:f||c:q}),...v},children:[t&&e.jsx("source",{media:"(min-width: 768px)",srcSet:t}),a&&e.jsx("source",{media:"(max-width: 767.98px)",srcSet:a}),e.jsx("img",{sizes:V,srcSet:z,width:g||n?n&&_<767.98?n:g||n:b,height:1,src:t||a||p||"",alt:S,loading:C,draggable:y})]}),x&&e.jsx("figcaption",{children:e.jsx(R,{tag:"p",desktopSize:12,mobileSize:12,color:B,margin:"3px 0 3px 0",children:x})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{draggable:{defaultValue:{value:"false",computed:!1},required:!1},border:{defaultValue:{value:"false",computed:!1},required:!1},borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}}};const k={title:"Picture/Picture",component:s,parameters:{layout:"centered",docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:["autodocs"]},d={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},render:r=>e.jsx("div",{children:e.jsx(s,{...r,children:"hello world!"})})},l={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(s,{...r,children:"hello world!"})})},u={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,border:!0,loading:"eager",figcaption:"what a view!",figcaptionColor:"red"},render:r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(s,{...r,children:"hello world!"})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const D=["Default","PictureBorder","PictureFigcaption"];export{d as Default,l as PictureBorder,u as PictureFigcaption,D as __namedExportsOrder,k as default};
