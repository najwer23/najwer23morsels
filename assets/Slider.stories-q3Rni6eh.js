import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as f,r as d}from"./iframe-Cob5BErz.js";const G="_sliderContainer_1sn5q_2",P="_slideWrapper_1sn5q_12",V="_slide_1sn5q_2",K="_sliderBtnControl_1sn5q_33",U="_btn_1sn5q_46",g={sliderContainer:G,slideWrapper:P,slide:V,sliderBtnControl:K,btn:U},M=(s,w,k=!1)=>(k?s.slice(0,w):s.slice(-w)).map((b,q)=>f.cloneElement(b,{key:`${k?"clone-first":"clone-last"}-${q}`,className:b.props.className})),a=({isCircular:s=!1,children:w,className:k,arrowsColor:b,arrowsColorBackground:q,arrowsColorBorder:W})=>{const c=f.Children.toArray(w).filter(f.isValidElement),[o,v]=d.useState(s&&c.length>=2?2:0),[u,y]=d.useState(!1),[C,$]=d.useState(0),[L,I]=d.useState(0),z=d.useRef(null),p=d.useRef([]),x=d.useRef(null),m=s&&c.length>=2?[...M(c,2,!1),...c.map((n,i)=>f.cloneElement(n,{key:n.key??i,className:n.props.className})),...M(c,2,!0)]:c.map((n,i)=>f.cloneElement(n,{key:n.key??i,className:n.props.className}));p.current.length!==m.length&&(p.current=Array(m.length).fill(null)),d.useEffect(()=>{v(s&&c.length>=2?2:0)},[s,c.length]);const A=d.useCallback(()=>{const n=z.current;if(!n)return;const i=p.current[0];if(!i)return;const r=window.getComputedStyle(i);$(i.offsetWidth+parseFloat(r.marginLeft)+parseFloat(r.marginRight)),I(n.offsetWidth)},[]);d.useEffect(()=>{A();const n=()=>{x.current!==null&&clearTimeout(x.current),x.current=window.setTimeout(()=>{A(),s||y(!0)},150)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n),x.current!==null&&clearTimeout(x.current)}},[A]),d.useEffect(()=>{const i=C+10;p.current.forEach((r,h)=>{if(r)if(s){const S=(h-o)*i+(L-C)/2;r.style.transition=u?"transform 0.4s cubic-bezier(.4,0,.2,1)":"none",r.style.transform=`translateX(${S}px)`,r.style.left=""}else{const S=i*(h-o)+(L-C)/2;if(u){const F=parseFloat(r.style.left||"0");r.animate([{left:`${F}px`},{left:`${S}px`}],{duration:400,easing:"ease-out",fill:"forwards"}).finished.then(()=>{r.style.left=`${S}px`,y(!1)})}else r.style.left=`${S}px`;r.style.transition="none",r.style.transform=""}})},[o,C,L,u,m.length,s]),d.useEffect(()=>{if(!s||!u)return;const n=p.current.length,i=p.current[n-1];if(!i)return;const r=()=>{let h=o;o===1?h=n-3:o===n-2&&(h=2),h!==o&&v(h),y(!1),i.removeEventListener("transitionend",r)};return i.addEventListener("transitionend",r),()=>i.removeEventListener("transitionend",r)},[o,s,u]);const O=()=>{u||(y(!0),v(s?n=>n+1:n=>Math.min(n+1,m.length-1)))},D=()=>{u||(y(!0),v(s?n=>n-1:n=>Math.max(n-1,0)))};return e.jsxs("div",{className:[g.sliderContainer,"MorselsSlider",k].filter(Boolean).join(" "),style:{"--ac":b,"--abgc":q,"--abc":W},children:[e.jsxs("div",{className:[g.sliderBtnControl,"MorselsSliderControl",k].join(" "),style:{justifyContent:s?"space-between":o===0?"flex-end":o===c.length-1?"flex-start":"space-between"},children:[(s&&c.length>1||o!==0)&&e.jsx("button",{className:g.btn,onClick:D,disabled:u,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(s&&c.length>1||o!==c.length-1)&&e.jsx("button",{className:g.btn,onClick:O,disabled:u,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"24",height:"24",fill:"currentColor",children:e.jsx("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})})]}),e.jsx("div",{className:[g.slideWrapper,"MorselsSliderWrapper",k].join(" "),ref:z,children:m.map((n,i)=>e.jsx("div",{ref:r=>{p.current[i]=r},className:`${g.slide}`,style:{width:c.length>1?"calc(100% - 100px)":"100%"},"aria-hidden":o!==i,children:n},n.key??i))})]})};a.displayName="Slider";a.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrowsColor:{required:!1,tsType:{name:"string"},description:""},arrowsColorBackground:{required:!1,tsType:{name:"string"},description:""},arrowsColorBorder:{required:!1,tsType:{name:"string"},description:""}}};const{action:l}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Slider/Slider",component:a,parameters:{layout:"centered"},tags:["autodocs"]},t={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},j={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]},_={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]},E={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"})]})})]},N={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{isCircular:!0,children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"})]})})]},B={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(a,{isCircular:!0,children:e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"})})})]},R={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsx(a,{children:e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"})})})]},T={decorators:[()=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px)",height:"400px"},children:e.jsxs(a,{arrowsColorBackground:"yellow",arrowsColor:"blue",arrowsColorBorder:"blue",children:[e.jsx("div",{style:{background:"red",...t},onClick:l("on-click-1"),children:"1"}),e.jsx("div",{onClick:l("on-click-2"),style:{background:"blue",...t},children:"2"}),e.jsx("div",{onClick:l("on-click-3"),style:{background:"orange",...t},children:"3"}),e.jsx("div",{onClick:l("on-click-4"),style:{background:"green",...t},children:"4"})]})})]};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const J=["Default","SliderCircular","Slider2Slides","SliderCircular2Slides","SliderCircular1Slide","Slider1Slide","SldierArrowsStyle"];export{j as Default,T as SldierArrowsStyle,R as Slider1Slide,E as Slider2Slides,_ as SliderCircular,B as SliderCircular1Slide,N as SliderCircular2Slides,J as __namedExportsOrder,H as default};
