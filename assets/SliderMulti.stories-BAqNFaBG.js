import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as A,r as a}from"./iframe-CNewWGwA.js";import{L as J}from"./Loader-CdV_WFc2.js";import{a as Q,I as Z}from"./IconArrowRight-DaV6Kolw.js";import{B as H}from"./Button-B3Klu473.js";import{u as ee}from"./useWindowSize-C9uD7bxh.js";import{S as te}from"./Slider-Cvg0DtQm.js";import"./TextBox-DhZTsRfC.js";const ne="_n23mSliderMulti_1y43h_2",le="_n23mSliderMultiContainerSlider_1y43h_6",re="_n23mSliderMultiSlideWrapper_1y43h_16",ie="_n23mSliderMultiSlide_1y43h_16",oe="_n23mSliderMultiControls_1y43h_37",se="_n23mSliderMultiControlsButtons_1y43h_45",f={n23mSliderMulti:ne,n23mSliderMultiContainerSlider:le,n23mSliderMultiSlideWrapper:re,n23mSliderMultiSlide:ie,n23mSliderMultiControls:oe,n23mSliderMultiControlsButtons:se},ae=4,de=10,ce=4,T=(n,c,m=!1,d)=>(m?n.slice(0,c):n.slice(-c)).map((l,g)=>A.cloneElement(l,{key:`${m?"clone-first":"clone-last"}-${g} ${d}`,className:l.props.className})),S=({isCircular:n=!1,children:c,className:m,showControls:d=!0,loading:l=!1,loaderColor:g="black",slidesPerView:M=ae,slideSpacingPx:v=de,slidesToScroll:P=ce})=>{const r=A.Children.toArray(c).filter(A.isValidElement),{width:L}=ee(),[I,U]=a.useState(0),D=a.useRef(null),[o,x]=a.useState(n?r.length*2:0),[p,_]=a.useState(!1),h=a.useRef([]),[B,V]=a.useState(null),[q,F]=a.useState(0);a.useEffect(()=>{const e=()=>{D.current&&U(D.current.offsetWidth),x(0)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[l]),a.useEffect(()=>{x(n?r.length*2:0)},[n,M,r.length,l]);let s=M,w=P,N="transform 1.00s cubic-bezier(0.645, 0.045, 0.355, 1)",W=1100;L<767.98?(s=1,w=1,N="transform 0.4s cubic-bezier(.4,0,.2,1)",W=500):L<1199.98&&(s=2,w=2,N="transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",W=950);const y=s>0?(I-v*(s-1))/s:0;let b=n?[...T(r,r.length,!1,1),...T(r,r.length,!1,2),...r,...T(r,r.length,!0,3),...T(r,r.length,!0,4)]:r;const Y=e=>{e.touches.length===1&&(V(e.touches[0].clientX),F(0))},G=e=>{B!==null&&F(e.touches[0].clientX-B)},K=()=>{q>50?X():q<-50&&z(),V(null),F(0)};a.useEffect(()=>{h.current.forEach((e,u)=>{if(!e)return;const i=(u-o)*(y+v)+(I-y*s-v*(s-1))/2;e.style.transition=p?N:"none",e.style.transform=`translateX(${i}px)`,e.style.left=""})},[o,I,p,b.length,s,y,v,l]),a.useEffect(()=>{if(!p)return;let e;const u=()=>{let i=o;o<s&&n?i=o+r.length:o>=r.length+s&&n&&(i=o-r.length),i!==o&&n&&x(i),_(!1),h.current.forEach($=>{$&&$.removeEventListener("transitionend",u)}),clearTimeout(e)};return h.current.forEach(i=>{i&&i.addEventListener("transitionend",u)}),e=window.setTimeout(()=>{_(!1),h.current.forEach(i=>{i&&i.removeEventListener("transitionend",u)})},W),()=>{h.current.forEach(i=>{i&&i.removeEventListener("transitionend",u)}),clearTimeout(e)}},[o,n,p,r.length,s,b.length,l]);const z=()=>{p||(_(!0),x(e=>e+w))},X=()=>{p||(_(!0),x(e=>e-w))};return h.current.length!==b.length&&(h.current=Array(b.length).fill(null)),L<767.98?t.jsx(te,{children:c,isCircular:n,loading:l}):t.jsxs("div",{className:[f.n23mSliderMulti,"n23mSliderMulti",m].filter(Boolean).join(" "),style:{height:l?"calc(100% - 2px)":d?"calc(100% - 60px)":"100%"},onTouchStart:Y,onTouchMove:G,onTouchEnd:K,children:[l&&t.jsx(J,{loaderColor:g}),!l&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:[f.n23mSliderMultiContainerSlider].filter(Boolean).join(" "),children:t.jsx("div",{className:[f.n23mSliderMultiSlideWrapper,"n23mSliderMultiSlideWrapper"].join(" "),ref:D,style:{display:"flex",gap:`${v}px`,overflow:"hidden",width:"100%",boxSizing:"border-box"},children:b.map((e,u)=>t.jsx("div",{ref:i=>{h.current[u]=i},className:f.n23mSliderMultiSlide,style:{width:`${y}px`,flex:`0 0 ${y}px`},"aria-hidden":u<o||u>=o+s,children:e},e.key??u))})}),d&&t.jsx("div",{className:[f.n23mSliderMultiControls,"n23mSliderMultiControls"].join(" "),children:t.jsxs("div",{className:[f.n23mSliderMultiControlsButtons,"n23mSliderMultiControlsButtons"].join(" "),children:[t.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:X,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:p||!n&&o===0,children:t.jsx(Q,{width:24,height:24})}),t.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:z,disabled:p||!n&&o+s>=r.length,children:t.jsx(Z,{width:24,height:24})})]})})]})]})};S.displayName="Slider";S.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesPerView:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},slidesToScroll:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};const{action:E}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Slider/SliderMulti",component:S,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the SliderMulti component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderMulti } from 'najwer23morsels/lib/SliderMulti';
\`\`\`
      `}}},tags:["autodocs"]},R={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},O=[{color:"red",label:"1",action:E("on-click-1")},{color:"blue",label:"2",action:E("on-click-2")},{color:"orange",label:"3",action:E("on-click-3")},{color:"green",label:"4",action:E("on-click-4")},{color:"pink",label:"5",action:E("on-click-5")}],k={args:{},render:n=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(S,{...n,children:O.map(({color:c,label:m,action:d},l)=>t.jsx("div",{style:{background:c,...R},onClick:d,children:m},l))})})},j={args:{isCircular:!0},render:n=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(S,{...n,children:O.map(({color:c,label:m,action:d},l)=>t.jsx("div",{style:{background:c,...R},onClick:d,children:m},l))})})},C={args:{},render:()=>{const n=()=>{const[c,m]=a.useState(!0);return a.useEffect(()=>{const d=setInterval(()=>{m(l=>!l)},3e3);return()=>clearInterval(d)},[]),t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(S,{loading:c,children:O.map(({color:d,label:l,action:g},M)=>t.jsx("div",{style:{background:d,...R},onClick:g,children:l},M+100))})})};return t.jsx(n,{})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const ye=["Default","SliderMultiCircular","SliderLoading"];export{k as Default,C as SliderLoading,j as SliderMultiCircular,ye as __namedExportsOrder,xe as default};
