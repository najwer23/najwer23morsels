import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BuWFXcRB.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as ee,t as te}from"./Button-C2telA1a.js";import{o as ne,t as re}from"./Icons-4AImrzo4.js";import{t as o}from"./Grid-D-KUYYkO.js";import{t as ie}from"./Grid-DNqZlkSn.js";import{r as ae,t as s}from"./hooks-C6PvVGvE.js";import{n as oe,t as se}from"./NavigationTabs-BDVR8Lrg.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function ce(){return(ce=e((()=>{c=`_n23mNavigationDashboard_8e7ss_2`,l=`_dragging_8e7ss_10`,u=`_row_8e7ss_15`,d=`_sidebarContainer_8e7ss_16`,f=`_sticky_8e7ss_17`,p=`_rowOpen_8e7ss_33`,m=`_sidebarContainerOpen_8e7ss_48`,h=`_sidebarContainerClosed_8e7ss_52`,g=`_outlet_8e7ss_56`,_=`_outletContent_8e7ss_63`,v=`_sidebarOpen_8e7ss_93`,y=`_sidebarClosed_8e7ss_98`,b=`_toggleAnchor_8e7ss_104`,x=`_toggleOpen_8e7ss_111`,S=`_toggleClosed_8e7ss_119`,C=`_rowNoAside_8e7ss_124`,w={n23mNavigationDashboard:c,dragging:l,row:u,sidebarContainer:d,sticky:f,rowOpen:p,sidebarContainerOpen:m,sidebarContainerClosed:h,outlet:g,outletContent:_,sidebarOpen:v,sidebarClosed:y,toggleAnchor:b,toggleOpen:x,toggleClosed:S,rowNoAside:C}})))()}var T,E,le,ue,de,D,fe,O,k;function A(){return(A=e((()=>{T=t(),te(),ie(),s(),re(),se(),a(),ce(),E=n(),le=300,ue=200,de=480,D=120,fe=4,O=768,k=({children:e,className:t,style:n,menuTopLeftColumn:a=(0,E.jsx)(E.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:te=(0,E.jsx)(E.Fragment,{children:`menuTopRightColumn`}),menuMobile:re=(0,E.jsx)(E.Fragment,{children:`menuMobile`}),outlet:ie=(0,E.jsx)(E.Fragment,{children:`outlet`}),aside:s=(0,E.jsx)(E.Fragment,{children:`aside`}),...se})=>{let c=(0,T.useRef)(null),l=(0,T.useRef)(null),{width:u}=ae(),d=s!=null&&s!==!1,[f,p]=(0,T.useState)(u>=O),[m,h]=(0,T.useState)(le),[g,_]=(0,T.useState)(!1),v=d&&f,y=(0,T.useRef)(null),b=(0,T.useRef)(le),x=(0,T.useRef)(!1),S=()=>{p(u<O?!1:e=>!e)},C=e=>{if(x.current=!1,e.button!==0||u<O)return;e.currentTarget.setPointerCapture(e.pointerId);let t=v?m:0;y.current={startX:e.clientX,startWidth:t,moved:!1,wasOpen:v},b.current=t},ce=e=>{let t=y.current,n=c.current;if(!t||!n)return;let r=e.clientX-t.startX;if(!t.moved){if(Math.abs(r)<fe)return;t.moved=!0,_(!0)}let i=Math.min(de,Math.max(0,t.startWidth+r));b.current=i,n.style.setProperty(`--navigationdashboard-sidebar-w`,`${i}px`),n.dataset.collapsing=i<D?`true`:`false`,!t.wasOpen&&i>0&&p(!0)},k=()=>{let e=y.current,t=c.current;if(y.current=null,!e?.moved||!t)return;x.current=!0,t.dataset.collapsing=`false`;let n=b.current;if(n<D)t.style.setProperty(`--navigationdashboard-sidebar-w`,`${m}px`),p(!1);else{let e=Math.min(de,Math.max(ue,n));t.style.setProperty(`--navigationdashboard-sidebar-w`,`${e}px`),b.current=e,h(e),p(!0)}_(!1)},A=()=>{x.current?x.current=!1:S()};return(0,T.useLayoutEffect)(()=>{u<O&&p(!1)},[u]),(0,T.useLayoutEffect)(()=>{let e=c.current;e&&e.style.setProperty(`--navigationdashboard-sidebar-w`,`${m}px`)},[m]),(0,T.useEffect)(()=>{let e=c.current,t=l.current;if(!e||!t)return;let n=0,r=()=>{n=0;let r=Math.max(0,t.getBoundingClientRect().bottom);e.style.setProperty(`--navigationdashboard-h`,`${r}px`)},i=()=>{n||=requestAnimationFrame(r)};r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i);let a=new ResizeObserver(i);return a.observe(t),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),a.disconnect(),cancelAnimationFrame(n)}},[]),(0,E.jsxs)(`div`,{ref:c,className:[w.n23mNavigationDashboard,`n23mNavigationDashboard`,g&&w.dragging,t].filter(Boolean).join(` `),...se,style:{...r({"--navigationdashboard-sidebar-w":`${m}px`,"--navigationdashboard-sidebar-min":`${ue}px`}),...n},children:[(0,E.jsx)(`div`,{ref:l,children:(0,E.jsx)(oe,{widthInnerContainer:`100%`,widthMainContainer:`100%`,menuOnlyTop:!0,menuTopLeftColumn:(0,E.jsxs)(o,{layout:`flex`,justifyContent:`flex-start`,gap:{col:`15px`,row:`0px`},alignItems:`center`,minHeight:`100%`,children:[d&&u>=O&&(0,E.jsx)(o,{layout:`flex`,justifyContent:`flex-start`,margin:0,children:(0,E.jsx)(ee,{onClick:S,height:`40px`,width:`40px`,backgroundColor:`#F2F0EF`,backgroundColorDisabled:`#F2F0EF`,borderColor:`black`,children:(0,E.jsx)(i,{tag:`div`,mobileSize:0,desktopSize:0,margin:`2px 0 0`,children:(0,E.jsx)(ne,{open:f,width:30,height:30})})})}),(0,E.jsx)(`div`,{children:a})]}),menuTopRightColumn:te,menuMobile:re})}),(0,E.jsx)(o,{layout:`container`,padding:`0 20px 0 0`,widthMin:`100%`,children:(0,E.jsxs)(`div`,{className:[w.row,d?v&&w.rowOpen:w.rowNoAside].filter(Boolean).join(` `),children:[d&&(0,E.jsx)(`div`,{className:[w.sidebarContainer,v?w.sidebarContainerOpen:w.sidebarContainerClosed].join(` `),children:(0,E.jsx)(`div`,{className:[w.sticky,v?w.sidebarOpen:w.sidebarClosed].join(` `),children:s})}),(0,E.jsxs)(`div`,{className:[w.outlet,!d&&w.outletNoAside].filter(Boolean).join(` `),children:[d&&u>=O&&(0,E.jsx)(`div`,{className:w.toggleAnchor,children:(0,E.jsx)(ee,{height:`60px`,width:`10px`,backgroundColor:`#F2F0EF`,borderColor:`black`,type:`button`,onClick:A,onPointerDown:C,onPointerMove:ce,onPointerUp:k,onPointerCancel:k,className:[v?w.toggleOpen:w.toggleClosed].join(` `),children:(0,E.jsx)(`div`,{children:`|`})})}),(0,E.jsx)(`div`,{className:w.outletContent,children:ie})]})]})})]})},k.displayName=`NavigationDashboard`;try{k.displayName=`NavigationDashboard`,k.__docgenInfo={description:``,displayName:`NavigationDashboard`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`CSSProperties`}},menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopLeftColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopRightColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuMobile:{defaultValue:{value:`<>menuMobile</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuMobile`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},outlet:{defaultValue:{value:`<>outlet</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`outlet`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},aside:{defaultValue:{value:`<>aside</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:`Pass null (or omit the content) to hide the sidebar and the divider completely.`,name:`aside`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function pe(){return(pe=e((()=>{A()})))()}var j,M,N,P,me,he,ge,F,I,L,_e,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ve;function ye(){return(ye=e((()=>{ie(),a(),pe(),j=n(),{expect:M,userEvent:N,waitFor:P,within:me}=__STORYBOOK_MODULE_TEST__,he={title:`Navigation/NavigationDashboard`,component:k,parameters:{layout:`fullscreen`,docs:{description:{component:`
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},outlet:{control:!1},aside:{control:!1}}},ge=[`Overview`,`Analytics`,`Reports`,`Users`,`Settings`],F=({items:e=ge})=>(0,j.jsx)(`nav`,{"aria-label":`Dashboard navigation`,style:{display:`flex`,flexDirection:`column`,gap:8},children:e.map((e,t)=>(0,j.jsx)(`a`,{href:`#${e.toLowerCase().replace(/\s+/g,`-`)}`,style:{display:`block`,padding:`10px 12px`,borderRadius:6,background:t===0?`#e8edff`:`transparent`,color:t===0?`#263fa8`:`inherit`,textDecoration:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e},e))}),I=[[`Total users`,`2,450`],[`Active sessions`,`186`],[`Reports`,`38`],[`Revenue`,`$12,480`],[`Conversion`,`3.4%`],[`Bounce rate`,`41%`],[`Avg. session`,`4m 12s`],[`Open tickets`,`17`]],L=({title:e=`Dashboard overview`,cards:t=I.length,minHeight:n=600})=>(0,j.jsxs)(`main`,{style:{minHeight:n,width:`100%`},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:e}),(0,j.jsx)(`p`,{children:`Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:24},children:Array.from({length:t},(e,t)=>{let[n,r]=I[t%I.length];return(0,j.jsxs)(`section`,{style:{minWidth:200,flex:`1 1 200px`,padding:20,border:`1px solid #ddd`,borderRadius:8},children:[(0,j.jsx)(`p`,{style:{margin:`0 0 8px`,color:`#666`},children:n}),(0,j.jsx)(`strong`,{style:{fontSize:24},children:r})]},t)})})]}),_e=()=>(0,j.jsxs)(`table`,{style:{borderCollapse:`collapse`,minWidth:1800},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:Array.from({length:12},(e,t)=>(0,j.jsxs)(`th`,{style:{border:`1px solid #ddd`,padding:`8px 16px`,textAlign:`left`,background:`#fafafa`},children:[`Column `,t+1]},t))})}),(0,j.jsx)(`tbody`,{children:Array.from({length:15},(e,t)=>(0,j.jsx)(`tr`,{children:Array.from({length:12},(e,n)=>(0,j.jsxs)(`td`,{style:{border:`1px solid #ddd`,padding:`8px 16px`,whiteSpace:`nowrap`},children:[`Row `,t+1,` / Cell `,n+1]},n))},t))})]}),R={menuTopLeftColumn:(0,j.jsx)(o,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,j.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:20,mobileSize:20,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`Link`})}),menuTopRightColumn:(0,j.jsx)(o,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,children:(0,j.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:16,mobileSize:16,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`hola`})}),menuMobile:(0,j.jsx)(F,{}),outlet:(0,j.jsx)(L,{}),aside:(0,j.jsx)(F,{})},z={args:R},B={args:{...R,aside:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{style:{marginTop:0},children:`Workspace`}),(0,j.jsx)(F,{}),(0,j.jsx)(`hr`,{style:{margin:`24px 0`}}),(0,j.jsx)(`p`,{style:{color:`#666`,fontSize:13},children:`Workspace: Production`})]}),outlet:(0,j.jsx)(L,{title:`Analytics`})}},V={args:{...R,aside:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{style:{marginTop:0},children:`Menu`}),(0,j.jsx)(`p`,{children:`Small sidebar content.`})]}),outlet:(0,j.jsx)(L,{title:`Minimal sidebar content`,cards:2,minHeight:300})}},H={args:{...R,aside:null,outlet:(0,j.jsx)(L,{title:`Empty sidebar`})}},U={args:{...R,aside:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{style:{marginTop:0},children:`Navigation`}),(0,j.jsx)(F,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)})]}),outlet:(0,j.jsx)(L,{title:`Scrollable sidebar`})},parameters:{docs:{description:{story:`The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.`}}}},W={args:{...R,outlet:(0,j.jsx)(L,{title:`Long page`,cards:80,minHeight:3e3})},parameters:{docs:{description:{story:`Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.`}}}},G={args:{...R,aside:(0,j.jsx)(F,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)}),outlet:(0,j.jsx)(L,{title:`Both scroll`,cards:80,minHeight:3e3})}},K={args:{...R,outlet:(0,j.jsxs)(`main`,{style:{width:`100%`,minHeight:600},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:`Wide content`}),(0,j.jsx)(`p`,{children:`The striped block is 2400px wide. It should scroll inside the outlet, with no page-level horizontal scroll.`}),(0,j.jsx)(`div`,{style:{width:2400,height:300,background:`repeating-linear-gradient(90deg, #f0f0f0 0 100px, #fff 100px 200px)`,border:`1px solid #ddd`}})]})}},q={args:{...R,outlet:(0,j.jsxs)(`main`,{style:{width:`100%`,minHeight:600},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:`Wide table`}),(0,j.jsx)(_e,{})]})}},J={args:{...R,outlet:(0,j.jsxs)(`main`,{style:{width:`100%`,minHeight:300},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:`Long unbroken text`}),(0,j.jsx)(`p`,{style:{whiteSpace:`nowrap`},children:`Unbreakable `.repeat(80)}),(0,j.jsx)(`pre`,{style:{background:`#f6f6f6`,padding:16},children:`const veryLongLine = ${`"x".repeat(300)`.repeat(10)}`})]})}},Y={args:R,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.`}}}},X={args:R,globals:{viewport:{value:`tablet`,isRotated:!1}}},Z={args:{...R,outlet:(0,j.jsx)(L,{title:`Mobile long page`,cards:60,minHeight:3e3})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Scroll the page: the Menu button should stay fixed on screen.`}}}},Q={args:R,parameters:{docs:{description:{story:`Click the divider to collapse and reopen the sidebar. The play function checks it automatically.`}}},play:async({canvasElement:e})=>{let t=me(e),n=t.getByRole(`link`,{name:`Overview`}),r=t.getByRole(`button`,{name:`|`});await M(n).toBeVisible(),await N.click(r),await P(()=>M(n).not.toBeVisible(),{timeout:2e3}),await N.click(r),await P(()=>M(n).toBeVisible(),{timeout:2e3})}},$={args:K.args,parameters:{docs:{description:{story:`Asserts that wide content does not create horizontal scroll on the page.`}}},play:async()=>{let e=document.documentElement;await M(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth)}},ve=[`Default`,`CustomContent`,`MinimalSidebar`,`EmptySidebar`,`LongSidebar`,`LongPage`,`LongSidebarAndLongPage`,`WideContent`,`WideTableContent`,`LongUnbrokenText`,`Mobile`,`Tablet`,`MobileLongPage`,`ToggleSidebar`,`WideContentNoPageScroll`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: null,
    outlet: <MainContent title="Empty sidebar" />
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    aside: <NavigationLinks items={Array.from({
      length: 40
    }, (_, i) => \`Section \${i + 1}\`)} />,
    outlet: <MainContent title="Both scroll" cards={80} minHeight={3000} />
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    outlet: <main style={{
      width: '100%',
      minHeight: 600
    }}>
        <h1 style={{
        marginTop: 0
      }}>Wide content</h1>
        <p>
          The striped block is 2400px wide. It should scroll inside the outlet, with no page-level horizontal scroll.
        </p>
        <div style={{
        width: 2400,
        height: 300,
        background: 'repeating-linear-gradient(90deg, #f0f0f0 0 100px, #fff 100px 200px)',
        border: '1px solid #ddd'
      }} />
      </main>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    outlet: <main style={{
      width: '100%',
      minHeight: 600
    }}>
        <h1 style={{
        marginTop: 0
      }}>Wide table</h1>
        <WideTable />
      </main>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    outlet: <main style={{
      width: '100%',
      minHeight: 300
    }}>
        <h1 style={{
        marginTop: 0
      }}>Long unbroken text</h1>
        <p style={{
        whiteSpace: 'nowrap'
      }}>{'Unbreakable '.repeat(80)}</p>
        <pre style={{
        background: '#f6f6f6',
        padding: 16
      }}>
          {'const veryLongLine = '.concat('"x".repeat(300)'.repeat(10))}
        </pre>
      </main>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'tablet',
      isRotated: false
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: 'Click the divider to collapse and reopen the sidebar. The play function checks it automatically.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: 'Overview'
    });
    const toggle = canvas.getByRole('button', {
      name: '|'
    });
    await expect(link).toBeVisible();
    await userEvent.click(toggle);
    await waitFor(() => expect(link).not.toBeVisible(), {
      timeout: 2000
    });
    await userEvent.click(toggle);
    await waitFor(() => expect(link).toBeVisible(), {
      timeout: 2000
    });
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: WideContent.args,
  parameters: {
    docs: {
      description: {
        story: 'Asserts that wide content does not create horizontal scroll on the page.'
      }
    }
  },
  play: async () => {
    const doc = document.documentElement;
    await expect(doc.scrollWidth).toBeLessThanOrEqual(doc.clientWidth);
  }
}`,...$.parameters?.docs?.source}}}})))()}ye();export{B as CustomContent,z as Default,H as EmptySidebar,W as LongPage,U as LongSidebar,G as LongSidebarAndLongPage,J as LongUnbrokenText,V as MinimalSidebar,Y as Mobile,Z as MobileLongPage,X as Tablet,Q as ToggleSidebar,K as WideContent,$ as WideContentNoPageScroll,q as WideTableContent,ve as __namedExportsOrder,he as default};