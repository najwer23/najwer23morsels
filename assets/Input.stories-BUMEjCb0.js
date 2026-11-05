import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-CtA3qKoi.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Input-CWfl81he.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a=t(),i(),o=n(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Input/Input`,component:r,parameters:{layout:`centered`,docs:{description:{component:"\nA form field with a label, placeholder, validation, disabled state and custom colors. It renders an `input` (default) or a `textarea` (`kind=\"textarea\"`).\n\nValidation runs when the field loses focus. Once a field shows an error, it re-validates on every change, so the error clears as soon as the value is valid.\n\n`name` is used as the element `id` and must be unique on the page.\n\n```tsx\nimport { Input } from 'najwer23morsels/lib/Input';\n```\n      "}}},tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:[`input`,`textarea`]},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`]},label:{control:`text`},placeholder:{control:`text`},defaultValue:{control:`text`},disabled:{control:`boolean`},labelColor:{control:`color`},inputColor:{control:`color`},inputColorBorder:{control:`color`}},args:{onChange:s(`change`),onBlur:s(`blur`)},decorators:[e=>(0,o.jsx)(`div`,{style:{width:`320px`},children:(0,o.jsx)(e,{})})]},l={args:{label:`Label`,name:`default`,placeholder:`Type..`}},u={parameters:{docs:{description:{story:`Click into the field, leave it empty, then click away to see the error.`}}},args:{label:`Required field`,name:`required`,placeholder:`Type..`,validatorOptions:[{type:`empty`}]}},d={args:{label:`Label`,name:`defaultValue`,defaultValue:`Default Value`}},f={args:{label:`Disabled`,name:`disabled`,placeholder:`Type..`,disabled:!0}},p={args:{label:`Disabled with value`,name:`disabledWithValue`,defaultValue:`Cannot edit this`,disabled:!0}},m={parameters:{docs:{description:{story:"Controlled with `value` and `onChange`. The text below mirrors the state."}}},args:{label:`Controlled`,name:`controlled`,placeholder:`Type..`},render:function(e){let[t,n]=(0,a.useState)(``);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{...e,value:t,onChange:t=>{n(t.currentTarget.value),e.onChange?.(t)}}),(0,o.jsxs)(`p`,{style:{fontSize:12,margin:`8px 0 0`},children:[`Value: `,t||`(empty)`]})]})}},h={args:{label:`Password`,name:`password`,type:`password`,placeholder:`Enter password`,autoComplete:`current-password`}},g={args:{label:`Amount`,name:`amount`,type:`number`,step:.01,placeholder:`0.00`}},_={args:{label:`Label`,name:`colors`,placeholder:`Type..`,inputColorBorder:`#6B4FA0`,inputColor:`#3F454B`,labelColor:`#B45309`}},v={args:{label:`Message`,name:`textarea`,kind:`textarea`,placeholder:`Type..`}},y={args:{label:`Message`,name:`textareaDefaultValue`,kind:`textarea`,defaultValue:`Default Value`}},b={parameters:{docs:{description:{story:`Click into the field, leave it empty, then click away to see the error.`}}},args:{label:`Message`,name:`textareaRequired`,kind:`textarea`,placeholder:`Type..`,validatorOptions:[{type:`empty`}]}},x={args:{label:`Message`,name:`textareaDisabled`,kind:`textarea`,defaultValue:`Cannot edit this`,disabled:!0}},S={args:{label:`Message`,name:`textareaControlled`,kind:`textarea`,placeholder:`Type..`},render:function(e){let[t,n]=(0,a.useState)(``);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{...e,value:t,onChange:t=>{n(t.currentTarget.value),e.onChange?.(t)}}),(0,o.jsxs)(`p`,{style:{fontSize:12,margin:`8px 0 0`},children:[`Characters: `,t.length]})]})}},C={args:{label:`Message`,name:`textareaColors`,kind:`textarea`,placeholder:`Type..`,inputColorBorder:`#6B4FA0`,inputColor:`#3F454B`,labelColor:`#B45309`}},w=[`Default`,`Required`,`DefaultValue`,`Disabled`,`DisabledWithValue`,`Controlled`,`Password`,`NumberWithStep`,`Colors`,`Textarea`,`TextareaDefaultValue`,`TextareaRequired`,`TextareaDisabled`,`TextareaControlled`,`TextareaColors`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'default',
    placeholder: 'Type..'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Click into the field, leave it empty, then click away to see the error.'
      }
    }
  },
  args: {
    label: 'Required field',
    name: 'required',
    placeholder: 'Type..',
    validatorOptions: [{
      type: 'empty'
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'defaultValue',
    defaultValue: 'Default Value'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled with value',
    name: 'disabledWithValue',
    defaultValue: 'Cannot edit this',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Controlled with \`value\` and \`onChange\`. The text below mirrors the state.'
      }
    }
  },
  args: {
    label: 'Controlled',
    name: 'controlled',
    placeholder: 'Type..'
  },
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <>
        <Input {...args} value={value} onChange={e => {
        setValue(e.currentTarget.value);
        args.onChange?.(e);
      }} />
        <p style={{
        fontSize: 12,
        margin: '8px 0 0'
      }}>Value: {value || '(empty)'}</p>
      </>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
    autoComplete: 'current-password'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    name: 'amount',
    type: 'number',
    step: 0.01,
    placeholder: '0.00'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'colors',
    placeholder: 'Type..',
    inputColorBorder: '#6B4FA0',
    inputColor: '#3F454B',
    labelColor: '#B45309'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    name: 'textarea',
    kind: 'textarea',
    placeholder: 'Type..'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    name: 'textareaDefaultValue',
    kind: 'textarea',
    defaultValue: 'Default Value'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Click into the field, leave it empty, then click away to see the error.'
      }
    }
  },
  args: {
    label: 'Message',
    name: 'textareaRequired',
    kind: 'textarea',
    placeholder: 'Type..',
    validatorOptions: [{
      type: 'empty'
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    name: 'textareaDisabled',
    kind: 'textarea',
    defaultValue: 'Cannot edit this',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    name: 'textareaControlled',
    kind: 'textarea',
    placeholder: 'Type..'
  },
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <>
        <Input {...args} value={value} onChange={e => {
        setValue(e.currentTarget.value);
        args.onChange?.(e);
      }} />
        <p style={{
        fontSize: 12,
        margin: '8px 0 0'
      }}>Characters: {value.length}</p>
      </>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    name: 'textareaColors',
    kind: 'textarea',
    placeholder: 'Type..',
    inputColorBorder: '#6B4FA0',
    inputColor: '#3F454B',
    labelColor: '#B45309'
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{_ as Colors,m as Controlled,l as Default,d as DefaultValue,f as Disabled,p as DisabledWithValue,g as NumberWithStep,h as Password,u as Required,v as Textarea,C as TextareaColors,S as TextareaControlled,y as TextareaDefaultValue,x as TextareaDisabled,b as TextareaRequired,w as __namedExportsOrder,c as default};