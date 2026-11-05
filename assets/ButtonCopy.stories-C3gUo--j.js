import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-CnK7IBct.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./ButtonCopy-DngwGW1L.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),i(),o(),c=n(),l={title:`Button/ButtonCopy`,component:a,parameters:{layout:`centered`,docs:{description:{component:`
A button that copies text to the clipboard.

It uses the \`copy\` variant by default and switches to the \`success\` variant for 800ms after a successful copy. A visually hidden live region announces "Copied" to screen readers.

\`navigator.clipboard\` requires a secure context (HTTPS or localhost).

\`\`\`tsx
import { ButtonCopy } from 'najwer23morsels/lib/ButtonCopy';
\`\`\`
      `}}},tags:[`autodocs`],argTypes:{textToCopy:{control:`text`},padding:{control:`text`},height:{control:`text`},width:{control:`text`}},args:{textToCopy:`Hagagagga`}},u={},d={args:{textToCopy:`npm install najwer23morsels`},render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,fontWeight:600,color:`inherit`,children:`Copy command`})})},f={args:{height:`42px`,width:`120px`,padding:`0 12px`},render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,fontWeight:600,color:`inherit`,children:`Copy`})})},p={args:{height:`42px`,width:`100%`,padding:`0 12px`},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`320px`},children:(0,c.jsx)(e,{})})],render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,fontWeight:600,color:`inherit`,children:`Copy to clipboard`})})},m={args:{textToCopy:`npm install najwer23morsels`},render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`8px 8px 8px 16px`,background:`#fff`,border:`1px solid #ddd`,borderRadius:`12px`},children:[(0,c.jsx)(`code`,{style:{fontSize:14},children:e.textToCopy}),(0,c.jsx)(a,{...e,height:`32px`,padding:`0 10px`})]})},h={args:{textToCopy:`Copied from the ButtonCopy story`},render:e=>{let[t,n]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,width:`320px`},children:[(0,c.jsx)(a,{...e,height:`36px`,padding:`0 12px`}),(0,c.jsx)(`input`,{value:t,onChange:e=>n(e.target.value),placeholder:`Click Copy, then paste here (Ctrl/Cmd + V)`,style:{height:36,padding:`0 10px`,boxSizing:`border-box`}})]})}},g=[`Default`,`CustomLabel`,`CustomSize`,`FullWidth`,`CodeSnippet`,`PasteToTest`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    textToCopy: 'npm install najwer23morsels'
  },
  render: args => <ButtonCopy {...args}>
      <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
        Copy command
      </TextBox>
    </ButtonCopy>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    height: '42px',
    width: '120px',
    padding: '0 12px'
  },
  render: args => <ButtonCopy {...args}>
      <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
        Copy
      </TextBox>
    </ButtonCopy>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    height: '42px',
    width: '100%',
    padding: '0 12px'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>],
  render: args => <ButtonCopy {...args}>
      <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
        Copy to clipboard
      </TextBox>
    </ButtonCopy>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
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
      <ButtonCopy {...args} height="32px" padding="0 10px" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    textToCopy: 'Copied from the ButtonCopy story'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '320px'
    }}>
        <ButtonCopy {...args} height="36px" padding="0 12px" />
        <input value={value} onChange={event => setValue(event.target.value)} placeholder="Click Copy, then paste here (Ctrl/Cmd + V)" style={{
        height: 36,
        padding: '0 10px',
        boxSizing: 'border-box'
      }} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as CodeSnippet,d as CustomLabel,f as CustomSize,u as Default,p as FullWidth,h as PasteToTest,g as __namedExportsOrder,l as default};