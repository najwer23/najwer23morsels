import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Button-Cr_pwSk9.js";import{T as i}from"./TextBox-DnrhPsKE.js";import{r as d}from"./iframe-KjR9FJeL.js";import"./Loader-266W59Xy.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,B={title:"Button/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0},render:t=>e.jsx("div",{children:e.jsx(a,{onClick:s("button-click"),...t,children:e.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})},n={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0},render:t=>{const l=()=>{const[c,g]=d.useState(!0);return d.useEffect(()=>{const u=setInterval(()=>{g(p=>!p)},5e3);return()=>clearInterval(u)},[]),e.jsx("div",{children:e.jsx(a,{onClick:s("button-click"),...t,loading:c,children:e.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})};return e.jsx(l,{})}},r={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,backgroundColorDisabled:"gray"},render:t=>e.jsx("div",{children:e.jsx(a,{onClick:s("button-click"),...t,disabled:!0,children:e.jsx(i,{mobileSize:25,desktopSize:25,margin:0,color:"white",children:"Halo"})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0
  },
  render: args => <div>
      <Button onClick={action('button-click')} {...args}>
        <TextBox mobileSize={25} desktopSize={25} margin={0}>
          Halo
        </TextBox>
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0
  },
  render: args => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const interval = setInterval(() => {
          setLoading(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
      return <div>
          <Button onClick={action('button-click')} {...args} loading={loading}>
            <TextBox mobileSize={25} desktopSize={25} margin={0}>
              Halo
            </TextBox>
          </Button>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    backgroundColorDisabled: 'gray'
  },
  render: args => <div>
      <Button onClick={action('button-click')} {...args} disabled>
        <TextBox mobileSize={25} desktopSize={25} margin={0} color="white">
          Halo
        </TextBox>
      </Button>
    </div>
}`,...r.parameters?.docs?.source}}};const S=["Default","ButtonLoading","ButtonDisabled"];export{r as ButtonDisabled,n as ButtonLoading,o as Default,S as __namedExportsOrder,B as default};
