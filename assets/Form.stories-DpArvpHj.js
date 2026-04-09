import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./textbox-D98-YxRJ.js";import{n as o,t as s}from"./button-B5Vw-g4E.js";import{n as c,t as l}from"./input-DMhoYGjB.js";import{n as u,t as d}from"./select-BnMA6F4v.js";var f,p,m=t((()=>{a(),f=r(),p=({children:e,onSubmit:t,className:n,isError:r,isPending:a,isSuccess:o,errorMsg:s,successMsg:c,style:l,...u})=>{let d=e=>{e.preventDefault();let n=e.currentTarget;n&&Array.from(n.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0}))}),t(Object.fromEntries(Array.from(n.elements).filter(e=>e instanceof HTMLInputElement&&e.name!==``||e instanceof HTMLTextAreaElement&&e.name!==``||e instanceof HTMLSelectElement&&e.name!==``).map(e=>[e.name,{error:e.className.includes(`error`),value:e.value}])))};return(0,f.jsxs)(`form`,{className:[`n23mForm`,n].filter(Boolean).join(` `),...u,style:{...l},onSubmit:d,children:[e,r&&(0,f.jsx)(i,{tag:`p`,color:`#ff3333`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:s}),a&&(0,f.jsx)(i,{tag:`p`,color:`grey`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:`Loading..`}),o&&(0,f.jsx)(i,{tag:`p`,color:`#4BB543`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:c})]})},p.displayName=`Form`,p.__docgenInfo={description:``,methods:[],displayName:`Form`}})),h=t((()=>{m()})),g,_,v,y,b,x;t((()=>{g=e(n(),1),s(),l(),d(),a(),h(),_=r(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`Form/Form`,component:p,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},b={args:{onSubmit:()=>{},children:(0,_.jsx)(_.Fragment,{})},render:e=>{let[t,n]=(0,g.useState)(!1),[r,a]=(0,g.useState)(!1),[s,l]=(0,g.useState)(!1);return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(p,{onSubmit:e=>{n(!1),a(!1),l(!0),setTimeout(()=>{if(l(!1),v(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)){v(`Form has errors`)(),a(!0);return}v(`Form submitted`)(),n(!0)},500)},isError:r,isPending:s,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,_.jsx)(c,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,_.jsx)(c,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,_.jsx)(u,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,validatorOptions:[{type:`empty`}]}),(0,_.jsx)(c,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,_.jsx)(o,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,_.jsx)(i,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};