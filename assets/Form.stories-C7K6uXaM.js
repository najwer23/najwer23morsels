import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-DcO5ISc4.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as o,t as s}from"./Button-DCTZcjYi.js";import{n as c,t as l}from"./Input-_V3lqfFr.js";import{n as u,t as d}from"./Calendar-DpMwUW8a.js";import{n as f,t as p}from"./Form-CBa3T0Ti.js";var m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{m=`_n23mSelect_1vbty_2`,h=`_icon_1vbty_14`,g=`_iconRotate_1vbty_38`,_=`_dropdownWrapper_1vbty_44`,v=`_open_1vbty_56`,y=`_dropdown_1vbty_44`,b=`_dropdownItem_1vbty_80`,x={n23mSelect:m,icon:h,iconRotate:g,dropdownWrapper:_,open:v,dropdown:y,dropdownItem:b}})))()}var C,w,T;function E(){return(E=t((()=>{C=e(n(),1),l(),S(),w=r(),T=({className:e,name:t,disabled:n,style:r,options:i,initialValue:a,validatorOptions:o,placeholder:s,onBlur:l,label:u=`Select`,...d})=>{let[f,p]=(0,C.useState)(a?.label??``),[m,h]=(0,C.useState)(a?.value??``),[g,_]=(0,C.useState)(!1),v=(0,C.useRef)(null),y=(0,C.useId)(),b=(0,C.useMemo)(()=>i.filter(e=>e.label.toLowerCase().includes(f.toLowerCase())),[i,f]),S=e=>{let t=e.currentTarget.value;p(t),h(``),_(!0)},T=()=>{_(e=>!e),p(``),h(``)},E=e=>{_(!1),l?.(e,{value:m,label:f})},D=e=>{h(e.value),p(e.label),_(!1)};return(0,w.jsxs)(`div`,{className:[x.n23mSelect,`n23mSelect`,e].filter(Boolean).join(` `),...d,style:{...r},children:[(0,w.jsx)(`div`,{className:[x.icon,g?x.iconRotate:``].join(` `),onMouseDown:e=>{e.preventDefault(),v.current?.focus(),T()}}),(0,w.jsx)(c,{name:t,type:`hidden`,kind:`input`,validatorOptions:[...o??[],{type:`existsInOptions`,options:{options:i,matchBy:`value`}}],value:m}),(0,w.jsx)(c,{id:y,inputRef:v,label:u,type:`text`,kind:`select`,disabled:n,placeholder:s,value:f,onChange:S,onClick:T,onBlur:E,validatorOptions:[...o??[],{type:`existsInOptions`,options:{options:i,matchBy:`label`}}],"aria-autocomplete":`list`,"aria-expanded":g,"aria-controls":`${t}-listbox`,role:`combobox`}),(0,w.jsx)(`div`,{className:[x.dropdownWrapper,g?x.open:``].join(` `),children:(0,w.jsx)(`div`,{className:[x.dropdown].join(` `),children:b.map(e=>(0,w.jsx)(`div`,{className:x.dropdownItem,onMouseDown:()=>{D(e)},children:e.label},e.value))})})]})}})))()}function D(){return(D=t((()=>{E()})))()}var O,k,A,j,M,N;function P(){return(P=t((()=>{O=n(),s(),d(),l(),D(),a(),p(),k=r(),{action:A}=__STORYBOOK_MODULE_ACTIONS__,j={title:`Form/Form`,component:f,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},M={args:{onSubmit:()=>{},children:(0,k.jsx)(k.Fragment,{})},render:e=>{let[t,n]=(0,O.useState)(!1),[r,a]=(0,O.useState)(!1),[s,l]=(0,O.useState)(!1);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(f,{onSubmit:e=>{n(!1),a(!1),l(!0),setTimeout(()=>{l(!1),A(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)?(A(`Form has errors`)(),a(!0)):(A(`Form submitted`)(),n(!0))},500)},isError:r,isPending:s,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,k.jsx)(c,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,k.jsx)(c,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,k.jsx)(T,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,validatorOptions:[{type:`empty`}]}),(0,k.jsx)(u,{name:`calendar`,label:`Calendar`,initialValue:`2020-03-03`}),(0,k.jsx)(c,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,k.jsx)(o,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,k.jsx)(i,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},N=[`Default`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}})))()}P();export{M as Default,N as __namedExportsOrder,j as default};