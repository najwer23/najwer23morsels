import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-EUDpX_OH.js";import{u as I}from"./useWindowSize-DtavIjav.js";import{g as O}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const A=()=>{const e=r.useRef(!1);return r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),r.useCallback(()=>e.current,[])},k={width:void 0,height:void 0},B=e=>{const{ref:s,box:n="content-box"}=e,[{width:c,height:m},y]=r.useState(k),l=A(),d=r.useRef({...k}),u=r.useRef(void 0);return u.current=e.onResize,r.useEffect(()=>{if(!s.current||typeof window>"u"||!("ResizeObserver"in window))return;const M=new ResizeObserver(([h])=>{const C=n==="border-box"?"borderBoxSize":n==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",b=E(h,C,"inlineSize"),f=E(h,C,"blockSize");if(d.current.width!==b||d.current.height!==f){const x={width:b,height:f};d.current.width=b,d.current.height=f,u.current?u.current(x):l()&&y(x)}});return M.observe(s.current,{box:n}),()=>{M.disconnect()}},[n,s,l]),{width:c,height:m}},E=(e,s,n)=>e[s]?Array.isArray(e[s])?e[s][0][n]:e[s][n]:s==="contentBoxSize"?e.contentRect[n==="inlineSize"?"width":"height"]:void 0,H="_n23mMasonry_b38tu_2",T="_n23mMasonryColumn_b38tu_11",F="_n23mMasonryColumnChild_b38tu_15",_={n23mMasonry:H,n23mMasonryColumn:T,n23mMasonryColumnChild:F},j=({arrWithChildren:e,onHeightChange:s,id:n})=>{const c=r.useRef(null),{height:m=0}=B({ref:c});return r.useEffect(()=>{s(m)},[m]),a.jsx("div",{ref:c,className:_.n23mMasonryColumn,children:r.Children.map(e,(y,l)=>a.jsx("div",{className:_.n23mMasonryColumnChild,children:y},n+l))},n)};j.displayName="MasonryColumn";j.__docgenInfo={description:"",methods:[],displayName:"MasonryColumn"};const v=({children:e,gap:s,col:n,onGridMasonryLoadEnd:c,delay:m=10,className:y,style:l,...d})=>{const[u,M]=r.useState(0),{width:h}=I(),C=r.useRef(!0),b=()=>C.current?0:m,f=t=>t<767.98?n.mobile:t>=768.98&&t<1199.98?n.tablet:t>=1199.98&&t<1599.98?n.smallDesktop:t>=1599.98?n.desktop:3,[w,x]=r.useState(()=>f(h)),R=t=>Array.from({length:t}).map((o,i)=>({name:`col${i}`,arrWithElm:[],height:0})),[p,z]=r.useState(()=>R(w)),N=t=>[...t].sort((o,i)=>o.height-i.height)[0].name,W=(t,o)=>{z(p.map(i=>i.name===o?{...i,height:t}:i))};r.useEffect(()=>{const t=setTimeout(()=>{const o=f(h);o!==w&&(M(0),x(o),z(R(o)))},100);return()=>clearTimeout(t)},[h]);const D=r.useMemo(()=>p.map(({height:t})=>t).join(","),[p]);return r.useEffect(()=>{const t=b(),o=setTimeout(()=>{if(u<e.length){const i=N(p);z(p.map(g=>g.name===i?{...g,arrWithElm:[...g.arrWithElm,e[u]]}:g)),M(g=>g+1),u===e.length-1&&c&&c(!0)}},t);return()=>clearTimeout(o)},[D]),r.useEffect(()=>{C.current=!1},[]),a.jsx("div",{className:[_.n23mMasonry,"n23mMasonry",y].filter(Boolean).join(" "),...d,style:{...O({"--masonry-cm":n.mobile,"--masonry-ct":n.tablet,"--masonry-csd":n.smallDesktop,"--masonry-cd":n.desktop,"--masonry-cg":s.col,"--masonry-rg":s.row}),...l},children:p.map(({arrWithElm:t,name:o})=>a.jsx(j,{arrWithChildren:t,onHeightChange:i=>W(i,o),id:o},"masonry-parent"+o))})};v.displayName="Masonry";v.__docgenInfo={description:"",methods:[],displayName:"Masonry",props:{delay:{defaultValue:{value:"10",computed:!1},required:!1}}};const Q={title:"grid/Masonry",component:v,parameters:{layout:"centered",docs:{description:{component:`
A flexible Masonry layout component for React that arranges children in columns with configurable gaps and responsive column counts.

Supports dynamic content heights and adapts column count based on viewport size breakpoints.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/masonry';
\`\`\`
      `}}},tags:["autodocs"]},P=Array.from({length:20}).map((e,s)=>a.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:a.jsxs(a.Fragment,{children:[a.jsx("div",{children:s})," Text text text".repeat(Math.floor(Math.random()*160))]})},s)),S={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:P},render:e=>a.jsx("div",{children:a.jsx(v,{...e})})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const U=["Default"];export{S as Default,U as __namedExportsOrder,Q as default};
