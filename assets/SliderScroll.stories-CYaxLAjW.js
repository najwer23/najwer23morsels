import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BYT3K4Bu.js";import{B}from"./Button-BRec2T5Z.js";import{u as Q}from"./useWindowSize-Rjbu2Tb_.js";import{a as Z,I as ee}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const re="_n23mSliderScrollWrapper_fmwwc_2",te="_n23mSliderScrollTrack_fmwwc_7",le="_dragging_fmwwc_32",ne="_n23mSliderScrollControls_fmwwc_37",oe="_n23mSliderScrollControlsButtons_fmwwc_45",g={n23mSliderScrollWrapper:re,n23mSliderScrollTrack:te,dragging:le,n23mSliderScrollControls:ne,n23mSliderScrollControlsButtons:oe},p=({children:a,className:u,gap:o="5px",isCircular:s=!1})=>{const r=c.useRef(null),W=c.useRef(null),_=c.useRef(null),I=c.useRef(!1),R=c.useRef(!1),S=c.useRef(!1),x=c.useRef(!1),h=c.Children.toArray(a),w=h.length,N=s?h.map((e,l)=>c.cloneElement(e,{key:`clone-before-${l}`})):[],T=s?h.map((e,l)=>c.cloneElement(e,{key:`clone-after-${l}`})):[],b=()=>{if(!r.current||!r.current.firstElementChild)return 0;const e=r.current.firstElementChild,l=getComputedStyle(e);return e.offsetWidth+parseInt(l.marginLeft||"0")+parseInt(l.marginRight||"0")+Number(o.slice(0,-2))},y=()=>{if(r.current){if(s)I.current=!0,R.current=!0;else{const e=r.current.scrollLeft,l=r.current.scrollWidth-r.current.clientWidth;I.current=e>0,R.current=e<l}v(S.current)}},v=e=>{W.current&&(W.current.disabled=e||!I.current),_.current&&(_.current.disabled=e||!R.current)},{width:X}=Q();c.useLayoutEffect(()=>{if(s){const e=b();r.current&&e&&(r.current.scrollLeft=e*w-20)}y()},[X,w,o,a,s]);const z=()=>{if(r.current){if(s){const e=b();if(!e)return;const l=e*(w+h.length),d=e*w,n=r.current.scrollLeft;n<d-e/2?r.current.scrollLeft=n+e*h.length:n>l+e/2&&(r.current.scrollLeft=n-e*h.length)}y()}},M=(e,l,d=300)=>{if(S.current)return;S.current=!0,v(!0);const n=e.scrollLeft,D=l-n,H=performance.now(),J=f=>f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2,E=f=>{const K=f-H,F=Math.min(K/d,1);e.scrollLeft=n+D*J(F),F<1?requestAnimationFrame(E):(S.current=!1,v(!1),y())};requestAnimationFrame(E)},q=()=>{if(!r.current)return;const e=b();if(e===0)return;const d=Math.floor(r.current.offsetWidth/e)*e;let n=r.current.scrollLeft-d;s||(n=Math.max(n,0)),M(r.current,n,600)},O=()=>{if(!r.current)return;const e=b();if(e===0)return;const d=Math.floor(r.current.offsetWidth/e)*e;let n=r.current.scrollLeft+d;if(!s){const D=r.current.scrollWidth-r.current.clientWidth;n=Math.min(n,D)}M(r.current,n,600)},i=c.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1}),P=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,V=e=>{i.current.isDown=!0,i.current.startX=e.pageX-(r.current?.offsetLeft||0),i.current.scrollLeft=r.current?.scrollLeft||0,x.current=!0,A()},$=()=>{i.current.isDown=!1,x.current=!1,A()},U=()=>{i.current.isDown&&(i.current.isDown=!1,x.current=!1,A())},Y=e=>{if(!i.current.isDown){i.current.isMove=!1;return}e.preventDefault();const d=P(e)-(r.current?.offsetLeft||0)-i.current.startX;Math.abs(d)>5&&(i.current.isMove=!0),r.current&&(r.current.scrollLeft=i.current.scrollLeft-d,y())},G=e=>{i.current.isMove&&(e.preventDefault(),e.stopPropagation())},A=()=>{r.current&&(x.current?r.current.classList.add(g.dragging):r.current.classList.remove(g.dragging))};return c.useEffect(()=>{v(!1)},[]),t.jsxs("div",{className:["n23mSliderScroll",u].filter(Boolean).join(" "),style:{"--sliderscroll-gap":o,height:"calc(100% - 60px)"},children:[t.jsx("div",{className:[g.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:t.jsxs("div",{className:g.n23mSliderScrollTrack,ref:r,onClick:G,onScroll:z,onMouseDown:V,onMouseLeave:U,onMouseUp:$,onMouseMove:Y,children:[s&&N,h,s&&T]})}),t.jsx("div",{className:[g.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:t.jsxs("div",{className:[g.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[t.jsx(B,{ref:W,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:q,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:t.jsx(Z,{width:24,height:24})}),t.jsx(B,{ref:_,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",onClick:O,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:t.jsx(ee,{width:24,height:24})})]})})]})};p.displayName="SliderScroll";p.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1},isCircular:{defaultValue:{value:"false",computed:!1},required:!1}}};const fe={title:"Slider/SliderScroll",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},m=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],j={args:{gap:"10px"},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(p,{...a,children:m.map(({label:u},o)=>t.jsx("div",{style:{width:"200px",height:"340px",background:m[o].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:u},o))})})},L={args:{gap:"10px",isCircular:!0},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(p,{...a,children:m.map(({label:u},o)=>t.jsx("div",{style:{width:"200px",height:"340px",background:m[o].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:u},o))})})},k={args:{gap:"10px"},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(p,{...a,children:m.map(({label:u,href:o},s)=>t.jsx("a",{draggable:"false",href:o,style:{width:"200px",height:"340px",background:m[s].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:u},s))})})},C={args:{gap:"10px"},render:a=>t.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:t.jsx(p,{...a,children:Array.from({length:20},(u,o)=>t.jsx("a",{draggable:"false",href:"/jkg",style:{width:"300px",height:"340px"},children:t.jsx("img",{draggable:"false",src:"https://picsum.photos/300/340",alt:"",width:"300px",height:"340px",style:{height:"100%",width:"auto",display:"block"}})},o))})})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const pe=["Default","SliderScrollCircular","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{j as Default,L as SliderScrollCircular,C as SliderScrollWithImgLinksAsItem,k as SliderScrollWithLinksAsItem,pe as __namedExportsOrder,fe as default};
