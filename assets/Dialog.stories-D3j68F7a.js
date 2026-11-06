import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{M as n}from"./iframe-BNBfKkFY.js";import{n as r,t as i}from"./TextBox-BwXi1IsL.js";import{n as a,t as o}from"./Typography-CITjao8c.js";import{n as s,t as c}from"./Button-CPL-oLAU.js";import{n as l,t as u}from"./Input-C_0ZOViX.js";import{n as d,t as f}from"./Form-CDxkqvdq.js";import{t as p}from"./Grid-CcLGYPH0.js";import{t as m}from"./Grid-Cjc6D5MO.js";import{n as h,t as g}from"./Dialog-CUUdVgxj.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{_=n(),c(),f(),m(),u(),i(),o(),g(),v=t(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,x={title:`Dialog/Dialog`,component:h,parameters:{layout:`centered`,docs:{description:{component:'\nA modal dialog built with the native `<dialog>` element.\n\nIt is controlled with `open` and `onCancel`. `onCancel` runs for the Close button and for the Escape key, so it should set `open` to false.\n\nRecommended content layout: a `Grid` container (`padding="0px 30px 30px 30px"`, `margin="auto"`) with a `Typography` subheading (`appearance="light"`, bottom margin 20px) above the content. All stories use this layout.\n\n```tsx\nimport { Dialog } from \'najwer23morsels/lib/Dialog\';\n```\n      '}}},tags:[`autodocs`],args:{open:!1,widthMax:`600px`}},S=({title:e,widthMax:t,children:n})=>(0,v.jsxs)(p,{layout:`container`,widthMin:`min(calc(${t} - 100px), calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,v.jsx)(a,{appearance:`light`,variant:`subheading`,style:{margin:`0 0 20px 0`},children:e}),n]}),C=({triggerLabel:e,triggerVariant:t=`primary`,title:n,widthMax:i,children:a})=>{let[o,c]=(0,_.useState)(!1),l=()=>c(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{variant:t,height:`40px`,padding:`0 16px`,onClick:()=>c(!0),children:(0,v.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:e})}),(0,v.jsx)(h,{open:o,widthMax:i,onCancel:l,children:(0,v.jsx)(S,{title:n,widthMax:i,children:a(l)})})]})},w=({children:e})=>(0,v.jsx)(r,{mobileSize:14,desktopSize:14,margin:`0 0 20px 0`,children:e}),T=({children:e})=>(0,v.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`,margin:`20px 0 0 0`},children:e}),E=({variant:e,label:t,onClick:n,loading:i,disabled:a,type:o=`button`})=>(0,v.jsx)(s,{variant:e,type:o,height:`36px`,padding:`0 16px`,onClick:n,loading:i,disabled:a,children:(0,v.jsx)(r,{mobileSize:14,desktopSize:14,color:`inherit`,children:t})}),D={render:()=>(0,v.jsx)(C,{triggerLabel:`Open dialog`,title:`About this app`,widthMax:`600px`,children:()=>(0,v.jsx)(w,{children:b})})},O={parameters:{docs:{description:{story:"Destructive confirmation. The safe action is `secondary`, the risky one is `danger`."}}},render:()=>(0,v.jsx)(C,{triggerLabel:`Delete account`,triggerVariant:`danger`,title:`Delete account?`,widthMax:`420px`,children:e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{children:`This will permanently remove your account and all its data. This action cannot be undone.`}),(0,v.jsxs)(T,{children:[(0,v.jsx)(E,{variant:`secondary`,label:`Cancel`,onClick:e}),(0,v.jsx)(E,{variant:`danger`,label:`Delete`,onClick:()=>{y(`delete`)(),e()}})]})]})})},k={render:()=>(0,v.jsx)(C,{triggerLabel:`Show success`,triggerVariant:`success`,title:`Payment received`,widthMax:`380px`,children:e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{children:`Thank you. A receipt has been sent to your email address.`}),(0,v.jsx)(T,{children:(0,v.jsx)(E,{variant:`success`,label:`Done`,onClick:e})})]})})},A={parameters:{docs:{description:{story:`A form inside a dialog. Save is disabled until the name is filled in.`}}},render:()=>{let e=({close:e})=>{let[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)(``);return(0,v.jsxs)(`form`,{onSubmit:n=>{n.preventDefault(),y(`submit`)({name:t,email:r}),e()},children:[(0,v.jsx)(l,{label:`Name`,name:`dialogInviteName`,placeholder:`Jane Doe`,value:t,onChange:e=>n(e.currentTarget.value),validatorOptions:[{type:`empty`}]}),(0,v.jsx)(l,{label:`Email`,name:`dialogInviteEmail`,type:`email`,placeholder:`jane@example.com`,value:r,onChange:e=>i(e.currentTarget.value)}),(0,v.jsxs)(T,{children:[(0,v.jsx)(E,{variant:`secondary`,label:`Cancel`,onClick:e}),(0,v.jsx)(E,{variant:`primary`,type:`submit`,label:`Send invite`,disabled:!t.trim()})]})]})};return(0,v.jsx)(C,{triggerLabel:`Invite`,title:`Invite a teammate`,widthMax:`460px`,children:t=>(0,v.jsx)(e,{close:t})})}},j={parameters:{docs:{description:{story:`The Save button shows the loader for 2 seconds, then the dialog closes.`}}},render:()=>{let e=({close:e})=>{let[t,n]=(0,_.useState)(!1),r=(0,_.useRef)(null);return(0,_.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{children:`Save your changes before leaving this page.`}),(0,v.jsxs)(T,{children:[(0,v.jsx)(E,{variant:`secondary`,label:`Discard`,onClick:e,disabled:t}),(0,v.jsx)(E,{variant:`primary`,label:`Save changes`,loading:t,onClick:()=>{n(!0),r.current=setTimeout(e,2e3)}})]})]})};return(0,v.jsx)(C,{triggerLabel:`Leave page`,title:`Unsaved changes`,widthMax:`420px`,children:t=>(0,v.jsx)(e,{close:t})})}},M={parameters:{docs:{description:{story:"Uses the `copy` button variant inside a dialog."}}},render:()=>(0,v.jsx)(C,{triggerLabel:`Share`,triggerVariant:`menu`,title:`Share this page`,widthMax:`480px`,children:()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{children:`Anyone with the link can view it.`}),(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`12px`,padding:`8px 8px 8px 12px`,border:`1px solid #ccc`,borderRadius:`12px`},children:[(0,v.jsx)(`code`,{style:{fontSize:13,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:`https://example.com/share/abc123`}),(0,v.jsx)(s,{variant:`copy`,textToCopy:`https://example.com/share/abc123`,height:`32px`,padding:`0 12px`,children:(0,v.jsx)(r,{mobileSize:14,desktopSize:14,fontWeight:600,color:`inherit`,children:`Copy`})})]})]})})},N={parameters:{docs:{description:{story:`Content taller than the screen. The page behind the dialog does not scroll.`}}},render:()=>(0,v.jsx)(C,{triggerLabel:`Terms of service`,title:`Terms of service`,widthMax:`600px`,children:()=>(0,v.jsx)(v.Fragment,{children:Array.from({length:12},(e,t)=>(0,v.jsx)(w,{children:b},t))})})},P={render:()=>(0,v.jsx)(C,{triggerLabel:`Narrow (320px)`,title:`Heads up`,widthMax:`320px`,children:e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{children:`A narrow dialog for short messages.`}),(0,v.jsx)(T,{children:(0,v.jsx)(E,{variant:`primary`,label:`OK`,onClick:e})})]})})},F={render:()=>(0,v.jsx)(C,{triggerLabel:`Wide (900px)`,title:`Release notes`,widthMax:`900px`,children:()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{children:b}),(0,v.jsx)(w,{children:b})]})})},I=e=>new Promise((t,n)=>{setTimeout(()=>{Number(e.credits)>1e3?n(Error(`Limit is 1000 credits per operation`)):t({code:`OK`,message:`Credits added successfully`})},1e3)}),L=()=>{let[e,t]=(0,_.useState)(!1),[n,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(!1),[c,u]=(0,_.useState)(null),[f,m]=(0,_.useState)(null),g=(0,_.useRef)(null);(0,_.useEffect)(()=>()=>{g.current&&clearTimeout(g.current)},[]);let b=()=>{u(null),m(null)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{variant:`secondary`,onClick:()=>t(!0),children:(0,v.jsx)(r,{mobileSize:16,desktopSize:16,color:`inherit`,children:`Change Credits`})}),(0,v.jsx)(h,{widthMax:`900px`,open:e,onCancel:()=>{t(!1),g.current=setTimeout(b,300)},children:(0,v.jsx)(S,{title:`Add Credits`,widthMax:`900px`,children:(0,v.jsxs)(d,{onSubmit:async e=>{if(Object.values(e).some(({error:e})=>e))return;let t=Object.fromEntries(Object.entries(e).map(([e,{value:t}])=>[e,t]));o(!0),b();try{let e=await I(t);y(`submit`)(t),u(e)}catch(e){m(e)}finally{o(!1),i(e=>e+1)}},isError:!!f,isPending:a,isSuccess:c?.code===`OK`,errorMsg:f?.message,successMsg:c?.message,children:[(0,v.jsxs)(p,{layout:`columns`,col:{smallDesktop:2},gap:{col:`20px`,row:`0px`},children:[(0,v.jsx)(l,{label:`Credits`,name:`credits`,type:`number`,step:.01,placeholder:`Credits`,validatorOptions:[{type:`decimalDigits`,options:{digits:2}}]}),(0,v.jsx)(l,{label:`Bank Account Number`,name:`bankAccountNumber`,type:`text`,placeholder:`Bank Account Number`})]}),(0,v.jsx)(p,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:`flex-end`,alignItems:`right`,margin:`20px 0 0 0`,children:(0,v.jsx)(s,{type:`submit`,variant:`primary`,children:(0,v.jsx)(r,{desktopSize:16,mobileSize:16,color:`inherit`,children:`Save changes`})})})]},n)})})]})},R={parameters:{docs:{description:{story:"Real-world pattern: `Dialog` with `Grid`, `Typography` and `Form`. The fake request takes 1s and fails above 1000 credits. The form is remounted via `key` after each submit, and state is reset 300ms after closing."}}},render:()=>(0,v.jsx)(L,{})},z=[`Default`,`ConfirmDelete`,`Success`,`FormDialog`,`SavingWithLoader`,`ShareLink`,`LongScrollableContent`,`Narrow`,`Wide`,`BalanceAddForm`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Open dialog" title="About this app" widthMax="600px">
      {() => <Body>{LOREM}</Body>}
    </DialogDemo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Destructive confirmation. The safe action is \`secondary\`, the risky one is \`danger\`.'
      }
    }
  },
  render: () => <DialogDemo triggerLabel="Delete account" triggerVariant="danger" title="Delete account?" widthMax="420px">
      {close => <>
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Show success" triggerVariant="success" title="Payment received" widthMax="380px">
      {close => <>
          <Body>Thank you. A receipt has been sent to your email address.</Body>
          <Actions>
            <ActionButton variant="success" label="Done" onClick={close} />
          </Actions>
        </>}
    </DialogDemo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
          <Input label="Name" name="dialogInviteName" placeholder="Jane Doe" value={name} onChange={e => setName(e.currentTarget.value)} validatorOptions={[{
          type: 'empty'
        }]} />
          <Input label="Email" name="dialogInviteEmail" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <Actions>
            <ActionButton variant="secondary" label="Cancel" onClick={close} />
            <ActionButton variant="primary" type="submit" label="Send invite" disabled={!name.trim()} />
          </Actions>
        </form>;
    };
    return <DialogDemo triggerLabel="Invite" title="Invite a teammate" widthMax="460px">
        {close => <Form close={close} />}
      </DialogDemo>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    return <DialogDemo triggerLabel="Leave page" title="Unsaved changes" widthMax="420px">
        {close => <Saving close={close} />}
      </DialogDemo>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Uses the \`copy\` button variant inside a dialog.'
      }
    }
  },
  render: () => <DialogDemo triggerLabel="Share" triggerVariant="menu" title="Share this page" widthMax="480px">
      {() => <>
          <Body>Anyone with the link can view it.</Body>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
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
            <Button variant="copy" textToCopy="https://example.com/share/abc123" height="32px" padding="0 12px">
              <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
                Copy
              </TextBox>
            </Button>
          </div>
        </>}
    </DialogDemo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Content taller than the screen. The page behind the dialog does not scroll.'
      }
    }
  },
  render: () => <DialogDemo triggerLabel="Terms of service" title="Terms of service" widthMax="600px">
      {() => <>
          {Array.from({
        length: 12
      }, (_, i) => <Body key={i}>{LOREM}</Body>)}
        </>}
    </DialogDemo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Narrow (320px)" title="Heads up" widthMax="320px">
      {close => <>
          <Body>A narrow dialog for short messages.</Body>
          <Actions>
            <ActionButton variant="primary" label="OK" onClick={close} />
          </Actions>
        </>}
    </DialogDemo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo triggerLabel="Wide (900px)" title="Release notes" widthMax="900px">
      {() => <>
          <Body>{LOREM}</Body>
          <Body>{LOREM}</Body>
        </>}
    </DialogDemo>
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Real-world pattern: `Dialog` with `Grid`, `Typography` and `Form`. The fake request takes 1s and fails above 1000 credits. The form is remounted via `key` after each submit, and state is reset 300ms after closing.'\n      }\n    }\n  },\n  render: () => <BalanceAddDemo />\n}",...R.parameters?.docs?.source}}}})))()}B();export{R as BalanceAddForm,O as ConfirmDelete,D as Default,A as FormDialog,N as LongScrollableContent,P as Narrow,j as SavingWithLoader,M as ShareLink,k as Success,F as Wide,z as __namedExportsOrder,x as default};