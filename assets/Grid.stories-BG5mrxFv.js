import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./TextBox-DUyBA2BJ.js";import{L as k}from"./Loader-DGIwYgTZ.js";import{r as v}from"./iframe-eZDaD0Js.js";const G="_n23mGridContainer_1egx9_2",S="_n23mGridColumns_1egx9_11",w={n23mGridContainer:G,n23mGridColumns:S},r=({children:n,widthMin:i=0,widthMax:t=1920,padding:m="0",margin:c="auto",layout:u,gap:g,col:o,loading:x=!1,minHeight:h,className:f,...y})=>{if(u==="container")return e.jsxs("div",{className:[w.n23mGridContainer,"n23mGridContainer",f].filter(Boolean).join(" "),style:{"--grid-mh":`${h}px`,"--grid-wMin":`${i}px`,"--grid-wMax":`${t}px`,"--grid-p":m,"--grid-m":c},...y,children:[!x&&n,x&&e.jsx(k,{minHeight:h})]});if(!g||!o)throw new Error('When layout="columns", gap and col props are required');return e.jsx("div",{className:[w.n23mGridColumns,"n23mGridColumns",f].filter(Boolean).join(" "),style:{"--grid-col-mobile":o.mobile.toString(),"--grid-col-tablet":o.tablet.toString(),"--grid-col-small-desktop":o.smallDesktop.toString(),"--grid-col-desktop":o.desktop.toString(),"--grid-col-gap":g.col,"--grid-row-gap":g.row},...y,children:n})};r.displayName="Grid";r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},widthMin:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},widthMax:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1920",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'0'",computed:!1}},margin:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"Gap"},description:""},col:{required:!1,tsType:{name:"Col"},description:""},layout:{required:!0,tsType:{name:"union",raw:"'columns' | 'container'",elements:[{name:"literal",value:"'columns'"},{name:"literal",value:"'container'"}]},description:""}}};const L={title:"Grid/Grid",component:r,parameters:{layout:"centered"},tags:["autodocs"]},b="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",s={args:{layout:"container",widthMax:600,gap:{col:"20px",row:"20px"},padding:"10px"},render:n=>e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,children:e.jsx("div",{style:{border:"1px solid black",backgroundColor:"#f0f0f0"},children:e.jsx(a,{mobileSize:12,desktopSize:12,children:"Padding: 10px; max-width: 600px"})})})})},d={args:{layout:"container",widthMax:600,padding:"10px",minHeight:400},render:n=>{const i=()=>{const[t,m]=v.useState(!0);return v.useEffect(()=>{const c=setInterval(()=>{m(u=>!u)},3e3);return()=>clearInterval(c)},[]),e.jsx("div",{style:{width:"100vw",backgroundColor:"#f0f0f0"},children:e.jsx(r,{...n,loading:t,children:e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"#f0f0f0"},children:[e.jsx(a,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(a,{mobileSize:12,desktopSize:12,children:"Padding: 10px; minHeight: 400px"})]})})})};return e.jsx(i,{})}},l={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{...n,children:Array.from({length:9},(i,t)=>e.jsx("div",{children:e.jsx(a,{mobileSize:16,desktopSize:16,children:b})},t))})})},p={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{layout:"container",widthMax:800,padding:"0 10px 0 10px",children:e.jsx(r,{...n,children:Array.from({length:9},(i,t)=>e.jsx("div",{children:e.jsx(a,{mobileSize:16,desktopSize:16,children:b})},t))})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    const LoadingToggle = () => {
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
            backgroundColor: '#f0f0f0'
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
    };
    return <LoadingToggle />;
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
    width: '100vw'
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
      <Grid layout="container" widthMax={800} padding="0 10px 0 10px">
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
}`,...p.parameters?.docs?.source}}};const _=["GridContainerWidthMax600","GridContainerLoading","GridColumns","GridContainerWithColumns"];export{l as GridColumns,d as GridContainerLoading,s as GridContainerWidthMax600,p as GridContainerWithColumns,_ as __namedExportsOrder,L as default};
