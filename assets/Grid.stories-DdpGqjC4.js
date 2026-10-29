import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-C8OfGSJE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Grid-BKvucNlj.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s=t(),i(),a(),c=n(),l={title:`Grid/Grid`,component:o,parameters:{layout:`centered`,docs:{description:{component:"\nThis is a grid component that can be used to create responsive layouts. It supports three layouts:\n\n- `container`: a centered box with max/min width, padding and margin\n- `flex`: a flex row/column with justify, align, wrap and gap\n- `columns`: a responsive column grid driven by `col`\n\nBreakpoints for `columns`: mobile < 768px, tablet >= 768px, smallDesktop >= 1200px, desktop >= 1600px. A missing breakpoint falls back to the next smaller one.\n\n```tsx\nimport { Grid } from 'najwer23morsels/lib/grid';\n```\n      "}}},tags:[`autodocs`]},u=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,d={border:`1px solid black`,backgroundColor:`#f0f0f0`,boxSizing:`border-box`,padding:`10px`},f=()=>{let[e,t]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setInterval(()=>t(e=>!e),3e3);return()=>clearInterval(e)},[]),e},p={args:{layout:`container`,widthMax:`600px`,gap:{col:`20px`,row:`20px`},padding:`10px`},render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,children:(0,c.jsx)(`div`,{style:{border:`1px solid black`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`Padding: 10px; max-width: 600px`})})})})},m={args:{layout:`container`,widthMax:`600px`,padding:`10px`,minHeight:`402px`},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,loading:t,children:(0,c.jsxs)(`div`,{style:{minHeight:`400px`,backgroundColor:`#f0f0f0`,border:`1px solid black`},children:[(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`max-width: 600px`}),(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`Padding: 10px; minHeight: 400px`})]})})})}},h={args:{layout:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:{col:`20px`,row:`20px`},padding:`10px`},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,children:[`One`,`Two`,`Three`].map(e=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,children:e})},e))})})},g={args:{layout:`flex`,padding:`10px`,minHeight:`150px`},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{width:`600px`,backgroundColor:`#f0f0f0`},children:(0,c.jsxs)(o,{...e,loading:t,children:[(0,c.jsx)(`div`,{style:d,children:`One`}),(0,c.jsx)(`div`,{style:d,children:`Two`})]})})}},_={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`},children:(0,c.jsx)(o,{...e,children:Array.from({length:9},(e,t)=>(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{mobileSize:16,desktopSize:16,children:u})},t))})})},v={args:{layout:`columns`,gap:{col:`16px`,row:`16px`},col:{mobile:1,desktop:4}},parameters:{layout:`fullscreen`,docs:{description:{story:"Only `mobile` and `desktop` are set. Tablet and smallDesktop fall back to `mobile`, so it jumps from 1 to 4 columns at 1600px."}}},render:e=>(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsx)(o,{...e,children:Array.from({length:8},(e,t)=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsxs)(r,{mobileSize:14,desktopSize:14,children:[`Item `,t+1]})},t))})})},y={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{mobile:1,tablet:2,smallDesktop:3,desktop:3},minHeight:`260px`,widthMax:`600px`},parameters:{docs:{description:{story:`The Loader fills the full width of the grid, not just one column.`}}},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{width:`100vw`},children:(0,c.jsx)(o,{...e,loading:t,children:Array.from({length:6},(e,t)=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsxs)(r,{mobileSize:14,desktopSize:14,children:[`Item `,t+1]})},t))})})}},b={args:{layout:`columns`,as:`ul`,gap:{col:`16px`,row:`16px`},col:{mobile:1,tablet:2,smallDesktop:3,desktop:3},style:{listStyle:`none`},padding:`0`,margin:`0`},parameters:{docs:{description:{story:"Rendered as `<ul>` with `<li>` children. The column width applies to every direct child."}}},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`},children:(0,c.jsx)(o,{...e,children:Array.from({length:6},(e,t)=>(0,c.jsx)(`li`,{style:d,children:(0,c.jsxs)(r,{mobileSize:14,desktopSize:14,children:[`List item `,t+1]})},t))})})},x={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`},children:(0,c.jsx)(o,{layout:`container`,widthMax:`400px`,padding:`0 10px 0 10px`,children:(0,c.jsx)(o,{...e,children:Array.from({length:9},(e,t)=>(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{mobileSize:16,desktopSize:16,children:u})},t))})})})},S=[`GridContainerWidthMax600`,`GridContainerLoading`,`GridFlex`,`GridFlexLoading`,`GridColumns`,`GridColumnsPartialBreakpoints`,`GridColumnsLoading`,`GridColumnsAsList`,`GridContainerWithColumns`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: '600px',
    padding: '10px',
    minHeight: '402px'
  },
  render: args => {
    const loading = useBlink();
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: {
      col: '20px',
      row: '20px'
    },
    padding: '10px'
  },
  render: args => <div style={{
    width: '600px',
    backgroundColor: '#f0f0f0'
  }}>
      <Grid {...args}>
        {['One', 'Two', 'Three'].map(label => <div key={label} style={box}>
            <TextBox mobileSize={14} desktopSize={14}>
              {label}
            </TextBox>
          </div>)}
      </Grid>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'flex',
    padding: '10px',
    minHeight: '150px'
  },
  render: args => {
    const loading = useBlink();
    return <div style={{
      width: '600px',
      backgroundColor: '#f0f0f0'
    }}>
        <Grid {...args} loading={loading}>
          <div style={box}>One</div>
          <div style={box}>Two</div>
        </Grid>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    gap: {
      col: '16px',
      row: '16px'
    },
    col: {
      mobile: 1,
      desktop: 4
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Only \`mobile\` and \`desktop\` are set. Tablet and smallDesktop fall back to \`mobile\`, so it jumps from 1 to 4 columns at 1600px.'
      }
    }
  },
  render: args => <div style={{
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      <Grid {...args}>
        {Array.from({
        length: 8
      }, (_, i) => <div key={i} style={box}>
            <TextBox mobileSize={14} desktopSize={14}>
              Item {i + 1}
            </TextBox>
          </div>)}
      </Grid>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    gap: {
      col: '20px',
      row: '20px'
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 3,
      desktop: 3
    },
    minHeight: '260px',
    widthMax: '600px'
  },
  parameters: {
    docs: {
      description: {
        story: 'The Loader fills the full width of the grid, not just one column.'
      }
    }
  },
  render: args => {
    const loading = useBlink();
    return <div style={{
      width: '100vw'
    }}>
        <Grid {...args} loading={loading}>
          {Array.from({
          length: 6
        }, (_, i) => <div key={i} style={box}>
              <TextBox mobileSize={14} desktopSize={14}>
                Item {i + 1}
              </TextBox>
            </div>)}
        </Grid>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    as: 'ul',
    gap: {
      col: '16px',
      row: '16px'
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 3,
      desktop: 3
    },
    style: {
      listStyle: 'none'
    },
    padding: '0',
    margin: '0'
  },
  parameters: {
    docs: {
      description: {
        story: 'Rendered as \`<ul>\` with \`<li>\` children. The column width applies to every direct child.'
      }
    }
  },
  render: args => <div style={{
    width: '600px'
  }}>
      <Grid {...args}>
        {Array.from({
        length: 6
      }, (_, i) => <li key={i} style={box}>
            <TextBox mobileSize={14} desktopSize={14}>
              List item {i + 1}
            </TextBox>
          </li>)}
      </Grid>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{_ as GridColumns,b as GridColumnsAsList,y as GridColumnsLoading,v as GridColumnsPartialBreakpoints,m as GridContainerLoading,p as GridContainerWidthMax600,x as GridContainerWithColumns,h as GridFlex,g as GridFlexLoading,S as __namedExportsOrder,l as default};