import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as B,r as c}from"./iframe-COcSbE7G.js";import{L as Q}from"./Loader-CdV_WFc2.js";import{a as Z,I as ee}from"./IconArrowRight-DaV6Kolw.js";import{B as H}from"./Button-B3Klu473.js";import{u as te}from"./useWindowSize-kUzVIEGx.js";import{S as ne}from"./Slider-X2fPnE-G.js";import"./TextBox-DhZTsRfC.js";const le="_n23mSliderMulti_1y43h_2",ie="_n23mSliderMultiContainerSlider_1y43h_6",re="_n23mSliderMultiSlideWrapper_1y43h_16",oe="_n23mSliderMultiSlide_1y43h_16",se="_n23mSliderMultiControls_1y43h_37",ae="_n23mSliderMultiControlsButtons_1y43h_45",g={n23mSliderMulti:le,n23mSliderMultiContainerSlider:ie,n23mSliderMultiSlideWrapper:re,n23mSliderMultiSlide:oe,n23mSliderMultiControls:se,n23mSliderMultiControlsButtons:ae},j=(l,u,m=!1,d)=>(m?l.slice(0,u):l.slice(-u)).map((r,v)=>B.cloneElement(r,{key:`${m?"clone-first":"clone-last"}-${v} ${d}`,className:r.props.className})),x=({isCircular:l=!1,children:u,className:m,showControls:d=!0,loading:r=!1,loaderColor:v="black",slidesPerView:w=4,slideSpacingPx:y=10,slidesToScroll:P=4})=>{const o=B.Children.toArray(u).filter(B.isValidElement),{width:I}=te(),[W,Y]=c.useState(0),D=c.useRef(null),[a,E]=c.useState(l?o.length*2:0),[p,T]=c.useState(!1),h=c.useRef([]),[O,V]=c.useState(null),[$,F]=c.useState(0);c.useLayoutEffect(()=>{let e;const s=()=>{D.current&&Y(D.current.offsetWidth),E(l?o.length*2:0)},n=()=>{clearTimeout(e),e=window.setTimeout(s,150)};return s(),window.addEventListener("resize",n),()=>{clearTimeout(e),window.removeEventListener("resize",n)}},[r,l,w,o.length]);let i=w,k=P,N="transform 1.00s cubic-bezier(0.645, 0.045, 0.355, 1)",R=1100;I<767.98?(i=1,k=1,N="transform 0.4s cubic-bezier(.4,0,.2,1)",R=450):I<1199.98&&(i=2,k=2,N="transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",R=900);const f=i>0?(W-y*(i-1))/i:0;let b=l?[...j(o,o.length,!1,1),...j(o,o.length,!1,2),...o,...j(o,o.length,!0,3),...j(o,o.length,!0,4)]:o;const K=e=>{e.touches.length===1&&(V(e.touches[0].clientX),F(0))},U=e=>{O!==null&&F(e.touches[0].clientX-O)},G=()=>{$>50?X():$<-50&&q(),V(null),F(0)};c.useLayoutEffect(()=>{h.current.forEach((e,s)=>{if(!e)return;let n=0,S=0;i==2?(n=20,S=20):i==4?(n=10,S=10):i==3&&(n=15,S=15);const J=(s-a)*(f+y-S)+(W-(f-n)*i-y*(i-1))/2;e.style.transition=p?N:"none",e.style.transform=`translateX(${J}px)`})},[a,W,p,b.length,i,f,y,r]),c.useLayoutEffect(()=>{if(!p)return;let e;const s=()=>{let n=a;a<i*2&&l?n=a+o.length*2:a>=o.length*2+i&&l&&(n=a-o.length*2),n!==a&&l&&E(n),T(!1),h.current.forEach(S=>{S&&S.removeEventListener("transitionend",s)}),clearTimeout(e)};return h.current.forEach(n=>{n&&n.addEventListener("transitionend",s)}),e=window.setTimeout(()=>{T(!1),h.current.forEach(n=>{n&&n.removeEventListener("transitionend",s)})},R),()=>{h.current.forEach(n=>{n&&n.removeEventListener("transitionend",s)}),clearTimeout(e)}},[a,l,p,o.length,i,b.length,r]);const q=()=>{p||(T(!0),E(e=>e+k))},X=()=>{p||(T(!0),E(e=>e-k))};return h.current.length!==b.length&&(h.current=Array(b.length).fill(null)),I<767.98?t.jsx(ne,{children:u,isCircular:l,loading:r}):t.jsxs("div",{className:[g.n23mSliderMulti,"n23mSliderMulti",m].filter(Boolean).join(" "),style:{height:r?"calc(100% - 2px)":d?"calc(100% - 60px)":"100%"},onTouchStart:K,onTouchMove:U,onTouchEnd:G,children:[r&&t.jsx(Q,{loaderColor:v}),!r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:[g.n23mSliderMultiContainerSlider].filter(Boolean).join(" "),children:t.jsx("div",{className:[g.n23mSliderMultiSlideWrapper,"n23mSliderMultiSlideWrapper"].join(" "),ref:D,style:{display:"flex",gap:`${y}px`,overflow:"hidden",width:"100%",boxSizing:"border-box"},children:b.map((e,s)=>t.jsx("div",{ref:n=>{h.current[s]=n},className:g.n23mSliderMultiSlide,style:{width:i==2?`calc(${f}px - 20px)`:i==3?`calc(${f}px - 15px)`:i==4?`calc(${f}px - 10px)`:`${f}px`},"aria-hidden":s<a||s>=a+i,children:e},e.key??s))})}),d&&t.jsx("div",{className:[g.n23mSliderMultiControls,"n23mSliderMultiControls"].join(" "),children:t.jsxs("div",{className:[g.n23mSliderMultiControlsButtons,"n23mSliderMultiControlsButtons"].join(" "),children:[t.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:X,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:p||!l&&a===0,children:t.jsx(Z,{width:24,height:24})}),t.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:q,disabled:p||!l&&a+i>=o.length,children:t.jsx(ee,{width:24,height:24})})]})})]})]})};x.displayName="SliderMulti";x.__docgenInfo={description:"",methods:[],displayName:"SliderMulti",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesPerView:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};const{action:M}=__STORYBOOK_MODULE_ACTIONS__,ge={title:"Slider/SliderMulti",component:x,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the SliderMulti component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderMulti } from 'najwer23morsels/lib/SliderMulti';
\`\`\`
      `}}},tags:["autodocs"]},z={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},A=[{color:"red",label:"1",action:M("on-click-1")},{color:"blue",label:"2",action:M("on-click-2")},{color:"orange",label:"3",action:M("on-click-3")},{color:"green",label:"4",action:M("on-click-4")},{color:"pink",label:"5",action:M("on-click-5")}],_={args:{},render:l=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(x,{...l,children:A.map(({color:u,label:m,action:d},r)=>t.jsx("div",{style:{background:u,...z},onClick:d,children:m},r))})})},C={args:{isCircular:!0},render:l=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(x,{...l,children:A.map(({color:u,label:m,action:d},r)=>t.jsx("div",{style:{background:u,...z},onClick:d,children:m},r))})})},L={args:{},render:()=>{const l=()=>{const[u,m]=c.useState(!0);return c.useEffect(()=>{const d=setInterval(()=>{m(r=>!r)},3e3);return()=>clearInterval(d)},[]),t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(x,{loading:u,children:A.map(({color:d,label:r,action:v},w)=>t.jsx("div",{style:{background:d,...z},onClick:v,children:r},w+100))})})};return t.jsx(l,{})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const xe=["Default","SliderMultiCircular","SliderLoading"];export{_ as Default,L as SliderLoading,C as SliderMultiCircular,xe as __namedExportsOrder,ge as default};
