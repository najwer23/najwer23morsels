import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as U,r as d}from"./iframe-Ddywmo87.js";import{B as Y}from"./Button-CQWTH9jx.js";import{u as te}from"./useWindowSize-Bq2f-ubI.js";import{a as ie,I as se}from"./IconLocate-BfinrzTe.js";import{L as oe}from"./Loader-CXtjIfhu.js";import{T as ae}from"./TextBox-BK4fO7eD.js";import"./preload-helper-PPVm8Dsz.js";import"./getCssVariableStyle-DXeVW4yL.js";const de="_n23mSlider_x1hq0_2",ce="_dragging_x1hq0_5",ue="_n23mSliderContainerSlider_x1hq0_11",me="_n23mSliderSlideWrapper_x1hq0_21",pe="_n23mSliderSlide_x1hq0_21",Se="_n23mSliderControls_x1hq0_44",he="_n23mSliderControlsButtons_x1hq0_51",ge="_n23mSliderCounter_x1hq0_57",p={n23mSlider:de,dragging:ce,n23mSliderContainerSlider:ue,n23mSliderSlideWrapper:me,n23mSliderSlide:pe,n23mSliderControls:Se,n23mSliderControlsButtons:he,n23mSliderCounter:ge},N=(n,S,h=!1,a)=>(h?n.slice(0,S):n.slice(-S)).map((c,g)=>U.cloneElement(c,{key:`${h?"clone-first":"clone-last"}-${g} ${a}`,className:c.props.className})),y=({isCircular:n=!1,children:S,className:h,loading:a=!1,loaderColor:c="black",slidesConfig:g={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:k=10})=>{const t=U.Children.toArray(S).filter(U.isValidElement),{width:M}=te(),[X,K]=d.useState(0),A=d.useRef(null),f=d.useRef(null),[s,_]=d.useState(n?t.length*2:0),[u,E]=d.useState(!1),T=d.useRef([]),[L,q]=d.useState(null),[I,j]=d.useState(0),D=d.useRef(!1);let r,w,R,W;M<767.98?(r=g.mobile.items,w=g.mobile.slidesToScroll,R="transform 0.4s cubic-bezier(.4,0,.2,1)",W=450):M<1199.98?(r=g.tablet.items,w=g.tablet.slidesToScroll,R="transform 0.4s cubic-bezier(.4,0,.2,1)",W=450):(r=g.desktop.items,w=g.desktop.slidesToScroll,R="transform 0.4s cubic-bezier(.4,0,.2,1)",W=450),d.useLayoutEffect(()=>{A.current&&K(A.current.offsetWidth),_(n?t.length*2:0)},[a,n,r,t.length,M]);const b=(X-k*(r-1))/r;let V=n?[...N(t,t.length,!1,1),...t,...N(t,t.length,!1,2),...N(t,t.length,!0,3),...N(t,t.length,!0,4)]:t;const G=l=>{l.touches.length===1&&(q(l.touches[0].clientX),j(0),D.current=!0,f.current&&f.current.classList.add(p.dragging))},J=l=>{L!==null&&j(l.touches[0].clientX-L)},Q=()=>{I>50&&!(u||!n&&s===0)?P():I<-50&&!(u||!n&&s+r>=t.length)&&z(),q(null),j(0),D.current=!1,f.current&&f.current.classList.remove(p.dragging)},Z=l=>{q(l.clientX),j(0),D.current=!0,f.current&&f.current.classList.add(p.dragging)},ee=l=>{L!==null&&j(l.clientX-L)},ne=()=>{I>50&&!(u||!n&&s===0)?P():I<-50&&!(u||!n&&s+r>=t.length)&&z(),q(null),j(0),D.current=!1,f.current&&f.current.classList.remove(p.dragging)};d.useLayoutEffect(()=>{T.current.forEach((l,m)=>{if(!l)return;let i=0,x=0;r===1&&t.length!==1?(i=40,x=40):r===2?(i=20,x=20):r===4?(i=10,x=10):r===3&&(i=12.5,x=12.5);const re=(m-s)*(b+k-x)+(X-(b-i)*r-k*(r-1))/2;l.style.transition=u?R:"none",l.style.transform=`translateX(${re}px)`})},[s,X,u,V.length,r,b,k,a]),d.useLayoutEffect(()=>{if(!u)return;let l;const m=()=>{let i=s;s<r*2&&n?i=s+t.length*2:s>=t.length*2+r&&n&&(i=s-t.length),i!==s&&n&&_(i),E(!1),T.current.forEach(x=>{x&&x.removeEventListener("transitionend",m)}),clearTimeout(l)};return T.current.forEach(i=>{i&&i.addEventListener("transitionend",m)}),l=window.setTimeout(()=>{E(!1),T.current.forEach(i=>{i&&i.removeEventListener("transitionend",m)})},W),()=>{T.current.forEach(i=>{i&&i.removeEventListener("transitionend",m)}),clearTimeout(l)}},[s,n,u,t.length,r,V.length,a]);const z=()=>{u||(E(!0),_(l=>l+w))},P=()=>{u||(E(!0),_(l=>l-w))},le=()=>{if(!n)return s;const l=t.length;return l<1?0:(s+l)%l};return e.jsxs("div",{ref:f,className:[p.n23mSlider,"n23mSlider",h].filter(Boolean).join(" "),style:{height:a?"calc(100% - 2px)":"calc(100% - 60px)"},children:[a&&e.jsx(oe,{loaderColor:c}),!a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[p.n23mSliderContainerSlider].filter(Boolean).join(" "),onTouchStart:G,onTouchMove:J,onTouchEnd:Q,onMouseDown:Z,onMouseMove:ee,onMouseUp:ne,children:e.jsx("div",{className:[p.n23mSliderSlideWrapper,"n23mSliderSlideWrapper"].join(" "),ref:A,style:{gap:`${k}px`},children:V.map((l,m)=>e.jsx("div",{ref:i=>{T.current[m]=i},className:p.n23mSliderSlide,style:{width:r===1&&t.length===1?"100%":r===1?`calc(${b}px - 40px)`:r===2?`calc(${b}px - 20px)`:r===3?`calc(${b}px - 12.5px)`:r===4?`calc(${b}px - 10px)`:`${b}px`},"aria-hidden":m<s||m>=s+r,children:l},l.key??m))})}),e.jsxs("div",{className:[p.n23mSliderControls,"n23mSliderControls"].join(" "),style:{justifyContent:r===1?"space-between":"flex-end"},children:[r===1&&e.jsx("div",{className:[p.n23mSliderCounter,"n23mSliderCounter"].join(" "),children:e.jsx(ae,{mobileSize:16,desktopSize:16,color:"black",children:n?`${le()+1} / ${t.length}`:`${s+1} / ${t.length}`})}),e.jsxs("div",{className:[p.n23mSliderControlsButtons,"n23mSliderControlsButtons"].join(" "),children:[e.jsx(Y,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:P,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:u||!n&&s===0,children:e.jsx(ie,{width:24,height:24})}),e.jsx(Y,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:z,disabled:u||!n&&s+r>=t.length,children:e.jsx(se,{width:24,height:24})})]})]})]})]})};y.displayName="Slider";y.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mobile: { items: number; slidesToScroll: number };
  tablet: { items: number; slidesToScroll: number };
  desktop: { items: number; slidesToScroll: number };
}`,signature:{properties:[{key:"mobile",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"tablet",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"desktop",value:{name:"signature",type:"object",raw:"{ items: number; slidesToScroll: number }",signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
  mobile: { items: 1, slidesToScroll: 1 },
  tablet: { items: 2, slidesToScroll: 2 },
  desktop: { items: 3, slidesToScroll: 3 },
}`,computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const{action:C}=__STORYBOOK_MODULE_ACTIONS__,Ce={title:"Slider/Slider",component:y,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/slider';
\`\`\`
      `}}},tags:["autodocs"]},v={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},o=[{color:"red",label:"1",action:C("on-click-1")},{color:"blue",label:"2",action:C("on-click-2")},{color:"orange",label:"3",action:C("on-click-3")},{color:"green",label:"4",action:C("on-click-4")},{color:"pink",label:"5",action:C("on-click-5")}],$={args:{},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(y,{...n,children:o.map(({color:S,label:h,action:a},c)=>e.jsx("div",{style:{background:S,...v},onClick:a,children:h},c))})})},F={args:{isCircular:!0},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(y,{...n,children:o.map(({color:S,label:h,action:a},c)=>e.jsx("div",{style:{background:S,...v},onClick:a,children:h},c))})})},H={args:{},render:()=>{const n=()=>{const[S,h]=d.useState(!0);return d.useEffect(()=>{const a=setInterval(()=>{h(c=>!c)},3e3);return()=>clearInterval(a)},[]),e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(y,{loading:S,children:o.map(({color:a,label:c,action:g},k)=>e.jsx("div",{style:{background:a,...v},onClick:g,children:c},k+100))})})};return e.jsx(n,{})}},O={args:{isCircular:!1,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:1,slidesToScroll:1},desktop:{items:1,slidesToScroll:1}}},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(y,{...n,children:e.jsx("div",{style:{background:o[0].color,...v},onClick:o[0].action,children:o[0].label})})})},B={args:{isCircular:!0,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:2,slidesToScroll:2}}},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsxs(y,{...n,children:[e.jsx("div",{style:{background:o[0].color,...v},onClick:o[0].action,children:o[0].label}),e.jsx("div",{style:{background:o[1].color,...v},onClick:o[1].action,children:o[1].label}),e.jsx("div",{style:{background:o[0].color,...v},onClick:o[0].action,children:o[0].label}),e.jsx("div",{style:{background:o[1].color,...v},onClick:o[1].action,children:o[1].label})]})})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const _e=["Default","SliderCircular","SliderLoading","Slider1Slide","Slider2Slides"];export{$ as Default,O as Slider1Slide,B as Slider2Slides,F as SliderCircular,H as SliderLoading,_e as __namedExportsOrder,Ce as default};
