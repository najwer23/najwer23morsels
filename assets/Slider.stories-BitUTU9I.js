import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as U,r as a}from"./iframe-Bb21tLd3.js";import{B as Y}from"./Button-hs1dM0kb.js";import{u as te}from"./useWindowSize-BrUfX7uj.js";import{a as ie,I as se}from"./IconArrowRight--vpQEYqS.js";import{L as oe}from"./Loader-Coi5EJI2.js";import{T as ae}from"./TextBox-De5BSsp-.js";import"./preload-helper-PPVm8Dsz.js";import"./getCssVariableStyle-DXeVW4yL.js";const de="_n23mSlider_x1hq0_2",ce="_dragging_x1hq0_5",ue="_n23mSliderContainerSlider_x1hq0_11",me="_n23mSliderSlideWrapper_x1hq0_21",pe="_n23mSliderSlide_x1hq0_21",Se="_n23mSliderControls_x1hq0_44",he="_n23mSliderControlsButtons_x1hq0_51",ge="_n23mSliderCounter_x1hq0_57",p={n23mSlider:de,dragging:ce,n23mSliderContainerSlider:ue,n23mSliderSlideWrapper:me,n23mSliderSlide:pe,n23mSliderControls:Se,n23mSliderControlsButtons:he,n23mSliderCounter:ge},N=(n,S,h=!1,o)=>(h?n.slice(0,S):n.slice(-S)).map((d,g)=>U.cloneElement(d,{key:`${h?"clone-first":"clone-last"}-${g} ${o}`,className:d.props.className})),v=({isCircular:n=!1,children:S,className:h,loading:o=!1,loaderColor:d="black",slidesConfig:g={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:y=10})=>{const t=U.Children.toArray(S).filter(U.isValidElement),{width:M}=te(),[X,K]=a.useState(0),A=a.useRef(null),f=a.useRef(null),[s,C]=a.useState(n?t.length*2:0),[c,E]=a.useState(!1),k=a.useRef([]),[L,q]=a.useState(null),[I,T]=a.useState(0),D=a.useRef(!1);let l,w,R,W;M<767.98?(l=g.mobile.items,w=g.mobile.slidesToScroll,R="transform 0.4s cubic-bezier(.4,0,.2,1)",W=450):M<1199.98?(l=g.tablet.items,w=g.tablet.slidesToScroll,R="transform 0.4s cubic-bezier(.4,0,.2,1)",W=450):(l=g.desktop.items,w=g.desktop.slidesToScroll,R="transform 0.4s cubic-bezier(.4,0,.2,1)",W=450),a.useLayoutEffect(()=>{A.current&&K(A.current.offsetWidth),C(n?t.length*2:0)},[o,n,l,t.length,M]);const b=(X-y*(l-1))/l;let V=n?[...N(t,t.length,!1,1),...t,...N(t,t.length,!1,2),...N(t,t.length,!0,3),...N(t,t.length,!0,4)]:t;const G=r=>{r.touches.length===1&&(q(r.touches[0].clientX),T(0),D.current=!0,f.current&&f.current.classList.add(p.dragging))},J=r=>{L!==null&&T(r.touches[0].clientX-L)},Q=()=>{I>50&&!(c||!n&&s===0)?P():I<-50&&!(c||!n&&s+l>=t.length)&&z(),q(null),T(0),D.current=!1,f.current&&f.current.classList.remove(p.dragging)},Z=r=>{q(r.clientX),T(0),D.current=!0,f.current&&f.current.classList.add(p.dragging)},ee=r=>{L!==null&&T(r.clientX-L)},ne=()=>{I>50&&!(c||!n&&s===0)?P():I<-50&&!(c||!n&&s+l>=t.length)&&z(),q(null),T(0),D.current=!1,f.current&&f.current.classList.remove(p.dragging)};a.useLayoutEffect(()=>{k.current.forEach((r,m)=>{if(!r)return;let i=0,x=0;l===1&&t.length!==1?(i=40,x=40):l===2?(i=20,x=20):l===4?(i=10,x=10):l===3&&(i=12.5,x=12.5);const le=(m-s)*(b+y-x)+(X-(b-i)*l-y*(l-1))/2;r.style.transition=c?R:"none",r.style.transform=`translateX(${le}px)`})},[s,X,c,V.length,l,b,y,o]),a.useLayoutEffect(()=>{if(!c)return;let r;const m=()=>{let i=s;s<l*2&&n?i=s+t.length*2:s>=t.length*2+l&&n&&(i=s-t.length),i!==s&&n&&C(i),E(!1),k.current.forEach(x=>{x&&x.removeEventListener("transitionend",m)}),clearTimeout(r)};return k.current.forEach(i=>{i&&i.addEventListener("transitionend",m)}),r=window.setTimeout(()=>{E(!1),k.current.forEach(i=>{i&&i.removeEventListener("transitionend",m)})},W),()=>{k.current.forEach(i=>{i&&i.removeEventListener("transitionend",m)}),clearTimeout(r)}},[s,n,c,t.length,l,V.length,o]);const z=()=>{c||(E(!0),C(r=>r+w))},P=()=>{c||(E(!0),C(r=>r-w))},re=()=>{if(!n)return s;const r=t.length;return r<1?0:(s+r)%r};return e.jsxs("div",{ref:f,className:[p.n23mSlider,"n23mSlider",h].filter(Boolean).join(" "),style:{height:o?"calc(100% - 2px)":"calc(100% - 60px)"},children:[o&&e.jsx(oe,{loaderColor:d}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[p.n23mSliderContainerSlider].filter(Boolean).join(" "),onTouchStart:G,onTouchMove:J,onTouchEnd:Q,onMouseDown:Z,onMouseMove:ee,onMouseUp:ne,children:e.jsx("div",{className:[p.n23mSliderSlideWrapper,"n23mSliderSlideWrapper"].join(" "),ref:A,style:{gap:`${y}px`},children:V.map((r,m)=>e.jsx("div",{ref:i=>{k.current[m]=i},className:p.n23mSliderSlide,style:{width:l===1&&t.length===1?"100%":l===1?`calc(${b}px - 40px)`:l===2?`calc(${b}px - 20px)`:l===3?`calc(${b}px - 12.5px)`:l===4?`calc(${b}px - 10px)`:`${b}px`},"aria-hidden":m<s||m>=s+l,children:r},r.key??m))})}),e.jsxs("div",{className:[p.n23mSliderControls,"n23mSliderControls"].join(" "),style:{justifyContent:l===1?"space-between":"flex-end"},children:[l===1&&e.jsx("div",{className:[p.n23mSliderCounter,"n23mSliderCounter"].join(" "),children:e.jsx(ae,{mobileSize:16,desktopSize:16,color:"black",children:n?`${re()+1} / ${t.length}`:`${s+1} / ${t.length}`})}),e.jsxs("div",{className:[p.n23mSliderControlsButtons,"n23mSliderControlsButtons"].join(" "),children:[e.jsx(Y,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:P,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:c||!n&&s===0,children:e.jsx(ie,{width:24,height:24})}),e.jsx(Y,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:z,disabled:c||!n&&s+l>=t.length,children:e.jsx(se,{width:24,height:24})})]})]})]})]})};v.displayName="Slider";v.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mobile: { items: number; slidesToScroll: number };
  tablet: { items: number; slidesToScroll: number };
  desktop: { items: number; slidesToScroll: number };
}`,signature:{properties:[{key:"mobile",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"tablet",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"desktop",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
  mobile: { items: 1, slidesToScroll: 1 },
  tablet: { items: 2, slidesToScroll: 2 },
  desktop: { items: 3, slidesToScroll: 3 },
}`,computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const{action:_}=__STORYBOOK_MODULE_ACTIONS__,_e={title:"Slider/Slider",component:v,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/slider';
\`\`\`
      `}}},tags:["autodocs"]},j={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},u=[{color:"red",label:"1",action:_("on-click-1")},{color:"blue",label:"2",action:_("on-click-2")},{color:"orange",label:"3",action:_("on-click-3")},{color:"green",label:"4",action:_("on-click-4")},{color:"pink",label:"5",action:_("on-click-5")}],$={args:{},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(v,{...n,children:u.map(({color:S,label:h,action:o},d)=>e.jsx("div",{style:{background:S,...j},onClick:o,children:h},d))})})},F={args:{isCircular:!0},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(v,{...n,children:u.map(({color:S,label:h,action:o},d)=>e.jsx("div",{style:{background:S,...j},onClick:o,children:h},d))})})},H={args:{},render:()=>{const n=()=>{const[S,h]=a.useState(!0);return a.useEffect(()=>{const o=setInterval(()=>{h(d=>!d)},3e3);return()=>clearInterval(o)},[]),e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(v,{loading:S,children:u.map(({color:o,label:d,action:g},y)=>e.jsx("div",{style:{background:o,...j},onClick:g,children:d},y+100))})})};return e.jsx(n,{})}},O={args:{isCircular:!1,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:1,slidesToScroll:1},desktop:{items:1,slidesToScroll:1}}},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(v,{...n,children:e.jsx("div",{style:{background:u[0].color,...j},onClick:u[0].action,children:u[0].label})})})},B={args:{isCircular:!0,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:2,slidesToScroll:2}}},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsxs(v,{...n,children:[e.jsx("div",{style:{background:u[0].color,...j},onClick:u[0].action,children:u[0].label}),e.jsx("div",{style:{background:u[1].color,...j},onClick:u[1].action,children:u[1].label})]})})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const Ce=["Default","SliderCircular","SliderLoading","Slider1Slide","Slider2Slides"];export{$ as Default,O as Slider1Slide,B as Slider2Slides,F as SliderCircular,H as SliderLoading,Ce as __namedExportsOrder,_e as default};
