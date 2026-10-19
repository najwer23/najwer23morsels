import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-DcO5ISc4.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./Button-DCTZcjYi.js";import{c as o,t as s,u as c}from"./Icons-DPMAZlVv.js";import{r as l,t as u}from"./hooks-xpzCJ1La.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{d=`_n23mSliderScrollWrapper_1rpr3_2`,f=`_n23mSliderScrollTrack_1rpr3_7`,p=`_dragging_1rpr3_32`,m=`_n23mSliderScrollControls_1rpr3_38`,h=`_n23mSliderScrollControlsButtons_1rpr3_46`,g={n23mSliderScrollWrapper:d,n23mSliderScrollTrack:f,dragging:p,n23mSliderScrollControls:m,n23mSliderScrollControlsButtons:h}})))()}var v,y,b;function x(){return(x=e((()=>{v=t(),a(),u(),s(),_(),y=n(),b=({children:e,className:t,gap:n=`5px`,isCircular:a=!1,autoPlay:s=!1,autoPlaySpeed:u=.5,style:d})=>{let f={carousel:(0,v.useRef)(null),buttonLeft:(0,v.useRef)(null),buttonRight:(0,v.useRef)(null),showArrowLeft:(0,v.useRef)(!1),showArrowRight:(0,v.useRef)(!1),isSliding:(0,v.useRef)(!1),animationFrameId:(0,v.useRef)(null),isHovered:(0,v.useRef)(!1),hasInitialized:(0,v.useRef)(!1),updateControls:(0,v.useRef)(()=>{}),drag:(0,v.useRef)({isDown:!1,startX:0,scrollLeft:0,isMove:!1,isDragging:!1}),childRefs:(0,v.useRef)([])},p=v.Children.toArray(e),m=p.length,h=a?p.map((e,t)=>(0,v.cloneElement)(e,{key:`cb-${t}`})):[],_=a?p.map((e,t)=>(0,v.cloneElement)(e,{key:`ca-${t}`})):[],b=a?[...h,...p,..._]:p,[x,S]=(0,v.useState)([]),{width:C}=l(),w=(0,v.useCallback)(()=>{if(!f.carousel.current)return;let e=Number(n.slice(0,-2)),t=f.childRefs.current.map(t=>{if(!t)return 0;let n=getComputedStyle(t),r=parseFloat(n.marginLeft)||0,i=parseFloat(n.marginRight)||0;return t.offsetWidth+r+i+e});S(e=>e.length===t.length&&e.every((e,n)=>e===t[n])?e:t)},[n]);(0,v.useEffect)(()=>{w()},[e,C,w]),(0,v.useEffect)(()=>{let e=f.carousel.current;if(!e)return;let t=null,n=new ResizeObserver(()=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{w(),f.updateControls.current()})});return n.observe(e),e.parentElement&&n.observe(e.parentElement),()=>{n.disconnect(),t&&cancelAnimationFrame(t)}},[w,a]);let T=(0,v.useMemo)(()=>{let e=[],t=0;for(let n of x)e.push(t),t+=n;return e},[x]);(0,v.useEffect)(()=>{f.hasInitialized.current=!1},[a]),(0,v.useEffect)(()=>{a&&f.carousel.current&&T.length&&!f.hasInitialized.current&&(f.carousel.current.scrollLeft=(T[m]||0)-Number(n.slice(0,-2))*2,f.hasInitialized.current=!0),E()},[C,T,m,a]),(0,v.useEffect)(()=>{D(!1)},[]),(0,v.useEffect)(()=>{if(!a)return;if(!s){f.animationFrameId.current&&(cancelAnimationFrame(f.animationFrameId.current),f.animationFrameId.current=null);return}let e,t=()=>{if(!f.carousel.current)return;if(f.isSliding.current||f.isHovered.current){f.animationFrameId.current=requestAnimationFrame(t);return}let e=f.carousel.current,n=e.scrollLeft+u;if(a&&T.length&&x.length){let e=T[T.length-1]+(x[x.length-1]||0),t=T[m]||0,r=T[m+p.length]||e;n>r+x[0]/2&&(n-=r-t)}e.scrollLeft=n,E(),f.animationFrameId.current=requestAnimationFrame(t)};return e=setTimeout(()=>{f.animationFrameId.current=requestAnimationFrame(t)},500),()=>{e&&clearTimeout(e),f.animationFrameId.current&&(cancelAnimationFrame(f.animationFrameId.current),f.animationFrameId.current=null)}},[s,u,a,T,x,m,p.length]);let E=()=>{if(f.carousel.current){if(a)f.showArrowLeft.current=!0,f.showArrowRight.current=!0;else{let e=f.carousel.current.scrollLeft,t=f.carousel.current.scrollWidth-f.carousel.current.clientWidth;f.showArrowLeft.current=e>0,f.showArrowRight.current=e<t-1}D(f.isSliding.current)}};f.updateControls.current=E;let D=e=>{f.buttonLeft.current&&(f.buttonLeft.current.disabled=e||!f.showArrowLeft.current),f.buttonRight.current&&(f.buttonRight.current.disabled=e||!f.showArrowRight.current)},O=()=>{if(f.carousel.current){if(a&&T.length&&x.length){let e=f.carousel.current.scrollLeft,t=T[T.length-1]+(x[x.length-1]||0),n=T[m]||0,r=T[m+p.length]||t;e<n-x[0]/2?f.carousel.current.scrollLeft=e+(T[p.length+m]-n):e>r+x[0]/2&&(f.carousel.current.scrollLeft=e-(r-n))}E()}},k=(e,t,n=300)=>{if(f.isSliding.current)return;f.isSliding.current=!0,D(!0);let r=e.scrollLeft,i=t-r,a=performance.now(),o=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,s=t=>{let c=t-a,l=Math.min(c/n,1);e.scrollLeft=r+i*o(l),l<1?requestAnimationFrame(s):(f.isSliding.current=!1,D(!1),E())};requestAnimationFrame(s)},A=(0,v.useCallback)(()=>{if(!f.carousel.current||!T.length||!x.length)return;let e=f.carousel.current,t=e.offsetWidth,r=e.scrollLeft,i=T.findIndex((e,t)=>e>r);i===-1?i=T.length-1:i>0&&i--;let o=0,s=0;for(let e=i;e<T.length&&(o+=x[e],s++,!(o>=t));e++);let c,l=i+s-1;c=T[l]+x[l]>r+t+1?l:i+s;let u=T[c]-Number(n.slice(0,-2))*2;u<0&&(u=0),a&&(u=(T[m]||0)+u-(T[m]||0)),k(f.carousel.current,u,400)},[T,x,n,m,a,p.length]),j=(0,v.useCallback)(()=>{if(!f.carousel.current||!T.length||!x.length)return;let e=f.carousel.current,t=e.offsetWidth,r=e.scrollLeft,i=0;for(let e=0;e<T.length;e++)if(T[e]>r){i=e-1;break}i<0&&(i=0);let o=0,s=0;for(let e=i;e>=0&&(o+=x[e],o<=t);e--)s++;let c=i;a||(c=Math.max(s-1,c));let l=T[c]+x[c]-t+Number(n.slice(0,-2));l<0&&(l=0),a&&(l=(T[m]||0)+l-(T[m]||0)+Number(n.slice(0,-2))),k(f.carousel.current,l,400)},[T,x,n,m,a]),M=e=>`pageX`in e?e.pageX:`touches`in e?e.touches[0].pageX:0,N=e=>{f.drag.current.isDown=!0,f.drag.current.startX=e.pageX-(f.carousel.current?.offsetLeft||0),f.drag.current.scrollLeft=f.carousel.current?.scrollLeft||0,f.drag.current.isDragging=!0,R()},P=()=>{f.drag.current.isDown=!1,f.drag.current.isDragging=!1,R()},F=()=>{f.drag.current.isDown&&(f.drag.current.isDown=!1,f.drag.current.isDragging=!1,R())},I=e=>{if(!f.drag.current.isDown){f.drag.current.isMove=!1;return}e.preventDefault();let t=M(e)-(f.carousel.current?.offsetLeft||0)-f.drag.current.startX;Math.abs(t)>5&&(f.drag.current.isMove=!0),f.carousel.current&&(f.carousel.current.scrollLeft=f.drag.current.scrollLeft-t,E())},L=e=>{f.drag.current.isMove&&(e.preventDefault(),e.stopPropagation())},R=()=>{f.carousel.current&&(f.drag.current.isDragging?f.carousel.current.classList.add(g.dragging):f.carousel.current.classList.remove(g.dragging))},z=()=>{f.isHovered.current=!0},B=()=>{f.isHovered.current=!1};return(0,y.jsxs)(`div`,{className:[`n23mSliderScroll`,t].filter(Boolean).join(` `),style:{...r({"--sliderscroll-g":n,height:`calc(100% - 60px)`}),...d},onMouseEnter:z,onMouseLeave:B,children:[(0,y.jsx)(`div`,{className:[g.n23mSliderScrollWrapper,`n23mSliderScrollWrapper`].join(` `),children:(0,y.jsx)(`div`,{className:g.n23mSliderScrollTrack,ref:f.carousel,onClick:L,onScroll:O,onMouseDown:N,onMouseLeave:F,onMouseUp:P,onMouseMove:I,children:b.map((e,t)=>(0,y.jsx)(`div`,{ref:e=>{f.childRefs.current[t]=e},style:{display:`inline-block`},children:e},e.key||t))})}),(0,y.jsx)(`div`,{className:[g.n23mSliderScrollControls,`n23mSliderScrollControls`].join(` `),children:(0,y.jsxs)(`div`,{className:[g.n23mSliderScrollControlsButtons,`n23mSliderScrollControlsButtons`].join(` `),children:[(0,y.jsx)(i,{ref:f.buttonLeft,height:`50px`,width:`50px`,backgroundColor:`#F2F0EF`,padding:0,title:`Prev`,onClick:j,borderColor:`black`,backgroundColorDisabled:`#F2F0EF`,children:(0,y.jsx)(c,{width:24,height:24})}),(0,y.jsx)(i,{ref:f.buttonRight,height:`50px`,width:`50px`,backgroundColor:`#F2F0EF`,padding:0,title:`Next`,onClick:A,borderColor:`black`,backgroundColorDisabled:`#F2F0EF`,children:(0,y.jsx)(o,{width:24,height:24})})]})})]})},b.displayName=`SliderScroll`;try{b.displayName=`SliderScroll`,b.__docgenInfo={description:``,displayName:`SliderScroll`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,methods:[],props:{arrowLeftIcon:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`arrowLeftIcon`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`ReactNode`}},arrowRightIcon:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`arrowRightIcon`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`ReactNode`}},gap:{defaultValue:{value:`5px`},declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`gap`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`string`}},isCircular:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`isCircular`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`boolean`}},autoPlay:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`autoPlay`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`boolean`}},autoPlaySpeed:{defaultValue:{value:`0.5`},declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`autoPlaySpeed`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`number`}},style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/SliderScroll/SliderScroll.tsx`,name:`SliderScrollProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{x(),S=n(),C={title:`Slider/SliderScroll`,component:b,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},w=[{color:`red`,label:`1`,href:`/here1`},{color:`blue`,label:`2`,href:`/here2`},{color:`orange`,label:`3`,href:`/here3`},{color:`green`,label:`4`,href:`/here4`},{color:`pink`,label:`5`,href:`/here5`},{color:`purple`,label:`6`,href:`/here6`},{color:`orangered`,label:`7`,href:`/here7`}],T={args:{gap:`10px`},render:e=>(0,S.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,S.jsx)(b,{...e,children:w.map(({label:e},t)=>(0,S.jsx)(`div`,{style:{width:`200px`,height:`340px`,background:w[t].color,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},t))})})},E={args:{gap:`10px`,isCircular:!0},render:e=>(0,S.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,S.jsx)(b,{...e,children:w.map(({label:e},t)=>(0,S.jsx)(`div`,{style:{width:`200px`,height:`340px`,background:w[t].color,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},t))})})},D={args:{gap:`10px`,isCircular:!0},render:e=>(0,S.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,S.jsx)(b,{...e,children:w.map(({label:e,color:t},n)=>{let r=`${Math.round(180+Math.random()*140)}px`;return(0,S.jsx)(`div`,{style:{width:r,height:`340px`,background:t,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},n)})})})},O={args:{gap:`10px`,isCircular:!0,autoPlay:!0,autoPlaySpeed:.5},render:e=>(0,S.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,S.jsx)(b,{...e,children:w.map(({label:e,color:t},n)=>{let r=`${Math.round(180+Math.random()*140)}px`;return(0,S.jsx)(`div`,{style:{width:r,height:`340px`,background:t,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},n)})})})},k={args:{gap:`10px`},render:e=>(0,S.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,S.jsx)(b,{...e,children:w.map(({label:e,href:t},n)=>(0,S.jsx)(`a`,{draggable:`false`,href:t,style:{width:`200px`,height:`340px`,background:w[n].color,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},n))})})},A={args:{gap:`10px`},render:e=>(0,S.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,S.jsx)(b,{...e,children:Array.from({length:20},(e,t)=>(0,S.jsx)(`a`,{draggable:`false`,href:`/jkg`,style:{display:`block`,width:`300px`,height:`340px`},children:(0,S.jsx)(`img`,{draggable:`false`,src:`https://picsum.photos/300/340`,alt:``,width:`300px`,height:`340px`,style:{height:`100%`,width:`auto`,display:`block`}})},t))})})},j=[`Default`,`SliderScrollCircular`,`SliderScrollCircularDifferentSizes`,`SliderScrollCircularDifferentSizesAutoplay`,`SliderScrollWithLinksAsItem`,`SliderScrollWithImgLinksAsItem`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{T as Default,E as SliderScrollCircular,D as SliderScrollCircularDifferentSizes,O as SliderScrollCircularDifferentSizesAutoplay,A as SliderScrollWithImgLinksAsItem,k as SliderScrollWithLinksAsItem,j as __namedExportsOrder,C as default};