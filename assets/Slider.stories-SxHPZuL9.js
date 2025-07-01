import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as c}from"./iframe-Ch_lF0va.js";import{T as ee}from"./TextBox-DnrhPsKE.js";import{L as ne}from"./Loader-266W59Xy.js";import{a as re,I as te}from"./IconArrowRight-DaV6Kolw.js";import{B as H}from"./Button-Cr_pwSk9.js";const se="_najwer23morselsSliderContainer_gso1t_2",le="_najwer23morselsSliderContainerSlider_gso1t_6",ie="_najwer23morselsSlideWrapper_gso1t_16",oe="_najwer23morselsSlide_gso1t_2",ae="_najwer23morselsSliderControls_gso1t_37",ce="_najwer23morselsSliderControlsButtons_gso1t_45",de="_najwer23morselsSliderCounter_gso1t_51",x={najwer23morselsSliderContainer:se,najwer23morselsSliderContainerSlider:le,najwer23morselsSlideWrapper:ie,najwer23morselsSlide:oe,najwer23morselsSliderControls:ae,najwer23morselsSliderControlsButtons:ce,najwer23morselsSliderCounter:de},P=(r,i,o=!1)=>(o?r.slice(0,i):r.slice(-i)).map((l,t)=>C.cloneElement(l,{key:`${o?"clone-first":"clone-last"}-${t}`,className:l.props.className})),p=({isCircular:r=!1,children:i,className:o,showControls:l=!0,loading:t=!1,loaderColor:G="black"})=>{const d=C.Children.toArray(i).filter(C.isValidElement),[u,v]=c.useState(r&&d.length>=2?2:0),[m,g]=c.useState(!1),[F,K]=c.useState(0),[D,U]=c.useState(0),M=c.useRef(null),h=c.useRef([]),y=c.useRef(null),[A,O]=c.useState(null),[z,R]=c.useState(0),Y=e=>{e.touches.length===1&&(O(e.touches[0].clientX),R(0))},J=e=>{A!==null&&R(e.touches[0].clientX-A)},Q=()=>{z>50?X():z<-50&&$(),O(null),R(0)},k=r&&d.length>=2?[...P(d,2,!1),...d.map((e,s)=>C.cloneElement(e,{key:e.key??s,className:e.props.className})),...P(d,2,!0)]:d.map((e,s)=>C.cloneElement(e,{key:e.key??s,className:e.props.className}));h.current.length!==k.length&&(h.current=Array(k.length).fill(null)),c.useEffect(()=>{v(r&&d.length>=2?2:0)},[r,d.length,t]);const B=c.useCallback(()=>{const e=M.current;if(!e)return;const s=h.current[0];if(!s)return;const a=window.getComputedStyle(s);K(s.offsetWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)),U(e.offsetWidth)},[]);c.useLayoutEffect(()=>{B();const e=()=>{y.current!==null&&clearTimeout(y.current),y.current=window.setTimeout(()=>{B(),g(!0)},150)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),y.current!==null&&clearTimeout(y.current)}},[B,t]),c.useEffect(()=>{const s=F+10;h.current.forEach((a,f)=>{if(!a)return;const w=(f-u)*s+(D-F)/2;a.style.transition=m?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",a.style.transform=`translateX(${w}px)`,a.style.left=""})},[u,F,D,m,k.length,r,t]),c.useEffect(()=>{if(!m||!r)return;const e=h.current.length,s=h.current[e-1];if(!s)return;let a;const f=()=>{let w=u;u===1?w=e-3:u===e-2&&(w=2),w!==u&&v(w),g(!1),s.removeEventListener("transitionend",f),clearTimeout(a)};return s.addEventListener("transitionend",f),a=window.setTimeout(()=>{g(!1),s.removeEventListener("transitionend",f)},500),()=>{s.removeEventListener("transitionend",f),clearTimeout(a)}},[u,r,m,t]),c.useEffect(()=>{if(!m)return;const e=h.current[0];if(!e)return;let s;const a=()=>{g(!1),e.removeEventListener("transitionend",a),clearTimeout(s)};return e.addEventListener("transitionend",a),s=window.setTimeout(()=>{g(!1),e.removeEventListener("transitionend",a)},500),()=>{e.removeEventListener("transitionend",a),clearTimeout(s)}},[m,t]);const $=()=>{m||(g(!0),v(r?e=>e+1:e=>Math.min(e+1,k.length-1)))},X=()=>{m||(g(!0),v(r?e=>e-1:e=>Math.max(e-1,0)))},Z=()=>{if(!r)return u;const e=d.length;return e<1?0:(u-2+e)%e};return n.jsxs("div",{className:[x.najwer23morselsSliderContainer,"MorselsSlider",o].filter(Boolean).join(" "),style:{height:t?"calc(100% - 2px)":l&&d.length>1?"calc(100% - 60px)":"100%"},onTouchStart:Y,onTouchMove:J,onTouchEnd:Q,children:[t&&n.jsx(ne,{loaderColor:G}),!t&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[x.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),children:n.jsx("div",{className:[x.najwer23morselsSlideWrapper,"MorselsSliderWrapper"].join(" "),ref:M,children:k.map((e,s)=>n.jsx("div",{ref:a=>{h.current[s]=a},className:`${x.najwer23morselsSlide}`,style:{width:d.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":u!==s,children:e},e.key??s))})}),l&&d.length>1&&n.jsxs("div",{className:[x.najwer23morselsSliderControls,"MorselsSliderControls"].join(" "),children:[n.jsx("div",{className:[x.najwer23morselsSliderCounter,"MorselsSliderCounter"].join(" "),children:n.jsx(ee,{mobileSize:16,desktopSize:16,color:"black",children:r?`${Z()+1} / ${d.length}`:`${u+1} / ${d.length}`})}),n.jsxs("div",{className:[x.najwer23morselsSliderControlsButtons,"MorselsSliderControlsButtons"].join(" "),children:[n.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:X,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:m||!r&&u===0,children:n.jsx(re,{width:24,height:24})}),n.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:$,disabled:m||!r&&u==d.length-1,children:n.jsx(te,{width:24,height:24})})]})]})]})]})};p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Slider/Slider",component:p,parameters:{layout:"centered"},tags:["autodocs"]},S={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},W=[{color:"red",label:"1",action:j("on-click-1")},{color:"blue",label:"2",action:j("on-click-2")},{color:"orange",label:"3",action:j("on-click-3")},{color:"green",label:"4",action:j("on-click-4")}],V=W.slice(0,2),q=W.slice(0,1),b={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:W.map(({color:i,label:o,action:l},t)=>n.jsx("div",{style:{background:i,...S},onClick:l,children:o},t))})})},E={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:i,label:o,action:l},t)=>n.jsx("div",{style:{background:i,...S},onClick:l,children:o},t))})})},T={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:V.map(({color:i,label:o,action:l},t)=>n.jsx("div",{style:{background:i,...S},onClick:l,children:o},t))})})},_={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:W.map(({color:i,label:o,action:l},t)=>n.jsx("div",{style:{background:i,...S},onClick:l,children:o},t))})})},L={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:i,label:o,action:l},t)=>n.jsx("div",{style:{background:i,...S},onClick:l,children:o},t))})})},I={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:V.map(({color:i,label:o,action:l},t)=>n.jsx("div",{style:{background:i,...S},onClick:l,children:o},t))})})},N={args:{},render:()=>{const r=()=>{const[i,o]=c.useState(!0);return c.useEffect(()=>{const l=setInterval(()=>{o(t=>!t)},5e3);return()=>clearInterval(l)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsxs(p,{loading:i,children:[n.jsx("div",{style:{background:"red",...S},onClick:j("on-click-1"),children:"1"}),n.jsx("div",{style:{background:"green",...S},onClick:j("on-click-2"),children:"2"})]})})};return n.jsx(r,{})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {oneSlide.map(({
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {twoSlides.map(({
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
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {oneSlide.map(({
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
        {twoSlides.map(({
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
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
          <Slider loading={loading}>
            <div style={{
            background: 'red',
            ...slideStyle
          }} onClick={action('on-click-1')}>
              1
            </div>
            <div style={{
            background: 'green',
            ...slideStyle
          }} onClick={action('on-click-2')}>
              2
            </div>
          </Slider>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...N.parameters?.docs?.source}}};const ve=["Default","Slider1Slide","Slider2Slides","SliderCircular","SliderCircular1Slide","SliderCircular2Slides","SliderLoading"];export{b as Default,E as Slider1Slide,T as Slider2Slides,_ as SliderCircular,L as SliderCircular1Slide,I as SliderCircular2Slides,N as SliderLoading,ve as __namedExportsOrder,xe as default};
