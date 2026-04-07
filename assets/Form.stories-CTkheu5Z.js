import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DbIWfbkc.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./textbox-BpKTJb_P.js";import{n as o,t as s}from"./button-MtuI3sV9.js";import{n as c,t as l}from"./input-_USjiQgi.js";var u,d,f=t((()=>{a(),u=r(),d=({children:e,onSubmit:t,className:n,isError:r,isPending:a,isSuccess:o,errorMsg:s,successMsg:c,style:l,...d})=>{let f=e=>{e.preventDefault();let n=e.currentTarget;n&&Array.from(n.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0}))}),t(Object.fromEntries(Array.from(n.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!==``).map(e=>[e.name,{error:e.className.includes(`error`),value:e.value}])))};return(0,u.jsxs)(`form`,{className:[`n23mForm`,n].filter(Boolean).join(` `),...d,style:{...l},onSubmit:f,children:[e,r&&(0,u.jsx)(i,{tag:`p`,color:`#ff3333`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:s}),a&&(0,u.jsx)(i,{tag:`p`,color:`grey`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:`Loading..`}),o&&(0,u.jsx)(i,{tag:`p`,color:`#4BB543`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:c})]})},d.displayName=`Form`,d.__docgenInfo={description:``,methods:[],displayName:`Form`}})),p=t((()=>{f()})),m,h,g,_,v,y;t((()=>{m=e(n(),1),s(),l(),a(),p(),h=r(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`Form/Form`,component:d,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},v={args:{onSubmit:()=>{},children:(0,h.jsx)(h.Fragment,{})},render:e=>{let[t,n]=(0,m.useState)(!1),[r,a]=(0,m.useState)(!1),[s,l]=(0,m.useState)(!1);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(d,{onSubmit:e=>{n(!1),a(!1),l(!0),setTimeout(()=>{if(l(!1),g(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)){g(`Form has errors`)(),a(!0);return}g(`Form submitted`)(),n(!0)},500)},isError:r,isPending:s,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,h.jsx)(c,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,h.jsx)(c,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,h.jsx)(c,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,h.jsx)(o,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,h.jsx)(i,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`]}))();export{v as Default,y as __namedExportsOrder,_ as default};