import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-BsFkT93u.js";import{B as E}from"./Button-CiUQCSAK.js";import{I as h}from"./Input-CU6LwRJO.js";import{T as i}from"./TextBox-BM4KbAAZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DAd6eBwV.js";import"./getCssVariableStyle-DXeVW4yL.js";const m=({children:x,onSubmit:l,className:r,isError:c,isPending:o,isSuccess:u,errorMsg:a,successMsg:p,style:s,...d})=>{const y=S=>{S.preventDefault();const f=S.currentTarget;f&&Array.from(f.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new FocusEvent("focusout",{bubbles:!0}))});const F=Object.fromEntries(Array.from(f.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!=="").map(e=>[e.name,{error:e.className.includes("error"),value:e.value}]));l(F)};return t.jsxs("form",{className:["n23mForm",r].filter(Boolean).join(" "),...d,style:{...s},onSubmit:y,children:[x,c&&t.jsx(i,{tag:"p",color:"#ff3333",mobileSize:12,desktopSize:12,margin:"15px 0 10px 0",fontWeight:400,children:a}),o&&t.jsx(i,{tag:"p",color:"grey",mobileSize:12,desktopSize:12,margin:"15px 0 10px 0",fontWeight:400,children:"Loading.."}),u&&t.jsx(i,{tag:"p",color:"#4BB543",mobileSize:12,desktopSize:12,margin:"15px 0 10px 0",fontWeight:400,children:p})]})};m.displayName="Form";m.__docgenInfo={description:"",methods:[],displayName:"Form"};const{action:b}=__STORYBOOK_MODULE_ACTIONS__,z={title:"Form/Form",component:m,parameters:{layout:"centered",docs:{description:{component:"\nThe Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.\n\n```tsx\nimport { Form } from 'najwer23morsels/lib/form';\n```\n      "}}},tags:["autodocs"]},n={args:{onSubmit:()=>{},children:t.jsx(t.Fragment,{})},render:x=>{const[l,r]=g.useState(!1),[c,o]=g.useState(!1),[u,a]=g.useState(!1),p=s=>{r(!1),o(!1),a(!0),setTimeout(()=>{if(a(!1),b("Form:",s)(s),Object.values(s).some(({error:d})=>d)){b("Form has errors")(),o(!0);return}b("Form submitted")(),r(!0)},500)};return t.jsx(t.Fragment,{children:t.jsxs(m,{onSubmit:p,isError:c,isPending:u,isSuccess:l,errorMsg:"Form has errors",successMsg:"Form submitted",children:[t.jsx(h,{label:"Password",type:"password",name:"pass",validatorOptions:[{type:"empty"}]}),t.jsx(h,{kind:"textarea",label:"Msg",type:"text",name:"msg",validatorOptions:[{type:"empty"}]}),t.jsx(E,{type:"submit",backgroundColor:"yellow",borderColor:"black",height:"40px",padding:0,width:"300px",children:t.jsx(i,{mobileSize:18,desktopSize:18,children:"Submit"})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          {/* <Input label="Email" type="text" name="name" validatorOptions={[{ type: 'empty' }, { type: 'email' }]} /> */}

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
