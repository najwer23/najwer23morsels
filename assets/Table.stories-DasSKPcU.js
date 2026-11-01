import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-CCyddxHq.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as ee}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as r,t as i}from"./TextBox-D040vOwf.js";import{n as a,t as o}from"./Button-C1R7ym_-.js";import{n as te,t as s}from"./Input-3XTnc9q3.js";import{n as ne,t as c}from"./Calendar-cBifENt9.js";import{t as l}from"./Grid-C22EZTts.js";import{t as u}from"./Grid-Bv1_RPqA.js";import{n as d,t as f}from"./Dialog-CgNnoxvH.js";import{n as p,t as m}from"./Form-CBa3T0Ti.js";import{n as re,t as h}from"./Select-DSqJHs5t.js";import{n as g,t as _}from"./Typography-CkSds3lu.js";var v,y,b;function x(){return(x=e((()=>{v=`_n23mTable_jvgac_2`,y=`_table_jvgac_34`,b={n23mTable:v,table:y}})))()}var S,C,w;function T(){return(T=e((()=>{S=t(),o(),c(),f(),m(),u(),s(),h(),i(),_(),x(),C=n(),w=({className:e,jsonSchema:t,jsonData:n,cellEdit:i,cellDelete:o,onCellReset:s,style:c,...u})=>{let[f,m]=(0,S.useState)(!1),[h,_]=(0,S.useState)(!1),[v,y]=(0,S.useState)(0),[x,w]=(0,S.useState)(null),{onCellEdit:T,isCellEditError:E=!1,isCellEditPending:D=!1,isCellEditSuccess:O=!1,cellEditErrorMsg:k,cellEditSuccessMsg:A}=i??{},{onCellDelete:j,isCellDeleteError:M=!1,isCellDeletePending:N=!1,isCellDeleteSuccess:P=!1,cellDeleteErrorMsg:F,cellDeleteSuccessMsg:I}=o??{},L=!!T,R=!!j,z=t.cols.filter(e=>e.cellName!==`id`),B=e=>{if(!T||Object.values(e).some(({error:e})=>e))return;let t=Object.fromEntries(Object.entries(e).map(([e,{value:t}])=>[e,t]));T(t)},V=()=>{R&&x&&_(!0)},H=()=>{j&&x&&j(x.id)},U=()=>{_(!1),s?.()},W=()=>{_(!1),m(!1),s?.()},G=()=>{m(!1),s?.()},K=e=>{w(e),m(!0),y(e=>e+1)};return(0,C.jsxs)(`div`,{className:[b.n23mTable,`n23mTable`,e].filter(Boolean).join(` `),...u,style:{...ee({}),...c},children:[L&&(0,C.jsx)(d,{open:f,onCancel:G,widthMax:`900px`,children:(0,C.jsxs)(l,{layout:`container`,widthMin:`min(800px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,C.jsx)(g,{appearance:`light`,variant:`subheading`,style:{margin:`0 0 20px 0`},children:`Edit Cell`}),(0,C.jsxs)(p,{onSubmit:B,isError:E,isPending:D,isSuccess:O,errorMsg:k,successMsg:A,children:[(0,C.jsx)(l,{layout:`columns`,col:{smallDesktop:2},gap:{col:`20px`},children:x&&t.cols.map(e=>{let t=e.cellName===`id`,n=x[e.cellName];if(e.cellType===`date`){let t=n||e.initialValue;return(0,C.jsx)(ne,{label:e.cellText,name:e.cellName,initialValue:t,placeholder:e.cellText},e.cellName)}if(e.cellType===`select`){let t=e.options.find(e=>e.value===String(n??``))??e.initialValue;return(0,C.jsx)(re,{name:e.cellName,options:e.options,initialValue:t},e.cellName)}return(0,C.jsx)(te,{label:e.cellText,name:e.cellName,type:e.cellType,step:e.cellType===`number`?.01:void 0,defaultValue:String(n??``),disabled:t,placeholder:e.cellText},e.cellName)})}),(0,C.jsxs)(l,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:R?`space-between`:`flex-end`,alignItems:`right`,margin:`20px 0 0 0`,children:[R&&(0,C.jsx)(a,{type:`button`,height:`40px`,width:`auto`,padding:`0 10px`,disabled:D||N,backgroundColor:`red`,backgroundColorDisabled:`grey`,onClick:V,children:(0,C.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Delete`})}),(0,C.jsx)(a,{type:`submit`,height:`40px`,width:`auto`,padding:`0 10px`,disabled:D||N,backgroundColor:`#4BB543`,backgroundColorDisabled:`grey`,children:(0,C.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Save`})})]})]},v)]})}),R&&(0,C.jsx)(d,{open:h,onCancel:P?W:U,widthMax:`450px`,children:(0,C.jsxs)(l,{layout:`container`,widthMin:`min(400px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,C.jsx)(g,{appearance:`light`,variant:`subheading`,style:{margin:`0 0 10px 0`},children:P?`Deleted`:`Are you sure?`}),!P&&(0,C.jsx)(r,{tag:`p`,desktopSize:16,mobileSize:16,fontWeight:400,color:`black`,children:`This row will be permanently deleted. This action cannot be undone.`}),M&&!P&&(0,C.jsx)(r,{tag:`p`,desktopSize:16,mobileSize:16,fontWeight:400,color:`red`,style:{margin:`10px 0 0 0`},children:F??`Delete failed`}),P&&(0,C.jsx)(r,{tag:`p`,desktopSize:16,mobileSize:16,fontWeight:400,color:`#4BB543`,children:I??`Row deleted`}),(0,C.jsx)(l,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:P?`flex-end`:`space-between`,margin:`20px 0 0 0`,children:P?(0,C.jsx)(a,{type:`button`,height:`40px`,width:`auto`,padding:`0 10px`,backgroundColor:`#4BB543`,onClick:W,children:(0,C.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Close`})}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{type:`button`,height:`40px`,width:`auto`,padding:`0 10px`,disabled:N,backgroundColor:`grey`,backgroundColorDisabled:`grey`,onClick:U,children:(0,C.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Cancel`})}),(0,C.jsx)(a,{type:`button`,height:`40px`,width:`auto`,padding:`0 10px`,disabled:N,backgroundColor:`red`,backgroundColorDisabled:`grey`,onClick:H,children:(0,C.jsx)(r,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Yes, delete`})})]})})]})}),(0,C.jsxs)(`table`,{className:b.table,children:[(0,C.jsx)(`thead`,{children:(0,C.jsx)(`tr`,{children:z.map(e=>(0,C.jsx)(`th`,{scope:`col`,children:(0,C.jsx)(r,{mobileSize:16,desktopSize:20,color:`black`,textAlign:e.thAlign??`left`,children:e.cellText})},e.cellName))})}),(0,C.jsx)(`tbody`,{children:n.rows.map(e=>(0,C.jsx)(`tr`,{children:z.map(t=>{let n=e[t.cellName];return(0,C.jsx)(`td`,{"data-clickable":L,onClick:L?()=>K(e):void 0,children:(0,C.jsx)(r,{fontWeight:400,mobileSize:16,desktopSize:16,color:`black`,textAlign:t.tdAlign??`left`,children:n===void 0?``:String(n)})},t.cellName)})},e.id))})]})]})},w.displayName=`Table`;try{w.displayName=`Table`,w.__docgenInfo={description:``,displayName:`Table`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Table/Table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`CSSProperties`}},jsonSchema:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonSchema`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ cols: TableColumn[]; }`}},jsonData:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonData`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ rows: TableRow[]; }`}},cellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`cellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`TableCellEdit`}},cellDelete:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`cellDelete`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`TableCellDelete`}},onCellReset:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`onCellReset`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}function E(){return(E=e((()=>{T()})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{E(),D=n(),O={onCellEdit:e=>{console.log(`Edited row:`,e)},isCellEditError:!1,isCellEditPending:!1,isCellEditSuccess:!1,cellEditErrorMsg:void 0,cellEditSuccessMsg:void 0},k={onCellDelete:e=>{console.log(`Deleted row:`,e)},isCellDeleteError:!1,isCellDeletePending:!1,isCellDeleteSuccess:!1,cellDeleteErrorMsg:void 0,cellDeleteSuccessMsg:void 0},A={title:`Table/Table`,component:w,parameters:{layout:`centered`,docs:{description:{component:'\nA table with columns defined in `jsonSchema.cols` and rows in `jsonData.rows`.\n\nEditing is optional and configured through the `cellEdit` object. Pass `cellEdit.onCellEdit` to make cells clickable and open the row editor (the `id` field is read-only); omit `cellEdit` for a read-only table. Submission status and feedback messages are controlled through `isCellEditError`, `isCellEditPending`, `isCellEditSuccess`, `cellEditErrorMsg` and `cellEditSuccessMsg`.\n\nDeleting is configured separately through the `cellDelete` object. Pass `cellDelete.onCellDelete` to add a Delete button to the editor. Clicking it opens an "Are you sure?" confirmation dialog, and `onCellDelete` is called only after confirming. The dialog stays open to show the result: `cellDeleteErrorMsg` when `isCellDeleteError` is true, or `cellDeleteSuccessMsg` with a Close button when `isCellDeleteSuccess` is true. Delete status is controlled through `isCellDeleteError`, `isCellDeletePending`, `isCellDeleteSuccess`, `cellDeleteErrorMsg` and `cellDeleteSuccessMsg`. Because the Delete button lives in the editor, `cellEdit.onCellEdit` must also be set.\n\n`onCellReset` is independent of both objects. It is called when a dialog is closed or cancelled, including the Close button after a successful delete, so the parent can reset its edit and delete queries.\n'}}},args:{cellEdit:O,cellDelete:k,onCellReset:()=>{console.log(`Reset cell edit and delete queries`)}}},j=[{label:`Open`,value:`Open`},{label:`In progress`,value:`In progress`},{label:`Done`,value:`Done`}],M=[{label:`High`,value:`High`},{label:`Medium`,value:`Medium`},{label:`Low`,value:`Low`}],N=[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`dueDate`,cellText:`Due Date`,cellType:`date`,initialValue:`2026-10-30`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:j,initialValue:j[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:M,initialValue:M[1]}],P=[{id:1,title:`Finalize pricing page copy`,owner:`Maria Kowalska`,hours:6,dueDate:`2026-10-30`,status:`In progress`,priority:`High`},{id:2,title:`Set up analytics events`,owner:`Tomasz Nowak`,hours:12,dueDate:`2026-11-02`,status:`Open`,priority:`Medium`},{id:3,title:`Record onboarding video`,owner:`Anna Wiśniewska`,hours:8,dueDate:`2026-11-05`,status:`Done`,priority:`Low`},{id:4,title:`Fix invoice PDF layout`,owner:`Piotr Zieliński`,hours:4,dueDate:`2026-11-10`,status:`In progress`,priority:`Medium`},{id:5,title:`Write release notes`,owner:`Maria Kowalska`,hours:3,dueDate:`2026-11-12`,status:`Open`,priority:`Low`}],F={args:{jsonSchema:{cols:N},jsonData:{rows:P}}},I={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`done`,cellText:`Completed`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,title:`Design`,done:!0,hours:4,cost:200},{id:2,title:`Development`,done:!1,hours:12,cost:600},{id:3,title:`Testing`,done:!0,hours:3,cost:150}]}}},L={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`name`,cellText:`Name`,cellType:`text`},{cellName:`email`,cellText:`Email`,cellType:`text`},{cellName:`role`,cellText:`Role`,cellType:`text`}]},jsonData:{rows:[{id:1,name:`Anna`,email:`anna@example.com`,role:`Admin`},{id:2,name:`Piotr`,role:`Editor`},{id:3,email:`maria@example.com`,role:`Viewer`}]}}},R={args:{jsonSchema:{cols:N},jsonData:{rows:[]}}},z={args:{jsonSchema:{cols:N},jsonData:{rows:P},style:{"--table-cell-padding":`16px`,"--table-border-color":`#b8c7d9`,"--table-header-color":`#eaf1f8`}}},B={args:{jsonSchema:{cols:N},jsonData:{rows:Array.from({length:30},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`][t%4],hours:(t+1)%8+1,dueDate:`2026-11-${String(t%28+1).padStart(2,`0`)}`,status:j[t%j.length].value,priority:M[t%M.length].value}))}}},V={decorators:[e=>(0,D.jsx)(`div`,{style:{width:`280px`},children:(0,D.jsx)(e,{})})],args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:j,initialValue:j[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:M,initialValue:M[1]}]},jsonData:{rows:Array.from({length:5},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`,`Jan`][t],hours:t+2,status:j[t%j.length].value,priority:M[t%M.length].value}))}}},H={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellEdit:void 0,cellDelete:void 0,onCellReset:void 0},parameters:{docs:{description:{story:"Without `cellEdit` the table is read-only: cells are not clickable and no dialogs are rendered."}}}},U={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellDelete:void 0},parameters:{docs:{description:{story:"Without `cellDelete` the edit dialog has no Delete button and Save stays aligned to the right."}}}},W={args:{jsonSchema:{cols:N},jsonData:{rows:P}},parameters:{docs:{description:{story:'Click a cell, then Delete. An "Are you sure?" dialog opens. Cancel closes only the confirmation; "Yes, delete" calls `cellDelete.onCellDelete` with the row id and leaves the dialog open so the parent can show the result.'}}}},G={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellDelete:{...k,isCellDeletePending:!0}},parameters:{docs:{description:{story:"While `isCellDeletePending` is true, the Delete and Save buttons in the editor and both buttons in the confirmation dialog are disabled."}}}},K={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellDelete:{...k,isCellDeleteError:!0,cellDeleteErrorMsg:`Could not delete this row. Try again.`}},parameters:{docs:{description:{story:"When `isCellDeleteError` is true, the confirmation dialog stays open and shows `cellDeleteErrorMsg` so the user can retry or cancel."}}}},q={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellDelete:{...k,isCellDeleteSuccess:!0,cellDeleteSuccessMsg:`Row deleted successfully`}},parameters:{docs:{description:{story:"When `isCellDeleteSuccess` is true, the confirmation dialog shows `cellDeleteSuccessMsg` in place of the error message, with a single Close button. Close (or Esc) closes both dialogs and calls `onCellReset` so the parent can reset the delete query."}}}},J={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellEdit:{...O,isCellEditError:!0,cellEditErrorMsg:`Could not save changes.`}},parameters:{docs:{description:{story:`Edit state is independent of delete state: an edit error does not affect the delete dialog.`}}}},Y={args:{jsonSchema:{cols:N},jsonData:{rows:P},cellEdit:{...O,isCellEditSuccess:!0,cellEditSuccessMsg:`Changes saved`}},parameters:{docs:{description:{story:"When `isCellEditSuccess` is true, the edit form shows `cellEditSuccessMsg`. Delete state is unaffected."}}}},X={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`}]},jsonData:{rows:[{id:1,title:`Design`,owner:`Anna`},{id:2,title:`Development`,owner:`Piotr`}]}},parameters:{docs:{description:{story:'Only `text` columns. Click a cell: every field renders as `type="text"`, prefilled from the row, and `id` is disabled.'}}}},Z={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,hours:4,cost:200.5},{id:2,hours:12,cost:600},{id:3,hours:0,cost:0}]}},parameters:{docs:{description:{story:'Only `number` columns. Click a cell: fields render as `type="number"` (up/down arrows, letters are rejected). The `0` row should show `0`, not an empty input.'}}}},Q=[`Default`,`NumbersAndBooleans`,`MissingCells`,`Empty`,`CustomStyle`,`ManyRows`,`Narrow`,`ReadOnly`,`EditWithoutDelete`,`DeleteConfirmation`,`DeletePending`,`DeleteError`,`DeleteSuccess`,`EditError`,`EditSuccess`,`TextInputs`,`NumberInputs`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: []
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{z as CustomStyle,F as Default,W as DeleteConfirmation,K as DeleteError,G as DeletePending,q as DeleteSuccess,J as EditError,Y as EditSuccess,U as EditWithoutDelete,R as Empty,B as ManyRows,L as MissingCells,V as Narrow,Z as NumberInputs,I as NumbersAndBooleans,H as ReadOnly,X as TextInputs,Q as __namedExportsOrder,A as default};