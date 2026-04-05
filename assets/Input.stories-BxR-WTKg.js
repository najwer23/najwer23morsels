import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./input-vYXbzRwK.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Input/Input`,component:n,parameters:{layout:`centered`,docs:{description:{component:`
This Input component is designed for flexible use in forms, supporting labels, placeholders, validation, disabled state, custom colors, and textarea mode.

\`\`\`tsx
import { Input } from 'najwer23morsels/lib/input';
\`\`\`
      `}}},tags:[`autodocs`]},o={args:{label:`Label`,name:`input`,placeholder:`Type..`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},s={args:{label:`Label`,name:`input`,placeholder:`Type..`,validatorOptions:[{type:`empty`}]},render:e=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{...e})]})},c={args:{label:`Label`,name:`disabled`,placeholder:`Type..`,disabled:!0},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},l={args:{label:`Label`,name:`inputColors`,placeholder:`Type..`,inputColorBorder:`blue`,inputColor:`purple`,labelColor:`orange`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},u={args:{label:`Label`,name:`defaultValue`,placeholder:`Type..`,defaultValue:`Default Value`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},d={args:{label:`Label`,name:`textarea`,placeholder:`Type..`,defaultValue:`Default Value`,kind:`textarea`},render:e=>(0,i.jsx)(`div`,{style:{minWidth:`400px`},children:(0,i.jsx)(n,{...e})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'input',
    placeholder: 'Type..'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'defaultValue',
    placeholder: 'Type..',
    defaultValue: 'Default Value'
  },
  render: args => <div>
      <Input {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Validator`,`Disabled`,`InputColors`,`DefaultValue`,`Textarea`]}))();export{o as Default,u as DefaultValue,c as Disabled,l as InputColors,d as Textarea,s as Validator,f as __namedExportsOrder,a as default};