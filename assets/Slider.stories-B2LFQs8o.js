import{j as e,T as P}from"./TextBox-DuJjyhIh.js";import{R as y,r as d}from"./iframe-XY64zDvN.js";const G="_najwer23morselsSliderContainer_1ldwt_2",K="_najwer23morselsSliderContainerSlider_1ldwt_6",U="_najwer23morselsSlideWrapper_1ldwt_16",X="_najwer23morselsSlide_1ldwt_2",Y="_najwer23morselsBtnControl_1ldwt_37",H="_najwer23morselsBtn_1ldwt_37",J="_najwer23morselsSliderCounter_1ldwt_82",p={najwer23morselsSliderContainer:G,najwer23morselsSliderContainerSlider:K,najwer23morselsSlideWrapper:U,najwer23morselsSlide:X,najwer23morselsBtnControl:Y,najwer23morselsBtn:H,najwer23morselsSliderCounter:J},A=(s,f,h=!1)=>(h?s.slice(0,f):s.slice(-f)).map((j,L)=>y.cloneElement(j,{key:`${h?"clone-first":"clone-last"}-${L}`,className:j.props.className})),u=({isCircular:s=!1,children:f,className:h,arrowsColor:j,arrowsColorBackground:L,arrowsColorBorder:M,showCounter:$=!0})=>{const o=y.Children.toArray(f).filter(y.isValidElement),[c,v]=d.useState(s&&o.length>=2?2:0),[a,k]=d.useState(!1),[W,q]=d.useState(0),[z,O]=d.useState(0),I=d.useRef(null),m=d.useRef([]),w=d.useRef(null),x=s&&o.length>=2?[...A(o,2,!1),...o.map((n,r)=>y.cloneElement(n,{key:n.key??r,className:n.props.className})),...A(o,2,!0)]:o.map((n,r)=>y.cloneElement(n,{key:n.key??r,className:n.props.className}));m.current.length!==x.length&&(m.current=Array(x.length).fill(null)),d.useEffect(()=>{v(s&&o.length>=2?2:0)},[s,o.length]);const R=d.useCallback(()=>{const n=I.current;if(!n)return;const r=m.current[0];if(!r)return;const i=window.getComputedStyle(r);q(r.offsetWidth+parseFloat(i.marginLeft)+parseFloat(i.marginRight)),O(n.offsetWidth)},[]);d.useEffect(()=>{R();const n=()=>{w.current!==null&&clearTimeout(w.current),w.current=window.setTimeout(()=>{R(),k(!0)},150)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),w.current!==null&&clearTimeout(w.current)}},[R]),d.useEffect(()=>{const r=W+10;m.current.forEach((i,S)=>{if(!i)return;const g=(S-c)*r+(z-W)/2;i.style.transition=a?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",i.style.transform=`translateX(${g}px)`,i.style.left=""})},[c,W,z,a,x.length,s]),d.useEffect(()=>{if(!a||!s)return;const n=m.current.length,r=m.current[n-1];if(!r)return;let i;const S=()=>{let g=c;c===1?g=n-3:c===n-2&&(g=2),g!==c&&v(g),k(!1),r.removeEventListener("transitionend",S),clearTimeout(i)};return r.addEventListener("transitionend",S),i=window.setTimeout(()=>{k(!1),r.removeEventListener("transitionend",S)},500),()=>{r.removeEventListener("transitionend",S),clearTimeout(i)}},[c,s,a]),d.useEffect(()=>{if(!a)return;const n=m.current[0];if(!n)return;let r;const i=()=>{k(!1),n.removeEventListener("transitionend",i),clearTimeout(r)};return n.addEventListener("transitionend",i),r=window.setTimeout(()=>{k(!1),n.removeEventListener("transitionend",i)},500),()=>{n.removeEventListener("transitionend",i),clearTimeout(r)}},[a]);const D=()=>{a||(k(!0),v(s?n=>n+1:n=>Math.min(n+1,x.length-1)))},V=()=>{a||(k(!0),v(s?n=>n-1:n=>Math.max(n-1,0)))},F=()=>{if(!s)return c;const n=o.length;return n<1?0:(c-2+n)%n};return e.jsxs("div",{className:[p.najwer23morselsSliderContainer,"MorselsSlider",h].filter(Boolean).join(" "),children:[e.jsxs("div",{className:[p.najwer23morselsSliderContainerSlider].filter(Boolean).join(" "),style:{"--ac":j,"--abgc":L,"--abc":M},children:[e.jsxs("div",{className:[p.najwer23morselsBtnControl,"MorselsSliderControl",h].join(" "),style:{justifyContent:s?"space-between":c===0?"flex-end":c===o.length-1?"flex-start":"space-between"},children:[(s&&o.length>1||c!==0)&&e.jsx("button",{title:"Prev",className:p.najwer23morselsBtn,onClick:V,disabled:a,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(s&&o.length>1||c!==o.length-1)&&e.jsx("button",{title:"Next",className:p.najwer23morselsBtn,onClick:D,disabled:a,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]}),e.jsx("div",{className:[p.najwer23morselsSlideWrapper,"MorselsSliderWrapper",h].join(" "),ref:I,children:x.map((n,r)=>e.jsx("div",{ref:i=>{m.current[r]=i},className:`${p.najwer23morselsSlide}`,style:{width:o.length>1?"calc(100% - 100px)":"100%"},"aria-hidden":c!==r,children:n},n.key??r))})]}),$&&e.jsx("div",{className:[p.najwer23morselsSliderCounter,"MorselsSliderCounter",h].join(" "),children:e.jsx(P,{mobileSize:16,desktopSize:16,color:"black",children:s?`${F()+1} / ${o.length}`:`${c+1} / ${o.length}`})})]})};u.displayName="Slider";u.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""},showCounter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Slider/Slider",component:u,parameters:{layout:"centered"},tags:["autodocs"]},t={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},C={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]},b={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]},_={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"})]})})]},E={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"})]})})]},T={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(u,{isCircular:!0,children:e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"})})})]},B={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(u,{children:e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"})})})]},N={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue",children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        </Slider>
      </div>]
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    width: 'min(700px,calc(100vw - 50px)',
    height: '400px'
  }}>
        <Slider arrowsColorBackground='yellow' arrowsColor='blue' arrowsColorBorder='blue'>
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
}`,...N.parameters?.docs?.source}}};const ne=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SldierArrowsStyle"];export{C as Default,N as SldierArrowsStyle,B as Slider1Slide,_ as Slider2Slides,b as SliderCircular,T as SliderCircular1Slide,E as SliderCircular2Slides,ne as __namedExportsOrder,ee as default};
