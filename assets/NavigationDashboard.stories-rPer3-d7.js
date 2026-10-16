import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-Bo-5vZSe.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as ee,t as te}from"./Button-_6dIY9Ot.js";import{t as o}from"./Grid-Ne_69epH.js";import{t as s}from"./Grid-j0rejoSH.js";import{r as ne,t as c}from"./hooks-BVVjofiQ.js";import{n as re,t as ie}from"./NavigationTabs-AfiYMfaL.js";var l,u,d,f,ae,p,m,h,oe,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l=`_n23mNavigationDashboard_8e7ss_2`,u=`_dragging_8e7ss_10`,d=`_row_8e7ss_15`,f=`_sidebarContainer_8e7ss_16`,ae=`_sticky_8e7ss_17`,p=`_rowOpen_8e7ss_33`,m=`_sidebarContainerOpen_8e7ss_48`,h=`_sidebarContainerClosed_8e7ss_52`,oe=`_outlet_8e7ss_56`,g=`_outletContent_8e7ss_63`,_=`_sidebarOpen_8e7ss_93`,v=`_sidebarClosed_8e7ss_98`,y=`_toggleAnchor_8e7ss_104`,b=`_toggleOpen_8e7ss_111`,x=`_toggleClosed_8e7ss_119`,S=`_rowNoAside_8e7ss_124`,C={n23mNavigationDashboard:l,dragging:u,row:d,sidebarContainer:f,sticky:ae,rowOpen:p,sidebarContainerOpen:m,sidebarContainerClosed:h,outlet:oe,outletContent:g,sidebarOpen:_,sidebarClosed:v,toggleAnchor:y,toggleOpen:b,toggleClosed:x,rowNoAside:S}})))()}var T,E,D,se,ce,le,ue,O,k;function A(){return(A=e((()=>{T=t(),te(),s(),c(),ie(),w(),E=n(),D=300,se=200,ce=480,le=120,ue=4,O=768,k=({children:e,className:t,style:n,menuTopLeftColumn:i=(0,E.jsx)(E.Fragment,{children:`menuTopLeftColumn`}),menuTopRightColumn:a=(0,E.jsx)(E.Fragment,{children:`menuTopRightColumn`}),menuMobile:te=(0,E.jsx)(E.Fragment,{children:`menuMobile`}),outlet:s=(0,E.jsx)(E.Fragment,{children:`outlet`}),aside:c=(0,E.jsx)(E.Fragment,{children:`aside`}),...ie})=>{let l=(0,T.useRef)(null),u=(0,T.useRef)(null),{width:d}=ne(),f=c!=null&&c!==!1,[ae,p]=(0,T.useState)(d>=O),[m,h]=(0,T.useState)(D),[oe,g]=(0,T.useState)(!1),_=f&&ae,v=(0,T.useRef)(null),y=(0,T.useRef)(D),b=(0,T.useRef)(!1),x=()=>{p(d<O?!1:e=>!e)},S=e=>{if(b.current=!1,e.button!==0||d<O)return;e.currentTarget.setPointerCapture(e.pointerId);let t=_?m:0;v.current={startX:e.clientX,startWidth:t,moved:!1,wasOpen:_},y.current=t},w=e=>{let t=v.current,n=l.current;if(!t||!n)return;let r=e.clientX-t.startX;if(!t.moved){if(Math.abs(r)<ue)return;t.moved=!0,g(!0)}let i=Math.min(ce,Math.max(0,t.startWidth+r));y.current=i,n.style.setProperty(`--navigationdashboard-sidebar-w`,`${i}px`),n.dataset.collapsing=i<le?`true`:`false`,!t.wasOpen&&i>0&&p(!0)},k=()=>{let e=v.current,t=l.current;if(v.current=null,!e?.moved||!t)return;b.current=!0,t.dataset.collapsing=`false`;let n=y.current;if(n<le)t.style.setProperty(`--navigationdashboard-sidebar-w`,`${m}px`),p(!1);else{let e=Math.min(ce,Math.max(se,n));t.style.setProperty(`--navigationdashboard-sidebar-w`,`${e}px`),y.current=e,h(e),p(!0)}g(!1)},A=()=>{b.current?b.current=!1:x()};return(0,T.useLayoutEffect)(()=>{d<O&&p(!1)},[d]),(0,T.useLayoutEffect)(()=>{let e=l.current;e&&e.style.setProperty(`--navigationdashboard-sidebar-w`,`${m}px`)},[m]),(0,T.useEffect)(()=>{let e=l.current,t=u.current;if(!e||!t)return;let n=0,r=()=>{n=0;let r=Math.max(0,t.getBoundingClientRect().bottom);e.style.setProperty(`--navigationdashboard-h`,`${r}px`)},i=()=>{n||=requestAnimationFrame(r)};r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i);let a=new ResizeObserver(i);return a.observe(t),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),a.disconnect(),cancelAnimationFrame(n)}},[]),(0,E.jsxs)(`div`,{ref:l,className:[C.n23mNavigationDashboard,`n23mNavigationDashboard`,oe&&C.dragging,t].filter(Boolean).join(` `),...ie,style:{...r({"--navigationdashboard-sidebar-w":`${m}px`,"--navigationdashboard-sidebar-min":`${se}px`}),...n},children:[(0,E.jsx)(`div`,{ref:u,children:(0,E.jsx)(re,{widthInnerContainer:`100%`,widthMainContainer:`100%`,menuOnlyTop:!0,menuTopLeftColumn:i,menuTopRightColumn:a,menuMobile:te})}),(0,E.jsx)(o,{layout:`container`,padding:`0 20px 0 0`,widthMin:`100%`,children:(0,E.jsxs)(`div`,{className:[C.row,f?_&&C.rowOpen:C.rowNoAside].filter(Boolean).join(` `),children:[f&&(0,E.jsx)(`div`,{className:[C.sidebarContainer,_?C.sidebarContainerOpen:C.sidebarContainerClosed].join(` `),children:(0,E.jsx)(`div`,{className:[C.sticky,_?C.sidebarOpen:C.sidebarClosed].join(` `),children:c})}),(0,E.jsxs)(`div`,{className:[C.outlet,!f&&C.outletNoAside].filter(Boolean).join(` `),children:[f&&d>=O&&(0,E.jsx)(`div`,{className:C.toggleAnchor,children:(0,E.jsx)(ee,{height:`60px`,width:`10px`,backgroundColor:`darkgrey`,borderColor:`black`,type:`button`,onClick:A,onPointerDown:S,onPointerMove:w,onPointerUp:k,onPointerCancel:k,className:[_?C.toggleOpen:C.toggleClosed].join(` `),children:(0,E.jsx)(`div`,{children:`|`})})}),(0,E.jsx)(`div`,{className:C.outletContent,children:s})]})]})})]})},k.displayName=`NavigationDashboard`;try{k.displayName=`NavigationDashboard`,k.__docgenInfo={description:``,displayName:`NavigationDashboard`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`CSSProperties`}},menuTopLeftColumn:{defaultValue:{value:`<>menuTopLeftColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopLeftColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuTopRightColumn:{defaultValue:{value:`<>menuTopRightColumn</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuTopRightColumn`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},menuMobile:{defaultValue:{value:`<>menuMobile</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`menuMobile`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},outlet:{defaultValue:{value:`<>outlet</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:``,name:`outlet`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}},aside:{defaultValue:{value:`<>aside</>`},declarations:[{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`}],description:`Pass null (or omit the content) to hide the sidebar and the divider completely.`,name:`aside`,parent:{fileName:`najwer23morsels/src/stories/NavigationDashboard/NavigationDashboard.tsx`,name:`NavigationDashboardProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function de(){return(de=e((()=>{A()})))()}var j,M,N,P,fe,pe,me,F,I,L,he,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ge;function _e(){return(_e=e((()=>{s(),a(),de(),j=n(),{expect:M,userEvent:N,waitFor:P,within:fe}=__STORYBOOK_MODULE_TEST__,pe={title:`Navigation/NavigationDashboard`,component:k,parameters:{layout:`fullscreen`,docs:{description:{component:`
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},outlet:{control:!1},aside:{control:!1}}},me=[`Overview`,`Analytics`,`Reports`,`Users`,`Settings`],F=({items:e=me})=>(0,j.jsx)(`nav`,{"aria-label":`Dashboard navigation`,style:{display:`flex`,flexDirection:`column`,gap:8},children:e.map((e,t)=>(0,j.jsx)(`a`,{href:`#${e.toLowerCase().replace(/\s+/g,`-`)}`,style:{display:`block`,padding:`10px 12px`,borderRadius:6,background:t===0?`#e8edff`:`transparent`,color:t===0?`#263fa8`:`inherit`,textDecoration:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e},e))}),I=[[`Total users`,`2,450`],[`Active sessions`,`186`],[`Reports`,`38`],[`Revenue`,`$12,480`],[`Conversion`,`3.4%`],[`Bounce rate`,`41%`],[`Avg. session`,`4m 12s`],[`Open tickets`,`17`]],L=({title:e=`Dashboard overview`,cards:t=I.length,minHeight:n=600})=>(0,j.jsxs)(`main`,{style:{minHeight:n,width:`100%`},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:e}),(0,j.jsx)(`p`,{children:`Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:24},children:Array.from({length:t},(e,t)=>{let[n,r]=I[t%I.length];return(0,j.jsxs)(`section`,{style:{minWidth:200,flex:`1 1 200px`,padding:20,border:`1px solid #ddd`,borderRadius:8},children:[(0,j.jsx)(`p`,{style:{margin:`0 0 8px`,color:`#666`},children:n}),(0,j.jsx)(`strong`,{style:{fontSize:24},children:r})]},t)})})]}),he=()=>(0,j.jsxs)(`table`,{style:{borderCollapse:`collapse`,minWidth:1800},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:Array.from({length:12},(e,t)=>(0,j.jsxs)(`th`,{style:{border:`1px solid #ddd`,padding:`8px 16px`,textAlign:`left`,background:`#fafafa`},children:[`Column `,t+1]},t))})}),(0,j.jsx)(`tbody`,{children:Array.from({length:15},(e,t)=>(0,j.jsx)(`tr`,{children:Array.from({length:12},(e,n)=>(0,j.jsxs)(`td`,{style:{border:`1px solid #ddd`,padding:`8px 16px`,whiteSpace:`nowrap`},children:[`Row `,t+1,` / Cell `,n+1]},n))},t))})]}),R={menuTopLeftColumn:(0,j.jsx)(o,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,j.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:20,mobileSize:20,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`Link`})}),menuTopRightColumn:(0,j.jsx)(o,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,children:(0,j.jsx)(i,{tag:`a`,href:`https://najwer23.github.io/hol/`,desktopSize:16,mobileSize:16,fontWeight:500,rel:`noreferrer`,target:`_blank`,children:`hola`})}),menuMobile:(0,j.jsx)(F,{}),outlet:(0,j.jsx)(L,{}),aside:(0,j.jsx)(F,{})},z={args:R},B={args:{...R,aside:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{style:{marginTop:0},children:`Workspace`}),(0,j.jsx)(F,{}),(0,j.jsx)(`hr`,{style:{margin:`24px 0`}}),(0,j.jsx)(`p`,{style:{color:`#666`,fontSize:13},children:`Workspace: Production`})]}),outlet:(0,j.jsx)(L,{title:`Analytics`})}},V={args:{...R,aside:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{style:{marginTop:0},children:`Menu`}),(0,j.jsx)(`p`,{children:`Small sidebar content.`})]}),outlet:(0,j.jsx)(L,{title:`Minimal sidebar content`,cards:2,minHeight:300})}},H={args:{...R,aside:null,outlet:(0,j.jsx)(L,{title:`Empty sidebar`})}},U={args:{...R,aside:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{style:{marginTop:0},children:`Navigation`}),(0,j.jsx)(F,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)})]}),outlet:(0,j.jsx)(L,{title:`Scrollable sidebar`})},parameters:{docs:{description:{story:`The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.`}}}},W={args:{...R,outlet:(0,j.jsx)(L,{title:`Long page`,cards:80,minHeight:3e3})},parameters:{docs:{description:{story:`Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.`}}}},G={args:{...R,aside:(0,j.jsx)(F,{items:Array.from({length:40},(e,t)=>`Section ${t+1}`)}),outlet:(0,j.jsx)(L,{title:`Both scroll`,cards:80,minHeight:3e3})}},K={args:{...R,outlet:(0,j.jsxs)(`main`,{style:{width:`100%`,minHeight:600},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:`Wide content`}),(0,j.jsx)(`p`,{children:`The striped block is 2400px wide. It should scroll inside the outlet, with no page-level horizontal scroll.`}),(0,j.jsx)(`div`,{style:{width:2400,height:300,background:`repeating-linear-gradient(90deg, #f0f0f0 0 100px, #fff 100px 200px)`,border:`1px solid #ddd`}})]})}},q={args:{...R,outlet:(0,j.jsxs)(`main`,{style:{width:`100%`,minHeight:600},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:`Wide table`}),(0,j.jsx)(he,{})]})}},J={args:{...R,outlet:(0,j.jsxs)(`main`,{style:{width:`100%`,minHeight:300},children:[(0,j.jsx)(`h1`,{style:{marginTop:0},children:`Long unbroken text`}),(0,j.jsx)(`p`,{style:{whiteSpace:`nowrap`},children:`Unbreakable `.repeat(80)}),(0,j.jsx)(`pre`,{style:{background:`#f6f6f6`,padding:16},children:`const veryLongLine = ${`"x".repeat(300)`.repeat(10)}`})]})}},Y={args:R,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.`}}}},X={args:R,globals:{viewport:{value:`tablet`,isRotated:!1}}},Z={args:{...R,outlet:(0,j.jsx)(L,{title:`Mobile long page`,cards:60,minHeight:3e3})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Scroll the page: the Menu button should stay fixed on screen.`}}}},Q={args:R,parameters:{docs:{description:{story:`Click the divider to collapse and reopen the sidebar. The play function checks it automatically.`}}},play:async({canvasElement:e})=>{let t=fe(e),n=t.getByRole(`link`,{name:`Overview`}),r=t.getByRole(`button`,{name:`|`});await M(n).toBeVisible(),await N.click(r),await P(()=>M(n).not.toBeVisible(),{timeout:2e3}),await N.click(r),await P(()=>M(n).toBeVisible(),{timeout:2e3})}},$={args:K.args,parameters:{docs:{description:{story:`Asserts that wide content does not create horizontal scroll on the page.`}}},play:async()=>{let e=document.documentElement;await M(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth)}},ge=[`Default`,`CustomContent`,`MinimalSidebar`,`EmptySidebar`,`LongSidebar`,`LongPage`,`LongSidebarAndLongPage`,`WideContent`,`WideTableContent`,`LongUnbrokenText`,`Mobile`,`Tablet`,`MobileLongPage`,`ToggleSidebar`,`WideContentNoPageScroll`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}_e();export{B as CustomContent,z as Default,H as EmptySidebar,W as LongPage,U as LongSidebar,G as LongSidebarAndLongPage,J as LongUnbrokenText,V as MinimalSidebar,Y as Mobile,Z as MobileLongPage,X as Tablet,Q as ToggleSidebar,K as WideContent,$ as WideContentNoPageScroll,q as WideTableContent,ge as __namedExportsOrder,pe as default};