import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{M as n}from"./iframe-DY-UI1jk.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{a as i,r as a,t as o}from"./hooks-Cq3HzbXh.js";var s,c,l,u;function d(){return(d=e((()=>{s=`_n23mMasonry_b38tu_2`,c=`_n23mMasonryColumn_b38tu_11`,l=`_n23mMasonryColumnChild_b38tu_15`,u={n23mMasonry:s,n23mMasonryColumn:c,n23mMasonryColumnChild:l}})))()}var f,p,m;function h(){return(h=e((()=>{f=n(),o(),d(),p=t(),m=({arrWithChildren:e,onHeightChange:t,id:n})=>{let r=(0,f.useRef)(null),{height:a=0}=i({ref:r});return(0,f.useEffect)(()=>{t(a)},[a]),(0,p.jsx)(`div`,{ref:r,className:u.n23mMasonryColumn,children:f.Children.map(e,(e,t)=>(0,p.jsx)(`div`,{className:u.n23mMasonryColumnChild,children:e},n+t))},n)},m.displayName=`MasonryColumn`;try{m.displayName=`MasonryColumn`,m.__docgenInfo={description:``,displayName:`MasonryColumn`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Masonry/MasonryColumn.tsx`,methods:[],props:{arrWithChildren:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/MasonryColumn.tsx`,name:`TypeLiteral`}],description:``,name:`arrWithChildren`,required:!1,tags:{},type:{name:`ReactNode[]`}},onHeightChange:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/MasonryColumn.tsx`,name:`TypeLiteral`}],description:``,name:`onHeightChange`,required:!0,tags:{},type:{name:`(height: number) => void`}},id:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/MasonryColumn.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var g,_,v;function y(){return(y=e((()=>{g=n(),o(),d(),h(),_=t(),v=({children:e,gap:t,col:n,onGridMasonryLoadEnd:i,delay:o=10,className:s,style:c,...l})=>{let[d,f]=(0,g.useState)(0),{width:p}=a(),h=(0,g.useRef)(!0),v=()=>h.current?0:o,y=e=>e<767.98?n.mobile:e>=768.98&&e<1199.98?n.tablet:e>=1199.98&&e<1599.98?n.smallDesktop:e>=1599.98?n.desktop:3,[b,x]=(0,g.useState)(()=>y(p)),S=e=>Array.from({length:e}).map((e,t)=>({name:`col${t}`,arrWithElm:[],height:0})),[C,w]=(0,g.useState)(()=>S(b)),T=e=>[...e].sort((e,t)=>e.height-t.height)[0].name,E=(e,t)=>{w(C.map(n=>n.name===t?{...n,height:e}:n))};(0,g.useEffect)(()=>{let e=setTimeout(()=>{let e=y(p);e!==b&&(f(0),x(e),w(S(e)))},100);return()=>clearTimeout(e)},[p]);let D=(0,g.useMemo)(()=>C.map(({height:e})=>e).join(`,`),[C]);return(0,g.useEffect)(()=>{let t=v(),n=setTimeout(()=>{if(d<e.length){let t=T(C);w(C.map(n=>n.name===t?{...n,arrWithElm:[...n.arrWithElm,e[d]]}:n)),f(e=>e+1),d===e.length-1&&i&&i(!0)}},t);return()=>clearTimeout(n)},[D]),(0,g.useEffect)(()=>{h.current=!1},[]),(0,_.jsx)(`div`,{className:[u.n23mMasonry,`n23mMasonry`,s].filter(Boolean).join(` `),...l,style:{...r({"--masonry-cm":n.mobile,"--masonry-ct":n.tablet,"--masonry-csd":n.smallDesktop,"--masonry-cd":n.desktop,"--masonry-cg":t.col,"--masonry-rg":t.row}),...c},children:C.map(({arrWithElm:e,name:t})=>(0,_.jsx)(m,{arrWithChildren:e,onHeightChange:e=>E(e,t),id:t},`masonry-parent`+t))})},v.displayName=`Masonry`;try{v.displayName=`Masonry`,v.__docgenInfo={description:``,displayName:`Masonry`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Masonry/Masonry.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`},required:!1,tags:{},type:{name:`CSSProperties`}},gap:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`}],description:``,name:`gap`,parent:{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`},required:!0,tags:{},type:{name:`{ col: string; row: string; }`}},col:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`}],description:``,name:`col`,parent:{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`},required:!0,tags:{},type:{name:`{ mobile: number; smallDesktop: number; desktop: number; tablet: number; }`}},delay:{defaultValue:{value:`10`},declarations:[{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`}],description:``,name:`delay`,parent:{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`},required:!1,tags:{},type:{name:`number`}},onGridMasonryLoadEnd:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`}],description:``,name:`onGridMasonryLoadEnd`,parent:{fileName:`najwer23morsels/src/stories/Masonry/Masonry.tsx`,name:`MasonryProps`},required:!1,tags:{},type:{name:`((isGridMasonryLoadEnd: boolean) => void)`}}},tags:{}}}catch{}})))()}function b(){return(b=e((()=>{y()})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{b(),x=t(),S={title:`grid/Masonry`,component:v,parameters:{layout:`fullscreen`,docs:{description:{component:`
A responsive Masonry layout component for React that arranges elements into columns based on their content height.

