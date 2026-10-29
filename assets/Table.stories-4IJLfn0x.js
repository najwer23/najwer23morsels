import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BVFc4LDi.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./getCssVariableStyle-B-f6QJ1n.js";import{n as i,t as a}from"./TextBox-D040vOwf.js";import{n as o,t as s}from"./Button-dPmrmuM6.js";import{n as c,t as l}from"./Input-Cb4DwZS6.js";import{n as u,t as d}from"./Calendar-R--Kz0FN.js";import{t as f}from"./Grid-Bb-RNUf-.js";import{t as p}from"./Grid-BU2xO1c0.js";import{n as m,t as h}from"./Dialog-C2FP4x8b.js";import{n as g,t as _}from"./Form-CBa3T0Ti.js";import{n as v,t as y}from"./Select-T7k1dmBs.js";import{n as b,t as x}from"./Typography-BzF8TJPw.js";var S,C,w;function T(){return(T=e((()=>{S=`_n23mTable_xsv66_2`,C=`_table_xsv66_30`,w={n23mTable:S,table:C}})))()}var E,D,O;function k(){return(k=e((()=>{E=t(),s(),d(),h(),_(),p(),l(),y(),a(),x(),T(),D=n(),O=({className:e,jsonSchema:t,jsonData:n,handleCellEdit:a,handelCellDel:s,resetQueryCellEdit:l,isErrorCellEdit:d=!1,isPendingCellEdit:p=!1,isSuccessCellEdit:h=!1,errorMsgCellEdit:_,successMsgCellEdit:y,style:x,...S})=>{let[C,T]=(0,E.useState)(!1),[O,k]=(0,E.useState)(0),[A,j]=(0,E.useState)(null),M=!!a,N=t.cols.filter(e=>e.cellName!==`id`),P=e=>{a&&(Object.values(e).some(({error:e})=>e)||a(Object.fromEntries(Object.entries(e).map(([e,{value:t}])=>[e,t]))))},F=()=>{s&&A&&(s(A.id),T(!1))},I=()=>{T(!1),l?.()},L=e=>{j(e),T(!0),k(e=>e+1)};return(0,D.jsxs)(`div`,{className:[w.n23mTable,`n23mTable`,e].filter(Boolean).join(` `),...S,style:{...r({}),...x},children:[M&&(0,D.jsx)(m,{open:C,onCancel:I,widthMax:`900px`,children:(0,D.jsxs)(f,{layout:`container`,widthMin:`min(800px, calc(100vw - 25px))`,padding:`0px 30px 30px 30px`,margin:`auto`,children:[(0,D.jsx)(b,{appearance:`light`,variant:`subheading`,style:{margin:`0 0 20px 0`},children:`Edit Cell`}),(0,D.jsxs)(g,{onSubmit:P,isError:d,isPending:p,isSuccess:h,errorMsg:_,successMsg:y,children:[(0,D.jsx)(f,{layout:`columns`,col:{smallDesktop:2},gap:{col:`20px`},children:A&&t.cols.map(e=>{let t=e.cellName===`id`,n=A[e.cellName];if(e.cellType===`date`){let t=n||e.initialValue;return(0,D.jsx)(u,{label:e.cellText,name:e.cellName,initialValue:t,placeholder:e.cellText},e.cellName)}if(e.cellType===`select`){let t=e.options.find(e=>e.value===String(n??``))??e.initialValue;return(0,D.jsx)(v,{name:e.cellName,options:e.options,initialValue:t},e.cellName)}return(0,D.jsx)(c,{label:e.cellText,name:e.cellName,type:e.cellType,step:e.cellType===`number`?.01:void 0,defaultValue:String(n??``),disabled:t,placeholder:e.cellText},e.cellName)})}),(0,D.jsxs)(f,{layout:`flex`,widthMax:`100%`,padding:`0`,justifyContent:s?`space-between`:`flex-end`,alignItems:`right`,margin:`20px 0 0 0`,children:[s&&(0,D.jsx)(o,{type:`button`,height:`40px`,width:`80px`,padding:0,disabled:p,backgroundColor:`red`,backgroundColorDisabled:`grey`,onClick:F,children:(0,D.jsx)(i,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Delete`})}),(0,D.jsx)(o,{type:`submit`,height:`40px`,width:`80px`,padding:0,disabled:p,backgroundColor:`#4BB543`,backgroundColorDisabled:`grey`,children:(0,D.jsx)(i,{tag:`span`,desktopSize:16,mobileSize:16,fontWeight:400,color:`white`,children:`Save`})})]})]},O)]})}),(0,D.jsxs)(`table`,{className:w.table,children:[(0,D.jsx)(`thead`,{children:(0,D.jsx)(`tr`,{children:N.map(e=>(0,D.jsx)(`th`,{scope:`col`,children:(0,D.jsx)(i,{mobileSize:16,desktopSize:20,color:`black`,textAlign:e.thAlign??`left`,children:e.cellText})},e.cellName))})}),(0,D.jsx)(`tbody`,{children:n.rows.map(e=>(0,D.jsx)(`tr`,{children:N.map(t=>{let n=e[t.cellName];return(0,D.jsx)(`td`,{"data-clickable":M,onClick:M?()=>L(e):void 0,children:(0,D.jsx)(i,{fontWeight:400,mobileSize:16,desktopSize:16,color:`black`,textAlign:t.tdAlign??`left`,children:n===void 0?``:String(n)})},t.cellName)})},e.id))})]})]})},O.displayName=`Table`;try{O.displayName=`Table`,O.__docgenInfo={description:``,displayName:`Table`,filePath:`/Users/mnajwer/Documents/GIT/najwer23morsels/src/stories/Table/Table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`style`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`CSSProperties`}},jsonSchema:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonSchema`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ cols: TableColumn[]; }`}},jsonData:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`jsonData`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!0,tags:{},type:{name:`{ rows: TableRow[]; }`}},handleCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`handleCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`((cell: Record<string, string>) => void)`}},resetQueryCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`resetQueryCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`(() => void)`}},handelCellDel:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`handelCellDel`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`((cell: string | number) => void)`}},isErrorCellEdit:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isErrorCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},isPendingCellEdit:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isPendingCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},isSuccessCellEdit:{defaultValue:{value:`false`},declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`isSuccessCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},errorMsgCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`errorMsgCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`string | null`}},successMsgCellEdit:{defaultValue:null,declarations:[{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`}],description:``,name:`successMsgCellEdit`,parent:{fileName:`najwer23morsels/src/stories/Table/Table.tsx`,name:`TableProps`},required:!1,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})))()}function A(){return(A=e((()=>{k()})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{A(),j=n(),M={title:`Table/Table`,component:O,parameters:{layout:`centered`,docs:{description:{component:"\nA table with columns defined in `jsonSchema.cols` and rows in `jsonData.rows`.\n\nEditing is optional. Pass `handleCellEdit` to make cells clickable and open the row editor (the `id` field is read-only); omit it for a read-only table. Pass `handelCellDel` to add a Delete button to the editor. Submission status and feedback messages are controlled through props.\n"}}},args:{handleCellEdit:e=>{console.log(`Edited row:`,e)},resetQueryCellEdit:()=>{console.log(`Reset cell edit query`)},handelCellDel:e=>{console.log(`Deleted row:`,e)},isErrorCellEdit:!1,isPendingCellEdit:!1,isSuccessCellEdit:!1,errorMsgCellEdit:void 0,successMsgCellEdit:void 0}},N=[{label:`Open`,value:`Open`},{label:`In progress`,value:`In progress`},{label:`Done`,value:`Done`}],P=[{label:`High`,value:`High`},{label:`Medium`,value:`Medium`},{label:`Low`,value:`Low`}],F=[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`dueDate`,cellText:`Due Date`,cellType:`date`,initialValue:`2026-10-30`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:N,initialValue:N[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:P,initialValue:P[1]}],I=[{id:1,title:`Finalize pricing page copy`,owner:`Maria Kowalska`,hours:6,dueDate:`2026-10-30`,status:`In progress`,priority:`High`},{id:2,title:`Set up analytics events`,owner:`Tomasz Nowak`,hours:12,dueDate:`2026-11-02`,status:`Open`,priority:`Medium`},{id:3,title:`Record onboarding video`,owner:`Anna Wiśniewska`,hours:8,dueDate:`2026-11-05`,status:`Done`,priority:`Low`},{id:4,title:`Fix invoice PDF layout`,owner:`Piotr Zieliński`,hours:4,dueDate:`2026-11-10`,status:`In progress`,priority:`Medium`},{id:5,title:`Write release notes`,owner:`Maria Kowalska`,hours:3,dueDate:`2026-11-12`,status:`Open`,priority:`Low`}],L={args:{jsonSchema:{cols:F},jsonData:{rows:I}}},R={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`done`,cellText:`Completed`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,title:`Design`,done:!0,hours:4,cost:200},{id:2,title:`Development`,done:!1,hours:12,cost:600},{id:3,title:`Testing`,done:!0,hours:3,cost:150}]}}},z={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`name`,cellText:`Name`,cellType:`text`},{cellName:`email`,cellText:`Email`,cellType:`text`},{cellName:`role`,cellText:`Role`,cellType:`text`}]},jsonData:{rows:[{id:1,name:`Anna`,email:`anna@example.com`,role:`Admin`},{id:2,name:`Piotr`,role:`Editor`},{id:3,email:`maria@example.com`,role:`Viewer`}]}}},B={args:{jsonSchema:{cols:F},jsonData:{rows:[]}}},V={args:{jsonSchema:{cols:F},jsonData:{rows:I},style:{"--table-cell-padding":`16px`,"--table-border-color":`#b8c7d9`,"--table-header-color":`#eaf1f8`}}},H={args:{jsonSchema:{cols:F},jsonData:{rows:Array.from({length:30},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`][t%4],hours:(t+1)%8+1,dueDate:`2026-11-${String(t%28+1).padStart(2,`0`)}`,status:N[t%N.length].value,priority:P[t%P.length].value}))}}},U={decorators:[e=>(0,j.jsx)(`div`,{style:{width:`280px`},children:(0,j.jsx)(e,{})})],args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`},{cellName:`status`,cellText:`Status`,cellType:`select`,options:N,initialValue:N[0]},{cellName:`priority`,cellText:`Priority`,cellType:`select`,options:P,initialValue:P[1]}]},jsonData:{rows:Array.from({length:5},(e,t)=>({id:t+1,title:`Task ${t+1}`,owner:[`Anna`,`Piotr`,`Maria`,`Tomasz`,`Jan`][t],hours:t+2,status:N[t%N.length].value,priority:P[t%P.length].value}))}}},W={args:{jsonSchema:{cols:F},jsonData:{rows:I},handleCellEdit:void 0,resetQueryCellEdit:void 0,handelCellDel:void 0},parameters:{docs:{description:{story:"Without `handleCellEdit` the table is read-only: cells are not clickable and no edit dialog is rendered."}}}},G={args:{jsonSchema:{cols:F},jsonData:{rows:I},handelCellDel:void 0},parameters:{docs:{description:{story:"Without `handelCellDel` the edit dialog has no Delete button and Save stays aligned to the right."}}}},K={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`title`,cellText:`Task`,cellType:`text`},{cellName:`owner`,cellText:`Owner`,cellType:`text`}]},jsonData:{rows:[{id:1,title:`Design`,owner:`Anna`},{id:2,title:`Development`,owner:`Piotr`}]}},parameters:{docs:{description:{story:'Only `text` columns. Click a cell: every field renders as `type="text"`, prefilled from the row, and `id` is disabled.'}}}},q={args:{jsonSchema:{cols:[{cellName:`id`,cellText:`ID`,cellType:`text`},{cellName:`hours`,cellText:`Hours`,cellType:`number`,thAlign:`right`,tdAlign:`right`},{cellName:`cost`,cellText:`Cost`,cellType:`number`,thAlign:`right`,tdAlign:`right`}]},jsonData:{rows:[{id:1,hours:4,cost:200.5},{id:2,hours:12,cost:600},{id:3,hours:0,cost:0}]}},parameters:{docs:{description:{story:'Only `number` columns. Click a cell: fields render as `type="number"` (up/down arrows, letters are rejected). The `0` row should show `0`, not an empty input.'}}}},J=[`Default`,`NumbersAndBooleans`,`MissingCells`,`Empty`,`CustomStyle`,`ManyRows`,`Narrow`,`ReadOnly`,`EditWithoutDelete`,`TextInputs`,`NumberInputs`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: []
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    jsonSchema: {
      cols: taskColumns
    },
    jsonData: {
      rows: taskRows
    },
    handleCellEdit: undefined,
    resetQueryCellEdit: undefined,
    handelCellDel: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`handleCellEdit\` the table is read-only: cells are not clickable and no edit dialog is rendered.'
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
    handelCellDel: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`handelCellDel\` the edit dialog has no Delete button and Save stays aligned to the right.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}Y();export{V as CustomStyle,L as Default,G as EditWithoutDelete,B as Empty,H as ManyRows,z as MissingCells,U as Narrow,q as NumberInputs,R as NumbersAndBooleans,W as ReadOnly,K as TextInputs,J as __namedExportsOrder,M as default};