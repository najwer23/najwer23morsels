import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./TextBox-D040vOwf.js";import{t as i}from"./Grid-1FVX7aH9.js";import{t as a}from"./Grid-CcI28XB6.js";import{n as o,t as s}from"./NavigationTabs-BAzhkAmt.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{a(),r(),s(),c=t(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Navigation/NavigationTabs`,component:o,parameters:{docs:{description:{component:`
Responsive navigation component with a top bar, optional bottom tabs, and a mobile menu.

Below 768px the right column and the bottom tabs are hidden, and a fixed **Menu** button opens a full-screen menu
(only when \`menuMobile\` is provided).

\`\`\`tsx
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
\`\`\`
      `}}},tags:[`autodocs`],argTypes:{menuTopLeftColumn:{control:!1},menuTopRightColumn:{control:!1},menuMobile:{control:!1},menuBottomTabs:{control:!1}}},m=e=>e.preventDefault(),h=({label:e=`Gym`})=>(0,c.jsx)(i,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,children:(0,c.jsx)(n,{desktopSize:20,mobileSize:20,fontWeight:500,tag:`a`,href:`/`,onClick:m,children:e})}),g=({items:e=[`Login`]})=>(0,c.jsx)(i,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`20px`,row:`0`},children:e.map(e=>(0,c.jsx)(n,{tag:`a`,href:`/${e.toLowerCase()}`,desktopSize:20,mobileSize:20,fontWeight:500,onClick:m,children:e},e))}),_=({items:e=[`Home`,`Login`]})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(n,{tag:`a`,href:`/${e.toLowerCase().replace(/\s+/g,`-`)}`,desktopSize:30,mobileSize:30,fontWeight:400,onClick:m,children:e},e))}),v=({items:e=[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`,`Pull Ups`]})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{tag:`a`,href:`/in/${e.toLowerCase().replace(/\s+/g,`-`)}`,onClick:m,desktopSize:18,mobileSize:18,fontWeight:500,children:e})},e))}),y=({repeat:e=1e3})=>(0,c.jsx)(`div`,{style:{padding:20},children:`Page content. `.repeat(e)}),b={menuTopLeftColumn:(0,c.jsx)(h,{}),menuTopRightColumn:(0,c.jsx)(g,{}),menuMobile:(0,c.jsx)(_,{}),menuBottomTabs:(0,c.jsx)(v,{})},x={docs:{story:{inline:!1,iframeHeight:500}}},S={args:b,render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`,height:`400px`},children:(0,c.jsx)(o,{...e})})},C={args:{...b,menuBottomTabs:void 0,menuOnlyTop:!0},render:e=>(0,c.jsxs)(`div`,{style:{width:`100vw`,height:`400px`},children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(y,{})]})},w={args:{...b,menuMobile:void 0},parameters:{docs:{description:{story:"Without `menuMobile` there is no Menu button, and the right column stays visible on small screens. Resize the viewport below 768px to check."}}}},T={args:{...b,menuTopRightColumn:(0,c.jsx)(g,{items:[`Pricing`,`Docs`,`Blog`,`Contact`,`Login`]})}},E={args:{...b,menuBottomTabs:(0,c.jsx)(v,{items:Array.from({length:16},(e,t)=>[`Dashboard`,`Push Ups`,`Squats`,`Sit Ups`][t%4]+` ${t+1}`)})},parameters:{docs:{description:{story:`The tabs wrap onto several rows (row gap 20px) and stay centered.`}}}},D={args:{...b,menuTopLeftColumn:(0,c.jsx)(h,{label:`A very long brand name that should not break the layout`}),menuBottomTabs:(0,c.jsx)(v,{items:[`Extremely long tab label number one`,`Another extremely long tab label`,`Short`]})}},O={args:{...b,menuTopLeftColumn:(0,c.jsxs)(i,{layout:`flex`,justifyContent:`flex-start`,alignItems:`center`,minHeight:`100%`,gap:{col:`12px`,row:`0`},children:[(0,c.jsx)(`div`,{style:{width:32,height:32,borderRadius:8,background:`orangered`}}),(0,c.jsx)(n,{desktopSize:20,mobileSize:20,fontWeight:700,tag:`span`,children:`Gym`})]}),menuTopRightColumn:(0,c.jsxs)(i,{layout:`flex`,justifyContent:`flex-end`,alignItems:`center`,minHeight:`100%`,gap:{col:`16px`,row:`0`},children:[(0,c.jsx)(n,{tag:`a`,href:`/login`,desktopSize:18,mobileSize:18,fontWeight:500,onClick:m,children:`Login`}),(0,c.jsx)(`button`,{type:`button`,style:{padding:`8px 16px`,borderRadius:6,border:0,background:`orangered`,color:`white`},children:`Sign up`})]})}},k={args:{...b,widthMainContainer:`800px`,widthInnerContainer:`600px`},parameters:{docs:{description:{story:"Custom `widthMainContainer` (800px) and `widthInnerContainer` (600px)."}}}},A={args:{...b,widthMainContainer:`100%`,widthInnerContainer:`100%`},parameters:{docs:{description:{story:"Both containers use 100%, as `NavigationDashboard` does."}}}},j={args:{...b,widthMainContainer:`2000px`,widthInnerContainer:`1800px`}},M={args:{...b,className:`custom-nav`,style:{background:`#fafafa`,borderBottom:`1px solid #ddd`},"data-testid":`navigation-tabs`}},N={args:b,render:e=>(0,c.jsxs)(`div`,{style:{width:`100vw`},children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(y,{repeat:3e3})]}),parameters:{docs:{description:{story:`The navigation scrolls away with the page. Below 768px the Menu button stays fixed on screen.`}}}},P={args:b,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Below 768px the right column and bottom tabs are hidden, and the fixed Menu button is shown.`}}}},F={args:b,globals:{viewport:{value:`tablet`,isRotated:!1}},parameters:x},I={args:{...b,menuBottomTabs:void 0,menuOnlyTop:!0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:x},L={args:{...b,menuMobile:void 0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:"No `menuMobile`: no Menu button, and the right column remains visible."}}}},R={args:{...b,menuMobile:(0,c.jsx)(_,{items:Array.from({length:30},(e,t)=>`Section ${t+1}`)})},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Open the menu: the content is taller than the screen and scrolls inside the menu, not the page behind it.`}}}},z={args:b,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:x,render:e=>(0,c.jsxs)(`div`,{style:{width:`100%`},children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(y,{repeat:3e3})]})},B={args:b,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{...x,docs:{...x.docs,description:{story:`Opens the mobile menu, then closes it by clicking a link. Checked by the play function.`}}},play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`button`,{name:`Menu`}),r=t.getByRole(`link`,{name:`Home`});await l(r).not.toBeVisible(),await u.click(n),await d(()=>l(r).toBeVisible(),{timeout:2e3}),await l(document.body).toHaveStyle({overflow:`hidden`}),await u.click(r),await d(()=>l(r).not.toBeVisible(),{timeout:2e3}),await d(()=>l(document.body).not.toHaveStyle({overflow:`hidden`}))}},V={args:b,globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:x,play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`button`,{name:`Menu`}),r=t.getByRole(`link`,{name:`Login`});await u.click(n),await d(()=>l(r).toBeVisible(),{timeout:2e3}),await u.click(n),await d(()=>l(r).not.toBeVisible(),{timeout:2e3})}},H={args:{...b,menuMobile:void 0},globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:x,play:async({canvasElement:e})=>{let t=f(e);await l(t.queryByRole(`button`,{name:`Menu`})).toBeNull()}},U={args:{...b,menuOnlyTop:!0},play:async({canvasElement:e})=>{let t=f(e);await l(t.queryByRole(`link`,{name:`Dashboard`})).toBeNull()}},W={args:b,play:async({canvasElement:e})=>{let t=f(e);await l(t.getByRole(`link`,{name:`Dashboard`})).toBeVisible(),await l(t.queryByRole(`button`,{name:`Menu`})).toBeNull()}},G=[`Default`,`NavigationTabsOnlyTop`,`WithoutMobileMenu`,`ManyTopLinks`,`ManyBottomTabs`,`LongLabels`,`CustomTopColumns`,`NarrowContainers`,`FullWidth`,`WideContainers`,`CustomClassAndStyle`,`WithLongPage`,`Mobile`,`Tablet`,`MobileOnlyTop`,`MobileWithoutMenu`,`MobileLongMenu`,`MobileLongPage`,`OpenAndCloseMobileMenu`,`ToggleMobileMenuWithButton`,`NoMenuButtonWithoutMobileMenu`,`OnlyTopHidesBottomTabs`,`DesktopShowsBottomTabs`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    menuTopLeftColumn: <Grid layout="flex" justifyContent="flex-start" alignItems="center" minHeight={'100%'} gap={{
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
    menuTopRightColumn: <Grid layout="flex" justifyContent="flex-end" alignItems="center" minHeight={'100%'} gap={{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
        story: 'Opens the mobile menu, then closes it by clicking a link. Checked by the play function.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Menu'
    });
    const link = canvas.getByRole('link', {
      name: 'Home'
    });
    await expect(link).not.toBeVisible();
    await userEvent.click(button);
    await waitFor(() => expect(link).toBeVisible(), {
      timeout: 2000
    });
    await expect(document.body).toHaveStyle({
      overflow: 'hidden'
    });
    await userEvent.click(link);
    await waitFor(() => expect(link).not.toBeVisible(), {
      timeout: 2000
    });
    await waitFor(() => expect(document.body).not.toHaveStyle({
      overflow: 'hidden'
    }));
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  parameters: isolatedDocs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Menu'
    });
    const link = canvas.getByRole('link', {
      name: 'Login'
    });
    await userEvent.click(button);
    await waitFor(() => expect(link).toBeVisible(), {
      timeout: 2000
    });
    await userEvent.click(button);
    await waitFor(() => expect(link).not.toBeVisible(), {
      timeout: 2000
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
  parameters: isolatedDocs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', {
      name: 'Menu'
    })).toBeNull();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    menuOnlyTop: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('link', {
      name: 'Dashboard'
    })).toBeNull();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', {
      name: 'Dashboard'
    })).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'Menu'
    })).toBeNull();
  }
}`,...W.parameters?.docs?.source}}}})))()}K();export{M as CustomClassAndStyle,O as CustomTopColumns,S as Default,W as DesktopShowsBottomTabs,A as FullWidth,D as LongLabels,E as ManyBottomTabs,T as ManyTopLinks,P as Mobile,R as MobileLongMenu,z as MobileLongPage,I as MobileOnlyTop,L as MobileWithoutMenu,k as NarrowContainers,C as NavigationTabsOnlyTop,H as NoMenuButtonWithoutMobileMenu,U as OnlyTopHidesBottomTabs,B as OpenAndCloseMobileMenu,F as Tablet,V as ToggleMobileMenuWithButton,j as WideContainers,N as WithLongPage,w as WithoutMobileMenu,G as __namedExportsOrder,p as default};