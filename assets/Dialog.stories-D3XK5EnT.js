import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-DnaggZxp.js";import{n as i,t as a}from"./getCssVariableStyle-rhjbzvYQ.js";import{n as o,t as s}from"./textbox-D98-YxRJ.js";import{n as c,t as l}from"./button-B5Vw-g4E.js";var u,d,f,p,m=t((()=>{u=`_n23mDialog_19qdr_2`,d=`_dialog_19qdr_5`,f=`_dialogCloseButton_19qdr_17`,p={n23mDialog:u,dialog:d,dialogCloseButton:f}})),h,g,_,v=t((()=>{h=e(n(),1),l(),s(),i(),m(),g=r(),_=({children:e,open:t,widthMax:n,title:r,onCancel:i,className:s,style:l,...u})=>{let d=(0,h.useRef)(null);return(0,h.useEffect)(()=>{if(t)d.current?.showModal(),document.body.style.paddingRight=`${window.innerWidth-document.body.clientWidth}px`,document.body.style.overflow=`hidden`;else{d.current?.classList.add(p.minimize);let e=setTimeout(()=>{d.current?.close(),d.current?.classList.remove(p.minimize),document.body.style.paddingRight=`0`,document.body.style.overflow=``},0);return()=>clearTimeout(e)}},[t]),(0,g.jsx)(`div`,{className:[p.n23mDialog,`n23mDialog`,s].filter(Boolean).join(` `),...u,style:{...a({"--dialog-wm":n}),...l},children:(0,g.jsxs)(`dialog`,{className:[r?p.hasTitle:``,p.dialog].join(` `),"modal-mode":`mega`,ref:d,onCancel:i,children:[(0,g.jsx)(`div`,{className:p.dialogCloseButton,style:{display:t?`block`:`none`},children:(0,g.jsx)(c,{onClick:i,"aria-label":`close dialog`,height:`25px`,width:`60px`,backgroundColor:`orangered`,children:(0,g.jsx)(o,{tag:`h2`,mobileSize:14,desktopSize:14,color:`white`,children:`Close`})})}),(0,g.jsx)(`article`,{children:e})]})})},_.displayName=`Dialog`,_.__docgenInfo={description:``,methods:[],displayName:`Dialog`}})),y=t((()=>{v()})),b,x,S,C,w;t((()=>{b=e(n(),1),l(),s(),y(),x=r(),S={title:`Dialog/Dialog`,component:_,parameters:{layout:`centered`,docs:{description:{component:`
A modal dialog component built with the native \`<dialog>\` element.

It supports controlled open/close behavior, custom content, and a cancel callback.

\`\`\`tsx
import { Dialog } from 'najwer23morsels/lib/dialog';
\`\`\`
      `}}},tags:[`autodocs`]},C={args:{open:!0,widthMax:`600px`},render:e=>{let[t,n]=(0,b.useState)(!1);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(`div`,{children:[(0,x.jsx)(c,{height:`40px`,width:`100px`,backgroundColor:`orangered`,onClick:()=>n(!0),children:(0,x.jsx)(o,{mobileSize:14,desktopSize:14,color:`white`,children:`Open Dialog`})}),(0,x.jsx)(_,{...e,open:t,onCancel:()=>n(!1),children:(0,x.jsx)(o,{mobileSize:14,desktopSize:14,margin:`0 30px 30px 30px`,children:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`})})]})})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    widthMax: '600px'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <div>
          <Button height={'40px'} width={'100px'} backgroundColor="orangered" onClick={() => setIsOpen(true)}>
            <TextBox mobileSize={14} desktopSize={14} color="white">
              Open Dialog
            </TextBox>
          </Button>
          <Dialog {...args} open={isOpen} onCancel={() => setIsOpen(false)}>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
          </Dialog>
        </div>
      </>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`]}))();export{C as Default,w as __namedExportsOrder,S as default};