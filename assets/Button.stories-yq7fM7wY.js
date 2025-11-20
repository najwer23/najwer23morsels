import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-BpuQCVTh.js";import{T as i}from"./TextBox-C3BrBoH-.js";import{B as a}from"./Button-BN51EiPt.js";import"./preload-helper-PPVm8Dsz.js";import"./getCssVariableStyle-DXeVW4yL.js";import"./Loader-phbFZEZ_.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,C={title:"Button/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`
This is a button component that can be used to trigger actions. It supports various properties such as background color, width, height, and more. You can also use it with loading states and disabled states.

You can import the Button component from the library and use it in your application as follows:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/Button';
\`\`\`
      `}}},tags:["autodocs"]},e={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,borderColor:"black"},render:t=>o.jsx("div",{children:o.jsx(a,{onClick:s("button-click"),...t,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Hello!"})})})},r={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,borderColor:"black"},render:t=>{const[d,c]=l.useState(!0);return l.useEffect(()=>{const u=setInterval(()=>{c(p=>!p)},3e3);return()=>clearInterval(u)},[]),o.jsx("div",{children:o.jsx(a,{onClick:s("button-click"),...t,loading:d,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Hello!"})})})}},n={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,backgroundColorDisabled:"gray",borderColor:"black"},render:t=>o.jsx("div",{children:o.jsx(a,{onClick:s("button-click"),...t,disabled:!0,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,color:"white",children:"Hello!"})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          Hello!
        </TextBox>
      </Button>
    </div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
            Hello!
          </TextBox>
        </Button>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          Hello!
        </TextBox>
      </Button>
    </div>
}`,...n.parameters?.docs?.source}}};const v=["Default","ButtonLoading","ButtonDisabled"];export{n as ButtonDisabled,r as ButtonLoading,e as Default,v as __namedExportsOrder,C as default};