Supports dynamic content heights, configurable spacing, responsive column counts and load completion callbacks.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/Masonry';
\`\`\`
        `}}},tags:[`autodocs`]},C={mobile:1,tablet:2,smallDesktop:3,desktop:4},w={col:`20px`,row:`20px`},T={width:`100%`,maxWidth:`1400px`,margin:`0 auto`,padding:`30px`,boxSizing:`border-box`},E=[`#E0E7FF`,`#FCE7F3`,`#DCFCE7`,`#FEF3C7`,`#E0F2FE`,`#F3E8FF`],D=e=>({background:e,borderRadius:`12px`,padding:`20px`,color:`#26272E`,boxSizing:`border-box`,width:`100%`}),O=({title:e,description:t,background:n=`#F3F4F6`,height:r})=>(0,x.jsxs)(`article`,{style:{...D(n),minHeight:r},children:[(0,x.jsx)(`h3`,{style:{margin:`0 0 10px`,fontSize:`18px`},children:e}),(0,x.jsx)(`p`,{style:{margin:0,lineHeight:1.6},children:t})]}),k=[(0,x.jsx)(O,{title:`Design`,description:`Creating consistent and accessible interfaces for modern applications.`,background:E[0]},`1`),(0,x.jsx)(O,{title:`Development`,description:`Building reusable components and scalable frontend architectures.`,background:E[1],height:260},`2`),(0,x.jsx)(O,{title:`React`,description:`Component composition, hooks, state management and performance optimization.`,background:E[2]},`3`),(0,x.jsx)(O,{title:`TypeScript`,description:`Strongly typed applications with maintainable and predictable code.`,background:E[3],height:220},`4`),(0,x.jsx)(O,{title:`Accessibility`,description:`Making interfaces usable for everyone through semantic HTML, keyboard navigation and WCAG guidelines.`,background:E[4],height:300},`5`),(0,x.jsx)(O,{title:`Responsive Design`,description:`Layouts that adapt naturally to different screen sizes.`,background:E[5]},`6`),(0,x.jsx)(O,{title:`Performance`,description:`Optimizing rendering, loading and user experience.`,background:E[0],height:240},`7`),(0,x.jsx)(O,{title:`Architecture`,description:`Organizing code into reusable and independent modules.`,background:E[1]},`8`),(0,x.jsx)(O,{title:`Testing`,description:`Reliable applications through automated tests and continuous integration.`,background:E[2],height:280},`9`),(0,x.jsx)(O,{title:`Documentation`,description:`Clear documentation helps teams collaborate and maintain software.`,background:E[3]},`10`),(0,x.jsx)(O,{title:`User Experience`,description:`Designing intuitive interactions and meaningful user journeys.`,background:E[4],height:200},`11`),(0,x.jsx)(O,{title:`Quality`,description:`Consistent code reviews, standards and maintainability.`,background:E[5]},`12`)],A=[{height:260,title:`Architecture`,background:`#DCE7F5`},{height:180,title:`Workspace`,background:`#F3DFD5`},{height:320,title:`Creative Studio`,background:`#E4DDF5`},{height:210,title:`Minimal Design`,background:`#DDEBDD`},{height:300,title:`Interior`,background:`#F3E9D2`},{height:190,title:`Typography`,background:`#E5E5E5`},{height:240,title:`Development`,background:`#D9EAF0`},{height:340,title:`Photography`,background:`#F0DCE5`},{height:200,title:`Inspiration`,background:`#E7E3D8`},{height:280,title:`Creative Work`,background:`#DCE1F4`}].map((e,t)=>(0,x.jsxs)(`article`,{style:{height:e.height,background:e.background,borderRadius:`14px`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,padding:`20px`,boxSizing:`border-box`,color:`#26272E`},children:[(0,x.jsxs)(`span`,{style:{fontSize:`12px`,opacity:.6},children:[`PROJECT `,String(t+1).padStart(2,`0`)]}),(0,x.jsx)(`h3`,{style:{margin:0,fontSize:`22px`},children:e.title})]},e.title)),j={args:{children:k,gap:w,col:C,delay:10},render:e=>(0,x.jsx)(`div`,{style:T,children:(0,x.jsx)(v,{...e})})},M={args:{children:k,gap:{col:`24px`,row:`24px`},col:{mobile:1,tablet:2,smallDesktop:3,desktop:4},delay:10},render:e=>(0,x.jsx)(`div`,{style:T,children:(0,x.jsx)(v,{...e})}),parameters:{docs:{description:{story:`Automatically adjusts the number of columns according to the viewport width.`}}}},N={args:{children:A,gap:{col:`16px`,row:`16px`},col:{mobile:1,tablet:2,smallDesktop:3,desktop:4}},render:e=>(0,x.jsx)(`div`,{style:T,children:(0,x.jsx)(v,{...e})})},P={args:{children:k,gap:{col:`10px`,row:`10px`},col:{mobile:2,tablet:3,smallDesktop:4,desktop:5},delay:0},render:e=>(0,x.jsx)(`div`,{style:T,children:(0,x.jsx)(v,{...e})})},F={args:{children:k,gap:{col:`32px`,row:`32px`},col:{mobile:1,tablet:2,smallDesktop:2,desktop:3},style:{padding:`20px`,background:`#F5F5F5`,borderRadius:`16px`}},render:e=>(0,x.jsx)(`div`,{style:T,children:(0,x.jsx)(v,{...e})})},I=[`Default`,`Responsive`,`PortfolioGallery`,`Compact`,`CustomStyling`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultItems,
    gap: defaultGap,
    col: columns,
    delay: 10
  },
  render: args => <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultItems,
    gap: {
      col: '24px',
      row: '24px'
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 3,
      desktop: 4
    },
    delay: 10
  },
  render: args => <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Automatically adjusts the number of columns according to the viewport width.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: galleryItems,
    gap: {
      col: '16px',
      row: '16px'
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 3,
      desktop: 4
    }
  },
  render: args => <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultItems,
    gap: {
      col: '10px',
      row: '10px'
    },
    col: {
      mobile: 2,
      tablet: 3,
      smallDesktop: 4,
      desktop: 5
    },
    delay: 0
  },
  render: args => <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultItems,
    gap: {
      col: '32px',
      row: '32px'
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 2,
      desktop: 3
    },
    style: {
      padding: '20px',
      background: '#F5F5F5',
      borderRadius: '16px'
    }
  },
  render: args => <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
}`,...F.parameters?.docs?.source}}}})))()}L();export{P as Compact,F as CustomStyling,j as Default,N as PortfolioGallery,M as Responsive,I as __namedExportsOrder,S as default};