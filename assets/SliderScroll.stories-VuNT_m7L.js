import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-rapgOS4q.js";import{B as X}from"./Button-BzQgl_Ul.js";import{u as ee}from"./useWindowSize-DhuydynN.js";import{a as re,I as te}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const le="_n23mSliderScrollWrapper_fmwwc_2",ne="_n23mSliderScrollTrack_fmwwc_7",oe="_dragging_fmwwc_32",se="_n23mSliderScrollControls_fmwwc_37",ce="_n23mSliderScrollControlsButtons_fmwwc_45",b={n23mSliderScrollWrapper:le,n23mSliderScrollTrack:ne,dragging:oe,n23mSliderScrollControls:se,n23mSliderScrollControlsButtons:ce},x=({children:h,className:f,gap:o="5px",isCircular:c=!1})=>{const r=i.useRef(null),F=i.useRef(null),A=i.useRef(null),D=i.useRef(!1),E=i.useRef(!1),k=i.useRef(!1),j=i.useRef(!1),p=i.Children.toArray(h),L=p.length,z=c?p.map((e,t)=>i.cloneElement(e,{key:`clone-before-${t}`})):[],V=c?p.map((e,t)=>i.cloneElement(e,{key:`clone-after-${t}`})):[],S=()=>{if(!r.current||!r.current.firstElementChild)return 0;const e=r.current.firstElementChild,t=getComputedStyle(e);return e.offsetWidth+parseInt(t.marginLeft||"0")+parseInt(t.marginRight||"0")+Number(o.slice(0,-2))},C=()=>{if(r.current){if(c)D.current=!0,E.current=!0;else{const e=r.current.scrollLeft,t=r.current.scrollWidth-r.current.clientWidth;D.current=e>0,E.current=e<t}I(k.current)}},I=e=>{F.current&&(F.current.disabled=e||!D.current),A.current&&(A.current.disabled=e||!E.current)},{width:q}=ee();i.useLayoutEffect(()=>{if(c){const e=S();r.current&&e&&(r.current.scrollLeft=e*L-(parseInt(o,10)+10))}C()},[q,L,o,h,c]);const O=()=>{if(r.current){if(c){const e=S();if(!e)return;const t=e*(L+p.length),s=e*L,n=r.current.scrollLeft;n<s-e/2?r.current.scrollLeft=n+e*p.length:n>t+e/2&&(r.current.scrollLeft=n-e*p.length)}C()}},T=(e,t,s=300)=>{if(k.current)return;k.current=!0,I(!0);const n=e.scrollLeft,v=t-n,g=performance.now(),w=u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,d=u=>{const m=u-g,N=Math.min(m/s,1);e.scrollLeft=n+v*w(N),N<1?requestAnimationFrame(d):(k.current=!1,I(!1),C())};requestAnimationFrame(d)},P=e=>{if(!r.current)return;const t=S(),s=e*t-(parseInt(o,10)+10);T(r.current,s,400)},$=e=>{if(!r.current)return;const t=S(),s=r.current.offsetWidth,n=Math.max(0,(e+1)*t-s+10);T(r.current,n,400)},U=()=>{if(!r.current)return;const e=S();if(!e)return;const t=r.current,s=t.offsetWidth,n=Math.floor(s/e),v=t.scrollLeft,g=Math.round(v/e),w=g+n-1,d=(w+1)*e,u=v+s;let m;d>u+1?m=w:m=g+n,c||(m=Math.min(p.length-n,m)),P(m)},Y=()=>{if(!r.current)return;const e=S();if(!e)return;const t=r.current,s=t.offsetWidth,n=Math.floor(s/e),g=t.scrollLeft/e,w=g%1;let d;w>.01?d=Math.floor(g):(d=Math.floor(g)-1,d=Math.max(n-1,d)),c||(d=Math.max(n-1,d)),$(d)},a=i.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1}),G=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,H=e=>{a.current.isDown=!0,a.current.startX=e.pageX-(r.current?.offsetLeft||0),a.current.scrollLeft=r.current?.scrollLeft||0,j.current=!0,B()},J=()=>{a.current.isDown=!1,j.current=!1,B()},K=()=>{a.current.isDown&&(a.current.isDown=!1,j.current=!1,B())},Q=e=>{if(!a.current.isDown){a.current.isMove=!1;return}e.preventDefault();const s=G(e)-(r.current?.offsetLeft||0)-a.current.startX;Math.abs(s)>5&&(a.current.isMove=!0),r.current&&(r.current.scrollLeft=a.current.scrollLeft-s,C())},Z=e=>{a.current.isMove&&(e.preventDefault(),e.stopPropagation())},B=()=>{r.current&&(j.current?r.current.classList.add(b.dragging):r.current.classList.remove(b.dragging))};return i.useEffect(()=>{I(!1)},[]),l.jsxs("div",{className:["n23mSliderScroll",f].filter(Boolean).join(" "),style:{"--sliderscroll-gap":o,height:"calc(100% - 60px)"},children:[l.jsx("div",{className:[b.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:l.jsxs("div",{className:b.n23mSliderScrollTrack,ref:r,onClick:Z,onScroll:O,onMouseDown:H,onMouseLeave:K,onMouseUp:J,onMouseMove:Q,children:[c&&z,p,c&&V]})}),l.jsx("div",{className:[b.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:l.jsxs("div",{className:[b.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[l.jsx(X,{ref:F,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:Y,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:l.jsx(re,{width:24,height:24})}),l.jsx(X,{ref:A,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",onClick:U,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:l.jsx(te,{width:24,height:24})})]})})]})};x.displayName="SliderScroll";x.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1},isCircular:{defaultValue:{value:"false",computed:!1},required:!1}}};const ge={title:"Slider/SliderScroll",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},y=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],W={args:{gap:"10px"},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(x,{...h,children:y.map(({label:f},o)=>l.jsx("div",{style:{width:"200px",height:"340px",background:y[o].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:f},o))})})},R={args:{gap:"10px",isCircular:!0},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(x,{...h,children:y.map(({label:f},o)=>l.jsx("div",{style:{width:"200px",height:"340px",background:y[o].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:f},o))})})},M={args:{gap:"10px"},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(x,{...h,children:y.map(({label:f,href:o},c)=>l.jsx("a",{draggable:"false",href:o,style:{width:"200px",height:"340px",background:y[c].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:f},c))})})},_={args:{gap:"10px"},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(x,{...h,children:Array.from({length:20},(f,o)=>l.jsx("a",{draggable:"false",href:"/jkg",style:{width:"300px",height:"340px"},children:l.jsx("img",{draggable:"false",src:"https://picsum.photos/300/340",alt:"",width:"300px",height:"340px",style:{height:"100%",width:"auto",display:"block"}})},o))})})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const me=["Default","SliderScrollCircular","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{W as Default,R as SliderScrollCircular,_ as SliderScrollWithImgLinksAsItem,M as SliderScrollWithLinksAsItem,me as __namedExportsOrder,ge as default};
