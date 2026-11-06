import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{M as n}from"./iframe-Ck-V0SGv.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./Typography-BtyEAi8p.js";import{n as o,t as ee}from"./Button-C6IUi-rT.js";import{o as te,t as s}from"./Icons-Cnw6Qy4u.js";import{t as c}from"./Grid-Dj4dOiq4.js";import{t as l}from"./Grid-BciTXD37.js";import{r as ne,t as re}from"./hooks-Cd_LoBw_.js";import{n as ie,t as u}from"./NavigationTabs-OvN-Uc9x.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function ae(){return(ae=e((()=>{d=`_n23mNavigationDashboard_bk7wq_2`,f=`_dragging_bk7wq_10`,p=`_row_bk7wq_15`,m=`_sidebarContainer_bk7wq_16`,h=`_sticky_bk7wq_17`,g=`_rowOpen_bk7wq_35`,_=`_sidebarContainerOpen_bk7wq_50`,v=`_sidebarContainerClosed_bk7wq_54`,y=`_asideInner_bk7wq_93`,b=`_sidebarOpen_bk7wq_106`,x=`_sidebarClosed_bk7wq_110`,S=`_outlet_bk7wq_115`,C=`_outletContent_bk7wq_123`,w=`_toggleAnchor_bk7wq_128`,T=`_toggleOpen_bk7wq_136`,E=`_toggleClosed_bk7wq_144`,D=`_rowNoAside_bk7wq_149`,O=`_outletNoAside_bk7wq_154`,k={n23mNavigationDashboard:d,dragging:f,row:p,sidebarContainer:m,sticky:h,rowOpen:g,sidebarContainerOpen:_,sidebarContainerClosed:v,asideInner:y,sidebarOpen:b,sidebarClosed:x,outlet:S,outletContent:C,toggleAnchor:w,toggleOpen:T,toggleClosed:E,rowNoAside:D,outletNoAside:O}})))()}var A,j,M,N,P,F,I,L,R;function oe(){return(oe=e((()=>{A=n(),ee(),l(),re(),s(),u(),ae(),j=t(),M=300,N=300,P=480,F=220,I=4,L=768,R=({children:e,className:t,style:n,menuTopLeftColumn:i=(0,j.jsx)(j.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:a=(0,j.jsx)(j.Fragment,{children:`menuTopRightColumn`}),menuMobile:ee=(0,j.jsx)(j.Fragment,{children:`menuMobile`}),outlet:s=(0,j.jsx)(j.Fragment,{children:`outlet`}),aside:l=(0,j.jsx)(j.Fragment,{children:`aside`}),...re})=>{let u=(0,A.useRef)(null),d=(0,A.useRef)(null),{width:f}=ne(),p=l!=null&&l!==!1&&f>=L,[m,h]=(0,A.useState)(f>=L),[g,_]=(0,A.useState)(M),[v,y]=(0,A.useState)(!1),b=p&&m,x=(0,A.useRef)(null),S=(0,A.useRef)(M),C=(0,A.useRef)(!1),w=()=>{h(f<L?!1:e=>!e)},T=e=>{if(C.current=!1,e.button!==0||f<L)return;e.currentTarget.setPointerCapture(e.pointerId);let t=b?g:0;x.current={startX:e.clientX,startWidth:t,moved:!1,wasOpen:b},S.current=t},E=e=>{let t=x.current,n=u.current;if(!t||!n)return;let r=e.clientX-t.startX;if(!t.moved){if(Math.abs(r)<I)return;t.moved=!0,y(!0)}let i=Math.min(P,Math.max(0,t.startWidth+r));S.current=i,n.style.setProperty(`--navigationdashboard-sidebar-w`,`${i}px`),n.dataset.collapsing=i<F?`true`:`false`,!t.wasOpen&&i>0&&h(!0)},D=()=>{let e=x.current,t=u.current;if(x.current=null,!e?.moved||!t)return;C.current=!0,t.dataset.collapsing=`false`;let n=S.current;if(n<F)t.style.setProperty(`--navigationdashboard-sidebar-w`,`${g}px`),h(!1);else{let e=Math.min(P,Math.max(N,n));t.style.setProperty(`--navigationdashboard-sidebar-w`,`${e}px`),S.current=e,_(e),h(!0)}y(!1)},O=()=>{C.current?C.current=!1:w()};return(0,A.useLayoutEffect)(()=>{f<L&&h(!1)},[f]),(0,A.useLayoutEffect)(()=>{let e=u.current;e&&e.style.setProperty(`--navigationdashboard-sidebar-w`,`${g}px`)},[g]),(0,A.useLayoutEffect)(()=>{let e=u.current,t=d.current;if(!e||!t)return;let n=0,r=()=>{n=0;let r=Math.max(0,t.getBoundingClientRect().bottom);e.style.setProperty(`--navigationdashboard-h`,`${r}px`)},i=()=>{n||=requestAnimationFrame(r)};r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i),window.addEventListener(`pageshow`,i),window.visualViewport?.addEventListener(`resize`,i);let a=new ResizeObserver(i);return a.observe(t),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),window.removeEventListener(`pageshow`,i),window.visualViewport?.removeEventListener(`resize`,i),a.disconnect(),cancelAnimationFrame(n)}},[]),(0,j.jsxs)(`div`,{ref:u,className:[k.n23mNavigationDashboard,`n23mNavigationDashboard`,v&&k.dragging,t].filter(Boolean).join(` `),...re,style:{...r({"--navigationdashboard-sidebar-w":`${g}px`,"--navigationdashboard-sidebar-min":`${N}px`}),...n},children:[(0,j.jsx)(`div`,{ref:d,children:(0,j.jsx)(ie,{widthInnerContainer:`100%`,widthMainContainer:`100%`,menuOnlyTop:!0,menuTopLeftColumn:(0,j.jsxs)(c,{layout:`flex`,justifyContent:`flex-start`,gap:{col:`15px`,row:`0px`},alignItems:`center`,minHeight:`100%`,children:[p&&(0,j.jsx)(c,{layout:`flex`,justifyContent:`flex-start`,margin:0,children:(0,j.jsx)(o,{type:`button`,variant:`secondary`,onClick:w,height:`40px`,width:`40px`,padding:0,children:(0,j.jsx)(te,{open:m,width:20,height:20})})}),(0,j.jsx)(`div`,{children:i})]}),menuTopRightColumn:a,menuMobile:ee})}),(0,j.jsx)(c,{layout:`container`,padding:`0 20px 0 0`,widthMin:`100%`,children:(0,j.jsxs)(`div`,{className:[k.row,p?b&&k.rowOpen:k.rowNoAside].filter(Boolean).join(` `),children:[p&&(0,j.jsx)(`div`,{className:[k.sidebarContainer,b?k.sidebarContainerOpen:k.sidebarContainerClosed].join(` `),children:(0,j.jsx)(`div`,{className:[k.sticky,b?k.sidebarOpen:k.sidebarClosed].join(` `),children:(0,j.jsx)(`div`,{className:k.asideInner,children:l})})}),(0,j.jsxs)(`div`,{className:[k.outlet,!p&&k.outletNoAside].filter(Boolean).join(` `),children:[p&&(0,j.jsx)(`div`,{className:k.toggleAnchor,children:(0,j.jsx)(o,{type:`button`,variant:`secondary`,height:`60px`,width:`10px`,padding:0,onClick:O,onPointerDown:T,onPointerMove:E,onPointerUp:D,onPointerCancel:D,className:[b?k.toggleOpen:k.toggleClosed].join(` `),"aria-label":b?`Collapse sidebar`:`Expand sidebar`,"aria-expanded":b,children:(0,j.jsx)(`div`,{children:`|`})})}),(0,j.jsx)(`div`,{className:k.outletContent,children:s})]})]})})]})},R.displayName=`NavigationDashboard`;try{R.displayName=`NavigationDashboard`,R.__docgenInfo={description:``,displayName:`NavigationDashboard`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`CSSProperties`}},menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopLeftColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopRightColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuMobile:{defaultValue:{value:`<>menuMobile</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuMobile`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},outlet:{defaultValue:{value:`<>outlet</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`outlet`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},aside:{defaultValue:{value:`<>aside</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:`Pass null (or omit the content) to hide the sidebar and the divider completely.`,name:`aside`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function se(){return(se=e((()=>{oe()})))()}var z,ce,le,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ue;function de(){return(de=e((()=>{l(),a(),se(),z=t(),ce={title:`Navigation/NavigationDashboard`,component:R,parameters:{layout:`fullscreen`,docs:{description:{component:`
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},outlet:{control:!1},aside:{control:!1}}},le=[`Overview`,`Analytics`,`Reports`,`Users`,`Settings`],B=({items:e=le})=>(0,z.jsx)(`nav`,{"aria-label":`Dashboard navigation`,style:{display:`flex`,flexDirection:`column`,gap:8},children:e.map((e,t)=>(0,z.jsx)(i,{variant:`link`,href:`#${e.toLowerCase().replace(/\s+/g,`-`)}`,desktopSize:16,mobileSize:16,style:{display:`block`,padding:`10px 12px`,borderRadius:6,background:t===0?`#e8edff`:`transparent`,color:t===0?`#263fa8`:`inherit`,textDecoration:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e},e))}),V=[[`Total users`,`2,450`],[`Active sessions`,`186`],[`Reports`,`38`],[`Revenue`,`$12,480`],[`Conversion`,`3.4%`],[`Bounce rate`,`41%`],[`Avg. session`,`4m 12s`],[`Open tickets`,`17`]],H=({title:e=`Dashboard overview`,cards:t=V.length,minHeight:n=600})=>(0,z.jsxs)(`main`,{style:{minHeight:n,width:`100%`},children:[(0,z.jsx)(i,{variant:`heading`,tag:`h1`,desktopSize:32,mobileSize:28,style:{marginTop:0},children:e}),(0,z.jsx)(i,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,children:`Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.`}),(0,z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:24},children:Array.from({length:t},(e,t)=>{let[n,r]=V[t%V.length];return(0,z.jsxs)(`section`,{style:{minWidth:200,flex:`1 1 200px`,padding:20,border:`1px solid #ddd`,borderRadius:8},children:[(0,z.jsx)(i,{variant:`body`,tag:`p`,desktopSize:14,mobileSize:14,color:`#666`,style:{margin:`0 0 8px`},children:n}),(0,z.jsx)(i,{variant:`heading`,tag:`p`,desktopSize:24,mobileSize:24,children:r})]},t)})})]}),U={menuTopLeftColumn:(0,z.jsx)(c,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,z.jsx)(i,{variant:`link`,href:`https://najwer23.github.io/hol/`,desktopSize:20,mobileSize:20,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`Link`})}),menuTopRightColumn:(0,z.jsx)(c,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,children:(0,z.jsx)(i,{variant:`link`,href:`https://najwer23.github.io/hol/`,desktopSize:16,mobileSize:16,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`hola`})}),menuMobile:(0,z.jsx)(B,{}),outlet:(0,z.jsx)(H,{}),aside:(0,z.jsx)(B,{})},W={args:U},G={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(i,{variant:`heading`,tag:`h3`,desktopSize:20,mobileSize:20,children:`Workspace`}),(0,z.jsx)(B,{}),(0,z.jsx)(`hr`,{style:{margin:`24px 0`}}),(0,z.jsx)(i,{variant:`caption`,tag:`p`,desktopSize:13,mobileSize:13,color:`#666`,children:`Workspace: Production`})]}),outlet:(0,z.jsx)(H,{title:`Analytics`})}},K={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(i,{variant:`heading`,tag:`h3`,desktopSize:20,mobileSize:20,children:`Menu`}),(0,z.jsx)(i,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,children:`Small sidebar content.`})]}),outlet:(0,z.jsx)(H,{title:`Minimal sidebar content`,cards:2,minHeight:300})}},q={args:{...U,aside:null,outlet:(0,z.jsx)(H,{title:`Empty sidebar`})}},J={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(i,{variant:`heading`,tag:`h3`,desktopSize:20,mobileSize:20,children:`Navigation`}),(0,z.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)})]}),outlet:(0,z.jsx)(H,{title:`Scrollable sidebar`})},parameters:{docs:{description:{story:`The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.`}}}},Y={args:{...U,outlet:(0,z.jsx)(H,{title:`Long page`,cards:80,minHeight:3e3})},parameters:{docs:{description:{story:`Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.`}}}},X={args:{...U,aside:(0,z.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)}),outlet:(0,z.jsx)(H,{title:`Both scroll`,cards:80,minHeight:3e3})}},Z={args:U,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.`}}}},Q={args:U,globals:{viewport:{value:`tablet`,isRotated:!1}}},$={args:{...U,outlet:(0,z.jsx)(H,{title:`Mobile long page`,cards:60,minHeight:3e3})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Scroll the page: the Menu button should stay fixed on screen.`}}}},ue=[`Default`,`CustomContent`,`MinimalSidebar`,`EmptySidebar`,`LongSidebar`,`LongPage`,`LongSidebarAndLongPage`,`Mobile`,`Tablet`,`MobileLongPage`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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