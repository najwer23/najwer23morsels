import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-Bx3fD2ow.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{t as a}from"./Grid-O0THJbTJ.js";import{t as o}from"./Grid-D6KY1hbV.js";import{n as s,t as c}from"./NavigationTabs-D1QW2fZY.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{l=t(),o(),i(),c(),u=n(),d={title:`Navigation/NavigationTabs`,component:s,parameters:{docs:{description:{component:`
Responsive navigation component with a top bar, optional bottom tabs, and a mobile menu.

Below 768px the right column and the bottom tabs are hidden, and a fixed **Menu** button opens a full-screen menu
(only when \`menuMobile\` is provided).

Content inside \`menuMobile\` is **centered** by default. Put \`margin={0}\` on its root \`Grid\` to left-justify it.

When a link in the mobile menu changes the route, the menu stays open until the new page has rendered, then closes
with its animation. Same-page links, anchors, and links opened in a new tab are handled separately.

\`\`\`tsx
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},menuBottomTabs:{control:!1}}},f=e=>e.preventDefault(),p=({label:e=`Gym`})=>(0,u.jsx)(a,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,u.jsx)(r,{desktopSize:20,mobileSize:20,fontWeight:500,tag:`a`,href:`/`,onClick:f,children:e})}),m=({items:e=[`Login`]})=>(0,u.jsx)(a,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`20px`,row:`0`},children:e.map(e=>(0,u.jsx)(r,{tag:`a`,href:`/${e.toLowerCase()}`,desktopSize:20,mobileSize:20,fontWeight:500,onClick:f,children:e},e))}),h=({items:e=[`Home`,`Login`]})=>(0,u.jsx)(u.Fragment,{children:e.map(e=>(0,u.jsx)(r,{tag:`a`,href:`/${e.toLowerCase().replace(/\s+/g,`-`)}`,desktopSize:30,mobileSize:30,fontWeight:400,onClick:f,children:e},e))}),g=({items:e=[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`,`Pull Ups`]})=>(0,u.jsx)(u.Fragment,{children:e.map(e=>(0,u.jsx)(`div`,{children:(0,u.jsx)(r,{tag:`a`,href:`/in/${e.toLowerCase().replace(/\s+/g,`-`)}`,onClick:f,desktopSize:18,mobileSize:18,fontWeight:500,children:e})},e))}),_=[{title:`Tools`,links:[{to:`/stock-quotes`,label:`Stock Quotes`},{to:`/visitors`,label:`Visitors`},{to:`/weather`,label:`Weather`}]},{title:`Apps`,links:[{to:`https://najwer23.github.io/#/blog`,label:`Blog`},{to:`https://najwer23.github.io/#/contact`,label:`Contact`},{to:`https://najwer23gym.vercel.app/`,label:`Gym`},{to:`https://najwer23.github.io/`,label:`Portfolio`}]},{title:`Social Media`,links:[{to:`https://www.npmjs.com/~najwer23`,label:`NPM`}]}],v=e=>/^https?:\/\//i.test(e),y=({sections:e=_,margin:t})=>(0,u.jsx)(a,{layout:`container`,margin:t,children:e.map(({title:e,links:t})=>(0,u.jsxs)(a,{layout:`container`,margin:`0 0 24px 0`,children:[(0,u.jsx)(a,{layout:`container`,margin:`0 0 8px 0`,children:(0,u.jsx)(r,{tag:`p`,desktopSize:20,mobileSize:20,fontWeight:600,color:`grey`,children:e})}),t.map(({to:e,label:t})=>{let n=v(e);return(0,u.jsx)(a,{layout:`container`,margin:`0 0 8px 0`,children:(0,u.jsxs)(r,{tag:`a`,href:e,desktopSize:28,mobileSize:28,fontWeight:400,onClick:f,...n?{target:`_blank`,rel:`noreferrer`}:{},children:[t,n&&` ↗`]})},e)})]},e))}),b=({repeat:e=1e3})=>(0,u.jsx)(`div`,{style:{padding:20},children:`Page content. `.repeat(e)}),x=({delayMs:e=100})=>{let[t,n]=(0,l.useState)(()=>window.location.hash||`#/home`);return(0,l.useEffect)(()=>{let t,r=()=>{clearTimeout(t),t=window.setTimeout(()=>n(window.location.hash),e)};return window.addEventListener(`hashchange`,r),()=>{window.removeEventListener(`hashchange`,r),clearTimeout(t)}},[e]),(0,u.jsxs)(`div`,{style:{padding:20},children:[(0,u.jsx)(`h1`,{children:t}),(0,u.jsx)(b,{repeat:200})]})},S=()=>(0,u.jsxs)(a,{layout:`container`,margin:0,gap:{col:`0`,row:`16px`},children:[(0,u.jsx)(r,{tag:`p`,desktopSize:16,mobileSize:16,fontWeight:600,children:`Route change test`}),[`dashboard`,`weight`,`settings`].map(e=>(0,u.jsx)(`div`,{children:(0,u.jsx)(r,{tag:`a`,href:`#/${e}`,desktopSize:28,mobileSize:28,children:e[0].toUpperCase()+e.slice(1)},e)},e)),(0,u.jsx)(r,{tag:`a`,href:`https://najwer23.github.io/`,target:`_blank`,rel:`noreferrer`,desktopSize:28,mobileSize:28,children:`External link ↗`})]}),C={menuTopLeftColumn:(0,u.jsx)(p,{}),menuTopRightColumn:(0,u.jsx)(m,{}),menuMobile:(0,u.jsx)(h,{}),menuBottomTabs:(0,u.jsx)(g,{})},w={docs:{story:{inline:!1,iframeHeight:500}}},T={args:C,render:e=>(0,u.jsx)(`div`,{style:{width:`100vw`,height:`400px`},children:(0,u.jsx)(s,{...e})})},E={args:{...C,menuBottomTabs:void 0,menuOnlyTop:!0},render:e=>(0,u.jsxs)(`div`,{style:{width:`100vw`,height:`400px`},children:[(0,u.jsx)(s,{...e}),(0,u.jsx)(b,{})]})},D={args:{...C,menuMobile:void 0},parameters:{docs:{description:{story:"Without `menuMobile` there is no Menu button, and the right column stays visible on small screens. Resize the viewport below 768px to check."}}}},O={args:{...C,menuTopRightColumn:(0,u.jsx)(m,{items:[`Pricing`,`Docs`,`Blog`,`Contact`,`Login`]})}},k={args:{...C,menuBottomTabs:(0,u.jsx)(g,{items:Array.from({length:16},(e,t)=>[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`][t%4]+` ${t+1}`)})},parameters:{docs:{description:{story:`The tabs wrap onto several rows (row gap 20px) and stay centered.`}}}},A={args:{...C,menuTopLeftColumn:(0,u.jsx)(p,{label:`A very long brand name that should not break the layout`}),menuBottomTabs:(0,u.jsx)(g,{items:[`Extremely long tab label number one`,`Another extremely long tab label`,`Short`]})}},j={args:{...C,menuTopLeftColumn:(0,u.jsxs)(a,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,gap:{col:`12px`,row:`0`},children:[(0,u.jsx)(`div`,{style:{width:32,height:32,borderRadius:8,background:`orangered`}}),(0,u.jsx)(r,{desktopSize:20,mobileSize:20,fontWeight:700,tag:`span`,children:`Gym`})]}),menuTopRightColumn:(0,u.jsxs)(a,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`16px`,row:`0`},children:[(0,u.jsx)(r,{tag:`a`,href:`/login`,desktopSize:18,mobileSize:18,fontWeight:500,onClick:f,children:`Login`}),(0,u.jsx)(`button`,{type:`button`,style:{padding:`8px 16px`,borderRadius:6,border:0,background:`orangered`,color:`white`},children:`Sign up`})]})}},M={args:{...C,widthMainContainer:`800px`,widthInnerContainer:`600px`},parameters:{docs:{description:{story:"Custom `widthMainContainer` (800px) and `widthInnerContainer` (600px)."}}}},N={args:{...C,widthMainContainer:`100%`,widthInnerContainer:`100%`},parameters:{docs:{description:{story:"Both containers use 100%, as `NavigationDashboard` does."}}}},P={args:{...C,widthMainContainer:`2000px`,widthInnerContainer:`1800px`}},F={args:{...C,className:`custom-nav`,style:{background:`#fafafa`,borderBottom:`1px solid #ddd`},"data-testid":`navigation-tabs`}},I={args:C,render:e=>(0,u.jsxs)(`div`,{style:{width:`100vw`},children:[(0,u.jsx)(s,{...e}),(0,u.jsx)(b,{repeat:3e3})]}),parameters:{docs:{description:{story:`The navigation scrolls away with the page. Below 768px the Menu button stays fixed on screen.`}}}},L={args:C,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:`Below 768px the right column and bottom tabs are hidden, and the fixed Menu button is shown.`}}}},R={args:C,globals:{viewport:{value:`tablet`,isRotated:!1}},parameters:w},z={args:{...C,menuBottomTabs:void 0,menuOnlyTop:!0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:w},B={args:{...C,menuMobile:void 0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:"No `menuMobile`: no Menu button, and the right column remains visible."}}}},V={args:{...C,menuMobile:(0,u.jsx)(h,{items:Array.from({length:30},(e,t)=>`Section ${t+1}`)})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:`Open the menu: the content is taller than the screen and scrolls inside the menu, not the page behind it.`}}}},H={args:{...C,menuMobile:(0,u.jsx)(y,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:`The mobile menu is split into sections (Tools, Apps, Social Media). External links open in a new tab and are marked with an arrow.`}}}},U={args:{...C,menuMobile:(0,u.jsx)(y,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:"No `margin` on the main container: the sections and links are **centered**. Open the menu to check."}}}},W={args:{...C,menuMobile:(0,u.jsx)(y,{margin:0})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:"With `margin={0}` on the main container, the sections and links are **left-justified** instead of centered. Open the menu to check."}}}},G={args:{...C,menuMobile:(0,u.jsxs)(a,{layout:`container`,children:[(0,u.jsxs)(a,{layout:`container`,margin:`0 0 24px 0`,children:[(0,u.jsx)(a,{layout:`container`,margin:`0 0 8px 0`,children:(0,u.jsx)(r,{tag:`p`,desktopSize:20,mobileSize:20,fontWeight:600,color:`grey`,children:`Account`})}),(0,u.jsx)(r,{tag:`a`,href:`/auth/login`,desktopSize:28,mobileSize:28,fontWeight:400,onClick:f,children:`Login`})]}),(0,u.jsx)(y,{}),(0,u.jsx)(r,{tag:`p`,desktopSize:14,mobileSize:14,color:`grey`,children:`© Gym`})]})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:`Sections plus mobile-only extras, such as an account link and a footer.`}}}},K={args:{...C,menuMobile:(0,u.jsx)(y,{sections:Array.from({length:6},(e,t)=>({title:`Section ${t+1}`,links:Array.from({length:5},(e,n)=>({to:`/section-${t+1}/link-${n+1}`,label:`Link ${t+1}.${n+1}`}))}))})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:`Open the menu: 6 sections are taller than the screen and scroll inside the menu, not the page behind it.`}}}},q={args:C,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:w,render:e=>(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsx)(s,{...e}),(0,u.jsx)(b,{repeat:3e3})]})},J={args:{...C,menuMobile:(0,u.jsx)(S,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...w,docs:{...w.docs,description:{story:`Open the menu and click a route. The menu stays open while the page changes underneath, then closes with its animation, so the old page is never visible. The external link opens in a new tab and leaves the menu as it is.`}}},render:e=>(0,u.jsxs)(`div`,{style:{width:`100%`},children:[(0,u.jsx)(s,{...e}),(0,u.jsx)(x,{})]})},Y=[`Default`,`NavigationTabsOnlyTop`,`WithoutMobileMenu`,`ManyTopLinks`,`ManyBottomTabs`,`LongLabels`,`CustomTopColumns`,`NarrowContainers`,`FullWidth`,`WideContainers`,`CustomClassAndStyle`,`WithLongPage`,`Mobile`,`Tablet`,`MobileOnlyTop`,`MobileWithoutMenu`,`MobileLongMenu`,`MobileWithSections`,`MobileSectionsCentered`,`MobileSectionsLeftAligned`,`MobileSectionsWithExtras`,`MobileManySections`,`MobileLongPage`,`MobileMenuRouteChange`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <div style={{
    width: '100vw',
    height: '400px'
  }}>
      <NavigationTabs {...args} />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopRightColumn: <TopRightLinks items={['Pricing', 'Docs', 'Blog', 'Contact', 'Login']} />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopLeftColumn: <Logo label="A very long brand name that should not break the layout" />,
    menuBottomTabs: <BottomTabs items={['Extremely long tab label number one', 'Another extremely long tab label', 'Short']} />
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    widthMainContainer: '2000px',
    widthInnerContainer: '1800px'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    className: 'custom-nav',
    style: {
      background: '#fafafa',
      borderBottom: '1px solid #ddd'
    },
    'data-testid': 'navigation-tabs'
  } as Story['args']
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'tablet',
      isRotated: false
    }
  },
  parameters: isolatedDocs
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <Grid layout="container">
        <Grid layout="container" margin="0 0 24px 0">
          <Grid layout="container" margin="0 0 8px 0">
            <TextBox tag="p" desktopSize={20} mobileSize={20} fontWeight={600} color="grey">
              Account
            </TextBox>
          </Grid>
          <TextBox tag="a" href="/auth/login" desktopSize={28} mobileSize={28} fontWeight={400} onClick={preventDefault}>
            Login
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
        story: 'Sections plus mobile-only extras, such as an account link and a footer.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <RouteChangeLinks />
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
        story: 'Open the menu and click a route. The menu stays open while the page changes underneath, then closes with its animation, so the old page is never visible. The external link opens in a new tab and leaves the menu as it is.'
      }
    }
  },
  render: args => <div style={{
    width: '100%'
  }}>
      <NavigationTabs {...args} />
      <RoutePage />
    </div>
}`,...J.parameters?.docs?.source}}}})))()}X();export{F as CustomClassAndStyle,j as CustomTopColumns,T as Default,N as FullWidth,A as LongLabels,k as ManyBottomTabs,O as ManyTopLinks,L as Mobile,V as MobileLongMenu,q as MobileLongPage,K as MobileManySections,J as MobileMenuRouteChange,z as MobileOnlyTop,U as MobileSectionsCentered,W as MobileSectionsLeftAligned,G as MobileSectionsWithExtras,H as MobileWithSections,B as MobileWithoutMenu,M as NarrowContainers,E as NavigationTabsOnlyTop,R as Tablet,P as WideContainers,I as WithLongPage,D as WithoutMobileMenu,Y as __namedExportsOrder,d as default};