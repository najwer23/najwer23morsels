import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./getCssVariableStyle-rhjbzvYQ.js";import{n as o,t as s}from"./button-B5Vw-g4E.js";import{a as c,i as l,t as u}from"./icons-D0l__KYG.js";import{n as d,t as f}from"./hooks-D84Tn-yc.js";var p,m,h,g,_,v,y=t((()=>{p=`_n23mSliderScrollWrapper_1rpr3_2`,m=`_n23mSliderScrollTrack_1rpr3_7`,h=`_dragging_1rpr3_32`,g=`_n23mSliderScrollControls_1rpr3_38`,_=`_n23mSliderScrollControlsButtons_1rpr3_46`,v={n23mSliderScrollWrapper:p,n23mSliderScrollTrack:m,dragging:h,n23mSliderScrollControls:g,n23mSliderScrollControlsButtons:_}})),b,x,S,C=t((()=>{b=e(n(),1),s(),f(),u(),i(),y(),x=r(),S=({children:e,className:t,gap:n=`5px`,isCircular:r=!1,autoPlay:i=!1,autoPlaySpeed:s=.5,style:u})=>{let f={carousel:(0,b.useRef)(null),buttonLeft:(0,b.useRef)(null),buttonRight:(0,b.useRef)(null),showArrowLeft:(0,b.useRef)(!1),showArrowRight:(0,b.useRef)(!1),isSliding:(0,b.useRef)(!1),animationFrameId:(0,b.useRef)(null),isHovered:(0,b.useRef)(!1),drag:(0,b.useRef)({isDown:!1,startX:0,scrollLeft:0,isMove:!1,isDragging:!1}),childRefs:(0,b.useRef)([])},p=b.Children.toArray(e),m=p.length,h=r?p.map((e,t)=>(0,b.cloneElement)(e,{key:`cb-${t}`})):[],g=r?p.map((e,t)=>(0,b.cloneElement)(e,{key:`ca-${t}`})):[],_=r?[...h,...p,...g]:p,[y,S]=(0,b.useState)([]),{width:C}=d();(0,b.useEffect)(()=>{f.carousel.current&&S(f.childRefs.current.map(e=>{if(!e)return 0;let t=getComputedStyle(e),r=parseFloat(t.marginLeft)||0,i=parseFloat(t.marginRight)||0;return e.offsetWidth+r+i+Number(n.slice(0,-2))}))},[e,C,n]);let w=(0,b.useMemo)(()=>{let e=[],t=0;for(let n of y)e.push(t),t+=n;return e},[y]);(0,b.useEffect)(()=>{r&&f.carousel.current&&w.length&&(f.carousel.current.scrollLeft=(w[m]||0)-Number(n.slice(0,-2))*2),T()},[C,w,m,r]),(0,b.useEffect)(()=>{E(!1)},[]),(0,b.useEffect)(()=>{if(!r)return;if(!i){f.animationFrameId.current&&(cancelAnimationFrame(f.animationFrameId.current),f.animationFrameId.current=null);return}let e,t=()=>{if(!f.carousel.current)return;if(f.isSliding.current||f.isHovered.current){f.animationFrameId.current=requestAnimationFrame(t);return}let e=f.carousel.current,n=e.scrollLeft+s;if(r&&w.length&&y.length){let e=w[w.length-1]+(y[y.length-1]||0),t=w[m]||0,r=w[m+p.length]||e;n>r+y[0]/2&&(n-=r-t)}e.scrollLeft=n,T(),f.animationFrameId.current=requestAnimationFrame(t)};return e=setTimeout(()=>{f.animationFrameId.current=requestAnimationFrame(t)},500),()=>{e&&clearTimeout(e),f.animationFrameId.current&&(cancelAnimationFrame(f.animationFrameId.current),f.animationFrameId.current=null)}},[i,s,r,w,y,m,p.length]);let T=()=>{if(f.carousel.current){if(r)f.showArrowLeft.current=!0,f.showArrowRight.current=!0;else{let e=f.carousel.current.scrollLeft,t=f.carousel.current.scrollWidth-f.carousel.current.clientWidth;f.showArrowLeft.current=e>0,f.showArrowRight.current=e<t-1}E(f.isSliding.current)}},E=e=>{f.buttonLeft.current&&(f.buttonLeft.current.disabled=e||!f.showArrowLeft.current),f.buttonRight.current&&(f.buttonRight.current.disabled=e||!f.showArrowRight.current)},D=()=>{if(f.carousel.current){if(r&&w.length&&y.length){let e=f.carousel.current.scrollLeft,t=w[w.length-1]+(y[y.length-1]||0),n=w[m]||0,r=w[m+p.length]||t;e<n-y[0]/2?f.carousel.current.scrollLeft=e+(w[p.length+m]-n):e>r+y[0]/2&&(f.carousel.current.scrollLeft=e-(r-n))}T()}},O=(e,t,n=300)=>{if(f.isSliding.current)return;f.isSliding.current=!0,E(!0);let r=e.scrollLeft,i=t-r,a=performance.now(),o=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,s=t=>{let c=t-a,l=Math.min(c/n,1);e.scrollLeft=r+i*o(l),l<1?requestAnimationFrame(s):(f.isSliding.current=!1,E(!1),T())};requestAnimationFrame(s)},k=(0,b.useCallback)(()=>{if(!f.carousel.current||!w.length||!y.length)return;let e=f.carousel.current,t=e.offsetWidth,i=e.scrollLeft,a=w.findIndex((e,t)=>e>i);a===-1?a=w.length-1:a>0&&a--;let o=0,s=0;for(let e=a;e<w.length&&(o+=y[e],s++,!(o>=t));e++);let c,l=a+s-1;c=w[l]+y[l]>i+t+1?l:a+s;let u=w[c]-Number(n.slice(0,-2))*2;u<0&&(u=0),r&&(u=(w[m]||0)+u-(w[m]||0)),O(f.carousel.current,u,400)},[w,y,n,m,r,p.length]),A=(0,b.useCallback)(()=>{if(!f.carousel.current||!w.length||!y.length)return;let e=f.carousel.current,t=e.offsetWidth,i=e.scrollLeft,a=0;for(let e=0;e<w.length;e++)if(w[e]>i){a=e-1;break}a<0&&(a=0);let o=0,s=0;for(let e=a;e>=0&&(o+=y[e],o<=t);e--)s++;let c=a;r||(c=Math.max(s-1,c));let l=w[c]+y[c]-t;l<0&&(l=0),r&&(l=(w[m]||0)+l-(w[m]||0)+Number(n.slice(0,-2))),O(f.carousel.current,l,400)},[w,y,n,m,r]),j=e=>`pageX`in e?e.pageX:`touches`in e?e.touches[0].pageX:0,M=e=>{f.drag.current.isDown=!0,f.drag.current.startX=e.pageX-(f.carousel.current?.offsetLeft||0),f.drag.current.scrollLeft=f.carousel.current?.scrollLeft||0,f.drag.current.isDragging=!0,L()},N=()=>{f.drag.current.isDown=!1,f.drag.current.isDragging=!1,L()},P=()=>{f.drag.current.isDown&&(f.drag.current.isDown=!1,f.drag.current.isDragging=!1,L())},F=e=>{if(!f.drag.current.isDown){f.drag.current.isMove=!1;return}e.preventDefault();let t=j(e)-(f.carousel.current?.offsetLeft||0)-f.drag.current.startX;Math.abs(t)>5&&(f.drag.current.isMove=!0),f.carousel.current&&(f.carousel.current.scrollLeft=f.drag.current.scrollLeft-t,T())},I=e=>{f.drag.current.isMove&&(e.preventDefault(),e.stopPropagation())},L=()=>{f.carousel.current&&(f.drag.current.isDragging?f.carousel.current.classList.add(v.dragging):f.carousel.current.classList.remove(v.dragging))},R=()=>{f.isHovered.current=!0},z=()=>{f.isHovered.current=!1};return(0,x.jsxs)(`div`,{className:[`n23mSliderScroll`,t].filter(Boolean).join(` `),style:{...a({"--sliderscroll-g":n,height:`calc(100% - 60px)`}),...u},onMouseEnter:R,onMouseLeave:z,children:[(0,x.jsx)(`div`,{className:[v.n23mSliderScrollWrapper,`n23mSliderScrollWrapper`].join(` `),children:(0,x.jsx)(`div`,{className:v.n23mSliderScrollTrack,ref:f.carousel,onClick:I,onScroll:D,onMouseDown:M,onMouseLeave:P,onMouseUp:N,onMouseMove:F,children:_.map((e,t)=>(0,x.jsx)(`div`,{ref:e=>{f.childRefs.current[t]=e},style:{display:`inline-block`},children:e},e.key||t))})}),(0,x.jsx)(`div`,{className:[v.n23mSliderScrollControls,`n23mSliderScrollControls`].join(` `),children:(0,x.jsxs)(`div`,{className:[v.n23mSliderScrollControlsButtons,`n23mSliderScrollControlsButtons`].join(` `),children:[(0,x.jsx)(o,{ref:f.buttonLeft,height:`50px`,width:`50px`,backgroundColor:`#F2F0EF`,padding:0,title:`Prev`,onClick:A,borderColor:`black`,backgroundColorDisabled:`#F2F0EF`,children:(0,x.jsx)(c,{width:24,height:24})}),(0,x.jsx)(o,{ref:f.buttonRight,height:`50px`,width:`50px`,backgroundColor:`#F2F0EF`,padding:0,title:`Next`,onClick:k,borderColor:`black`,backgroundColorDisabled:`#F2F0EF`,children:(0,x.jsx)(l,{width:24,height:24})})]})})]})},S.displayName=`SliderScroll`,S.__docgenInfo={description:``,methods:[],displayName:`SliderScroll`,props:{gap:{defaultValue:{value:`'5px'`,computed:!1},required:!1},isCircular:{defaultValue:{value:`false`,computed:!1},required:!1},autoPlay:{defaultValue:{value:`false`,computed:!1},required:!1},autoPlaySpeed:{defaultValue:{value:`0.5`,computed:!1},required:!1}}}})),w,T,E,D,O,k,A,j,M,N;t((()=>{C(),w=r(),T={title:`Slider/SliderScroll`,component:S,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/sliderscroll';
\`\`\`
      `}}}},E=[{color:`red`,label:`1`,href:`/here1`},{color:`blue`,label:`2`,href:`/here2`},{color:`orange`,label:`3`,href:`/here3`},{color:`green`,label:`4`,href:`/here4`},{color:`pink`,label:`5`,href:`/here5`},{color:`purple`,label:`6`,href:`/here6`},{color:`orangered`,label:`7`,href:`/here7`}],D={args:{gap:`10px`},render:e=>(0,w.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,w.jsx)(S,{...e,children:E.map(({label:e},t)=>(0,w.jsx)(`div`,{style:{width:`200px`,height:`340px`,background:E[t].color,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},t))})})},O={args:{gap:`10px`,isCircular:!0},render:e=>(0,w.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,w.jsx)(S,{...e,children:E.map(({label:e},t)=>(0,w.jsx)(`div`,{style:{width:`200px`,height:`340px`,background:E[t].color,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},t))})})},k={args:{gap:`10px`,isCircular:!0},render:e=>(0,w.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,w.jsx)(S,{...e,children:E.map(({label:e,color:t},n)=>(0,w.jsx)(`div`,{style:{width:`${Math.round(180+Math.random()*140)}px`,height:`340px`,background:t,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},n))})})},A={args:{gap:`10px`,isCircular:!0,autoPlay:!0,autoPlaySpeed:.5},render:e=>(0,w.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,w.jsx)(S,{...e,children:E.map(({label:e,color:t},n)=>(0,w.jsx)(`div`,{style:{width:`${Math.round(180+Math.random()*140)}px`,height:`340px`,background:t,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},n))})})},j={args:{gap:`10px`},render:e=>(0,w.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,w.jsx)(S,{...e,children:E.map(({label:e,href:t},n)=>(0,w.jsx)(`a`,{draggable:`false`,href:t,style:{width:`200px`,height:`340px`,background:E[n].color,display:`flex`,justifyContent:`center`,alignItems:`center`,color:`white`,fontSize:`40px`},children:e},n))})})},M={args:{gap:`10px`},render:e=>(0,w.jsx)(`div`,{style:{width:`min(700px,calc(100vw - 50px))`,height:`400px`},children:(0,w.jsx)(S,{...e,children:Array.from({length:20},(e,t)=>(0,w.jsx)(`a`,{draggable:`false`,href:`/jkg`,style:{display:`block`,width:`300px`,height:`340px`},children:(0,w.jsx)(`img`,{draggable:`false`,src:`https://picsum.photos/300/340`,alt:``,width:`300px`,height:`340px`,style:{height:`100%`,width:`auto`,display:`block`}})},t))})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`SliderScrollCircular`,`SliderScrollCircularDifferentSizes`,`SliderScrollCircularDifferentSizesAutoplay`,`SliderScrollWithLinksAsItem`,`SliderScrollWithImgLinksAsItem`]}))();export{D as Default,O as SliderScrollCircular,k as SliderScrollCircularDifferentSizes,A as SliderScrollCircularDifferentSizesAutoplay,M as SliderScrollWithImgLinksAsItem,j as SliderScrollWithLinksAsItem,N as __namedExportsOrder,T as default};