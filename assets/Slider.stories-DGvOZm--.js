import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as D,r as c}from"./iframe-DqhxOtcN.js";import{L as J}from"./Loader-CdV_WFc2.js";import{a as Q,I as Z}from"./IconArrowRight-DaV6Kolw.js";import{B as H}from"./Button-B3Klu473.js";import{u as ee}from"./useWindowSize-BG5cWnnN.js";import{T as ne}from"./TextBox-DhZTsRfC.js";const te="_n23mSlider_10mao_2",re="_n23mSliderContainerSlider_10mao_6",le="_n23mSliderSlideWrapper_10mao_16",ie="_n23mSliderSlide_10mao_16",oe="_n23mSliderControls_10mao_37",se="_n23mSliderControlsButtons_10mao_44",ae="_n23mSliderCounter_10mao_50",x={n23mSlider:te,n23mSliderContainerSlider:re,n23mSliderSlideWrapper:le,n23mSliderSlide:ie,n23mSliderControls:oe,n23mSliderControlsButtons:se,n23mSliderCounter:ae},C=(l,u,m=!1,s)=>(m?l.slice(0,u):l.slice(-u)).map((d,p)=>D.cloneElement(d,{key:`${m?"clone-first":"clone-last"}-${p} ${s}`,className:d.props.className})),v=({isCircular:l=!1,children:u,className:m,loading:s=!1,loaderColor:d="black",slidesConfig:p={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:b=10})=>{const i=D.Children.toArray(u).filter(D.isValidElement),{width:z}=ee(),[N,P]=c.useState(0),W=c.useRef(null),[o,w]=c.useState(l?i.length*2:0),[h,j]=c.useState(!1),S=c.useRef([]),[B,A]=c.useState(null),[O,$]=c.useState(0);let n,y,E,_;z<767.98?(n=p.mobile.items,y=p.mobile.slidesToScroll,E="transform 0.4s cubic-bezier(.4,0,.2,1)",_=450):z<1199.98?(n=p.tablet.items,y=p.tablet.slidesToScroll,E="transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",_=900):(n=p.desktop.items,y=p.desktop.slidesToScroll,E="transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",_=900),c.useLayoutEffect(()=>{let e;const a=()=>{W.current&&P(W.current.offsetWidth),w(l?i.length*2:0)},r=()=>{clearTimeout(e),e=window.setTimeout(a,150)};return a(),window.addEventListener("resize",r),()=>{clearTimeout(e),window.removeEventListener("resize",r)}},[s,l,n,i.length]);const f=n>0?(N-b*(n-1))/n:0;let T=l?[...C(i,i.length,!1,1),...C(i,i.length,!1,2),...i,...C(i,i.length,!0,3),...C(i,i.length,!0,4)]:i;const M=e=>{e.touches.length===1&&(A(e.touches[0].clientX),$(0))},Y=e=>{B!==null&&$(e.touches[0].clientX-B)},K=()=>{O>50&&!(h||!l&&o===0)?X():O<-50&&!(h||!l&&o+n>=i.length)&&V(),A(null),$(0)};c.useLayoutEffect(()=>{S.current.forEach((e,a)=>{if(!e)return;let r=0,g=0;n==1?(r=35,g=35):n==2?(r=20,g=20):n==4?(r=10,g=10):n==3&&(r=15,g=15);const G=(a-o)*(f+b-g)+(N-(f-r)*n-b*(n-1))/2;e.style.transition=h?E:"none",e.style.transform=`translateX(${G}px)`})},[o,N,h,T.length,n,f,b,s]),c.useLayoutEffect(()=>{if(!h)return;let e;const a=()=>{let r=o;o<n*2&&l?r=o+i.length*2:o>=i.length*2+n&&l&&(r=o-i.length*2),r!==o&&l&&w(r),j(!1),S.current.forEach(g=>{g&&g.removeEventListener("transitionend",a)}),clearTimeout(e)};return S.current.forEach(r=>{r&&r.addEventListener("transitionend",a)}),e=window.setTimeout(()=>{j(!1),S.current.forEach(r=>{r&&r.removeEventListener("transitionend",a)})},_),()=>{S.current.forEach(r=>{r&&r.removeEventListener("transitionend",a)}),clearTimeout(e)}},[o,l,h,i.length,n,T.length,s]);const V=()=>{h||(j(!0),w(e=>e+y))},X=()=>{h||(j(!0),w(e=>e-y))};S.current.length!==T.length&&(S.current=Array(T.length).fill(null));const U=()=>{if(!l)return o;const e=i.length;return e<1?0:(o+e)%e};return t.jsxs("div",{className:[x.n23mSlider,"n23mSlider",m].filter(Boolean).join(" "),style:{height:s?"calc(100% - 2px)":"calc(100% - 60px)"},onTouchStart:M,onTouchMove:Y,onTouchEnd:K,children:[s&&t.jsx(J,{loaderColor:d}),!s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:[x.n23mSliderContainerSlider].filter(Boolean).join(" "),children:t.jsx("div",{className:[x.n23mSliderSlideWrapper,"n23mSliderSlideWrapper"].join(" "),ref:W,style:{display:"flex",gap:`${b}px`,overflow:"hidden",width:"100%",boxSizing:"border-box"},children:T.map((e,a)=>t.jsx("div",{ref:r=>{S.current[a]=r},className:x.n23mSliderSlide,style:{width:n==1?`calc(${f}px - 35px)`:n==2?`calc(${f}px - 20px)`:n==3?`calc(${f}px - 15px)`:n==4?`calc(${f}px - 10px)`:`${f}px`},"aria-hidden":a<o||a>=o+n,children:e},e.key??a))})}),t.jsxs("div",{className:[x.n23mSliderControls,"n23mSliderControls"].join(" "),style:{justifyContent:n==1?"space-between":"flex-end"},children:[n==1&&i.length>1&&t.jsx("div",{className:[x.n23mSliderCounter,"n23mSliderCounter"].join(" "),children:t.jsx(ne,{mobileSize:16,desktopSize:16,color:"black",children:l?`${U()+1} / ${i.length}`:`${o+1} / ${i.length}`})}),t.jsxs("div",{className:[x.n23mSliderControlsButtons,"n23mSliderControlsButtons"].join(" "),children:[t.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:X,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:h||!l&&o===0,children:t.jsx(Q,{width:24,height:24})}),t.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:V,disabled:h||!l&&o+n>=i.length,children:t.jsx(Z,{width:24,height:24})})]})]})]})]})};v.displayName="Slider";v.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mobile: {
    items: number;
    slidesToScroll: number;
  };
  tablet: {
    items: number;
    slidesToScroll: number;
  };
  desktop: {
    items: number;
    slidesToScroll: number;
  };
}`,signature:{properties:[{key:"mobile",value:{name:"signature",type:"object",raw:`{
  items: number;
  slidesToScroll: number;
}`,signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"tablet",value:{name:"signature",type:"object",raw:`{
  items: number;
  slidesToScroll: number;
}`,signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"desktop",value:{name:"signature",type:"object",raw:`{
  items: number;
  slidesToScroll: number;
}`,signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
  mobile: {
    items: 1,
    slidesToScroll: 1,
  },
  tablet: {
    items: 2,
    slidesToScroll: 2,
  },
  desktop: {
    items: 3,
    slidesToScroll: 3,
  },
}`,computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Slider/Slider",component:v,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
\`\`\`
      `}}},tags:["autodocs"]},F={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},R=[{color:"red",label:"1",action:k("on-click-1")},{color:"blue",label:"2",action:k("on-click-2")},{color:"orange",label:"3",action:k("on-click-3")},{color:"green",label:"4",action:k("on-click-4")},{color:"pink",label:"5",action:k("on-click-5")}],L={args:{},render:l=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(v,{...l,children:R.map(({color:u,label:m,action:s},d)=>t.jsx("div",{style:{background:u,...F},onClick:s,children:m},d))})})},I={args:{isCircular:!0},render:l=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(v,{...l,children:R.map(({color:u,label:m,action:s},d)=>t.jsx("div",{style:{background:u,...F},onClick:s,children:m},d))})})},q={args:{},render:()=>{const l=()=>{const[u,m]=c.useState(!0);return c.useEffect(()=>{const s=setInterval(()=>{m(d=>!d)},3e3);return()=>clearInterval(s)},[]),t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(v,{loading:u,children:R.map(({color:s,label:d,action:p},b)=>t.jsx("div",{style:{background:s,...F},onClick:p,children:d},b+100))})})};return t.jsx(l,{})}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
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
      </Slider>
    </div>
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
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
      </Slider>
    </div>
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
          <Slider loading={loading}>
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
          </Slider>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...q.parameters?.docs?.source}}};const ge=["Default","SliderCircular","SliderLoading"];export{L as Default,I as SliderCircular,q as SliderLoading,ge as __namedExportsOrder,fe as default};
