import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as B,r as c}from"./iframe-BLhW-w8x.js";import{L as Z}from"./Loader-CdV_WFc2.js";import{a as ee,I as ne}from"./IconArrowRight-DaV6Kolw.js";import{B as M}from"./Button-B3Klu473.js";import{u as le}from"./useWindowSize-Bo315Rdi.js";import{T as re}from"./TextBox-DhZTsRfC.js";const te="_n23mSlider_10mao_2",ie="_n23mSliderContainerSlider_10mao_6",se="_n23mSliderSlideWrapper_10mao_16",oe="_n23mSliderSlide_10mao_16",ae="_n23mSliderControls_10mao_37",de="_n23mSliderControlsButtons_10mao_44",ce="_n23mSliderCounter_10mao_50",y={n23mSlider:te,n23mSliderContainerSlider:ie,n23mSliderSlideWrapper:se,n23mSliderSlide:oe,n23mSliderControls:ae,n23mSliderControlsButtons:de,n23mSliderCounter:ce},I=(l,u,p=!1,o)=>(p?l.slice(0,u):l.slice(-u)).map((d,S)=>B.cloneElement(d,{key:`${p?"clone-first":"clone-last"}-${S} ${o}`,className:d.props.className})),x=({isCircular:l=!1,children:u,className:p,loading:o=!1,loaderColor:d="black",slidesConfig:S={mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:3,slidesToScroll:3}},slideSpacingPx:v=10})=>{const t=B.Children.toArray(u).filter(B.isValidElement),{width:A}=le(),[F,Y]=c.useState(0),R=c.useRef(null),[s,E]=c.useState(l?t.length*2:0),[h,T]=c.useState(!1),g=c.useRef([]),[O,V]=c.useState(null),[X,z]=c.useState(0);let r,w,_,L;A<767.98?(r=S.mobile.items,w=S.mobile.slidesToScroll,_="transform 0.4s cubic-bezier(.4,0,.2,1)",L=450):A<1199.98?(r=S.tablet.items,w=S.tablet.slidesToScroll,_="transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",L=900):(r=S.desktop.items,w=S.desktop.slidesToScroll,_="transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)",L=900),c.useLayoutEffect(()=>{let n;const a=()=>{R.current&&Y(R.current.offsetWidth),E(l?t.length*2:0)},i=()=>{clearTimeout(n),n=window.setTimeout(a,150),T(!1)};return a(),window.addEventListener("resize",i),()=>{clearTimeout(n),window.removeEventListener("resize",i)}},[o,l,r,t.length]);const f=r>0?(F-v*(r-1))/r:0;let j=l?[...I(t,t.length,!1,1),...I(t,t.length,!1,2),...t,...I(t,t.length,!0,3),...I(t,t.length,!0,4)]:t;const K=n=>{n.touches.length===1&&(V(n.touches[0].clientX),z(0))},U=n=>{O!==null&&z(n.touches[0].clientX-O)},G=()=>{X>50&&!(h||!l&&s===0)?P():X<-50&&!(h||!l&&s+r>=t.length)&&H(),V(null),z(0)};c.useLayoutEffect(()=>{g.current.forEach((n,a)=>{if(!n)return;let i=0,b=0;r==1&&t.length!=1?(i=35,b=35):r==2?(i=20,b=20):r==4?(i=10,b=10):r==3&&(i=15,b=15);const Q=(a-s)*(f+v-b)+(F-(f-i)*r-v*(r-1))/2;n.style.transition=h?_:"none",n.style.transform=`translateX(${Q}px)`})},[s,F,h,j.length,r,f,v,o]),c.useLayoutEffect(()=>{if(!h)return;let n;const a=()=>{let i=s;s<r*2&&l?i=s+t.length*2:s>=t.length*2+r&&l&&(i=s-t.length*2),i!==s&&l&&E(i),T(!1),g.current.forEach(b=>{b&&b.removeEventListener("transitionend",a)}),clearTimeout(n)};return g.current.forEach(i=>{i&&i.addEventListener("transitionend",a)}),n=window.setTimeout(()=>{T(!1),g.current.forEach(i=>{i&&i.removeEventListener("transitionend",a)})},L),()=>{g.current.forEach(i=>{i&&i.removeEventListener("transitionend",a)}),clearTimeout(n)}},[s,l,h,t.length,r,j.length,o]);const H=()=>{h||(T(!0),E(n=>n+w))},P=()=>{h||(T(!0),E(n=>n-w))};g.current.length!==j.length&&(g.current=Array(j.length).fill(null));const J=()=>{if(!l)return s;const n=t.length;return n<1?0:(s+n)%n};return e.jsxs("div",{className:[y.n23mSlider,"n23mSlider",p].filter(Boolean).join(" "),style:{height:o?"calc(100% - 2px)":"calc(100% - 60px)"},onTouchStart:K,onTouchMove:U,onTouchEnd:G,children:[o&&e.jsx(Z,{loaderColor:d}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[y.n23mSliderContainerSlider].filter(Boolean).join(" "),children:e.jsx("div",{className:[y.n23mSliderSlideWrapper,"n23mSliderSlideWrapper"].join(" "),ref:R,style:{display:"flex",gap:`${v}px`,overflow:"hidden",width:"100%",boxSizing:"border-box"},children:j.map((n,a)=>e.jsx("div",{ref:i=>{g.current[a]=i},className:y.n23mSliderSlide,style:{width:r==1&&t.length==1?"100%":r==1?`calc(${f}px - 35px)`:r==2?`calc(${f}px - 20px)`:r==3?`calc(${f}px - 15px)`:r==4?`calc(${f}px - 10px)`:`${f}px`},"aria-hidden":a<s||a>=s+r,children:n},n.key??a))})}),e.jsxs("div",{className:[y.n23mSliderControls,"n23mSliderControls"].join(" "),style:{justifyContent:r==1?"space-between":"flex-end"},children:[r==1&&e.jsx("div",{className:[y.n23mSliderCounter,"n23mSliderCounter"].join(" "),children:e.jsx(re,{mobileSize:16,desktopSize:16,color:"black",children:l?`${J()+1} / ${t.length}`:`${s+1} / ${t.length}`})}),e.jsxs("div",{className:[y.n23mSliderControlsButtons,"n23mSliderControlsButtons"].join(" "),children:[e.jsx(M,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:P,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:h||!l&&s===0,children:e.jsx(ee,{width:24,height:24})}),e.jsx(M,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:H,disabled:h||!l&&s+r>=t.length,children:e.jsx(ne,{width:24,height:24})})]})]})]})]})};x.displayName="Slider";x.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{isCircular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loaderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},slidesConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mobile: {
    items: number;
    slidesToScroll: number;
  };
  tablet: {
    items: number;
    slidesToScroll: number;
  };
  desktop: {
    items: number;
    slidesToScroll: number;
  };
}`,signature:{properties:[{key:"mobile",value:{name:"signature",type:"object",raw:`{
  items: number;
  slidesToScroll: number;
}`,signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"tablet",value:{name:"signature",type:"object",raw:`{
  items: number;
  slidesToScroll: number;
}`,signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}},{key:"desktop",value:{name:"signature",type:"object",raw:`{
  items: number;
  slidesToScroll: number;
}`,signature:{properties:[{key:"items",value:{name:"number",required:!0}},{key:"slidesToScroll",value:{name:"number",required:!0}}]},required:!0}}]}},description:"",defaultValue:{value:`{
  mobile: {
    items: 1,
    slidesToScroll: 1,
  },
  tablet: {
    items: 2,
    slidesToScroll: 2,
  },
  desktop: {
    items: 3,
    slidesToScroll: 3,
  },
}`,computed:!1}},slideSpacingPx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}}};const{action:C}=__STORYBOOK_MODULE_ACTIONS__,be={title:"Slider/Slider",component:x,parameters:{layout:"centered",docs:{description:{component:`
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
\`\`\`
      `}}},tags:["autodocs"]},k={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},m=[{color:"red",label:"1",action:C("on-click-1")},{color:"blue",label:"2",action:C("on-click-2")},{color:"orange",label:"3",action:C("on-click-3")},{color:"green",label:"4",action:C("on-click-4")},{color:"pink",label:"5",action:C("on-click-5")}],q={args:{},render:l=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(x,{...l,children:m.map(({color:u,label:p,action:o},d)=>e.jsx("div",{style:{background:u,...k},onClick:o,children:p},d))})})},N={args:{isCircular:!0},render:l=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(x,{...l,children:m.map(({color:u,label:p,action:o},d)=>e.jsx("div",{style:{background:u,...k},onClick:o,children:p},d))})})},W={args:{},render:()=>{const l=()=>{const[u,p]=c.useState(!0);return c.useEffect(()=>{const o=setInterval(()=>{p(d=>!d)},3e3);return()=>clearInterval(o)},[]),e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(x,{loading:u,children:m.map(({color:o,label:d,action:S},v)=>e.jsx("div",{style:{background:o,...k},onClick:S,children:d},v+100))})})};return e.jsx(l,{})}},$={args:{isCircular:!1,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:1,slidesToScroll:1},desktop:{items:1,slidesToScroll:1}}},render:l=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(x,{...l,children:e.jsx("div",{style:{background:m[0].color,...k},onClick:m[0].action,children:m[0].label})})})},D={args:{isCircular:!0,slidesConfig:{mobile:{items:1,slidesToScroll:1},tablet:{items:2,slidesToScroll:2},desktop:{items:2,slidesToScroll:2}}},render:l=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsxs(x,{...l,children:[e.jsx("div",{style:{background:m[0].color,...k},onClick:m[0].action,children:m[0].label}),e.jsx("div",{style:{background:m[1].color,...k},onClick:m[1].action,children:m[1].label})]})})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      </Slider>
    </div>
}`,...D.parameters?.docs?.source}}};const xe=["Default","SliderCircular","SliderLoading","Slider1Slide","Slider2Slides"];export{q as Default,$ as Slider1Slide,D as Slider2Slides,N as SliderCircular,W as SliderLoading,xe as __namedExportsOrder,be as default};
