import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-CjNM3IiQ.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-BwXi1IsL.js";import{n as a,t as o}from"./Grid-BYPgDCzw.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{s=t(),i(),a(),c=n(),l={title:`Grid/Grid`,component:o,parameters:{layout:`centered`,docs:{description:{component:"\nThis is a grid component that can be used to create responsive layouts. It supports four layouts:\n\n- `container`: a centered box with max/min width, padding and margin\n- `flex`: a flex row/column with justify, align, wrap and gap\n- `columns`: a responsive column grid driven by `col` (equal columns)\n- `split`: a responsive grid driven by `split` (custom track widths per breakpoint, e.g. fixed + fluid)\n\nBreakpoints for `columns` and `split`: mobile < 768px, tablet >= 768px, smallDesktop >= 1200px, desktop >= 1600px. A missing breakpoint falls back to the next smaller one.\n\n`split` accepts a single track (`'1fr'` = stacked) or a `[first, second]` tuple per breakpoint. Any CSS track size works: `400px`, `1fr`, `30%`, `minmax(0, 2fr)`.\n\n```tsx\nimport { Grid } from 'najwer23morsels/lib/grid';\n```\n      "}}},tags:[`autodocs`]},u=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,d={border:`1px solid black`,backgroundColor:`#f0f0f0`,boxSizing:`border-box`,padding:`10px`},f=()=>{let[e,t]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setInterval(()=>t(e=>!e),3e3);return()=>clearInterval(e)},[]),e},p={args:{layout:`container`,widthMax:`600px`,gap:{col:`20px`,row:`20px`},padding:`10px`},render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,children:(0,c.jsx)(`div`,{style:{border:`1px solid black`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`Padding: 10px; max-width: 600px`})})})})},m={args:{layout:`container`,widthMax:`600px`,padding:`10px`,minHeight:`402px`},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{width:`100vw`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,loading:t,children:(0,c.jsxs)(`div`,{style:{minHeight:`400px`,backgroundColor:`#f0f0f0`,border:`1px solid black`},children:[(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`max-width: 600px`}),(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:`Padding: 10px; minHeight: 400px`})]})})})}},h={args:{layout:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:{col:`20px`,row:`20px`},padding:`10px`},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`,backgroundColor:`#f0f0f0`},children:(0,c.jsx)(o,{...e,children:[`One`,`Two`,`Three`].map(e=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsx)(r,{mobileSize:14,desktopSize:14,children:e})},e))})})},g={args:{layout:`flex`,padding:`10px`,minHeight:`150px`},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{width:`600px`,backgroundColor:`#f0f0f0`},children:(0,c.jsxs)(o,{...e,loading:t,children:[(0,c.jsx)(`div`,{style:d,children:`One`}),(0,c.jsx)(`div`,{style:d,children:`Two`})]})})}},_={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`},children:(0,c.jsx)(o,{...e,children:Array.from({length:9},(e,t)=>(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{mobileSize:16,desktopSize:16,children:u})},t))})})},v={args:{layout:`columns`,gap:{col:`16px`,row:`16px`},col:{mobile:1,desktop:4}},parameters:{layout:`fullscreen`,docs:{description:{story:"Only `mobile` and `desktop` are set. Tablet and smallDesktop fall back to `mobile`, so it jumps from 1 to 4 columns at 1600px."}}},render:e=>(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsx)(o,{...e,children:Array.from({length:8},(e,t)=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsxs)(r,{mobileSize:14,desktopSize:14,children:[`Item `,t+1]})},t))})})},y={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{mobile:1,tablet:2,smallDesktop:3,desktop:3},minHeight:`260px`,widthMax:`600px`},parameters:{docs:{description:{story:`The Loader fills the full width of the grid, not just one column.`}}},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{width:`100vw`},children:(0,c.jsx)(o,{...e,loading:t,children:Array.from({length:6},(e,t)=>(0,c.jsx)(`div`,{style:d,children:(0,c.jsxs)(r,{mobileSize:14,desktopSize:14,children:[`Item `,t+1]})},t))})})}},b={args:{layout:`columns`,as:`ul`,gap:{col:`16px`,row:`16px`},col:{mobile:1,tablet:2,smallDesktop:3,desktop:3},style:{listStyle:`none`},padding:`0`,margin:`0`},parameters:{docs:{description:{story:"Rendered as `<ul>` with `<li>` children. The column width applies to every direct child."}}},render:e=>(0,c.jsx)(`div`,{style:{width:`600px`},children:(0,c.jsx)(o,{...e,children:Array.from({length:6},(e,t)=>(0,c.jsx)(`li`,{style:d,children:(0,c.jsxs)(r,{mobileSize:14,desktopSize:14,children:[`List item `,t+1]})},t))})})},x=({label:e,text:t})=>(0,c.jsx)(o,{layout:`container`,widthMax:`100%`,margin:0,padding:`0`,children:(0,c.jsxs)(`div`,{style:d,children:[(0,c.jsx)(r,{mobileSize:14,desktopSize:14,children:e}),t&&(0,c.jsx)(r,{mobileSize:12,desktopSize:12,children:t})]})}),S={args:{layout:`split`,widthMax:`100%`,gap:{col:`20px`,row:`20px`},split:{mobile:`1fr`,tablet:[`400px`,`1fr`]}},parameters:{layout:`fullscreen`,docs:{description:{story:`Stacked below 768px. From 768px up: a fixed 400px column next to a fluid one. Resize the viewport to see the switch.`}}},render:e=>(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(x,{label:`400px (fixed)`}),(0,c.jsx)(x,{label:`1fr (fluid)`,text:u})]})})},C={args:{layout:`split`,widthMax:`100%`,gap:{col:`20px`,row:`20px`},split:{mobile:`1fr`,tablet:[`240px`,`1fr`],smallDesktop:[`320px`,`1fr`],desktop:[`minmax(0, 3fr)`,`minmax(0, 7fr)`]}},parameters:{layout:`fullscreen`,docs:{description:{story:"tablet: 240px + 1fr, smallDesktop: 320px + 1fr, desktop: 30% / 70% (as `fr` so the gap does not cause overflow)."}}},render:e=>(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(x,{label:`Left`,text:u}),(0,c.jsx)(x,{label:`Right`,text:u})]})})},w={args:{layout:`split`,widthMax:`100%`,gap:{col:`16px`,row:`16px`},split:{mobile:`1fr`,smallDesktop:[`1fr`,`2fr`]}},parameters:{layout:`fullscreen`,docs:{description:{story:"Only `mobile` and `smallDesktop` are set. Tablet falls back to `mobile` (stacked), then it becomes 1fr / 2fr at 1200px."}}},render:e=>(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(x,{label:`1fr`}),(0,c.jsx)(x,{label:`2fr`})]})})},T={args:{layout:`split`,widthMax:`100%`,alignItems:`start`,gap:{col:`20px`,row:`20px`},split:{mobile:`1fr`,tablet:[`300px`,`1fr`]}},parameters:{layout:`fullscreen`,docs:{description:{story:'Default `alignItems` is `stretch` (equal heights). Here `alignItems="start"` keeps each column at its natural height.'}}},render:e=>(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(x,{label:`Short`}),(0,c.jsx)(x,{label:`Long`,text:u+` `+u})]})})},E={args:{layout:`split`,widthMax:`100%`,gap:{col:`20px`,row:`20px`},split:{mobile:`1fr`,tablet:[`300px`,`1fr`]},minHeight:`100px`},parameters:{layout:`fullscreen`,docs:{description:{story:`The Loader spans both columns, not just the first track.`}}},render:e=>{let t=f();return(0,c.jsx)(`div`,{style:{padding:`16px`,boxSizing:`border-box`},children:(0,c.jsxs)(o,{...e,loading:t,children:[(0,c.jsx)(x,{label:`Left`}),(0,c.jsx)(x,{label:`Right`})]})})}},D={args:{layout:`columns`,gap:{col:`20px`,row:`20px`},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:e=>(0,c.jsx)(`div`,{style:{width:`100vw`},children:(0,c.jsx)(o,{layout:`container`,widthMax:`400px`,padding:`0 10px 0 10px`,children:(0,c.jsx)(o,{...e,children:Array.from({length:9},(e,t)=>(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{mobileSize:16,desktopSize:16,children:u})},t))})})})},O={args:{layout:`split`,widthMax:`100%`,gap:{col:`20px`,row:`20px`},split:{mobile:`1fr`,tablet:[`200px`,`1fr`]}},parameters:{layout:`fullscreen`,docs:{description:{story:`A split grid nested in a centered container with a max width of 900px.`}}},render:e=>(0,c.jsx)(`div`,{style:{width:`100%`},children:(0,c.jsx)(o,{layout:`container`,widthMax:`900px`,padding:`0 10px`,children:(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(x,{label:`Sidebar (200px)`}),(0,c.jsx)(x,{label:`Content (1fr)`,text:u})]})})})},k=[`GridContainerWidthMax600`,`GridContainerLoading`,`GridFlex`,`GridFlexLoading`,`GridColumns`,`GridColumnsPartialBreakpoints`,`GridColumnsLoading`,`GridColumnsAsList`,`GridSplitFixedAndFluid`,`GridSplitDifferentWidthPerBreakpoint`,`GridSplitPartialBreakpoints`,`GridSplitAlignStart`,`GridSplitLoading`,`GridContainerWithColumns`,`GridContainerWithSplit`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: {
      col: '20px',
      row: '20px'
    },
    split: {
      mobile: '1fr',
      tablet: ['400px', '1fr']
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Stacked below 768px. From 768px up: a fixed 400px column next to a fluid one. Resize the viewport to see the switch.'
      }
    }
  },
  render: args => <div style={{
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      <Grid {...args}>
        <SplitChild label="400px (fixed)" />
        <SplitChild label="1fr (fluid)" text={testText} />
      </Grid>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: {
      col: '20px',
      row: '20px'
    },
    split: {
      mobile: '1fr',
      tablet: ['240px', '1fr'],
      smallDesktop: ['320px', '1fr'],
      desktop: ['minmax(0, 3fr)', 'minmax(0, 7fr)']
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'tablet: 240px + 1fr, smallDesktop: 320px + 1fr, desktop: 30% / 70% (as \`fr\` so the gap does not cause overflow).'
      }
    }
  },
  render: args => <div style={{
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      <Grid {...args}>
        <SplitChild label="Left" text={testText} />
        <SplitChild label="Right" text={testText} />
      </Grid>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: {
      col: '16px',
      row: '16px'
    },
    split: {
      mobile: '1fr',
      smallDesktop: ['1fr', '2fr']
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Only \`mobile\` and \`smallDesktop\` are set. Tablet falls back to \`mobile\` (stacked), then it becomes 1fr / 2fr at 1200px.'
      }
    }
  },
  render: args => <div style={{
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      <Grid {...args}>
        <SplitChild label="1fr" />
        <SplitChild label="2fr" />
      </Grid>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    widthMax: '100%',
    alignItems: 'start',
    gap: {
      col: '20px',
      row: '20px'
    },
    split: {
      mobile: '1fr',
      tablet: ['300px', '1fr']
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default \`alignItems\` is \`stretch\` (equal heights). Here \`alignItems="start"\` keeps each column at its natural height.'
      }
    }
  },
  render: args => <div style={{
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      <Grid {...args}>
        <SplitChild label="Short" />
        <SplitChild label="Long" text={testText + ' ' + testText} />
      </Grid>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: {
      col: '20px',
      row: '20px'
    },
    split: {
      mobile: '1fr',
      tablet: ['300px', '1fr']
    },
    minHeight: '100px'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'The Loader spans both columns, not just the first track.'
      }
    }
  },
  render: args => {
    const loading = useBlink();
    return <div style={{
      padding: '16px',
      boxSizing: 'border-box'
    }}>
        <Grid {...args} loading={loading}>
          <SplitChild label="Left" />
          <SplitChild label="Right" />
        </Grid>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: {
      col: '20px',
      row: '20px'
    },
    split: {
      mobile: '1fr',
      tablet: ['200px', '1fr']
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A split grid nested in a centered container with a max width of 900px.'
      }
    }
  },
  render: args => <div style={{
    width: '100%'
  }}>
      <Grid layout="container" widthMax="900px" padding="0 10px">
        <Grid {...args}>
          <SplitChild label="Sidebar (200px)" />
          <SplitChild label="Content (1fr)" text={testText} />
        </Grid>
      </Grid>
    </div>
}`,...O.parameters?.docs?.source}}}})))()}A();export{_ as GridColumns,b as GridColumnsAsList,y as GridColumnsLoading,v as GridColumnsPartialBreakpoints,m as GridContainerLoading,p as GridContainerWidthMax600,D as GridContainerWithColumns,O as GridContainerWithSplit,h as GridFlex,g as GridFlexLoading,T as GridSplitAlignStart,C as GridSplitDifferentWidthPerBreakpoint,S as GridSplitFixedAndFluid,E as GridSplitLoading,w as GridSplitPartialBreakpoints,k as __namedExportsOrder,l as default};