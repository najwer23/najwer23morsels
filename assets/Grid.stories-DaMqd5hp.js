import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./TextBox-DhZTsRfC.js";import{L as k}from"./Loader-CdV_WFc2.js";import{r as y}from"./iframe-C8q0pwly.js";const G="_n23mGridContainer_1egx9_2",S="_n23mGridColumns_1egx9_11",v={n23mGridContainer:G,n23mGridColumns:S},r=({children:n,widthMin:i=0,widthMax:t=1920,padding:c="0",margin:m="auto",layout:w,gap:u,col:o,loading:x=!1,minHeight:g,className:f,...h})=>{if(w==="container")return e.jsxs("div",{className:[v.n23mGridContainer,"n23mGridContainer",f].filter(Boolean).join(" "),style:{"--grid-mh":`${g}px`,"--grid-wMin":`${i}px`,"--grid-wMax":`${t}px`,"--grid-p":c,"--grid-m":m},...h,children:[!x&&n,x&&e.jsx(k,{minHeight:g})]});if(!u||!o)throw new Error('When layout="columns", gap and col props are required');return e.jsx("div",{className:[v.n23mGridColumns,"n23mGridColumns",f].filter(Boolean).join(" "),style:{"--grid-col-mobile":o.mobile.toString(),"--grid-col-tablet":o.tablet.toString(),"--grid-col-small-desktop":o.smallDesktop.toString(),"--grid-col-desktop":o.desktop.toString(),"--grid-col-gap":u.col,"--grid-row-gap":u.row},...h,children:n})};r.displayName="Grid";r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},widthMin:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},widthMax:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1920",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'0'",computed:!1}},margin:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"Gap"},description:""},col:{required:!1,tsType:{name:"Col"},description:""},layout:{required:!0,tsType:{name:"union",raw:"'columns' | 'container'",elements:[{name:"literal",value:"'columns'"},{name:"literal",value:"'container'"}]},description:""}}};const _={title:"Grid/Grid",component:r,parameters:{layout:"centered",docs:{description:{component:`
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/Grid';
\`\`\`
      `}}},tags:["autodocs"]},b="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",s={args:{layout:"container",widthMax:600,gap:{col:"20px",row:"20px"},padding:"10px"},render:n=>e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,children:e.jsx("div",{style:{border:"1px solid black",backgroundColor:"#f0f0f0"},children:e.jsx(a,{mobileSize:12,desktopSize:12,children:"Padding: 10px; max-width: 600px"})})})})},d={args:{layout:"container",widthMax:600,padding:"10px",minHeight:400},render:n=>{const[i,t]=y.useState(!0);return y.useEffect(()=>{const c=setInterval(()=>{t(m=>!m)},3e3);return()=>clearInterval(c)},[]),e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,loading:i,children:e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"#f0f0f0",border:"1px solid black"},children:[e.jsx(a,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(a,{mobileSize:12,desktopSize:12,children:"Padding: 10px; minHeight: 400px"})]})})})}},l={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"600px"},children:e.jsx(r,{...n,children:Array.from({length:9},(i,t)=>e.jsx("div",{children:e.jsx(a,{mobileSize:16,desktopSize:16,children:b})},t))})})},p={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{layout:"container",widthMax:400,padding:"0 10px 0 10px",children:e.jsx(r,{...n,children:Array.from({length:9},(i,t)=>e.jsx("div",{children:e.jsx(a,{mobileSize:16,desktopSize:16,children:b})},t))})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '10px',
    minHeight: 400
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      <Grid layout="container" widthMax={400} padding="0 10px 0 10px">
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
}`,...p.parameters?.docs?.source}}};const B=["GridContainerWidthMax600","GridContainerLoading","GridColumns","GridContainerWithColumns"];export{l as GridColumns,d as GridContainerLoading,s as GridContainerWidthMax600,p as GridContainerWithColumns,B as __namedExportsOrder,_ as default};
