import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./textbox-D98-YxRJ.js";import{n as o,t as s}from"./button-XTq_5Em_.js";var c,l,u,d,f,p,m,h;t((()=>{c=e(n(),1),a(),s(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Button/Button`,component:o,parameters:{layout:`centered`,docs:{description:{component:`
This is a button component that can be used to trigger actions. It supports various properties such as background color, width, height, and more. You can also use it with loading states and disabled states.

You can import the Button component from the library and use it in your application as follows:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/button';
\`\`\`
      `}}},tags:[`autodocs`]},f={args:{type:`button`,backgroundColor:`yellow`,width:`300px`,height:`90px`,padding:0,borderColor:`black`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{onClick:u(`button-click`),...e,children:(0,l.jsx)(i,{mobileSize:25,desktopSize:25,margin:0,children:`Button!`})})})},p={args:{type:`button`,backgroundColor:`yellow`,width:`300px`,height:`90px`,padding:0,borderColor:`black`},render:e=>{let[t,n]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{onClick:u(`button-click`),...e,loading:t,children:(0,l.jsx)(i,{mobileSize:25,desktopSize:25,margin:0,children:`Button!`})})})}},m={args:{type:`button`,backgroundColor:`yellow`,width:`300px`,height:`90px`,padding:0,backgroundColorDisabled:`gray`,borderColor:`black`},render:e=>(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{onClick:u(`button-click`),...e,disabled:!0,children:(0,l.jsx)(i,{mobileSize:25,desktopSize:25,margin:0,color:`white`,children:`Button!`})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    borderColor: 'black'
  },
  render: args => <div>
      <Button onClick={action('button-click')} {...args}>
        <TextBox mobileSize={25} desktopSize={25} margin={0}>
          Button!
        </TextBox>
      </Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    borderColor: 'black'
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
        <Button onClick={action('button-click')} {...args} loading={loading}>
          <TextBox mobileSize={25} desktopSize={25} margin={0}>
            Button!
          </TextBox>
        </Button>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    backgroundColorDisabled: 'gray',
    borderColor: 'black'
  },
  render: args => <div>
      <Button onClick={action('button-click')} {...args} disabled>
        <TextBox mobileSize={25} desktopSize={25} margin={0} color="white">
          Button!
        </TextBox>
      </Button>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`ButtonLoading`,`ButtonDisabled`]}))();export{m as ButtonDisabled,p as ButtonLoading,f as Default,h as __namedExportsOrder,d as default};