import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-CRLBbyvq.js";import{T as d}from"./TextBox-C3BrBoH-.js";import{L as T}from"./Loader-CpXYaNvj.js";import{g as j}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const z="_n23mGridFlex_w0nce_2",_="_n23mGridContainer_w0nce_3",q="_n23mGridColumns_w0nce_21",w={n23mGridFlex:z,n23mGridContainer:_,n23mGridColumns:q},n=({children:r,widthMin:o="0px",widthMax:i="1920px",padding:u="0px",margin:x="auto",layout:t,gap:a,col:s,loading:g=!1,justifyContent:k,alignItems:G,minHeight:f,flexWrap:S,className:h,style:C,...y})=>{if(t==="container"||t==="flex")return e.jsxs("div",{className:[w["n23mGrid"+t.charAt(0).toUpperCase()+t.slice(1)],"n23mGrid"+t.charAt(0).toUpperCase()+t.slice(1),h].filter(Boolean).join(" "),style:{...j({"--grid-p":u,"--grid-m":x,"--grid-jc":k,"--grid-col-gap":a?.col,"--grid-row-gap":a?.row,"--grid-align-items":G,"--grid-fw":S,"--grid-mh":f,"--grid-wMin":o,"--grid-wMax":i}),...C},...y,children:[!g&&r,g&&e.jsx(T,{minHeight:`${f}`})]});if(!a||!s)throw new Error('When layout="columns", gap and col props are required');return e.jsx("div",{className:[w.n23mGridColumns,"n23mGridColumns",h].filter(Boolean).join(" "),style:{"--grid-col-mobile":s.mobile.toString(),"--grid-col-tablet":s.tablet.toString(),"--grid-col-small-desktop":s.smallDesktop.toString(),"--grid-col-desktop":s.desktop.toString(),"--grid-col-gap":a.col,"--grid-row-gap":a.row},...y,children:r})};n.displayName="Grid";n.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},widthMin:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0px'",computed:!1}},widthMax:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1920px'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'0px'",computed:!1}},margin:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},minHeight:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"Gap"},description:""},col:{required:!1,tsType:{name:"Col"},description:""},layout:{required:!0,tsType:{name:"union",raw:"'columns' | 'container' | 'flex'",elements:[{name:"literal",value:"'columns'"},{name:"literal",value:"'container'"},{name:"literal",value:"'flex'"}]},description:""},justifyContent:{required:!1,tsType:{name:"string"},description:""},alignItems:{required:!1,tsType:{name:"string"},description:""},flexWrap:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const A={title:"Grid/Grid",component:n,parameters:{layout:"centered",docs:{description:{component:`
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/Grid';
\`\`\`
      `}}},tags:["autodocs"]},b="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",l={args:{layout:"container",widthMax:"600px",gap:{col:"20px",row:"20px"},padding:"10px"},render:r=>e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(n,{...r,children:e.jsx("div",{style:{border:"1px solid black",backgroundColor:"#f0f0f0"},children:e.jsx(d,{mobileSize:12,desktopSize:12,children:"Padding: 10px; max-width: 600px"})})})})},p={args:{layout:"container",widthMax:"600px",padding:"10px",minHeight:"402px"},render:r=>{const[o,i]=v.useState(!0);return v.useEffect(()=>{const u=setInterval(()=>{i(x=>!x)},3e3);return()=>clearInterval(u)},[]),e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(n,{...r,loading:o,children:e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"#f0f0f0",border:"1px solid black"},children:[e.jsx(d,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(d,{mobileSize:12,desktopSize:12,children:"Padding: 10px; minHeight: 400px"})]})})})}},c={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:r=>e.jsx("div",{style:{width:"600px"},children:e.jsx(n,{...r,children:Array.from({length:9},(o,i)=>e.jsx("div",{children:e.jsx(d,{mobileSize:16,desktopSize:16,children:b})},i))})})},m={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:r=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(n,{layout:"container",widthMax:"400px",padding:"0 10px 0 10px",children:e.jsx(n,{...r,children:Array.from({length:9},(o,i)=>e.jsx("div",{children:e.jsx(d,{mobileSize:16,desktopSize:16,children:b})},i))})})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const E=["GridContainerWidthMax600","GridContainerLoading","GridColumns","GridContainerWithColumns"];export{c as GridColumns,p as GridContainerLoading,l as GridContainerWidthMax600,m as GridContainerWithColumns,E as __namedExportsOrder,A as default};
