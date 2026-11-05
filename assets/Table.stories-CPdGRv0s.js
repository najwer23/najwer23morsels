import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{j as t}from"./iframe-DML8Yzp6.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as ee}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as te,t as ne}from"./LoaderDots-Cn_Pcnt8.js";import{n as a,t as o}from"./Button-CWrtpdUG.js";import{a as s,i as c,n as re,t as l}from"./Input-DQnflP6t.js";import{n as ie,t as u}from"./Calendar-DlXgDjBH.js";import{n as d,t as f}from"./Dialog-DoI1K4PX.js";import{t as p}from"./Grid-BTD5h6NS.js";import{t as ae}from"./Grid-bs-hbSFx.js";import{n as oe,t as m}from"./Select-Ctk2cnW0.js";import{n as se,t as ce}from"./Form-DJi2bLYK.js";import{n as h,t as g}from"./Typography-CSPBA0Tu.js";var _,v,y,b,x;function S(){return(S=e((()=>{_=`_n23mTable_1jkvz_2`,v=`_table_1jkvz_34`,y=`_loadingCell_1jkvz_58`,b=`_loadingInner_1jkvz_63`,x={n23mTable:_,table:v,loadingCell:y,loadingInner:b}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),o(),u(),f(),ce(),ae(),l(),ne(),m(),i(),g(),s(),S(),w=n(),T=({className:e,jsonSchema:t,jsonData:n,cellEdit:i,cellDelete:ne,onCellReset:o,isLoading:s=!1,style:l,tableLoadingHeight:u,...f})=>{let[ae,m]=(0,C.useState)(!1),[ce,g]=(0,C.useState)(!1),[_,v]=(0,C.useState)(0),[y,b]=(0,C.useState)(null),{onCellEdit:S,isCellEditError:T=!1,isCellEditPending:E=!1,isCellEditSuccess:D=!1,cellEditErrorMsg:O,cellEditSuccessMsg:k}=i??{},{onCellDelete:A,isCellDeleteError:j=!1,isCellDeletePending:M=!1,isCellDeleteSuccess:N=!1,cellDeleteErrorMsg:P,cellDeleteSuccessMsg:F}=ne??{},I=!!S,L=!!A,R=t.cols.filter(e=>e.cellName!==`id`),z=e=>{if(!S||Object.values(e).some(({error:e})=>e))return;let t=Object.fromEntries(Object.entries(e).map(([e,{value:t}])=>[e,t]));S(t)},B=()=>{L&&y&&g(!0)},V=()=>{A&&y&&A(y.id)},H=()=>{o&&setTimeout(()=>o(),300)},U=()=>{g(!1),H()},W=()=>{g(!1),m(!1),H()},G=()=>{m(!1),H()},K=e=>{b(e),m(!0),v(e=>e+1)};return(0,w.jsxs)(`div`,{className:[x.n23mTable,`n23mTable`,e].filter(Boolean).join(` `),...f,style:{...ee({"--table-loading-height":u}),...l},children:[I&&(0,w.jsx)(d,{open:ae,onCancel:G,widthMax:`900px`,children:(0,w.jsxs)(p,{layout:`container`,widthMin:`min(800px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,w.jsx)(h,{appearance:`light`,variant:`subheading`,tag:`h2`,style:{margin:`0 0 20px 0`},children:`Edit Cell`}),(0,w.jsxs)(se,{onSubmit:z,isError:T,isPending:E,isSuccess:D,errorMsg:O,successMsg:k,children:[(0,w.jsx)(p,{layout:`columns`,col:{smallDesktop:2},gap:{col:`20px`},children:y&&t.cols.map(e=>{let t=y[e.cellName];if(e.cellType===`date`){let n=t||e.initialValue;return(0,w.jsx)(ie,{label:e.cellText,name:e.cellName,disabled:e.disabledEdit,initialValue:n,placeholder:e.cellText,validatorOptions:e.validatorOptions},e.cellName)}if(e.cellType===`select`){let n=e.options.find(e=>e.value===String(t??``))??e.initialValue;return(0,w.jsx)(oe,{name:e.cellName,options:e.options,disabled:e.disabledEdit,initialValue:n,validatorOptions:e.validatorOptions},e.cellName)}return(0,w.jsx)(re,{label:e.cellText,name:e.cellName,type:e.cellType,step:e.cellType===`number`?.01:void 0,defaultValue:String(t??``),disabled:e.disabledEdit,placeholder:e.cellText,validatorOptions:e.validatorOptions},e.cellName)})}),(0,w.jsxs)(p,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:L?`space-between`:`flex-end`,alignItems:`right`,margin:`20px 0 0 0`,children:[L&&(0,w.jsx)(a,{type:`button`,variant:`danger`,disabled:E||M,onClick:B,children:(0,w.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`inherit`,children:`Delete`})}),(0,w.jsx)(a,{type:`submit`,variant:`primary`,disabled:E||M,children:(0,w.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`inherit`,children:`Save changes`})})]})]},_)]})}),L&&(0,w.jsx)(d,{open:ce,onCancel:N?W:U,widthMax:`900px`,children:(0,w.jsxs)(p,{layout:`container`,widthMin:`min(500px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,w.jsx)(h,{appearance:`light`,variant:`subheading`,tag:`h2`,style:{margin:`0 0 20px 0`},children:N?`Deleted`:`Are you sure?`}),!N&&(0,w.jsx)(h,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,fontWeight:400,children:`This row will be permanently deleted. This action cannot be undone.`}),j&&!N&&(0,w.jsx)(h,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,fontWeight:400,color:c.error,style:{margin:`10px 0 0 0`},children:P??`Delete failed`}),N&&(0,w.jsx)(h,{variant:`body`,tag:`p`,desktopSize:16,mobileSize:16,fontWeight:400,color:c.success,children:F??`Row deleted`}),(0,w.jsx)(p,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:N?`flex-end`:`space-between`,margin:`20px 0 0 0`,children:N?(0,w.jsx)(a,{type:`button`,variant:`success`,onClick:W,children:(0,w.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`inherit`,children:`Close`})}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a,{type:`button`,variant:`secondary`,disabled:M,onClick:U,children:(0,w.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`inherit`,children:`Cancel`})}),(0,w.jsx)(a,{type:`button`,variant:`danger`,disabled:M,onClick:V,children:(0,w.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`inherit`,children:`Yes, delete`})})]})})]})}),(0,w.jsxs)(`table`,{className:x.table,"aria-busy":s,children:[(0,w.jsx)(`thead`,{children:(0,w.jsx)(`tr`,{children:R.map(e=>(0,w.jsx)(`th`,{scope:`col`,children:(0,w.jsx)(h,{variant:`body`,tag:`span`,mobileSize:16,desktopSize:20,color:`black`,textAlign:e.thAlign??`left`,children:e.cellText})},e.cellName))})}),(0,w.jsx)(`tbody`,{children:s?(0,w.jsx)(`tr`,{children:(0,w.jsx)(`td`,{className:x.loadingCell,colSpan:Math.max(R.length,1),children:(0,w.jsx)(`div`,{className:x.loadingInner,children:(0,w.jsx)(te,{})})})}):n.rows.map(e=>(0,w.jsx)(`tr`,{children:R.map(t=>{let n=e[t.cellName];return(0,w.jsx)(`td`,{"data-clickable":I,onClick:I?()=>K(e):void 0,children:(0,w.jsx)(h,{variant:`body`,tag:`span`,fontWeight:400,mobileSize:16,desktopSize:16,color:`black`,textAlign:t.tdAlign??`left`,children:n===void 0?``:String(n)})},t.cellName)})},e.id))})]})]})},T.displayName=`Table`;try{T.displayName=`Table`,T.__docgenInfo={description:``,displayName:`Table`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Table/Table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`CSSProperties`}},jsonSchema:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonSchema`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ cols: TableColumn[]; }`}},jsonData:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonData`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ rows: TableRow[]; }`}},cellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`cellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`TableCellEdit`}},cellDelete:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`cellDelete`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`TableCellDelete`}},onCellReset:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`onCellReset`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`(() => void)`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isLoading`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},tableLoadingHeight:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`tableLoadingHeight`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`Height<string | number>`}}},tags:{}}}catch{}})))()}function D(){return(D=e((()=>{E()})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{D(),O=n(),k={onCellEdit:e=>{console.log(`Edited row:`,e)},isCellEditError:!1,isCellEditPending:!1,isCellEditSuccess:!1,cellEditErrorMsg:void 0,cellEditSuccessMsg:void 0},A={onCellDelete:e=>{console.log(`Deleted row:`,e)},isCellDeleteError:!1,isCellDeletePending:!1,isCellDeleteSuccess:!1,cellDeleteErrorMsg:void 0,cellDeleteSuccessMsg:void 0},j={title:`Table/Table`,component:T,parameters:{layout:`centered`,docs:{description:{component:'\nA table with columns defined in `jsonSchema.cols` and rows in `jsonData.rows`.\n\nEditing is optional and configured through the `cellEdit` object. Pass `cellEdit.onCellEdit` to make cells clickable and open the row editor (the `id` field is read-only); omit `cellEdit` for a read-only table. Submission status and feedback messages are controlled through `isCellEditError`, `isCellEditPending`, `isCellEditSuccess`, `cellEditErrorMsg` and `cellEditSuccessMsg`.\n\nDeleting is configured separately through the `cellDelete` object. Pass `cellDelete.onCellDelete` to add a Delete button to the editor. Clicking it opens an "Are you sure?" confirmation dialog, and `onCellDelete` is called only after confirming. The dialog stays open to show the result: `cellDeleteErrorMsg` when `isCellDeleteError` is true, or `cellDeleteSuccessMsg` with a Close button when `isCellDeleteSuccess` is true. Delete status is controlled through `isCellDeleteError`, `isCellDeletePending`, `isCellDeleteSuccess`, `cellDeleteErrorMsg` and `cellDeleteSuccessMsg`. Because the Delete button lives in the editor, `cellEdit.onCellEdit` must also be set.\n\n`onCellReset` is independent of both objects. It is called when a dialog is closed or cancelled, including the Close button after a successful delete, so the parent can reset its edit and delete queries.\n\nPass `isLoading` to replace the body rows with a loader while data is being fetched; the header row stays visible.\n'}}},args:{cellEdit:k,cellDelete:A,onCellReset:()=>{console.log(`Reset cell edit and delete queries`)}}},M=[{label:`Open`,value:`Open`},{label:`In progress`,value:`In progress`},{label:`Done`,value:`Done`}],N=[{label:`High`,value:`High`},{label:`Medium`,value:`Medium`},{label:`Low`,value:`Low`}],P=[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`,validatorOptions:[{type:`empty`}]},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`dueDate`,cellText:`Due Date`,cellType:`date`,initialValue:`2026-10-30`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:M,initialValue:M[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:N,initialValue:N[1]}],F=[{id:1,title:`Finalize pricing page copy`,owner:`Maria Kowalska`,hours:6,dueDate:`2026-10-30`,status:`In progress`,priority:`High`},{id:2,title:`Set up analytics events`,owner:`Tomasz Nowak`,hours:12,dueDate:`2026-11-02`,status:`Open`,priority:`Medium`},{id:3,title:`Record onboarding video`,owner:`Anna Wiśniewska`,hours:8,dueDate:`2026-11-05`,status:`Done`,priority:`Low`},{id:4,title:`Fix invoice PDF layout`,owner:`Piotr Zieliński`,hours:4,dueDate:`2026-11-10`,status:`In progress`,priority:`Medium`},{id:5,title:`Write release notes`,owner:`Maria Kowalska`,hours:3,dueDate:`2026-11-12`,status:`Open`,priority:`Low`}],I={args:{jsonSchema:{cols:P},jsonData:{rows:F}}},L={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`done`,cellText:`Completed`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,title:`Design`,done:!0,hours:4,cost:200},{id:2,title:`Development`,done:!1,hours:12,cost:600},{id:3,title:`Testing`,done:!0,hours:3,cost:150}]}}},R={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`name`,cellText:`Name`,cellType:`text`},{cellName:`email`,cellText:`Email`,cellType:`text`},{cellName:`role`,cellText:`Role`,cellType:`text`}]},jsonData:{rows:[{id:1,name:`Anna`,email:`anna@example.com`,role:`Admin`},{id:2,name:`Piotr`,role:`Editor`},{id:3,email:`maria@example.com`,role:`Viewer`}]}}},z={args:{jsonSchema:{cols:P},jsonData:{rows:[]}}},B={args:{jsonSchema:{cols:P},jsonData:{rows:F},style:{"--table-cell-padding":`16px`,"--table-border-color":`#b8c7d9`,"--table-header-color":`#eaf1f8`}}},V={args:{jsonSchema:{cols:P},jsonData:{rows:Array.from({length:30},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`][t%4],hours:(t+1)%8+1,dueDate:`2026-11-${String(t%28+1).padStart(2,`0`)}`,status:M[t%M.length].value,priority:N[t%N.length].value}))}}},H={decorators:[e=>(0,O.jsx)(`div`,{style:{width:`280px`},children:(0,O.jsx)(e,{})})],args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:M,initialValue:M[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:N,initialValue:N[1]}]},jsonData:{rows:Array.from({length:5},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`,`Jan`][t],hours:t+2,status:M[t%M.length].value,priority:N[t%N.length].value}))}}},U={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellEdit:void 0,cellDelete:void 0,onCellReset:void 0},parameters:{docs:{description:{story:"Without `cellEdit` the table is read-only: cells are not clickable and no dialogs are rendered."}}}},W={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellDelete:void 0},parameters:{docs:{description:{story:"Without `cellDelete` the edit dialog has no Delete button and Save stays aligned to the right."}}}},G={args:{jsonSchema:{cols:P},jsonData:{rows:F}},parameters:{docs:{description:{story:'Click a cell, then Delete. An "Are you sure?" dialog opens. Cancel closes only the confirmation; "Yes, delete" calls `cellDelete.onCellDelete` with the row id and leaves the dialog open so the parent can show the result.'}}}},K={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellDelete:{...A,isCellDeletePending:!0}},parameters:{docs:{description:{story:"While `isCellDeletePending` is true, the Delete and Save buttons in the editor and both buttons in the confirmation dialog are disabled."}}}},q={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellDelete:{...A,isCellDeleteError:!0,cellDeleteErrorMsg:`Could not delete this row. Try again.`}},parameters:{docs:{description:{story:"When `isCellDeleteError` is true, the confirmation dialog stays open and shows `cellDeleteErrorMsg` so the user can retry or cancel."}}}},J={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellDelete:{...A,isCellDeleteSuccess:!0,cellDeleteSuccessMsg:`Row deleted successfully`}},parameters:{docs:{description:{story:"When `isCellDeleteSuccess` is true, the confirmation dialog shows `cellDeleteSuccessMsg` in place of the error message, with a single Close button. Close (or Esc) closes both dialogs and calls `onCellReset` so the parent can reset the delete query."}}}},Y={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellEdit:{...k,isCellEditError:!0,cellEditErrorMsg:`Could not save changes.`}},parameters:{docs:{description:{story:`Edit state is independent of delete state: an edit error does not affect the delete dialog.`}}}},X={args:{jsonSchema:{cols:P},jsonData:{rows:F},cellEdit:{...k,isCellEditSuccess:!0,cellEditSuccessMsg:`Changes saved`}},parameters:{docs:{description:{story:"When `isCellEditSuccess` is true, the edit form shows `cellEditSuccessMsg`. Delete state is unaffected."}}}},Z={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`}]},jsonData:{rows:[{id:1,title:`Design`,owner:`Anna`},{id:2,title:`Development`,owner:`Piotr`}]}},parameters:{docs:{description:{story:'Only `text` columns. Click a cell: every field renders as `type="text"`, prefilled from the row, and `id` is disabled.'}}}},Q={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,hours:4,cost:200.5},{id:2,hours:12,cost:600},{id:3,hours:0,cost:0}]}},parameters:{docs:{description:{story:'Only `number` columns. Click a cell: fields render as `type="number"` (up/down arrows, letters are rejected). The `0` row should show `0`, not an empty input.'}}}},$={args:{jsonSchema:{cols:P},jsonData:{rows:F},isLoading:!0,tableLoadingHeight:`500px`},parameters:{docs:{description:{story:"While `isLoading` is true, the headers stay visible and the body shows a single row with `LoaderDots` spanning all columns. Rows are not rendered, so nothing can be clicked or edited until loading finishes."}}}},le=[`Default`,`NumbersAndBooleans`,`MissingCells`,`Empty`,`CustomStyle`,`ManyRows`,`Narrow`,`ReadOnly`,`EditWithoutDelete`,`DeleteConfirmation`,`DeletePending`,`DeleteError`,`DeleteSuccess`,`EditError`,`EditSuccess`,`TextInputs`,`NumberInputs`,`Loading`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'title',
        cellText: 'Task',
        cellType: 'text'
      }, {
        cellName: 'done',
        cellText: 'Completed',
        cellType: 'text'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }, {
        cellName: 'cost',
        cellText: 'Cost',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        title: 'Design',
        done: true,
        hours: 4,
        cost: 200
      }, {
        id: 2,
        title: 'Development',
        done: false,
        hours: 12,
        cost: 600
      }, {
        id: 3,
        title: 'Testing',
        done: true,
        hours: 3,
        cost: 150
      }]
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'name',
        cellText: 'Name',
        cellType: 'text'
      }, {
        cellName: 'email',
        cellText: 'Email',
        cellType: 'text'
      }, {
        cellName: 'role',
        cellText: 'Role',
        cellType: 'text'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        name: 'Anna',
        email: 'anna@example.com',
        role: 'Admin'
      }, {
        id: 2,
        name: 'Piotr',
        role: 'Editor'
      }, {
        id: 3,
        email: 'maria@example.com',
        role: 'Viewer'
      }]
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: []
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    style: {
      '--table-cell-padding': '16px',
      '--table-border-color': '#b8c7d9',
      '--table-header-color': '#eaf1f8'
    } as React.CSSProperties
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: Array.from({
        length: 30
      }, (_, index) => ({
        id: index + 1,
        title: \`Task \${index + 1}\`,
        owner: ['Anna', 'Piotr', 'Maria', 'Tomasz'][index % 4],
        hours: (index + 1) % 8 + 1,
        dueDate: \`2026-11-\${String(index % 28 + 1).padStart(2, '0')}\`,
        status: statusOptions[index % statusOptions.length].value,
        priority: priorityOptions[index % priorityOptions.length].value
      }))
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '280px'
  }}>
        <Story />
      </div>],
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'title',
        cellText: 'Task',
        cellType: 'text'
      }, {
        cellName: 'owner',
        cellText: 'Owner',
        cellType: 'text'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        cellType: 'number'
      }, {
        cellName: 'status',
        cellText: 'Status',
        cellType: 'select',
        options: statusOptions,
        initialValue: statusOptions[0]
      }, {
        cellName: 'priority',
        cellText: 'Priority',
        cellType: 'select',
        options: priorityOptions,
        initialValue: priorityOptions[1]
      }]
    },
    jsonData: {
      rows: Array.from({
        length: 5
      }, (_, index) => ({
        id: index + 1,
        title: \`Task \${index + 1}\`,
        owner: ['Anna', 'Piotr', 'Maria', 'Tomasz', 'Jan'][index],
        hours: index + 2,
        status: statusOptions[index % statusOptions.length].value,
        priority: priorityOptions[index % priorityOptions.length].value
      }))
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellEdit: undefined,
    cellDelete: undefined,
    onCellReset: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`cellEdit\` the table is read-only: cells are not clickable and no dialogs are rendered.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellDelete: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`cellDelete\` the edit dialog has no Delete button and Save stays aligned to the right.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Click a cell, then Delete. An "Are you sure?" dialog opens. Cancel closes only the confirmation; "Yes, delete" calls \`cellDelete.onCellDelete\` with the row id and leaves the dialog open so the parent can show the result.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellDelete: {
      ...defaultCellDelete,
      isCellDeletePending: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'While \`isCellDeletePending\` is true, the Delete and Save buttons in the editor and both buttons in the confirmation dialog are disabled.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellDelete: {
      ...defaultCellDelete,
      isCellDeleteError: true,
      cellDeleteErrorMsg: 'Could not delete this row. Try again.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`isCellDeleteError\` is true, the confirmation dialog stays open and shows \`cellDeleteErrorMsg\` so the user can retry or cancel.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellDelete: {
      ...defaultCellDelete,
      isCellDeleteSuccess: true,
      cellDeleteSuccessMsg: 'Row deleted successfully'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`isCellDeleteSuccess\` is true, the confirmation dialog shows \`cellDeleteSuccessMsg\` in place of the error message, with a single Close button. Close (or Esc) closes both dialogs and calls \`onCellReset\` so the parent can reset the delete query.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellEdit: {
      ...defaultCellEdit,
      isCellEditError: true,
      cellEditErrorMsg: 'Could not save changes.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Edit state is independent of delete state: an edit error does not affect the delete dialog.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    cellEdit: {
      ...defaultCellEdit,
      isCellEditSuccess: true,
      cellEditSuccessMsg: 'Changes saved'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`isCellEditSuccess\` is true, the edit form shows \`cellEditSuccessMsg\`. Delete state is unaffected.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'title',
        cellText: 'Task',
        cellType: 'text'
      }, {
        cellName: 'owner',
        cellText: 'Owner',
        cellType: 'text'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        title: 'Design',
        owner: 'Anna'
      }, {
        id: 2,
        title: 'Development',
        owner: 'Piotr'
      }]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Only \`text\` columns. Click a cell: every field renders as \`type="text"\`, prefilled from the row, and \`id\` is disabled.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: [{
        cellName: 'id',
        cellText: 'ID',
        cellType: 'text'
      }, {
        cellName: 'hours',
        cellText: 'Hours',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }, {
        cellName: 'cost',
        cellText: 'Cost',
        cellType: 'number',
        thAlign: 'right',
        tdAlign: 'right'
      }]
    },
    jsonData: {
      rows: [{
        id: 1,
        hours: 4,
        cost: 200.5
      }, {
        id: 2,
        hours: 12,
        cost: 600
      }, {
        id: 3,
        hours: 0,
        cost: 0
      }]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Only \`number\` columns. Click a cell: fields render as \`type="number"\` (up/down arrows, letters are rejected). The \`0\` row should show \`0\`, not an empty input.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    isLoading: true,
    tableLoadingHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'While \`isLoading\` is true, the headers stay visible and the body shows a single row with \`LoaderDots\` spanning all columns. Rows are not rendered, so nothing can be clicked or edited until loading finishes.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}}})))()}ue();export{B as CustomStyle,I as Default,G as DeleteConfirmation,q as DeleteError,K as DeletePending,J as DeleteSuccess,Y as EditError,X as EditSuccess,W as EditWithoutDelete,z as Empty,$ as Loading,V as ManyRows,R as MissingCells,H as Narrow,Q as NumberInputs,L as NumbersAndBooleans,U as ReadOnly,Z as TextInputs,le as __namedExportsOrder,j as default};