import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DbIWfbkc.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./textbox-BpKTJb_P.js";import{n as o,t as s}from"./button-MtuI3sV9.js";var c,l,u=t((()=>{c=`_n23mCopyButton_nnnjd_2`,l={n23mCopyButton:c}})),d,f,p,m=t((()=>{d=e(n(),1),s(),a(),u(),f=r(),p=({children:e,className:t,style:n,textToCopy:r,color:a=`white`,backgroundColor:s=`orangered`,...c})=>{let[u,p]=(0,d.useState)(!1),m=(0,d.useRef)(null),h=(0,d.useCallback)(()=>{m.current&&clearTimeout(m.current),navigator.clipboard.writeText(r),p(!0),m.current=setTimeout(()=>{p(!1),m.current=null},800)},[]);return(0,d.useEffect)(()=>()=>{m.current&&clearTimeout(m.current)},[]),(0,f.jsx)(`div`,{className:[l.n23mCopyButton,`n23mCopyButton`,t].filter(Boolean).join(` `),...c,children:(0,f.jsx)(o,{padding:`0px 3px`,height:`auto`,width:`auto`,backgroundColor:u?`#4BB543`:s,onClick:h,children:e??(0,f.jsx)(i,{mobileSize:8,desktopSize:8,fontWeight:600,lineHeight:`17px`,color:a,children:`Copy`})})})},p.displayName=`CopyButton`,p.__docgenInfo={description:``,methods:[],displayName:`CopyButton`,props:{color:{defaultValue:{value:`'white'`,computed:!1},required:!1},backgroundColor:{defaultValue:{value:`'orangered'`,computed:!1},required:!1}}}})),h=t((()=>{m()})),g,_,v,y;t((()=>{h(),g=r(),_={title:`CopyButton/CopyButton`,component:p,parameters:{layout:`centered`,docs:{description:{component:`
A button that copies text to the clipboard.

\`\`\`tsx
import { CopyButton } from 'najwer23morsels/lib/copybutton';
\`\`\`
      `}}},tags:[`autodocs`]},v={args:{textToCopy:`Hagagagga`},render:e=>(0,g.jsx)(`div`,{children:(0,g.jsx)(p,{...e})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    textToCopy: 'Hagagagga'
  },
  render: args => <div>
      <CopyButton {...args}></CopyButton>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`]}))();export{v as Default,y as __namedExportsOrder,_ as default};