import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Loader-DTqeuvAd.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i=t(),a={title:`Loader/Loader`,component:n,parameters:{layout:`centered`,docs:{description:{component:"\nThis is a loader component that can be used to indicate loading states in your application.\n\n- `minHeight`: height of the loader (it is applied as `height`). Without it, the loader fills the height of its parent.\n- `textPosition`: `center` (default) or `topLeft`, useful when the loader is very tall.\n- `loaderColor`: color of the dots, text and dotted border.\n- `text`, `mobileSize`, `desktopSize`: label and its font sizes.\n\nYou can import the Loader component from the library and use it in your application as follows:\n```tsx\nimport { Loader } from 'najwer23morsels/lib/Loader';\n```\n      "}}},argTypes:{textPosition:{control:`inline-radio`,options:[`center`,`topLeft`]},loaderColor:{control:`color`}},tags:[`autodocs`]},o=e=>({width:`min(700px, calc(100vw - 50px))`,height:e}),s={args:{loaderColor:`black`,minHeight:`400px`},render:e=>(0,i.jsx)(`div`,{style:o(),children:(0,i.jsx)(n,{...e})})},c={args:{minHeight:`400px`,textPosition:`topLeft`},parameters:{docs:{description:{story:`The text sits in the top left corner, so it stays visible on a very tall loader.`}}},render:e=>(0,i.jsx)(`div`,{style:o(),children:(0,i.jsx)(n,{...e})})},l={args:{minHeight:`300px`},parameters:{layout:`padded`,docs:{description:{story:`Both positions side by side on the same height.`}}},render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(260px, 1fr))`,gap:`20px`,width:`min(900px, calc(100vw - 50px))`},children:[(0,i.jsx)(n,{...e,textPosition:`center`,text:`center`}),(0,i.jsx)(n,{...e,textPosition:`topLeft`,text:`topLeft`})]})},u={args:{loaderColor:`#0a7d3b`,text:`Fetching your orders`,minHeight:`200px`},render:e=>(0,i.jsx)(`div`,{style:o(),children:(0,i.jsx)(n,{...e})})},d={args:{minHeight:`160px`,text:`Loading`,mobileSize:24,desktopSize:32},parameters:{docs:{description:{story:"`mobileSize` and `desktopSize` control the font size of the text and dots."}}},render:e=>(0,i.jsx)(`div`,{style:o(),children:(0,i.jsx)(n,{...e})})},f={args:{minHeight:`56px`,text:`Saving`,mobileSize:14,desktopSize:14},parameters:{docs:{description:{story:`A small inline loader, for example inside a card or a form row.`}}},render:e=>(0,i.jsx)(`div`,{style:{width:`240px`},children:(0,i.jsx)(n,{...e})})},p={args:{},parameters:{docs:{description:{story:"Without `minHeight` the loader uses `height: 100%`, so it fills the parent. The parent here is 250px tall."}}},render:e=>(0,i.jsx)(`div`,{style:o(`250px`),children:(0,i.jsx)(n,{...e})})},m={args:{minHeight:`200px`,text:`Loading results`,role:`status`,"aria-live":`polite`,"aria-busy":!0},parameters:{docs:{description:{story:"`role`, `aria-*` and other HTML attributes are passed to the root element, so screen readers can announce the loader."}}},render:e=>(0,i.jsx)(`div`,{style:o(),children:(0,i.jsx)(n,{...e})})},h=[`Default`,`TopLeft`,`CenterVsTopLeft`,`CustomTextAndColor`,`TextSizes`,`Compact`,`FillsParent`,`Accessible`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loaderColor: 'black',
    minHeight: '400px'
  },
  render: args => <div style={frame()}>
      <Loader {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minHeight: '400px',
    textPosition: 'topLeft'
  },
  parameters: {
    docs: {
      description: {
        story: 'The text sits in the top left corner, so it stays visible on a very tall loader.'
      }
    }
  },
  render: args => <div style={frame()}>
      <Loader {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    minHeight: '300px'
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Both positions side by side on the same height.'
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    width: 'min(900px, calc(100vw - 50px))'
  }}>
      <Loader {...args} textPosition="center" text="center" />
      <Loader {...args} textPosition="topLeft" text="topLeft" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    loaderColor: '#0a7d3b',
    text: 'Fetching your orders',
    minHeight: '200px'
  },
  render: args => <div style={frame()}>
      <Loader {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    minHeight: '160px',
    text: 'Loading',
    mobileSize: 24,
    desktopSize: 32
  },
  parameters: {
    docs: {
      description: {
        story: '\`mobileSize\` and \`desktopSize\` control the font size of the text and dots.'
      }
    }
  },
  render: args => <div style={frame()}>
      <Loader {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    minHeight: '56px',
    text: 'Saving',
    mobileSize: 14,
    desktopSize: 14
  },
  parameters: {
    docs: {
      description: {
        story: 'A small inline loader, for example inside a card or a form row.'
      }
    }
  },
  render: args => <div style={{
    width: '240px'
  }}>
      <Loader {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Without \`minHeight\` the loader uses \`height: 100%\`, so it fills the parent. The parent here is 250px tall.'
      }
    }
  },
  render: args => <div style={frame('250px')}>
      <Loader {...args} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    minHeight: '200px',
    text: 'Loading results',
    role: 'status',
    'aria-live': 'polite',
    'aria-busy': true
  },
  parameters: {
    docs: {
      description: {
        story: '\`role\`, \`aria-*\` and other HTML attributes are passed to the root element, so screen readers can announce the loader.'
      }
    }
  },
  render: args => <div style={frame()}>
      <Loader {...args} />
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Accessible,l as CenterVsTopLeft,f as Compact,u as CustomTextAndColor,s as Default,p as FillsParent,d as TextSizes,c as TopLeft,h as __namedExportsOrder,a as default};