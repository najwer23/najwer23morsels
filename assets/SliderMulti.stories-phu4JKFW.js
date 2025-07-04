import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as p,r as s}from"./iframe-C8q0pwly.js";import{L as Y}from"./Loader-CdV_WFc2.js";import{a as G,I as K}from"./IconArrowRight-DaV6Kolw.js";import{B as X}from"./Button-B3Klu473.js";import"./TextBox-DhZTsRfC.js";const J="_n23mSliderMulti_1y43h_2",Q="_n23mSliderMultiContainerSlider_1y43h_6",Z="_n23mSliderMultiSlideWrapper_1y43h_16",V="_n23mSliderMultiSlide_1y43h_16",P="_n23mSliderMultiControls_1y43h_37",ee="_n23mSliderMultiControlsButtons_1y43h_45",S={n23mSliderMulti:J,n23mSliderMultiContainerSlider:Q,n23mSliderMultiSlideWrapper:Z,n23mSliderMultiSlide:V,n23mSliderMultiControls:P,n23mSliderMultiControlsButtons:ee},te=4,ne=10,re=4,C=(n,i,m=!1,d)=>(m?n.slice(0,i):n.slice(-i)).map((r,v)=>p.cloneElement(r,{key:`${m?"clone-first":"clone-last"}-${v} ${d}`,className:r.props.className})),g=({isCircular:n=!1,children:i,className:m,showControls:d=!0,loading:r=!1,loaderColor:v="black",slidesPerView:o=te,slideSpacingPx:x=ne,slidesToScroll:F=re})=>{const c=p.Children.toArray(i).filter(p.isValidElement),[L,$]=s.useState(0),w=s.useRef(null);s.useEffect(()=>{const e=()=>{w.current&&$(w.current.offsetWidth)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[r]);const y=o>0?(L-x*(o-1))/o:0;let E=n?[...C(c,p.Children.toArray(i).length,!1,1),...C(c,p.Children.toArray(i).length,!1,2),...c,...C(c,p.Children.toArray(i).length,!0,3),...C(c,p.Children.toArray(i).length,!0,4)]:c;const[a,b]=s.useState(n?p.Children.toArray(i).length*2:0),[h,_]=s.useState(!1),f=s.useRef([]),[N,R]=s.useState(null),[W,I]=s.useState(0);s.useEffect(()=>{b(n?p.Children.toArray(i).length*2:0)},[n,o,c.length,r]);const H=e=>{e.touches.length===1&&(R(e.touches[0].clientX),I(0))},z=e=>{N!==null&&I(e.touches[0].clientX-N)},U=()=>{W>50?B():W<-50&&O(),R(null),I(0)};s.useEffect(()=>{f.current.forEach((e,u)=>{if(!e)return;const l=(u-a)*(y+x)+(L-y*o-x*(o-1))/2;e.style.transition=h?"transform 1.05s cubic-bezier(0.645, 0.045, 0.355, 1)":"none",e.style.transform=`translateX(${l}px)`,e.style.left=""})},[a,L,h,E.length,o,y,x,r]),s.useEffect(()=>{if(!h)return;let e;const u=()=>{let l=a;a<o&&n?l=a+c.length:a>=c.length+o&&n&&(l=a-c.length),l!==a&&n&&b(l),_(!1),f.current.forEach(q=>{q&&q.removeEventListener("transitionend",u)}),clearTimeout(e)};return f.current.forEach(l=>{l&&l.addEventListener("transitionend",u)}),e=window.setTimeout(()=>{_(!1),f.current.forEach(l=>{l&&l.removeEventListener("transitionend",u)})},1150),()=>{f.current.forEach(l=>{l&&l.removeEventListener("transitionend",u)}),clearTimeout(e)}},[a,n,h,c.length,o,E.length,r]);const O=()=>{h||(_(!0),b(e=>e+F))},B=()=>{h||(_(!0),b(e=>e-F))};return f.current.length!==E.length&&(f.current=Array(E.length).fill(null)),t.jsxs("div",{className:[S.n23mSliderMulti,"n23mSliderMulti",m].filter(Boolean).join(" "),style:{height:r?"calc(100% - 2px)":d?"calc(100% - 60px)":"100%"},onTouchStart:H,onTouchMove:z,onTouchEnd:U,children:[r&&t.jsx(Y,{loaderColor:v}),!r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:[S.n23mSliderMultiContainerSlider].filter(Boolean).join(" "),children:t.jsx("div",{className:[S.n23mSliderMultiSlideWrapper,"n23mSliderMultiSlideWrapper"].join(" "),ref:w,style:{display:"flex",gap:`${x}px`,overflow:"hidden",width:"100%"},children:E.map((e,u)=>t.jsx("div",{ref:l=>{f.current[u]=l},className:S.n23mSliderMultiSlide,style:{width:`${y}px`,flex:`0 0 ${y}px`},"aria-hidden":u<a||u>=a+o,children:e},e.key??u))})}),d&&t.jsx("div",{className:[S.n23mSliderMultiControls,"n23mSliderMultiControls"].join(" "),children:t.jsxs("div",{className:[S.n23mSliderMultiControlsButtons,"n23mSliderMultiControlsButtons"].join(" "),children:[t.jsx(X,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:B,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:h||!n&&a===0,children:t.jsx(G,{width:24,height:24})}),t.jsx(X,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:O,disabled:h||!n&&a+o>=c.length,children:t.jsx(K,{width:24,height:24})})]})})]})]})};g.displayName="Slider";g.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesPerView:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};const{action:M}=__STORYBOOK_MODULE_ACTIONS__,ce={title:"Slider/SliderMulti",component:g,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the SliderMulti component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderMulti } from 'najwer23morsels/lib/SliderMulti';
\`\`\`
      `}}},tags:["autodocs"]},A={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},D=[{color:"red",label:"1",action:M("on-click-1")},{color:"blue",label:"2",action:M("on-click-2")},{color:"orange",label:"3",action:M("on-click-3")},{color:"green",label:"4",action:M("on-click-4")},{color:"pink",label:"5",action:M("on-click-5")}],k={args:{},render:n=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(g,{...n,children:D.map(({color:i,label:m,action:d},r)=>t.jsx("div",{style:{background:i,...A},onClick:d,children:m},r))})})},T={args:{isCircular:!0},render:n=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(g,{...n,children:D.map(({color:i,label:m,action:d},r)=>t.jsx("div",{style:{background:i,...A},onClick:d,children:m},r))})})},j={args:{},render:()=>{const n=()=>{const[i,m]=s.useState(!0);return s.useEffect(()=>{const d=setInterval(()=>{m(r=>!r)},3e3);return()=>clearInterval(d)},[]),t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(g,{loading:i,children:D.map(({color:d,label:r,action:v},o)=>t.jsx("div",{style:{background:d,...A},onClick:v,children:r},o+100))})})};return t.jsx(n,{})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const interval = setInterval(() => {
          setLoading(prev => !prev);
        }, 3000);
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
}`,...j.parameters?.docs?.source}}};const ue=["Default","SliderMultiCircular","SliderLoading"];export{k as Default,j as SliderLoading,T as SliderMultiCircular,ue as __namedExportsOrder,ce as default};
