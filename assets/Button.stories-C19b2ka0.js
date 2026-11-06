import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,F as n,S as r,x as i}from"./iframe-CuhRqc_B.js";import{n as a,t as o}from"./TextBox-EnijUUo4.js";import{n as s,t as c}from"./Button-B2xtGqnb.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{l=n(),o(),i(),c(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f=Object.keys(t.default.components.button.variants),p=s,m={title:`Button/Button`,component:p,parameters:{layout:`centered`,docs:{description:{component:`
A customizable button component supporting theme-based color variants, loading states, disabled states, and custom dimensions.

Button colors are inherited from the active Theme. Use the Storybook theme toolbar to preview different color palettes.

Variants: ${f.map(e=>`\`${e}\``).join(`, `)}.

### Copy variant

With \`variant="copy"\` the button copies \`textToCopy\` to the clipboard (\`textToCopy\` is required for this variant and not allowed for the others).

After a successful copy it switches to the \`success\` variant for 800ms. A visually hidden live region announces "Copied" to screen readers.

If no children are passed, a default "Copy" label is rendered.

\`navigator.clipboard\` requires a secure context (HTTPS or localhost).

Import:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/Button';
\`\`\`
        `}}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:f,description:`Button color variant provided by the active Theme.`},textToCopy:{control:`text`,description:'Text copied to the clipboard. Required when `variant="copy"`.'},padding:{control:`text`},margin:{control:`text`},height:{control:`text`},width:{control:`text`},loading:{control:`boolean`},disabled:{control:`boolean`}},args:{type:`button`,variant:`primary`,height:`42px`,padding:`0 10px`,onClick:d(`button-click`)}},h={variant:`copy`,textToCopy:`Hagagagga`,height:`auto`,padding:`0px 3px`},g=(e,t,n)=>(0,u.jsx)(p,{...e,children:(0,u.jsx)(a,{mobileSize:14,desktopSize:14,fontWeight:n,color:`inherit`,children:t})}),_={render:e=>g(e,`Button`)},v={args:{variant:`primary`},render:e=>g(e,`Save changes`)},y={args:{variant:`secondary`},render:e=>g(e,`Close`)},b={args:{variant:`danger`},render:e=>g(e,`Delete`)},x={args:{variant:`success`},render:e=>g(e,`Sign up`)},S={args:{variant:`menu`},render:e=>g(e,`Menu`)},C={args:{variant:`disabled`},render:e=>g(e,`Disabled`)},w={args:{variant:`danger`,disabled:!0},render:e=>g(e,`Disabled via prop`)},T={args:{loaderMobileSize:14,loaderDesktopSize:14},render:e=>{let[t,n]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,u.jsx)(p,{...e,loading:t,children:(0,u.jsx)(a,{mobileSize:14,desktopSize:14,color:`inherit`,children:`Save changes`})})}},E={args:{width:`80px`},render:e=>g(e,`Small`)},D={args:{width:`220px`},render:e=>g(e,`Large button`)},O={args:{width:`100%`},decorators:[e=>(0,u.jsx)(`div`,{style:{width:`320px`},children:(0,u.jsx)(e,{})})],render:e=>g(e,`Full width`)},k={args:{variant:`copy`,textToCopy:`Hagagagga`},render:e=>g(e,`Copy`,600)},A={name:`Copy / Small`,args:h},j={name:`Copy / Custom label`,args:{variant:`copy`,textToCopy:`npm install najwer23morsels`},render:e=>g(e,`Copy command`,600)},M={name:`Copy / Custom size`,args:{variant:`copy`,textToCopy:`Hagagagga`,height:`42px`,width:`120px`,padding:`0 12px`},render:e=>g(e,`Copy`,600)},N={name:`Copy / Full width`,args:{variant:`copy`,textToCopy:`Hagagagga`,height:`42px`,width:`100%`,padding:`0 12px`},decorators:[e=>(0,u.jsx)(`div`,{style:{width:`320px`},children:(0,u.jsx)(e,{})})],render:e=>g(e,`Copy to clipboard`,600)},P={name:`Copy / Code snippet`,args:{variant:`copy`,textToCopy:`npm install najwer23morsels`},render:e=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`8px 8px 8px 16px`,background:`#fff`,border:`1px solid #ddd`,borderRadius:`12px`},children:[(0,u.jsx)(`code`,{style:{fontSize:14},children:e.textToCopy}),(0,u.jsx)(p,{...e,height:`32px`,padding:`0 10px`})]})},F={name:`Copy / Paste to test`,args:{variant:`copy`,textToCopy:`Copied from the Button story`},render:e=>{let[t,n]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,width:`320px`},children:[g({...e,height:`36px`,padding:`0 12px`},`Copy`,600),(0,u.jsx)(`input`,{value:t,onChange:e=>n(e.target.value),placeholder:`Click Copy, then paste here (Ctrl/Cmd + V)`,style:{height:36,padding:`0 10px`,boxSizing:`border-box`}})]})}},I={render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 180px)`,gap:`16px`},children:f.map(e=>(0,u.jsx)(p,{variant:e,textToCopy:e===`copy`?`Hagagagga`:void 0,onClick:d(e),children:(0,u.jsx)(a,{mobileSize:14,desktopSize:14,color:`inherit`,children:e})},e))})},L=[`Default`,`Primary`,`Secondary`,`Danger`,`Success`,`Menu`,`Disabled`,`DisabledProp`,`ButtonLoading`,`Small`,`Large`,`FullWidth`,`Copy`,`CopyDefault`,`CopyCustomLabel`,`CopyCustomSize`,`CopyFullWidth`,`CopyCodeSnippet`,`CopyPasteToTest`,`AllVariants`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => renderButton(args, 'Button')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => renderButton(args, 'Save changes')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => renderButton(args, 'Close')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: args => renderButton(args, 'Delete')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => renderButton(args, 'Sign up')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'menu'
  },
  render: args => renderButton(args, 'Menu')
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'disabled'
  },
  render: args => renderButton(args, 'Disabled')
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    disabled: true
  },
  render: args => renderButton(args, 'Disabled via prop')
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    width: '80px'
  },
  render: args => renderButton(args, 'Small')
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    width: '220px'
  },
  render: args => renderButton(args, 'Large button')
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>],
  render: args => renderButton(args, 'Full width')
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga'
  },
  render: args => renderButton(args, 'Copy', 600)
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Small',
  args: COPY_DEFAULT_ARGS
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Custom label',
  args: {
    variant: 'copy',
    textToCopy: 'npm install najwer23morsels'
  },
  render: args => renderButton(args, 'Copy command', 600)
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Copy / Custom size',
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga',
    height: '42px',
    width: '120px',
    padding: '0 12px'
  },
  render: args => renderButton(args, 'Copy', 600)
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as AllVariants,T as ButtonLoading,k as Copy,P as CopyCodeSnippet,j as CopyCustomLabel,M as CopyCustomSize,A as CopyDefault,N as CopyFullWidth,F as CopyPasteToTest,b as Danger,_ as Default,C as Disabled,w as DisabledProp,O as FullWidth,D as Large,S as Menu,v as Primary,y as Secondary,E as Small,x as Success,L as __namedExportsOrder,m as default};