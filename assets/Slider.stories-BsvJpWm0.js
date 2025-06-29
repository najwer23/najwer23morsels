import{j as n,T as se}from"./TextBox-C8vlbGZ1.js";import{R as C,r as c}from"./iframe-EPore8zg.js";import{L as le}from"./Loader-DSpAFej6.js";const ie="_najwer23morselsSliderContainer_1bpeg_2",oe="_najwer23morselsSliderContainerSlider_1bpeg_5",ae="_najwer23morselsSlideWrapper_1bpeg_15",ce="_najwer23morselsSlide_1bpeg_2",de="_najwer23morselsBtnControl_1bpeg_36",ue="_najwer23morselsBtn_1bpeg_36",pe="_najwer23morselsSliderCounter_1bpeg_95",x={najwer23morselsSliderContainer:ie,najwer23morselsSliderContainerSlider:oe,najwer23morselsSlideWrapper:ae,najwer23morselsSlide:ce,najwer23morselsBtnControl:de,najwer23morselsBtn:ue,najwer23morselsSliderCounter:pe},K=(r,l,t=!1)=>(t?r.slice(0,l):r.slice(-l)).map((i,o)=>C.cloneElement(i,{key:`${t?"clone-first":"clone-last"}-${o}`,className:i.props.className})),p=({isCircular:r=!1,children:l,className:t,arrowsColor:i,arrowsColorBackground:o,arrowsColorBorder:Y,showCounter:q=!0,loading:g=!1,loaderColor:J="black"})=>{const d=C.Children.toArray(l).filter(C.isValidElement),[u,w]=c.useState(r&&d.length>=2?2:0),[m,v]=c.useState(!1),[z,Q]=c.useState(0),[$,Z]=c.useState(0),X=c.useRef(null),S=c.useRef([]),k=c.useRef(null),[H,P]=c.useState(null),[V,A]=c.useState(0),ee=e=>{e.touches.length===1&&(P(e.touches[0].clientX),A(0))},ne=e=>{H!==null&&A(e.touches[0].clientX-H)},re=()=>{V>50?G():V<-50&&F(),P(null),A(0)},b=r&&d.length>=2?[...K(d,2,!1),...d.map((e,s)=>C.cloneElement(e,{key:e.key??s,className:e.props.className})),...K(d,2,!0)]:d.map((e,s)=>C.cloneElement(e,{key:e.key??s,className:e.props.className}));S.current.length!==b.length&&(S.current=Array(b.length).fill(null)),c.useEffect(()=>{w(r&&d.length>=2?2:0)},[r,d.length,g]);const D=c.useCallback(()=>{const e=X.current;if(!e)return;const s=S.current[0];if(!s)return;const a=window.getComputedStyle(s);Q(s.offsetWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)),Z(e.offsetWidth)},[]);c.useEffect(()=>{D();const e=()=>{k.current!==null&&clearTimeout(k.current),k.current=window.setTimeout(()=>{D(),v(!0)},150)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),k.current!==null&&clearTimeout(k.current)}},[D,g]),c.useEffect(()=>{const s=z+10;S.current.forEach((a,f)=>{if(!a)return;const y=(f-u)*s+($-z)/2;a.style.transition=m?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",a.style.transform=`translateX(${y}px)`,a.style.left=""})},[u,z,$,m,b.length,r,g]),c.useEffect(()=>{if(!m||!r)return;const e=S.current.length,s=S.current[e-1];if(!s)return;let a;const f=()=>{let y=u;u===1?y=e-3:u===e-2&&(y=2),y!==u&&w(y),v(!1),s.removeEventListener("transitionend",f),clearTimeout(a)};return s.addEventListener("transitionend",f),a=window.setTimeout(()=>{v(!1),s.removeEventListener("transitionend",f)},500),()=>{s.removeEventListener("transitionend",f),clearTimeout(a)}},[u,r,m,g]),c.useEffect(()=>{if(!m)return;const e=S.current[0];if(!e)return;let s;const a=()=>{v(!1),e.removeEventListener("transitionend",a),clearTimeout(s)};return e.addEventListener("transitionend",a),s=window.setTimeout(()=>{v(!1),e.removeEventListener("transitionend",a)},500),()=>{e.removeEventListener("transitionend",a),clearTimeout(s)}},[m,g]);const F=()=>{m||(v(!0),w(r?e=>e+1:e=>Math.min(e+1,b.length-1)))},G=()=>{m||(v(!0),w(r?e=>e-1:e=>Math.max(e-1,0)))},te=()=>{if(!r)return u;const e=d.length;return e<1?0:(u-2+e)%e};return n.jsxs("div",{className:[x.najwer23morselsSliderContainer,"MorselsSlider",t].filter(Boolean).join(" "),style:{height:g?"calc(100% - 2px)":q?"calc(100% - 35px)":"100%"},onTouchStart:ee,onTouchMove:ne,onTouchEnd:re,children:[g&&n.jsx(le,{loaderColor:J}),!g&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:[x.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),style:{"--slider-ac":i,"--slider-acbg":o,"--slider-acb":Y},children:[n.jsxs("div",{className:[x.najwer23morselsBtnControl,"MorselsSliderControl",t].join(" "),style:{justifyContent:r?"space-between":u===0?"flex-end":u===d.length-1?"flex-start":"space-between"},children:[(r&&d.length>1||u!==0)&&n.jsx("button",{title:"Prev",className:x.najwer23morselsBtn,onClick:G,disabled:m,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:n.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(r&&d.length>1||u!==d.length-1)&&n.jsx("button",{title:"Next",className:x.najwer23morselsBtn,onClick:F,disabled:m,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:n.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]}),n.jsx("div",{className:[x.najwer23morselsSlideWrapper,"MorselsSliderWrapper",t].join(" "),ref:X,children:b.map((e,s)=>n.jsx("div",{ref:a=>{S.current[s]=a},className:`${x.najwer23morselsSlide}`,style:{width:d.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":u!==s,children:e},e.key??s))})]}),q&&n.jsx("div",{className:[x.najwer23morselsSliderCounter,"MorselsSliderCounter",t].join(" "),children:n.jsx(se,{mobileSize:16,desktopSize:16,color:"black",children:r?`${te()+1} / ${d.length}`:`${u+1} / ${d.length}`})})]})]})};p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Se={title:"Slider/Slider",component:p,parameters:{layout:"centered"},tags:["autodocs"]},h={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},T=[{color:"red",label:"1",action:j("on-click-1")},{color:"blue",label:"2",action:j("on-click-2")},{color:"orange",label:"3",action:j("on-click-3")},{color:"green",label:"4",action:j("on-click-4")}],O=T.slice(0,2),U=T.slice(0,1),E={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:T.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},_={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:T.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},L={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:O.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},B={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:O.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},W={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:U.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},N={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:U.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},I={args:{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue"},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:T.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},R={args:{showCounter:!1},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:O.map(({color:l,label:t,action:i},o)=>n.jsx("div",{style:{background:l,...h},onClick:i,children:t},o))})})},M={args:{},render:()=>{const r=()=>{const[l,t]=c.useState(!0);return c.useEffect(()=>{const i=setInterval(()=>{t(o=>!o)},5e3);return()=>clearInterval(i)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsxs(p,{loading:l,children:[n.jsx("div",{style:{background:"red",...h},onClick:j("on-click-1"),children:"1"}),n.jsx("div",{style:{background:"green",...h},onClick:j("on-click-2"),children:"2"})]})})};return n.jsx(r,{})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const xe=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SliderArrowsStyle","SliderWithoutCounter","SliderLoading"];export{E as Default,N as Slider1Slide,L as Slider2Slides,I as SliderArrowsStyle,_ as SliderCircular,W as SliderCircular1Slide,B as SliderCircular2Slides,M as SliderLoading,R as SliderWithoutCounter,xe as __namedExportsOrder,Se as default};
