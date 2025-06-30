import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as c}from"./iframe-2um0mBeM.js";import{T as se}from"./TextBox-DnrhPsKE.js";import{L as le}from"./Loader-266W59Xy.js";import{a as ie,I as oe}from"./IconArrowRight-DaV6Kolw.js";const ae="_najwer23morselsSliderContainer_19yfw_2",ce="_najwer23morselsSliderContainerSlider_19yfw_6",de="_najwer23morselsSlideWrapper_19yfw_16",ue="_najwer23morselsSlide_19yfw_2",pe="_najwer23morselsBtnControl_19yfw_37",me="_najwer23morselsBtn_19yfw_37",he="_najwer23morselsSliderCounter_19yfw_94",x={najwer23morselsSliderContainer:ae,najwer23morselsSliderContainerSlider:ce,najwer23morselsSlideWrapper:de,najwer23morselsSlide:ue,najwer23morselsBtnControl:pe,najwer23morselsBtn:me,najwer23morselsSliderCounter:he},K=(r,l,t=!1)=>(t?r.slice(0,l):r.slice(-l)).map((i,o)=>C.cloneElement(i,{key:`${t?"clone-first":"clone-last"}-${o}`,className:i.props.className})),p=({isCircular:r=!1,children:l,className:t,arrowsColor:i,arrowsColorBackground:o,arrowsColorBorder:Y,showCounter:z=!0,loading:S=!1,loaderColor:J="black"})=>{const d=C.Children.toArray(l).filter(C.isValidElement),[u,w]=c.useState(r&&d.length>=2?2:0),[m,v]=c.useState(!1),[D,Q]=c.useState(0),[$,Z]=c.useState(0),X=c.useRef(null),g=c.useRef([]),k=c.useRef(null),[H,P]=c.useState(null),[V,M]=c.useState(0),ee=e=>{e.touches.length===1&&(P(e.touches[0].clientX),M(0))},ne=e=>{H!==null&&M(e.touches[0].clientX-H)},re=()=>{V>50?G():V<-50&&F(),P(null),M(0)},b=r&&d.length>=2?[...K(d,2,!1),...d.map((e,s)=>C.cloneElement(e,{key:e.key??s,className:e.props.className})),...K(d,2,!0)]:d.map((e,s)=>C.cloneElement(e,{key:e.key??s,className:e.props.className}));g.current.length!==b.length&&(g.current=Array(b.length).fill(null)),c.useEffect(()=>{w(r&&d.length>=2?2:0)},[r,d.length,S]);const O=c.useCallback(()=>{const e=X.current;if(!e)return;const s=g.current[0];if(!s)return;const a=window.getComputedStyle(s);Q(s.offsetWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)),Z(e.offsetWidth)},[]);c.useEffect(()=>{O();const e=()=>{k.current!==null&&clearTimeout(k.current),k.current=window.setTimeout(()=>{O(),v(!0)},150)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),k.current!==null&&clearTimeout(k.current)}},[O,S]),c.useEffect(()=>{const s=D+10;g.current.forEach((a,f)=>{if(!a)return;const y=(f-u)*s+($-D)/2;a.style.transition=m?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",a.style.transform=`translateX(${y}px)`,a.style.left=""})},[u,D,$,m,b.length,r,S]),c.useEffect(()=>{if(!m||!r)return;const e=g.current.length,s=g.current[e-1];if(!s)return;let a;const f=()=>{let y=u;u===1?y=e-3:u===e-2&&(y=2),y!==u&&w(y),v(!1),s.removeEventListener("transitionend",f),clearTimeout(a)};return s.addEventListener("transitionend",f),a=window.setTimeout(()=>{v(!1),s.removeEventListener("transitionend",f)},500),()=>{s.removeEventListener("transitionend",f),clearTimeout(a)}},[u,r,m,S]),c.useEffect(()=>{if(!m)return;const e=g.current[0];if(!e)return;let s;const a=()=>{v(!1),e.removeEventListener("transitionend",a),clearTimeout(s)};return e.addEventListener("transitionend",a),s=window.setTimeout(()=>{v(!1),e.removeEventListener("transitionend",a)},500),()=>{e.removeEventListener("transitionend",a),clearTimeout(s)}},[m,S]);const F=()=>{m||(v(!0),w(r?e=>e+1:e=>Math.min(e+1,b.length-1)))},G=()=>{m||(v(!0),w(r?e=>e-1:e=>Math.max(e-1,0)))},te=()=>{if(!r)return u;const e=d.length;return e<1?0:(u-2+e)%e};return n.jsxs("div",{className:[x.najwer23morselsSliderContainer,"MorselsSlider",t].filter(Boolean).join(" "),style:{height:S?"calc(100% - 2px)":z?"calc(100% - 35px)":"100%"},onTouchStart:ee,onTouchMove:ne,onTouchEnd:re,children:[S&&n.jsx(le,{loaderColor:J}),!S&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:[x.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),style:{"--slider-ac":i,"--slider-acbg":o,"--slider-acb":Y},children:[n.jsxs("div",{className:[x.najwer23morselsBtnControl,"MorselsSliderControl",t].join(" "),style:{justifyContent:r?"space-between":u===0?"flex-end":u===d.length-1?"flex-start":"space-between"},children:[(r&&d.length>1||u!==0)&&n.jsx("button",{title:"Prev",className:x.najwer23morselsBtn,onClick:G,disabled:m,children:n.jsx(ie,{width:24,height:24})}),(r&&d.length>1||u!==d.length-1)&&n.jsx("button",{title:"Next",className:x.najwer23morselsBtn,onClick:F,disabled:m,children:n.jsx(oe,{width:24,height:24})})]}),n.jsx("div",{className:[x.najwer23morselsSlideWrapper,"MorselsSliderWrapper",t].join(" "),ref:X,children:b.map((e,s)=>n.jsx("div",{ref:a=>{g.current[s]=a},className:`${x.najwer23morselsSlide}`,style:{width:d.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":u!==s,children:e},e.key??s))})]}),z&&n.jsx("div",{className:[x.najwer23morselsSliderCounter,"MorselsSliderCounter",t].join(" "),children:n.jsx(se,{mobileSize:16,desktopSize:16,color:"black",children:r?`${te()+1} / ${d.length}`:`${u+1} / ${d.length}`})})]})]})};p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Slider/Slider",component:p,parameters:{layout:"centered"},tags:["autodocs"]},h={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},T=[{color:"red",label:"1",action:j("on-click-1")},{color:"blue",label:"2",action:j("on-click-2")},{color:"orange",label:"3",action:j("on-click-3")},{color:"green",label:"4",action:j("on-click-4")}],q=T.slice(0,2),U=T.slice(0,1),E={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:T.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},_={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:T.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},L={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},I={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},B={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:U.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},W={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:U.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},N={args:{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue"},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:T.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},R={args:{showCounter:!1},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},A={args:{},render:()=>{const r=()=>{const[l,t]=c.useState(!0);return c.useEffect(()=>{const i=setInterval(()=>{t(o=>!o)},5e3);return()=>clearInterval(i)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsxs(p,{loading:l,children:[n.jsx("div",{style:{background:"red",...h},onClick:j("on-click-1"),children:"1"}),n.jsx("div",{style:{background:"green",...h},onClick:j("on-click-2"),children:"2"})]})})};return n.jsx(r,{})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    arrowsColorBackground: 'yellow',
    arrowsColor: 'blue',
    arrowsColorBorder: 'blue'
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
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: false
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
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const ye=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SliderArrowsStyle","SliderWithoutCounter","SliderLoading"];export{E as Default,W as Slider1Slide,L as Slider2Slides,N as SliderArrowsStyle,_ as SliderCircular,B as SliderCircular1Slide,I as SliderCircular2Slides,A as SliderLoading,R as SliderWithoutCounter,ye as __namedExportsOrder,fe as default};
