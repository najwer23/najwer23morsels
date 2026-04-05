import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CWX89Pyg.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./textbox-dlAtPu2C.js";import{n as o,t as s}from"./loader-CgYTX-u-.js";import{n as c,t as l}from"./button-j3x_0hNB.js";import{a as u,i as d,t as f}from"./icons-DOTPn_Tl.js";import{n as p,t as m}from"./hooks-rqLsSIhI.js";var h,g,_,v,y,b,x,S,C,w=t((()=>{h=`_n23mSlider_x1hq0_2`,g=`_dragging_x1hq0_5`,_=`_n23mSliderContainerSlider_x1hq0_11`,v=`_n23mSliderSlideWrapper_x1hq0_21`,y=`_n23mSliderSlide_x1hq0_21`,b=`_n23mSliderControls_x1hq0_44`,x=`_n23mSliderControlsButtons_x1hq0_51`,S=`_n23mSliderCounter_x1hq0_57`,C={n23mSlider:h,dragging:g,n23mSliderContainerSlider:_,n23mSliderSlideWrapper:v,n23mSliderSlide:y,n23mSliderControls:b,n23mSliderControlsButtons:x,n23mSliderCounter:S}})),T,E,D,O,k=t((()=>{T=e(n(),1),l(),m(),f(),s(),a(),w(),E=r(),D=(e,t,n=!1,r)=>(n?e.slice(0,t):e.slice(-t)).map((e,t)=>T.cloneElement(e,{key:`${n?`clone-first`:`clone-last`}-${t} ${r}`,className:e.props.className})),O=({isCircular:e=!1,children:t,className:n,loading:r=!1,loaderColor:a=`black`,slidesConfig:s={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:l=10})=>{let f=T.Children.toArray(t).filter(T.isValidElement),{width:m}=p(),[h,g]=(0,T.useState)(0),_=(0,T.useRef)(null),v=(0,T.useRef)(null),[y,b]=(0,T.useState)(e?f.length*2:0),[x,S]=(0,T.useState)(!1),w=(0,T.useRef)([]),[O,k]=(0,T.useState)(null),[A,j]=(0,T.useState)(0),M=(0,T.useRef)(!1),N,P,F,I;m<767.98?(N=s.mobile.items,P=s.mobile.slidesToScroll,F=`transform 0.4s cubic-bezier(.4,0,.2,1)`,I=450):m<1199.98?(N=s.tablet.items,P=s.tablet.slidesToScroll,F=`transform 0.4s cubic-bezier(.4,0,.2,1)`,I=450):(N=s.desktop.items,P=s.desktop.slidesToScroll,F=`transform 0.4s cubic-bezier(.4,0,.2,1)`,I=450),(0,T.useLayoutEffect)(()=>{_.current&&g(_.current.offsetWidth),b(e?f.length*2:0)},[r,e,N,f.length,m]);let L=(h-l*(N-1))/N,R=e?[...D(f,f.length,!1,1),...f,...D(f,f.length,!1,2),...D(f,f.length,!0,3),...D(f,f.length,!0,4)]:f,z=e=>{e.touches.length===1&&(k(e.touches[0].clientX),j(0),M.current=!0,v.current&&v.current.classList.add(C.dragging))},B=e=>{O!==null&&j(e.touches[0].clientX-O)},V=()=>{A>50&&!(x||!e&&y===0)?K():A<-50&&!(x||!e&&y+N>=f.length)&&G(),k(null),j(0),M.current=!1,v.current&&v.current.classList.remove(C.dragging)},H=e=>{k(e.clientX),j(0),M.current=!0,v.current&&v.current.classList.add(C.dragging)},U=e=>{O!==null&&j(e.clientX-O)},W=()=>{A>50&&!(x||!e&&y===0)?K():A<-50&&!(x||!e&&y+N>=f.length)&&G(),k(null),j(0),M.current=!1,v.current&&v.current.classList.remove(C.dragging)};(0,T.useLayoutEffect)(()=>{w.current.forEach((e,t)=>{if(!e)return;let n=0,r=0;N===1&&f.length!==1?(n=40,r=40):N===2?(n=20,r=20):N===4?(n=10,r=10):N===3&&(n=12.5,r=12.5);let i=(t-y)*(L+l-r)+(h-(L-n)*N-l*(N-1))/2;e.style.transition=x?F:`none`,e.style.transform=`translateX(${i}px)`})},[y,h,x,R.length,N,L,l,r]),(0,T.useLayoutEffect)(()=>{if(!x)return;let t,n=()=>{let r=y;y<N*2&&e?r=y+f.length*2:y>=f.length*2+N&&e&&(r=y-f.length),r!==y&&e&&b(r),S(!1),w.current.forEach(e=>{e&&e.removeEventListener(`transitionend`,n)}),clearTimeout(t)};return w.current.forEach(e=>{e&&e.addEventListener(`transitionend`,n)}),t=window.setTimeout(()=>{S(!1),w.current.forEach(e=>{e&&e.removeEventListener(`transitionend`,n)})},I),()=>{w.current.forEach(e=>{e&&e.removeEventListener(`transitionend`,n)}),clearTimeout(t)}},[y,e,x,f.length,N,R.length,r]);let G=()=>{x||(S(!0),b(e=>e+P))},K=()=>{x||(S(!0),b(e=>e-P))};return(0,E.jsxs)(`div`,{ref:v,className:[C.n23mSlider,`n23mSlider`,n].filter(Boolean).join(` `),style:{height:r?`calc(100% - 2px)`:`calc(100% - 60px)`},children:[r&&(0,E.jsx)(o,{loaderColor:a}),!r&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`div`,{className:[C.n23mSliderContainerSlider].filter(Boolean).join(` `),onTouchStart:z,onTouchMove:B,onTouchEnd:V,onMouseDown:H,onMouseMove:U,onMouseUp:W,children:(0,E.jsx)(`div`,{className:[C.n23mSliderSlideWrapper,`n23mSliderSlideWrapper`].join(` `),ref:_,style:{gap:`${l}px`},children:R.map((e,t)=>(0,E.jsx)(`div`,{ref:e=>{w.current[t]=e},className:C.n23mSliderSlide,style:{width:N===1&&f.length===1?`100%`:N===1?`calc(${L}px - 40px)`:N===2?`calc(${L}px - 20px)`:N===3?`calc(${L}px - 12.5px)`:N===4?`calc(${L}px - 10px)`:`${L}px`},"aria-hidden":t<y||t>=y+N,children:e},e.key??t))})}),(0,E.jsxs)(`div`,{className:[C.n23mSliderControls,`n23mSliderControls`].join(` `),style:{justifyContent:N===1?`space-between`:`flex-end`},children:[N===1&&(0,E.jsx)(`div`,{className:[C.n23mSliderCounter,`n23mSliderCounter`].join(` `),children:(0,E.jsx)(i,{mobileSize:16,desktopSize:16,color:`black`,children:e?`${(()=>{if(!e)return y;let t=f.length;return t<1?0:(y+t)%t})()+1} / ${f.length}`:`${y+1} / ${f.length}`})}),(0,E.jsxs)(`div`,{className:[C.n23mSliderControlsButtons,`n23mSliderControlsButtons`].join(` `),children:[(0,E.jsx)(c,{height:`50px`,width:`50px`,backgroundColor:`#F2F0EF`,padding:0,title:`Prev`,onClick:K,borderColor:`black`,backgroundColorDisabled:`#F2F0EF`,disabled:x||!e&&y===0,children:(0,E.jsx)(u,{width:24,height:24})}),(0,E.jsx)(c,{height:`50px`,width:`50px`,backgroundColor:`#F2F0EF`,padding:0,title:`Next`,borderColor:`black`,backgroundColorDisabled:`#F2F0EF`,onClick:G,disabled:x||!e&&y+N>=f.length,children:(0,E.jsx)(d,{width:24,height:24})})]})]})]})]})},O.displayName=`Slider`,O.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{isCircular:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loaderColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'black'`,computed:!1}},slidesConfig:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  mobile: { items: number; slidesToScroll: number };
  tablet: { items: number; slidesToScroll: number };
  desktop: { items: number; slidesToScroll: number };
}`,signature:{properties:[{key:`mobile`,value:{name:`signature`,type:`object`,raw:`{ items: number; slidesToScroll: number }`,signature:{properties:[{key:`items`,value:{name:`number`,required:!0}},{key:`slidesToScroll`,value:{name:`number`,required:!0}}]},required:!0}},{key:`tablet`,value:{name:`signature`,type:`object`,raw:`{ items: number; slidesToScroll: number }`,signature:{properties:[{key:`items`,value:{name:`number`,required:!0}},{key:`slidesToScroll`,value:{name:`number`,required:!0}}]},required:!0}},{key:`desktop`,value:{name:`signature`,type:`object`,raw:`{ items: number; slidesToScroll: number }`,signature:{properties:[{key:`items`,value:{name:`number`,required:!0}},{key:`slidesToScroll`,value:{name:`number`,required:!0}}]},required:!0}}]}},description:``,defaultValue:{value:`{
  mobile: { items: 1, slidesToScroll: 1 },
  tablet: { items: 2, slidesToScroll: 2 },
  desktop: { items: 3, slidesToScroll: 3 },
}`,computed:!1}},slideSpacingPx:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}}}}})),A=t((()=>{k()})),j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{j=e(n(),1),A(),M=r(),{action:N}=__STORYBOOK_MODULE_ACTIONS__,P={title:`Slider/Slider`,component:O,parameters:{layout:`centered`,docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/slider';
\`\`\`
      `}}},tags:[`autodocs`]},F={display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},I=[{color:`red`,label:`1`,action:N(`on-click-1`)},{color:`blue`,label:`2`,action:N(`on-click-2`)},{color:`orange`,label:`3`,action:N(`on-click-3`)},{color:`green`,label:`4`,action:N(`on-click-4`)},{color:`pink`,label:`5`,action:N(`on-click-5`)}],L={args:{},render:e=>(0,M.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,M.jsx)(O,{...e,children:I.map(({color:e,label:t,action:n},r)=>(0,M.jsx)(`div`,{style:{background:e,...F},onClick:n,children:t},r))})})},R={args:{isCircular:!0},render:e=>(0,M.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,M.jsx)(O,{...e,children:I.map(({color:e,label:t,action:n},r)=>(0,M.jsx)(`div`,{style:{background:e,...F},onClick:n,children:t},r))})})},z={args:{},render:()=>(0,M.jsx)(()=>{let[e,t]=(0,j.useState)(!0);return(0,j.useEffect)(()=>{let e=setInterval(()=>{t(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,M.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,M.jsx)(O,{loading:e,children:I.map(({color:e,label:t,action:n},r)=>(0,M.jsx)(`div`,{style:{background:e,...F},onClick:n,children:t},r+100))})})},{})},B={args:{isCircular:!1,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:1,slidesToScroll:1},desktop:{items:1,slidesToScroll:1}}},render:e=>(0,M.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,M.jsx)(O,{...e,children:(0,M.jsx)(`div`,{style:{background:I[0].color,...F},onClick:I[0].action,children:I[0].label})})})},V={args:{isCircular:!0,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:2,slidesToScroll:2}}},render:e=>(0,M.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,M.jsxs)(O,{...e,children:[(0,M.jsx)(`div`,{style:{background:I[0].color,...F},onClick:I[0].action,children:I[0].label}),(0,M.jsx)(`div`,{style:{background:I[1].color,...F},onClick:I[1].action,children:I[1].label}),(0,M.jsx)(`div`,{style:{background:I[0].color,...F},onClick:I[0].action,children:I[0].label}),(0,M.jsx)(`div`,{style:{background:I[1].color,...F},onClick:I[1].action,children:I[1].label})]})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
          }, i) => <div key={i + 100} style={{
            background: color,
            ...slideStyle
          }} onClick={action}>
                {label}
              </div>)}
          </Slider>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
        <div style={{
        background: slides[0].color,
        ...slideStyle
      }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
      </Slider>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
        <div style={{
        background: slides[0].color,
        ...slideStyle
      }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
        <div style={{
        background: slides[1].color,
        ...slideStyle
      }} onClick={slides[1].action}>
          {slides[1].label}
        </div>
        <div style={{
        background: slides[0].color,
        ...slideStyle
      }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
        <div style={{
        background: slides[1].color,
        ...slideStyle
      }} onClick={slides[1].action}>
          {slides[1].label}
        </div>
      </Slider>
    </div>
}`,...V.parameters?.docs?.source}}},H=[`Default`,`SliderCircular`,`SliderLoading`,`Slider1Slide`,`Slider2Slides`]}))();export{L as Default,B as Slider1Slide,V as Slider2Slides,R as SliderCircular,z as SliderLoading,H as __namedExportsOrder,P as default};