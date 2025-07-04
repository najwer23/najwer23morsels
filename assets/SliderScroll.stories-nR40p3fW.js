import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-C8q0pwly.js";import{B as T}from"./Button-B3Klu473.js";import{a as P,I as K}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const V="_n23mSliderScrollWrapper_1uasw_2",Y="_n23mSliderScrollTrack_1uasw_7",G="_n23mSliderScrollControls_1uasw_27",J="_n23mSliderScrollControlsButtons_1uasw_35",S={n23mSliderScrollWrapper:V,n23mSliderScrollTrack:Y,n23mSliderScrollControls:G,n23mSliderScrollControlsButtons:J},Q=(o=0)=>{const[i,l]=c.useState({width:window.innerWidth,height:window.innerHeight});return c.useLayoutEffect(()=>{let r=null;const p=()=>{o===0&&i.width!==window.innerWidth&&l({width:window.innerWidth,height:window.innerHeight}),o!==0&&(r&&clearTimeout(r),r=setTimeout(()=>{i.width!==window.innerWidth&&l({width:window.innerWidth,height:window.innerHeight})},o))};return window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p),r&&clearTimeout(r)}},[i,o]),i},u=({children:o,className:i,gap:l="5px"})=>{const r=c.useRef(null),[p,y]=c.useState(!1),[A,j]=c.useState(!1),{width:F}=Q(),m=c.useRef(!1),L=c.useRef(null),C=()=>{if(!r.current||!r.current.childNodes[1])return 0;const e=r.current.childNodes[1],s=getComputedStyle(e);return parseInt(s.marginLeft)+parseInt(s.marginRight)+e.offsetWidth+Number(l.slice(0,-2))};c.useEffect(()=>{const e=setTimeout(()=>{f()},1);return()=>clearTimeout(e)},[F]);const k=()=>{m.current=!0,L.current&&clearTimeout(L.current),L.current=window.setTimeout(()=>{m.current=!1},150)},f=()=>{if(!r.current)return;k();const e=r.current.scrollLeft,s=r.current.scrollWidth-r.current.clientWidth;e<=0?(y(!1),j(s!==0)):e>=s?(y(!0),j(!1)):(y(!0),j(!0))},W=(e,s,a=10,h=!1)=>{if(m.current&&!h){e.scrollLeft=s,f();return}const g=e.scrollLeft,q=s-g,H=performance.now(),U=(d=20)=>d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2,_=d=>{if(m.current&&!h){e.scrollLeft=s,f();return}const O=d-H,M=Math.min(O/a,1);e.scrollLeft=g+q*U(M),M<1?requestAnimationFrame(_):f()};requestAnimationFrame(_)},E=()=>{if(!r.current)return;const e=C();if(e===0)return;const a=Math.floor(r.current.offsetWidth/e)*e,h=Math.max(r.current.scrollLeft-a,0);W(r.current,h,900,!0)},D=()=>{if(!r.current)return;const e=C();if(e===0)return;const a=Math.floor(r.current.offsetWidth/e)*e,h=r.current.scrollWidth-r.current.clientWidth,g=Math.min(r.current.scrollLeft+a,h);W(r.current,g,900,!0)},n=c.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1}),N=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,R=e=>{n.current.isDown=!0,n.current.startX=e.pageX-(r.current?.offsetLeft||0),n.current.scrollLeft=r.current?.scrollLeft||0},z=e=>{n.current.isMove&&(e.preventDefault(),e.stopPropagation())},I=()=>{n.current.isDown=!1},B=e=>{if(!n.current.isDown){n.current.isMove=!1;return}e.preventDefault(),k();const a=(N(e)-(r.current?.offsetLeft||0)-n.current.startX)*1;Math.abs(a)>5&&(n.current.isMove=!0),r.current&&(r.current.scrollLeft=n.current.scrollLeft-a)},X=e=>{k()};return t.jsxs("div",{className:["n23mSliderScroll",i].filter(Boolean).join(" "),style:{"--sliderscroll-gap":l,height:"calc(100% - 60px)"},children:[t.jsx("div",{className:[S.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:t.jsx("div",{className:S.n23mSliderScrollTrack,ref:r,onClick:z,onScroll:f,onMouseDown:R,onMouseLeave:I,onMouseUp:I,onMouseMove:B,onTouchMove:X,children:o})}),t.jsx("div",{className:[S.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:t.jsxs("div",{className:[S.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[t.jsx(T,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:E,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:!p,children:t.jsx(P,{width:24,height:24})}),t.jsx(T,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:D,disabled:!A,children:t.jsx(K,{width:24,height:24})})]})})]})};u.displayName="SliderScroll";u.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1}}};const le={title:"Slider/SliderScroll",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},v=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],x={args:{gap:"10px"},render:o=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(u,{...o,children:v.map(({label:i},l)=>t.jsx("div",{style:{width:"200px",height:"340px",background:v[l].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:i},l))})})},w={args:{gap:"10px"},render:o=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(u,{...o,children:v.map(({label:i,href:l},r)=>t.jsx("a",{draggable:"false",href:l,style:{width:"200px",height:"340px",background:v[r].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:i},r))})})},b={args:{gap:"10px"},render:o=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(u,{...o,children:Array.from({length:20},(i,l)=>t.jsx("a",{draggable:"false",href:"/jkg",style:{width:"300px",height:"340px"},children:t.jsx("img",{draggable:"false",src:"https://picsum.photos/300/400",alt:"",height:"340px",width:"300px",style:{height:"100%",width:"auto",display:"block"}})},l))})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    gap: '10px'
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <SliderScroll {...args}>
        {slides.map(({
        label
      }, i) => <div key={i} style={{
        width: '200px',
        height: '340px',
        background: slides[i].color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '40px'
      }}>
            {label}
          </div>)}
      </SliderScroll>
    </div>
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    gap: '10px'
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <SliderScroll {...args}>
        {slides.map(({
        label,
        href
      }, i) => <a draggable="false" href={href} key={i} style={{
        width: '200px',
        height: '340px',
        background: slides[i].color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '40px'
      }}>
            {label}
          </a>)}
      </SliderScroll>
    </div>
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    gap: '10px'
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <SliderScroll {...args}>
        {Array.from({
        length: 20
      }, (_, i) => <a draggable="false" href="/jkg" key={i} style={{
        width: '300px',
        height: '340px'
      }}>
            <img draggable="false" src="https://picsum.photos/300/400" alt="" height="340px" width="300px" style={{
          height: '100%',
          width: 'auto',
          display: 'block'
        }} />
          </a>)}
      </SliderScroll>
    </div>
}`,...b.parameters?.docs?.source}}};const se=["Default","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{x as Default,b as SliderScrollWithImgLinksAsItem,w as SliderScrollWithLinksAsItem,se as __namedExportsOrder,le as default};
