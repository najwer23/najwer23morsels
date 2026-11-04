import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-McJPC2qE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Select-DxrxW7-4.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{a=t(),i(),o=n(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c=[{value:`pl`,label:`Poland`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`es`,label:`Spain`},{value:`it`,label:`Italy`},{value:`cz`,label:`Czechia`},{value:`sk`,label:`Slovakia`},{value:`se`,label:`Sweden`},{value:`no`,label:`Norway`},{value:`pt`,label:`Portugal`}],l={title:`Input/Select`,component:r,parameters:{layout:`centered`,docs:{description:{component:`
Custom select/autocomplete input with a hidden submitted value.

\`\`\`tsx
import { Select } from 'najwer23morsels/lib/Select';
\`\`\`
      `}}},argTypes:{disabled:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`}},tags:[`autodocs`]},u={args:{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,placeholder:`Select`,validatorOptions:[{type:`empty`}],onBlur:(e,t)=>{s(`onBlur`)({inputValue:e.currentTarget.value,...t})}},render:e=>(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{...e})})},d={args:{options:c,label:`Country`,name:`country`,placeholder:`Select a country`,initialValue:{value:`pl`,label:`Poland`},validatorOptions:[{type:`empty`}],onBlur:(e,t)=>{s(`onBlur`)({inputValue:e.currentTarget.value,...t})}},parameters:{docs:{description:{story:`Starts with a selected option. Clicking the input keeps the value and shows all options, not only the selected one.`}}},render:e=>(0,o.jsx)(`div`,{style:{minHeight:320},children:(0,o.jsx)(r,{...e})})},f={args:{options:c,label:`Country (disabled)`,name:`country`,placeholder:`Select is disabled`,initialValue:{value:`de`,label:`Germany`},disabled:!0},render:e=>(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{...e})})},p={args:{options:Array.from({length:100},(e,t)=>({value:String(t+1),label:`Option ${t+1}`})),label:`Long list`,name:`longList`,placeholder:`Scroll or type to filter`},parameters:{docs:{description:{story:`100 options. Check that the dropdown scrolls and filtering stays responsive.`}}},render:e=>(0,o.jsx)(`div`,{style:{minHeight:320},children:(0,o.jsx)(r,{...e})})},m={args:{options:c,label:`Country`,name:`country`,placeholder:`Try typing "an" or "s"`},parameters:{docs:{description:{story:`Typing filters the list by label (case-insensitive). While typing, the submitted value is cleared until an option is picked.`}}},render:e=>(0,o.jsx)(`div`,{style:{minHeight:320},children:(0,o.jsx)(r,{...e})})},h={args:{options:c,label:`Country`,name:`country`,placeholder:`Type "xyz"`,validatorOptions:[{type:`empty`}]},parameters:{docs:{description:{story:"Type text that matches nothing and blur. The dropdown is empty and the `existsInOptions` validator should show an error."}}},render:e=>(0,o.jsx)(`div`,{style:{minHeight:120},children:(0,o.jsx)(r,{...e})})},g={args:{options:c,label:`Required country`,name:`country`,placeholder:`Select a country`,validatorOptions:[{type:`empty`}]},parameters:{docs:{description:{story:`Focus the field and blur it without choosing anything to see the validation error.`}}},render:e=>(0,o.jsx)(`div`,{style:{minHeight:320},children:(0,o.jsx)(r,{...e})})},_=e=>{let[t,n]=(0,a.useState)(null);return(0,o.jsxs)(`form`,{style:{display:`grid`,gap:12,width:280,minHeight:360,alignContent:`start`},onSubmit:t=>{t.preventDefault();let r=new FormData(t.currentTarget);n(String(r.get(e.name)??``))},children:[(0,o.jsx)(r,{...e}),(0,o.jsx)(`button`,{type:`submit`,children:`Submit`}),t!==null&&(0,o.jsxs)(`div`,{children:[`Submitted value: `,t||`(empty)`]})]})},v={args:{options:c,label:`Country`,name:`country`,placeholder:`Select a country`,validatorOptions:[{type:`empty`}]},parameters:{docs:{description:{story:"The hidden input submits the option `value` (for example `pl`), not the visible label (`Poland`)."}}},render:e=>(0,o.jsx)(_,{...e})},y={args:{options:c,label:`Select`,name:`select`},render:e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16,width:280,minHeight:360,alignContent:`start`},children:[(0,o.jsx)(r,{...e,name:`a`,label:`Empty`,placeholder:`Select`}),(0,o.jsx)(r,{...e,name:`b`,label:`With value`,initialValue:{value:`fr`,label:`France`}}),(0,o.jsx)(r,{...e,name:`c`,label:`Disabled`,initialValue:{value:`fr`,label:`France`},disabled:!0})]})},b=[`Default`,`WithInitialValue`,`Disabled`,`LongList`,`TypeToFilter`,`NoMatches`,`Required`,`InForm`,`SideBySide`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      action('onBlur')({
        inputValue: e.currentTarget.value,
        ...data
      });
    }
  },
  render: args => <div>
      <Select {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Select a country',
    initialValue: {
      value: 'pl',
      label: 'Poland'
    },
    validatorOptions: [{
      type: 'empty'
    }],
    onBlur: (e, data) => {
      action('onBlur')({
        inputValue: e.currentTarget.value,
        ...data
      });
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Starts with a selected option. Clicking the input keeps the value and shows all options, not only the selected one.'
      }
    }
  },
  render: args => <div style={{
    minHeight: 320
  }}>
      <Select {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country (disabled)',
    name: 'country',
    placeholder: 'Select is disabled',
    initialValue: {
      value: 'de',
      label: 'Germany'
    },
    disabled: true
  },
  render: args => <div>
      <Select {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 100
    }, (_, i) => ({
      value: String(i + 1),
      label: \`Option \${i + 1}\`
    })),
    label: 'Long list',
    name: 'longList',
    placeholder: 'Scroll or type to filter'
  },
  parameters: {
    docs: {
      description: {
        story: '100 options. Check that the dropdown scrolls and filtering stays responsive.'
      }
    }
  },
  render: args => <div style={{
    minHeight: 320
  }}>
      <Select {...args} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Try typing "an" or "s"'
  },
  parameters: {
    docs: {
      description: {
        story: 'Typing filters the list by label (case-insensitive). While typing, the submitted value is cleared until an option is picked.'
      }
    }
  },
  render: args => <div style={{
    minHeight: 320
  }}>
      <Select {...args} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Type "xyz"',
    validatorOptions: [{
      type: 'empty'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Type text that matches nothing and blur. The dropdown is empty and the \`existsInOptions\` validator should show an error.'
      }
    }
  },
  render: args => <div style={{
    minHeight: 120
  }}>
      <Select {...args} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Required country',
    name: 'country',
    placeholder: 'Select a country',
    validatorOptions: [{
      type: 'empty'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus the field and blur it without choosing anything to see the validation error.'
      }
    }
  },
  render: args => <div style={{
    minHeight: 320
  }}>
      <Select {...args} />
    </div>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Select a country',
    validatorOptions: [{
      type: 'empty'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'The hidden input submits the option \`value\` (for example \`pl\`), not the visible label (\`Poland\`).'
      }
    }
  },
  render: args => <FormDemo {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Select',
    name: 'select'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 16,
    width: 280,
    minHeight: 360,
    alignContent: 'start'
  }}>
      <Select {...args} name="a" label="Empty" placeholder="Select" />
      <Select {...args} name="b" label="With value" initialValue={{
      value: 'fr',
      label: 'France'
    }} />
      <Select {...args} name="c" label="Disabled" initialValue={{
      value: 'fr',
      label: 'France'
    }} disabled />
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{u as Default,f as Disabled,v as InForm,p as LongList,h as NoMatches,g as Required,y as SideBySide,m as TypeToFilter,d as WithInitialValue,b as __namedExportsOrder,l as default};