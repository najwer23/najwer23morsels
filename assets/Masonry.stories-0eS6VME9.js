import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-BY5M-W3F.js";import{u as E}from"./useWindowSize-waJUNMUW.js";import{g as W}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const O=()=>{const e=s.useRef(!1);return s.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),s.useCallback(()=>e.current,[])},z={width:void 0,height:void 0},D=e=>{const{ref:r,box:n="content-box"}=e,[{width:l,height:h},y]=s.useState(z),p=O(),f=s.useRef({...z}),u=s.useRef(void 0);return u.current=e.onResize,s.useEffect(()=>{if(!r.current||typeof window>"u"||!("ResizeObserver"in window))return;const M=new ResizeObserver(([m])=>{const d=n==="border-box"?"borderBoxSize":n==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=_(m,d,"inlineSize"),C=_(m,d,"blockSize");if(f.current.width!==g||f.current.height!==C){const c={width:g,height:C};f.current.width=g,f.current.height=C,u.current?u.current(c):p()&&y(c)}});return M.observe(r.current,{box:n}),()=>{M.disconnect()}},[n,r,p]),{width:l,height:h}},_=(e,r,n)=>e[r]?Array.isArray(e[r])?e[r][0][n]:e[r][n]:r==="contentBoxSize"?e.contentRect[n==="inlineSize"?"width":"height"]:void 0,I="_n23mMasonry_1nk1y_2",A="_n23mMasonryColumn_1nk1y_11",B="_n23mMasonryColumnChild_1nk1y_15",w={n23mMasonry:I,n23mMasonryColumn:A,n23mMasonryColumnChild:B},k=({arrWithChildren:e,onHeightChange:r,id:n})=>{const l=s.useRef(null),{height:h=0}=D({ref:l});return s.useEffect(()=>{r(h)},[h]),a.jsx("div",{ref:l,className:w.n23mMasonryColumn,children:s.Children.map(e,(y,p)=>a.jsx("div",{className:w.n23mMasonryColumnChild,children:y},n+p))},n)};k.displayName="MasonryColumn";k.__docgenInfo={description:"",methods:[],displayName:"MasonryColumn"};const x=({children:e,gap:r,col:n,onGridMasonryLoadEnd:l,delay:h=10,className:y,style:p,...f})=>{const[u,M]=s.useState(0),{width:m}=E(),d=t=>t<767.98?n.mobile:t>=768.98&&t<1199.98?n.tablet:t>=1199.98&&t<1599.98?n.smallDesktop:t>=1599.98?n.desktop:3,[g,C]=s.useState(()=>d(m)),S=t=>Array.from({length:t}).map((i,o)=>({name:`col${o}`,arrWithElm:[],height:0})),[c,v]=s.useState(()=>S(g)),j=t=>[...t].sort((i,o)=>i.height-o.height)[0].name,R=(t,i)=>{v(c.map(o=>o.name===i?{...o,height:t}:o))};s.useEffect(()=>{const t=setTimeout(()=>{d(m)!=g&&(M(0),C(d(m)),v(S(d(m))))},100);return()=>clearTimeout(t)},[m]);const N=s.useMemo(()=>c.map(({height:t})=>t).join(","),[c]);return s.useEffect(()=>{const t=setTimeout(()=>{if(u<e.length){const i=j(c);v(c.map(o=>o.name===i?{...o,arrWithElm:[...o.arrWithElm,e[u]]}:o)),M(o=>o+1),u==e.length-1&&l&&l(!0)}},h);return()=>clearTimeout(t)},[N]),a.jsx("div",{className:[w.n23mMasonry,"n23mMasonry",y].filter(Boolean).join(" "),...f,style:{...W({"--masonry-col-mobile":n.mobile,"--masonry-col-tablet":n.tablet,"--masonry-col-small-desktop":n.smallDesktop,"--masonry-col-desktop":n.desktop,"--masonry-col-gap":r.col,"--masonry-row-gap":r.row}),...p},children:c.map(({arrWithElm:t,name:i})=>a.jsx(k,{arrWithChildren:t,onHeightChange:o=>R(o,i),id:i},"masonry-parent"+i))})};x.displayName="Masonry";x.__docgenInfo={description:"",methods:[],displayName:"Masonry",props:{delay:{defaultValue:{value:"10",computed:!1},required:!1}}};const K={title:"grid/Masonry",component:x,parameters:{layout:"centered",docs:{description:{component:`
A flexible Masonry layout component for React that arranges children in columns with configurable gaps and responsive column counts.

Supports dynamic content heights and adapts column count based on viewport size breakpoints.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/masonry';
\`\`\`
      `}}},tags:["autodocs"]},H=Array.from({length:20}).map((e,r)=>a.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:a.jsxs(a.Fragment,{children:[a.jsx("div",{children:r})," Text text text".repeat(Math.floor(Math.random()*160))]})},r)),b={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:H},render:e=>a.jsx("div",{children:a.jsx(x,{...e})})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const $=["Default"];export{b as Default,$ as __namedExportsOrder,K as default};
