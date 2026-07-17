import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{D as n}from"./iframe-BJdIOcjo.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./TextBox-dcpHFZe3.js";import{n as o,t as s}from"./Button-CjA9nfq3.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{c=t(n(),1),a(),s(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Button/Button`,component:o,parameters:{layout:`centered`,docs:{description:{component:`
This is a button component that can be used to trigger actions. It supports various properties such as background color, width, height, and more. You can also use it with loading states and disabled states.

You can import the Button component from the library and use it in your application as follows:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/Button';
\`\`\`
      `}}},tags:[`autodocs`],args:{type:`button`,backgroundColor:`orangered`,width:`100px`,height:`40px`,borderColor:`black`,onClick:u(`button-click`)}},f={render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`Button!`})})})},p={args:{loaderMobileSize:14,loaderDesktopSize:14},render:e=>{let[t,n]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,loading:t,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`Button!`})})})}},m={args:{backgroundColorDisabled:`gray`,disabled:!0},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,margin:0,color:`white`,children:`Button!`})})})},h={args:{width:`60px`,height:`28px`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:12,desktopSize:12,color:`white`,children:`Small`})})})},g={args:{width:`200px`,height:`56px`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:18,desktopSize:18,color:`white`,children:`Large Button`})})})},_={args:{backgroundColor:`royalblue`,borderColor:`navy`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`Blue Button`})})})},v={args:{borderColor:`transparent`,backgroundColor:`seagreen`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`No Border`})})})},y={args:{style:{boxShadow:`0 4px 10px rgba(0,0,0,0.3)`}},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`Box Shadow`})})})},b={args:{type:`submit`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`Submit`})})})},x={args:{width:`100%`},decorators:[e=>(0,l.jsx)(`div`,{style:{width:`320px`},children:(0,l.jsx)(e,{})})],render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,children:(0,l.jsx)(i,{mobileSize:14,desktopSize:14,color:`white`,children:`Full Width`})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Button!
        </TextBox>
      </Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <div>
        <Button {...args} loading={loading}>
          <TextBox mobileSize={14} desktopSize={14} color="white">
            Button!
          </TextBox>
        </Button>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColorDisabled: 'gray',
    disabled: true
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} margin={0} color="white">
          Button!
        </TextBox>
      </Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    width: '60px',
    height: '28px'
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={12} desktopSize={12} color="white">
          Small
        </TextBox>
      </Button>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '56px'
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={18} desktopSize={18} color="white">
          Large Button
        </TextBox>
      </Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'royalblue',
    borderColor: 'navy'
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Blue Button
        </TextBox>
      </Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    borderColor: 'transparent',
    backgroundColor: 'seagreen'
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          No Border
        </TextBox>
      </Button>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Box Shadow
        </TextBox>
      </Button>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'submit'
  },
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Submit
        </TextBox>
      </Button>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>],
  render: args => <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Full Width
        </TextBox>
      </Button>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`ButtonLoading`,`ButtonDisabled`,`Small`,`Large`,`CustomColor`,`NoBorder`,`CustomStyleBoxShadow`,`SubmitType`,`FullWidth`]}))();export{m as ButtonDisabled,p as ButtonLoading,_ as CustomColor,y as CustomStyleBoxShadow,f as Default,x as FullWidth,g as Large,v as NoBorder,h as Small,b as SubmitType,S as __namedExportsOrder,d as default};