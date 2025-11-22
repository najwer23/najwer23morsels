import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as b}from"./Button-hs1dM0kb.js";import{I as i}from"./Input-B11L1rHc.js";import{g as y}from"./getCssVariableStyle-DXeVW4yL.js";import"./iframe-Bb21tLd3.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-Coi5EJI2.js";import"./TextBox-De5BSsp-.js";const a=({children:l,onSubmit:n,className:r,style:s,...c})=>{const d=u=>{u.preventDefault();const m=u.currentTarget;m&&Array.from(m.elements).forEach(t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0}))});const f=Object.fromEntries(Array.from(m.elements).filter(t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement&&t.name!=="").map(t=>[t.name,{error:t.className.includes("error"),value:t.value}]));n(f)};return e.jsx("form",{className:["n23mForm",r].filter(Boolean).join(" "),...c,style:{...y({"--form":"test"}),...s},onSubmit:d,children:l})};a.displayName="Form";a.__docgenInfo={description:"",methods:[],displayName:"Form"};const{action:p}=__STORYBOOK_MODULE_ACTIONS__,E={title:"Form/Form",component:a,parameters:{layout:"centered",docs:{description:{component:"\nThe Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.\n\n```tsx\nimport { Form } from 'najwer23morsels/lib/form';\n```\n      "}}},tags:["autodocs"]},o={args:{onSubmit:()=>{},children:e.jsx(e.Fragment,{})},render:l=>{const n=r=>{if(p("Form:",r)(r),Object.values(r).some(({error:s})=>s)){p("Form has errors")();return}p("Form submitted")()};return e.jsx(e.Fragment,{children:e.jsxs(a,{onSubmit:n,children:[e.jsx(i,{label:"Email",type:"text",name:"name",validatorOptions:[{type:"empty"},{type:"email"}]}),e.jsx(i,{label:"Password",type:"password",name:"pass",validatorOptions:[{type:"empty"}]}),e.jsx(i,{kind:"textarea",label:"Msg",type:"text",name:"msg",validatorOptions:[{type:"empty"}]}),e.jsx(b,{type:"submit",backgroundColor:"yellow",borderColor:"black",height:"40px",padding:0,width:"300px",children:"Submit"})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    children: <></>
  },
  render: args => {
    const handleOnSubmit = (form: FormType) => {
      action('Form:', form)(form);
      if (Object.values(form).some(({
        error
      }) => error)) {
        action('Form has errors')();
        return;
      }
      action('Form submitted')();
    };
    return <>
        <Form onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="name" validatorOptions={[{
          type: 'empty'
        }, {
          type: 'email'
        }]} />

          <Input label="Password" type="password" name="pass" validatorOptions={[{
          type: 'empty'
        }]} />

          <Input kind="textarea" label="Msg" type="text" name="msg" validatorOptions={[{
          type: 'empty'
        }]} />

          <Button type="submit" backgroundColor="yellow" borderColor="black" height="40px" padding={0} width="300px">
            Submit
          </Button>
        </Form>
      </>;
  }
}`,...o.parameters?.docs?.source}}};const T=["Default"];export{o as Default,T as __namedExportsOrder,E as default};
