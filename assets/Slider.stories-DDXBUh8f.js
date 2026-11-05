import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{j as n}from"./iframe-C2ou4yVG.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as o,t as s}from"./Button-SPPR1lYP.js";import{c,t as l,u}from"./Icons-Cnw6Qy4u.js";import{n as d,t as f}from"./Loader-DTqeuvAd.js";import{n as p,t as m}from"./Typography-CSPBA0Tu.js";import{r as h,t as g}from"./hooks-CtCGHdAf.js";var _,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{_=`_n23mSlider_x1hq0_2`,v=`_dragging_x1hq0_5`,y=`_n23mSliderContainerSlider_x1hq0_11`,b=`_n23mSliderSlideWrapper_x1hq0_21`,x=`_n23mSliderSlide_x1hq0_21`,S=`_n23mSliderControls_x1hq0_44`,C=`_n23mSliderControlsButtons_x1hq0_51`,w=`_n23mSliderCounter_x1hq0_57`,T={n23mSlider:_,dragging:v,n23mSliderContainerSlider:y,n23mSliderSlideWrapper:b,n23mSliderSlide:x,n23mSliderControls:S,n23mSliderControlsButtons:C,n23mSliderCounter:w}})))()}var D,O,k,A;function j(){return(j=t((()=>{D=e(n(),1),s(),g(),l(),f(),m(),E(),O=r(),k=(e,t,n=!1,r)=>(n?e.slice(0,t):e.slice(-t)).map((e,t)=>D.cloneElement(e,{key:`${n?`clone-first`:`clone-last`}-${t} ${r}`,className:e.props.className})),A=({isCircular:e=!1,children:t,className:n,loading:r=!1,loaderColor:i=`black`,slidesConfig:a={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:s=10})=>{let l=D.Children.toArray(t).filter(D.isValidElement),{width:f}=h(),[m,g]=(0,D.useState)(0),_=(0,D.useRef)(null),v=(0,D.useRef)(null),[y,b]=(0,D.useState)(e?l.length*2:0),[x,S]=(0,D.useState)(!1),C=(0,D.useRef)([]),[w,E]=(0,D.useState)(null),[A,j]=(0,D.useState)(0),M=(0,D.useRef)(!1),N,P,F,I;f<767.98?(N=a.mobile.items,P=a.mobile.slidesToScroll,F=`transform 0.4s cubic-bezier(.4,0,.2,1)`,I=450):f<1199.98?(N=a.tablet.items,P=a.tablet.slidesToScroll,F=`transform 0.4s cubic-bezier(.4,0,.2,1)`,I=450):(N=a.desktop.items,P=a.desktop.slidesToScroll,F=`transform 0.4s cubic-bezier(.4,0,.2,1)`,I=450),(0,D.useLayoutEffect)(()=>{_.current&&g(_.current.offsetWidth),b(e?l.length*2:0)},[r,e,N,l.length,f]),(0,D.useLayoutEffect)(()=>{let e=_.current;if(!e)return;let t=new ResizeObserver(()=>{g(e.offsetWidth)});return t.observe(e),()=>t.disconnect()},[r]);let L=(m-s*(N-1))/N,R=e?[...k(l,l.length,!1,1),...l,...k(l,l.length,!1,2),...k(l,l.length,!0,3),...k(l,l.length,!0,4)]:l,z=e=>{e.touches.length===1&&(E(e.touches[0].clientX),j(0),M.current=!0,v.current&&v.current.classList.add(T.dragging))},B=e=>{w!==null&&j(e.touches[0].clientX-w)},V=()=>{A>50&&!(x||!e&&y===0)?K():A<-50&&!(x||!e&&y+N>=l.length)&&G(),E(null),j(0),M.current=!1,v.current&&v.current.classList.remove(T.dragging)},H=e=>{E(e.clientX),j(0),M.current=!0,v.current&&v.current.classList.add(T.dragging)},U=e=>{w!==null&&j(e.clientX-w)},W=()=>{A>50&&!(x||!e&&y===0)?K():A<-50&&!(x||!e&&y+N>=l.length)&&G(),E(null),j(0),M.current=!1,v.current&&v.current.classList.remove(T.dragging)};(0,D.useLayoutEffect)(()=>{C.current.forEach((e,t)=>{if(!e)return;let n=0,r=0;N===1&&l.length!==1?(n=40,r=40):N===2?(n=20,r=20):N===4?(n=10,r=10):N===3&&(n=12.5,r=12.5);let i=(t-y)*(L+s-r)+(m-(L-n)*N-s*(N-1))/2;e.style.transition=x?F:`none`,e.style.transform=`translateX(${i}px)`})},[y,m,x,R.length,N,L,s,r]),(0,D.useLayoutEffect)(()=>{if(!x)return;let t,n=()=>{let r=y;y<N*2&&e?r=y+l.length*2:y>=l.length*2+N&&e&&(r=y-l.length),r!==y&&e&&b(r),S(!1),C.current.forEach(e=>{e&&e.removeEventListener(`transitionend`,n)}),clearTimeout(t)};return C.current.forEach(e=>{e&&e.addEventListener(`transitionend`,n)}),t=window.setTimeout(()=>{S(!1),C.current.forEach(e=>{e&&e.removeEventListener(`transitionend`,n)})},I),()=>{C.current.forEach(e=>{e&&e.removeEventListener(`transitionend`,n)}),clearTimeout(t)}},[y,e,x,l.length,N,R.length,r]);let G=()=>{x||(S(!0),b(e=>e+P))},K=()=>{x||(S(!0),b(e=>e-P))};return(0,O.jsxs)(`div`,{ref:v,className:[T.n23mSlider,`n23mSlider`,n].filter(Boolean).join(` `),style:{height:r?`calc(100% - 2px)`:`calc(100% - 60px)`},children:[r&&(0,O.jsx)(d,{loaderColor:i}),!r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{className:T.n23mSliderContainerSlider,onTouchStart:z,onTouchMove:B,onTouchEnd:V,onMouseDown:H,onMouseMove:U,onMouseUp:W,children:(0,O.jsx)(`div`,{className:[T.n23mSliderSlideWrapper,`n23mSliderSlideWrapper`].join(` `),ref:_,style:{gap:`${s}px`},children:R.map((e,t)=>(0,O.jsx)(`div`,{ref:e=>{C.current[t]=e},className:T.n23mSliderSlide,style:{width:N===1&&l.length===1?`100%`:N===1?`calc(${L}px - 40px)`:N===2?`calc(${L}px - 20px)`:N===3?`calc(${L}px - 12.5px)`:N===4?`calc(${L}px - 10px)`:`${L}px`},"aria-hidden":t<y||t>=y+N,children:e},e.key??t))})}),(0,O.jsxs)(`div`,{className:[T.n23mSliderControls,`n23mSliderControls`].join(` `),style:{justifyContent:N===1?`space-between`:`flex-end`},children:[N===1&&(0,O.jsx)(`div`,{className:[T.n23mSliderCounter,`n23mSliderCounter`].join(` `),children:(0,O.jsx)(p,{variant:`body`,tag:`span`,children:e?`${(()=>{if(!e)return y;let t=l.length;return t<1?0:(y+t)%t})()+1} / ${l.length}`:`${y+1} / ${l.length}`})}),(0,O.jsxs)(`div`,{className:[T.n23mSliderControlsButtons,`n23mSliderControlsButtons`].join(` `),children:[(0,O.jsx)(o,{variant:`secondary`,height:`50px`,width:`50px`,padding:0,title:`Previous slide`,"aria-label":`Previous slide`,onClick:K,disabled:x||!e&&y===0,children:(0,O.jsx)(u,{width:24,height:24})}),(0,O.jsx)(o,{variant:`secondary`,height:`50px`,width:`50px`,padding:0,title:`Next slide`,"aria-label":`Next slide`,onClick:G,disabled:x||!e&&y+N>=l.length,children:(0,O.jsx)(c,{width:24,height:24})})]})]})]})]})},A.displayName=`Slider`;try{A.displayName=`Slider`,A.__docgenInfo={description:``,displayName:`Slider`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Slider/Slider.tsx`,methods:[],props:{isCircular:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`}],description:``,name:`isCircular`,parent:{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`},required:!1,tags:{},type:{name:`boolean`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`}],description:``,name:`loading`,parent:{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`},required:!1,tags:{},type:{name:`boolean`}},loaderColor:{defaultValue:{value:`black`},declarations:[{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`}],description:``,name:`loaderColor`,parent:{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`},required:!1,tags:{},type:{name:`string`}},slidesConfig:{defaultValue:{value:`{
    mobile: { items: 1, slidesToScroll: 1 },
    tablet: { items: 2, slidesToScroll: 2 },
    desktop: { items: 3, slidesToScroll: 3 },
  }`},declarations:[{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`}],description:``,name:`slidesConfig`,parent:{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`},required:!1,tags:{},type:{name:`{ mobile: { items: number; slidesToScroll: number; }; tablet: { items: number; slidesToScroll: number; }; desktop: { items: number; slidesToScroll: number; }; }`}},slideSpacingPx:{defaultValue:{value:`10`},declarations:[{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`}],description:``,name:`slideSpacingPx`,parent:{fileName:`najwer23morsels/src/stories/Slider/Slider.tsx`,name:`SliderProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function M(){return(M=t((()=>{j()})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{N=n(),a(),M(),P=r(),{action:F}=__STORYBOOK_MODULE_ACTIONS__,I={title:`Slider/Slider`,component:A,parameters:{layout:`centered`,docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
\`\`\`
        `}}},tags:[`autodocs`]},L={display:`flex`,justifyContent:`center`,alignItems:`center`},R=[{color:`red`,label:`1`,action:F(`on-click-1`)},{color:`blue`,label:`2`,action:F(`on-click-2`)},{color:`orange`,label:`3`,action:F(`on-click-3`)},{color:`green`,label:`4`,action:F(`on-click-4`)},{color:`pink`,label:`5`,action:F(`on-click-5`)}],z=({color:e,label:t,onClick:n})=>(0,P.jsx)(`div`,{style:{background:e,...L},onClick:n,children:(0,P.jsx)(i,{color:`white`,mobileSize:60,desktopSize:60,children:t})}),B={args:{},render:e=>(0,P.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,P.jsx)(A,{...e,children:R.map(({color:e,label:t,action:n})=>(0,P.jsx)(z,{color:e,label:t,onClick:n},t))})})},V={args:{isCircular:!0},render:e=>(0,P.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,P.jsx)(A,{...e,children:R.map(({color:e,label:t,action:n})=>(0,P.jsx)(z,{color:e,label:t,onClick:n},t))})})},H={args:{},render:()=>(0,P.jsx)(()=>{let[e,t]=(0,N.useState)(!0);return(0,N.useEffect)(()=>{let e=setInterval(()=>{t(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,P.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,P.jsx)(A,{loading:e,children:R.map(({color:e,label:t,action:n})=>(0,P.jsx)(z,{color:e,label:t,onClick:n},`loading-${t}`))})})},{})},U={args:{isCircular:!1,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:1,slidesToScroll:1},desktop:{items:1,slidesToScroll:1}}},render:e=>(0,P.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,P.jsx)(A,{...e,children:(0,P.jsx)(z,{color:R[0].color,label:R[0].label,onClick:R[0].action})})})},W={args:{isCircular:!0,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:2,slidesToScroll:2}}},render:e=>(0,P.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,P.jsxs)(A,{...e,children:[(0,P.jsx)(z,{color:R[0].color,label:R[0].label,onClick:R[0].action}),(0,P.jsx)(z,{color:R[1].color,label:R[1].label,onClick:R[1].action}),(0,P.jsx)(z,{color:R[0].color,label:R[0].label,onClick:R[0].action}),(0,P.jsx)(z,{color:R[1].color,label:R[1].label,onClick:R[1].action})]})})},G=[`Default`,`SliderCircular`,`SliderLoading`,`Slider1Slide`,`Slider2Slides`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      }) => <Slide key={label} color={color} label={label} onClick={action} />)}
      </Slider>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
      }) => <Slide key={label} color={color} label={label} onClick={action} />)}
      </Slider>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
            {slides.map(({
            color,
            label,
            action
          }) => <Slide key={\`loading-\${label}\`} color={color} label={label} onClick={action} />)}
          </Slider>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: false,
    slidesConfig: {
      mobile: {
        items: 1,
        slidesToScroll: 1
      },
      tablet: {
        items: 1,
        slidesToScroll: 1
      },
      desktop: {
        items: 1,
        slidesToScroll: 1
      }
    }
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        <Slide color={slides[0].color} label={slides[0].label} onClick={slides[0].action} />
      </Slider>
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true,
    slidesConfig: {
      mobile: {
        items: 1,
        slidesToScroll: 1
      },
      tablet: {
        items: 2,
        slidesToScroll: 2
      },
      desktop: {
        items: 2,
        slidesToScroll: 2
      }
    }
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        <Slide color={slides[0].color} label={slides[0].label} onClick={slides[0].action} />
        <Slide color={slides[1].color} label={slides[1].label} onClick={slides[1].action} />
        <Slide color={slides[0].color} label={slides[0].label} onClick={slides[0].action} />
        <Slide color={slides[1].color} label={slides[1].label} onClick={slides[1].action} />
      </Slider>
    </div>
}`,...W.parameters?.docs?.source}}}})))()}K();export{B as Default,U as Slider1Slide,W as Slider2Slides,V as SliderCircular,H as SliderLoading,G as __namedExportsOrder,I as default};