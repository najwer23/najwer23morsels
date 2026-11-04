import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-Bn7R-sqV.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Button-cDk0J0wO.js";import{n as s,t as c}from"./Input-NpMbTMeV.js";import{n as l,t as u}from"./Calendar-2PKbq3tg.js";import{n as d,t as f}from"./Select-BLBtqtZR.js";import{n as p,t as m}from"./Form-CBa3T0Ti.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{h=t(),o(),u(),c(),f(),i(),m(),g=n(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={title:`Form/Form`,component:p,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},y={args:{onSubmit:()=>{},children:(0,g.jsx)(g.Fragment,{})},render:e=>{let[t,n]=(0,h.useState)(!1),[i,o]=(0,h.useState)(!1),[c,u]=(0,h.useState)(!1);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(p,{onSubmit:e=>{n(!1),o(!1),u(!0),setTimeout(()=>{u(!1),_(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)?(_(`Form has errors`)(),o(!0)):(_(`Form submitted`)(),n(!0))},500)},isError:i,isPending:c,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,g.jsx)(s,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,g.jsx)(s,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(d,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(l,{name:`calendar`,label:`Calendar`,initialValue:`2020-03-03`}),(0,g.jsx)(s,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,g.jsx)(a,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,g.jsx)(r,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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

          <Select options={[{
          value: '1',
          label: 'Test1'
        }, {
          value: '2',
          label: 'Test2'
        }]} label="Select" name="select" validatorOptions={[{
          type: 'empty'
        }]}></Select>

          <Calendar name={'calendar'} label={'Calendar'} initialValue="2020-03-03" />

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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Default,b as __namedExportsOrder,v as default};