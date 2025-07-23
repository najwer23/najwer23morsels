import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-BWC6Af7U.js";import{B as $}from"./Button-CsNYdhcw.js";import{u as le}from"./useWindowSize-jQqDDLK1.js";import{a as ne,I as se}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const oe="_n23mSliderScrollWrapper_fmwwc_2",ie="_n23mSliderScrollTrack_fmwwc_7",ce="_dragging_fmwwc_32",ae="_n23mSliderScrollControls_fmwwc_37",de="_n23mSliderScrollControlsButtons_fmwwc_45",L={n23mSliderScrollWrapper:oe,n23mSliderScrollTrack:ie,dragging:ce,n23mSliderScrollControls:ae,n23mSliderScrollControlsButtons:de},v=({children:u,className:m,gap:c="5px",isCircular:a=!1})=>{const r=f.useRef(null),A=f.useRef(null),E=f.useRef(null),B=f.useRef(!1),N=f.useRef(!1),C=f.useRef(!1),b=f.Children.toArray(u),x=b.length,O=a?b.map((e,t)=>f.cloneElement(e,{key:`clone-before-${t}`})):[],P=a?b.map((e,t)=>f.cloneElement(e,{key:`clone-after-${t}`})):[],X=f.useRef([]),U=a?[...O,...b,...P]:b,[h,Y]=f.useState([]),{width:V}=le();f.useEffect(()=>{if(!r.current)return;const e=X.current.map(t=>{if(!t)return 0;const o=getComputedStyle(t),s=parseFloat(o.marginLeft)||0,S=parseFloat(o.marginRight)||0;return t.offsetWidth+s+S+Number(c.slice(0,-2))});Y(e)},[u,V,c]);const n=f.useMemo(()=>{const e=[];let t=0;for(const o of h)e.push(t),t+=o;return e},[h]);f.useEffect(()=>{a&&r.current&&n.length&&(r.current.scrollLeft=(n[x]||0)-Number(c.slice(0,-2))*2),I()},[V,n,x,a]);const I=()=>{if(r.current){if(a)B.current=!0,N.current=!0;else{const e=r.current.scrollLeft,t=r.current.scrollWidth-r.current.clientWidth;B.current=e>0,N.current=e<t-1}W(C.current)}},W=e=>{A.current&&(A.current.disabled=e||!B.current),E.current&&(E.current.disabled=e||!N.current)},G=()=>{if(r.current){if(a&&n.length&&h.length){const e=r.current.scrollLeft,t=n[n.length-1]+(h[h.length-1]||0),o=n[x]||0,s=n[x+b.length]||t;e<o-h[0]/2?r.current.scrollLeft=e+(n[b.length+x]-o):e>s+h[0]/2&&(r.current.scrollLeft=e-(s-o))}I()}},q=(e,t,o=300)=>{if(C.current)return;C.current=!0,W(!0);const s=e.scrollLeft,S=t-s,w=performance.now(),p=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,g=i=>{const T=i-w,y=Math.min(T/o,1);e.scrollLeft=s+S*p(y),y<1?requestAnimationFrame(g):(C.current=!1,W(!1),I())};requestAnimationFrame(g)},H=()=>{if(!r.current||!n.length||!h.length)return;const e=r.current,t=e.offsetWidth,o=e.scrollLeft;let s=n.findIndex((j,fe)=>j>o);s===-1?s=n.length-1:s>0&&s--;let S=0,w=0;for(let j=s;j<n.length&&(S+=h[j],w++,!(S>=t));j++);let p;const g=s+w-1,i=n[g]+h[g],T=o+t;i>T+1?p=g:p=s+w,a||(p=Math.min(b.length-w,p));let y=n[p]-Number(c.slice(0,-2))*2;y<0&&(y=0),a&&(y=(n[x]||0)+y-(n[x]||0)),q(r.current,y,400)},J=()=>{if(!r.current||!n.length||!h.length)return;const e=r.current,t=e.offsetWidth,o=e.scrollLeft;let s=0;for(let i=0;i<n.length;i++)if(n[i]>o){s=i-1;break}s<0&&(s=0);let S=0,w=0;for(let i=s;i>=0&&(S+=h[i],S<=t);i--)w++;let p=s;a||(p=Math.max(w-1,p));let g=n[p]+h[p]-t;g<0&&(g=0),a&&(g=(n[x]||0)+g-(n[x]||0)+Number(c.slice(0,-2))),q(r.current,g,400)},d=f.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1,isDragging:!1}),K=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,Q=e=>{d.current.isDown=!0,d.current.startX=e.pageX-(r.current?.offsetLeft||0),d.current.scrollLeft=r.current?.scrollLeft||0,d.current.isDragging=!0,z()},Z=()=>{d.current.isDown=!1,d.current.isDragging=!1,z()},ee=()=>{d.current.isDown&&(d.current.isDown=!1,d.current.isDragging=!1,z())},re=e=>{if(!d.current.isDown){d.current.isMove=!1;return}e.preventDefault();const o=K(e)-(r.current?.offsetLeft||0)-d.current.startX;Math.abs(o)>5&&(d.current.isMove=!0),r.current&&(r.current.scrollLeft=d.current.scrollLeft-o,I())},te=e=>{d.current.isMove&&(e.preventDefault(),e.stopPropagation())},z=()=>{r.current&&(d.current.isDragging?r.current.classList.add(L.dragging):r.current.classList.remove(L.dragging))};return f.useEffect(()=>{W(!1)},[]),l.jsxs("div",{className:["n23mSliderScroll",m].filter(Boolean).join(" "),style:{"--sliderscroll-gap":c,height:"calc(100% - 60px)"},children:[l.jsx("div",{className:[L.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:l.jsx("div",{className:L.n23mSliderScrollTrack,ref:r,onClick:te,onScroll:G,onMouseDown:Q,onMouseLeave:ee,onMouseUp:Z,onMouseMove:re,style:{whiteSpace:"nowrap"},children:U.map((e,t)=>l.jsx("div",{ref:o=>{X.current[t]=o},style:{display:"inline-block"},children:e},e.key||t))})}),l.jsx("div",{className:[L.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:l.jsxs("div",{className:[L.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[l.jsx($,{ref:A,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:J,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:l.jsx(ne,{width:24,height:24})}),l.jsx($,{ref:E,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",onClick:H,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:l.jsx(se,{width:24,height:24})})]})})]})};v.displayName="SliderScroll";v.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1},isCircular:{defaultValue:{value:"false",computed:!1},required:!1}}};const we={title:"Slider/SliderScroll",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},k=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],R={args:{gap:"10px"},render:u=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(v,{...u,children:k.map(({label:m},c)=>l.jsx("div",{style:{width:"200px",height:"340px",background:k[c].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:m},c))})})},D={args:{gap:"10px",isCircular:!0},render:u=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(v,{...u,children:k.map(({label:m},c)=>l.jsx("div",{style:{width:"200px",height:"340px",background:k[c].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:m},c))})})},_={args:{gap:"10px",isCircular:!0},render:u=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(v,{...u,children:k.map(({label:m,color:c},a)=>{const r=`${Math.round(180+Math.random()*140)}px`;return l.jsx("div",{style:{width:r,height:"340px",background:c,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:m},a)})})})},F={args:{gap:"10px"},render:u=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(v,{...u,children:k.map(({label:m,href:c},a)=>l.jsx("a",{draggable:"false",href:c,style:{width:"200px",height:"340px",background:k[a].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:m},a))})})},M={args:{gap:"10px"},render:u=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(v,{...u,children:Array.from({length:20},(m,c)=>l.jsx("a",{draggable:"false",href:"/jkg",style:{display:"block",width:"300px",height:"340px"},children:l.jsx("img",{draggable:"false",src:"https://picsum.photos/300/340",alt:"",width:"300px",height:"340px",style:{height:"100%",width:"auto",display:"block"}})},c))})})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        label,
        color
      }, i) => {
        // Random width between 180 and 320 px, rounded to nearest 10px
        const randomWidth = \`\${Math.round(180 + Math.random() * 140)}px\`;
        return <div key={i} style={{
          width: randomWidth,
          height: '340px',
          background: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '40px'
        }}>
              {label}
            </div>;
      })}
      </SliderScroll>
    </div>
}`,..._.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        display: 'block',
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
}`,...M.parameters?.docs?.source}}};const be=["Default","SliderScrollCircular","SliderScrollCircularDifferentSizes","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{R as Default,D as SliderScrollCircular,_ as SliderScrollCircularDifferentSizes,M as SliderScrollWithImgLinksAsItem,F as SliderScrollWithLinksAsItem,be as __namedExportsOrder,we as default};
