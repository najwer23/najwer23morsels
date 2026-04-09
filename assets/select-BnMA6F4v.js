import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./input-DMhoYGjB.js";var o,s,c,l,u,d,f,p,m=t((()=>{o=`_n23mSelect_1e1z3_2`,s=`_icon_1e1z3_14`,c=`_iconRotate_1e1z3_38`,l=`_dropdownWrapper_1e1z3_44`,u=`_open_1e1z3_54`,d=`_dropdown_1e1z3_44`,f=`_dropdownItem_1e1z3_77`,p={n23mSelect:o,icon:s,iconRotate:c,dropdownWrapper:l,open:u,dropdown:d,dropdownItem:f}})),h,g,_,v=t((()=>{h=e(n(),1),a(),m(),g=r(),_=({className:e,name:t,disabled:n,style:r,options:a,initialValue:o,validatorOptions:s,placeholder:c,onBlur:l,label:u=`Select`,...d})=>{let[f,m]=(0,h.useState)(o?.label??``),[_,v]=(0,h.useState)(o?.value??``),[y,b]=(0,h.useState)(!1),x=(0,h.useRef)(null),S=(0,h.useId)(),C=(0,h.useMemo)(()=>a.filter(e=>e.label.toLowerCase().includes(f.toLowerCase())),[a,f]),w=e=>{let t=e.currentTarget.value;m(t),v(``),b(!0)},T=()=>{b(e=>!e),m(``),v(``)},E=e=>{b(!1),l?.(e,{value:_,label:f})},D=e=>{v(e.value),m(e.label),b(!1)};return(0,g.jsxs)(`div`,{className:[p.n23mSelect,`n23mSelect`,e].filter(Boolean).join(` `),...d,style:{...r},children:[(0,g.jsx)(`div`,{className:[p.icon,y?p.iconRotate:``].join(` `),onMouseDown:e=>{e.preventDefault(),x.current?.focus(),b(e=>!e),m(``),v(``)}}),(0,g.jsx)(i,{name:t,type:`hidden`,kind:`input`,validatorOptions:[...s??[],{type:`existsInOptions`,options:{options:a,matchBy:`value`}}],value:_}),(0,g.jsx)(i,{id:S,inputRef:x,label:u,type:`text`,kind:`select`,disabled:n,placeholder:c,value:f,onChange:w,onClick:T,onBlur:E,validatorOptions:[...s??[],{type:`existsInOptions`,options:{options:a,matchBy:`label`}}],"aria-autocomplete":`list`,"aria-expanded":y,"aria-controls":`${t}-listbox`,role:`combobox`}),(0,g.jsx)(`div`,{className:[p.dropdownWrapper,y?p.open:``].join(` `),children:(0,g.jsx)(`div`,{className:[p.dropdown].join(` `),children:C.map(e=>(0,g.jsx)(`div`,{className:p.dropdownItem,onMouseDown:t=>{D(e)},children:e.label},e.value))})})]})},_.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},name:{required:!0,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`Option[]`},description:``},inputRef:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLInputElement | null>`,elements:[{name:`union`,raw:`HTMLInputElement | null`,elements:[{name:`HTMLInputElement`},{name:`null`}]}]},description:``},initialValue:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}},description:``},validatorOptions:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| { type: 'empty' }
| { type: 'email' }
| { type: 'numberInRange'; options?: { min?: number; max?: number } }
| { type: 'date' }
| {
    type: 'existsInOptions';
    options: {
      options: {
        value: string;
        label: string;
      }[];
      matchBy?: 'value' | 'label';
    };
  }`,elements:[{name:`signature`,type:`object`,raw:`{ type: 'empty' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'empty'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'email' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'email'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'numberInRange'; options?: { min?: number; max?: number } }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'numberInRange'`,required:!0}},{key:`options`,value:{name:`signature`,type:`object`,raw:`{ min?: number; max?: number }`,signature:{properties:[{key:`min`,value:{name:`number`,required:!1}},{key:`max`,value:{name:`number`,required:!1}}]},required:!1}}]}},{name:`signature`,type:`object`,raw:`{ type: 'date' }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'date'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
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
) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>`,elements:[{name:`union`,raw:`HTMLInputElement | HTMLTextAreaElement`,elements:[{name:`HTMLInputElement`},{name:`HTMLTextAreaElement`}]}]},name:`e`},{type:{name:`signature`,type:`object`,raw:`{ value: string; label: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}},name:`data`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})),y=t((()=>{v()}));export{_ as n,y as t};