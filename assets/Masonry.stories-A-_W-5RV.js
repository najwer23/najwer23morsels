import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CWX89Pyg.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./getCssVariableStyle-DY0FCIi_.js";import{n as o,r as s,t as c}from"./hooks-rqLsSIhI.js";var l,u,d,f,p=t((()=>{l=`_n23mMasonry_b38tu_2`,u=`_n23mMasonryColumn_b38tu_11`,d=`_n23mMasonryColumnChild_b38tu_15`,f={n23mMasonry:l,n23mMasonryColumn:u,n23mMasonryColumnChild:d}})),m,h,g,_=t((()=>{m=e(n(),1),c(),p(),h=r(),g=({arrWithChildren:e,onHeightChange:t,id:n})=>{let r=(0,m.useRef)(null),{height:i=0}=s({ref:r});return(0,m.useEffect)(()=>{t(i)},[i]),(0,h.jsx)(`div`,{ref:r,className:f.n23mMasonryColumn,children:m.Children.map(e,(e,t)=>(0,h.jsx)(`div`,{className:f.n23mMasonryColumnChild,children:e},n+t))},n)},g.displayName=`MasonryColumn`,g.__docgenInfo={description:``,methods:[],displayName:`MasonryColumn`}})),v,y,b,x=t((()=>{v=e(n(),1),c(),i(),p(),_(),y=r(),b=({children:e,gap:t,col:n,onGridMasonryLoadEnd:r,delay:i=10,className:s,style:c,...l})=>{let[u,d]=(0,v.useState)(0),{width:p}=o(),m=(0,v.useRef)(!0),h=()=>m.current?0:i,_=e=>e<767.98?n.mobile:e>=768.98&&e<1199.98?n.tablet:e>=1199.98&&e<1599.98?n.smallDesktop:e>=1599.98?n.desktop:3,[b,x]=(0,v.useState)(()=>_(p)),S=e=>Array.from({length:e}).map((e,t)=>({name:`col${t}`,arrWithElm:[],height:0})),[C,w]=(0,v.useState)(()=>S(b)),T=e=>[...e].sort((e,t)=>e.height-t.height)[0].name,E=(e,t)=>{w(C.map(n=>n.name===t?{...n,height:e}:n))};return(0,v.useEffect)(()=>{let e=setTimeout(()=>{let e=_(p);e!==b&&(d(0),x(e),w(S(e)))},100);return()=>clearTimeout(e)},[p]),(0,v.useEffect)(()=>{let t=h(),n=setTimeout(()=>{if(u<e.length){let t=T(C);w(C.map(n=>n.name===t?{...n,arrWithElm:[...n.arrWithElm,e[u]]}:n)),d(e=>e+1),u===e.length-1&&r&&r(!0)}},t);return()=>clearTimeout(n)},[(0,v.useMemo)(()=>C.map(({height:e})=>e).join(`,`),[C])]),(0,v.useEffect)(()=>{m.current=!1},[]),(0,y.jsx)(`div`,{className:[f.n23mMasonry,`n23mMasonry`,s].filter(Boolean).join(` `),...l,style:{...a({"--masonry-cm":n.mobile,"--masonry-ct":n.tablet,"--masonry-csd":n.smallDesktop,"--masonry-cd":n.desktop,"--masonry-cg":t.col,"--masonry-rg":t.row}),...c},children:C.map(({arrWithElm:e,name:t})=>(0,y.jsx)(g,{arrWithChildren:e,onHeightChange:e=>E(e,t),id:t},`masonry-parent`+t))})},b.displayName=`Masonry`,b.__docgenInfo={description:``,methods:[],displayName:`Masonry`,props:{delay:{defaultValue:{value:`10`,computed:!1},required:!1}}}})),S=t((()=>{x()})),C,w,T,E,D;t((()=>{S(),C=r(),w={title:`grid/Masonry`,component:b,parameters:{layout:`centered`,docs:{description:{component:`
A flexible Masonry layout component for React that arranges children in columns with configurable gaps and responsive column counts.

Supports dynamic content heights and adapts column count based on viewport size breakpoints.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/masonry';
\`\`\`
      `}}},tags:[`autodocs`]},T=Array.from({length:20}).map((e,t)=>(0,C.jsx)(`div`,{style:{background:`#`+Math.floor(Math.random()*16777215).toString(16)},children:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{children:t}),` Text text text`.repeat(Math.floor(Math.random()*160))]})},t)),E={args:{gap:{col:`20px`,row:`20px`},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:T},render:e=>(0,C.jsx)(`div`,{children:(0,C.jsx)(b,{...e})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    gap: {
      col: '20px',
      row: '20px'
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2
    },
    children: items
  },
  render: args => <div>
      <Masonry {...args} />
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,w as default};