import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./Input-CNzcdizE.js";import"./iframe-BKJq2Zu4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextBox-C2EOz3TH.js";import"./getCssVariableStyle-DXeVW4yL.js";const g={title:"Input/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"\nThis Input component is designed for flexible use in forms, supporting labels, placeholders, validation, disabled state, custom colors, and textarea mode.\n\n```tsx\nimport { Input } from 'najwer23morsels/lib/input';\n```\n      "}}},tags:["autodocs"]},n={args:{label:"Label",name:"input",placeholder:"Type.."},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},l={args:{label:"Label",name:"input",placeholder:"Type..",validatorOptions:[{type:"empty"}]},render:a=>e.jsxs("div",{children:[e.jsx(r,{...a}),e.jsx(r,{...a})]})},s={args:{label:"Label",name:"disabled",placeholder:"Type..",disabled:!0},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},t={args:{label:"Label",name:"inputColors",placeholder:"Type..",inputColorBorder:"blue",inputColor:"purple",labelColor:"orange"},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},o={args:{label:"Label",name:"defaultValue",placeholder:"Type..",defaultValue:"Default Value"},render:a=>e.jsx("div",{children:e.jsx(r,{...a})})},d={args:{label:"Label",name:"textarea",placeholder:"Type..",defaultValue:"Default Value",kind:"textarea"},render:a=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(r,{...a})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'input',
    placeholder: 'Type..'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'defaultValue',
    placeholder: 'Type..',
    defaultValue: 'Default Value'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const x=["Default","Validator","Disabled","InputColors","DefaultValue","Textarea"];export{n as Default,o as DefaultValue,s as Disabled,t as InputColors,d as Textarea,l as Validator,x as __namedExportsOrder,g as default};
