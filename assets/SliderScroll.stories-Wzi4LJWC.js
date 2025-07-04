import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CNewWGwA.js";import{B as M}from"./Button-B3Klu473.js";import{u as K}from"./useWindowSize-C9uD7bxh.js";import{a as V,I as Y}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const G="_n23mSliderScrollWrapper_1uasw_2",H="_n23mSliderScrollTrack_1uasw_7",J="_n23mSliderScrollControls_1uasw_27",Q="_n23mSliderScrollControlsButtons_1uasw_35",g={n23mSliderScrollWrapper:G,n23mSliderScrollTrack:H,n23mSliderScrollControls:J,n23mSliderScrollControlsButtons:Q},u=({children:i,className:d,gap:s="5px"})=>{const r=a.useRef(null),[A,y]=a.useState(!1),[F,v]=a.useState(!1),{width:T}=K(),f=a.useRef(!1),j=a.useRef(null),C=()=>{if(!r.current||!r.current.childNodes[1])return 0;const e=r.current.childNodes[1],l=getComputedStyle(e);return parseInt(l.marginLeft)+parseInt(l.marginRight)+e.offsetWidth+Number(s.slice(0,-2))};a.useEffect(()=>{const e=setTimeout(()=>{p()},1);return()=>clearTimeout(e)},[T]);const k=()=>{f.current=!0,j.current&&clearTimeout(j.current),j.current=window.setTimeout(()=>{f.current=!1},150)},p=()=>{if(!r.current)return;k();const e=r.current.scrollLeft,l=r.current.scrollWidth-r.current.clientWidth;e<=0?(y(!1),v(l!==0)):e>=l?(y(!0),v(!1)):(y(!0),v(!0))},L=(e,l,n=10,h=!1)=>{if(f.current&&!h){e.scrollLeft=l,p();return}const m=e.scrollLeft,q=l-m,U=performance.now(),O=(c=20)=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2,I=c=>{if(f.current&&!h){e.scrollLeft=l,p();return}const P=c-U,_=Math.min(P/n,1);e.scrollLeft=m+q*O(_),_<1?requestAnimationFrame(I):p()};requestAnimationFrame(I)},D=()=>{if(!r.current)return;const e=C();if(e===0)return;const n=Math.floor(r.current.offsetWidth/e)*e,h=Math.max(r.current.scrollLeft-n,0);L(r.current,h,900,!0)},N=()=>{if(!r.current)return;const e=C();if(e===0)return;const n=Math.floor(r.current.offsetWidth/e)*e,h=r.current.scrollWidth-r.current.clientWidth,m=Math.min(r.current.scrollLeft+n,h);L(r.current,m,900,!0)},o=a.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1}),R=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,E=e=>{o.current.isDown=!0,o.current.startX=e.pageX-(r.current?.offsetLeft||0),o.current.scrollLeft=r.current?.scrollLeft||0},B=e=>{o.current.isMove&&(e.preventDefault(),e.stopPropagation())},W=()=>{o.current.isDown=!1},X=e=>{if(!o.current.isDown){o.current.isMove=!1;return}e.preventDefault(),k();const n=(R(e)-(r.current?.offsetLeft||0)-o.current.startX)*1;Math.abs(n)>5&&(o.current.isMove=!0),r.current&&(r.current.scrollLeft=o.current.scrollLeft-n)},z=e=>{k()};return t.jsxs("div",{className:["n23mSliderScroll",d].filter(Boolean).join(" "),style:{"--sliderscroll-gap":s,height:"calc(100% - 60px)"},children:[t.jsx("div",{className:[g.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:t.jsx("div",{className:g.n23mSliderScrollTrack,ref:r,onClick:B,onScroll:p,onMouseDown:E,onMouseLeave:W,onMouseUp:W,onMouseMove:X,onTouchMove:z,children:i})}),t.jsx("div",{className:[g.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:t.jsxs("div",{className:[g.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[t.jsx(M,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:D,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:!A,children:t.jsx(V,{width:24,height:24})}),t.jsx(M,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:N,disabled:!F,children:t.jsx(Y,{width:24,height:24})})]})})]})};u.displayName="SliderScroll";u.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1}}};const se={title:"Slider/SliderScroll",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},b=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],S={args:{gap:"10px"},render:i=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(u,{...i,children:b.map(({label:d},s)=>t.jsx("div",{style:{width:"200px",height:"340px",background:b[s].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:d},s))})})},x={args:{gap:"10px"},render:i=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(u,{...i,children:b.map(({label:d,href:s},r)=>t.jsx("a",{draggable:"false",href:s,style:{width:"200px",height:"340px",background:b[r].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:d},r))})})},w={args:{gap:"10px"},render:i=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(u,{...i,children:Array.from({length:20},(d,s)=>t.jsx("a",{draggable:"false",href:"/jkg",style:{width:"300px",height:"340px"},children:t.jsx("img",{draggable:"false",src:"https://picsum.photos/300/400",alt:"",height:"340px",width:"300px",style:{height:"100%",width:"auto",display:"block"}})},s))})})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const ne=["Default","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{S as Default,w as SliderScrollWithImgLinksAsItem,x as SliderScrollWithLinksAsItem,ne as __namedExportsOrder,se as default};
