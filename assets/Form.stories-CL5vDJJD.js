import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./textbox-D98-YxRJ.js";import{n as o,t as s}from"./button-B5Vw-g4E.js";import{n as c,t as l}from"./input-C7pvU3tt.js";import{n as u,t as d}from"./calendar-C0DANPtq.js";import{n as f,t as p}from"./select-EGBANClS.js";var m,h,g=t((()=>{a(),m=r(),h=({children:e,onSubmit:t,className:n,isError:r,isPending:a,isSuccess:o,errorMsg:s,successMsg:c,style:l,...u})=>{let d=e=>{e.preventDefault();let n=e.currentTarget;n&&Array.from(n.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0}))}),t(Object.fromEntries(Array.from(n.elements).filter(e=>e instanceof HTMLInputElement&&e.name!==``||e instanceof HTMLTextAreaElement&&e.name!==``||e instanceof HTMLSelectElement&&e.name!==``).map(e=>[e.name,{error:e.className.includes(`error`),value:e.value}])))};return(0,m.jsxs)(`form`,{className:[`n23mForm`,n].filter(Boolean).join(` `),...u,style:{...l},onSubmit:d,children:[e,r&&(0,m.jsx)(i,{tag:`p`,color:`#ff3333`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:s}),a&&(0,m.jsx)(i,{tag:`p`,color:`grey`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:`Loading..`}),o&&(0,m.jsx)(i,{tag:`p`,color:`#4BB543`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:c})]})},h.displayName=`Form`,h.__docgenInfo={description:``,methods:[],displayName:`Form`}})),_=t((()=>{g()})),v,y,b,x,S,C;t((()=>{v=e(n(),1),s(),d(),l(),p(),a(),_(),y=r(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Form/Form`,component:h,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},S={args:{onSubmit:()=>{},children:(0,y.jsx)(y.Fragment,{})},render:e=>{let[t,n]=(0,v.useState)(!1),[r,a]=(0,v.useState)(!1),[s,l]=(0,v.useState)(!1);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{onSubmit:e=>{n(!1),a(!1),l(!0),setTimeout(()=>{if(l(!1),b(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)){b(`Form has errors`)(),a(!0);return}b(`Form submitted`)(),n(!0)},500)},isError:r,isPending:s,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,y.jsx)(c,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,y.jsx)(c,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,y.jsx)(f,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,validatorOptions:[{type:`empty`}]}),(0,y.jsx)(u,{name:`calendar`,label:`Calendar`,initialValue:`2020-03-03`}),(0,y.jsx)(c,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,y.jsx)(o,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,y.jsx)(i,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,x as default};