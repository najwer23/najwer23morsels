import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{n,t as r}from"./select-wMRi4B2i.js";var i,a,o,s,c;e((()=>{r(),i=t(),{action:a}=__STORYBOOK_MODULE_ACTIONS__,o={title:`Input/Select`,component:n,parameters:{layout:`centered`,docs:{description:{component:`
Custom select/autocomplete input with a hidden submitted value.

\`\`\`tsx
import { Select } from 'najwer23morsels/lib/select';
\`\`\`
      `}}},tags:[`autodocs`]},s={args:{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,placeholder:`Select`,validatorOptions:[{type:`empty`}],onBlur:(e,t)=>{a(`Blurred ${e.currentTarget.value,JSON.stringify(t)}`)()}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: '1',
      label: 'Test1'
    }, {
      value: '2',
      label: 'Test2'
    }],
    label: 'Select',
    name: 'select',
    placeholder: 'Select',
    validatorOptions: [{
      type: 'empty'
    }],
    onBlur: (e, data) => {
      action(\`Blurred \${e.currentTarget.value, JSON.stringify(data)}\`)();
    }
  },
  render: args => <div>
      <Select {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};