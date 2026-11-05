import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-B_OhIRZn.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./Button-Ux8BQ7VQ.js";import{o as ee,t as o}from"./Icons-Cnw6Qy4u.js";import{t as s}from"./Grid-p58jhrof.js";import{t as c}from"./Grid-DJK1LhS6.js";import{n as l,t as u}from"./Typography-CymfRq2C.js";import{r as te,t as ne}from"./hooks-CNqvCRBU.js";import{n as re,t as d}from"./NavigationTabs-CXewNE3M.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function ie(){return(ie=e((()=>{f=`_n23mNavigationDashboard_bk7wq_2`,p=`_dragging_bk7wq_10`,m=`_row_bk7wq_15`,h=`_sidebarContainer_bk7wq_16`,g=`_sticky_bk7wq_17`,_=`_rowOpen_bk7wq_35`,v=`_sidebarContainerOpen_bk7wq_50`,y=`_sidebarContainerClosed_bk7wq_54`,b=`_asideInner_bk7wq_93`,x=`_sidebarOpen_bk7wq_106`,S=`_sidebarClosed_bk7wq_110`,C=`_outlet_bk7wq_115`,w=`_outletContent_bk7wq_123`,T=`_toggleAnchor_bk7wq_128`,E=`_toggleOpen_bk7wq_136`,D=`_toggleClosed_bk7wq_144`,O=`_rowNoAside_bk7wq_149`,k=`_outletNoAside_bk7wq_154`,A={n23mNavigationDashboard:f,dragging:p,row:m,sidebarContainer:h,sticky:g,rowOpen:_,sidebarContainerOpen:v,sidebarContainerClosed:y,asideInner:b,sidebarOpen:x,sidebarClosed:S,outlet:C,outletContent:w,toggleAnchor:T,toggleOpen:E,toggleClosed:D,rowNoAside:O,outletNoAside:k}})))()}var j,M,N,P,F,I,ae,L,R;function oe(){return(oe=e((()=>{j=t(),a(),c(),ne(),o(),d(),ie(),M=n(),N=300,P=300,F=480,I=220,ae=4,L=768,R=({children:e,className:t,style:n,menuTopLeftColumn:a=(0,M.jsx)(M.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:o=(0,M.jsx)(M.Fragment,{children:`menuTopRightColumn`}),menuMobile:c=(0,M.jsx)(M.Fragment,{children:`menuMobile`}),outlet:l=(0,M.jsx)(M.Fragment,{children:`outlet`}),aside:u=(0,M.jsx)(M.Fragment,{children:`aside`}),...ne})=>{let d=(0,j.useRef)(null),f=(0,j.useRef)(null),{width:p}=te(),m=u!=null&&u!==!1&&p>=L,[h,g]=(0,j.useState)(p>=L),[_,v]=(0,j.useState)(N),[y,b]=(0,j.useState)(!1),x=m&&h,S=(0,j.useRef)(null),C=(0,j.useRef)(N),w=(0,j.useRef)(!1),T=()=>{g(p<L?!1:e=>!e)},E=e=>{if(w.current=!1,e.button!==0||p<L)return;e.currentTarget.setPointerCapture(e.pointerId);let t=x?_:0;S.current={startX:e.clientX,startWidth:t,moved:!1,wasOpen:x},C.current=t},D=e=>{let t=S.current,n=d.current;if(!t||!n)return;let r=e.clientX-t.startX;if(!t.moved){if(Math.abs(r)<ae)return;t.moved=!0,b(!0)}let i=Math.min(F,Math.max(0,t.startWidth+r));C.current=i,n.style.setProperty(`--navigationdashboard-sidebar-w`,`${i}px`),n.dataset.collapsing=i<I?`true`:`false`,!t.wasOpen&&i>0&&g(!0)},O=()=>{let e=S.current,t=d.current;if(S.current=null,!e?.moved||!t)return;w.current=!0,t.dataset.collapsing=`false`;let n=C.current;if(n<I)t.style.setProperty(`--navigationdashboard-sidebar-w`,`${_}px`),g(!1);else{let e=Math.min(F,Math.max(P,n));t.style.setProperty(`--navigationdashboard-sidebar-w`,`${e}px`),C.current=e,v(e),g(!0)}b(!1)},k=()=>{w.current?w.current=!1:T()};return(0,j.useLayoutEffect)(()=>{p<L&&g(!1)},[p]),(0,j.useLayoutEffect)(()=>{let e=d.current;e&&e.style.setProperty(`--navigationdashboard-sidebar-w`,`${_}px`)},[_]),(0,j.useLayoutEffect)(()=>{let e=d.current,t=f.current;if(!e||!t)return;let n=0,r=()=>{n=0;let r=Math.max(0,t.getBoundingClientRect().bottom);e.style.setProperty(`--navigationdashboard-h`,`${r}px`)},i=()=>{n||=requestAnimationFrame(r)};r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i),window.addEventListener(`pageshow`,i),window.visualViewport?.addEventListener(`resize`,i);let a=new ResizeObserver(i);return a.observe(t),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),window.removeEventListener(`pageshow`,i),window.visualViewport?.removeEventListener(`resize`,i),a.disconnect(),cancelAnimationFrame(n)}},[]),(0,M.jsxs)(`div`,{ref:d,className:[A.n23mNavigationDashboard,`n23mNavigationDashboard`,y&&A.dragging,t].filter(Boolean).join(` `),...ne,style:{...r({"--navigationdashboard-sidebar-w":`${_}px`,"--navigationdashboard-sidebar-min":`${P}px`}),...n},children:[(0,M.jsx)(`div`,{ref:f,children:(0,M.jsx)(re,{widthInnerContainer:`100%`,widthMainContainer:`100%`,menuOnlyTop:!0,menuTopLeftColumn:(0,M.jsxs)(s,{layout:`flex`,justifyContent:`flex-start`,gap:{col:`15px`,row:`0px`},alignItems:`center`,minHeight:`100%`,children:[m&&(0,M.jsx)(s,{layout:`flex`,justifyContent:`flex-start`,margin:0,children:(0,M.jsx)(i,{type:`button`,variant:`secondary`,onClick:T,height:`40px`,width:`40px`,padding:0,children:(0,M.jsx)(ee,{open:h,width:20,height:20})})}),(0,M.jsx)(`div`,{children:a})]}),menuTopRightColumn:o,menuMobile:c})}),(0,M.jsx)(s,{layout:`container`,padding:`0 20px 0 0`,widthMin:`100%`,children:(0,M.jsxs)(`div`,{className:[A.row,m?x&&A.rowOpen:A.rowNoAside].filter(Boolean).join(` `),children:[m&&(0,M.jsx)(`div`,{className:[A.sidebarContainer,x?A.sidebarContainerOpen:A.sidebarContainerClosed].join(` `),children:(0,M.jsx)(`div`,{className:[A.sticky,x?A.sidebarOpen:A.sidebarClosed].join(` `),children:(0,M.jsx)(`div`,{className:A.asideInner,children:u})})}),(0,M.jsxs)(`div`,{className:[A.outlet,!m&&A.outletNoAside].filter(Boolean).join(` `),children:[m&&(0,M.jsx)(`div`,{className:A.toggleAnchor,children:(0,M.jsx)(i,{type:`button`,variant:`secondary`,height:`60px`,width:`10px`,padding:0,onClick:k,onPointerDown:E,onPointerMove:D,onPointerUp:O,onPointerCancel:O,className:[x?A.toggleOpen:A.toggleClosed].join(` `),"aria-label":x?`Collapse sidebar`:`Expand sidebar`,"aria-expanded":x,children:(0,M.jsx)(`div`,{children:`|`})})}),(0,M.jsx)(`div`,{className:A.outletContent,children:l})]})]})})]})},R.displayName=`NavigationDashboard`;try{R.displayName=`NavigationDashboard`,R.__docgenInfo={description:``,displayName:`NavigationDashboard`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`CSSProperties`}},menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopLeftColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopRightColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuMobile:{defaultValue:{value:`<>menuMobile</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuMobile`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},outlet:{defaultValue:{value:`<>outlet</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`outlet`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},aside:{defaultValue:{value:`<>aside</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:`Pass null (or omit the content) to hide the sidebar and the divider completely.`,name:`aside`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function se(){return(se=e((()=>{oe()})))()}var z,ce,le,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ue;function de(){return(de=e((()=>{c(),u(),se(),z=n(),ce={title:`Navigation/NavigationDashboard`,component:R,parameters:{layout:`fullscreen`,docs:{description:{component:`
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},outlet:{control:!1},aside:{control:!1}}},le=[`Overview`,`Analytics`,`Reports`,`Users`,`Settings`],B=({items:e=le})=>(0,z.jsx)(`nav`,{"aria-label":`Dashboard navigation`,style:{display:`flex`,flexDirection:`column`,gap:8},children:e.map((e,t)=>(0,z.jsx)(l,{variant:`link`,href:`#${e.toLowerCase().replace(/\s+/g,`-`)}`,desktopSize:16,mobileSize:16,style:{display:`block`,padding:`10px 12px`,borderRadius:6,background:t===0?`#e8edff`:`transparent`,color:t===0?`#263fa8`:`inherit`,textDecoration:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e},e))}),V=[[`Total users`,`2,450`],[`Active sessions`,`186`],[`Reports`,`38`],[`Revenue`,`$12,480`],[`Conversion`,`3.4%`],[`Bounce rate`,`41%`],[`Avg. session`,`4m 12s`],[`Open tickets`,`17`]],H=({title:e=`Dashboard overview`,cards:t=V.length,minHeight:n=600})=>(0,z.jsxs)(`main`,{style:{minHeight:n,width:`100%`},children:[(0,z.jsx)(l,{variant:`heading`,tag:`h1`,desktopSize:32,mobileSize:28,style:{marginTop:0},children:e}),(0,z.jsx)(l,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,children:`Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.`}),(0,z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:24},children:Array.from({length:t},(e,t)=>{let[n,r]=V[t%V.length];return(0,z.jsxs)(`section`,{style:{minWidth:200,flex:`1 1 200px`,padding:20,border:`1px solid #ddd`,borderRadius:8},children:[(0,z.jsx)(l,{variant:`body`,tag:`p`,desktopSize:14,mobileSize:14,color:`#666`,style:{margin:`0 0 8px`},children:n}),(0,z.jsx)(l,{variant:`heading`,tag:`p`,desktopSize:24,mobileSize:24,children:r})]},t)})})]}),U={menuTopLeftColumn:(0,z.jsx)(s,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,z.jsx)(l,{variant:`link`,href:`https://najwer23.github.io/hol/`,desktopSize:20,mobileSize:20,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`Link`})}),menuTopRightColumn:(0,z.jsx)(s,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,children:(0,z.jsx)(l,{variant:`link`,href:`https://najwer23.github.io/hol/`,desktopSize:16,mobileSize:16,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`hola`})}),menuMobile:(0,z.jsx)(B,{}),outlet:(0,z.jsx)(H,{}),aside:(0,z.jsx)(B,{})},W={args:U},G={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(l,{variant:`heading`,tag:`h3`,desktopSize:20,mobileSize:20,children:`Workspace`}),(0,z.jsx)(B,{}),(0,z.jsx)(`hr`,{style:{margin:`24px 0`}}),(0,z.jsx)(l,{variant:`caption`,tag:`p`,desktopSize:13,mobileSize:13,color:`#666`,children:`Workspace: Production`})]}),outlet:(0,z.jsx)(H,{title:`Analytics`})}},K={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(l,{variant:`heading`,tag:`h3`,desktopSize:20,mobileSize:20,children:`Menu`}),(0,z.jsx)(l,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,children:`Small sidebar content.`})]}),outlet:(0,z.jsx)(H,{title:`Minimal sidebar content`,cards:2,minHeight:300})}},q={args:{...U,aside:null,outlet:(0,z.jsx)(H,{title:`Empty sidebar`})}},J={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(l,{variant:`heading`,tag:`h3`,desktopSize:20,mobileSize:20,children:`Navigation`}),(0,z.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)})]}),outlet:(0,z.jsx)(H,{title:`Scrollable sidebar`})},parameters:{docs:{description:{story:`The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.`}}}},Y={args:{...U,outlet:(0,z.jsx)(H,{title:`Long page`,cards:80,minHeight:3e3})},parameters:{docs:{description:{story:`Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.`}}}},X={args:{...U,aside:(0,z.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)}),outlet:(0,z.jsx)(H,{title:`Both scroll`,cards:80,minHeight:3e3})}},Z={args:U,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.`}}}},Q={args:U,globals:{viewport:{value:`tablet`,isRotated:!1}}},$={args:{...U,outlet:(0,z.jsx)(H,{title:`Mobile long page`,cards:60,minHeight:3e3})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Scroll the page: the Menu button should stay fixed on screen.`}}}},ue=[`Default`,`CustomContent`,`MinimalSidebar`,`EmptySidebar`,`LongSidebar`,`LongPage`,`LongSidebarAndLongPage`,`Mobile`,`Tablet`,`MobileLongPage`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <div>
        <Typography variant="heading" tag="h3" desktopSize={20} mobileSize={20}>
          Workspace
        </Typography>
        <NavigationLinks />
        <hr style={{
        margin: '24px 0'
      }} />
        <Typography variant="caption" tag="p" desktopSize={13} mobileSize={13} color="#666">
          Workspace: Production
        </Typography>
      </div>,
    outlet: <MainContent title="Analytics" />
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <div>
        <Typography variant="heading" tag="h3" desktopSize={20} mobileSize={20}>
          Menu
        </Typography>
        <Typography variant="body" tag="p" desktopSize={16} mobileSize={16}>
          Small sidebar content.
        </Typography>
      </div>,
    outlet: <MainContent title="Minimal sidebar content" cards={2} minHeight={300} />
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: null,
    outlet: <MainContent title="Empty sidebar" />
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <div>
        <Typography variant="heading" tag="h3" desktopSize={20} mobileSize={20}>
          Navigation
        </Typography>
        <NavigationLinks items={Array.from({
        length: 40
      }, (_, i) => \`Section \${i + 1}\`)} />
      </div>,
    outlet: <MainContent title="Scrollable sidebar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    outlet: <MainContent title="Long page" cards={80} minHeight={3000} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <NavigationLinks items={Array.from({
      length: 40
    }, (_, i) => \`Section \${i + 1}\`)} />,
    outlet: <MainContent title="Both scroll" cards={80} minHeight={3000} />
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'tablet',
      isRotated: false
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    outlet: <MainContent title="Mobile long page" cards={60} minHeight={3000} />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scroll the page: the Menu button should stay fixed on screen.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}}})))()}de();export{G as CustomContent,W as Default,q as EmptySidebar,Y as LongPage,J as LongSidebar,X as LongSidebarAndLongPage,K as MinimalSidebar,Z as Mobile,$ as MobileLongPage,Q as Tablet,ue as __namedExportsOrder,ce as default};