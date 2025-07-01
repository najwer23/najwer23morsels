import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as p,r as i}from"./iframe-Ch_lF0va.js";import{L as G}from"./Loader-266W59Xy.js";import{a as K,I as Y}from"./IconArrowRight-DaV6Kolw.js";import{B as X}from"./Button-Cr_pwSk9.js";import"./TextBox-DnrhPsKE.js";const J="_najwer23morselsSliderContainer_191g7_2",Q="_najwer23morselsSliderContainerSlider_191g7_6",Z="_najwer23morselsSlideWrapper_191g7_16",V="_najwer23morselsSlide_191g7_2",P="_najwer23morselsSliderControls_191g7_37",ee="_najwer23morselsSliderControlsButtons_191g7_45",S={najwer23morselsSliderContainer:J,najwer23morselsSliderContainerSlider:Q,najwer23morselsSlideWrapper:Z,najwer23morselsSlide:V,najwer23morselsSliderControls:P,najwer23morselsSliderControlsButtons:ee},ne=4,re=10,te=4,b=(r,o,m=!1,c)=>(m?r.slice(0,o):r.slice(-o)).map((t,v)=>p.cloneElement(t,{key:`${m?"clone-first":"clone-last"}-${v} ${c}`,className:t.props.className})),g=({isCircular:r=!1,children:o,className:m,showControls:c=!0,loading:t=!1,loaderColor:v="black",slidesPerView:s=ne,slideSpacingPx:x=re,slidesToScroll:F=te})=>{const d=p.Children.toArray(o).filter(p.isValidElement),[L,$]=i.useState(0),I=i.useRef(null);i.useEffect(()=>{const e=()=>{I.current&&$(I.current.offsetWidth)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]);const j=s>0?(L-x*(s-1))/s:0;let y=r?[...b(d,p.Children.toArray(o).length,!1,1),...b(d,p.Children.toArray(o).length,!1,2),...d,...b(d,p.Children.toArray(o).length,!0,3),...b(d,p.Children.toArray(o).length,!0,4)]:d;const[a,E]=i.useState(r?p.Children.toArray(o).length*2:0),[h,C]=i.useState(!1),f=i.useRef([]),[R,N]=i.useState(null),[W,A]=i.useState(0);i.useEffect(()=>{E(r?p.Children.toArray(o).length*2:0)},[r,s,d.length,t]);const H=e=>{e.touches.length===1&&(N(e.touches[0].clientX),A(0))},z=e=>{R!==null&&A(e.touches[0].clientX-R)},U=()=>{W>50?B():W<-50&&O(),N(null),A(0)};i.useEffect(()=>{f.current.forEach((e,u)=>{if(!e)return;const l=(u-a)*(j+x)+(L-j*s-x*(s-1))/2;e.style.transition=h?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",e.style.transform=`translateX(${l}px)`,e.style.left=""})},[a,L,h,y.length,s,j,x,t]),i.useEffect(()=>{if(!h)return;let e;const u=()=>{let l=a;a<s&&r?l=a+d.length:a>=d.length+s&&r&&(l=a-d.length),l!==a&&r&&E(l),C(!1),f.current.forEach(q=>{q&&q.removeEventListener("transitionend",u)}),clearTimeout(e)};return f.current.forEach(l=>{l&&l.addEventListener("transitionend",u)}),e=window.setTimeout(()=>{C(!1),f.current.forEach(l=>{l&&l.removeEventListener("transitionend",u)})},500),()=>{f.current.forEach(l=>{l&&l.removeEventListener("transitionend",u)}),clearTimeout(e)}},[a,r,h,d.length,s,y.length,t]);const O=()=>{h||(C(!0),E(e=>e+F))},B=()=>{h||(C(!0),E(e=>e-F))};return f.current.length!==y.length&&(f.current=Array(y.length).fill(null)),n.jsxs("div",{className:[S.najwer23morselsSliderContainer,"MorselsSlider",m].filter(Boolean).join(" "),style:{height:t?"calc(100% - 2px)":c?"calc(100% - 60px)":"100%"},onTouchStart:H,onTouchMove:z,onTouchEnd:U,children:[t&&n.jsx(G,{loaderColor:v}),!t&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[S.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),children:n.jsx("div",{className:[S.najwer23morselsSlideWrapper,"MorselsSliderWrapper"].join(" "),ref:I,style:{display:"flex",gap:`${x}px`,overflow:"hidden",width:"100%"},children:y.map((e,u)=>n.jsx("div",{ref:l=>{f.current[u]=l},className:S.najwer23morselsSlide,style:{width:`${j}px`,flex:`0 0 ${j}px`},"aria-hidden":u<a||u>=a+s,children:e},e.key??u))})}),c&&n.jsx("div",{className:[S.najwer23morselsSliderControls,"MorselsSliderControls"].join(" "),children:n.jsxs("div",{className:[S.najwer23morselsSliderControlsButtons,"MorselsSliderControlsButtons"].join(" "),children:[n.jsx(X,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:B,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:h||!r&&a===0,children:n.jsx(K,{width:24,height:24})}),n.jsx(X,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:O,disabled:h||!r&&a+s>=d.length,children:n.jsx(Y,{width:24,height:24})})]})})]})]})};g.displayName="Slider";g.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesPerView:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};const{action:w}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Slider/SliderMulti",component:g,parameters:{layout:"centered"},tags:["autodocs"]},M={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},D=[{color:"red",label:"1",action:w("on-click-1")},{color:"blue",label:"2",action:w("on-click-2")},{color:"orange",label:"3",action:w("on-click-3")},{color:"green",label:"4",action:w("on-click-4")},{color:"pink",label:"5",action:w("on-click-5")}],_={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(g,{...r,children:D.map(({color:o,label:m,action:c},t)=>n.jsx("div",{style:{background:o,...M},onClick:c,children:m},t))})})},k={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(g,{...r,children:D.map(({color:o,label:m,action:c},t)=>n.jsx("div",{style:{background:o,...M},onClick:c,children:m},t))})})},T={args:{},render:()=>{const r=()=>{const[o,m]=i.useState(!0);return i.useEffect(()=>{const c=setInterval(()=>{m(t=>!t)},5e3);return()=>clearInterval(c)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(g,{loading:o,children:D.map(({color:c,label:t,action:v},s)=>n.jsx("div",{style:{background:c,...M},onClick:v,children:t},s+100))})})};return n.jsx(r,{})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ue=["Default","SliderMultiCircular","SliderLoading"];export{_ as Default,T as SliderLoading,k as SliderMultiCircular,ue as __namedExportsOrder,de as default};
