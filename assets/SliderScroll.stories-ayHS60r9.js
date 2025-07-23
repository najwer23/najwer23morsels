import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-C6EMxjHP.js";import{B as Y}from"./Button-D5wH2hfh.js";import{u as de}from"./useWindowSize-wCiGQM-y.js";import{a as ue,I as he}from"./IconArrowRight-DaV6Kolw.js";import"./Loader-CdV_WFc2.js";import"./TextBox-DhZTsRfC.js";const fe="_n23mSliderScrollWrapper_1nilv_2",pe="_n23mSliderScrollTrack_1nilv_7",ge="_dragging_1nilv_32",me="_n23mSliderScrollControls_1nilv_38",xe="_n23mSliderScrollControlsButtons_1nilv_46",I={n23mSliderScrollWrapper:fe,n23mSliderScrollTrack:pe,dragging:ge,n23mSliderScrollControls:me,n23mSliderScrollControlsButtons:xe},v=({children:f,className:g,gap:i="5px",isCircular:c=!1,autoPlay:L=!1,autoPlaySpeed:$=.5})=>{const l=a.useRef(null),B=a.useRef(null),N=a.useRef(null),q=a.useRef(!1),T=a.useRef(!1),W=a.useRef(!1),b=a.useRef(null),X=a.useRef(!1),w=a.Children.toArray(f),p=w.length,G=c?w.map((e,t)=>a.cloneElement(e,{key:`cb-${t}`})):[],J=c?w.map((e,t)=>a.cloneElement(e,{key:`ca-${t}`})):[],O=a.useRef([]),K=c?[...G,...w,...J]:w,[d,Q]=a.useState([]),{width:H}=de();a.useEffect(()=>{if(!l.current)return;const e=O.current.map(t=>{if(!t)return 0;const o=getComputedStyle(t),s=parseFloat(o.marginLeft)||0,x=parseFloat(o.marginRight)||0;return t.offsetWidth+s+x+Number(i.slice(0,-2))});Q(e)},[f,H,i]);const r=a.useMemo(()=>{const e=[];let t=0;for(const o of d)e.push(t),t+=o;return e},[d]);a.useEffect(()=>{c&&l.current&&r.length&&(l.current.scrollLeft=(r[p]||0)-Number(i.slice(0,-2))*2),R()},[H,r,p,c]);const R=()=>{if(l.current){if(c)q.current=!0,T.current=!0;else{const e=l.current.scrollLeft,t=l.current.scrollWidth-l.current.clientWidth;q.current=e>0,T.current=e<t-1}F(W.current)}},F=e=>{B.current&&(B.current.disabled=e||!q.current),N.current&&(N.current.disabled=e||!T.current)},Z=()=>{if(l.current){if(c&&r.length&&d.length){const e=l.current.scrollLeft,t=r[r.length-1]+(d[d.length-1]||0),o=r[p]||0,s=r[p+w.length]||t;e<o-d[0]/2?l.current.scrollLeft=e+(r[w.length+p]-o):e>s+d[0]/2&&(l.current.scrollLeft=e-(s-o))}R()}},U=(e,t,o=300)=>{if(W.current)return;W.current=!0,F(!0);const s=e.scrollLeft,x=t-s,S=performance.now(),y=u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,m=u=>{const P=u-S,k=Math.min(P/o,1);e.scrollLeft=s+x*y(k),k<1?requestAnimationFrame(m):(W.current=!1,F(!1),R())};requestAnimationFrame(m)},ee=a.useCallback(()=>{if(!l.current||!r.length||!d.length)return;const e=l.current,t=e.offsetWidth,o=e.scrollLeft;let s=r.findIndex((C,Se)=>C>o);s===-1?s=r.length-1:s>0&&s--;let x=0,S=0;for(let C=s;C<r.length&&(x+=d[C],S++,!(x>=t));C++);let y;const m=s+S-1,u=r[m]+d[m],P=o+t;u>P+1?y=m:y=s+S;let k=r[y]-Number(i.slice(0,-2))*2;k<0&&(k=0),c&&(k=(r[p]||0)+k-(r[p]||0)),U(l.current,k,400)},[r,d,i,p,c,w.length]),re=a.useCallback(()=>{if(!l.current||!r.length||!d.length)return;const e=l.current,t=e.offsetWidth,o=e.scrollLeft;let s=0;for(let u=0;u<r.length;u++)if(r[u]>o){s=u-1;break}s<0&&(s=0);let x=0,S=0;for(let u=s;u>=0&&(x+=d[u],x<=t);u--)S++;let y=s;c||(y=Math.max(S-1,y));let m=r[y]+d[y]-t;m<0&&(m=0),c&&(m=(r[p]||0)+m-(r[p]||0)+Number(i.slice(0,-2))),U(l.current,m,400)},[r,d,i,p,c]),h=a.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1,isDragging:!1}),te=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,ne=e=>{h.current.isDown=!0,h.current.startX=e.pageX-(l.current?.offsetLeft||0),h.current.scrollLeft=l.current?.scrollLeft||0,h.current.isDragging=!0,V()},le=()=>{h.current.isDown=!1,h.current.isDragging=!1,V()},oe=()=>{h.current.isDown&&(h.current.isDown=!1,h.current.isDragging=!1,V())},se=e=>{if(!h.current.isDown){h.current.isMove=!1;return}e.preventDefault();const o=te(e)-(l.current?.offsetLeft||0)-h.current.startX;Math.abs(o)>5&&(h.current.isMove=!0),l.current&&(l.current.scrollLeft=h.current.scrollLeft-o,R())},ie=e=>{h.current.isMove&&(e.preventDefault(),e.stopPropagation())},V=()=>{l.current&&(h.current.isDragging?l.current.classList.add(I.dragging):l.current.classList.remove(I.dragging))};a.useEffect(()=>{F(!1)},[]);const ce=()=>{X.current=!0},ae=()=>{X.current=!1};return a.useEffect(()=>{if(!c)return;if(!L){b.current&&(cancelAnimationFrame(b.current),b.current=null);return}const e=()=>{if(!l.current)return;if(W.current||X.current){b.current=requestAnimationFrame(e);return}const t=l.current;let o=t.scrollLeft+$;if(c&&r.length&&d.length){const s=r[r.length-1]+(d[d.length-1]||0),x=r[p]||0,S=r[p+w.length]||s;o>S+d[0]/2&&(o=o-(S-x))}t.scrollLeft=o,R(),b.current=requestAnimationFrame(e)};return b.current=requestAnimationFrame(e),()=>{b.current&&(cancelAnimationFrame(b.current),b.current=null)}},[L,$,c,r,d,p,w.length]),n.jsxs("div",{className:["n23mSliderScroll",g].filter(Boolean).join(" "),style:{"--sliderscroll-gap":i,height:"calc(100% - 60px)"},onMouseEnter:ce,onMouseLeave:ae,children:[n.jsx("div",{className:[I.n23mSliderScrollWrapper,"n23mSliderScrollWrapper"].join(" "),children:n.jsx("div",{className:I.n23mSliderScrollTrack,ref:l,onClick:ie,onScroll:Z,onMouseDown:ne,onMouseLeave:oe,onMouseUp:le,onMouseMove:se,style:{whiteSpace:"nowrap"},children:K.map((e,t)=>n.jsx("div",{ref:o=>{O.current[t]=o},style:{display:"inline-block"},children:e},e.key||t))})}),n.jsx("div",{className:[I.n23mSliderScrollControls,"n23mSliderScrollControls"].join(" "),children:n.jsxs("div",{className:[I.n23mSliderScrollControlsButtons,"n23mSliderScrollControlsButtons"].join(" "),children:[n.jsx(Y,{ref:B,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Prev",onClick:re,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:n.jsx(ue,{width:24,height:24})}),n.jsx(Y,{ref:N,height:"50px",width:"50px",backgroundColor:"#F2F0EF",padding:0,title:"Next",onClick:ee,borderColor:"black",backgroundColorDisabled:"#F2F0EF",children:n.jsx(he,{width:24,height:24})})]})})]})};v.displayName="SliderScroll";v.__docgenInfo={description:"",methods:[],displayName:"SliderScroll",props:{gap:{defaultValue:{value:"'5px'",computed:!1},required:!1},isCircular:{defaultValue:{value:"false",computed:!1},required:!1},autoPlay:{defaultValue:{value:"false",computed:!1},required:!1},autoPlaySpeed:{defaultValue:{value:"0.5",computed:!1},required:!1}}};const Ce={title:"Slider/SliderScroll",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `}}}},j=[{color:"red",label:"1",href:"/here1"},{color:"blue",label:"2",href:"/here2"},{color:"orange",label:"3",href:"/here3"},{color:"green",label:"4",href:"/here4"},{color:"pink",label:"5",href:"/here5"},{color:"purple",label:"6",href:"/here6"},{color:"orangered",label:"7",href:"/here7"}],M={args:{gap:"10px"},render:f=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(v,{...f,children:j.map(({label:g},i)=>n.jsx("div",{style:{width:"200px",height:"340px",background:j[i].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},i))})})},D={args:{gap:"10px",isCircular:!0},render:f=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(v,{...f,children:j.map(({label:g},i)=>n.jsx("div",{style:{width:"200px",height:"340px",background:j[i].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},i))})})},A={args:{gap:"10px",isCircular:!0},render:f=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(v,{...f,children:j.map(({label:g,color:i},c)=>{const L=`${Math.round(180+Math.random()*140)}px`;return n.jsx("div",{style:{width:L,height:"340px",background:i,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},c)})})})},_={args:{gap:"10px",isCircular:!0,autoPlay:!0,autoPlaySpeed:.5},render:f=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(v,{...f,children:j.map(({label:g,color:i},c)=>{const L=`${Math.round(180+Math.random()*140)}px`;return n.jsx("div",{style:{width:L,height:"340px",background:i,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},c)})})})},E={args:{gap:"10px"},render:f=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(v,{...f,children:j.map(({label:g,href:i},c)=>n.jsx("a",{draggable:"false",href:i,style:{width:"200px",height:"340px",background:j[c].color,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},children:g},c))})})},z={args:{gap:"10px"},render:f=>n.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:n.jsx(v,{...f,children:Array.from({length:20},(g,i)=>n.jsx("a",{draggable:"false",href:"/jkg",style:{display:"block",width:"300px",height:"340px"},children:n.jsx("img",{draggable:"false",src:"https://picsum.photos/300/340",alt:"",width:"300px",height:"340px",style:{height:"100%",width:"auto",display:"block"}})},i))})})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const Ie=["Default","SliderScrollCircular","SliderScrollCircularDifferentSizes","SliderScrollCircularDifferentSizesAutoplay","SliderScrollWithLinksAsItem","SliderScrollWithImgLinksAsItem"];export{M as Default,D as SliderScrollCircular,A as SliderScrollCircularDifferentSizes,_ as SliderScrollCircularDifferentSizesAutoplay,z as SliderScrollWithImgLinksAsItem,E as SliderScrollWithLinksAsItem,Ie as __namedExportsOrder,Ce as default};
