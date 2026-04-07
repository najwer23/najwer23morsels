import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DbIWfbkc.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./textbox-BpKTJb_P.js";import{n as o,t as s}from"./Grid-CNmqcW6M.js";var c,l,u,d,f,p,m,h,g;t((()=>{c=e(n(),1),a(),o(),l=r(),u={title:`Grid/Grid`,component:s,parameters:{layout:`centered`,docs:{description:{component:`
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/grid';
\`\`\`
      `}}},tags:[`autodocs`]},d=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,f={args:{layout:`container`,widthMax:`600px`,gap:{col:`20px`,row:`20px`},padding:`10px`},render:e=>(0,l.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,l.jsx)(s,{...e,children:(0,l.jsx)(`div`,{style:{border:`1px solid black`,backgroundColor:`#f0f0f0`},children:(0,l.jsx)(i,{mobileSize:12,desktopSize:12,children:`Padding: 10px; max-width: 600px`})})})})},p={args:{layout:`container`,widthMax:`600px`,padding:`10px`,minHeight:`402px`},render:e=>{let[t,n]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let e=setInterval(()=>{n(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,l.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,l.jsx)(s,{...e,loading:t,children:(0,l.jsxs)(`div`,{style:{minHeight:`400px`,backgroundColor:`#f0f0f0`,border:`1px solid black`},children:[(0,l.jsx)(i,{mobileSize:12,desktopSize:12,children:`max-width: 600px`}),(0,l.jsx)(i,{mobileSize:12,desktopSize:12,children:`Padding: 10px; minHeight: 400px`})]})})})}},m={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:e=>(0,l.jsx)(`div`,{style:{width:`600px`},children:(0,l.jsx)(s,{...e,children:Array.from({length:9},(e,t)=>(0,l.jsx)(`div`,{children:(0,l.jsx)(i,{mobileSize:16,desktopSize:16,children:d})},t))})})},h={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:e=>(0,l.jsx)(`div`,{style:{width:`100vw`},children:(0,l.jsx)(s,{layout:`container`,widthMax:`400px`,padding:`0 10px 0 10px`,children:(0,l.jsx)(s,{...e,children:Array.from({length:9},(e,t)=>(0,l.jsx)(`div`,{children:(0,l.jsx)(i,{mobileSize:16,desktopSize:16,children:d})},t))})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`GridContainerWidthMax600`,`GridContainerLoading`,`GridColumns`,`GridContainerWithColumns`]}))();export{m as GridColumns,p as GridContainerLoading,f as GridContainerWidthMax600,h as GridContainerWithColumns,g as __namedExportsOrder,u as default};