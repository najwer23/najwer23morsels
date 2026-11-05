import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-C2ou4yVG.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Button-SPPR1lYP.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{s=t(),i(),o(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=[`primary`,`secondary`,`danger`,`success`,`copy`,`menu`,`disabled`],d=a,f={title:`Button/Button`,component:d,parameters:{layout:`centered`,docs:{description:{component:'\nA customizable button component supporting color variants, loading states, disabled states, and custom dimensions.\n\nVariants: `primary` (default), `secondary`, `danger`, `success`, `copy`, `menu`, `disabled`.\nUse `backgroundColor`, `borderColor` and `textColor` to override a variant.\n\n### Copy variant\n\nWith `variant="copy"` the button copies `textToCopy` to the clipboard (`textToCopy` is required for this variant and not allowed for the others).\nAfter a successful copy it switches to the `success` variant for 800ms. A visually hidden live region announces "Copied" to screen readers.\nIf no children are passed, a default "Copy" label is rendered.\n\n`navigator.clipboard` requires a secure context (HTTPS or localhost).\n\nImport:\n```tsx\nimport { Button } from \'najwer23morsels/lib/Button\';\n```\n        '}}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:u},textToCopy:{control:`text`,description:'Text copied to the clipboard. Required when `variant="copy"`.'},padding:{control:`text`},height:{control:`text`},width:{control:`text`}},args:{type:`button`,variant:`primary`,height:`42px`,padding:`0 10px`,onClick:l(`button-click`)}},p={variant:`copy`,textToCopy:`Hagagagga`,height:`auto`,padding:`0px 3px`},m=(e,t,n)=>(0,c.jsx)(d,{...e,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,fontWeight:n,color:`inherit`,children:t})}),h={render:e=>m(e,`Button`)},g={args:{variant:`primary`},render:e=>m(e,`Save changes`)},_={args:{variant:`secondary`},render:e=>m(e,`Close`)},v={args:{variant:`danger`},render:e=>m(e,`Delete`)},y={args:{variant:`success`},render:e=>m(e,`Sign up`)},b={args:{variant:`menu`},render:e=>m(e,`Menu`)},x={args:{variant:`disabled`},render:e=>m(e,`Disabled`)},S={args:{variant:`danger`,disabled:!0},render:e=>m(e,`Disabled via prop`)},C={args:{backgroundColor:`#0057B8`,borderColor:`#003F87`,textColor:`#FFFFFF`},render:e=>m(e,`Custom`)},w={args:{loaderMobileSize:14,loaderDesktopSize:14},render:e=>{let[t,n]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,c.jsx)(d,{...e,loading:t,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:`Save changes`})})}},T={args:{width:`80px`},render:e=>m(e,`Small`)},E={args:{width:`220px`},render:e=>m(e,`Large button`)},D={args:{width:`100%`},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`320px`},children:(0,c.jsx)(e,{})})],render:e=>m(e,`Full width`)},O={args:{variant:`copy`,textToCopy:`Hagagagga`},render:e=>m(e,`Copy`,600)},k={name:`Copy / Small`,args:p},A={name:`Copy / Custom label`,args:{variant:`copy`,textToCopy:`npm install najwer23morsels`},render:e=>m(e,`Copy command`,600)},j={name:`Copy / Custom size`,args:{variant:`copy`,textToCopy:`Hagagagga`,height:`42px`,width:`120px`,padding:`0 12px`},render:e=>m(e,`Copy`,600)},M={name:`Copy / Full width`,args:{variant:`copy`,textToCopy:`Hagagagga`,height:`42px`,width:`100%`,padding:`0 12px`},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`320px`},children:(0,c.jsx)(e,{})})],render:e=>m(e,`Copy to clipboard`,600)},N={name:`Copy / Code snippet`,args:{variant:`copy`,textToCopy:`npm install najwer23morsels`},render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`8px 8px 8px 16px`,background:`#fff`,border:`1px solid #ddd`,borderRadius:`12px`},children:[(0,c.jsx)(`code`,{style:{fontSize:14},children:e.textToCopy}),(0,c.jsx)(d,{...e,height:`32px`,padding:`0 10px`})]})},P={name:`Copy / Paste to test`,args:{variant:`copy`,textToCopy:`Copied from the Button story`},render:e=>{let[t,n]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,width:`320px`},children:[m({...e,height:`36px`,padding:`0 12px`},`Copy`,600),(0,c.jsx)(`input`,{value:t,onChange:e=>n(e.target.value),placeholder:`Click Copy, then paste here (Ctrl/Cmd + V)`,style:{height:36,padding:`0 10px`,boxSizing:`border-box`}})]})}},F={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 180px)`,gap:`16px`},children:u.map(e=>(0,c.jsx)(d,{variant:e,textToCopy:e===`copy`?`Hagagagga`:void 0,onClick:l(e),children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:e})},e))})},I=[`Default`,`Primary`,`Secondary`,`Danger`,`Success`,`Menu`,`Disabled`,`DisabledProp`,`CustomColors`,`ButtonLoading`,`Small`,`Large`,`FullWidth`,`Copy`,`CopyDefault`,`CopyCustomLabel`,`CopyCustomSize`,`CopyFullWidth`,`CopyCodeSnippet`,`CopyPasteToTest`,`AllVariants`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => renderButton(args, 'Button')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => renderButton(args, 'Save changes')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => renderButton(args, 'Close')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: args => renderButton(args, 'Delete')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => renderButton(args, 'Sign up')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'menu'
  },
  render: args => renderButton(args, 'Menu')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'disabled'
  },
  render: args => renderButton(args, 'Disabled')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    disabled: true
  },
  render: args => renderButton(args, 'Disabled via prop')
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#0057B8',
    borderColor: '#003F87',
    textColor: '#FFFFFF'
  },
  render: args => renderButton(args, 'Custom')
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    return <StoryButton {...args} loading={loading}>
        <TextBox mobileSize={14} desktopSize={14} color="inherit">
          Save changes
        </TextBox>
      </StoryButton>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    width: '80px'
  },
  render: args => renderButton(args, 'Small')
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    width: '220px'
  },
  render: args => renderButton(args, 'Large button')
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>],
  render: args => renderButton(args, 'Full width')
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga'
  },
  render: args => renderButton(args, 'Copy', 600)
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Small',
  args: COPY_DEFAULT_ARGS
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Custom label',
  args: {
    variant: 'copy',
    textToCopy: 'npm install najwer23morsels'
  },
  render: args => renderButton(args, 'Copy command', 600)
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Custom size',
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga',
    height: '42px',
    width: '120px',
    padding: '0 12px'
  },
  render: args => renderButton(args, 'Copy', 600)
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Full width',
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga',
    height: '42px',
    width: '100%',
    padding: '0 12px'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>],
  render: args => renderButton(args, 'Copy to clipboard', 600)
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Code snippet',
  args: {
    variant: 'copy',
    textToCopy: 'npm install najwer23morsels'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 8px 8px 16px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px'
  }}>
      <code style={{
      fontSize: 14
    }}>{args.textToCopy}</code>
      <StoryButton {...args} height="32px" padding="0 10px" />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Paste to test',
  args: {
    variant: 'copy',
    textToCopy: 'Copied from the Button story'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '320px'
    }}>
        {renderButton({
        ...args,
        height: '36px',
        padding: '0 12px'
      }, 'Copy', 600)}
        <input value={value} onChange={event => setValue(event.target.value)} placeholder="Click Copy, then paste here (Ctrl/Cmd + V)" style={{
        height: 36,
        padding: '0 10px',
        boxSizing: 'border-box'
      }} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 180px)',
    gap: '16px'
  }}>
      {VARIANTS.map(variant => <StoryButton key={variant} variant={variant} textToCopy={variant === 'copy' ? 'Hagagagga' : undefined} onClick={action(variant)}>
          <TextBox mobileSize={14} desktopSize={14} color="inherit">
            {variant}
          </TextBox>
        </StoryButton>)}
    </div>
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as AllVariants,w as ButtonLoading,O as Copy,N as CopyCodeSnippet,A as CopyCustomLabel,j as CopyCustomSize,k as CopyDefault,M as CopyFullWidth,P as CopyPasteToTest,C as CustomColors,v as Danger,h as Default,x as Disabled,S as DisabledProp,D as FullWidth,E as Large,b as Menu,g as Primary,_ as Secondary,T as Small,y as Success,I as __namedExportsOrder,f as default};