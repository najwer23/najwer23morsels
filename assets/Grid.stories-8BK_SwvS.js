import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as i}from"./TextBox-DnrhPsKE.js";import{L as G}from"./Loader-266W59Xy.js";import{r as f}from"./iframe-D-UPLJb1.js";const b="_najwer23morselsGridContainer_znknz_2",j="_najwer23morselsGridColumns_znknz_11",S={najwer23morselsGridContainer:b,najwer23morselsGridColumns:j},r=({children:n,widthMin:a=0,widthMax:t=1920,padding:c="0",margin:x="auto",layout:u,gap:g,col:s,loading:h=!1,minHeight:w,className:y,...v})=>{if(u==="container")return e.jsxs("div",{className:[S.najwer23morselsGridContainer,"MorselsGridContainer",y].filter(Boolean).join(" "),style:{"--grid-mh":`${w}px`,"--grid-wMin":`${a}px`,"--grid-wMax":`${t}px`,"--grid-p":c,"--grid-m":x},...v,children:[!h&&n,h&&e.jsx(G,{minHeight:w})]});if(!g||!s)throw new Error('When layout="columns", gap and col props are required');return e.jsx("div",{className:[S.najwer23morselsGridColumns,"MorselsGridColumns",y].filter(Boolean).join(" "),style:{"--grid-col-mobile":s.mobile.toString(),"--grid-col-tablet":s.tablet.toString(),"--grid-col-small-desktop":s.smallDesktop.toString(),"--grid-col-desktop":s.desktop.toString(),"--grid-col-gap":g.col,"--grid-row-gap":g.row},...v,children:n})};r.displayName="Grid";r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},widthMin:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},widthMax:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1920",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'0'",computed:!1}},margin:{required:!1,tsType:{name:"union",raw:"string | 0",elements:[{name:"string"},{name:"literal",value:"0"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"Gap"},description:""},col:{required:!1,tsType:{name:"Col"},description:""},layout:{required:!0,tsType:{name:"union",raw:"'columns' | 'container'",elements:[{name:"literal",value:"'columns'"},{name:"literal",value:"'container'"}]},description:""}}};const M={title:"Grid/Grid",component:r,parameters:{layout:"centered"},tags:["autodocs"]},k="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",o={args:{layout:"container",widthMax:600,padding:"0 10px 0 10px"},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsxs(r,{...n,children:[e.jsx(i,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(i,{mobileSize:12,desktopSize:12,children:"Padding: 0 10px 0 10px;"})]})})},d={args:{layout:"container",widthMax:600,padding:"0 10px 0 10px",minHeight:600},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsxs(r,{...n,children:[e.jsx(i,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(i,{mobileSize:12,desktopSize:12,children:"Padding: 0 10px 0 10px;"})]})})},l={args:{layout:"container",widthMax:600,padding:"0 10px 0 10px",minHeight:400},render:n=>{const a=()=>{const[t,c]=f.useState(!0);return f.useEffect(()=>{const x=setInterval(()=>{c(u=>!u)},5e3);return()=>clearInterval(x)},[]),e.jsx("div",{style:{width:"100vw"},children:e.jsxs(r,{...n,loading:t,children:[e.jsx(i,{mobileSize:12,desktopSize:12,children:"max-width: 600px"}),e.jsx(i,{mobileSize:12,desktopSize:12,children:"Padding: 0 10px 0 10px;"})]})})};return e.jsx(a,{})}},p={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{...n,children:Array.from({length:9},(a,t)=>e.jsx("div",{children:e.jsx(i,{mobileSize:12,desktopSize:12,children:k})},t))})})},m={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:n=>e.jsx("div",{style:{width:"100vw"},children:e.jsx(r,{layout:"container",widthMax:800,padding:"0 10px 0 10px",children:e.jsx(r,{...n,children:Array.from({length:9},(a,t)=>e.jsx("div",{children:e.jsx(i,{mobileSize:12,desktopSize:12,children:k})},t))})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px'
  },
  render: args => <div style={{
    width: '100vw'
  }}>
      <Grid {...args}>
        <TextBox mobileSize={12} desktopSize={12}>
          max-width: 600px
        </TextBox>
        <TextBox mobileSize={12} desktopSize={12}>
          Padding: 0 10px 0 10px;
        </TextBox>
      </Grid>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px',
    minHeight: 600
  },
  render: args => <div style={{
    width: '100vw'
  }}>
      <Grid {...args}>
        <TextBox mobileSize={12} desktopSize={12}>
          max-width: 600px
        </TextBox>
        <TextBox mobileSize={12} desktopSize={12}>
          Padding: 0 10px 0 10px;
        </TextBox>
      </Grid>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px',
    minHeight: 400
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
      return <div style={{
        width: '100vw'
      }}>
          <Grid {...args} loading={loading}>
            <TextBox mobileSize={12} desktopSize={12}>
              max-width: 600px
            </TextBox>
            <TextBox mobileSize={12} desktopSize={12}>
              Padding: 0 10px 0 10px;
            </TextBox>
          </Grid>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            <TextBox mobileSize={12} desktopSize={12}>
              {testText}
            </TextBox>
          </div>)}
      </Grid>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
              <TextBox mobileSize={12} desktopSize={12}>
                {testText}
              </TextBox>
            </div>)}
        </Grid>
      </Grid>
    </div>
}`,...m.parameters?.docs?.source}}};const L=["GridContainerWidthMax600","GridContainerMinHeight600","GridContainerLoading","GridColumns","GridContainerWithColumns"];export{p as GridColumns,l as GridContainerLoading,d as GridContainerMinHeight600,o as GridContainerWidthMax600,m as GridContainerWithColumns,L as __namedExportsOrder,M as default};
