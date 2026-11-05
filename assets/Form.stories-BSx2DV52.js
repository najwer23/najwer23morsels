import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-BULzHv3Y.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Button-BbwERpo4.js";import{n as s,t as c}from"./Input-D1GBSQ-u.js";import{n as l,t as u}from"./Calendar-CS9ZmirB.js";import{n as d,t as f}from"./Form-B56NWas2.js";import{n as p,t as m}from"./Select-aAquWRd0.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{h=t(),o(),u(),c(),m(),i(),f(),g=n(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={title:`Form/Form`,component:d,parameters:{layout:`centered`,docs:{description:{component:"\nThe Form component handles submission with validation support. On submit it triggers validation on every field, then passes each field's `value` and `error` to `onSubmit`.\n\nIt also renders its own feedback below the fields: `errorMsg` when `isError`, a loading indicator when `isPending`, and `successMsg` when `isSuccess`.\n\nField `name` values are used as element ids, so each story uses its own prefix to keep them unique on the docs page.\n\n```tsx\nimport { Form } from 'najwer23morsels/lib/form';\n```\n      "}}},tags:[`autodocs`],args:{onSubmit:_(`submit`),isError:!1,isPending:!1,isSuccess:!1,errorMsg:void 0,successMsg:void 0},decorators:[e=>(0,g.jsx)(`div`,{style:{width:`320px`},children:(0,g.jsx)(e,{})})]},y=e=>Object.values(e).some(({error:e})=>e),b=(e=800)=>{let[t,n]=(0,h.useState)(!1),[r,i]=(0,h.useState)(!1),[a,o]=(0,h.useState)(!1),s=(0,h.useRef)(null);return(0,h.useEffect)(()=>()=>{s.current&&clearTimeout(s.current)},[]),{isSuccess:t,isError:r,isPending:a,onSubmit:t=>{n(!1),i(!1),o(!0),s.current=setTimeout(()=>{o(!1),_(`Form:`)(t),y(t)?(_(`Form has errors`)(),i(!0)):(_(`Form submitted`)(),n(!0))},e)}}},x=({label:e=`Submit`})=>(0,g.jsx)(a,{type:`submit`,variant:`primary`,height:`40px`,width:`100%`,children:(0,g.jsx)(r,{mobileSize:16,desktopSize:16,color:`inherit`,children:e})}),S={args:{errorMsg:`Form has errors`,successMsg:`Form submitted`},render:function(e){let t=b(500);return(0,g.jsxs)(d,{...e,...t,children:[(0,g.jsx)(s,{label:`Email`,type:`text`,name:`defaultEmail`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,g.jsx)(s,{label:`Password`,type:`password`,name:`defaultPass`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(p,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`defaultSelect`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(l,{name:`defaultCalendar`,label:`Calendar`,initialValue:`2020-03-03`}),(0,g.jsx)(s,{kind:`textarea`,label:`Message`,type:`text`,name:`defaultMsg`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(x,{})]})}},C={parameters:{docs:{description:{story:`A minimal login form. Submit with empty fields to see validation.`}}},args:{errorMsg:`Check your email and password`,successMsg:`Logged in`},render:function(e){let t=b();return(0,g.jsxs)(d,{...e,...t,children:[(0,g.jsx)(s,{label:`Email`,type:`email`,name:`loginEmail`,autoComplete:`email`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,g.jsx)(s,{label:`Password`,type:`password`,name:`loginPassword`,autoComplete:`current-password`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(x,{label:`Log in`})]})}},w={parameters:{docs:{description:{story:`Text fields, a select and a textarea.`}}},args:{errorMsg:`Please fill in all fields`,successMsg:`Message sent`},render:function(e){let t=b();return(0,g.jsxs)(d,{...e,...t,children:[(0,g.jsx)(s,{label:`Name`,type:`text`,name:`contactName`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(s,{label:`Email`,type:`email`,name:`contactEmail`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,g.jsx)(p,{options:[{value:`support`,label:`Support`},{value:`sales`,label:`Sales`},{value:`other`,label:`Other`}],label:`Topic`,name:`contactTopic`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(s,{kind:`textarea`,label:`Message`,type:`text`,name:`contactMsg`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(x,{label:`Send message`})]})}},T={parameters:{docs:{description:{story:`A form with a Calendar field.`}}},args:{errorMsg:`Please choose a valid date`,successMsg:`Booked`},render:function(e){let t=b();return(0,g.jsxs)(d,{...e,...t,children:[(0,g.jsx)(s,{label:`Full name`,type:`text`,name:`bookingName`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(l,{name:`bookingDate`,label:`Date`,initialValue:`2026-11-04`}),(0,g.jsx)(x,{label:`Book`})]})}},E={parameters:{docs:{description:{story:"Two actions: `secondary` for the safe action, `primary` for submit."}}},args:{errorMsg:`Form has errors`,successMsg:`Saved`},render:function(e){let t=b();return(0,g.jsxs)(d,{...e,...t,children:[(0,g.jsx)(s,{label:`Display name`,type:`text`,name:`cancelName`,validatorOptions:[{type:`empty`}]}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,g.jsx)(a,{type:`button`,variant:`secondary`,height:`40px`,width:`100%`,onClick:_(`cancel`),children:(0,g.jsx)(r,{mobileSize:16,desktopSize:16,color:`inherit`,children:`Cancel`})}),(0,g.jsx)(x,{label:`Save`})]})]})}},D={parameters:{docs:{description:{story:"Static `isPending` state. `Form` shows its own loading indicator."}}},args:{isPending:!0},render:e=>(0,g.jsxs)(d,{...e,children:[(0,g.jsx)(s,{label:`Email`,type:`email`,name:`pendingEmail`,defaultValue:`jane@example.com`}),(0,g.jsx)(x,{})]})},O={parameters:{docs:{description:{story:"Static `isSuccess` state."}}},args:{isSuccess:!0,successMsg:`Form submitted`},render:e=>(0,g.jsxs)(d,{...e,children:[(0,g.jsx)(s,{label:`Email`,type:`email`,name:`successEmail`,defaultValue:`jane@example.com`}),(0,g.jsx)(x,{})]})},k={parameters:{docs:{description:{story:"Static `isError` state."}}},args:{isError:!0,errorMsg:`Form has errors`},render:e=>(0,g.jsxs)(d,{...e,children:[(0,g.jsx)(s,{label:`Email`,type:`email`,name:`errorEmail`,defaultValue:`not-an-email`}),(0,g.jsx)(x,{})]})},A=[`Default`,`Login`,`Contact`,`Booking`,`WithCancel`,`PendingState`,`SuccessState`,`ErrorState`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    errorMsg: 'Form has errors',
    successMsg: 'Form submitted'
  },
  render: function Render(args) {
    const submit = useFakeSubmit(500);
    return <Form {...args} {...submit}>
        <Input label="Email" type="text" name="defaultEmail" validatorOptions={[{
        type: 'empty'
      }, {
        type: 'email'
      }]} />
        <Input label="Password" type="password" name="defaultPass" validatorOptions={[{
        type: 'empty'
      }]} />
        <Select options={[{
        value: '1',
        label: 'Test1'
      }, {
        value: '2',
        label: 'Test2'
      }]} label="Select" name="defaultSelect" validatorOptions={[{
        type: 'empty'
      }]} />
        <Calendar name="defaultCalendar" label="Calendar" initialValue="2020-03-03" />
        <Input kind="textarea" label="Message" type="text" name="defaultMsg" validatorOptions={[{
        type: 'empty'
      }]} />
        <SubmitButton />
      </Form>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A minimal login form. Submit with empty fields to see validation.'
      }
    }
  },
  args: {
    errorMsg: 'Check your email and password',
    successMsg: 'Logged in'
  },
  render: function Render(args) {
    const submit = useFakeSubmit();
    return <Form {...args} {...submit}>
        <Input label="Email" type="email" name="loginEmail" autoComplete="email" validatorOptions={[{
        type: 'empty'
      }, {
        type: 'email'
      }]} />
        <Input label="Password" type="password" name="loginPassword" autoComplete="current-password" validatorOptions={[{
        type: 'empty'
      }]} />
        <SubmitButton label="Log in" />
      </Form>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Text fields, a select and a textarea.'
      }
    }
  },
  args: {
    errorMsg: 'Please fill in all fields',
    successMsg: 'Message sent'
  },
  render: function Render(args) {
    const submit = useFakeSubmit();
    return <Form {...args} {...submit}>
        <Input label="Name" type="text" name="contactName" validatorOptions={[{
        type: 'empty'
      }]} />
        <Input label="Email" type="email" name="contactEmail" validatorOptions={[{
        type: 'empty'
      }, {
        type: 'email'
      }]} />
        <Select options={[{
        value: 'support',
        label: 'Support'
      }, {
        value: 'sales',
        label: 'Sales'
      }, {
        value: 'other',
        label: 'Other'
      }]} label="Topic" name="contactTopic" validatorOptions={[{
        type: 'empty'
      }]} />
        <Input kind="textarea" label="Message" type="text" name="contactMsg" validatorOptions={[{
        type: 'empty'
      }]} />
        <SubmitButton label="Send message" />
      </Form>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A form with a Calendar field.'
      }
    }
  },
  args: {
    errorMsg: 'Please choose a valid date',
    successMsg: 'Booked'
  },
  render: function Render(args) {
    const submit = useFakeSubmit();
    return <Form {...args} {...submit}>
        <Input label="Full name" type="text" name="bookingName" validatorOptions={[{
        type: 'empty'
      }]} />
        <Calendar name="bookingDate" label="Date" initialValue="2026-11-04" />
        <SubmitButton label="Book" />
      </Form>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Two actions: \`secondary\` for the safe action, \`primary\` for submit.'
      }
    }
  },
  args: {
    errorMsg: 'Form has errors',
    successMsg: 'Saved'
  },
  render: function Render(args) {
    const submit = useFakeSubmit();
    return <Form {...args} {...submit}>
        <Input label="Display name" type="text" name="cancelName" validatorOptions={[{
        type: 'empty'
      }]} />
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <Button type="button" variant="secondary" height="40px" width="100%" onClick={action('cancel')}>
            <TextBox mobileSize={16} desktopSize={16} color="inherit">
              Cancel
            </TextBox>
          </Button>
          <SubmitButton label="Save" />
        </div>
      </Form>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Static \`isPending\` state. \`Form\` shows its own loading indicator.'
      }
    }
  },
  args: {
    isPending: true
  },
  render: args => <Form {...args}>
      <Input label="Email" type="email" name="pendingEmail" defaultValue="jane@example.com" />
      <SubmitButton />
    </Form>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Static \`isSuccess\` state.'
      }
    }
  },
  args: {
    isSuccess: true,
    successMsg: 'Form submitted'
  },
  render: args => <Form {...args}>
      <Input label="Email" type="email" name="successEmail" defaultValue="jane@example.com" />
      <SubmitButton />
    </Form>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Static \`isError\` state.'
      }
    }
  },
  args: {
    isError: true,
    errorMsg: 'Form has errors'
  },
  render: args => <Form {...args}>
      <Input label="Email" type="email" name="errorEmail" defaultValue="not-an-email" />
      <SubmitButton />
    </Form>
}`,...k.parameters?.docs?.source}}}})))()}j();export{T as Booking,w as Contact,S as Default,k as ErrorState,C as Login,D as PendingState,O as SuccessState,E as WithCancel,A as __namedExportsOrder,v as default};