import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{D as n}from"./iframe-B_7CpkkU.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./TextBox-CyAP7UcG.js";import{n as o,t as s}from"./Button-BE0mzndn.js";import{n as c,t as l}from"./Input-Bqw5FHnm.js";import{n as u,t as d}from"./Calendar-BOxryGVP.js";var f,p,m,h,g,_,v,y,b=e((()=>{f=`_n23mSelect_1vbty_2`,p=`_icon_1vbty_14`,m=`_iconRotate_1vbty_38`,h=`_dropdownWrapper_1vbty_44`,g=`_open_1vbty_56`,_=`_dropdown_1vbty_44`,v=`_dropdownItem_1vbty_80`,y={n23mSelect:f,icon:p,iconRotate:m,dropdownWrapper:h,open:g,dropdown:_,dropdownItem:v}})),x,S,C,w=e((()=>{x=t(n(),1),l(),b(),S=r(),C=({className:e,name:t,disabled:n,style:r,options:i,initialValue:a,validatorOptions:o,placeholder:s,onBlur:l,label:u=`Select`,...d})=>{let[f,p]=(0,x.useState)(a?.label??``),[m,h]=(0,x.useState)(a?.value??``),[g,_]=(0,x.useState)(!1),v=(0,x.useRef)(null),b=(0,x.useId)(),C=(0,x.useMemo)(()=>i.filter(e=>e.label.toLowerCase().includes(f.toLowerCase())),[i,f]),w=e=>{let t=e.currentTarget.value;p(t),h(``),_(!0)},T=()=>{_(e=>!e),p(``),h(``)},E=e=>{_(!1),l?.(e,{value:m,label:f})},D=e=>{h(e.value),p(e.label),_(!1)};return(0,S.jsxs)(`div`,{className:[y.n23mSelect,`n23mSelect`,e].filter(Boolean).join(` `),...d,style:{...r},children:[(0,S.jsx)(`div`,{className:[y.icon,g?y.iconRotate:``].join(` `),onMouseDown:e=>{e.preventDefault(),v.current?.focus(),T()}}),(0,S.jsx)(c,{name:t,type:`hidden`,kind:`input`,validatorOptions:[...o??[],{type:`existsInOptions`,options:{options:i,matchBy:`value`}}],value:m}),(0,S.jsx)(c,{id:b,inputRef:v,label:u,type:`text`,kind:`select`,disabled:n,placeholder:s,value:f,onChange:w,onClick:T,onBlur:E,validatorOptions:[...o??[],{type:`existsInOptions`,options:{options:i,matchBy:`label`}}],"aria-autocomplete":`list`,"aria-expanded":g,"aria-controls":`${t}-listbox`,role:`combobox`}),(0,S.jsx)(`div`,{className:[y.dropdownWrapper,g?y.open:``].join(` `),children:(0,S.jsx)(`div`,{className:[y.dropdown].join(` `),children:C.map(e=>(0,S.jsx)(`div`,{className:y.dropdownItem,onMouseDown:()=>{D(e)},children:e.label},e.value))})})]})},C.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},name:{required:!0,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`Option[]`},description:``},inputRef:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLInputElement | null>`,elements:[{name:`union`,raw:`HTMLInputElement | null`,elements:[{name:`HTMLInputElement`},{name:`null`}]}]},description:``},initialValue:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}},description:``},validatorOptions:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| { type: 'empty' }
| { type: 'email' }
| { type: 'numberInRange'; options?: { min?: number; max?: number } }
| { type: 'naturalNumber' }
| { type: 'decimalDigits'; options?: { digits: number } }
| { type: 'date' }
| { type: 'json' }
| { type: 'equal'; options: { ref: React.RefObject<HTMLInputElement> } }
| {
    type: 'existsInOptions';
    options: {
      options: {
        value: string;
        label: string;
      }[];
      matchBy?: 'value' | 'label';
    };
  }`,elements:[{name:`signature`,type:`object`,raw:`{ type: 'empty' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'empty'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'email' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'email'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'numberInRange'; options?: { min?: number; max?: number } }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'numberInRange'`,required:!0}},{key:`options`,value:{name:`signature`,type:`object`,raw:`{ min?: number; max?: number }`,signature:{properties:[{key:`min`,value:{name:`number`,required:!1}},{key:`max`,value:{name:`number`,required:!1}}]},required:!1}}]}},{name:`signature`,type:`object`,raw:`{ type: 'naturalNumber' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'naturalNumber'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'decimalDigits'; options?: { digits: number } }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'decimalDigits'`,required:!0}},{key:`options`,value:{name:`signature`,type:`object`,raw:`{ digits: number }`,signature:{properties:[{key:`digits`,value:{name:`number`,required:!0}}]},required:!1}}]}},{name:`signature`,type:`object`,raw:`{ type: 'date' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'date'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'json' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'json'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'equal'; options: { ref: React.RefObject<HTMLInputElement> } }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'equal'`,required:!0}},{key:`options`,value:{name:`signature`,type:`object`,raw:`{ ref: React.RefObject<HTMLInputElement> }`,signature:{properties:[{key:`ref`,value:{name:`ReactRefObject`,raw:`React.RefObject<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}],required:!0}}]},required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  type: 'existsInOptions';
  options: {
    options: {
      value: string;
      label: string;
    }[];
    matchBy?: 'value' | 'label';
  };
}`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'existsInOptions'`,required:!0}},{key:`options`,value:{name:`signature`,type:`object`,raw:`{
  options: {
    value: string;
    label: string;
  }[];
  matchBy?: 'value' | 'label';
}`,signature:{properties:[{key:`options`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`{
  value: string;
  label: string;
}[]`,required:!0}},{key:`matchBy`,value:{name:`union`,raw:`'value' | 'label'`,elements:[{name:`literal`,value:`'value'`},{name:`literal`,value:`'label'`}],required:!1}}]},required:!0}}]}}]}],raw:`ValidatorOption[]`},description:``},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select'`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  data: { value: string; label: string },
) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>`,elements:[{name:`union`,raw:`HTMLInputElement | HTMLTextAreaElement`,elements:[{name:`HTMLInputElement`},{name:`HTMLTextAreaElement`}]}]},name:`e`},{type:{name:`signature`,type:`object`,raw:`{ value: string; label: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}},name:`data`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})),T=e((()=>{w()})),E,D,O=e((()=>{a(),E=r(),D=({children:e,onSubmit:t,className:n,isError:r,isPending:a,isSuccess:o,errorMsg:s,successMsg:c,style:l,...u})=>{let d=e=>{e.preventDefault();let n=e.currentTarget;n&&Array.from(n.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0}))}),t(Object.fromEntries(Array.from(n.elements).filter(e=>e instanceof HTMLInputElement&&e.name!==``||e instanceof HTMLTextAreaElement&&e.name!==``||e instanceof HTMLSelectElement&&e.name!==``).map(e=>[e.name,{error:e.className.includes(`error`),value:e.value}])))};return(0,E.jsxs)(`form`,{className:[`n23mForm`,n].filter(Boolean).join(` `),...u,style:{...l},onSubmit:d,children:[e,r&&(0,E.jsx)(i,{tag:`p`,color:`#ff3333`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:s}),a&&(0,E.jsx)(i,{tag:`p`,color:`grey`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:`Loading..`}),o&&(0,E.jsx)(i,{tag:`p`,color:`#4BB543`,mobileSize:12,desktopSize:12,margin:`15px 0 10px 0`,fontWeight:400,children:c})]})},D.displayName=`Form`,D.__docgenInfo={description:``,methods:[],displayName:`Form`}})),k=e((()=>{O()})),A,j,M,N,P,F;e((()=>{A=t(n(),1),s(),d(),l(),T(),a(),k(),j=r(),{action:M}=__STORYBOOK_MODULE_ACTIONS__,N={title:`Form/Form`,component:D,parameters:{layout:`centered`,docs:{description:{component:`
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `}}},tags:[`autodocs`]},P={args:{onSubmit:()=>{},children:(0,j.jsx)(j.Fragment,{})},render:e=>{let[t,n]=(0,A.useState)(!1),[r,a]=(0,A.useState)(!1),[s,l]=(0,A.useState)(!1);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(D,{onSubmit:e=>{n(!1),a(!1),l(!0),setTimeout(()=>{if(l(!1),M(`Form:`,e)(e),Object.values(e).some(({error:e})=>e)){M(`Form has errors`)(),a(!0);return}M(`Form submitted`)(),n(!0)},500)},isError:r,isPending:s,isSuccess:t,errorMsg:`Form has errors`,successMsg:`Form submitted`,children:[(0,j.jsx)(c,{label:`Email`,type:`text`,name:`name`,validatorOptions:[{type:`empty`},{type:`email`}]}),(0,j.jsx)(c,{label:`Password`,type:`password`,name:`pass`,validatorOptions:[{type:`empty`}]}),(0,j.jsx)(C,{options:[{value:`1`,label:`Test1`},{value:`2`,label:`Test2`}],label:`Select`,name:`select`,validatorOptions:[{type:`empty`}]}),(0,j.jsx)(u,{name:`calendar`,label:`Calendar`,initialValue:`2020-03-03`}),(0,j.jsx)(c,{kind:`textarea`,label:`Msg`,type:`text`,name:`msg`,validatorOptions:[{type:`empty`}]}),(0,j.jsx)(o,{type:`submit`,backgroundColor:`yellow`,borderColor:`black`,height:`40px`,padding:0,width:`300px`,children:(0,j.jsx)(i,{mobileSize:18,desktopSize:18,children:`Submit`})})]})})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Default`]}))();export{P as Default,F as __namedExportsOrder,N as default};