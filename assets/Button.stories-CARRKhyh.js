import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-DML8Yzp6.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Button-CWrtpdUG.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{s=t(),i(),o(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=[`primary`,`secondary`,`danger`,`success`,`copy`,`menu`,`disabled`],d={title:`Button/Button`,component:a,parameters:{layout:`centered`,docs:{description:{component:"\nA customizable button component supporting color variants, loading states, disabled states, and custom dimensions.\n\nVariants: `primary` (default), `secondary`, `danger`, `success`, `copy`, `menu`, `disabled`.\nUse `backgroundColor`, `borderColor` and `textColor` to override a variant.\n\nImport:\n```tsx\nimport { Button } from 'najwer23morsels/lib/Button';\n```\n        "}}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:u}},args:{type:`button`,variant:`primary`,height:`42px`,padding:`0 10px`,onClick:l(`button-click`)}},f=(e,t)=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:t})}),p={render:e=>f(e,`Button`)},m={args:{variant:`primary`},render:e=>f(e,`Save changes`)},h={args:{variant:`secondary`},render:e=>f(e,`Close`)},g={args:{variant:`danger`},render:e=>f(e,`Delete`)},_={args:{variant:`success`},render:e=>f(e,`Sign up`)},v={args:{variant:`copy`},render:e=>f(e,`Copy`)},y={args:{variant:`menu`},render:e=>f(e,`Menu`)},b={args:{variant:`disabled`},render:e=>f(e,`Disabled`)},x={args:{variant:`danger`,disabled:!0},render:e=>f(e,`Disabled via prop`)},S={args:{backgroundColor:`#0057B8`,borderColor:`#003F87`,textColor:`#FFFFFF`},render:e=>f(e,`Custom`)},C={args:{loaderMobileSize:14,loaderDesktopSize:14},render:e=>{let[t,n]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,c.jsx)(a,{...e,loading:t,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:`Save changes`})})}},w={args:{width:`80px`},render:e=>f(e,`Small`)},T={args:{width:`220px`},render:e=>f(e,`Large button`)},E={args:{width:`100%`},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`320px`},children:(0,c.jsx)(e,{})})],render:e=>f(e,`Full width`)},D={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 180px)`,gap:`16px`},children:u.map(e=>(0,c.jsx)(a,{variant:e,onClick:l(e),children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:e})},e))})},O=[`Default`,`Primary`,`Secondary`,`Danger`,`Success`,`Copy`,`Menu`,`Disabled`,`DisabledProp`,`CustomColors`,`ButtonLoading`,`Small`,`Large`,`FullWidth`,`AllVariants`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => renderButton(args, 'Button')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => renderButton(args, 'Save changes')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => renderButton(args, 'Close')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: args => renderButton(args, 'Delete')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => renderButton(args, 'Sign up')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'copy'
  },
  render: args => renderButton(args, 'Copy')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'menu'
  },
  render: args => renderButton(args, 'Menu')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'disabled'
  },
  render: args => renderButton(args, 'Disabled')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    disabled: true
  },
  render: args => renderButton(args, 'Disabled via prop')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#0057B8',
    borderColor: '#003F87',
    textColor: '#FFFFFF'
  },
  render: args => renderButton(args, 'Custom')
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    loaderMobileSize: 14,
    loaderDesktopSize: 14
  },
  render: args => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const interval = setInterval(() => {
        setLoading(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    return <Button {...args} loading={loading}>
        <TextBox mobileSize={14} desktopSize={14} color="inherit">
          Save changes
        </TextBox>
      </Button>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    width: '80px'
  },
  render: args => renderButton(args, 'Small')
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    width: '220px'
  },
  render: args => renderButton(args, 'Large button')
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>],
  render: args => renderButton(args, 'Full width')
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 180px)',
    gap: '16px'
  }}>
      {VARIANTS.map(variant => <Button key={variant} variant={variant} onClick={action(variant)}>
          <TextBox mobileSize={14} desktopSize={14} color="inherit">
            {variant}
          </TextBox>
        </Button>)}
    </div>
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as AllVariants,C as ButtonLoading,v as Copy,S as CustomColors,g as Danger,p as Default,b as Disabled,x as DisabledProp,E as FullWidth,T as Large,y as Menu,m as Primary,h as Secondary,w as Small,_ as Success,O as __namedExportsOrder,d as default};