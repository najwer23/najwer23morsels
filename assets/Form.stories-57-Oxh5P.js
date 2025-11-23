import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-BKJq2Zu4.js";import{B as F}from"./Button-CDsIcIol.js";import{I as b}from"./Input-CNzcdizE.js";import{T as i}from"./TextBox-C2EOz3TH.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-CU1fxyJc.js";import"./getCssVariableStyle-DXeVW4yL.js";const m=({children:S,onSubmit:l,className:r,isError:c,isPending:o,isSuccess:p,errorMsg:a,successMsg:u,style:s,...d})=>{const h=y=>{y.preventDefault();const f=y.currentTarget;f&&Array.from(f.elements).forEach(t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&t.dispatchEvent(new FocusEvent("focusout",{bubbles:!0}))});const E=Object.fromEntries(Array.from(f.elements).filter(t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement&&t.name!=="").map(t=>[t.name,{error:t.className.includes("error"),value:t.value}]));l(E)};return e.jsxs("form",{className:["n23mForm",r].filter(Boolean).join(" "),...d,style:{...s},onSubmit:h,children:[S,c&&e.jsx(i,{tag:"p",color:"#ff3333",mobileSize:12,desktopSize:12,margin:"15px 0 10px 0",fontWeight:400,children:a}),o&&e.jsx(i,{tag:"p",color:"grey",mobileSize:12,desktopSize:12,margin:"15px 0 10px 0",fontWeight:400,children:"Loading.."}),p&&e.jsx(i,{tag:"p",color:"#4BB543",mobileSize:12,desktopSize:12,margin:"15px 0 10px 0",fontWeight:400,children:u})]})};m.displayName="Form";m.__docgenInfo={description:"",methods:[],displayName:"Form"};const{action:x}=__STORYBOOK_MODULE_ACTIONS__,z={title:"Form/Form",component:m,parameters:{layout:"centered",docs:{description:{component:"\nThe Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.\n\n```tsx\nimport { Form } from 'najwer23morsels/lib/form';\n```\n      "}}},tags:["autodocs"]},n={args:{onSubmit:()=>{},children:e.jsx(e.Fragment,{})},render:S=>{const[l,r]=g.useState(!1),[c,o]=g.useState(!1),[p,a]=g.useState(!1),u=s=>{r(!1),o(!1),a(!0),setTimeout(()=>{if(a(!1),x("Form:",s)(s),Object.values(s).some(({error:d})=>d)){x("Form has errors")(),o(!0);return}x("Form submitted")(),r(!0)},500)};return e.jsx(e.Fragment,{children:e.jsxs(m,{onSubmit:u,isError:c,isPending:p,isSuccess:l,errorMsg:"Form has errors",successMsg:"Form submitted",children:[e.jsx(b,{label:"Email",type:"text",name:"name",validatorOptions:[{type:"empty"},{type:"email"}]}),e.jsx(b,{label:"Password",type:"password",name:"pass",validatorOptions:[{type:"empty"}]}),e.jsx(b,{kind:"textarea",label:"Msg",type:"text",name:"msg",validatorOptions:[{type:"empty"}]}),e.jsx(F,{type:"submit",backgroundColor:"yellow",borderColor:"black",height:"40px",padding:0,width:"300px",children:e.jsx(i,{mobileSize:18,desktopSize:18,children:"Submit"})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    children: <></>
  },
  render: args => {
    const [isSuccess, setIsSucess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const handleOnSubmit = (form: FormType) => {
      setIsSucess(false);
      setIsError(false);
      setIsPending(true);
      setTimeout(() => {
        setIsPending(false);
        action('Form:', form)(form);
        if (Object.values(form).some(({
          error
        }) => error)) {
          action('Form has errors')();
          setIsError(true);
          return;
        }
        action('Form submitted')();
        setIsSucess(true);
      }, 500);
    };
    return <>
        <Form onSubmit={handleOnSubmit} isError={isError} isPending={isPending} isSuccess={isSuccess} errorMsg={'Form has errors'} successMsg={'Form submitted'}>
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
            <TextBox mobileSize={18} desktopSize={18}>
              Submit
            </TextBox>
          </Button>
        </Form>
      </>;
  }
}`,...n.parameters?.docs?.source}}};const B=["Default"];export{n as Default,B as __namedExportsOrder,z as default};
