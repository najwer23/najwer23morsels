import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-EUDpX_OH.js";import{B as T}from"./Button-DQduqDMf.js";import{u as te}from"./useWindowSize-DtavIjav.js";import{a as ne,I as le}from"./IconLocate-BfinrzTe.js";import{g as oe}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DkftY4kt.js";import"./TextBox-B-3qtFF2.js";const se="_n23mSliderScrollWrapper_1rpr3_2",ie="_n23mSliderScrollTrack_1rpr3_7",ae="_dragging_1rpr3_32",ce="_n23mSliderScrollControls_1rpr3_38",de="_n23mSliderScrollControlsButtons_1rpr3_46",L={n23mSliderScrollWrapper:se,n23mSliderScrollTrack:ie,dragging:ae,n23mSliderScrollControls:ce,n23mSliderScrollControlsButtons:de},b=({children:h,className:g,gap:i="5px",isCircular:a=!1,autoPlay:k=!1,autoPlaySpeed:z=.5,style:q})=>{const e={carousel:c.useRef(null),buttonLeft:c.useRef(null),buttonRight:c.useRef(null),showArrowLeft:c.useRef(!1),showArrowRight:c.useRef(!1),isSliding:c.useRef(!1),animationFrameId:c.useRef(null),isHovered:c.useRef(!1),drag:c.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1,isDragging:!1}),childRefs:c.useRef([])},S=c.Children.toArray(h),f=S.length,V=a?S.map((r,n)=>c.cloneElement(r,{key:`cb-${n}`})):[],X=a?S.map((r,n)=>c.cloneElement(r,{key:`ca-${n}`})):[],P=a?[...V,...S,...X]:S,[d,$]=c.useState([]),{width:B}=te();c.useEffect(()=>{if(!e.carousel.current)return;const r=e.childRefs.current.map(n=>{if(!n)return 0;const s=getComputedStyle(n),o=parseFloat(s.marginLeft)||0,x=parseFloat(s.marginRight)||0;return n.offsetWidth+o+x+Number(i.slice(0,-2))});$(r)},[h,B,i]);const t=c.useMemo(()=>{const r=[];let n=0;for(const s of d)r.push(n),n+=s;return r},[d]);c.useEffect(()=>{a&&e.carousel.current&&t.length&&(e.carousel.current.scrollLeft=(t[f]||0)-Number(i.slice(0,-2))*2),C()},[B,t,f,a]),c.useEffect(()=>{I(!1)},[]),c.useEffect(()=>{if(!a)return;if(!k){e.animationFrameId.current&&(cancelAnimationFrame(e.animationFrameId.current),e.animationFrameId.current=null);return}let r;const n=()=>{if(!e.carousel.current)return;if(e.isSliding.current||e.isHovered.current){e.animationFrameId.current=requestAnimationFrame(n);return}const s=e.carousel.current;let o=s.scrollLeft+z;if(a&&t.length&&d.length){const x=t[t.length-1]+(d[d.length-1]||0),w=t[f]||0,p=t[f+S.length]||x;o>p+d[0]/2&&(o=o-(p-w))}s.scrollLeft=o,C(),e.animationFrameId.current=requestAnimationFrame(n)};return r=setTimeout(()=>{e.animationFrameId.current=requestAnimationFrame(n)},500),()=>{r&&clearTimeout(r),e.animationFrameId.current&&(cancelAnimationFrame(e.animationFrameId.current),e.animationFrameId.current=null)}},[k,z,a,t,d,f,S.length]);const C=()=>{if(e.carousel.current){if(a)e.showArrowLeft.current=!0,e.showArrowRight.current=!0;else{const r=e.carousel.current.scrollLeft,n=e.carousel.current.scrollWidth-e.carousel.current.clientWidth;e.showArrowLeft.current=r>0,e.showArrowRight.current=r<n-1}I(e.isSliding.current)}},I=r=>{e.buttonLeft.current&&(e.buttonLeft.current.disabled=r||!e.showArrowLeft.current),e.buttonRight.current&&(e.buttonRight.current.disabled=r||!e.showArrowRight.current)},H=()=>{if(e.carousel.current){if(a&&t.length&&d.length){const r=e.carousel.current.scrollLeft,n=t[t.length-1]+(d[d.length-1]||0),s=t[f]||0,o=t[f+S.length]||n;r<s-d[0]/2?e.carousel.current.scrollLeft=r+(t[S.length+f]-s):r>o+d[0]/2&&(e.carousel.current.scrollLeft=r-(o-s))}C()}},N=(r,n,s=300)=>{if(e.isSliding.current)return;e.isSliding.current=!0,I(!0);const o=r.scrollLeft,x=n-o,w=performance.now(),p=u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,m=u=>{const E=u-w,y=Math.min(E/s,1);r.scrollLeft=o+x*p(y),y<1?requestAnimationFrame(m):(e.isSliding.current=!1,I(!1),C())};requestAnimationFrame(m)},O=c.useCallback(()=>{if(!e.carousel.current||!t.length||!d.length)return;const r=e.carousel.current,n=r.offsetWidth,s=r.scrollLeft;let o=t.findIndex((j,ue)=>j>s);o===-1?o=t.length-1:o>0&&o--;let x=0,w=0;for(let j=o;j<t.length&&(x+=d[j],w++,!(x>=n));j++);let p;const m=o+w-1,u=t[m]+d[m],E=s+n;u>E+1?p=m:p=o+w;let y=t[p]-Number(i.slice(0,-2))*2;y<0&&(y=0),a&&(y=(t[f]||0)+y-(t[f]||0)),N(e.carousel.current,y,400)},[t,d,i,f,a,S.length]),U=c.useCallback(()=>{if(!e.carousel.current||!t.length||!d.length)return;const r=e.carousel.current,n=r.offsetWidth,s=r.scrollLeft;let o=0;for(let u=0;u<t.length;u++)if(t[u]>s){o=u-1;break}o<0&&(o=0);let x=0,w=0;for(let u=o;u>=0&&(x+=d[u],x<=n);u--)w++;let p=o;a||(p=Math.max(w-1,p));let m=t[p]+d[p]-n;m<0&&(m=0),a&&(m=(t[f]||0)+m-(t[f]||0)+Number(i.slice(0,-2))),N(e.carousel.current,m,400)},[t,d,i,f,a]),Y=r=>"pageX"in r?r.pageX:"touches"in r?r.touches[0].pageX:0,G=r=>{e.drag.current.isDown=!0,e.drag.current.startX=r.pageX-(e.carousel.current?.offsetLeft||0),e.drag.current.scrollLeft=e.carousel.current?.scrollLeft||0,e.drag.current.isDragging=!0,_()},J=()=>{e.drag.current.isDown=!1,e.drag.current.isDragging=!1,_()},K=()=>{e.drag.current.isDown&&(e.drag.current.isDown=!1,e.drag.current.isDragging=!1,_())},Q=r=>{if(!e.drag.current.isDown){e.drag.current.isMove=!1;return}r.preventDefault();const s=Y(r)-(e.carousel.current?.offsetLeft||0)-e.drag.current.startX;Math.abs(s)>5&&(e.drag.current.isMove=!0),e.carousel.current&&(e.carousel.current.scrollLeft=e.drag.current.scrollLeft-s,C())},Z=r=>{e.drag.current.isMove&&(r.preventDefault(),r.stopPropagation())},_=()=>{e.carousel.current&&(e.drag.current.isDragging?e.carousel.current.classList.add(L.dragging):e.carousel.current.classList.remove(L.dragging))},ee=()=>{e.isHovered.current=!0},re=()=>{e.isHovered.current=!1};return l.jsxs("div",{className:["n23mSliderScroll",g].filter(Boolean).join(" "),style:{...oe({"--sliderscroll-g":i,height:"calc(100% - 60px)"}),...q},onMouseEnter:ee,onMouseLeave:re,children:[l.jsx("div",{className:[L.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:l.jsx("div",{className:L.n23mSliderScrollTrack,ref:e.carousel,onClick:Z,onScroll:H,onMouseDown:G,onMouseLeave:K,onMouseUp:J,onMouseMove:Q,children:P.map((r,n)=>l.jsx("div",{ref:s=>{e.childRefs.current[n]=s},style:{display:"inline-block"},children:r},r.key||n))})}),l.jsx("div",{className:[L.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:l.jsxs("div",{className:[L.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[l.jsx(T,{ref:e.buttonLeft,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:U,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:l.jsx(ne,{width:24,height:24})}),l.jsx(T,{ref:e.buttonRight,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",onClick:O,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:l.jsx(le,{width:24,height:24})})]})})]})};b.displayName="SliderScroll";b.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1},isCircular:{defaultValue:{value:"false",computed:!1},required:!1},autoPlay:{defaultValue:{value:"false",computed:!1},required:!1},autoPlaySpeed:{defaultValue:{value:"0.5",computed:!1},required:!1}}};const ye={title:"Slider/SliderScroll",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/sliderscroll';
\`\`\`
      `}}}},v=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],F={args:{gap:"10px"},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(b,{...h,children:v.map(({label:g},i)=>l.jsx("div",{style:{width:"200px",height:"340px",background:v[i].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},i))})})},R={args:{gap:"10px",isCircular:!0},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(b,{...h,children:v.map(({label:g},i)=>l.jsx("div",{style:{width:"200px",height:"340px",background:v[i].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},i))})})},A={args:{gap:"10px",isCircular:!0},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(b,{...h,children:v.map(({label:g,color:i},a)=>{const k=`${Math.round(180+Math.random()*140)}px`;return l.jsx("div",{style:{width:k,height:"340px",background:i,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},a)})})})},W={args:{gap:"10px",isCircular:!0,autoPlay:!0,autoPlaySpeed:.5},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(b,{...h,children:v.map(({label:g,color:i},a)=>{const k=`${Math.round(180+Math.random()*140)}px`;return l.jsx("div",{style:{width:k,height:"340px",background:i,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},a)})})})},M={args:{gap:"10px"},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(b,{...h,children:v.map(({label:g,href:i},a)=>l.jsx("a",{draggable:"false",href:i,style:{width:"200px",height:"340px",background:v[a].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},a))})})},D={args:{gap:"10px"},render:h=>l.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:l.jsx(b,{...h,children:Array.from({length:20},(g,i)=>l.jsx("a",{draggable:"false",href:"/jkg",style:{display:"block",width:"300px",height:"340px"},children:l.jsx("img",{draggable:"false",src:"https://picsum.photos/300/340",alt:"",width:"300px",height:"340px",style:{height:"100%",width:"auto",display:"block"}})},i))})})};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    gap: '10px',
    isCircular: true,
    autoPlay: true,
    autoPlaySpeed: 0.5
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
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const ve=["Default","SliderScrollCircular","SliderScrollCircularDifferentSizes","SliderScrollCircularDifferentSizesAutoplay","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{F as Default,R as SliderScrollCircular,A as SliderScrollCircularDifferentSizes,W as SliderScrollCircularDifferentSizesAutoplay,D as SliderScrollWithImgLinksAsItem,M as SliderScrollWithLinksAsItem,ve as __namedExportsOrder,ye as default};
