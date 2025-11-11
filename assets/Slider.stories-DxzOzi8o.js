import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as P,r as d}from"./iframe-C76tAK6k.js";import{B as Y}from"./Button-BRwk-dz0.js";import{u as te}from"./useWindowSize-B1c45sxN.js";import{a as ie,I as se}from"./IconArrowRight--vpQEYqS.js";import{L as oe}from"./Loader-wieurjYN.js";import{T as ae}from"./TextBox-8nHxQ-pk.js";import"./preload-helper-PPVm8Dsz.js";const de="_n23mSlider_u87e8_2",ce="_dragging_u87e8_5",ue="_n23mSliderContainerSlider_u87e8_11",me="_n23mSliderSlideWrapper_u87e8_21",pe="_n23mSliderSlide_u87e8_21",Se="_n23mSliderControls_u87e8_42",he="_n23mSliderControlsButtons_u87e8_49",ge="_n23mSliderCounter_u87e8_55",p={n23mSlider:de,dragging:ce,n23mSliderContainerSlider:ue,n23mSliderSlideWrapper:me,n23mSliderSlide:pe,n23mSliderControls:Se,n23mSliderControlsButtons:he,n23mSliderCounter:ge},N=(r,S,h=!1,o)=>(h?r.slice(0,S):r.slice(-S)).map((c,g)=>P.cloneElement(c,{key:`${h?"clone-first":"clone-last"}-${g} ${o}`,className:c.props.className})),x=({isCircular:r=!1,children:S,className:h,loading:o=!1,loaderColor:c="black",slidesConfig:g={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:y=10})=>{const t=P.Children.toArray(S).filter(P.isValidElement),{width:U}=te(),[B,K]=d.useState(0),M=d.useRef(null),f=d.useRef(null),[s,C]=d.useState(r?t.length*2:0),[u,j]=d.useState(!1),k=d.useRef([]),[L,I]=d.useState(null),[R,T]=d.useState(0),D=d.useRef(!1);let l,E,W,q;U<767.98?(l=g.mobile.items,E=g.mobile.slidesToScroll,W="transform 0.4s cubic-bezier(.4,0,.2,1)",q=450):U<1199.98?(l=g.tablet.items,E=g.tablet.slidesToScroll,W="transform 0.4s cubic-bezier(.4,0,.2,1)",q=450):(l=g.desktop.items,E=g.desktop.slidesToScroll,W="transform 0.4s cubic-bezier(.4,0,.2,1)",q=450),d.useLayoutEffect(()=>{let e;const a=()=>{M.current&&K(M.current.offsetWidth),C(r?t.length*2:0)},i=()=>{clearTimeout(e),e=window.setTimeout(a,0),j(!1)};return a(),window.addEventListener("resize",i),()=>{clearTimeout(e),window.removeEventListener("resize",i)}},[o,r,l,t.length]);const b=(B-y*(l-1))/l;let X=r?[...N(t,t.length,!1,1),...N(t,t.length,!1,2),...t,...N(t,t.length,!0,3),...N(t,t.length,!0,4)]:t;const G=e=>{e.touches.length===1&&(I(e.touches[0].clientX),T(0),D.current=!0,f.current&&f.current.classList.add(p.dragging))},J=e=>{L!==null&&T(e.touches[0].clientX-L)},Q=()=>{R>50&&!(u||!r&&s===0)?V():R<-50&&!(u||!r&&s+l>=t.length)&&A(),I(null),T(0),D.current=!1,f.current&&f.current.classList.remove(p.dragging)},Z=e=>{I(e.clientX),T(0),D.current=!0,f.current&&f.current.classList.add(p.dragging)},ee=e=>{L!==null&&T(e.clientX-L)},ne=()=>{R>50&&!(u||!r&&s===0)?V():R<-50&&!(u||!r&&s+l>=t.length)&&A(),I(null),T(0),D.current=!1,f.current&&f.current.classList.remove(p.dragging)};d.useLayoutEffect(()=>{k.current.forEach((e,a)=>{if(!e)return;let i=0,v=0;l===1&&t.length!==1?(i=40,v=40):l===2?(i=20,v=20):l===4?(i=10,v=10):l===3&&(i=12.5,v=12.5);const le=(a-s)*(b+y-v)+(B-(b-i)*l-y*(l-1))/2;e.style.transition=u?W:"none",e.style.transform=`translateX(${le}px)`})},[s,B,u,X.length,l,b,y,o]),d.useLayoutEffect(()=>{if(!u)return;let e;const a=()=>{let i=s;s<l*2&&r?i=s+t.length*2:s>=t.length*2+l&&r&&(i=s-t.length),i!==s&&r&&C(i),j(!1),k.current.forEach(v=>{v&&v.removeEventListener("transitionend",a)}),clearTimeout(e)};return k.current.forEach(i=>{i&&i.addEventListener("transitionend",a)}),e=window.setTimeout(()=>{j(!1),k.current.forEach(i=>{i&&i.removeEventListener("transitionend",a)})},q),()=>{k.current.forEach(i=>{i&&i.removeEventListener("transitionend",a)}),clearTimeout(e)}},[s,r,u,t.length,l,X.length,o]);const A=()=>{u||(j(!0),C(e=>e+E))},V=()=>{u||(j(!0),C(e=>e-E))},re=()=>{if(!r)return s;const e=t.length;return e<1?0:(s+e)%e};return n.jsxs("div",{ref:f,className:[p.n23mSlider,"n23mSlider",h].filter(Boolean).join(" "),style:{height:o?"calc(100% - 2px)":"calc(100% - 60px)"},children:[o&&n.jsx(oe,{loaderColor:c}),!o&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[p.n23mSliderContainerSlider].filter(Boolean).join(" "),onTouchStart:G,onTouchMove:J,onTouchEnd:Q,onMouseDown:Z,onMouseMove:ee,onMouseUp:ne,children:n.jsx("div",{className:[p.n23mSliderSlideWrapper,"n23mSliderSlideWrapper"].join(" "),ref:M,style:{display:"flex",gap:`${y}px`,overflow:"hidden",width:"100%",boxSizing:"border-box"},children:X.map((e,a)=>n.jsx("div",{ref:i=>{k.current[a]=i},className:p.n23mSliderSlide,style:{width:l===1&&t.length===1?"100%":l===1?`calc(${b}px - 40px)`:l===2?`calc(${b}px - 20px)`:l===3?`calc(${b}px - 12.5px)`:l===4?`calc(${b}px - 10px)`:`${b}px`},"aria-hidden":a<s||a>=s+l,children:e},e.key??a))})}),n.jsxs("div",{className:[p.n23mSliderControls,"n23mSliderControls"].join(" "),style:{justifyContent:l===1?"space-between":"flex-end"},children:[l===1&&n.jsx("div",{className:[p.n23mSliderCounter,"n23mSliderCounter"].join(" "),children:n.jsx(ae,{mobileSize:16,desktopSize:16,color:"black",children:r?`${re()+1} / ${t.length}`:`${s+1} / ${t.length}`})}),n.jsxs("div",{className:[p.n23mSliderControlsButtons,"n23mSliderControlsButtons"].join(" "),children:[n.jsx(Y,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:V,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:u||!r&&s===0,children:n.jsx(ie,{width:24,height:24})}),n.jsx(Y,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:A,disabled:u||!r&&s+l>=t.length,children:n.jsx(se,{width:24,height:24})})]})]})]})]})};x.displayName="Slider";x.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mobile: { items: number; slidesToScroll: number };
  tablet: { items: number; slidesToScroll: number };
  desktop: { items: number; slidesToScroll: number };
}`,signature:{properties:[{key:"mobile",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"tablet",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"desktop",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
  mobile: { items: 1, slidesToScroll: 1 },
  tablet: { items: 2, slidesToScroll: 2 },
  desktop: { items: 3, slidesToScroll: 3 },
}`,computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const{action:_}=__STORYBOOK_MODULE_ACTIONS__,je={title:"Slider/Slider",component:x,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
\`\`\`
      `}}},tags:["autodocs"]},w={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},m=[{color:"red",label:"1",action:_("on-click-1")},{color:"blue",label:"2",action:_("on-click-2")},{color:"orange",label:"3",action:_("on-click-3")},{color:"green",label:"4",action:_("on-click-4")},{color:"pink",label:"5",action:_("on-click-5")}],$={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(x,{...r,children:m.map(({color:S,label:h,action:o},c)=>n.jsx("div",{style:{background:S,...w},onClick:o,children:h},c))})})},F={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(x,{...r,children:m.map(({color:S,label:h,action:o},c)=>n.jsx("div",{style:{background:S,...w},onClick:o,children:h},c))})})},H={args:{},render:()=>{const r=()=>{const[S,h]=d.useState(!0);return d.useEffect(()=>{const o=setInterval(()=>{h(c=>!c)},3e3);return()=>clearInterval(o)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(x,{loading:S,children:m.map(({color:o,label:c,action:g},y)=>n.jsx("div",{style:{background:o,...w},onClick:g,children:c},y+100))})})};return n.jsx(r,{})}},O={args:{isCircular:!1,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:1,slidesToScroll:1},desktop:{items:1,slidesToScroll:1}}},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(x,{...r,children:n.jsx("div",{style:{background:m[0].color,...w},onClick:m[0].action,children:m[0].label})})})},z={args:{isCircular:!0,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:2,slidesToScroll:2}}},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsxs(x,{...r,children:[n.jsx("div",{style:{background:m[0].color,...w},onClick:m[0].action,children:m[0].label}),n.jsx("div",{style:{background:m[1].color,...w},onClick:m[1].action,children:m[1].label})]})})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: false,
    slidesConfig: {
      mobile: {
        items: 1,
        slidesToScroll: 1
      },
      tablet: {
        items: 1,
        slidesToScroll: 1
      },
      desktop: {
        items: 1,
        slidesToScroll: 1
      }
    }
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        <div style={{
        background: slides[0].color,
        ...slideStyle
      }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
      </Slider>
    </div>
}`,...O.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true,
    slidesConfig: {
      mobile: {
        items: 1,
        slidesToScroll: 1
      },
      tablet: {
        items: 2,
        slidesToScroll: 2
      },
      desktop: {
        items: 2,
        slidesToScroll: 2
      }
    }
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        <div style={{
        background: slides[0].color,
        ...slideStyle
      }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
        <div style={{
        background: slides[1].color,
        ...slideStyle
      }} onClick={slides[1].action}>
          {slides[1].label}
        </div>
      </Slider>
    </div>
}`,...z.parameters?.docs?.source}}};const Ee=["Default","SliderCircular","SliderLoading","Slider1Slide","Slider2Slides"];export{$ as Default,O as Slider1Slide,z as Slider2Slides,F as SliderCircular,H as SliderLoading,Ee as __namedExportsOrder,je as default};
