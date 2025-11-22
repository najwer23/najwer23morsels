import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as C}from"./TextBox-CGYf23cG.js";import{g as D}from"./getCssVariableStyle-DXeVW4yL.js";const L="_n23mInput_5z2xd_2",_="_n23mInputInput_5z2xd_9",g={n23mInput:L,n23mInputInput:_},r=({className:a,style:I,name:n,label:h,inputRef:p,placeholder:d,type:v="text",labelColor:y="black",kind:i="input",inputColor:j,inputColorBorder:T,defaultValue:c,disabled:m,onBlur:b,...V})=>{const x=f=>{f.target,typeof b=="function"&&b(f)};return e.jsxs("div",{className:[g.n23mInput,"n23mInput",a].filter(Boolean).join(" "),...V,style:{...D({"--input-c":j,"--input-cb":T}),...I},children:[e.jsx(C,{mobileSize:14,desktopSize:14,tag:"label",fontWeight:300,color:y,htmlFor:n,children:h}),e.jsxs("div",{className:g.n23mInputInput,children:[i=="input"&&e.jsx("input",{ref:p,id:n,name:n,type:v,onBlur:x,placeholder:d,defaultValue:c,disabled:m}),i=="textarea"&&e.jsx("textarea",{id:n,name:n,onBlur:x,placeholder:d,defaultValue:c,disabled:m,ref:p})]})]})};r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},labelColor:{defaultValue:{value:"'black'",computed:!1},required:!1},kind:{defaultValue:{value:"'input'",computed:!1},required:!1}}};const z={title:"Input/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"\nTest Test\n\n```tsx\nimport { Input } from 'najwer23morsels/lib/input';\n```\n      "}}},tags:["autodocs"]},t={args:{label:"Label",name:"input",placeholder:"Type.."},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},l={args:{label:"Label",name:"disabled",placeholder:"Type..",disabled:!0},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},s={args:{label:"Label",name:"inputColors",placeholder:"Type..",inputColorBorder:"blue",inputColor:"purple",labelColor:"orange"},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},o={args:{label:"Label",name:"defaultValue",placeholder:"Type..",defaultValue:"Default Value"},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},u={args:{label:"Label",name:"textarea",placeholder:"Type..",defaultValue:"Default Value",kind:"textarea"},render:a=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(r,{...a})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'input',
    placeholder: 'Type..'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'defaultValue',
    placeholder: 'Type..',
    defaultValue: 'Default Value'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const N=["Default","Disabled","InputColors","DefaultValue","Textarea"];export{t as Default,o as DefaultValue,l as Disabled,s as InputColors,u as Textarea,N as __namedExportsOrder,z as default};
