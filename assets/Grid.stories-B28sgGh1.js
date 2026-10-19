import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BIAw4ARS.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Grid-lq6VEQiv.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{s=t(),i(),a(),c=n(),l={title:`Grid/Grid`,component:o,parameters:{layout:`centered`,docs:{description:{component:`
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/grid';
\`\`\`
      `}}},tags:[`autodocs`]},u=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,d={args:{layout:`container`,widthMax:`600px`,gap:{col:`20px`,row:`20px`},padding:`10px`},render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,children:(0,c.jsx)(`div`,{style:{border:`1px solid black`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`Padding: 10px; max-width: 600px`})})})})},f={args:{layout:`container`,widthMax:`600px`,padding:`10px`,minHeight:`402px`},render:e=>{let[t,n]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,c.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,loading:t,children:(0,c.jsxs)(`div`,{style:{minHeight:`400px`,backgroundColor:`#f0f0f0`,border:`1px solid black`},children:[(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`max-width: 600px`}),(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`Padding: 10px; minHeight: 400px`})]})})})}},p={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`},children:(0,c.jsx)(o,{...e,children:Array.from({length:9},(e,t)=>(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{mobileSize:16,desktopSize:16,children:u})},t))})})},m={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`},children:(0,c.jsx)(o,{layout:`container`,widthMax:`400px`,padding:`0 10px 0 10px`,children:(0,c.jsx)(o,{...e,children:Array.from({length:9},(e,t)=>(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{mobileSize:16,desktopSize:16,children:u})},t))})})})},h=[`GridContainerWidthMax600`,`GridContainerLoading`,`GridColumns`,`GridContainerWithColumns`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as GridColumns,f as GridContainerLoading,d as GridContainerWidthMax600,m as GridContainerWithColumns,h as __namedExportsOrder,l as default};