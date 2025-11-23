import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BKJq2Zu4.js";import{T as i}from"./TextBox-C2EOz3TH.js";import{B as a}from"./Button-CDsIcIol.js";import"./preload-helper-PPVm8Dsz.js";import"./getCssVariableStyle-DXeVW4yL.js";import"./Loader-CU1fxyJc.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,C={title:"Button/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`
This is a button component that can be used to trigger actions. It supports various properties such as background color, width, height, and more. You can also use it with loading states and disabled states.

You can import the Button component from the library and use it in your application as follows:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/button';
\`\`\`
      `}}},tags:["autodocs"]},e={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,borderColor:"black"},render:t=>o.jsx("div",{children:o.jsx(a,{onClick:s("button-click"),...t,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Button!"})})})},n={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,borderColor:"black"},render:t=>{const[l,c]=d.useState(!0);return d.useEffect(()=>{const u=setInterval(()=>{c(p=>!p)},3e3);return()=>clearInterval(u)},[]),o.jsx("div",{children:o.jsx(a,{onClick:s("button-click"),...t,loading:l,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Button!"})})})}},r={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,backgroundColorDisabled:"gray",borderColor:"black"},render:t=>o.jsx("div",{children:o.jsx(a,{onClick:s("button-click"),...t,disabled:!0,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,color:"white",children:"Button!"})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Default","ButtonLoading","ButtonDisabled"];export{r as ButtonDisabled,n as ButtonLoading,e as Default,v as __namedExportsOrder,C as default};
