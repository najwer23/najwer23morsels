import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as m,r as s}from"./iframe-CvahZF3I.js";import{L as G}from"./Loader-C4fRsJDM.js";import{a as K,I as Y}from"./IconArrowRight-DaV6Kolw.js";import{B as X}from"./Button-C-kEW8vv.js";import"./TextBox-C5QJzpaH.js";const J="_n23mSliderContainer_nwhk5_2",Q="_n23mSliderContainerSlider_nwhk5_6",Z="_n23mSlideWrapper_nwhk5_16",V="_n23mSlide_nwhk5_2",P="_n23mSliderControls_nwhk5_37",ee="_n23mSliderControlsButtons_nwhk5_45",S={n23mSliderContainer:J,n23mSliderContainerSlider:Q,n23mSlideWrapper:Z,n23mSlide:V,n23mSliderControls:P,n23mSliderControlsButtons:ee},ne=4,te=10,re=4,_=(t,o,h=!1,c)=>(h?t.slice(0,o):t.slice(-o)).map((r,v)=>m.cloneElement(r,{key:`${h?"clone-first":"clone-last"}-${v} ${c}`,className:r.props.className})),g=({isCircular:t=!1,children:o,className:h,showControls:c=!0,loading:r=!1,loaderColor:v="black",slidesPerView:i=ne,slideSpacingPx:x=te,slidesToScroll:F=re})=>{const d=m.Children.toArray(o).filter(m.isValidElement),[w,$]=s.useState(0),I=s.useRef(null);s.useEffect(()=>{const e=()=>{I.current&&$(I.current.offsetWidth)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[r]);const y=i>0?(w-x*(i-1))/i:0;let E=t?[..._(d,m.Children.toArray(o).length,!1,1),..._(d,m.Children.toArray(o).length,!1,2),...d,..._(d,m.Children.toArray(o).length,!0,3),..._(d,m.Children.toArray(o).length,!0,4)]:d;const[a,b]=s.useState(t?m.Children.toArray(o).length*2:0),[p,k]=s.useState(!1),f=s.useRef([]),[R,N]=s.useState(null),[W,A]=s.useState(0);s.useEffect(()=>{b(t?m.Children.toArray(o).length*2:0)},[t,i,d.length,r]);const H=e=>{e.touches.length===1&&(N(e.touches[0].clientX),A(0))},z=e=>{R!==null&&A(e.touches[0].clientX-R)},U=()=>{W>50?B():W<-50&&O(),N(null),A(0)};s.useEffect(()=>{f.current.forEach((e,u)=>{if(!e)return;const l=(u-a)*(y+x)+(w-y*i-x*(i-1))/2;e.style.transition=p?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",e.style.transform=`translateX(${l}px)`,e.style.left=""})},[a,w,p,E.length,i,y,x,r]),s.useEffect(()=>{if(!p)return;let e;const u=()=>{let l=a;a<i&&t?l=a+d.length:a>=d.length+i&&t&&(l=a-d.length),l!==a&&t&&b(l),k(!1),f.current.forEach(q=>{q&&q.removeEventListener("transitionend",u)}),clearTimeout(e)};return f.current.forEach(l=>{l&&l.addEventListener("transitionend",u)}),e=window.setTimeout(()=>{k(!1),f.current.forEach(l=>{l&&l.removeEventListener("transitionend",u)})},500),()=>{f.current.forEach(l=>{l&&l.removeEventListener("transitionend",u)}),clearTimeout(e)}},[a,t,p,d.length,i,E.length,r]);const O=()=>{p||(k(!0),b(e=>e+F))},B=()=>{p||(k(!0),b(e=>e-F))};return f.current.length!==E.length&&(f.current=Array(E.length).fill(null)),n.jsxs("div",{className:[S.n23mSliderContainer,"MorselsSlider",h].filter(Boolean).join(" "),style:{height:r?"calc(100% - 2px)":c?"calc(100% - 60px)":"100%"},onTouchStart:H,onTouchMove:z,onTouchEnd:U,children:[r&&n.jsx(G,{loaderColor:v}),!r&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[S.n23mSliderContainerSlider].filter(Boolean).join(" "),children:n.jsx("div",{className:[S.n23mSlideWrapper,"MorselsSliderWrapper"].join(" "),ref:I,style:{display:"flex",gap:`${x}px`,overflow:"hidden",width:"100%"},children:E.map((e,u)=>n.jsx("div",{ref:l=>{f.current[u]=l},className:S.n23mSlide,style:{width:`${y}px`,flex:`0 0 ${y}px`},"aria-hidden":u<a||u>=a+i,children:e},e.key??u))})}),c&&n.jsx("div",{className:[S.n23mSliderControls,"MorselsSliderControls"].join(" "),children:n.jsxs("div",{className:[S.n23mSliderControlsButtons,"MorselsSliderControlsButtons"].join(" "),children:[n.jsx(X,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:B,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:p||!t&&a===0,children:n.jsx(K,{width:24,height:24})}),n.jsx(X,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:O,disabled:p||!t&&a+i>=d.length,children:n.jsx(Y,{width:24,height:24})})]})})]})]})};g.displayName="Slider";g.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesPerView:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};const{action:C}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Slider/SliderMulti",component:g,parameters:{layout:"centered"},tags:["autodocs"]},M={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},D=[{color:"red",label:"1",action:C("on-click-1")},{color:"blue",label:"2",action:C("on-click-2")},{color:"orange",label:"3",action:C("on-click-3")},{color:"green",label:"4",action:C("on-click-4")},{color:"pink",label:"5",action:C("on-click-5")}],T={args:{},render:t=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(g,{...t,children:D.map(({color:o,label:h,action:c},r)=>n.jsx("div",{style:{background:o,...M},onClick:c,children:h},r))})})},j={args:{isCircular:!0},render:t=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(g,{...t,children:D.map(({color:o,label:h,action:c},r)=>n.jsx("div",{style:{background:o,...M},onClick:c,children:h},r))})})},L={args:{},render:()=>{const t=()=>{const[o,h]=s.useState(!0);return s.useEffect(()=>{const c=setInterval(()=>{h(r=>!r)},5e3);return()=>clearInterval(c)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(g,{loading:o,children:D.map(({color:c,label:r,action:v},i)=>n.jsx("div",{style:{background:c,...M},onClick:v,children:r},i+100))})})};return n.jsx(t,{})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <SliderMulti {...args}>
        {slides.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </SliderMulti>
    </div>
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <SliderMulti {...args}>
        {slides.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </SliderMulti>
    </div>
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const interval = setInterval(() => {
          setLoading(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
      return <div style={{
        width: 'min(700px,calc(100vw - 50px))',
        height: '400px'
      }}>
          <SliderMulti loading={loading}>
            {slides.map(({
            color,
            label,
            action
          }, i) => <div key={i + 100} style={{
            background: color,
            ...slideStyle
          }} onClick={action}>
                {label}
              </div>)}
          </SliderMulti>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...L.parameters?.docs?.source}}};const ue=["Default","SliderMultiCircular","SliderLoading"];export{T as Default,L as SliderLoading,j as SliderMultiCircular,ue as __namedExportsOrder,de as default};
