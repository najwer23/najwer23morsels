import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-CXAA5pxq.js";import{T as d}from"./TextBox-8nHxQ-pk.js";import{L as j}from"./Loader-wieurjYN.js";import"./preload-helper-PPVm8Dsz.js";const C="_n23mGridFlex_kujng_2",S="_n23mGridContainer_kujng_3",T="_n23mGridColumns_kujng_20",b={n23mGridFlex:C,n23mGridContainer:S,n23mGridColumns:T},r=({children:n,widthMin:o=0,widthMax:i=1920,padding:u="0",margin:x="auto",layout:t,gap:a,col:s,loading:g=!1,justifyContent:k,alignItems:G,minHeight:f,className:h,...y})=>{if(t==="container"||t==="flex")return e.jsxs("div",{className:[b["n23mGrid"+t.charAt(0).toUpperCase()+t.slice(1)],"n23mGrid"+t.charAt(0).toUpperCase()+t.slice(1),h].filter(Boolean).join(" "),style:{"--grid-mh":`${f}px`,"--grid-wMin":`${o}px`,"--grid-wMax":`${i}px`,"--grid-p":u,"--grid-m":x,"--grid-jc":k,"--grid-col-gap":a?.col||"0px","--grid-row-gap":a?.row||"0px","--grid-align-items":G},...y,children:[!g&&n,g&&e.jsx(j,{minHeight:f})]});if(!a||!s)throw new Error('When layout="columns", gap and col props are required');return e.jsx("div",{className:[b.n23mGridColumns,"n23mGridColumns",h].filter(Boolean).join(" "),style:{"--grid-col-mobile":s.mobile.toString(),"--grid-col-tablet":s.tablet.toString(),"--grid-col-small-desktop":s.smallDesktop.toString(),"--grid-col-desktop":s.desktop.toString(),"--grid-col-gap":a.col,"--grid-row-gap":a.row},...y,children:n})};r.displayName="Grid";r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},widthMin:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},widthMax:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1920",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'0'",computed:!1}},margin:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"Gap"},description:""},col:{required:!1,tsType:{name:"Col"},description:""},layout:{required:!0,tsType:{name:"union",raw:"'columns' | 'container' | 'flex'",elements:[{name:"literal",value:"'columns'"},{name:"literal",value:"'container'"},{name:"literal",value:"'flex'"}]},description:""},justifyContent:{required:!1,tsType:{name:"string"},description:""},alignItems:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Grid/Grid",component:r,parameters:{layout:"centered",docs:{description:{component:`
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/Grid';
\`\`\`
      `}}},tags:["autodocs"]},w="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",l={args:{layout:"container",widthMax:600,gap:{col:"20px",row:"20px"},padding:"10px"},render:n=>e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,children:e.jsx("div",{style:{border:"1px solid black",backgroundColor:"#f0f0f0"},children:e.jsx(d,{mobileSize:12,desktopSize:12,children:"Padding: 10px; max-width: 600px"})})})})},p={args:{layout:"container",widthMax:600,padding:"10px",minHeight:402},render:n=>{const[o,i]=v.useState(!0);return v.useEffect(()=>{const u=setInterval(()=>{i(x=>!x)},3e3);return()=>clearInterval(u)},[]),e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,loading:o,children:e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"#f0f0f0",border:"1px solid black"},children:[e.jsx(d,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(d,{mobileSize:12,desktopSize:12,children:"Padding: 10px; minHeight: 400px"})]})})})}},c={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"600px"},children:e.jsx(r,{...n,children:Array.from({length:9},(o,i)=>e.jsx("div",{children:e.jsx(d,{mobileSize:16,desktopSize:16,children:w})},i))})})},m={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{layout:"container",widthMax:400,padding:"0 10px 0 10px",children:e.jsx(r,{...n,children:Array.from({length:9},(o,i)=>e.jsx("div",{children:e.jsx(d,{mobileSize:16,desktopSize:16,children:w})},i))})})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '10px',
    minHeight: 402
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
}`,...m.parameters?.docs?.source}}};const L=["GridContainerWidthMax600","GridContainerLoading","GridColumns","GridContainerWithColumns"];export{c as GridColumns,p as GridContainerLoading,l as GridContainerWidthMax600,m as GridContainerWithColumns,L as __namedExportsOrder,I as default};
