import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as o}from"./TextBox-C2EOz3TH.js";import"./iframe-BKJq2Zu4.js";import"./preload-helper-PPVm8Dsz.js";import"./getCssVariableStyle-DXeVW4yL.js";const u={title:"TextBox/TextBox",component:o,parameters:{layout:"centered",docs:{description:{component:`
This is a TextBox component that can be used to display text with various styles. It supports properties such as color, size, and link functionality. You can use it to create links or display static text.

You can import the TextBox component from the library and use it in your application as follows:
\`\`\`tsx
import { TextBox } from 'najwer23morsels/lib/textbox';
\`\`\`
      `}}},tags:["autodocs"]},s="It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",n={args:{color:"grey",mobileSize:20,desktopSize:20,children:s},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})},t={args:{color:"green",colorHover:"orange",mobileSize:20,desktopSize:20,children:s,textWrap:"balance"},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})},a={args:{color:"green",mobileSize:20,desktopSize:20,children:s},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})},i={args:{color:"green",colorHover:"orange",mobileSize:20,desktopSize:20,tag:"a",href:"/ksdjdkdj",children:s},render:r=>e.jsxs("div",{children:[e.jsx(o,{mobileSize:20,desktopSize:20,tag:"span",children:s+" "}),e.jsx(o,{...r}),e.jsx(o,{mobileSize:20,desktopSize:20,tag:"span",children:" "+s})]})},d={args:{color:"red",colorHover:"orange",mobileSize:20,desktopSize:40,href:"/ksdjdkdj",children:s},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})},c={args:{color:"red",colorHover:"orange",mobileSize:40,desktopSize:20,href:"/ksdjdkdj",children:s},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const k=["Default","TextWrapBalance","Link","InlineLink","FluidMobile20Desktop40","FluidMobile40Desktop20"];export{n as Default,d as FluidMobile20Desktop40,c as FluidMobile40Desktop20,i as InlineLink,a as Link,t as TextWrapBalance,k as __namedExportsOrder,u as default};
