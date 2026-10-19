import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-eqW43D89.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as ee,t as o}from"./Button-B7kY3Wqn.js";import{o as te,t as ne}from"./Icons-DPMAZlVv.js";import{t as s}from"./Grid-wJF96uRf.js";import{t as c}from"./Grid-CwV9pYH1.js";import{r as re,t as l}from"./hooks-ChISvniE.js";import{n as ie,t as ae}from"./NavigationTabs-BhNEfjWI.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{u=`_n23mNavigationDashboard_1fgkk_2`,d=`_dragging_1fgkk_10`,f=`_row_1fgkk_15`,p=`_sidebarContainer_1fgkk_16`,m=`_sticky_1fgkk_17`,h=`_rowOpen_1fgkk_34`,g=`_sidebarContainerOpen_1fgkk_49`,_=`_sidebarContainerClosed_1fgkk_53`,v=`_sidebarOpen_1fgkk_82`,y=`_sidebarClosed_1fgkk_87`,b=`_outlet_1fgkk_93`,x=`_outletContent_1fgkk_101`,S=`_toggleAnchor_1fgkk_106`,C=`_toggleOpen_1fgkk_113`,w=`_toggleClosed_1fgkk_121`,T=`_rowNoAside_1fgkk_126`,E=`_outletNoAside_1fgkk_131`,D={n23mNavigationDashboard:u,dragging:d,row:f,sidebarContainer:p,sticky:m,rowOpen:h,sidebarContainerOpen:g,sidebarContainerClosed:_,sidebarOpen:v,sidebarClosed:y,outlet:b,outletContent:x,toggleAnchor:S,toggleOpen:C,toggleClosed:w,rowNoAside:T,outletNoAside:E}})))()}var k,A,j,M,N,P,oe,F,I;function L(){return(L=e((()=>{k=t(),o(),c(),l(),ne(),ae(),a(),O(),A=n(),j=300,M=200,N=480,P=120,oe=4,F=768,I=({children:e,className:t,style:n,menuTopLeftColumn:a=(0,A.jsx)(A.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:o=(0,A.jsx)(A.Fragment,{children:`menuTopRightColumn`}),menuMobile:ne=(0,A.jsx)(A.Fragment,{children:`menuMobile`}),outlet:c=(0,A.jsx)(A.Fragment,{children:`outlet`}),aside:l=(0,A.jsx)(A.Fragment,{children:`aside`}),...ae})=>{let u=(0,k.useRef)(null),d=(0,k.useRef)(null),{width:f}=re(),p=l!=null&&l!==!1&&f>=F,[m,h]=(0,k.useState)(f>=F),[g,_]=(0,k.useState)(j),[v,y]=(0,k.useState)(!1),b=p&&m,x=(0,k.useRef)(null),S=(0,k.useRef)(j),C=(0,k.useRef)(!1),w=()=>{h(f<F?!1:e=>!e)},T=e=>{if(C.current=!1,e.button!==0||f<F)return;e.currentTarget.setPointerCapture(e.pointerId);let t=b?g:0;x.current={startX:e.clientX,startWidth:t,moved:!1,wasOpen:b},S.current=t},E=e=>{let t=x.current,n=u.current;if(!t||!n)return;let r=e.clientX-t.startX;if(!t.moved){if(Math.abs(r)<oe)return;t.moved=!0,y(!0)}let i=Math.min(N,Math.max(0,t.startWidth+r));S.current=i,n.style.setProperty(`--navigationdashboard-sidebar-w`,`${i}px`),n.dataset.collapsing=i<P?`true`:`false`,!t.wasOpen&&i>0&&h(!0)},O=()=>{let e=x.current,t=u.current;if(x.current=null,!e?.moved||!t)return;C.current=!0,t.dataset.collapsing=`false`;let n=S.current;if(n<P)t.style.setProperty(`--navigationdashboard-sidebar-w`,`${g}px`),h(!1);else{let e=Math.min(N,Math.max(M,n));t.style.setProperty(`--navigationdashboard-sidebar-w`,`${e}px`),S.current=e,_(e),h(!0)}y(!1)},I=()=>{C.current?C.current=!1:w()};return(0,k.useLayoutEffect)(()=>{f<F&&h(!1)},[f]),(0,k.useLayoutEffect)(()=>{let e=u.current;e&&e.style.setProperty(`--navigationdashboard-sidebar-w`,`${g}px`)},[g]),(0,k.useLayoutEffect)(()=>{let e=u.current,t=d.current;if(!e||!t)return;let n=0,r=()=>{n=0;let r=Math.max(0,t.getBoundingClientRect().bottom);e.style.setProperty(`--navigationdashboard-h`,`${r}px`)},i=()=>{n||=requestAnimationFrame(r)};r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i),window.addEventListener(`pageshow`,i),window.visualViewport?.addEventListener(`resize`,i);let a=new ResizeObserver(i);return a.observe(t),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),window.removeEventListener(`pageshow`,i),window.visualViewport?.removeEventListener(`resize`,i),a.disconnect(),cancelAnimationFrame(n)}},[]),(0,A.jsxs)(`div`,{ref:u,className:[D.n23mNavigationDashboard,`n23mNavigationDashboard`,v&&D.dragging,t].filter(Boolean).join(` `),...ae,style:{...r({"--navigationdashboard-sidebar-w":`${g}px`,"--navigationdashboard-sidebar-min":`${M}px`}),...n},children:[(0,A.jsx)(`div`,{ref:d,children:(0,A.jsx)(ie,{widthInnerContainer:`100%`,widthMainContainer:`100%`,menuOnlyTop:!0,menuTopLeftColumn:(0,A.jsxs)(s,{layout:`flex`,justifyContent:`flex-start`,gap:{col:`15px`,row:`0px`},alignItems:`center`,minHeight:`100%`,children:[p&&(0,A.jsx)(s,{layout:`flex`,justifyContent:`flex-start`,margin:0,children:(0,A.jsx)(ee,{onClick:w,height:`40px`,width:`40px`,backgroundColor:`#F2F0EF`,backgroundColorDisabled:`#F2F0EF`,borderColor:`black`,children:(0,A.jsx)(i,{tag:`div`,mobileSize:0,desktopSize:0,margin:`2px 0 0`,children:(0,A.jsx)(te,{open:m,width:20,height:20})})})}),(0,A.jsx)(`div`,{children:a})]}),menuTopRightColumn:o,menuMobile:ne})}),(0,A.jsx)(s,{layout:`container`,padding:`0 20px 0 0`,widthMin:`100%`,children:(0,A.jsxs)(`div`,{className:[D.row,p?b&&D.rowOpen:D.rowNoAside].filter(Boolean).join(` `),children:[p&&(0,A.jsx)(`div`,{className:[D.sidebarContainer,b?D.sidebarContainerOpen:D.sidebarContainerClosed].join(` `),children:(0,A.jsx)(`div`,{className:[D.sticky,b?D.sidebarOpen:D.sidebarClosed].join(` `),children:l})}),(0,A.jsxs)(`div`,{className:[D.outlet,!p&&D.outletNoAside].filter(Boolean).join(` `),children:[p&&(0,A.jsx)(`div`,{className:D.toggleAnchor,children:(0,A.jsx)(ee,{height:`60px`,width:`10px`,backgroundColor:`#F2F0EF`,borderColor:`black`,type:`button`,onClick:I,onPointerDown:T,onPointerMove:E,onPointerUp:O,onPointerCancel:O,className:[b?D.toggleOpen:D.toggleClosed].join(` `),children:(0,A.jsx)(`div`,{children:`|`})})}),(0,A.jsx)(`div`,{className:D.outletContent,children:c})]})]})})]})},I.displayName=`NavigationDashboard`;try{I.displayName=`NavigationDashboard`,I.__docgenInfo={description:``,displayName:`NavigationDashboard`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`CSSProperties`}},menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopLeftColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopRightColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuMobile:{defaultValue:{value:`<>menuMobile</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuMobile`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},outlet:{defaultValue:{value:`<>outlet</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`outlet`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},aside:{defaultValue:{value:`<>aside</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:`Pass null (or omit the content) to hide the sidebar and the divider completely.`,name:`aside`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function R(){return(R=e((()=>{L()})))()}var z,se,ce,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{c(),a(),R(),z=n(),se={title:`Navigation/NavigationDashboard`,component:I,parameters:{layout:`fullscreen`,docs:{description:{component:`
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},outlet:{control:!1},aside:{control:!1}}},ce=[`Overview`,`Analytics`,`Reports`,`Users`,`Settings`],B=({items:e=ce})=>(0,z.jsx)(`nav`,{"aria-label":`Dashboard navigation`,style:{display:`flex`,flexDirection:`column`,gap:8},children:e.map((e,t)=>(0,z.jsx)(`a`,{href:`#${e.toLowerCase().replace(/\s+/g,`-`)}`,style:{display:`block`,padding:`10px 12px`,borderRadius:6,background:t===0?`#e8edff`:`transparent`,color:t===0?`#263fa8`:`inherit`,textDecoration:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e},e))}),V=[[`Total users`,`2,450`],[`Active sessions`,`186`],[`Reports`,`38`],[`Revenue`,`$12,480`],[`Conversion`,`3.4%`],[`Bounce rate`,`41%`],[`Avg. session`,`4m 12s`],[`Open tickets`,`17`]],H=({title:e=`Dashboard overview`,cards:t=V.length,minHeight:n=600})=>(0,z.jsxs)(`main`,{style:{minHeight:n,width:`100%`},children:[(0,z.jsx)(`h1`,{style:{marginTop:0},children:e}),(0,z.jsx)(`p`,{children:`Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.`}),(0,z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:24},children:Array.from({length:t},(e,t)=>{let[n,r]=V[t%V.length];return(0,z.jsxs)(`section`,{style:{minWidth:200,flex:`1 1 200px`,padding:20,border:`1px solid #ddd`,borderRadius:8},children:[(0,z.jsx)(`p`,{style:{margin:`0 0 8px`,color:`#666`},children:n}),(0,z.jsx)(`strong`,{style:{fontSize:24},children:r})]},t)})})]}),U={menuTopLeftColumn:(0,z.jsx)(s,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,z.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:20,mobileSize:20,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`Link`})}),menuTopRightColumn:(0,z.jsx)(s,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,children:(0,z.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:16,mobileSize:16,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`hola`})}),menuMobile:(0,z.jsx)(B,{}),outlet:(0,z.jsx)(H,{}),aside:(0,z.jsx)(B,{})},W={args:U},G={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{style:{marginTop:0},children:`Workspace`}),(0,z.jsx)(B,{}),(0,z.jsx)(`hr`,{style:{margin:`24px 0`}}),(0,z.jsx)(`p`,{style:{color:`#666`,fontSize:13},children:`Workspace: Production`})]}),outlet:(0,z.jsx)(H,{title:`Analytics`})}},K={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{style:{marginTop:0},children:`Menu`}),(0,z.jsx)(`p`,{children:`Small sidebar content.`})]}),outlet:(0,z.jsx)(H,{title:`Minimal sidebar content`,cards:2,minHeight:300})}},q={args:{...U,aside:null,outlet:(0,z.jsx)(H,{title:`Empty sidebar`})}},J={args:{...U,aside:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{style:{marginTop:0},children:`Navigation`}),(0,z.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)})]}),outlet:(0,z.jsx)(H,{title:`Scrollable sidebar`})},parameters:{docs:{description:{story:`The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.`}}}},Y={args:{...U,outlet:(0,z.jsx)(H,{title:`Long page`,cards:80,minHeight:3e3})},parameters:{docs:{description:{story:`Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.`}}}},X={args:{...U,aside:(0,z.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)}),outlet:(0,z.jsx)(H,{title:`Both scroll`,cards:80,minHeight:3e3})}},Z={args:U,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.`}}}},Q={args:U,globals:{viewport:{value:`tablet`,isRotated:!1}}},$={args:{...U,outlet:(0,z.jsx)(H,{title:`Mobile long page`,cards:60,minHeight:3e3})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Scroll the page: the Menu button should stay fixed on screen.`}}}},le=[`Default`,`CustomContent`,`MinimalSidebar`,`EmptySidebar`,`LongSidebar`,`LongPage`,`LongSidebarAndLongPage`,`Mobile`,`Tablet`,`MobileLongPage`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <div>
        <h3 style={{
        marginTop: 0
      }}>Workspace</h3>
        <NavigationLinks />
        <hr style={{
        margin: '24px 0'
      }} />
        <p style={{
        color: '#666',
        fontSize: 13
      }}>Workspace: Production</p>
      </div>,
    outlet: <MainContent title="Analytics" />
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <div>
        <h3 style={{
        marginTop: 0
      }}>Menu</h3>
        <p>Small sidebar content.</p>
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
        <h3 style={{
        marginTop: 0
      }}>Navigation</h3>
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
}`,...$.parameters?.docs?.source}}}})))()}ue();export{G as CustomContent,W as Default,q as EmptySidebar,Y as LongPage,J as LongSidebar,X as LongSidebarAndLongPage,K as MinimalSidebar,Z as Mobile,$ as MobileLongPage,Q as Tablet,le as __namedExportsOrder,se as default};