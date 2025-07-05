import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BDR-Hysn.js";import{B as E}from"./Button-B3Klu473.js";import{u as re}from"./useWindowSize-YjqvspLn.js";import{a as te,I as le}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const oe="_n23mSliderScrollWrapper_fmwwc_2",ne="_n23mSliderScrollTrack_fmwwc_7",se="_dragging_fmwwc_32",ie="_n23mSliderScrollControls_fmwwc_37",ce="_n23mSliderScrollControlsButtons_fmwwc_45",w={n23mSliderScrollWrapper:oe,n23mSliderScrollTrack:ne,dragging:se,n23mSliderScrollControls:ie,n23mSliderScrollControlsButtons:ce},f=({children:a,className:h,gap:s="5px",isCircular:o=!1})=>{const r=c.useRef(null),[R,g]=c.useState(!1),[T,S]=c.useState(!1),{width:B}=re(),[N,I]=c.useState(!1),u=c.Children.toArray(a),b=u.length,X=o?u.map((e,l)=>c.cloneElement(e,{key:`clone-before-${l}`})):[],z=o?u.map((e,l)=>c.cloneElement(e,{key:`clone-after-${l}`})):[],y=()=>{if(!r.current||!r.current.firstElementChild)return 0;const e=r.current.firstElementChild,l=getComputedStyle(e);return e.offsetWidth+parseInt(l.marginLeft||"0")+parseInt(l.marginRight||"0")+Number(s.slice(0,-2))},x=()=>{if(r.current)if(o)g(!0),S(!0);else{const e=r.current.scrollLeft,l=r.current.scrollWidth-r.current.clientWidth;e<=0?(g(!1),S(l!==0)):e>=l?(g(!0),S(!1)):(g(!0),S(!0))}};c.useEffect(()=>{if(o){const e=y();r.current&&e&&(r.current.scrollLeft=e*b)}x()},[B,b,s,a,o]);const v=c.useRef(!1),_=c.useRef(null),A=()=>{v.current=!0,_.current&&clearTimeout(_.current),_.current=window.setTimeout(()=>{v.current=!1},150)},q=()=>{if(r.current)if(A(),o){const e=y();if(!e)return;const l=e*(b+u.length),d=e*b,n=r.current.scrollLeft;n<d-e/2?r.current.scrollLeft=n+e*u.length:n>l+e/2&&(r.current.scrollLeft=n-e*u.length),g(!0),S(!0)}else x()},M=(e,l,d=300,n=!1)=>{if(v.current&&!n){e.scrollLeft=l,x();return}const j=e.scrollLeft,K=l-j,Q=performance.now(),Z=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,D=p=>{if(v.current&&!n){e.scrollLeft=l,x();return}const ee=p-Q,F=Math.min(ee/d,1);e.scrollLeft=j+K*Z(F),F<1?requestAnimationFrame(D):x()};requestAnimationFrame(D)},U=()=>{if(!r.current)return;const e=y();if(e===0)return;const d=Math.floor(r.current.offsetWidth/e)*e;let n=r.current.scrollLeft-d;o||(n=Math.max(n,0)),M(r.current,n,600,!0)},O=()=>{if(!r.current)return;const e=y();if(e===0)return;const d=Math.floor(r.current.offsetWidth/e)*e;let n=r.current.scrollLeft+d;if(!o){const j=r.current.scrollWidth-r.current.clientWidth;n=Math.min(n,j)}M(r.current,n,600,!0)},i=c.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1}),P=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,V=e=>{i.current.isDown=!0,i.current.startX=e.pageX-(r.current?.offsetLeft||0),i.current.scrollLeft=r.current?.scrollLeft||0,I(!0)},$=()=>{i.current.isDown=!1,I(!1)},Y=()=>{i.current.isDown&&(i.current.isDown=!1,I(!1))},G=e=>{if(!i.current.isDown){i.current.isMove=!1;return}e.preventDefault(),A();const d=P(e)-(r.current?.offsetLeft||0)-i.current.startX;Math.abs(d)>5&&(i.current.isMove=!0),r.current&&(r.current.scrollLeft=i.current.scrollLeft-d)},H=e=>{i.current.isMove&&(e.preventDefault(),e.stopPropagation())},J=e=>{A()};return t.jsxs("div",{className:["n23mSliderScroll",h].filter(Boolean).join(" "),style:{"--sliderscroll-gap":s,height:"calc(100% - 60px)"},children:[t.jsx("div",{className:[w.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:t.jsxs("div",{className:[w.n23mSliderScrollTrack,N?w.dragging:""].join(" "),ref:r,onClick:H,onScroll:q,onMouseDown:V,onMouseLeave:Y,onMouseUp:$,onMouseMove:G,onTouchMove:J,children:[o&&X,u,o&&z]})}),t.jsx("div",{className:[w.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:t.jsxs("div",{className:[w.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[t.jsx(E,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:U,borderColor:"black",backgroundColorDisabled:"#F2F0EF",disabled:!R&&!o,children:t.jsx(te,{width:24,height:24})}),t.jsx(E,{height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",borderColor:"black",backgroundColorDisabled:"#F2F0EF",onClick:O,disabled:!T&&!o,children:t.jsx(le,{width:24,height:24})})]})})]})};f.displayName="SliderScroll";f.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1},isCircular:{defaultValue:{value:"false",computed:!1},required:!1}}};const ge={title:"Slider/SliderScroll",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},m=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],k={args:{gap:"10px"},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(f,{...a,children:m.map(({label:h},s)=>t.jsx("div",{style:{width:"200px",height:"340px",background:m[s].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:h},s))})})},L={args:{gap:"10px",isCircular:!0},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(f,{...a,children:m.map(({label:h},s)=>t.jsx("div",{style:{width:"200px",height:"340px",background:m[s].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:h},s))})})},C={args:{gap:"10px"},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(f,{...a,children:m.map(({label:h,href:s},o)=>t.jsx("a",{draggable:"false",href:s,style:{width:"200px",height:"340px",background:m[o].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:h},o))})})},W={args:{gap:"10px"},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(f,{...a,children:Array.from({length:20},(h,s)=>t.jsx("a",{draggable:"false",href:"/jkg",style:{width:"300px",height:"340px"},children:t.jsx("img",{draggable:"false",src:"https://picsum.photos/300/340",alt:"",width:"300px",height:"340px",style:{height:"100%",width:"auto",display:"block"}})},s))})})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    gap: '10px',
    isCircular: true
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
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
            <img draggable="false" src="https://picsum.photos/300/340" alt="" width="300px" height="340px" style={{
          height: '100%',
          width: 'auto',
          display: 'block'
        }} />
          </a>)}
      </SliderScroll>
    </div>
}`,...W.parameters?.docs?.source}}};const Se=["Default","SliderScrollCircular","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{k as Default,L as SliderScrollCircular,W as SliderScrollWithImgLinksAsItem,C as SliderScrollWithLinksAsItem,Se as __namedExportsOrder,ge as default};
