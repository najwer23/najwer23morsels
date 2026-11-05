import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-CnK7IBct.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Button-CqH0kvuD.js";import{n as s,t as c}from"./ButtonCopy-DngwGW1L.js";import{n as l,t as u}from"./Input-BgBymslS.js";import{n as d,t as f}from"./Dialog-B9dBUnU9.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{p=t(),o(),c(),u(),i(),f(),m=n(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,_={title:`Dialog/Dialog`,component:d,parameters:{layout:`centered`,docs:{description:{component:"\nA modal dialog built with the native `<dialog>` element.\n\nIt is controlled with `open` and `onCancel`. `onCancel` runs for the Close button and for the Escape key, so it should set `open` to false.\n\n```tsx\nimport { Dialog } from 'najwer23morsels/lib/Dialog';\n```\n      "}}},tags:[`autodocs`],args:{open:!1,widthMax:`600px`}},v=({triggerLabel:e,triggerVariant:t=`primary`,widthMax:n,children:i})=>{let[o,s]=(0,p.useState)(!1),c=()=>s(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{variant:t,height:`40px`,padding:`0 16px`,onClick:()=>s(!0),children:(0,m.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:e})}),(0,m.jsx)(d,{open:o,widthMax:n,onCancel:c,children:i(c)})]})},y=({children:e})=>(0,m.jsx)(r,{tag:`h3`,mobileSize:18,desktopSize:18,fontWeight:600,margin:`0 30px 12px 30px`,children:e}),b=({children:e})=>(0,m.jsx)(r,{mobileSize:14,desktopSize:14,margin:`0 30px 24px 30px`,children:e}),x=({children:e})=>(0,m.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`,margin:`0 30px 30px 30px`},children:e}),S=({variant:e,label:t,onClick:n,loading:i,disabled:o,type:s=`button`})=>(0,m.jsx)(a,{variant:e,type:s,height:`36px`,padding:`0 16px`,onClick:n,loading:i,disabled:o,children:(0,m.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:t})}),C={render:()=>(0,m.jsx)(v,{triggerLabel:`Open dialog`,widthMax:`600px`,children:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`About this app`}),(0,m.jsx)(b,{children:g})]})})},w={parameters:{docs:{description:{story:"Destructive confirmation. The safe action is `secondary`, the risky one is `danger`."}}},render:()=>(0,m.jsx)(v,{triggerLabel:`Delete account`,triggerVariant:`danger`,widthMax:`420px`,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Delete account?`}),(0,m.jsx)(b,{children:`This will permanently remove your account and all its data. This action cannot be undone.`}),(0,m.jsxs)(x,{children:[(0,m.jsx)(S,{variant:`secondary`,label:`Cancel`,onClick:e}),(0,m.jsx)(S,{variant:`danger`,label:`Delete`,onClick:()=>{h(`delete`)(),e()}})]})]})})},T={render:()=>(0,m.jsx)(v,{triggerLabel:`Show success`,triggerVariant:`success`,widthMax:`380px`,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Payment received`}),(0,m.jsx)(b,{children:`Thank you. A receipt has been sent to your email address.`}),(0,m.jsx)(x,{children:(0,m.jsx)(S,{variant:`success`,label:`Done`,onClick:e})})]})})},E={parameters:{docs:{description:{story:`A form inside a dialog. Save is disabled until the name is filled in.`}}},render:()=>{let e=({close:e})=>{let[t,n]=(0,p.useState)(``),[r,i]=(0,p.useState)(``);return(0,m.jsxs)(`form`,{onSubmit:n=>{n.preventDefault(),h(`submit`)({name:t,email:r}),e()},children:[(0,m.jsx)(y,{children:`Invite a teammate`}),(0,m.jsxs)(`div`,{style:{margin:`0 30px 16px 30px`},children:[(0,m.jsx)(l,{label:`Name`,name:`dialogInviteName`,placeholder:`Jane Doe`,value:t,onChange:e=>n(e.currentTarget.value),validatorOptions:[{type:`empty`}]}),(0,m.jsx)(l,{label:`Email`,name:`dialogInviteEmail`,type:`email`,placeholder:`jane@example.com`,value:r,onChange:e=>i(e.currentTarget.value)})]}),(0,m.jsxs)(x,{children:[(0,m.jsx)(S,{variant:`secondary`,label:`Cancel`,onClick:e}),(0,m.jsx)(S,{variant:`primary`,type:`submit`,label:`Send invite`,disabled:!t.trim()})]})]})};return(0,m.jsx)(v,{triggerLabel:`Invite`,widthMax:`460px`,children:t=>(0,m.jsx)(e,{close:t})})}},D={parameters:{docs:{description:{story:`The Save button shows the loader for 2 seconds, then the dialog closes.`}}},render:()=>{let e=({close:e})=>{let[t,n]=(0,p.useState)(!1),r=(0,p.useRef)(null);return(0,p.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Unsaved changes`}),(0,m.jsx)(b,{children:`Save your changes before leaving this page.`}),(0,m.jsxs)(x,{children:[(0,m.jsx)(S,{variant:`secondary`,label:`Discard`,onClick:e,disabled:t}),(0,m.jsx)(S,{variant:`primary`,label:`Save changes`,loading:t,onClick:()=>{n(!0),r.current=setTimeout(e,2e3)}})]})]})};return(0,m.jsx)(v,{triggerLabel:`Leave page`,widthMax:`420px`,children:t=>(0,m.jsx)(e,{close:t})})}},O={parameters:{docs:{description:{story:"Uses `ButtonCopy` inside a dialog."}}},render:()=>(0,m.jsx)(v,{triggerLabel:`Share`,triggerVariant:`menu`,widthMax:`480px`,children:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Share this page`}),(0,m.jsx)(b,{children:`Anyone with the link can view it.`}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`12px`,margin:`0 30px 30px 30px`,padding:`8px 8px 8px 12px`,border:`1px solid #ccc`,borderRadius:`12px`},children:[(0,m.jsx)(`code`,{style:{fontSize:13,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:`https://example.com/share/abc123`}),(0,m.jsx)(s,{textToCopy:`https://example.com/share/abc123`,height:`32px`,padding:`0 12px`})]})]})})},k={parameters:{docs:{description:{story:`Content taller than the screen. The page behind the dialog does not scroll.`}}},render:()=>(0,m.jsx)(v,{triggerLabel:`Terms of service`,widthMax:`600px`,children:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Terms of service`}),Array.from({length:12},(e,t)=>(0,m.jsx)(b,{children:g},t))]})})},A={render:()=>(0,m.jsx)(v,{triggerLabel:`Narrow (320px)`,widthMax:`320px`,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Heads up`}),(0,m.jsx)(b,{children:`A narrow dialog for short messages.`}),(0,m.jsx)(x,{children:(0,m.jsx)(S,{variant:`primary`,label:`OK`,onClick:e})})]})})},j={render:()=>(0,m.jsx)(v,{triggerLabel:`Wide (900px)`,widthMax:`900px`,children:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{children:`Release notes`}),(0,m.jsx)(b,{children:g}),(0,m.jsx)(b,{children:g})]})})},M=[`Default`,`ConfirmDelete`,`Success`,`FormDialog`,`SavingWithLoader`,`ShareLink`,`LongScrollableContent`,`Narrow`,`Wide`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Open dialog" widthMax="600px">
      {() => <>
          <Heading>About this app</Heading>
          <Body>{LOREM}</Body>
        </>}
    </DialogDemo>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Destructive confirmation. The safe action is \`secondary\`, the risky one is \`danger\`.'
      }
    }
  },
  render: () => <DialogDemo triggerLabel="Delete account" triggerVariant="danger" widthMax="420px">
      {close => <>
          <Heading>Delete account?</Heading>
          <Body>This will permanently remove your account and all its data. This action cannot be undone.</Body>
          <Actions>
            <ActionButton variant="secondary" label="Cancel" onClick={close} />
            <ActionButton variant="danger" label="Delete" onClick={() => {
          action('delete')();
          close();
        }} />
          </Actions>
        </>}
    </DialogDemo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Show success" triggerVariant="success" widthMax="380px">
      {close => <>
          <Heading>Payment received</Heading>
          <Body>Thank you. A receipt has been sent to your email address.</Body>
          <Actions>
            <ActionButton variant="success" label="Done" onClick={close} />
          </Actions>
        </>}
    </DialogDemo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A form inside a dialog. Save is disabled until the name is filled in.'
      }
    }
  },
  render: () => {
    const Form: React.FC<{
      close: () => void;
    }> = ({
      close
    }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      return <form onSubmit={e => {
        e.preventDefault();
        action('submit')({
          name,
          email
        });
        close();
      }}>
          <Heading>Invite a teammate</Heading>
          <div style={{
          margin: '0 30px 16px 30px'
        }}>
            <Input label="Name" name="dialogInviteName" placeholder="Jane Doe" value={name} onChange={e => setName(e.currentTarget.value)} validatorOptions={[{
            type: 'empty'
          }]} />
            <Input label="Email" name="dialogInviteEmail" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          </div>
          <Actions>
            <ActionButton variant="secondary" label="Cancel" onClick={close} />
            <ActionButton variant="primary" type="submit" label="Send invite" disabled={!name.trim()} />
          </Actions>
        </form>;
    };
    return <DialogDemo triggerLabel="Invite" widthMax="460px">
        {close => <Form close={close} />}
      </DialogDemo>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The Save button shows the loader for 2 seconds, then the dialog closes.'
      }
    }
  },
  render: () => {
    const Saving: React.FC<{
      close: () => void;
    }> = ({
      close
    }) => {
      const [saving, setSaving] = useState(false);
      const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
      useEffect(() => () => {
        if (timer.current) clearTimeout(timer.current);
      }, []);
      return <>
          <Heading>Unsaved changes</Heading>
          <Body>Save your changes before leaving this page.</Body>
          <Actions>
            <ActionButton variant="secondary" label="Discard" onClick={close} disabled={saving} />
            <ActionButton variant="primary" label="Save changes" loading={saving} onClick={() => {
            setSaving(true);
            timer.current = setTimeout(close, 2000);
          }} />
          </Actions>
        </>;
    };
    return <DialogDemo triggerLabel="Leave page" widthMax="420px">
        {close => <Saving close={close} />}
      </DialogDemo>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Uses \`ButtonCopy\` inside a dialog.'
      }
    }
  },
  render: () => <DialogDemo triggerLabel="Share" triggerVariant="menu" widthMax="480px">
      {() => <>
          <Heading>Share this page</Heading>
          <Body>Anyone with the link can view it.</Body>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        margin: '0 30px 30px 30px',
        padding: '8px 8px 8px 12px',
        border: '1px solid #ccc',
        borderRadius: '12px'
      }}>
            <code style={{
          fontSize: 13,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
              https://example.com/share/abc123
            </code>
            <ButtonCopy textToCopy="https://example.com/share/abc123" height="32px" padding="0 12px" />
          </div>
        </>}
    </DialogDemo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Content taller than the screen. The page behind the dialog does not scroll.'
      }
    }
  },
  render: () => <DialogDemo triggerLabel="Terms of service" widthMax="600px">
      {() => <>
          <Heading>Terms of service</Heading>
          {Array.from({
        length: 12
      }, (_, i) => <Body key={i}>{LOREM}</Body>)}
        </>}
    </DialogDemo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Narrow (320px)" widthMax="320px">
      {close => <>
          <Heading>Heads up</Heading>
          <Body>A narrow dialog for short messages.</Body>
          <Actions>
            <ActionButton variant="primary" label="OK" onClick={close} />
          </Actions>
        </>}
    </DialogDemo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Wide (900px)" widthMax="900px">
      {() => <>
          <Heading>Release notes</Heading>
          <Body>{LOREM}</Body>
          <Body>{LOREM}</Body>
        </>}
    </DialogDemo>
}`,...j.parameters?.docs?.source}}}})))()}N();export{w as ConfirmDelete,C as Default,E as FormDialog,k as LongScrollableContent,A as Narrow,D as SavingWithLoader,O as ShareLink,T as Success,j as Wide,M as __namedExportsOrder,_ as default};