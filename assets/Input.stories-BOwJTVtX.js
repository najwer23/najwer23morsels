import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-DZALNTGB.js";import{T as L}from"./TextBox-C6kT2mjf.js";import{g as B}from"./getCssVariableStyle-DXeVW4yL.js";import"./preload-helper-PPVm8Dsz.js";const D={empty:e=>e.trim()===""||e.trim()===null?"The field cannot be empty.":null,email:e=>/^(?!.*\.{2})(?!.*\.$)(?!^\.)([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(e)?null:"Incorrect email address.",numberInRange:(e,s)=>{const r=Number(e),l=s?.min??0,n=s?.max??1e4;return isNaN(r)||r<l||r>n?`The number must be between ${l} and ${n}.`:null},date:e=>(r=>{const l=typeof r=="string"?new Date(r):r,n=l.getFullYear(),o=l.getMonth(),u=l.getDate();let p=[31,28,31,30,31,30,31,31,30,31,30,31];return(n%400==0||n%100!=0&&n%4==0)&&(p[1]=29),u>0&&u<=p[o]})(e)?null:"The date is invalid."},E=(e,s)=>s.map(r=>"options"in r?D[r.type](e,r.options):D[r.type](e)).filter(r=>r!=null),R="_n23mInput_a5dpz_2",W="_n23mInputInput_a5dpz_9",S={n23mInput:R,n23mInputInput:W},t=({className:e,style:s,name:r,label:l,inputRef:n,placeholder:o,type:u="text",labelColor:p="black",kind:h="input",inputColor:_,inputColorBorder:z,defaultValue:I,disabled:y,validatorOptions:v,onBlur:j,...k})=>{const d=N.useRef(null),T=V=>{const i=V.target;if(document.activeElement!==i&&(d.current&&(d.current.textContent=""),v)){const C=E(i.value,v);C.length>0?(d.current.textContent=C[0],i.classList.add("error")):i.classList.remove("error")}typeof j=="function"&&j(V)};return a.jsxs("div",{className:[S.n23mInput,"n23mInput",e].filter(Boolean).join(" "),...k,style:{...B({"--input-c":_,"--input-cb":z}),...s},children:[a.jsx(L,{mobileSize:14,desktopSize:14,tag:"label",fontWeight:400,color:p,htmlFor:r,children:l}),a.jsxs("div",{className:S.n23mInputInput,children:[h=="input"&&a.jsx("input",{ref:n,id:r,name:r,type:u,onBlur:T,placeholder:o,defaultValue:I,disabled:y}),h=="textarea"&&a.jsx("textarea",{id:r,name:r,onBlur:T,placeholder:o,defaultValue:I,disabled:y,ref:n})]}),a.jsx(L,{ref:d,mobileSize:10,desktopSize:10,tag:"p",fontWeight:400,color:"#ff3333",lineHeight:"14px",margin:"2px 0 2px"})]})};t.displayName="Input";t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},labelColor:{defaultValue:{value:"'black'",computed:!1},required:!1},kind:{defaultValue:{value:"'input'",computed:!1},required:!1}}};const F={title:"Input/Input",component:t,parameters:{layout:"centered",docs:{description:{component:"\nTest Test\n\n```tsx\nimport { Input } from 'najwer23morsels/lib/input';\n```\n      "}}},tags:["autodocs"]},c={args:{label:"Label",name:"input",placeholder:"Type.."},render:e=>a.jsx("div",{children:a.jsx(t,{...e})})},m={args:{label:"Label",name:"input",placeholder:"Type..",validatorOptions:[{type:"empty"}]},render:e=>a.jsxs("div",{children:[a.jsx(t,{...e}),a.jsx(t,{...e})]})},f={args:{label:"Label",name:"disabled",placeholder:"Type..",disabled:!0},render:e=>a.jsx("div",{children:a.jsx(t,{...e})})},g={args:{label:"Label",name:"inputColors",placeholder:"Type..",inputColorBorder:"blue",inputColor:"purple",labelColor:"orange"},render:e=>a.jsx("div",{children:a.jsx(t,{...e})})},b={args:{label:"Label",name:"defaultValue",placeholder:"Type..",defaultValue:"Default Value"},render:e=>a.jsx("div",{children:a.jsx(t,{...e})})},x={args:{label:"Label",name:"textarea",placeholder:"Type..",defaultValue:"Default Value",kind:"textarea"},render:e=>a.jsx("div",{style:{minWidth:"400px"},children:a.jsx(t,{...e})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'input',
    placeholder: 'Type..'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'input',
    placeholder: 'Type..',
    validatorOptions: [{
      type: 'empty'
    }]
  },
  render: args => <div>
      <Input {...args} />
      <Input {...args} />
    </div>
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'inputColors',
    placeholder: 'Type..',
    inputColorBorder: 'blue',
    inputColor: 'purple',
    labelColor: 'orange'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'defaultValue',
    placeholder: 'Type..',
    defaultValue: 'Default Value'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'textarea',
    placeholder: 'Type..',
    defaultValue: 'Default Value',
    kind: 'textarea'
  },
  render: args => <div style={{
    minWidth: '400px'
  }}>
      <Input {...args} />
    </div>
}`,...x.parameters?.docs?.source}}};const O=["Default","Validator","Disabled","InputColors","DefaultValue","Textarea"];export{c as Default,b as DefaultValue,f as Disabled,g as InputColors,x as Textarea,m as Validator,O as __namedExportsOrder,F as default};
