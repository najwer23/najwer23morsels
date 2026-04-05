import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CWX89Pyg.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./getCssVariableStyle-DY0FCIi_.js";import{n as o,t as s}from"./textbox-dlAtPu2C.js";import{a as c,i as l,n as u,t as d}from"./hooks-rqLsSIhI.js";var f,p,m,h,g,_,v=t((()=>{f=`_n23mPictureFigure_11cex_2`,p=`_n23mPicture_11cex_2`,m=`_border_11cex_11`,h=`_loaded_11cex_25`,g=`_cacheLoaded_11cex_30`,_={n23mPictureFigure:f,n23mPicture:p,border:m,loaded:h,cacheLoaded:g}})),y,b,x,S=t((()=>{y=e(n(),1),d(),l(),s(),i(),v(),b=r(),x=({children:e,className:t,style:n,draggable:r=!1,alt:i,src:s,srcDesktop:l,srcMobile:d,ar:f,arMobile:p,arDesktop:m,border:h=!1,borderColor:g=`black`,loading:v=`lazy`,srcset:x,sizes:S,maxHeight:C,maxHeightMobile:w,maxHeightDesktop:T,figcaption:E,figcaptionColor:D,...O})=>{let[k,A]=(0,y.useState)(!1),{width:j}=u(),M=l&&j>=768?l:d&&j<768?d:s||``,N=c(M,25);return(0,b.jsxs)(`figure`,{className:_.n23mPictureFigure,children:[(0,b.jsxs)(`picture`,{className:[`n23mPicture`,_.n23mPicture,h&&_.border,k&&!N&&_.loaded,N&&_.cacheLoaded,t].filter(Boolean).join(` `),...O,style:{...a({"--picture-bc":g,"--picture-mh":T||w?w&&j<767.98?w:T||w:C}),...n},children:[l&&(0,b.jsx)(`source`,{media:`(min-width: 768px)`,srcSet:l}),d&&(0,b.jsx)(`source`,{media:`(max-width: 767.98px)`,srcSet:d}),(0,b.jsx)(`img`,{sizes:S,srcSet:x,width:m||p?p&&j<767.98?p:m||p:f,height:1,src:M,alt:i,loading:v,onLoad:()=>A(!0),draggable:r})]}),E&&(0,b.jsx)(`figcaption`,{children:(0,b.jsx)(o,{tag:`p`,desktopSize:12,mobileSize:12,color:D,margin:`3px 0 3px 0`,children:E})})]})},x.__docgenInfo={description:``,methods:[],displayName:`Picture`,props:{draggable:{defaultValue:{value:`false`,computed:!1},required:!1},border:{defaultValue:{value:`false`,computed:!1},required:!1},borderColor:{defaultValue:{value:`'black'`,computed:!1},required:!1},loading:{defaultValue:{value:`'lazy'`,computed:!1},required:!1}}}})),C=t((()=>{S()})),w,T,E,D,O,k;t((()=>{C(),w=r(),T={title:`Picture/Picture`,component:x,parameters:{layout:`centered`,docs:{description:{component:`
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
\`\`\`
      `}}},tags:[`autodocs`]},E={args:{src:`https://picsum.photos/300/400`,alt:``,ar:3/4},render:e=>(0,w.jsx)(`div`,{children:(0,w.jsx)(x,{...e,children:`hello world!`})})},D={args:{src:`https://picsum.photos/300/400`,alt:``,ar:3/4,border:!0,loading:`eager`},render:e=>(0,w.jsx)(`div`,{style:{width:`300px`,height:`400px`},children:(0,w.jsx)(x,{...e,children:`hello world!`})})},O={args:{src:`https://picsum.photos/300/400`,alt:``,ar:3/4,border:!0,loading:`eager`,figcaption:`what a view!`,figcaptionColor:`red`},render:e=>(0,w.jsx)(`div`,{style:{width:`300px`,height:`400px`},children:(0,w.jsx)(x,{...e,children:`hello world!`})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  render: args => <div>
      <Picture {...args}>hello world!</Picture>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`PictureBorder`,`PictureFigcaption`]}))();export{E as Default,D as PictureBorder,O as PictureFigcaption,k as __namedExportsOrder,T as default};