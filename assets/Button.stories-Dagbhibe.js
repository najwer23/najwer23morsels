import{j as n,T as u}from"./TextBox-C8vlbGZ1.js";import{L as h}from"./Loader-DSpAFej6.js";import{r as x}from"./iframe-8eS4VcZU.js";const B="_najwer23morselsButtonContainer_6u491_2",k={najwer23morselsButtonContainer:B},e=({children:t,className:d,backgroundColor:c,padding:o,loading:r,height:a,width:p,backgroundColorDisabled:m,...b})=>n.jsxs("div",{className:["MorselsButtonWrapper",d].filter(Boolean).join(" "),children:[r&&n.jsx("div",{style:{width:p,height:a},children:n.jsx(h,{})}),!r&&n.jsx("button",{style:{...o!=null?{"--button-padding":o}:{},"--button-bg":c,"--button-height":a,"--button-width":p,"--button-bgDisabled":m},className:[k.najwer23morselsButtonContainer,"MorselsButton"].filter(Boolean).join(" "),...b,children:n.jsx("span",{children:t})})]});e.displayName="Button";e.__docgenInfo={description:"",methods:[],displayName:"Button"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,C={title:"Button/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0},render:t=>n.jsx("div",{children:n.jsx(e,{onClick:g("button-click"),...t,children:n.jsx(u,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})},i={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0},render:t=>{const d=()=>{const[c,o]=x.useState(!0);return x.useEffect(()=>{const r=setInterval(()=>{o(a=>!a)},5e3);return()=>clearInterval(r)},[]),n.jsx("div",{children:n.jsx(e,{onClick:g("button-click"),...t,loading:c,children:n.jsx(u,{mobileSize:25,desktopSize:25,margin:0,children:"Halo"})})})};return n.jsx(d,{})}},l={args:{type:"button",backgroundColor:"yellow",width:"300px",height:"90px",padding:0,backgroundColorDisabled:"gray"},render:t=>n.jsx("div",{children:n.jsx(e,{onClick:g("button-click"),...t,disabled:!0,children:n.jsx(u,{mobileSize:25,desktopSize:25,margin:0,color:"white",children:"Halo"})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const S=["Default","ButtonLoading","DuttonDisabled"];export{i as ButtonLoading,s as Default,l as DuttonDisabled,S as __namedExportsOrder,C as default};
