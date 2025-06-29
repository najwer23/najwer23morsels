import{j as n,T as i}from"./TextBox-C8vlbGZ1.js";import{B as a}from"./Button-Bhy2YU9A.js";import{r as d}from"./iframe-7s9yo48y.js";import"./Loader-DSpAFej6.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,k={title:"Button/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0},render:e=>n.jsx("div",{children:n.jsx(a,{onClick:s("button-click"),...e,children:n.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})},o={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0},render:e=>{const l=()=>{const[c,g]=d.useState(!0);return d.useEffect(()=>{const u=setInterval(()=>{g(p=>!p)},5e3);return()=>clearInterval(u)},[]),n.jsx("div",{children:n.jsx(a,{onClick:s("button-click"),...e,loading:c,children:n.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})};return n.jsx(l,{})}},r={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,backgroundColorDisabled:"gray"},render:e=>n.jsx("div",{children:n.jsx(a,{onClick:s("button-click"),...e,disabled:!0,children:n.jsx(i,{mobileSize:25,desktopSize:25,margin:0,color:"white",children:"Halo"})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        <TextBox mobileSize={25} desktopSize={25} margin={0} color='white'>
          Halo
        </TextBox>
      </Button>
    </div>
}`,...r.parameters?.docs?.source}}};const B=["Default","ButtonLoading","DuttonDisabled"];export{o as ButtonLoading,t as Default,r as DuttonDisabled,B as __namedExportsOrder,k as default};
