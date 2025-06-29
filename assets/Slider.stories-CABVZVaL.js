import{j as e,T as J}from"./TextBox-C8vlbGZ1.js";import{R as b,r as u}from"./iframe-DoD-vpM0.js";import{L as Q}from"./Loader-DSpAFej6.js";const Z="_najwer23morselsSliderContainer_d3u9y_2",ee="_najwer23morselsSliderContainerSlider_d3u9y_5",ne="_najwer23morselsSlideWrapper_d3u9y_15",re="_najwer23morselsSlide_d3u9y_2",se="_najwer23morselsBtnControl_d3u9y_36",te="_najwer23morselsBtn_d3u9y_36",le="_najwer23morselsSliderCounter_d3u9y_91",x={najwer23morselsSliderContainer:Z,najwer23morselsSliderContainerSlider:ee,najwer23morselsSlideWrapper:ne,najwer23morselsSlide:re,najwer23morselsBtnControl:se,najwer23morselsBtn:te,najwer23morselsSliderCounter:le},D=(r,l,s=!1)=>(s?r.slice(0,l):r.slice(-l)).map((i,o)=>b.cloneElement(i,{key:`${s?"clone-first":"clone-last"}-${o}`,className:i.props.className})),p=({isCircular:r=!1,children:l,className:s,arrowsColor:i,arrowsColorBackground:o,arrowsColorBorder:P,showCounter:$=!0,loading:g=!1,loaderColor:G="black"})=>{const d=b.Children.toArray(l).filter(b.isValidElement),[c,w]=u.useState(r&&d.length>=2?2:0),[m,v]=u.useState(!1),[A,K]=u.useState(0),[O,U]=u.useState(0),V=u.useRef(null),S=u.useRef([]),k=u.useRef(null),C=r&&d.length>=2?[...D(d,2,!1),...d.map((n,t)=>b.cloneElement(n,{key:n.key??t,className:n.props.className})),...D(d,2,!0)]:d.map((n,t)=>b.cloneElement(n,{key:n.key??t,className:n.props.className}));S.current.length!==C.length&&(S.current=Array(C.length).fill(null)),u.useEffect(()=>{w(r&&d.length>=2?2:0)},[r,d.length,g]);const M=u.useCallback(()=>{const n=V.current;if(!n)return;const t=S.current[0];if(!t)return;const a=window.getComputedStyle(t);K(t.offsetWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)),U(n.offsetWidth)},[]);u.useEffect(()=>{M();const n=()=>{k.current!==null&&clearTimeout(k.current),k.current=window.setTimeout(()=>{M(),v(!0)},150)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),k.current!==null&&clearTimeout(k.current)}},[M,g]),u.useEffect(()=>{const t=A+10;S.current.forEach((a,f)=>{if(!a)return;const y=(f-c)*t+(O-A)/2;a.style.transition=m?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",a.style.transform=`translateX(${y}px)`,a.style.left=""})},[c,A,O,m,C.length,r,g]),u.useEffect(()=>{if(!m||!r)return;const n=S.current.length,t=S.current[n-1];if(!t)return;let a;const f=()=>{let y=c;c===1?y=n-3:c===n-2&&(y=2),y!==c&&w(y),v(!1),t.removeEventListener("transitionend",f),clearTimeout(a)};return t.addEventListener("transitionend",f),a=window.setTimeout(()=>{v(!1),t.removeEventListener("transitionend",f)},500),()=>{t.removeEventListener("transitionend",f),clearTimeout(a)}},[c,r,m,g]),u.useEffect(()=>{if(!m)return;const n=S.current[0];if(!n)return;let t;const a=()=>{v(!1),n.removeEventListener("transitionend",a),clearTimeout(t)};return n.addEventListener("transitionend",a),t=window.setTimeout(()=>{v(!1),n.removeEventListener("transitionend",a)},500),()=>{n.removeEventListener("transitionend",a),clearTimeout(t)}},[m,g]);const X=()=>{m||(v(!0),w(r?n=>n+1:n=>Math.min(n+1,C.length-1)))},Y=()=>{m||(v(!0),w(r?n=>n-1:n=>Math.max(n-1,0)))},H=()=>{if(!r)return c;const n=d.length;return n<1?0:(c-2+n)%n};return e.jsxs("div",{className:[x.najwer23morselsSliderContainer,"MorselsSlider",s].filter(Boolean).join(" "),style:{height:g?"calc(100% - 2px)":$?"calc(100% - 35px)":"100%"},children:[g&&e.jsx(Q,{loaderColor:G}),!g&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:[x.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),style:{"--slider-ac":i,"--slider-acbg":o,"--slider-acb":P},children:[e.jsxs("div",{className:[x.najwer23morselsBtnControl,"MorselsSliderControl",s].join(" "),style:{justifyContent:r?"space-between":c===0?"flex-end":c===d.length-1?"flex-start":"space-between"},children:[(r&&d.length>1||c!==0)&&e.jsx("button",{title:"Prev",className:x.najwer23morselsBtn,onClick:Y,disabled:m,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(r&&d.length>1||c!==d.length-1)&&e.jsx("button",{title:"Next",className:x.najwer23morselsBtn,onClick:X,disabled:m,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]}),e.jsx("div",{className:[x.najwer23morselsSlideWrapper,"MorselsSliderWrapper",s].join(" "),ref:V,children:C.map((n,t)=>e.jsx("div",{ref:a=>{S.current[t]=a},className:`${x.najwer23morselsSlide}`,style:{width:d.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":c!==t,children:n},n.key??t))})]}),$&&e.jsx("div",{className:[x.najwer23morselsSliderCounter,"MorselsSliderCounter",s].join(" "),children:e.jsx(J,{mobileSize:16,desktopSize:16,color:"black",children:r?`${H()+1} / ${d.length}`:`${c+1} / ${d.length}`})})]})]})};p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Slider/Slider",component:p,parameters:{layout:"centered"},tags:["autodocs"]},h={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},_=[{color:"red",label:"1",action:j("on-click-1")},{color:"blue",label:"2",action:j("on-click-2")},{color:"orange",label:"3",action:j("on-click-3")},{color:"green",label:"4",action:j("on-click-4")}],q=_.slice(0,2),F=_.slice(0,1),E={args:{},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:_.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},T={args:{isCircular:!0},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:_.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},L={args:{},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:q.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},B={args:{isCircular:!0},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:q.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},N={args:{isCircular:!0},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:F.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},W={args:{},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:F.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},I={args:{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue"},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:_.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},R={args:{showCounter:!1},render:r=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(p,{...r,children:q.map(({color:l,label:s,action:i},o)=>e.jsx("div",{style:{background:l,...h},onClick:i,children:s},o))})})},z={args:{},render:()=>{const r=()=>{const[l,s]=u.useState(!0);return u.useEffect(()=>{const i=setInterval(()=>{s(o=>!o)},5e3);return()=>clearInterval(i)},[]),e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsxs(p,{loading:l,children:[e.jsx("div",{style:{background:"red",...h},onClick:j("on-click-1"),children:"1"}),e.jsx("div",{style:{background:"green",...h},onClick:j("on-click-2"),children:"2"})]})})};return e.jsx(r,{})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const ce=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SliderArrowsStyle","SliderWithoutCounter","SliderLoading"];export{E as Default,W as Slider1Slide,L as Slider2Slides,I as SliderArrowsStyle,T as SliderCircular,N as SliderCircular1Slide,B as SliderCircular2Slides,z as SliderLoading,R as SliderWithoutCounter,ce as __namedExportsOrder,de as default};
