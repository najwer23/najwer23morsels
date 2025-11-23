import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-71p0qQ0A.js";import{T as t}from"./TextBox-Diiw4o0R.js";import{G as r}from"./Grid-Dd59MJsE.js";import"./preload-helper-PPVm8Dsz.js";import"./getCssVariableStyle-DXeVW4yL.js";import"./Loader-o53on0nL.js";const k={title:"Grid/Grid",component:r,parameters:{layout:"centered",docs:{description:{component:`
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/grid';
\`\`\`
      `}}},tags:["autodocs"]},c="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",i={args:{layout:"container",widthMax:"600px",gap:{col:"20px",row:"20px"},padding:"10px"},render:n=>e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,children:e.jsx("div",{style:{border:"1px solid black",backgroundColor:"#f0f0f0"},children:e.jsx(t,{mobileSize:12,desktopSize:12,children:"Padding: 10px; max-width: 600px"})})})})},a={args:{layout:"container",widthMax:"600px",padding:"10px",minHeight:"402px"},render:n=>{const[l,o]=p.useState(!0);return p.useEffect(()=>{const x=setInterval(()=>{o(m=>!m)},3e3);return()=>clearInterval(x)},[]),e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,loading:l,children:e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"#f0f0f0",border:"1px solid black"},children:[e.jsx(t,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(t,{mobileSize:12,desktopSize:12,children:"Padding: 10px; minHeight: 400px"})]})})})}},d={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"600px"},children:e.jsx(r,{...n,children:Array.from({length:9},(l,o)=>e.jsx("div",{children:e.jsx(t,{mobileSize:16,desktopSize:16,children:c})},o))})})},s={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{layout:"container",widthMax:"400px",padding:"0 10px 0 10px",children:e.jsx(r,{...n,children:Array.from({length:9},(l,o)=>e.jsx("div",{children:e.jsx(t,{mobileSize:16,desktopSize:16,children:c})},o))})})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: '600px',
    gap: {
      col: '20px',
      row: '20px'
    },
    padding: '10px'
  },
  render: args => <div style={{
    width: '100vw',
    backgroundColor: '#f0f0f0'
  }}>
      <Grid {...args}>
        <div style={{
        border: '1px solid black',
        backgroundColor: '#f0f0f0'
      }}>
          <TextBox mobileSize={12} desktopSize={12}>
            Padding: 10px; max-width: 600px
          </TextBox>
        </div>
      </Grid>
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: '600px',
    padding: '10px',
    minHeight: '402px'
  },
  render: args => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const interval = setInterval(() => {
        setLoading(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    return <div style={{
      width: '100vw',
      backgroundColor: '#f0f0f0'
    }}>
        <Grid {...args} loading={loading}>
          <div style={{
          minHeight: '400px',
          backgroundColor: '#f0f0f0',
          border: '1px solid black'
        }}>
            <TextBox mobileSize={12} desktopSize={12}>
              max-width: 600px
            </TextBox>
            <TextBox mobileSize={12} desktopSize={12}>
              Padding: 10px; minHeight: 400px
            </TextBox>
          </div>
        </Grid>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    gap: {
      col: '20px',
      row: '20px'
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2
    }
  },
  render: args => <div style={{
    width: '600px'
  }}>
      <Grid {...args}>
        {Array.from({
        length: 9
      }, (_, i) => <div key={i}>
            <TextBox mobileSize={16} desktopSize={16}>
              {testText}
            </TextBox>
          </div>)}
      </Grid>
    </div>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    gap: {
      col: '20px',
      row: '20px'
    },
    col: {
      smallDesktop: 2,
      desktop: 2,
      mobile: 1,
      tablet: 2
    }
  },
  render: args => <div style={{
    width: '100vw'
  }}>
      <Grid layout="container" widthMax={'400px'} padding="0 10px 0 10px">
        <Grid {...args}>
          {Array.from({
          length: 9
        }, (_, i) => <div key={i}>
              <TextBox mobileSize={16} desktopSize={16}>
                {testText}
              </TextBox>
            </div>)}
        </Grid>
      </Grid>
    </div>
}`,...s.parameters?.docs?.source}}};const w=["GridContainerWidthMax600","GridContainerLoading","GridColumns","GridContainerWithColumns"];export{d as GridColumns,a as GridContainerLoading,i as GridContainerWidthMax600,s as GridContainerWithColumns,w as __namedExportsOrder,k as default};
