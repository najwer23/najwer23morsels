import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as o}from"./Slider-X2fPnE-G.js";import{r as v}from"./iframe-COcSbE7G.js";import"./TextBox-DhZTsRfC.js";import"./Loader-CdV_WFc2.js";import"./IconArrowRight-DaV6Kolw.js";import"./Button-B3Klu473.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Slider/Slider",component:o,parameters:{layout:"centered",docs:{description:{component:`
This is a slider component that allows you to display multiple slides with various properties. It supports circular navigation, loading states, and can handle different numbers of slides.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
\`\`\`
      `}}},tags:["autodocs"]},s={display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"40px"},h=[{color:"red",label:"1",action:c("on-click-1")},{color:"blue",label:"2",action:c("on-click-2")},{color:"orange",label:"3",action:c("on-click-3")},{color:"green",label:"4",action:c("on-click-4")}],S=h.slice(0,2),y=h.slice(0,1),t={args:{},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(o,{...n,children:h.map(({color:r,label:i,action:l},a)=>e.jsx("div",{style:{background:r,...s},onClick:l,children:i},a))})})},d={args:{},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(o,{...n,children:y.map(({color:r,label:i,action:l},a)=>e.jsx("div",{style:{background:r,...s},onClick:l,children:i},a))})})},p={args:{},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(o,{...n,children:S.map(({color:r,label:i,action:l},a)=>e.jsx("div",{style:{background:r,...s},onClick:l,children:i},a))})})},g={args:{isCircular:!0},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(o,{...n,children:h.map(({color:r,label:i,action:l},a)=>e.jsx("div",{style:{background:r,...s},onClick:l,children:i},a))})})},u={args:{isCircular:!0},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(o,{...n,children:y.map(({color:r,label:i,action:l},a)=>e.jsx("div",{style:{background:r,...s},onClick:l,children:i},a))})})},m={args:{isCircular:!0},render:n=>e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsx(o,{...n,children:S.map(({color:r,label:i,action:l},a)=>e.jsx("div",{style:{background:r,...s},onClick:l,children:i},a))})})},x={args:{},render:()=>{const n=()=>{const[r,i]=v.useState(!0);return v.useEffect(()=>{const l=setInterval(()=>{i(a=>!a)},3e3);return()=>clearInterval(l)},[]),e.jsx("div",{style:{width:"min(700px,calc(100vw - 50px))",height:"400px"},children:e.jsxs(o,{loading:r,children:[e.jsx("div",{style:{background:"red",...s},onClick:c("on-click-1"),children:"1"}),e.jsx("div",{style:{background:"green",...s},onClick:c("on-click-2"),children:"2"})]})})};return e.jsx(n,{})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {slides.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </Slider>
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {oneSlide.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </Slider>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {twoSlides.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </Slider>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {slides.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </Slider>
    </div>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {oneSlide.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </Slider>
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true
  },
  render: args => <div style={{
    width: 'min(700px,calc(100vw - 50px))',
    height: '400px'
  }}>
      <Slider {...args}>
        {twoSlides.map(({
        color,
        label,
        action
      }, i) => <div key={i} style={{
        background: color,
        ...slideStyle
      }} onClick={action}>
            {label}
          </div>)}
      </Slider>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const interval = setInterval(() => {
          setLoading(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
      }, []);
      return <div style={{
        width: 'min(700px,calc(100vw - 50px))',
        height: '400px'
      }}>
          <Slider loading={loading}>
            <div style={{
            background: 'red',
            ...slideStyle
          }} onClick={action('on-click-1')}>
              1
            </div>
            <div style={{
            background: 'green',
            ...slideStyle
          }} onClick={action('on-click-2')}>
              2
            </div>
          </Slider>
        </div>;
    };
    return <LoadingToggle />;
  }
}`,...x.parameters?.docs?.source}}};const I=["Default","Slider1Slide","Slider2Slides","SliderCircular","SliderCircular1Slide","SliderCircular2Slides","SliderLoading"];export{t as Default,d as Slider1Slide,p as Slider2Slides,g as SliderCircular,u as SliderCircular1Slide,m as SliderCircular2Slides,x as SliderLoading,I as __namedExportsOrder,_ as default};
