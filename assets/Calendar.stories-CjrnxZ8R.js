import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Calendar-MXi6TXcD.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),i=t(),a={title:`Input/Calendar`,component:n,parameters:{layout:`centered`,docs:{description:{component:`
A simple calendar component for selecting and displaying dates.

\`\`\`tsx
import { Calendar } from 'najwer23morsels/lib/Calendar';
\`\`\`
      `}}},argTypes:{initialValue:{control:`text`,description:"Initial date in `YYYY-MM-DD` format, or an empty string for no date"},disabled:{control:`boolean`}},tags:[`autodocs`]},o={args:{name:`Calendar`,label:`Calendar`,placeholder:`Your perfect date`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},s={args:{name:`Calendar`,label:`Calendar (disabled)`,placeholder:`Calendar is disabled`,disabled:!0},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},c={args:{name:`Calendar`,label:`Calendar (empty)`,placeholder:`YYYY-MM-DD`,initialValue:``},parameters:{docs:{description:{story:`Starts with no value. The dropdown opens on today’s month.`}}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},l={args:{name:`Calendar`,label:`Birthday`,placeholder:`YYYY-MM-DD`,initialValue:`1995-03-15`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},u={args:{name:`Calendar`,label:`Leap day (2024-02-29)`,placeholder:`YYYY-MM-DD`,initialValue:`2024-02-29`},parameters:{docs:{description:{story:`Feb 29 in a leap year. Change the year to 2023 or 2025 with the year picker: the day should clamp to Feb 28 instead of jumping to March.`}}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},d={args:{name:`Calendar`,label:`End of month (2025-01-31)`,placeholder:`YYYY-MM-DD`,initialValue:`2025-01-31`},parameters:{docs:{description:{story:`Click the next-month arrow: Jan 31 should become Feb 28, not overflow into March.`}}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},f={args:{name:`Calendar`,label:`Invalid date (2026-02-29)`,placeholder:`YYYY-MM-DD`,initialValue:`2026-02-29`},parameters:{docs:{description:{story:`2026 is not a leap year, so the validator should show an error after blur.`}}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},p={args:{name:`Calendar`,label:`Required date`,placeholder:`YYYY-MM-DD`,initialValue:``,validatorOptions:[{type:`empty`}]},parameters:{docs:{description:{story:"Extra validator rules are merged with the built-in `date` rule."}}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},m={args:{name:`Calendar`,label:`Type to navigate`,placeholder:`Try typing 1995-03`,initialValue:``},parameters:{docs:{description:{story:"Type a partial date such as `1995-03`: the header and the days grid follow the typed year and month before the date is complete."}}},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(n,{...e})})},h={args:{name:`Calendar`,label:`Calendar`},render:e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:16,width:280},children:[(0,i.jsx)(n,{...e,name:`a`,label:`Default`,placeholder:`YYYY-MM-DD`}),(0,i.jsx)(n,{...e,name:`b`,label:`With value`,initialValue:`2000-01-01`}),(0,i.jsx)(n,{...e,name:`c`,label:`Disabled`,initialValue:`2000-01-01`,disabled:!0})]})},g=[`Default`,`Disabled`,`Empty`,`WithInitialValue`,`LeapDay`,`EndOfMonth`,`InvalidDate`,`WithValidation`,`TypeToNavigate`,`SideBySide`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Calendar',
    placeholder: 'Your perfect date'
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Calendar (disabled)',
    placeholder: 'Calendar is disabled',
    disabled: true
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Calendar (empty)',
    placeholder: 'YYYY-MM-DD',
    initialValue: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Starts with no value. The dropdown opens on today’s month.'
      }
    }
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Birthday',
    placeholder: 'YYYY-MM-DD',
    initialValue: '1995-03-15'
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Leap day (2024-02-29)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '2024-02-29'
  },
  parameters: {
    docs: {
      description: {
        story: 'Feb 29 in a leap year. Change the year to 2023 or 2025 with the year picker: the day should clamp to Feb 28 instead of jumping to March.'
      }
    }
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'End of month (2025-01-31)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '2025-01-31'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the next-month arrow: Jan 31 should become Feb 28, not overflow into March.'
      }
    }
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Invalid date (2026-02-29)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '2026-02-29'
  },
  parameters: {
    docs: {
      description: {
        story: '2026 is not a leap year, so the validator should show an error after blur.'
      }
    }
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Required date',
    placeholder: 'YYYY-MM-DD',
    initialValue: '',
    // Adapt this to your ValidatorOptions shape
    validatorOptions: [{
      type: 'empty'
    }] as never
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra validator rules are merged with the built-in \`date\` rule.'
      }
    }
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Type to navigate',
    placeholder: 'Try typing 1995-03',
    initialValue: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Type a partial date such as \`1995-03\`: the header and the days grid follow the typed year and month before the date is complete.'
      }
    }
  },
  render: args => <div>
      <Calendar {...args} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Calendar',
    label: 'Calendar'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 16,
    width: 280
  }}>
      <Calendar {...args} name="a" label="Default" placeholder="YYYY-MM-DD" />
      <Calendar {...args} name="b" label="With value" initialValue="2000-01-01" />
      <Calendar {...args} name="c" label="Disabled" initialValue="2000-01-01" disabled />
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{o as Default,s as Disabled,c as Empty,d as EndOfMonth,f as InvalidDate,u as LeapDay,h as SideBySide,m as TypeToNavigate,l as WithInitialValue,p as WithValidation,g as __namedExportsOrder,a as default};