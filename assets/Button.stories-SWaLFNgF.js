import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Button-DfwOYrk6.js";import{T as i}from"./TextBox-DUyBA2BJ.js";import{r as d}from"./iframe-BnnNmYfP.js";import"./Loader-DGIwYgTZ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,B={title:"Button/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,borderColor:"black"},render:e=>o.jsx("div",{children:o.jsx(a,{onClick:l("button-click"),...e,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})},n={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,borderColor:"black"},render:e=>{const s=()=>{const[c,g]=d.useState(!0);return d.useEffect(()=>{const u=setInterval(()=>{g(p=>!p)},3e3);return()=>clearInterval(u)},[]),o.jsx("div",{children:o.jsx(a,{onClick:l("button-click"),...e,loading:c,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})};return o.jsx(s,{})}},r={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,backgroundColorDisabled:"gray",borderColor:"black"},render:e=>o.jsx("div",{children:o.jsx(a,{onClick:l("button-click"),...e,disabled:!0,children:o.jsx(i,{mobileSize:25,desktopSize:25,margin:0,color:"white",children:"Halo"})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          Halo
        </TextBox>
      </Button>
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    borderColor: 'black'
  },
  render: args => {
    const LoadingToggle = () => {
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
    backgroundColorDisabled: 'gray',
    borderColor: 'black'
  },
  render: args => <div>
      <Button onClick={action('button-click')} {...args} disabled>
        <TextBox mobileSize={25} desktopSize={25} margin={0} color="white">
          Halo
        </TextBox>
      </Button>
    </div>
}`,...r.parameters?.docs?.source}}};const C=["Default","ButtonLoading","ButtonDisabled"];export{r as ButtonDisabled,n as ButtonLoading,t as Default,C as __namedExportsOrder,B as default};
