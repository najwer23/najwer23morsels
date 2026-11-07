import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Typography-B6Skn2m1.js";import{t as i}from"./Grid-CbjI5h_D.js";import{t as a}from"./Grid-C3wAFol8.js";import{n as o,t as s}from"./NavigationTabs-C7eVWkDq.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{a(),r(),s(),c=t(),l={title:`Navigation/NavigationTabs`,component:o,parameters:{layout:`fullscreen`,docs:{description:{component:`
Responsive navigation component with a top bar, optional bottom tabs, and a mobile menu.

Below 768px the right column and the bottom tabs are hidden, and a fixed **Menu** button opens a full-screen menu
(only when \`menuMobile\` is provided).

Content inside \`menuMobile\` is **centered** by default. Put \`margin={0}\` on its root \`Grid\` to left-justify it.

When a link in the mobile menu changes the route, the menu stays open until the new page has rendered, then closes
with its animation. Same-page links, anchors, and links opened in a new tab are handled separately.

\`\`\`tsx
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},menuBottomTabs:{control:!1}}},u=e=>e.preventDefault(),d=({label:e=`Gym`})=>(0,c.jsx)(i,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,c.jsx)(n,{variant:`link`,desktopSize:20,mobileSize:20,fontWeight:500,href:`/`,onClick:u,children:e})}),f=({items:e=[`Login`]})=>(0,c.jsx)(i,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`20px`,row:`0`},children:e.map(e=>(0,c.jsx)(n,{variant:`link`,href:`/${e.toLowerCase()}`,desktopSize:20,mobileSize:20,fontWeight:500,onClick:u,children:e},e))}),p=({items:e=[`Home`,`Login`]})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(n,{variant:`link`,href:`/${e.toLowerCase().replace(/\s+/g,`-`)}`,desktopSize:30,mobileSize:30,fontWeight:400,onClick:u,children:e},e))}),m=({items:e=[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`,`Pull Ups`]})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{variant:`link`,href:`/in/${e.toLowerCase().replace(/\s+/g,`-`)}`,onClick:u,desktopSize:18,mobileSize:18,fontWeight:500,children:e})},e))}),h=[{title:`Tools`,links:[{to:`/stock-quotes`,label:`Stock Quotes`},{to:`/visitors`,label:`Visitors`},{to:`/weather`,label:`Weather`}]},{title:`Apps`,links:[{to:`https://najwer23.github.io/#/blog`,label:`Blog`},{to:`https://najwer23.github.io/#/contact`,label:`Contact`},{to:`https://najwer23gym.vercel.app/`,label:`Gym`},{to:`https://najwer23.github.io/`,label:`Portfolio`}]},{title:`Social Media`,links:[{to:`https://www.npmjs.com/~najwer23`,label:`NPM`}]}],g=e=>/^https?:\/\//i.test(e),_=({sections:e=h,margin:t})=>(0,c.jsx)(i,{layout:`container`,margin:t,children:e.map(({title:e,links:t})=>(0,c.jsxs)(i,{layout:`container`,margin:`0 0 24px 0`,children:[(0,c.jsx)(i,{layout:`container`,margin:`0 0 8px 0`,children:(0,c.jsx)(n,{variant:`body`,tag:`p`,desktopSize:20,mobileSize:20,fontWeight:600,color:`grey`,children:e})}),t.map(({to:e,label:t})=>{let r=g(e);return(0,c.jsx)(i,{layout:`container`,margin:`0 0 8px 0`,children:(0,c.jsxs)(n,{variant:`link`,href:e,desktopSize:28,mobileSize:28,fontWeight:400,onClick:u,...r?{target:`_blank`,rel:`noreferrer`}:{},children:[t,r&&` ↗`]})},e)})]},e))}),v={menuTopLeftColumn:(0,c.jsx)(d,{}),menuTopRightColumn:(0,c.jsx)(f,{}),menuMobile:(0,c.jsx)(p,{}),menuBottomTabs:(0,c.jsx)(m,{})},y={docs:{story:{inline:!1,iframeHeight:600}}},b={args:v},x={args:{...v,menuBottomTabs:void 0,menuOnlyTop:!0}},S={args:{...v,menuMobile:void 0},parameters:{docs:{description:{story:"Without `menuMobile` there is no Menu button, and the right column stays visible on small screens. Resize the viewport below 768px to check."}}}},C={args:{...v,menuTopRightColumn:(0,c.jsx)(f,{items:[`Pricing`,`Docs`,`Blog`,`Contact`,`Login`]})}},w={args:{...v,menuTopLeftColumn:(0,c.jsx)(d,{label:`A very long brand name that should not break the layout`}),menuBottomTabs:(0,c.jsx)(m,{items:[`Extremely long tab label number one`,`Another extremely long tab label`,`Short`]})}},T={args:{...v,menuTopLeftColumn:(0,c.jsxs)(i,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,gap:{col:`12px`,row:`0`},children:[(0,c.jsx)(`div`,{style:{width:32,height:32,borderRadius:8,background:`orangered`}}),(0,c.jsx)(n,{variant:`body`,tag:`span`,desktopSize:20,mobileSize:20,fontWeight:700,children:`Gym`})]}),menuTopRightColumn:(0,c.jsxs)(i,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`16px`,row:`0`},children:[(0,c.jsx)(n,{variant:`link`,href:`/login`,desktopSize:18,mobileSize:18,fontWeight:500,onClick:u,children:`Login`}),(0,c.jsx)(`button`,{type:`button`,style:{padding:`8px 16px`,borderRadius:6,border:0,background:`orangered`,color:`white`},children:`Sign up`})]})}},E={args:{...v,widthMainContainer:`800px`,widthInnerContainer:`600px`},parameters:{docs:{description:{story:"Custom `widthMainContainer` (800px) and `widthInnerContainer` (600px)."}}}},D={args:{...v,widthMainContainer:`100%`,widthInnerContainer:`100%`},parameters:{docs:{description:{story:"Both containers use 100%, as `NavigationDashboard` does."}}}},O={args:{...v,widthMainContainer:`2000px`,widthInnerContainer:`1800px`}},k={args:{...v,className:`custom-nav`,style:{background:`#fafafa`,borderBottom:`1px solid #ddd`},"data-testid":`navigation-tabs`}},A={args:v,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:`Below 768px the right column and bottom tabs are hidden, and the fixed Menu button is shown.`}}}},j={args:v,globals:{viewport:{value:`tablet`,isRotated:!1}},parameters:y},M={args:{...v,menuBottomTabs:void 0,menuOnlyTop:!0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:y},N={args:{...v,menuMobile:void 0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:"No `menuMobile`: no Menu button, and the right column remains visible."}}}},P={args:{...v,menuMobile:(0,c.jsx)(p,{items:Array.from({length:30},(e,t)=>`Section ${t+1}`)})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:`Open the menu: the content is taller than the screen and scrolls inside the menu, not the page behind it.`}}}},F={args:{...v,menuMobile:(0,c.jsx)(_,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:`The mobile menu is split into sections (Tools, Apps, Social Media). External links open in a new tab and are marked with an arrow.`}}}},I={args:{...v,menuMobile:(0,c.jsx)(_,{})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:"No `margin` on the main container: the sections and links are **centered**. Open the menu to check."}}}},L={args:{...v,menuMobile:(0,c.jsx)(_,{margin:0})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:"With `margin={0}` on the main container, the sections and links are **left-justified** instead of centered. Open the menu to check."}}}},R={args:{...v,menuMobile:(0,c.jsxs)(i,{layout:`container`,children:[(0,c.jsxs)(i,{layout:`container`,margin:`0 0 24px 0`,children:[(0,c.jsx)(i,{layout:`container`,margin:`0 0 8px 0`,children:(0,c.jsx)(n,{variant:`body`,tag:`p`,desktopSize:20,mobileSize:20,fontWeight:600,color:`grey`,children:`Account`})}),(0,c.jsx)(n,{variant:`link`,href:`/auth/login`,desktopSize:28,mobileSize:28,fontWeight:400,onClick:u,children:`Login`})]}),(0,c.jsx)(_,{}),(0,c.jsx)(n,{variant:`caption`,tag:`p`,desktopSize:14,mobileSize:14,color:`grey`,children:`© Gym`})]})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:`Sections plus mobile-only extras, such as an account link and a footer.`}}}},z={args:{...v,menuMobile:(0,c.jsx)(_,{sections:Array.from({length:6},(e,t)=>({title:`Section ${t+1}`,links:Array.from({length:5},(e,n)=>({to:`/section-${t+1}/link-${n+1}`,label:`Link ${t+1}.${n+1}`}))}))})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...y,docs:{...y.docs,description:{story:`Open the menu: 6 sections are taller than the screen and scroll inside the menu, not the page behind it.`}}}},B=[`Default`,`NavigationTabsOnlyTop`,`WithoutMobileMenu`,`ManyTopLinks`,`LongLabels`,`CustomTopColumns`,`NarrowContainers`,`FullWidth`,`WideContainers`,`CustomClassAndStyle`,`Mobile`,`Tablet`,`MobileOnlyTop`,`MobileWithoutMenu`,`MobileLongMenu`,`MobileWithSections`,`MobileSectionsCentered`,`MobileSectionsLeftAligned`,`MobileSectionsWithExtras`,`MobileManySections`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuBottomTabs: undefined,
    menuOnlyTop: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopRightColumn: <TopRightLinks items={['Pricing', 'Docs', 'Blog', 'Contact', 'Login']} />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuTopLeftColumn: <Logo label="A very long brand name that should not break the layout" />,
    menuBottomTabs: <BottomTabs items={['Extremely long tab label number one', 'Another extremely long tab label', 'Short']} />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        <Typography variant="body" tag="span" desktopSize={20} mobileSize={20} fontWeight={700}>
          Gym
        </Typography>
      </Grid>,
    menuTopRightColumn: <Grid layout="flex" justifyContent="flex-end" alignItems="center" minHeight="100%" gap={{
      col: '16px',
      row: '0'
    }}>
        <Typography variant="link" href="/login" desktopSize={18} mobileSize={18} fontWeight={500} onClick={preventDefault}>
          Login
        </Typography>
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    widthMainContainer: '2000px',
    widthInnerContainer: '1800px'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    className: 'custom-nav',
    style: {
      background: '#fafafa',
      borderBottom: '1px solid #ddd'
    },
    'data-testid': 'navigation-tabs'
  } as Story['args']
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'tablet',
      isRotated: false
    }
  },
  parameters: isolatedDocs
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuMobile: <Grid layout="container">
        <Grid layout="container" margin="0 0 24px 0">
          <Grid layout="container" margin="0 0 8px 0">
            <Typography variant="body" tag="p" desktopSize={20} mobileSize={20} fontWeight={600} color="grey">
              Account
            </Typography>
          </Grid>
          <Typography variant="link" href="/auth/login" desktopSize={28} mobileSize={28} fontWeight={400} onClick={preventDefault}>
            Login
          </Typography>
        </Grid>

        <MobileSections />

        <Typography variant="caption" tag="p" desktopSize={14} mobileSize={14} color="grey">
          © Gym
        </Typography>
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{k as CustomClassAndStyle,T as CustomTopColumns,b as Default,D as FullWidth,w as LongLabels,C as ManyTopLinks,A as Mobile,P as MobileLongMenu,z as MobileManySections,M as MobileOnlyTop,I as MobileSectionsCentered,L as MobileSectionsLeftAligned,R as MobileSectionsWithExtras,F as MobileWithSections,N as MobileWithoutMenu,E as NarrowContainers,x as NavigationTabsOnlyTop,j as Tablet,O as WideContainers,S as WithoutMobileMenu,B as __namedExportsOrder,l as default};