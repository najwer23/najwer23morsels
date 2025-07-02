import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./TextBox-DUyBA2BJ.js";const l={title:"TextBox/TextBox",component:r,parameters:{layout:"centered",docs:{description:{component:`
This is a TextBox component that can be used to display text with various styles. It supports properties such as color, size, and link functionality. You can use it to create links or display static text.

You can import the TextBox component from the library and use it in your application as follows:
\`\`\`tsx
import { TextBox } from 'najwer23morsels/lib/TextBox';
\`\`\`
      `}}},tags:["autodocs"]},a="It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",s={args:{color:"grey",mobileSize:20,desktopSize:20,children:a},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})},n={args:{color:"green",colorHover:"orange",mobileSize:20,desktopSize:20,href:"/ksdjdkdj",children:a},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})},t={args:{color:"red",colorHover:"orange",mobileSize:20,desktopSize:40,href:"/ksdjdkdj",children:a},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})},d={args:{color:"red",colorHover:"orange",mobileSize:40,desktopSize:20,href:"/ksdjdkdj",children:a},render:o=>e.jsx("div",{children:e.jsx(r,{...o})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText
  },
  render: args => <div>
      <TextBox {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const p=["Default","Link","FluidMobile20Desktop40","FluidMobile40Desktop20"];export{s as Default,t as FluidMobile20Desktop40,d as FluidMobile40Desktop20,n as Link,p as __namedExportsOrder,l as default};
