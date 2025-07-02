import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as C,r as d}from"./iframe-CIHVnIse.js";import{T as ee}from"./TextBox-DUyBA2BJ.js";import{L as ne}from"./Loader-DGIwYgTZ.js";import{a as re,I as te}from"./IconArrowRight-DaV6Kolw.js";import{B as P}from"./Button-BYp4GKOj.js";const ie="_n23mSliderContainerSlider_17751_6",le="_n23mSliderSlideWrapper_17751_16",se="_n23mSliderSlide_17751_16",oe="_n23mSliderControls_17751_37",ae="_n23mSliderControlsButtons_17751_45",de="_n23mSliderCounter_17751_51",f={n23mSliderContainerSlider:ie,n23mSliderSlideWrapper:le,n23mSliderSlide:se,n23mSliderControls:oe,n23mSliderControlsButtons:ae,n23mSliderCounter:de},V=(r,s,o=!1)=>(o?r.slice(0,s):r.slice(-s)).map((l,t)=>C.cloneElement(l,{key:`${o?"clone-first":"clone-last"}-${t}`,className:l.props.className})),p=({isCircular:r=!1,children:s,className:o,showControls:l=!0,loading:t=!1,loaderColor:G="black"})=>{const c=C.Children.toArray(s).filter(C.isValidElement),[u,v]=d.useState(r&&c.length>=2?2:0),[m,g]=d.useState(!1),[F,Y]=d.useState(0),[D,K]=d.useState(0),A=d.useRef(null),h=d.useRef([]),b=d.useRef(null),[O,z]=d.useState(null),[$,R]=d.useState(0),U=e=>{e.touches.length===1&&(z(e.touches[0].clientX),R(0))},J=e=>{O!==null&&R(e.touches[0].clientX-O)},Q=()=>{$>50?H():$<-50&&X(),z(null),R(0)},w=r&&c.length>=2?[...V(c,2,!1),...c.map((e,i)=>C.cloneElement(e,{key:e.key??i,className:e.props.className})),...V(c,2,!0)]:c.map((e,i)=>C.cloneElement(e,{key:e.key??i,className:e.props.className}));h.current.length!==w.length&&(h.current=Array(w.length).fill(null)),d.useEffect(()=>{v(r&&c.length>=2?2:0)},[r,c.length,t]);const B=d.useCallback(()=>{const e=A.current;if(!e)return;const i=h.current[0];if(!i)return;const a=window.getComputedStyle(i);Y(i.offsetWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)),K(e.offsetWidth)},[]);d.useLayoutEffect(()=>{B();const e=()=>{b.current!==null&&clearTimeout(b.current),b.current=window.setTimeout(()=>{B(),g(!0)},150)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),b.current!==null&&clearTimeout(b.current)}},[B,t]),d.useEffect(()=>{const i=F+10;h.current.forEach((a,x)=>{if(!a)return;const y=(x-u)*i+(D-F)/2;a.style.transition=m?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",a.style.transform=`translateX(${y}px)`,a.style.left=""})},[u,F,D,m,w.length,r,t]),d.useEffect(()=>{if(!m||!r)return;const e=h.current.length,i=h.current[e-1];if(!i)return;let a;const x=()=>{let y=u;u===1?y=e-3:u===e-2&&(y=2),y!==u&&v(y),g(!1),i.removeEventListener("transitionend",x),clearTimeout(a)};return i.addEventListener("transitionend",x),a=window.setTimeout(()=>{g(!1),i.removeEventListener("transitionend",x)},500),()=>{i.removeEventListener("transitionend",x),clearTimeout(a)}},[u,r,m,t]),d.useEffect(()=>{if(!m)return;const e=h.current[0];if(!e)return;let i;const a=()=>{g(!1),e.removeEventListener("transitionend",a),clearTimeout(i)};return e.addEventListener("transitionend",a),i=window.setTimeout(()=>{g(!1),e.removeEventListener("transitionend",a)},500),()=>{e.removeEventListener("transitionend",a),clearTimeout(i)}},[m,t]);const X=()=>{m||(g(!0),v(r?e=>e+1:e=>Math.min(e+1,w.length-1)))},H=()=>{m||(g(!0),v(r?e=>e-1:e=>Math.max(e-1,0)))},Z=()=>{if(!r)return u;const e=c.length;return e<1?0:(u-2+e)%e};return n.jsxs("div",{className:[f.n23mSlider,"n23mSlider",o].filter(Boolean).join(" "),style:{height:t?"calc(100% - 2px)":l&&c.length>1?"calc(100% - 60px)":"100%"},onTouchStart:U,onTouchMove:J,onTouchEnd:Q,children:[t&&n.jsx(ne,{loaderColor:G}),!t&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[f.n23mSliderContainerSlider,"n23mSliderContainerSlider"].filter(Boolean).join(" "),children:n.jsx("div",{className:[f.n23mSliderSlideWrapper,"n23mSliderSlideWrapper"].join(" "),ref:A,children:w.map((e,i)=>n.jsx("div",{ref:a=>{h.current[i]=a},className:`${f.n23mSliderSlide}`,style:{width:c.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":u!==i,children:e},e.key??i))})}),l&&c.length>1&&n.jsxs("div",{className:[f.n23mSliderControls,"n23mSliderControls"].join(" "),children:[n.jsx("div",{className:[f.n23mSliderCounter,"n23mSliderCounter"].join(" "),children:n.jsx(ee,{mobileSize:16,desktopSize:16,color:"black",children:r?`${Z()+1} / ${c.length}`:`${u+1} / ${c.length}`})}),n.jsxs("div",{className:[f.n23mSliderControlsButtons,"n23mSliderControlsButtons"].join(" "),children:[n.jsx(P,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:H,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:m||!r&&u===0,children:n.jsx(re,{width:24,height:24})}),n.jsx(P,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:X,disabled:m||!r&&u==c.length-1,children:n.jsx(te,{width:24,height:24})})]})]})]})]})};p.displayName="Slider";p.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:k}=__STORYBOOK_MODULE_ACTIONS__,ge={title:"Slider/Slider",component:p,parameters:{layout:"centered",docs:{description:{component:`
This is a slider component that allows you to display multiple slides with various properties. It supports circular navigation, loading states, and can handle different numbers of slides.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
\`\`\`
      `}}},tags:["autodocs"]},S={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},W=[{color:"red",label:"1",action:k("on-click-1")},{color:"blue",label:"2",action:k("on-click-2")},{color:"orange",label:"3",action:k("on-click-3")},{color:"green",label:"4",action:k("on-click-4")}],q=W.slice(0,2),M=W.slice(0,1),j={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:W.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},E={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:M.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},T={args:{},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},_={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:W.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},L={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:M.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},I={args:{isCircular:!0},render:r=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(p,{...r,children:q.map(({color:s,label:o,action:l},t)=>n.jsx("div",{style:{background:s,...S},onClick:l,children:o},t))})})},N={args:{},render:()=>{const r=()=>{const[s,o]=d.useState(!0);return d.useEffect(()=>{const l=setInterval(()=>{o(t=>!t)},3e3);return()=>clearInterval(l)},[]),n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsxs(p,{loading:s,children:[n.jsx("div",{style:{background:"red",...S},onClick:k("on-click-1"),children:"1"}),n.jsx("div",{style:{background:"green",...S},onClick:k("on-click-2"),children:"2"})]})})};return n.jsx(r,{})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
        }, 3000);
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
}`,...N.parameters?.docs?.source}}};const fe=["Default","Slider1Slide","Slider2Slides","SliderCircular","SliderCircular1Slide","SliderCircular2Slides","SliderLoading"];export{j as Default,E as Slider1Slide,T as Slider2Slides,_ as SliderCircular,L as SliderCircular1Slide,I as SliderCircular2Slides,N as SliderLoading,fe as __namedExportsOrder,ge as default};
