import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-Bb21tLd3.js";import{u as I}from"./useWindowSize-BrUfX7uj.js";import{g as O}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const A=()=>{const e=r.useRef(!1);return r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),r.useCallback(()=>e.current,[])},R={width:void 0,height:void 0},B=e=>{const{ref:o,box:n="content-box"}=e,[{width:c,height:m},g]=r.useState(R),u=A(),d=r.useRef({...R}),l=r.useRef(void 0);return l.current=e.onResize,r.useEffect(()=>{if(!o.current||typeof window>"u"||!("ResizeObserver"in window))return;const M=new ResizeObserver(([h])=>{const C=n==="border-box"?"borderBoxSize":n==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",b=E(h,C,"inlineSize"),f=E(h,C,"blockSize");if(d.current.width!==b||d.current.height!==f){const x={width:b,height:f};d.current.width=b,d.current.height=f,l.current?l.current(x):u()&&g(x)}});return M.observe(o.current,{box:n}),()=>{M.disconnect()}},[n,o,u]),{width:c,height:m}},E=(e,o,n)=>e[o]?Array.isArray(e[o])?e[o][0][n]:e[o][n]:o==="contentBoxSize"?e.contentRect[n==="inlineSize"?"width":"height"]:void 0,H="_n23mMasonry_1nk1y_2",T="_n23mMasonryColumn_1nk1y_11",F="_n23mMasonryColumnChild_1nk1y_15",z={n23mMasonry:H,n23mMasonryColumn:T,n23mMasonryColumnChild:F},_=({arrWithChildren:e,onHeightChange:o,id:n})=>{const c=r.useRef(null),{height:m=0}=B({ref:c});return r.useEffect(()=>{o(m)},[m]),a.jsx("div",{ref:c,className:z.n23mMasonryColumn,children:r.Children.map(e,(g,u)=>a.jsx("div",{className:z.n23mMasonryColumnChild,children:g},n+u))},n)};_.displayName="MasonryColumn";_.__docgenInfo={description:"",methods:[],displayName:"MasonryColumn"};const v=({children:e,gap:o,col:n,onGridMasonryLoadEnd:c,delay:m=10,className:g,style:u,...d})=>{const[l,M]=r.useState(0),{width:h}=I(),C=r.useRef(!0),b=()=>C.current?0:m,f=t=>t<767.98?n.mobile:t>=768.98&&t<1199.98?n.tablet:t>=1199.98&&t<1599.98?n.smallDesktop:t>=1599.98?n.desktop:3,[w,x]=r.useState(()=>f(h)),j=t=>Array.from({length:t}).map((s,i)=>({name:`col${i}`,arrWithElm:[],height:0})),[p,k]=r.useState(()=>j(w)),N=t=>[...t].sort((s,i)=>s.height-i.height)[0].name,W=(t,s)=>{k(p.map(i=>i.name===s?{...i,height:t}:i))};r.useEffect(()=>{const t=setTimeout(()=>{const s=f(h);s!==w&&(M(0),x(s),k(j(s)))},100);return()=>clearTimeout(t)},[h]);const D=r.useMemo(()=>p.map(({height:t})=>t).join(","),[p]);return r.useEffect(()=>{const t=b(),s=setTimeout(()=>{if(l<e.length){const i=N(p);k(p.map(y=>y.name===i?{...y,arrWithElm:[...y.arrWithElm,e[l]]}:y)),M(y=>y+1),l===e.length-1&&c&&c(!0)}},t);return()=>clearTimeout(s)},[D]),r.useEffect(()=>{C.current=!1},[]),a.jsx("div",{className:[z.n23mMasonry,"n23mMasonry",g].filter(Boolean).join(" "),...d,style:{...O({"--masonry-col-mobile":n.mobile,"--masonry-col-tablet":n.tablet,"--masonry-col-small-desktop":n.smallDesktop,"--masonry-col-desktop":n.desktop,"--masonry-col-gap":o.col,"--masonry-row-gap":o.row}),...u},children:p.map(({arrWithElm:t,name:s})=>a.jsx(_,{arrWithChildren:t,onHeightChange:i=>W(i,s),id:s},"masonry-parent"+s))})};v.displayName="Masonry";v.__docgenInfo={description:"",methods:[],displayName:"Masonry",props:{delay:{defaultValue:{value:"10",computed:!1},required:!1}}};const Q={title:"grid/Masonry",component:v,parameters:{layout:"centered",docs:{description:{component:`
A flexible Masonry layout component for React that arranges children in columns with configurable gaps and responsive column counts.

Supports dynamic content heights and adapts column count based on viewport size breakpoints.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/masonry';
\`\`\`
      `}}},tags:["autodocs"]},P=Array.from({length:20}).map((e,o)=>a.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:a.jsxs(a.Fragment,{children:[a.jsx("div",{children:o})," Text text text".repeat(Math.floor(Math.random()*160))]})},o)),S={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:P},render:e=>a.jsx("div",{children:a.jsx(v,{...e})})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
