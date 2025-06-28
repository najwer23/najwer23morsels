import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as w,r as c}from"./iframe-HSHfyqRl.js";const F="_najwer23morselsSliderContainer_3x10c_2",G="_najwer23morselsSlideWrapper_3x10c_12",P="_najwer23morselsSlide_3x10c_2",V="_najwer23morselsBtnControl_3x10c_33",K="_najwer23morselsBtn_3x10c_33",x={najwer23morselsSliderContainer:F,najwer23morselsSlideWrapper:G,najwer23morselsSlide:P,najwer23morselsBtnControl:V,najwer23morselsBtn:K},z=(s,f,h=!1)=>(h?s.slice(0,f):s.slice(-f)).map((j,L)=>w.cloneElement(j,{key:`${h?"clone-first":"clone-last"}-${L}`,className:j.props.className})),u=({isCircular:s=!1,children:f,className:h,arrowsColor:j,arrowsColorBackground:L,arrowsColorBorder:M})=>{const o=w.Children.toArray(f).filter(w.isValidElement),[d,k]=c.useState(s&&o.length>=2?2:0),[a,m]=c.useState(!1),[W,O]=c.useState(0),[A,q]=c.useState(0),I=c.useRef(null),p=c.useRef([]),S=c.useRef(null),y=s&&o.length>=2?[...z(o,2,!1),...o.map((n,r)=>w.cloneElement(n,{key:n.key??r,className:n.props.className})),...z(o,2,!0)]:o.map((n,r)=>w.cloneElement(n,{key:n.key??r,className:n.props.className}));p.current.length!==y.length&&(p.current=Array(y.length).fill(null)),c.useEffect(()=>{k(s&&o.length>=2?2:0)},[s,o.length]);const R=c.useCallback(()=>{const n=I.current;if(!n)return;const r=p.current[0];if(!r)return;const i=window.getComputedStyle(r);O(r.offsetWidth+parseFloat(i.marginLeft)+parseFloat(i.marginRight)),q(n.offsetWidth)},[]);c.useEffect(()=>{R();const n=()=>{S.current!==null&&clearTimeout(S.current),S.current=window.setTimeout(()=>{R(),m(!0)},150)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),S.current!==null&&clearTimeout(S.current)}},[R]),c.useEffect(()=>{const r=W+10;p.current.forEach((i,v)=>{if(!i)return;const g=(v-d)*r+(A-W)/2;i.style.transition=a?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",i.style.transform=`translateX(${g}px)`,i.style.left=""})},[d,W,A,a,y.length,s]),c.useEffect(()=>{if(!a||!s)return;const n=p.current.length,r=p.current[n-1];if(!r)return;let i;const v=()=>{let g=d;d===1?g=n-3:d===n-2&&(g=2),g!==d&&k(g),m(!1),r.removeEventListener("transitionend",v),clearTimeout(i)};return r.addEventListener("transitionend",v),i=window.setTimeout(()=>{m(!1),r.removeEventListener("transitionend",v)},500),()=>{r.removeEventListener("transitionend",v),clearTimeout(i)}},[d,s,a]),c.useEffect(()=>{if(!a)return;const n=p.current[0];if(!n)return;let r;const i=()=>{m(!1),n.removeEventListener("transitionend",i),clearTimeout(r)};return n.addEventListener("transitionend",i),r=window.setTimeout(()=>{m(!1),n.removeEventListener("transitionend",i)},500),()=>{n.removeEventListener("transitionend",i),clearTimeout(r)}},[a]);const D=()=>{a||(m(!0),k(s?n=>n+1:n=>Math.min(n+1,y.length-1)))},$=()=>{a||(m(!0),k(s?n=>n-1:n=>Math.max(n-1,0)))};return e.jsxs("div",{className:[x.najwer23morselsSliderContainer,"MorselsSlider",h].filter(Boolean).join(" "),style:{"--ac":j,"--abgc":L,"--abc":M},children:[e.jsxs("div",{className:[x.najwer23morselsBtnControl,"MorselsSliderControl",h].join(" "),style:{justifyContent:s?"space-between":d===0?"flex-end":d===o.length-1?"flex-start":"space-between"},children:[(s&&o.length>1||d!==0)&&e.jsx("button",{className:x.najwer23morselsBtn,onClick:$,disabled:a,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(s&&o.length>1||d!==o.length-1)&&e.jsx("button",{className:x.najwer23morselsBtn,onClick:D,disabled:a,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]}),e.jsx("div",{className:[x.najwer23morselsSlideWrapper,"MorselsSliderWrapper",h].join(" "),ref:I,children:y.map((n,r)=>e.jsx("div",{ref:i=>{p.current[r]=i},className:`${x.najwer23morselsSlide}`,style:{width:o.length>1?"calc(100% - 100px)":"100%"},"aria-hidden":d!==r,children:n},n.key??r))})]})};u.displayName="Slider";u.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""}}};const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Y={title:"Slider/Slider",component:u,parameters:{layout:"centered"},tags:["autodocs"]},t={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},C={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]},b={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]},E={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"})]})})]},_={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"})]})})]},B={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(u,{isCircular:!0,children:e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"})})})]},T={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(u,{children:e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"})})})]},N={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(u,{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue",children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const H=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SldierArrowsStyle"];export{C as Default,N as SldierArrowsStyle,T as Slider1Slide,E as Slider2Slides,b as SliderCircular,B as SliderCircular1Slide,_ as SliderCircular2Slides,H as __namedExportsOrder,Y as default};
