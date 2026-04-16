import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./textbox-D98-YxRJ.js";import{n as o,t as s}from"./button-XTq_5Em_.js";var c,l,u,d=t((()=>{c=e(n(),1),s(),a(),l=r(),u=({children:e,className:t,style:n,textToCopy:r,color:a=`white`,backgroundColor:s=`orangered`,...u})=>{let[d,f]=(0,c.useState)(!1),p=(0,c.useRef)(null),m=(0,c.useCallback)(()=>{p.current&&clearTimeout(p.current),navigator.clipboard.writeText(r),f(!0),p.current=setTimeout(()=>{f(!1),p.current=null},800)},[]);return(0,c.useEffect)(()=>()=>{p.current&&clearTimeout(p.current)},[]),(0,l.jsx)(`div`,{className:[`n23mCopyButton`,t].filter(Boolean).join(` `),...u,children:(0,l.jsx)(o,{type:`button`,padding:`0px 3px`,height:`auto`,width:`auto`,backgroundColor:d?`#4BB543`:s,onClick:m,children:e??(0,l.jsx)(i,{mobileSize:10,desktopSize:10,fontWeight:600,lineHeight:`17px`,color:a,children:`Copy`})})})},u.displayName=`CopyButton`,u.__docgenInfo={description:``,methods:[],displayName:`CopyButton`,props:{color:{defaultValue:{value:`'white'`,computed:!1},required:!1},backgroundColor:{defaultValue:{value:`'orangered'`,computed:!1},required:!1}}}})),f=t((()=>{d()})),p,m,h,g;t((()=>{f(),p=r(),m={title:`CopyButton/CopyButton`,component:u,parameters:{layout:`centered`,docs:{description:{component:`
A button that copies text to the clipboard.

\`\`\`tsx
import { CopyButton } from 'najwer23morsels/lib/copybutton';
\`\`\`
      `}}},tags:[`autodocs`]},h={args:{textToCopy:`Hagagagga`},render:e=>(0,p.jsx)(`div`,{children:(0,p.jsx)(u,{...e})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    textToCopy: 'Hagagagga'
  },
  render: args => <div>
      <CopyButton {...args}></CopyButton>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};