import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{D as n}from"./iframe-DXgZvyQ3.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./TextBox-dcpHFZe3.js";import{n as o,t as s}from"./LoaderDots-I44fm8aX.js";import{n as c,t as l}from"./Button-CJUumNAj.js";import{n as u,t as d}from"./Input-X0a93DHg.js";import{n as f,t as p}from"./Calendar-DBaYwm5k.js";var m,h,g,_,v,y,b,x,S=e((()=>{m=`_n23mSelect_1vbty_2`,h=`_icon_1vbty_14`,g=`_iconRotate_1vbty_38`,_=`_dropdownWrapper_1vbty_44`,v=`_open_1vbty_56`,y=`_dropdown_1vbty_44`,b=`_dropdownItem_1vbty_80`,x={n23mSelect:m,icon:h,iconRotate:g,dropdownWrapper:_,open:v,dropdown:y,dropdownItem:b}})),C,w,T,E=e((()=>{C=t(n(),1),d(),S(),w=r(),T=({className:e,name:t,disabled:n,style:r,options:i,initialValue:a,validatorOptions:o,placeholder:s,onBlur:c,label:l=`Select`,...d})=>{let[f,p]=(0,C.useState)(a?.label??``),[m,h]=(0,C.useState)(a?.value??``),[g,_]=(0,C.useState)(!1),v=(0,C.useRef)(null),y=(0,C.useId)(),b=(0,C.useMemo)(()=>i.filter(e=>e.label.toLowerCase().includes(f.toLowerCase())),[i,f]),S=e=>{let t=e.currentTarget.value;p(t),h(``),_(!0)},T=()=>{_(e=>!e),p(``),h(``)},E=e=>{_(!1),c?.(e,{value:m,label:f})},D=e=>{h(e.value),p(e.label),_(!1)};return(0,w.jsxs)(`div`,{className:[x.n23mSelect,`n23mSelect`,e].filter(Boolean).join(` `),...d,style:{...r},children:[(0,w.jsx)(`div`,{className:[x.icon,g?x.iconRotate:``].join(` `),onMouseDown:e=>{e.preventDefault(),v.current?.focus(),T()}}),(0,w.jsx)(u,{name:t,type:`hidden`,kind:`input`,validatorOptions:[...o??[],{type:`existsInOptions`,options:{options:i,matchBy:`value`}}],value:m}),(0,w.jsx)(u,{id:y,inputRef:v,label:l,type:`text`,kind:`select`,disabled:n,placeholder:s,value:f,onChange:S,onClick:T,onBlur:E,validatorOptions:[...o??[],{type:`existsInOptions`,options:{options:i,matchBy:`label`}}],"aria-autocomplete":`list`,"aria-expanded":g,"aria-controls":`${t}-listbox`,role:`combobox`}),(0,w.jsx)(`div`,{className:[x.dropdownWrapper,g?x.open:``].join(` `),children:(0,w.jsx)(`div`,{className:[x.dropdown].join(` `),children:b.map(e=>(0,w.jsx)(`div`,{className:x.dropdownItem,onMouseDown:()=>{D(e)},children:e.label},e.value))})})]})}})),D=e((()=>{E()})),O,k,A=e((()=>{s(),a(),O=r(),k=({children:e,onSubmit:t,className:n,isError:r,isPending:a,isSuccess:s,errorMsg:c,successMsg:l,style:u,...d})=>{let f=e=>{e.preventDefault();let n=e.currentTarget;n&&Array.from(n.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0}))}),t(Object.fromEntries(Array.from(n.elements).filter(e=>e instanceof HTMLInputElement&&e.name!==``||e instanceof HTMLTextAreaElement&&e.name!==``||e instanceof HTMLSelectElement&&e.name!==``).map(e=>[e.name,{error:e.className.includes(`error`),value:e.value}])))};return(0,O.jsxs)(`form`,{className:[`n23mForm`,n].filter(Boolean).join(` `),...d,style:{...u},onSubmit:f,children:[e,r&&(0,O.jsx)(i,{tag:`p`,color:`#ff3333`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:c}),a&&(0,O.jsx)(o,{color:`grey`,mobileSize:12,desktopSize:12,fontWeight:400,margin:`15px 0 10px 0`}),s&&(0,O.jsx)(i,{tag:`p`,color:`#4BB543`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:l})]})},k.displayName=`Form`;try{k.displayName=`Form`,k.__docgenInfo={description:``,displayName:`Form`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Form/Form.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`className`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!1,tags:{},type:{name:`HTMLAttributes<HTMLDivElement>`}},onSubmit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`onSubmit`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!0,tags:{},type:{name:`(formData: FormType) => void`}},style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!1,tags:{},type:{name:`CSSProperties`}},isError:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`isError`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!0,tags:{},type:{name:`boolean`}},isPending:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`isPending`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!0,tags:{},type:{name:`boolean`}},isSuccess:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`isSuccess`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!0,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`errorMsg`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!0,tags:{},type:{name:`string | null | undefined`}},successMsg:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`}],description:``,name:`successMsg`,parent:{fileName:`najwer23morsels/src/stories/Form/Form.tsx`,name:`FormProps`},required:!0,tags:{},type:{name:`string | null | undefined`}}},tags:{}}}catch{}})),j=e((()=>{A()})),M,N,P,F,I,L;e((()=>{M=t(n(),1),l(),p(),d(),D(),a(),j(),N=r(),{action:P}=__STORYBOOK_MODULE_ACTIONS__,F={title:`Form/Form`,component:k,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},I={args:{onSubmit:()=>{},children:(0,N.jsx)(N.Fragment,{})},render:e=>{let[t,n]=(0,M.useState)(!1),[r,a]=(0,M.useState)(!1),[o,s]=(0,M.useState)(!1);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(k,{onSubmit:e=>{n(!1),a(!1),s(!0),setTimeout(()=>{if(s(!1),P(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)){P(`Form has errors`)(),a(!0);return}P(`Form submitted`)(),n(!0)},500)},isError:r,isPending:o,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,N.jsx)(u,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,N.jsx)(u,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,N.jsx)(T,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,validatorOptions:[{type:`empty`}]}),(0,N.jsx)(f,{name:`calendar`,label:`Calendar`,initialValue:`2020-03-03`}),(0,N.jsx)(u,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,N.jsx)(c,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,N.jsx)(i,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Default`]}))();export{I as Default,L as __namedExportsOrder,F as default};