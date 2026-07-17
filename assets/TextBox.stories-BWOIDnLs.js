import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./TextBox-dcpHFZe3.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{r(),i=t(),a={title:`TextBox/TextBox`,component:n,parameters:{layout:`centered`,docs:{description:{component:`
This is a TextBox component that can be used to display text with various styles. It supports properties such as color, size, and link functionality. You can use it to create links or display static text.

You can import the TextBox component from the library and use it in your application as follows:
\`\`\`tsx
import { TextBox } from 'najwer23morsels/lib/TextBox';
\`\`\`
      `}}},tags:[`autodocs`]},o=`It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.`,s={args:{color:`grey`,mobileSize:20,desktopSize:20,children:o},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},c={args:{color:`green`,colorHover:`orange`,mobileSize:20,desktopSize:20,children:o,textWrap:`balance`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},l={args:{color:`green`,colorHover:`orange`,mobileSize:20,desktopSize:20,tag:`a`,href:`/ksdjdkdj`,children:o},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},u={args:{color:`green`,colorHover:`orange`,mobileSize:20,desktopSize:20,tag:`a`,href:`/ksdjdkdj`,children:o},render:e=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(n,{mobileSize:20,desktopSize:20,tag:`span`,children:o+` `}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{mobileSize:20,desktopSize:20,tag:`span`,children:` `+o})]})},d={args:{color:`red`,colorHover:`orange`,mobileSize:20,desktopSize:40,href:`/ksdjdkdj`,children:o},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},f={args:{color:`red`,colorHover:`orange`,mobileSize:40,desktopSize:20,href:`/ksdjdkdj`,children:o},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},p={args:{color:`grey`,mobileSize:20,desktopSize:20,fontWeight:700,children:o},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},m={args:{color:`blue`,colorHover:`purple`,mobileSize:20,desktopSize:20,tag:`a`,href:`/ksdjdkdj`,fontWeight:400,fontWeightHover:700,children:o},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},h={args:{color:`grey`,mobileSize:20,desktopSize:20,textAlign:`center`,children:o},render:e=>(0,i.jsx)(`div`,{style:{width:400},children:(0,i.jsx)(n,{...e})})},g={args:{color:`grey`,mobileSize:20,desktopSize:20,textAlign:`right`,children:o},render:e=>(0,i.jsx)(`div`,{style:{width:400},children:(0,i.jsx)(n,{...e})})},_={args:{color:`grey`,mobileSize:20,desktopSize:20,lineHeight:2,children:o},render:e=>(0,i.jsx)(`div`,{style:{width:400},children:(0,i.jsx)(n,{...e})})},v={args:{color:`grey`,mobileSize:20,desktopSize:20,margin:`40px 0`,children:o},render:e=>(0,i.jsx)(`div`,{style:{border:`1px dashed #ccc`},children:(0,i.jsx)(n,{...e})})},y={args:{color:`black`,mobileSize:28,desktopSize:48,tag:`h1`,fontWeight:800,textWrap:`balance`,children:`One does not simply walk into Mordor.`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},b={args:{color:`grey`,mobileSize:14,desktopSize:14,fontWeight:600,children:`You shall not pass!`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText,
    textWrap: 'balance'
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    tag: 'a',
    href: '/ksdjdkdj',
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    tag: 'a',
    href: '/ksdjdkdj',
    children: defaultText
  },
  render: args => <div>
      <TextBox mobileSize={20} desktopSize={20} tag="span">
        {defaultText + ' '}
      </TextBox>
      <TextBox {...args} />
      <TextBox mobileSize={20} desktopSize={20} tag="span">
        {' ' + defaultText}
      </TextBox>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 40,
    href: '/ksdjdkdj',
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    colorHover: 'orange',
    mobileSize: 40,
    desktopSize: 20,
    href: '/ksdjdkdj',
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    fontWeight: 700,
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    colorHover: 'purple',
    mobileSize: 20,
    desktopSize: 20,
    tag: 'a',
    href: '/ksdjdkdj',
    fontWeight: 400,
    fontWeightHover: 700,
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    textAlign: 'center',
    children: defaultText
  },
  render: args => <div style={{
    width: 400
  }}>
      <TextBox {...args} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    textAlign: 'right',
    children: defaultText
  },
  render: args => <div style={{
    width: 400
  }}>
      <TextBox {...args} />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    lineHeight: 2,
    children: defaultText
  },
  render: args => <div style={{
    width: 400
  }}>
      <TextBox {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    margin: '40px 0',
    children: defaultText
  },
  render: args => <div style={{
    border: '1px dashed #ccc'
  }}>
      <TextBox {...args} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'black',
    mobileSize: 28,
    desktopSize: 48,
    tag: 'h1',
    fontWeight: 800,
    textWrap: 'balance',
    children: 'One does not simply walk into Mordor.'
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 14,
    desktopSize: 14,
    fontWeight: 600,
    children: 'You shall not pass!'
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`TextWrapBalance`,`Link`,`InlineLink`,`FluidMobile20Desktop40`,`FluidMobile40Desktop20`,`Bold`,`FontWeightHover`,`CenteredText`,`RightAlignedText`,`LooseLineHeight`,`WithMargin`,`AsHeading`,`ShortLabel`]}))();export{y as AsHeading,p as Bold,h as CenteredText,s as Default,d as FluidMobile20Desktop40,f as FluidMobile40Desktop20,m as FontWeightHover,u as InlineLink,l as Link,_ as LooseLineHeight,g as RightAlignedText,b as ShortLabel,c as TextWrapBalance,v as WithMargin,x as __namedExportsOrder,a as default};