import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-C6z0WKfW.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as ee,t as te}from"./Button-C5gV1vEB.js";import{o as ne,t as re}from"./Icons-DPMAZlVv.js";import{t as o}from"./Grid-4vLd5vcL.js";import{t as s}from"./Grid-tQuuV3qK.js";import{r as ie,t as c}from"./hooks-ClvtyIBz.js";import{n as ae,t as l}from"./NavigationTabs-BrpFvkaI.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{u=`_n23mNavigationDashboard_1vpju_2`,d=`_dragging_1vpju_10`,f=`_row_1vpju_15`,p=`_sidebarContainer_1vpju_16`,m=`_sticky_1vpju_17`,h=`_rowOpen_1vpju_33`,g=`_sidebarContainerOpen_1vpju_48`,_=`_sidebarContainerClosed_1vpju_52`,v=`_outlet_1vpju_56`,y=`_outletContent_1vpju_63`,b=`_sidebarOpen_1vpju_94`,x=`_sidebarClosed_1vpju_99`,S=`_toggleAnchor_1vpju_105`,C=`_toggleOpen_1vpju_112`,w=`_toggleClosed_1vpju_120`,T=`_rowNoAside_1vpju_125`,E={n23mNavigationDashboard:u,dragging:d,row:f,sidebarContainer:p,sticky:m,rowOpen:h,sidebarContainerOpen:g,sidebarContainerClosed:_,outlet:v,outletContent:y,sidebarOpen:b,sidebarClosed:x,toggleAnchor:S,toggleOpen:C,toggleClosed:w,rowNoAside:T}})))()}var O,k,A,j,M,N,oe,P,F;function I(){return(I=e((()=>{O=t(),te(),s(),c(),re(),l(),a(),D(),k=n(),A=300,j=200,M=480,N=120,oe=4,P=768,F=({children:e,className:t,style:n,menuTopLeftColumn:a=(0,k.jsx)(k.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:te=(0,k.jsx)(k.Fragment,{children:`menuTopRightColumn`}),menuMobile:re=(0,k.jsx)(k.Fragment,{children:`menuMobile`}),outlet:s=(0,k.jsx)(k.Fragment,{children:`outlet`}),aside:c=(0,k.jsx)(k.Fragment,{children:`aside`}),...l})=>{let u=(0,O.useRef)(null),d=(0,O.useRef)(null),{width:f}=ie(),p=c!=null&&c!==!1&&f>=P,[m,h]=(0,O.useState)(f>=P),[g,_]=(0,O.useState)(A),[v,y]=(0,O.useState)(!1),b=p&&m,x=(0,O.useRef)(null),S=(0,O.useRef)(A),C=(0,O.useRef)(!1),w=()=>{h(f<P?!1:e=>!e)},T=e=>{if(C.current=!1,e.button!==0||f<P)return;e.currentTarget.setPointerCapture(e.pointerId);let t=b?g:0;x.current={startX:e.clientX,startWidth:t,moved:!1,wasOpen:b},S.current=t},D=e=>{let t=x.current,n=u.current;if(!t||!n)return;let r=e.clientX-t.startX;if(!t.moved){if(Math.abs(r)<oe)return;t.moved=!0,y(!0)}let i=Math.min(M,Math.max(0,t.startWidth+r));S.current=i,n.style.setProperty(`--navigationdashboard-sidebar-w`,`${i}px`),n.dataset.collapsing=i<N?`true`:`false`,!t.wasOpen&&i>0&&h(!0)},F=()=>{let e=x.current,t=u.current;if(x.current=null,!e?.moved||!t)return;C.current=!0,t.dataset.collapsing=`false`;let n=S.current;if(n<N)t.style.setProperty(`--navigationdashboard-sidebar-w`,`${g}px`),h(!1);else{let e=Math.min(M,Math.max(j,n));t.style.setProperty(`--navigationdashboard-sidebar-w`,`${e}px`),S.current=e,_(e),h(!0)}y(!1)},I=()=>{C.current?C.current=!1:w()};return(0,O.useLayoutEffect)(()=>{f<P&&h(!1)},[f]),(0,O.useLayoutEffect)(()=>{let e=u.current;e&&e.style.setProperty(`--navigationdashboard-sidebar-w`,`${g}px`)},[g]),(0,O.useLayoutEffect)(()=>{let e=u.current,t=d.current;if(!e||!t)return;let n=0,r=()=>{n=0;let r=Math.max(0,t.getBoundingClientRect().bottom);e.style.setProperty(`--navigationdashboard-h`,`${r}px`)},i=()=>{n||=requestAnimationFrame(r)};r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i),window.addEventListener(`pageshow`,i),window.visualViewport?.addEventListener(`resize`,i);let a=new ResizeObserver(i);return a.observe(t),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),window.removeEventListener(`pageshow`,i),window.visualViewport?.removeEventListener(`resize`,i),a.disconnect(),cancelAnimationFrame(n)}},[]),(0,k.jsxs)(`div`,{ref:u,className:[E.n23mNavigationDashboard,`n23mNavigationDashboard`,v&&E.dragging,t].filter(Boolean).join(` `),...l,style:{...r({"--navigationdashboard-sidebar-w":`${g}px`,"--navigationdashboard-sidebar-min":`${j}px`}),...n},children:[(0,k.jsx)(`div`,{ref:d,children:(0,k.jsx)(ae,{widthInnerContainer:`100%`,widthMainContainer:`100%`,menuOnlyTop:!0,menuTopLeftColumn:(0,k.jsxs)(o,{layout:`flex`,justifyContent:`flex-start`,gap:{col:`15px`,row:`0px`},alignItems:`center`,minHeight:`100%`,children:[p&&(0,k.jsx)(o,{layout:`flex`,justifyContent:`flex-start`,margin:0,children:(0,k.jsx)(ee,{onClick:w,height:`40px`,width:`40px`,backgroundColor:`#F2F0EF`,backgroundColorDisabled:`#F2F0EF`,borderColor:`black`,children:(0,k.jsx)(i,{tag:`div`,mobileSize:0,desktopSize:0,margin:`2px 0 0`,children:(0,k.jsx)(ne,{open:m,width:20,height:20})})})}),(0,k.jsx)(`div`,{children:a})]}),menuTopRightColumn:te,menuMobile:re})}),(0,k.jsx)(o,{layout:`container`,padding:`0 20px 0 0`,widthMin:`100%`,children:(0,k.jsxs)(`div`,{className:[E.row,p?b&&E.rowOpen:E.rowNoAside].filter(Boolean).join(` `),children:[p&&(0,k.jsx)(`div`,{className:[E.sidebarContainer,b?E.sidebarContainerOpen:E.sidebarContainerClosed].join(` `),children:(0,k.jsx)(`div`,{className:[E.sticky,b?E.sidebarOpen:E.sidebarClosed].join(` `),children:c})}),(0,k.jsxs)(`div`,{className:[E.outlet,!p&&E.outletNoAside].filter(Boolean).join(` `),children:[p&&(0,k.jsx)(`div`,{className:E.toggleAnchor,children:(0,k.jsx)(ee,{height:`60px`,width:`10px`,backgroundColor:`#F2F0EF`,borderColor:`black`,type:`button`,onClick:I,onPointerDown:T,onPointerMove:D,onPointerUp:F,onPointerCancel:F,className:[b?E.toggleOpen:E.toggleClosed].join(` `),children:(0,k.jsx)(`div`,{children:`|`})})}),(0,k.jsx)(`div`,{className:E.outletContent,children:s})]})]})})]})},F.displayName=`NavigationDashboard`;try{F.displayName=`NavigationDashboard`,F.__docgenInfo={description:``,displayName:`NavigationDashboard`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`CSSProperties`}},menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopLeftColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopRightColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuMobile:{defaultValue:{value:`<>menuMobile</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuMobile`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},outlet:{defaultValue:{value:`<>outlet</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`outlet`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},aside:{defaultValue:{value:`<>aside</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:`Pass null (or omit the content) to hide the sidebar and the divider completely.`,name:`aside`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function L(){return(L=e((()=>{I()})))()}var R,z,se,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ce;function le(){return(le=e((()=>{s(),a(),L(),R=n(),z={title:`Navigation/NavigationDashboard`,component:F,parameters:{layout:`fullscreen`,docs:{description:{component:`
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},outlet:{control:!1},aside:{control:!1}}},se=[`Overview`,`Analytics`,`Reports`,`Users`,`Settings`],B=({items:e=se})=>(0,R.jsx)(`nav`,{"aria-label":`Dashboard navigation`,style:{display:`flex`,flexDirection:`column`,gap:8},children:e.map((e,t)=>(0,R.jsx)(`a`,{href:`#${e.toLowerCase().replace(/\s+/g,`-`)}`,style:{display:`block`,padding:`10px 12px`,borderRadius:6,background:t===0?`#e8edff`:`transparent`,color:t===0?`#263fa8`:`inherit`,textDecoration:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e},e))}),V=[[`Total users`,`2,450`],[`Active sessions`,`186`],[`Reports`,`38`],[`Revenue`,`$12,480`],[`Conversion`,`3.4%`],[`Bounce rate`,`41%`],[`Avg. session`,`4m 12s`],[`Open tickets`,`17`]],H=({title:e=`Dashboard overview`,cards:t=V.length,minHeight:n=600})=>(0,R.jsxs)(`main`,{style:{minHeight:n,width:`100%`},children:[(0,R.jsx)(`h1`,{style:{marginTop:0},children:e}),(0,R.jsx)(`p`,{children:`Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.`}),(0,R.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:24},children:Array.from({length:t},(e,t)=>{let[n,r]=V[t%V.length];return(0,R.jsxs)(`section`,{style:{minWidth:200,flex:`1 1 200px`,padding:20,border:`1px solid #ddd`,borderRadius:8},children:[(0,R.jsx)(`p`,{style:{margin:`0 0 8px`,color:`#666`},children:n}),(0,R.jsx)(`strong`,{style:{fontSize:24},children:r})]},t)})})]}),U={menuTopLeftColumn:(0,R.jsx)(o,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,R.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:20,mobileSize:20,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`Link`})}),menuTopRightColumn:(0,R.jsx)(o,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,children:(0,R.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:16,mobileSize:16,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`hola`})}),menuMobile:(0,R.jsx)(B,{}),outlet:(0,R.jsx)(H,{}),aside:(0,R.jsx)(B,{})},W={args:U},G={args:{...U,aside:(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{style:{marginTop:0},children:`Workspace`}),(0,R.jsx)(B,{}),(0,R.jsx)(`hr`,{style:{margin:`24px 0`}}),(0,R.jsx)(`p`,{style:{color:`#666`,fontSize:13},children:`Workspace: Production`})]}),outlet:(0,R.jsx)(H,{title:`Analytics`})}},K={args:{...U,aside:(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{style:{marginTop:0},children:`Menu`}),(0,R.jsx)(`p`,{children:`Small sidebar content.`})]}),outlet:(0,R.jsx)(H,{title:`Minimal sidebar content`,cards:2,minHeight:300})}},q={args:{...U,aside:null,outlet:(0,R.jsx)(H,{title:`Empty sidebar`})}},J={args:{...U,aside:(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{style:{marginTop:0},children:`Navigation`}),(0,R.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)})]}),outlet:(0,R.jsx)(H,{title:`Scrollable sidebar`})},parameters:{docs:{description:{story:`The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.`}}}},Y={args:{...U,outlet:(0,R.jsx)(H,{title:`Long page`,cards:80,minHeight:3e3})},parameters:{docs:{description:{story:`Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.`}}}},X={args:{...U,aside:(0,R.jsx)(B,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)}),outlet:(0,R.jsx)(H,{title:`Both scroll`,cards:80,minHeight:3e3})}},Z={args:U,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.`}}}},Q={args:U,globals:{viewport:{value:`tablet`,isRotated:!1}}},$={args:{...U,outlet:(0,R.jsx)(H,{title:`Mobile long page`,cards:60,minHeight:3e3})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Scroll the page: the Menu button should stay fixed on screen.`}}}},ce=[`Default`,`CustomContent`,`MinimalSidebar`,`EmptySidebar`,`LongSidebar`,`LongPage`,`LongSidebarAndLongPage`,`Mobile`,`Tablet`,`MobileLongPage`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}le();export{G as CustomContent,W as Default,q as EmptySidebar,Y as LongPage,J as LongSidebar,X as LongSidebarAndLongPage,K as MinimalSidebar,Z as Mobile,$ as MobileLongPage,Q as Tablet,ce as __namedExportsOrder,z as default};