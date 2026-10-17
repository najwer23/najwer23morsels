import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./TextBox-D040vOwf.js";import{t as i}from"./Grid-D0McgUkN.js";import{t as a}from"./Grid-C-JzvTxt.js";import{n as o,t as s}from"./NavigationTabs-Ciajyenk.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{a(),r(),s(),c=t(),l={title:`Navigation/NavigationTabs`,component:o,parameters:{docs:{description:{component:"\nResponsive navigation component with a top bar, optional bottom tabs, and a mobile menu.\n\nBelow 768px the right column and the bottom tabs are hidden, and a fixed **Menu** button opens a full-screen menu\n(only when `menuMobile` is provided).\n\nContent inside `menuMobile` is **centered** by default. Put `margin={0}` on its root `Grid` to left-justify it.\n\n```tsx\nimport { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';\n```\n        "}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},menuBottomTabs:{control:!1}}},u=e=>e.preventDefault(),d=({label:e=`Gym`})=>(0,c.jsx)(i,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,c.jsx)(n,{desktopSize:20,mobileSize:20,fontWeight:500,tag:`a`,href:`/`,onClick:u,children:e})}),f=({items:e=[`Login`]})=>(0,c.jsx)(i,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`20px`,row:`0`},children:e.map(e=>(0,c.jsx)(n,{tag:`a`,href:`/${e.toLowerCase()}`,desktopSize:20,mobileSize:20,fontWeight:500,onClick:u,children:e},e))}),p=({items:e=[`Home`,`Login`]})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(n,{tag:`a`,href:`/${e.toLowerCase().replace(/\s+/g,`-`)}`,desktopSize:30,mobileSize:30,fontWeight:400,onClick:u,children:e},e))}),m=({items:e=[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`,`Pull Ups`]})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{tag:`a`,href:`/in/${e.toLowerCase().replace(/\s+/g,`-`)}`,onClick:u,desktopSize:18,mobileSize:18,fontWeight:500,children:e})},e))}),h=[{title:`Tools`,links:[{to:`/stock-quotes`,label:`Stock Quotes`},{to:`/visitors`,label:`Visitors`},{to:`/weather`,label:`Weather`}]},{title:`Apps`,links:[{to:`https://najwer23.github.io/#/blog`,label:`Blog`},{to:`https://najwer23.github.io/#/contact`,label:`Contact`},{to:`https://najwer23gym.vercel.app/`,label:`Gym`},{to:`https://najwer23.github.io/`,label:`Portfolio`}]},{title:`Social Media`,links:[{to:`https://www.npmjs.com/~najwer23`,label:`NPM`}]}],g=e=>/^https?:\/\//i.test(e),_=({sections:e=h,margin:t})=>(0,c.jsx)(i,{layout:`container`,margin:t,children:e.map(({title:e,links:t})=>(0,c.jsxs)(i,{layout:`container`,margin:`0 0 24px 0`,children:[(0,c.jsx)(i,{layout:`container`,margin:`0 0 8px 0`,children:(0,c.jsx)(n,{tag:`p`,desktopSize:20,mobileSize:20,fontWeight:600,color:`grey`,children:e})}),t.map(({to:e,label:t})=>{let r=g(e);return(0,c.jsx)(i,{layout:`container`,margin:`0 0 8px 0`,children:(0,c.jsxs)(n,{tag:`a`,href:e,desktopSize:28,mobileSize:28,fontWeight:400,onClick:u,...r?{target:`_blank`,rel:`noreferrer`}:{},children:[t,r&&` ↗`]})},e)})]},e))}),v=({repeat:e=1e3})=>(0,c.jsx)(`div`,{style:{padding:20},children:`Page content. `.repeat(e)}),y=()=>(0,c.jsxs)(i,{layout:`container`,margin:0,gap:{col:`0`,row:`16px`},children:[(0,c.jsx)(n,{tag:`p`,desktopSize:16,mobileSize:16,fontWeight:600,children:`Animation test`}),(0,c.jsx)(n,{tag:`a`,href:`#normal-link`,desktopSize:28,mobileSize:28,onClick:u,children:`Normal link (animated close)`}),(0,c.jsx)(n,{tag:`a`,href:`#instant-link`,"data-no-menu-close-animation":!0,desktopSize:28,mobileSize:28,onClick:u,children:`Instant link (no animation)`})]}),b={menuTopLeftColumn:(0,c.jsx)(d,{}),menuTopRightColumn:(0,c.jsx)(f,{}),menuMobile:(0,c.jsx)(p,{}),menuBottomTabs:(0,c.jsx)(m,{})},x={docs:{story:{inline:!1,iframeHeight:500}}},S={args:b,render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`,height:`400px`},children:(0,c.jsx)(o,{...e})})},C={args:{...b,menuBottomTabs:void 0,menuOnlyTop:!0},render:e=>(0,c.jsxs)(`div`,{style:{width:`100vw`,height:`400px`},children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(v,{})]})},w={args:{...b,menuMobile:void 0},parameters:{docs:{description:{story:"Without `menuMobile` there is no Menu button, and the right column stays visible on small screens. Resize the viewport below 768px to check."}}}},T={args:{...b,menuTopRightColumn:(0,c.jsx)(f,{items:[`Pricing`,`Docs`,`Blog`,`Contact`,`Login`]})}},E={args:{...b,menuBottomTabs:(0,c.jsx)(m,{items:Array.from({length:16},(e,t)=>[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`][t%4]+` ${t+1}`)})},parameters:{docs:{description:{story:`The tabs wrap onto several rows (row gap 20px) and stay centered.`}}}},D={args:{...b,menuTopLeftColumn:(0,c.jsx)(d,{label:`A very long brand name that should not break the layout`}),menuBottomTabs:(0,c.jsx)(m,{items:[`Extremely long tab label number one`,`Another extremely long tab label`,`Short`]})}},O={args:{...b,menuTopLeftColumn:(0,c.jsxs)(i,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,gap:{col:`12px`,row:`0`},children:[(0,c.jsx)(`div`,{style:{width:32,height:32,borderRadius:8,background:`orangered`}}),(0,c.jsx)(n,{desktopSize:20,mobileSize:20,fontWeight:700,tag:`span`,children:`Gym`})]}),menuTopRightColumn:(0,c.jsxs)(i,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`16px`,row:`0`},children:[(0,c.jsx)(n,{tag:`a`,href:`/login`,desktopSize:18,mobileSize:18,fontWeight:500,onClick:u,children:`Login`}),(0,c.jsx)(`button`,{type:`button`,style:{padding:`8px 16px`,borderRadius:6,border:0,background:`orangered`,color:`white`},children:`Sign up`})]})}},k={args:{...b,widthMainContainer:`800px`,widthInnerContainer:`600px`},parameters:{docs:{description:{story:"Custom `widthMainContainer` (800px) and `widthInnerContainer` (600px)."}}}},A={args:{...b,widthMainContainer:`100%`,widthInnerContainer:`100%`},parameters:{docs:{description:{story:"Both containers use 100%, as `NavigationDashboard` does."}}}},j={args:{...b,widthMainContainer:`2000px`,widthInnerContainer:`1800px`}},M={args:{...b,className:`custom-nav`,style:{background:`#fafafa`,borderBottom:`1px solid #ddd`},"data-testid":`navigation-tabs`}},N={args:b,render:e=>(0,c.jsxs)(`div`,{style:{width:`100vw`},children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(v,{repeat:3e3})]}),parameters:{docs:{description:{story:`The navigation scrolls away with the page. Below 768px the Menu button stays fixed on screen.`}}}},P={args:b,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Below 768px the right column and bottom tabs are hidden, and the fixed Menu button is shown.`}}}},F={args:b,globals:{viewport:{value:`tablet`,isRotated:!1}},parameters:x},I={args:{...b,menuBottomTabs:void 0,menuOnlyTop:!0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:x},L={args:{...b,menuMobile:void 0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:"No `menuMobile`: no Menu button, and the right column remains visible."}}}},R={args:{...b,menuMobile:(0,c.jsx)(p,{items:Array.from({length:30},(e,t)=>`Section ${t+1}`)})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Open the menu: the content is taller than the screen and scrolls inside the menu, not the page behind it.`}}}},z={args:{...b,menuMobile:(0,c.jsx)(_,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`The mobile menu is split into sections (Tools, Apps, Social Media). External links open in a new tab and are marked with an arrow.`}}}},B={args:{...b,menuMobile:(0,c.jsx)(_,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:"No `margin` on the main container: the sections and links are **centered**. Open the menu to check."}}}},V={args:{...b,menuMobile:(0,c.jsx)(_,{margin:0})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:"With `margin={0}` on the main container, the sections and links are **left-justified** instead of centered. Open the menu to check."}}}},H={args:{...b,menuMobile:(0,c.jsxs)(i,{layout:`container`,children:[(0,c.jsxs)(i,{layout:`container`,margin:`0 0 24px 0`,children:[(0,c.jsx)(i,{layout:`container`,margin:`0 0 8px 0`,children:(0,c.jsx)(n,{tag:`p`,desktopSize:20,mobileSize:20,fontWeight:600,color:`grey`,children:`Account`})}),(0,c.jsx)(n,{tag:`a`,href:`/auth/login`,"data-no-menu-close-animation":!0,desktopSize:28,mobileSize:28,fontWeight:400,onClick:u,children:`Login (no closing animation)`})]}),(0,c.jsx)(_,{}),(0,c.jsx)(n,{tag:`p`,desktopSize:14,mobileSize:14,color:`grey`,children:`© Gym`})]})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Sections plus mobile-only extras. The Login link opts out of the closing animation.`}}}},U={args:{...b,menuMobile:(0,c.jsx)(_,{sections:Array.from({length:6},(e,t)=>({title:`Section ${t+1}`,links:Array.from({length:5},(e,n)=>({to:`/section-${t+1}/link-${n+1}`,label:`Link ${t+1}.${n+1}`}))}))})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Open the menu: 6 sections are taller than the screen and scroll inside the menu, not the page behind it.`}}}},W={args:b,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:x,render:e=>(0,c.jsxs)(`div`,{style:{width:`100%`},children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(v,{repeat:3e3})]})},G={args:{...b,menuMobile:(0,c.jsx)(y,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Open the mobile menu and compare both links. The normal link should close with the CSS transition; the link with data-no-menu-close-animation should close immediately.`}}}},K=[`Default`,`NavigationTabsOnlyTop`,`WithoutMobileMenu`,`ManyTopLinks`,`ManyBottomTabs`,`LongLabels`,`CustomTopColumns`,`NarrowContainers`,`FullWidth`,`WideContainers`,`CustomClassAndStyle`,`WithLongPage`,`Mobile`,`Tablet`,`MobileOnlyTop`,`MobileWithoutMenu`,`MobileLongMenu`,`MobileWithSections`,`MobileSectionsCentered`,`MobileSectionsLeftAligned`,`MobileSectionsWithExtras`,`MobileManySections`,`MobileLongPage`,`MobileMenuCloseAnimation`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <div style={{
    width: '100vw',
    height: '400px'
  }}>
      <NavigationTabs {...args} />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuBottomTabs: undefined,
    menuOnlyTop: true
  },
  render: args => <div style={{
    width: '100vw',
    height: '400px'
  }}>
      <NavigationTabs {...args} />
      <PageContent />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`menuMobile\` there is no Menu button, and the right column stays visible on small screens. Resize the viewport below 768px to check.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopRightColumn: <TopRightLinks items={['Pricing', 'Docs', 'Blog', 'Contact', 'Login']} />
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuBottomTabs: <BottomTabs items={Array.from({
      length: 16
    }, (_, i) => ['Dashboard', 'Push Ups', 'Squats', 'Sit Ups'][i % 4] + \` \${i + 1}\`)} />
  },
  parameters: {
    docs: {
      description: {
        story: 'The tabs wrap onto several rows (row gap 20px) and stay centered.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopLeftColumn: <Logo label="A very long brand name that should not break the layout" />,
    menuBottomTabs: <BottomTabs items={['Extremely long tab label number one', 'Another extremely long tab label', 'Short']} />
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopLeftColumn: <Grid layout="flex" justifyContent="flex-start" alignItems="center" minHeight="100%" gap={{
      col: '12px',
      row: '0'
    }}>
        <div style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: 'orangered'
      }} />
        <TextBox desktopSize={20} mobileSize={20} fontWeight={700} tag="span">
          Gym
        </TextBox>
      </Grid>,
    menuTopRightColumn: <Grid layout="flex" justifyContent="flex-end" alignItems="center" minHeight="100%" gap={{
      col: '16px',
      row: '0'
    }}>
        <TextBox tag="a" href="/login" desktopSize={18} mobileSize={18} fontWeight={500} onClick={preventDefault}>
          Login
        </TextBox>
        <button type="button" style={{
        padding: '8px 16px',
        borderRadius: 6,
        border: 0,
        background: 'orangered',
        color: 'white'
      }}>
          Sign up
        </button>
      </Grid>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    widthMainContainer: '800px',
    widthInnerContainer: '600px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom \`widthMainContainer\` (800px) and \`widthInnerContainer\` (600px).'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    widthMainContainer: '100%',
    widthInnerContainer: '100%'
  },
  parameters: {
    docs: {
      description: {
        story: 'Both containers use 100%, as \`NavigationDashboard\` does.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    widthMainContainer: '2000px',
    widthInnerContainer: '1800px'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    className: 'custom-nav',
    style: {
      background: '#fafafa',
      borderBottom: '1px solid #ddd'
    },
    'data-testid': 'navigation-tabs'
  } as Story['args']
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <div style={{
    width: '100vw'
  }}>
      <NavigationTabs {...args} />
      <PageContent repeat={3000} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The navigation scrolls away with the page. Below 768px the Menu button stays fixed on screen.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Below 768px the right column and bottom tabs are hidden, and the fixed Menu button is shown.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'tablet',
      isRotated: false
    }
  },
  parameters: isolatedDocs
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuBottomTabs: undefined,
    menuOnlyTop: true
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: isolatedDocs
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: undefined
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'No \`menuMobile\`: no Menu button, and the right column remains visible.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <MobileLinks items={Array.from({
      length: 30
    }, (_, i) => \`Section \${i + 1}\`)} />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Open the menu: the content is taller than the screen and scrolls inside the menu, not the page behind it.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <MobileSections />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'The mobile menu is split into sections (Tools, Apps, Social Media). External links open in a new tab and are marked with an arrow.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <MobileSections />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'No \`margin\` on the main container: the sections and links are **centered**. Open the menu to check.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <MobileSections margin={0} />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'With \`margin={0}\` on the main container, the sections and links are **left-justified** instead of centered. Open the menu to check.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <Grid layout="container">
        <Grid layout="container" margin="0 0 24px 0">
          <Grid layout="container" margin="0 0 8px 0">
            <TextBox tag="p" desktopSize={20} mobileSize={20} fontWeight={600} color="grey">
              Account
            </TextBox>
          </Grid>
          <TextBox tag="a" href="/auth/login" data-no-menu-close-animation desktopSize={28} mobileSize={28} fontWeight={400} onClick={preventDefault}>
            Login (no closing animation)
          </TextBox>
        </Grid>

        <MobileSections />

        <TextBox tag="p" desktopSize={14} mobileSize={14} color="grey">
          © Gym
        </TextBox>
      </Grid>
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Sections plus mobile-only extras. The Login link opts out of the closing animation.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <MobileSections sections={Array.from({
      length: 6
    }, (_, s) => ({
      title: \`Section \${s + 1}\`,
      links: Array.from({
        length: 5
      }, (_, l) => ({
        to: \`/section-\${s + 1}/link-\${l + 1}\`,
        label: \`Link \${s + 1}.\${l + 1}\`
      }))
    }))} />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Open the menu: 6 sections are taller than the screen and scroll inside the menu, not the page behind it.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: isolatedDocs,
  render: args => <div style={{
    width: '100%'
  }}>
      <NavigationTabs {...args} />
      <PageContent repeat={3000} />
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <AnimationTestLinks />
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Open the mobile menu and compare both links. The normal link should close with the CSS transition; the link with data-no-menu-close-animation should close immediately.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}}})))()}q();export{M as CustomClassAndStyle,O as CustomTopColumns,S as Default,A as FullWidth,D as LongLabels,E as ManyBottomTabs,T as ManyTopLinks,P as Mobile,R as MobileLongMenu,W as MobileLongPage,U as MobileManySections,G as MobileMenuCloseAnimation,I as MobileOnlyTop,B as MobileSectionsCentered,V as MobileSectionsLeftAligned,H as MobileSectionsWithExtras,z as MobileWithSections,L as MobileWithoutMenu,k as NarrowContainers,C as NavigationTabsOnlyTop,F as Tablet,j as WideContainers,N as WithLongPage,w as WithoutMobileMenu,K as __namedExportsOrder,l as default};