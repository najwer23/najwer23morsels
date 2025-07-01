import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as w,r as c}from"./iframe-CvahZF3I.js";import{T as ee}from"./TextBox-C5QJzpaH.js";import{L as ne}from"./Loader-C4fRsJDM.js";import{a as re,I as te}from"./IconArrowRight-DaV6Kolw.js";import{B as H}from"./Button-C-kEW8vv.js";const ie="_n23mSliderContainer_1v804_2",le="_n23mSliderContainerSlider_1v804_6",se="_n23mSlideWrapper_1v804_16",oe="_n23mSlide_1v804_2",ae="_n23mSliderControls_1v804_37",ce="_n23mSliderControlsButtons_1v804_45",de="_n23mSliderCounter_1v804_51",v={n23mSliderContainer:ie,n23mSliderContainerSlider:le,n23mSlideWrapper:se,n23mSlide:oe,n23mSliderControls:ae,n23mSliderControlsButtons:ce,n23mSliderCounter:de},P=(r,s,o=!1)=>(o?r.slice(0,s):r.slice(-s)).map((l,t)=>w.cloneElement(l,{key:`${o?"clone-first":"clone-last"}-${t}`,className:l.props.className})),p=({isCircular:r=!1,children:s,className:o,showControls:l=!0,loading:t=!1,loaderColor:G="black"})=>{const d=w.Children.toArray(s).filter(w.isValidElement),[u,x]=c.useState(r&&d.length>=2?2:0),[m,g]=c.useState(!1),[F,K]=c.useState(0),[D,U]=c.useState(0),M=c.useRef(null),h=c.useRef([]),C=c.useRef(null),[A,O]=c.useState(null),[z,R]=c.useState(0),Y=e=>{e.touches.length===1&&(O(e.touches[0].clientX),R(0))},J=e=>{A!==null&&R(e.touches[0].clientX-A)},Q=()=>{z>50?X():z<-50&&$(),O(null),R(0)},b=r&&d.length>=2?[...P(d,2,!1),...d.map((e,i)=>w.cloneElement(e,{key:e.key??i,className:e.props.className})),...P(d,2,!0)]:d.map((e,i)=>w.cloneElement(e,{key:e.key??i,className:e.props.className}));h.current.length!==b.length&&(h.current=Array(b.length).fill(null)),c.useEffect(()=>{x(r&&d.length>=2?2:0)},[r,d.length,t]);const B=c.useCallback(()=>{const e=M.current;if(!e)return;const i=h.current[0];if(!i)return;const a=window.getComputedStyle(i);K(i.offsetWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)),U(e.offsetWidth)},[]);c.useLayoutEffect(()=>{B();const e=()=>{C.current!==null&&clearTimeout(C.current),C.current=window.setTimeout(()=>{B(),g(!0)},150)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),C.current!==null&&clearTimeout(C.current)}},[B,t]),c.useEffect(()=>{const i=F+10;h.current.forEach((a,f)=>{if(!a)return;const y=(f-u)*i+(D-F)/2;a.style.transition=m?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",a.style.transform=`translateX(${y}px)`,a.style.left=""})},[u,F,D,m,b.length,r,t]),c.useEffect(()=>{if(!m||!r)return;const e=h.current.length,i=h.current[e-1];if(!i)return;let a;const f=()=>{let y=u;u===1?y=e-3:u===e-2&&(y=2),y!==u&&x(y),g(!1),i.removeEventListener("transitionend",f),clearTimeout(a)};return i.addEventListener("transitionend",f),a=window.setTimeout(()=>{g(!1),i.removeEventListener("transitionend",f)},500),()=>{i.removeEventListener("transitionend",f),clearTimeout(a)}},[u,r,m,t]),c.useEffect(()=>{if(!m)return;const e=h.current[0];if(!e)return;let i;const a=()=>{g(!1),e.removeEventListener("transitionend",a),clearTimeout(i)};return e.addEventListener("transitionend",a),i=window.setTimeout(()=>{g(!1),e.removeEventListener("transitionend",a)},500),()=>{e.removeEventListener("transitionend",a),clearTimeout(i)}},[m,t]);const $=()=>{m||(g(!0),x(r?e=>e+1:e=>Math.min(e+1,b.length-1)))},X=()=>{m||(g(!0),x(r?e=>e-1:e=>Math.max(e-1,0)))},Z=()=>{if(!r)return u;const e=d.length;return e<1?0:(u-2+e)%e};return n.jsxs("div",{className:[v.n23mSliderContainer,"MorselsSlider",o].filter(Boolean).join(" "),style:{height:t?"calc(100% - 2px)":l&&d.length>1?"calc(100% - 60px)":"100%"},onTouchStart:Y,onTouchMove:J,onTouchEnd:Q,children:[t&&n.jsx(ne,{loaderColor:G}),!t&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[v.n23mSliderContainerSlider].filter(Boolean).join(" "),children:n.jsx("div",{className:[v.n23mSlideWrapper,"MorselsSliderWrapper"].join(" "),ref:M,children:b.map((e,i)=>n.jsx("div",{ref:a=>{h.current[i]=a},className:`${v.n23mSlide}`,style:{width:d.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":u!==i,children:e},e.key??i))})}),l&&d.length>1&&n.jsxs("div",{className:[v.n23mSliderControls,"MorselsSliderControls"].join(" "),children:[n.jsx("div",{className:[v.n23mSliderCounter,"MorselsSliderCounter"].join(" "),children:n.jsx(ee,{mobileSize:16,desktopSize:16,color:"black",children:r?`${Z()+1} / ${d.length}`:`${u+1} / ${d.length}`})}),n.jsxs("div",{className:[v.n23mSliderControlsButtons,"MorselsSliderControlsButtons"].join(" "),children:[n.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:X,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:m||!r&&u===0,children:n.jsx(re,{width:24,height:24})}),n.jsx(H,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:$,disabled:m||!r&&u==d.length-1,children:n.jsx(te,{width:24,height:24})})]})]})]})]})};p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,ve={title:"Slider/Slider",component:p,parameters:{layout:"centered"},tags:["autodocs"]},S={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},W=[{color:"red",label:"1",action:k("on-click-1")},{color:"blue",label:"2",action:k("on-click-2")},{color:"orange",label:"3",action:k("on-click-3")},{color:"green",label:"4",action:k("on-click-4")}],V=W.slice(0,2),q=W.slice(0,1),j={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:W.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},E={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},T={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:V.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},_={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:W.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},L={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},I={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:V.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},N={args:{},render:()=>{const r=()=>{const[s,o]=c.useState(!0);return c.useEffect(()=>{const l=setInterval(()=>{o(t=>!t)},5e3);return()=>clearInterval(l)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsxs(p,{loading:s,children:[n.jsx("div",{style:{background:"red",...S},onClick:k("on-click-1"),children:"1"}),n.jsx("div",{style:{background:"green",...S},onClick:k("on-click-2"),children:"2"})]})})};return n.jsx(r,{})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const xe=["Default","Slider1Slide","Slider2Slides","SliderCircular","SliderCircular1Slide","SliderCircular2Slides","SliderLoading"];export{j as Default,E as Slider1Slide,T as Slider2Slides,_ as SliderCircular,L as SliderCircular1Slide,I as SliderCircular2Slides,N as SliderLoading,xe as __namedExportsOrder,ve as default};
