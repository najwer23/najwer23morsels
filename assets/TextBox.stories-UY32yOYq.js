import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./TextBox-8nHxQ-pk.js";const p={title:"TextBox/TextBox",component:r,parameters:{layout:"centered",docs:{description:{component:`
This is a TextBox component that can be used to display text with various styles. It supports properties such as color, size, and link functionality. You can use it to create links or display static text.

You can import the TextBox component from the library and use it in your application as follows:
\`\`\`tsx
import { TextBox } from 'najwer23morsels/lib/TextBox';
\`\`\`
      `}}},tags:["autodocs"]},s="It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",n={args:{color:"grey",mobileSize:20,desktopSize:20,children:s},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})},t={args:{color:"green",colorHover:"orange",mobileSize:20,desktopSize:20,href:"/ksdjdkdj",children:s},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})},i={args:{color:"green",colorHover:"orange",mobileSize:20,desktopSize:20,href:"/ksdjdkdj",children:" "+s+" "},render:o=>e.jsxs("div",{children:[e.jsx(r,{mobileSize:20,desktopSize:20,tag:"span",children:s}),e.jsx(r,{...o}),e.jsx(r,{mobileSize:20,desktopSize:20,tag:"span",children:s})]})},d={args:{color:"red",colorHover:"orange",mobileSize:20,desktopSize:40,href:"/ksdjdkdj",children:s},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})},a={args:{color:"red",colorHover:"orange",mobileSize:40,desktopSize:20,href:"/ksdjdkdj",children:s},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    href: '/ksdjdkdj',
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    href: '/ksdjdkdj',
    children: ' ' + defaultText + ' '
  },
  render: args => <div>
      <TextBox mobileSize={20} desktopSize={20} tag="span">
        {defaultText}
      </TextBox>
      <TextBox {...args} />
      <TextBox mobileSize={20} desktopSize={20} tag="span">
        {defaultText}
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
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const x=["Default","Link","InlineLink","FluidMobile20Desktop40","FluidMobile40Desktop20"];export{n as Default,d as FluidMobile20Desktop40,a as FluidMobile40Desktop20,i as InlineLink,t as Link,x as __namedExportsOrder,p as default};
