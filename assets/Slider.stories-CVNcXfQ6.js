import{j as e,T as X}from"./TextBox-DuJjyhIh.js";import{R as b,r as d}from"./iframe-BUPqXGUz.js";import{L as Y}from"./Loader-pui0Euxr.js";const H="_najwer23morselsSliderContainer_vdwy4_2",J="_najwer23morselsSliderContainerSlider_vdwy4_5",Q="_najwer23morselsSlideWrapper_vdwy4_15",Z="_najwer23morselsSlide_vdwy4_2",ee="_najwer23morselsBtnControl_vdwy4_36",ne="_najwer23morselsBtn_vdwy4_36",re="_najwer23morselsSliderCounter_vdwy4_91",h={najwer23morselsSliderContainer:H,najwer23morselsSliderContainerSlider:J,najwer23morselsSlideWrapper:Q,najwer23morselsSlide:Z,najwer23morselsBtnControl:ee,najwer23morselsBtn:ne,najwer23morselsSliderCounter:re},O=(t,g,p=!1)=>(p?t.slice(0,g):t.slice(-g)).map((x,f)=>b.cloneElement(x,{key:`${p?"clone-first":"clone-last"}-${f}`,className:x.props.className})),a=({isCircular:t=!1,children:g,className:p,arrowsColor:x,arrowsColorBackground:f,arrowsColorBorder:V,showCounter:M=!0,loading:m=!1,loaderColor:D="black"})=>{const o=b.Children.toArray(g).filter(b.isValidElement),[c,S]=d.useState(t&&o.length>=2?2:0),[u,k]=d.useState(!1),[z,F]=d.useState(0),[q,P]=d.useState(0),$=d.useRef(null),v=d.useRef([]),j=d.useRef(null),C=t&&o.length>=2?[...O(o,2,!1),...o.map((n,r)=>b.cloneElement(n,{key:n.key??r,className:n.props.className})),...O(o,2,!0)]:o.map((n,r)=>b.cloneElement(n,{key:n.key??r,className:n.props.className}));v.current.length!==C.length&&(v.current=Array(C.length).fill(null)),d.useEffect(()=>{S(t&&o.length>=2?2:0)},[t,o.length,m]);const A=d.useCallback(()=>{const n=$.current;if(!n)return;const r=v.current[0];if(!r)return;const s=window.getComputedStyle(r);F(r.offsetWidth+parseFloat(s.marginLeft)+parseFloat(s.marginRight)),P(n.offsetWidth)},[]);d.useEffect(()=>{A();const n=()=>{j.current!==null&&clearTimeout(j.current),j.current=window.setTimeout(()=>{A(),k(!0)},150)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),j.current!==null&&clearTimeout(j.current)}},[A,m]),d.useEffect(()=>{const r=z+10;v.current.forEach((s,y)=>{if(!s)return;const w=(y-c)*r+(q-z)/2;s.style.transition=u?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",s.style.transform=`translateX(${w}px)`,s.style.left=""})},[c,z,q,u,C.length,t,m]),d.useEffect(()=>{if(!u||!t)return;const n=v.current.length,r=v.current[n-1];if(!r)return;let s;const y=()=>{let w=c;c===1?w=n-3:c===n-2&&(w=2),w!==c&&S(w),k(!1),r.removeEventListener("transitionend",y),clearTimeout(s)};return r.addEventListener("transitionend",y),s=window.setTimeout(()=>{k(!1),r.removeEventListener("transitionend",y)},500),()=>{r.removeEventListener("transitionend",y),clearTimeout(s)}},[c,t,u,m]),d.useEffect(()=>{if(!u)return;const n=v.current[0];if(!n)return;let r;const s=()=>{k(!1),n.removeEventListener("transitionend",s),clearTimeout(r)};return n.addEventListener("transitionend",s),r=window.setTimeout(()=>{k(!1),n.removeEventListener("transitionend",s)},500),()=>{n.removeEventListener("transitionend",s),clearTimeout(r)}},[u,m]);const G=()=>{u||(k(!0),S(t?n=>n+1:n=>Math.min(n+1,C.length-1)))},K=()=>{u||(k(!0),S(t?n=>n-1:n=>Math.max(n-1,0)))},U=()=>{if(!t)return c;const n=o.length;return n<1?0:(c-2+n)%n};return e.jsxs("div",{className:[h.najwer23morselsSliderContainer,"MorselsSlider",p].filter(Boolean).join(" "),style:{height:m?"calc(100% - 2px)":M?"calc(100% - 35px)":"100%"},children:[m&&e.jsx(Y,{loaderColor:D}),!m&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:[h.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),style:{"--ac":x,"--abgc":f,"--abc":V},children:[e.jsxs("div",{className:[h.najwer23morselsBtnControl,"MorselsSliderControl",p].join(" "),style:{justifyContent:t?"space-between":c===0?"flex-end":c===o.length-1?"flex-start":"space-between"},children:[(t&&o.length>1||c!==0)&&e.jsx("button",{title:"Prev",className:h.najwer23morselsBtn,onClick:K,disabled:u,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(t&&o.length>1||c!==o.length-1)&&e.jsx("button",{title:"Next",className:h.najwer23morselsBtn,onClick:G,disabled:u,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]}),e.jsx("div",{className:[h.najwer23morselsSlideWrapper,"MorselsSliderWrapper",p].join(" "),ref:$,children:C.map((n,r)=>e.jsx("div",{ref:s=>{v.current[r]=s},className:`${h.najwer23morselsSlide}`,style:{width:o.length>1?"calc(100% - 40px)":"100%"},"aria-hidden":c!==r,children:n},n.key??r))})]}),M&&e.jsx("div",{className:[h.najwer23morselsSliderCounter,"MorselsSliderCounter",p].join(" "),children:e.jsx(X,{mobileSize:16,desktopSize:16,color:"black",children:t?`${U()+1} / ${o.length}`:`${c+1} / ${o.length}`})})]})]})};a.displayName="Slider";a.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}}}};const{action:i}=__STORYBOOK_MODULE_ACTIONS__,se={title:"Slider/Slider",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},_={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{onClick:i("on-click-2"),style:{background:"blue",...l},children:"2"}),e.jsx("div",{onClick:i("on-click-3"),style:{background:"orange",...l},children:"3"}),e.jsx("div",{onClick:i("on-click-4"),style:{background:"green",...l},children:"4"})]})})]},E={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{onClick:i("on-click-2"),style:{background:"blue",...l},children:"2"}),e.jsx("div",{onClick:i("on-click-3"),style:{background:"orange",...l},children:"3"}),e.jsx("div",{onClick:i("on-click-4"),style:{background:"green",...l},children:"4"})]})})]},T={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{onClick:i("on-click-2"),style:{background:"blue",...l},children:"2"})]})})]},L={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{onClick:i("on-click-2"),style:{background:"blue",...l},children:"2"})]})})]},B={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(a,{isCircular:!0,children:e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"})})})]},N={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(a,{children:e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"})})})]},W={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue",children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{onClick:i("on-click-2"),style:{background:"blue",...l},children:"2"}),e.jsx("div",{onClick:i("on-click-3"),style:{background:"orange",...l},children:"3"}),e.jsx("div",{onClick:i("on-click-4"),style:{background:"green",...l},children:"4"})]})})]},I={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{showCounter:!1,children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{style:{background:"blue",...l},onClick:i("on-click-2"),children:"2"})]})})]},R={decorators:[()=>{const t=()=>{const[g,p]=d.useState(!0);return d.useEffect(()=>{const x=setInterval(()=>{p(f=>!f)},5e3);return()=>clearInterval(x)},[]),e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsxs(a,{loading:g,children:[e.jsx("div",{style:{background:"red",...l},onClick:i("on-click-1"),children:"1"}),e.jsx("div",{style:{background:"green",...l},onClick:i("on-click-"),children:"2"})]})})};return e.jsx(t,{})}]};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
          <div onClick={action('on-click-2')} style={{
        background: 'blue',
        ...slideStyle
      }}>
            2
          </div>
          <div onClick={action('on-click-3')} style={{
        background: 'orange',
        ...slideStyle
      }}>
            3
          </div>
          <div onClick={action('on-click-4')} style={{
        background: 'green',
        ...slideStyle
      }}>
            4
          </div>
        </Slider>
      </div>]
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider isCircular>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
          <div onClick={action('on-click-2')} style={{
        background: 'blue',
        ...slideStyle
      }}>
            2
          </div>
          <div onClick={action('on-click-3')} style={{
        background: 'orange',
        ...slideStyle
      }}>
            3
          </div>
          <div onClick={action('on-click-4')} style={{
        background: 'green',
        ...slideStyle
      }}>
            4
          </div>
        </Slider>
      </div>]
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
          <div onClick={action('on-click-2')} style={{
        background: 'blue',
        ...slideStyle
      }}>
            2
          </div>
        </Slider>
      </div>]
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider isCircular>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
          <div onClick={action('on-click-2')} style={{
        background: 'blue',
        ...slideStyle
      }}>
            2
          </div>
        </Slider>
      </div>]
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider isCircular>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
        </Slider>
      </div>]
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
        </Slider>
      </div>]
}`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider arrowsColorBackground="yellow" arrowsColor="blue" arrowsColorBorder="blue">
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
          <div onClick={action('on-click-2')} style={{
        background: 'blue',
        ...slideStyle
      }}>
            2
          </div>
          <div onClick={action('on-click-3')} style={{
        background: 'orange',
        ...slideStyle
      }}>
            3
          </div>
          <div onClick={action('on-click-4')} style={{
        background: 'green',
        ...slideStyle
      }}>
            4
          </div>
        </Slider>
      </div>]
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider showCounter={false}>
          <div style={{
        background: 'red',
        ...slideStyle
      }} onClick={action('on-click-1')}>
            1
          </div>
          <div style={{
        background: 'blue',
        ...slideStyle
      }} onClick={action('on-click-2')}>
            2
          </div>
        </Slider>
      </div>]
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  decorators: [() => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const interval = setInterval(() => {
          setLoading(prev => !prev);
        }, 5000);
        return () => clearInterval(interval); // cleanup on unmount
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
          }} onClick={action('on-click-')}>
                2
              </div>
            </Slider>
          </div>;
    };
    return <LoadingToggle />;
  }]
}`,...R.parameters?.docs?.source}}};const oe=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SldierArrowsStyle","SliderWithoutCounter","SliderLoading"];export{_ as Default,W as SldierArrowsStyle,N as Slider1Slide,T as Slider2Slides,E as SliderCircular,B as SliderCircular1Slide,L as SliderCircular2Slides,R as SliderLoading,I as SliderWithoutCounter,oe as __namedExportsOrder,se as default};
